(ns mxweb-trainer.mission-control
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset! mswap!
                     mxi-find mxu-find-name fmu] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section figure audio h1 h2 h3 img input p a b span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [tiltontec.mxweb.style :refer [make-css-inline style-string]]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m000-welcome :as welcome]
            [mxweb-trainer.mission.m005-just-html.core :as just]
            [mxweb-trainer.mission.m010-cells-intro.core :as cells]
            [mxweb-trainer.mission.m012-not-just-css.core :as not-just-css]
            [mxweb-trainer.mission.m015-no-islands.core :as no-islands]
            [mxweb-trainer.mission.m020-kids-dyno.core :as dyno-k]
            [mxweb-trainer.mission.m025-review.core :as review-1]
            [mxweb-trainer.mission.m022-multi-matrix.core :as multi-mx]
            [mxweb-trainer.app-debugger :as mx-debug]))

(defn mission-control-bar []
  (div {:style (style/row-center
                 :background :red
                 :width "100%"
                 :justify-content :space-around
                 :padding "3px")}
    (let [training (fmu :training)
          {:keys [source wiki-url] :as mission} (mget training :current-mission)]
      ;; todo styling for the toolbar elements
      [(div (when source
              (a {:target "_blank"
                  :href   (str "https://github.com/kennytilton/mxweb-trainer/blob/main/cljs-trainer/src/main/mxweb_trainer/mission/" source ".cljs")}
                "Source")))
       (b {:style "color:white"} "Mission Control")
       (div (when wiki-url
              (a {:target "_blank"
                  :href   wiki-url} "Help")))
       (mx-debug/panel-install)])))

(defn- mission-stack []
  (div {:style (style/column-center :justify-content "top")}
    (b "Missions")
    (map (fn [m]
           (button {:style   (str "margin:9px;width:96px;border:none;background:khaki")
                    :onclick (fn [e] (mset! (md/fasc :training me) :current-mission-id
                                       (:id m)))}
             (:tab-label m (name (:id m)))))
      (mget (md/fasc :training me) :missions))))

(defn- mission-workspace []
  (div {:style (style/column-left :width "100%")}
    (mission-control-bar)
    (div {:style "color:black"}
      {:name :msn-socket}
      (let [m (mget (md/fasc :training me) :current-mission)]
        [(h2 {:style "font-size:1.5em;text-align:center"}
           (:title m))
         (p {:style "font-size:1em;text-align:center"}
           (:objective m))
         ((:content m))]))))

(defn training-root []
  (div
    {:name  :training
     :style (style/column-left :background :linen)}
    ;; todo routing
    {:missions           [(welcome/mission-factory)         ;; :trainer-welcome
                          (just/mission-factory)            ;; :just-html
                          (cells/mission-factory)           ;; :cells-intro
                          (not-just-css/mission-factory)    ;; :not-just-css
                          (no-islands/mission-factory)      ;; :no-island
                          (dyno-k/mission-factory)          ;; :dyno-kids
                          (multi-mx/mission-factory)        ;; :multi-mx
                          (review-1/mission-factory)        ;; :dyno-kids-history
                          ]
     :current-mission-id (cI :multi-mx)                  ;;todo save in local storage
     :current-mission    (cF (let [mid (mget me :current-mission-id)]
                               (some (fn [m] (when (= mid (:id m)) m))
                                 (mget me :missions))))}

    (div {:style (style/column-center
                   :width "100%"
                   :background "maroon")}
      (img {:src   "/images/mx-banner-slim-72.jpg"
            :alt   "The Matrix logo, a cell culture Petri dish"
            :style "height:96px"}))

    #_ {:display        :flex
        :flex-direction :row
        :align-items    :top
        :align-content  :top}
    (div {:style (style/row-top)
          #_ (str "display:flex"
                   ";flex-direction:row"
                   ";align-items:top"
                   ;; ";background:yellow"
                   ";align-content:top"
                   ";padding:0px")}
      (mission-stack)
      (mission-workspace))))



