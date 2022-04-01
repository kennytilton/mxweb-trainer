(ns mxweb-trainer.mission.m022-callback-heaven.helper
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

(defn drug-name-to-lookup []
  (div {:class "color-input"}
    "Drug name: "
    (input {:name      :drug-name
            :style     {:margin-left "9px"
                        :padding     "6px"}
            :tag/type  "text"
            :value     (cI "")
            :autofocus true
            :onchange  (fn [e]
                         ;; we move the DOM target-value to the Matrix
                         (mset! (evt-mx e) :value (target-value e)))})))

;;; --- response subset ---------------------------------------------------
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