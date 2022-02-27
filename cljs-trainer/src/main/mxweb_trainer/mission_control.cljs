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
            [mxweb-trainer.mission.its-just-html :as just]
            [mxweb-trainer.mission.cells-intro :as cells]))

(comment
  ;; mission format
  {
   :id          :some-keyword
   :objective   "text describing what mission teaches"
   :source-path "mxweb-trainer.mission/just-html"
   :content     function-that-generates-mxDom
   }
  )

(defn training-root []
  (div {:name  :training
        :style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    {:missions        [(just/mission-factory)
                       (cells/mission-factory)]
     :mission-idx     (cI 1)  ;;todo save in local storage
     :current-mission (cF (prn :missions!!!!!! (mget me :missions))
                        (nth (mget me :missions)
                          (mget me :mission-idx)))}
    (img {:src   "/images/mx-banner-red.jpg"
          :alt   "The Matrix logo, a cell culture Petri dish"
          :style "max-width:100%;max-height:100%"})
    (div {:style (str "display:flex"
                   ";flex-direction:row"
                   ";background:red"
                   ";width:100%"
                   ";align-items:center"
                   ";align-content:center"
                   ";justify-content: space-around"
                   ";padding:3px")}
      (button {:disabled (cF (not (pos? (mget (fmu :training) :mission-idx))))
               :onclick  (fn [e] (mswap! (fmu :training) :mission-idx dec))}
        "back")
      (button "claim")
      (button {:disabled (cF (not (< (mget (fmu :training) :mission-idx)
                                    (dec (count (mget (fmu :training) :missions))))))
               :onclick  (fn [e] (mswap! (fmu :training) :mission-idx inc))}
        "next"))

    (div {}{}
      (let [m (mget (fmu :training) :current-mission)]
        [
          ((:content m))
          (p {:style "font-size:1.5em;text-align:center"}
            (:objective m))
          (p {:style "font-size:1em;text-align:center"}
            "(Mission instructions are on the mxWeb-Trainer Wiki "
            (a {:target "_blank"
                :href   (:wiki-url m)}
              "here")
            ".)")]))))



