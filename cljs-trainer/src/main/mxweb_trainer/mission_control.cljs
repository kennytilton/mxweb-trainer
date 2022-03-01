(ns mxweb-trainer.mission-control
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset! mswap!
                     mxi-find mxu-find-name fmu] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section figure audio h1 img input p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.welcome :as welcome]
            [mxweb-trainer.mission.its-just-html :as just]
            [mxweb-trainer.mission.cells-intro :as cells]
            [mxweb-trainer.mission.no-islands :as no-islands]))

;; todo routing

(defn mission-control-bar []
  (div {:style (str "display:flex"
                 ";flex-direction:row"
                 ";background:red"
                 ";width:100%"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content: space-around"
                 ";padding:3px")}
    (let [training (fmu :training)
          {:keys [source wiki-url] :as mission} (mget training :current-mission)]
      ;; todo styling for the toolbar elements
      [(button {:disabled (cF (not (pos? (mget training :mission-idx))))
                :onclick  (fn [e] (mswap! training :mission-idx dec))}
         "back")
       (div (when source
              (a {:target "_blank"
                  :href   (str "https://github.com/kennytilton/mxweb-trainer/blob/main/cljs-trainer/src/main/mxweb_trainer/mission/" source ".cljs")}
                "Source")))
       (span {:style "color:white"} "Mission Control")
       (div (when wiki-url
              (a {:target "_blank"
                  :href   wiki-url} "Help")))
       (button {:disabled (cF (not (< (mget training :mission-idx)
                                     (dec (count (mget training :missions))))))
                :onclick  (fn [e] (mswap! training :mission-idx inc))}
         "next")])))

(defn training-root []
  (div
    {:name  :training
     :style (str "display:flex"
              ";flex-direction:column"
              ";align-items:center"
              ";align-content:center"
              ";justify-content:center"
              ";padding:9px"
              ";background:pink")}
    {:missions        [(welcome/mission-factory)
                       (just/mission-factory)
                       (cells/mission-factory)
                       (no-islands/mission-factory)]
     :mission-idx     (cI 3)                                ;;todo save in local storage
     :current-mission (cF (nth (mget me :missions)
                            (mget me :mission-idx)))}

    (img {:src   "/images/mx-banner-slim.jpg"
          :alt   "The Matrix logo, a cell culture Petri dish"
          :style "max-width:100%;max-height:100%"})

    (mission-control-bar)

    (div {:style "color:black"} {}
      (let [m (mget (fmu :training) :current-mission)]
        [(p {:style "font-size:1.5em;text-align:center"}
           (:objective m))

         ((:content m))]))))



