(ns mxweb-trainer.mission.m012-not-just-css.core
  (:require [clojure.string :as str]
            [cljs.pprint :as pp]
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
                 :background :linen)}
    {:tick   (cI false :ephemeral? true)
     :ticker (let [jid (atom nil)]
               ;; todo extend mxWeb so we can specify not-to-be cleanups, perhaps by formula!
               (cFonce (reset! jid (js/setInterval
                                     #(if (mdead? me)
                                        (when-let [id @jid]
                                          (js/clearInterval id)
                                          (reset! jid nil))
                                        (mset! me :tick true))
                                     3000))))}

    (div {:class (cF (let [_ (mget (mx-par me) :tick)]
                       (conj [:col-row-switcher]
                         ;; this next is brittle. relies on interval not being an even number of seconds!
                         (if (even? (.getSeconds (js/Date.)))
                           "col" "row"))))}
        (span "Hi,&nbsp;")
        (span "Mom!"))

    #_#_#_#_ (p {:style "background:white; color:dark-gray; font-size:36px; line-height: 1.2em; padding:3px"}
      ; straight CSS string style
      "CSS Unleashed")

    (p {:style (cF (str "background:cyan;font-size:32px;line-height:1em;padding:9px;"
                     (if (even? (.getSeconds (js/Date.)))
                       "color:blue;" "color:yellow;")
                     (when-not (mget (mx-par me) :tick)
                       ";visibility:hidden")))}
      ; still a straight style string, but re-built reactivle
      "Reactive style string")

    (p {:style (cF (do (mget (mx-par me) :tick)
                       (style-string
                         (merge {:font-size   "32px"
                                 :line-height "1.5em"}
                           (if (even? (.getSeconds (js/Date.)))
                             {:background :black
                              :color      :red}
                             {:background :red
                              :color      :white})))))}
      ; maps are more readable and less likely to get CSS syntax botched
      "Reactive style map -> style-string")

    (p {:style (cF1 (let [tag-par (mx-par me)]
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
      ; reactive formulas specific to individual style sub-properties
      "mxWeb CSS Style Object, separate reactive style properties")

    (timer/clock 100
      ; finally, one style formula dependent on another formula's property
      (cFonce (prn :building-clock-css!!!!!)
          (make-css-inline me
            :font-size "48px"
            :line-height "1.5em"
            :padding "6px"
            :background (cF (let [tt (mget (:tag @me) :tick-time)
                                  fake-secs (Math/floor (/ (.getTime tt) 100)) ;; tenths of a sec actually
                                  degrees (mod fake-secs 360)
                                  sin (Math/sin (/ degrees (/ 180 Math/PI)))
                                  gray (Math/abs (Math/floor (* sin 255)))
                                  xgray (pp/cl-format nil "~2,'0X" gray)
                                  ]
                              (apply str "#" (repeat 3 xgray))))

            ; --- your code here -------------------------------
            ;  recall:
            ;    - any formula starts with the :mxweb.css/css object as "me"
            ;    - the background will be in the form "#XXXXXX", eg "#FF00000" for red except
            ;    - we are constructing grays, so each "XX" component will be the same.
            ;    - we can use hex-string-to-int to convert eg "FF" to 255
            :color (cF (let [bkg (mget me :background)
                             bkg-gray-xx (subs bkg 1 3)
                             gray (style/hex-string-to-int bkg-gray-xx)
                             igray (- 255 gray)
                             xigray (pp/cl-format nil "~2,'0X" igray)]
                         (apply str "#" (repeat 3 xigray))))
            )))))


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
