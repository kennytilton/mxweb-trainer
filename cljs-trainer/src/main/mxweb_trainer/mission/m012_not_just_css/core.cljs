(ns mxweb-trainer.mission.m012-not-just-css.core
  (:require [clojure.string :as str]
            [tiltontec.cell.base :refer [mdead?]]
            [tiltontec.cell.core :refer-macros [cF cFonce cFn cF1] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu fm! fmo] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input figure p a span div button br]
             :as mxw]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]

            [tiltontec.mxweb.html :refer [tag-dom-create]]
            [tiltontec.mxweb.style :refer [make-css-inline style-string]]

            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.reusable.style :as style]))

;; todo with-tag-style macro
;; todo with-tag macro
;; todo mxweb tracing nil false true keyword [keywords] test
(defn not-just-css []
  (div {:style (style/column-center
                 :padding "9px"
                 :background :pink)}
    {:tick   (cI false :ephemeral? true)
     :ticker (let [jid (atom nil)]
               ;; todo wrap all this up as a new mx-interval
               (cFonce (reset! jid (js/setInterval
                                     #(if (mdead? me)
                                        (when-let [id @jid]
                                          (js/clearInterval id)
                                          (reset! jid nil))
                                        (mset! me :tick true))
                                     3000))))}
    (timer/clock 100)
    (p {:style "color:gray; font-size:24px; line-height: 1.2em;"}
      "CSS Unleashed")

    #_ (p {:style (cF (when (mget (mx-par me) :tick)
                     (str (if (even? (.getSeconds (js/Date.)))
                            "color:blue;" "color:red;")
                       "background:cyan;font-size:32px;line-height:2em;")))}
      "Reactive style string")

    #_ (p {:style (cF (do (mget (mx-par me) :tick)
                       (style-string
                         (merge {:font-size   "32px"
                                 :line-height "1.5em"}
                           (if (even? (.getSeconds (js/Date.)))
                             {:background :black
                              :color      :red}
                             {:background :red
                              :color      :white})))))}
      "Reactive style map -> style-string")

    #_ (p {:style (cF1 (let [tag-par (mx-par me)]
                      (make-css-inline me
                        :font-size (cF (prn :fontsize-cache cache)
                                     "18px")
                        :line-height "1.5em"
                        :background (cF (let [secs (.getSeconds (js/Date.))
                                              tick (mget tag-par :tick)]
                                          (if (even? secs) :black :red)))
                        :color (cF (let [tick (mget tag-par :tick)]
                                     (if (even? (.getSeconds (js/Date.)))
                                       :white :black))))))}
      "mxWeb CSS Style Object, separate reactive style properties")))


(defn mission-factory []
  {:id        :not-just-css
   :tab-label "It's Not Just CSS"
   :source    "css_unleashed"
   :objective "The Mission: Reactive CSS."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/CSS-Unleashed"
   :content   not-just-css})

;;
;; ----------------------------------------------------------------
;;   Mission Instructions
;; ----------------------------------------------------------------
;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
