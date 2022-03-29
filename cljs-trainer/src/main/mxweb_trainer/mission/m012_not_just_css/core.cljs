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
                                     5000))))}
    ;
    ; It /is/ just CSS, tbh, but reactive CSS, making dynamic CSS just another part of the app.
    ;
    ; Below we work thru all the ways we can handle CSS /in place/, or co-located if you will.
    ; We start with the null case: just specifying a convential style string:

    (p {:style "background:none; color:dark-gray; font-size:36px; line-height: 1.2em; padding:3px"}
      "CSS Unleashed")

    ;; Mind you, we can still leverage CSS classes, and now do so declaratively/reactively
    (div {:class (cF (let [_ (mget (mx-par me) :tick)]
                       (conj [:col-row-switcher]
                         ;; this next is brittle. relies on interval not being an even number of seconds!
                         ;; so if you change the interval ^^^ from 3 secs to two, not good!
                         (if (even? (.getSeconds (js/Date.)))
                           "col" "row"))))}
      (span "Hi,&nbsp;")
      (span "Mom!"))

    ;; We can stick to CSS style strings, but add reactivity by building them up based on other state.
    ;; This is a little silly, because the only reactivity is watching the 'tick' boolean, but any app
    ;; state would work in a real app where styling have to be responsive.
    (p {:style (cF (str "background:cyan;font-size:32px;line-height:1em;padding:9px;"
                     (if (even? (.getSeconds (js/Date.)))
                       "color:blue;" "color:yellow;")
                     (when-not (mget (mx-par me) :tick)
                       ";visibility:hidden")))}
      ; ...or still a straight style string, but re-built reactively
      "Reactive style string")

    ;; Editing/building style strings is clumsy and error prone.
    ;; Here we code a map and convert to a style string with the utility 'style-string'.
    ;; Note that the map varies reactively.
    (span {:style (cF (let [_ (mget (mx-par me) :tick)]
                     (style-string
                       (merge {:font-size   "18px"
                               :line-height "1em"
                               :padding "4px"}
                         (if (even? (.getSeconds (js/Date.)))
                           {:background :black
                            :color      :red}
                           {:background :red
                            :color      :white})))))}
      "Reactive style map -> style-string")

    ;; We take the granularity to another level with an msWeb built-in style object so
    ;; individual style props can have their own derivations, reactive or not.
    ;; We get a small efficiency win by having mxWeb update just the changed style properties.
    ;; More helpful is making explicit derivations recognizable.
    (p {:style (cF1 (let [tag-par (mx-par me)]
                      (make-css-inline me
                        :font-size "18px"
                        :line-height "1.5em"
                        :padding "3px"
                        :background (cF (let [secs (.getSeconds (js/Date.))
                                              tick (mget tag-par :tick)]
                                          (if (even? secs) :black :red)))
                        :color (cF (let [tick (mget tag-par :tick)]
                                     (if (even? (.getSeconds (js/Date.)))
                                       :white :black))))))}
      ; the mxWeb :mxweb.css/css type supports reactive formulas for individual style sub-properties.
      "mxWeb CSS Style Object, separate reactive style properties")

    ; And here we are just showing off: one CSS property defined as a function of...
    ; well, that is your mission.
    (timer/clock 100
      ; finally, one style formula dependent on another formula's property
      (cFonce
        (make-css-inline me
          :font-size "48px"
          :line-height "1.5em"
          :padding "6px"
          :background (cF (let [tt (mget (:tag @me) :tick-time)
                                ;; we do not want to wait for real seconds to pass, so we treat tenths as seconds:
                                fake-secs (Math/floor (/ (.getTime tt) 100))
                                ;; getTime is the epoch, and we get a cycling value 0 to 359 via mod
                                degrees (mod fake-secs 360)
                                ;; to get smooth transition from 359 to 0, we use the sin circle function
                                ;; on the degrees converted to radians
                                sin (Math/sin (/ degrees (/ 180 Math/PI)))
                                ;; and apply the sin to 255 to get our gray value
                                gray (Math/abs (Math/floor (* sin 255)))
                                ;; and convert to a hex string
                                xgray (pp/cl-format nil "~2,'0X" gray)]
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
   :source    "m012_not_just_css/core.cljs"
   :objective "The Mission: Reactive CSS co-located with your component."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/CSS-Unleashed"
   :content   not-just-css})

;;
;; ----------------------------------------------------------------
;;   Mission Instructions
;; ----------------------------------------------------------------
;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
