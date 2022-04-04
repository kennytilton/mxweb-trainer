(ns mxweb-trainer.mission.m022-callback-heaven.core
  (:require [clojure.string :as str]
            [cljs.pprint :as pp]
            [tiltontec.cell.core :refer-macros [cF cF+ cFonce] :refer [cI]]
            [tiltontec.cell.base :refer [unbound ia-type]]
            [tiltontec.cell.evaluate :refer [not-to-be]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 h3 audio img input figure p a b i span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [tiltontec.mxweb.html :refer [mxu-find-class]]
            [tiltontec.mxweb.style :refer [make-css-inline style-string]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m015-no-islands.extra
             :refer [target-toggle mx-tree render-data-tree] :as extra]
            [tiltontec.mxxhr.core
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]
            [mxweb-trainer.mission.m022-callback-heaven.helper :as helper]))

;;; -----------------------------------------------------------
;;; --- adverse events ----------------------------------------

(def ae-by-brand "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~(~a~)&limit=~d")

(defn result-digest [r]
  (let [p (:patient r)]
    {:received       (:receivedate r)
     :patient-age    (:patientonsetage p)
     :patient-weight (:patientweight p)
     :reactions      (map :reactionmeddrapt (get p :reaction))
     :drugs          (map :medicinalproduct (:drug p))
     }))

(defn build-ae-viewer [result]
  (span {:style {:margin-bottom "1em"}}
    (str/join ", " (take 10 (:reactions result)))))

(defn drug-name-lookup []
  ;; --- solution outline -----------------
  ;; - create a DIV with one custom property to "compute" an AJAX lookup:
  ;;    you can create /and/ send an XHR lookup of 5 max adverse events aspirin using
  (comment
    (make-xhr (pp/cl-format nil ae-by-brand
                (js/encodeURIComponent "aspirin") 5)
      {:send? true}))
  ;    ; - that ^^ returns a reactive Matrix model object with one reactive property `response`, where
  ;    ;   the actual response will be deposited via `mset!`, triggering dataflow to any dependents.
  ;    ; - you should arrange for that lookup to be sent each time the :drug-name widget takes on a new, non-blank :value
  (div {:style (style/column-center
                 :max-width "400px")}
    {:ae-lookup
     ;; -------------------------
     ;; --- Your code here #1 ---
     ;; -------------------------
     ;;
     ;; If the user enters a drug name, make a reactive proxy XHR which
     ;; automatically sends a real XHR without waiting:
     ;
     ;    (make-xhr (pp/cl-format nil ae-by-brand
     ;                         (js/encodeURIComponent DRUG-NAME) MAX-RESULT-COUNT)
     ;            {:send? true))
     ;
     ;; You need to supply the all-caps parameters. I use 5 for the count. Take the drug
     ;; name from the `value` property of input widget.
     ;;
     ;; That will create a reactive object with a `response` property that will start as
     ;; nil and be populated asynchronously when the response comes back.
     ;;
     (cF (let [drug-name (mget (fmu :drug-name) :value)]
           (when-not (str/blank? drug-name)
             (make-xhr (pp/cl-format nil ae-by-brand
                         (js/encodeURIComponent drug-name) 5)
               {:send? true}))))}

    ;; our next DIV parameter is any children we want to define.
    ;; with our async lookup defined ^^^, we will reactively await a full chain of lookup events:
    ;;  1. If the user has not entered a drug, do not yet show any result message;
    ;;  2. Once they enter a drug name, and before we get a response, display "Checking for AEs" or sth;
    ;;  3. Once we get a response:
    ;;    a. If no AEs are found, say so
    ;;    b. IF AEs are found, list them

    ;; -------------------------
    ;; --- Your code here #2 ---
    ;; -------------------------

    (if-let [ae-response (when-let [lookup (mget me :ae-lookup)]
                           (xhr-response lookup))]
      ;; ...before building any DIV content to display the results.
      [(h3 {:content (cF (when ae-response
                           (if (= 200 (:status ae-response))
                             "Adverse Events"
                             "No adverse events reported to FDA")))})
       ;; ----------------------
       ;; --- Your code here ---
       ;; ----------------------
       ;; emulate the h3 code ^^ to conditionally generate a DIV to minimally display
       ;; the results of any successful lookup. We provide a display view generator below.
       ;; -- Until the response is received, display a message such as "Searching...".
       ;; -- ...but do not display that until the XHR has been sent!
       ;; -- If the :status of the response is not 200, announce no AEs were found.
       ;; -- If 200, display each AE in a column, using provided (build-ae-viewer AE) to
       ;;    generate the view components. Include the OpenFDA disclaimer, which
       ;;    can be retrieved from the response with `(get-in RESPONSE [:body :meta :disclaimer])`
       ;;
       ;; Some tips:
       ;; - retrieve all adverse events with `(get-in RESPONSE [:body :results])`
       ;; - generate an adverse event digest with fn `result-digest`. See code above.
       ;; - render a digest with `(build-ae-viewer DIGEST)`
       ;;
       #_"Response if status == 200"
       (when (= 200 (:status ae-response))
         (div {:style (style/column-left)}
           (i {:style {:margin-bottom "1em"}}
             (str "DISCLAIMER: " (get-in ae-response [:body :meta :disclaimer])))
           (mapv build-ae-viewer
             (map result-digest (get-in ae-response [:body :results])))))]
      (when (mget me :ae-lookup) ;; (not (str/blank? (mget (fmu :drug-name) :value)))
        "Checking...checking..."))))

(defn callback-heaven
  []
  (div {:style (style/column-center :background "#fff" :padding "9px" :gap "1em")}
    (span {:style {:font-size "2em"}} "OpenFDA Adverse Event Lookup")
    (helper/drug-name-to-lookup)                            ;; just an input widget named :ae-lookup
    (drug-name-lookup)))

(defn mission-factory []
  {:id        :callback-heaven
   :tab-label "Callback Heaven"
   :source    "m022_callback_heaven/core.cljs"
   :title     "Callback Heaven"
   :objective "Mission: Graceful asynchronous XHR"
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Callback-Heaven"
   :content   callback-heaven})