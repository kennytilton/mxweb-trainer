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



(defn mission-control-bar []
  (div {:style (str "display:flex"
                 ";flex-direction:row"
                 ";background:red"
                 ";width:100%"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content: space-around"
                 ";padding:3px")}
    (let [{:keys [source wiki-url] :as mission} (mget (fmu :training) :current-mission)]
      (prn :bar-sees!!! mission wiki-url)
      [(button {:disabled (cF (not (pos? (mget (fmu :training) :mission-idx))))
                :onclick  (fn [e] (mswap! (fmu :training) :mission-idx dec))}
         "back")
       (if source
         (a {:target "_blank"
             :href   source} "Source code")
         (span ""))
       (span {:style "color:white"} "Mission Control")
       (if wiki-url
         (a {:target "_blank"
             :href   wiki-url} "Wiki Help")
         (span ""))

       (button {:disabled (cF (not (< (mget (fmu :training) :mission-idx)
                                     (dec (count (mget (fmu :training) :missions))))))
                :onclick  (fn [e] (mswap! (fmu :training) :mission-idx inc))}
         "next")])))

(defn training-root []
  (div {:name  :training
        :style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    {:missions        [(welcome/mission-factory)
                       (just/mission-factory)
                       (cells/mission-factory)]
     :mission-idx     (cI 0)                                ;;todo save in local storage
     :current-mission (cF (prn :missions!!!!!! (mget me :missions))
                        (nth (mget me :missions)
                          (mget me :mission-idx)))}

    (img {:src      "/images/mx-banner-slim.jpg"
          :wiki-url "https://github.com/kennytilton/mxweb-trainer/wiki"
          :alt      "The Matrix logo, a cell culture Petri dish"
          :style    "max-width:100%;max-height:100%"})
    (mission-control-bar)

    (div {} {}
      (let [m (mget (fmu :training) :current-mission)]

        [
         (p {:style "font-size:1.5em;text-align:center"}
           (:objective m))

         ((:content m))]))))



