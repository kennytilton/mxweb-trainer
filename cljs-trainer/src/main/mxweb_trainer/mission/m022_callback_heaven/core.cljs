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

(def ae-by-brand "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~(~a~)&limit=3")


(defn drug-to-lookup []
  (div {:class "color-input"}
    "Spell me: "
    (input {:name     :drug-name
            :style    {:margin-left "9px" :padding "6px"}
            :tag/type "text"
            :value    (cI "")
            :oninput  (fn [e]
                        ;; we want to display the faux spelling dynamically even before
                        ;; the user enters the word, so we propagate on the `input` event, which
                        ;; fires on every edit action.
                        #_ ;; on the fly lookup
                        (mset! (evt-mx e)
                          :value (target-value e)))
            ;
            ; Mission Part II: --- your code here ---
            ;  - an onchange handler to check for new words and if so....
            ;  - conj it onto a new :entered-words vector
            :onchange (fn [e]
                        (mset! (evt-mx e) :value (target-value e)))}
      {:ae (cF (let [drug-name (mget me :value)]
                 ;; (when (mget (mxu-find-class me "ae-autocheck") :on?)
                 (when-not (str/blank? drug-name)
                   (prn :url (pp/cl-format nil ae-by-brand
                               (js/encodeURIComponent drug-name)))
                   (make-xhr (pp/cl-format nil ae-by-brand
                               (js/encodeURIComponent drug-name))
                     {:name name :send? true}))))
       :ae-response (cF+ [:obs (fn-obs
                                 (when new
                                   (println :new-ae-response!!! new)))]
                     (when-let [lookup (mget me :ae)]
                       (prn :wait-on-lookup!!!!!!!! lookup)
                       (xhr-response lookup)))
       })))

#_
(defn ae-explorer [rx]
  (button {:class   "li-show"
           :style   (cF (str "display:"
                          (or (when-let [xhr (mget me :ae)]
                                (prn :bam-got-xhr!!!!!!!! xhr)
                                (let [aes (xhr-response xhr)]
                                  (when (= 200 (:status aes))
                                    (prn :aes-found-200! aes)
                                    "block")))
                            "none")))
           :onclick #(js/alert "Feature not yet implemented.")}

    {:ae (cF+ [:obs (fn-obs
                      (when-not (or (= old unbound) (nil? old))
                        (not-to-be old))
                      (println :new-ae? new))]
           (when (mget (mxu-find-class me "ae-autocheck") :on?)
             (prn :auto-check-on!!!!!!!!)
             (println :ae-auto-check! (rx-title rx))
             (println :url (pp/cl-format nil ae-by-brand
                             (js/encodeURIComponent (rx-title rx))))
             (make-xhr (pp/cl-format nil ae-by-brand
                         (js/encodeURIComponent (rx-title rx)))
               {:name name :send? true})))
     :aeresponse (cF+ [:obs (fn-obs
                              (println :newresponse new))]
                   (when-let [lookup (mget me :ae)]
                     (prn :lookup!!!!!!!! lookup)
                     (xhr-response lookup)))
     }

    (span {:style "font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"}
      "View Adverse Events")))

(defn callback-heaven
  []
  (div {:style (style/mission-style)} {}
    (div {:style (str style/column-center)}
      (drug-to-lookup))))

(defn mission-factory []
  {:id        :callback-heaven
   :tab-label "Callback Heaven"
   :source    "m022_callback_heaven/core.cljs"
   :title     "Dynamic Kids"
   :objective "Mission: Graceful synchronous XHR"
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Callback-Heaven"
   :content   callback-heaven})