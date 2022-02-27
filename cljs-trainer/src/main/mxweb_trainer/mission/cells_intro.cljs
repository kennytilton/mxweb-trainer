(ns mxweb-trainer.mission.cells-intro
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]
            ))


(declare counter-cells)

(defn mission-factory []
  {:id :cells-intro
   :objective "Next we do the \"Hello, world!\" of Matrix reactivity."
   :source-path "mxweb-trainer.mission/cells-intro"
   :content counter-cells})

(defn counter-cells []
  (div {:style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    (span ;; {:style "font-size:3em"}
      "Hello, Cells")))


    ;; (span "Click the time to have it updated.")

    #_ (span {:style   (str "color:red"
                     ";font-size: 64px;"
                     ";line-height: 1.2em;")
          :onclick (fn [e] (mset! (evt-mx e) :time-now (js/Date.)))
          :content "test" #_ (cF (-> (mget me :time-now)
                         .toTimeString
                         (str/split " ")
                         first))}
      ;; The second map is for custom properties that DIVs know nothing about.
      ;; With these, we can get more re-use out of DIVs, because we do not need
      ;; to get into OO issues forever subclassing.
      {:time-now   (cI (js/Date.))})

    #_ (p {:onclick (fn [e] (md/mswap! (evt-mx e) :counter inc))}
      {:counter (cI 0)}
      (str "Clicked " (mget me :counter) " times."))


    ;;
    ;; ----------------------------------------------------------------
    ;;   Mission Instructions
    ;; ----------------------------------------------------------------
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
