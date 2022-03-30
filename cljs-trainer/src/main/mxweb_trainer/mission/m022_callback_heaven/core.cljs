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
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]))

;;; -----------------------------------------------------------
;;; --- adverse events ----------------------------------------

(defn de-whitespace [s]
  (str/replace s #"\s" ""))

(def ae-by-brand "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~(~a~)&limit=~d")

;[:patient
;   {:patientonsetage "62",
;    :patientonsetageunit "801",
;    :patientweight "66.67",
;    :patientsex "2",
;    :reaction
;    [{:reactionmeddraversionpt "17.0",
;      :reactionmeddrapt "Nausea",
;      :reactionoutcome "1"}
;     {:reactionmeddraversionpt "17.0",
;      :reactionmeddrapt "Chills",
;      :reactionoutcome "2"}
;     {:reactionmeddraversionpt "17.0",
;      :reactionmeddrapt "Abdominal pain",
;      :reactionoutcome "2"}
;     {:reactionmeddraversionpt "17.0",
;      :reactionmeddrapt "Headache",
;      :reactionoutcome "2"}],
;    :drug
;    [{:drugstartdate "20130308",
;      :drugstructuredosageunit "003",
;      :drugstructuredosagenumb "20",
;      :actiondrug "5",
;      :medicinalproduct "JAKAFI",
;      :drugcharacterization "1",
;      :drugadministrationroute "048",
;      :openfda xx]]

(defn result-digest [r]
  (let [p (:patient r)]
    {:received       (:receivedate r)
     :patient-age    (:patientonsetage p)
     :patient-weight (:patientweight p)
     :reactions      (map :reactionmeddrapt (get p :reaction))
     :drugs          (map :medicinalproduct (:drug p))
     }))

(defn drug-name-to-lookup []
  (div {:class "color-input"}
    "Drug name: "
    (input {:name      :drug-name
            :style     {:margin-left "9px"
                        :padding     "6px"}
            :tag/type  "text"
            :value     (cI "")
            :autofocus true
            #_#_:oninput
                ;; enable this for continuous lookup.
                ;; but then ^^ we should look at cancelling "in-flight" XHRs
                (fn [e]
                  (mset! (evt-mx e)
                    :value (target-value e)))
            :onchange  (fn [e]
                         ;; we move the DOM target-value to the Matrix
                         (mset! (evt-mx e) :value (target-value e)))}

      ;; --- solution outline -----------------
      ;; - create one custom property to "compute" an AJAX lookup
      ;    ; - you can create /and/ send an XHR lookup of 5 max adverse events aspirin using
      ;    ;     (make-xhr (pp/cl-format nil ae-by-brand
      ;    ;                  (js/encodeURIComponent "aspirin") 5)
      ;    ;        {:name "aspirin" :send? true})
      ;    ; - that ^^ returns a reactive Matrix model object with one reactive property `response`, where
      ;    ;   the actual response will be deposited via `mset!`, triggering dataflow to any dependents.
      ;    ; - you should arrange for that lookup to be sent each time the :drug-name widget takes on a new :value
      ;; - create a second custom property to hold the parse response once it is received
      ;    ; -

      {:ae-lookup                                           ;; tips:
                    (cF (let [drug-name (mget me :value)]
                          ;; (when (mget (mxu-find-class me "ae-autocheck") :on?)
                          (when-not (str/blank? drug-name)
                            #_(prn :ae-lookup-url (pp/cl-format nil ae-by-brand
                                                    (js/encodeURIComponent drug-name) 5))
                            (make-xhr (pp/cl-format nil ae-by-brand
                                        (js/encodeURIComponent drug-name) 5)
                              {:name drug-name :send? true}))))
       :ae-response (cF+ [:obs
                          ;; `fn-obs` expands to (fn [~'slot ~'me ~'new ~'old ~'c]...]...
                          ;; so we can look around quite a bit, including the internals `cell` object
                          ;; that mediates this slot of this instance.
                          ;; We used this observer in anger while developing this exercise to sort out
                          ;; the structure of the service responses.
                          (fn-obs
                            (when new
                              (binding [*print-level* 4]
                                (pp/pprint [:results (map result-digest (get-in new [:body :results]))]))))]
                      ;; todo have mget insist on property existing, or make an mget! version
                      (when-let [lookup (mget me :ae-lookup)]
                        (xhr-response lookup)))})))

(defn build-ae-viewer [result]
  (span {:style {:margin-bottom "1em"}}
    (str/join ", " (:reactions result))))

(defn callback-heaven
  []
  (div {:style (style/column-center :background "#fff" :padding "9px" :gap "1em")}
    (span {:style {:font-size "2em"}} "Bogus Adverse Event Lookup Tool")

    (drug-name-to-lookup)

    (div {:style (style/column-center
                   :max-width "400px")}
      (let [ae-response (mget (fmu :drug-name) :ae-response)]
        [(h3 {:content (cF (when ae-response
                             (if (= 200 (:status ae-response))
                               "Adverse Events"
                               "No adverse events reported to NIH")))})
         ;;; --- your code here --------------------------------------
         ;;; emulate the h3 code ^^ to conditionally generate DOM to minimally display
         ;;; the results of any successful lookup. Some tips:
         ;;; - retrieve all adverse events with `(get-in ae-response [:body :results])`
         ;;; - extract an adverse event digest with fn `result-digest`.
         (when ae-response
           (div {:style (style/column-left)}
             (i {:style {:margin-bottom "1em"}}
               "Disclaimer: Do <i>not</i> let results scare you. They are misleading!")
             (when (= 200 (:status ae-response))
               (mapv build-ae-viewer
                 (map result-digest (get-in ae-response [:body :results]))))))]))))

(defn mission-factory []
  {:id        :callback-heaven
   :tab-label "Callback Heaven"
   :source    "m022_callback_heaven/core.cljs"
   :title     "Callback Heaven"
   :objective "Mission: Graceful asynchronous XHR"
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Callback-Heaven"
   :content   callback-heaven})