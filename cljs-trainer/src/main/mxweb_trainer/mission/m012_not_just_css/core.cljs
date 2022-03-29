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
            [mxweb-trainer.reusable.style :as style]

            [mxweb-trainer.mission.m012-not-just-css.mechanism :as mech]))

;; todo with-tag-style macro
;; todo with-tag macro
;; todo mxweb tracing nil false true keyword [keywords] test

(defn sinusoidal-gray-hex-string []
  (cF (let [tt (mget (:tag @me) :tick-time)
            ;; we do not want to wait for real seconds to pass, so we speed
            ;; up time by treating tenths as seconds:
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
        (apply str "#" (repeat 3 xgray)))))

(defn not-just-css []
  (div {:style (style/column-center
                 :padding "6px"
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
    ; OK, it /is/ just CSS, tbh, but reactive CSS, making dynamic CSS just another part of the app.
    ;
    ; Below we work thru all the ways we can handle CSS /in place/, or co-located if you will.
    ; Longer examples are in the .mechanism NS

    ; We start with the null case: just specifying a convential style string:
    (p {:style "background:none; color:dark-gray; font-size:36px; line-height: 1.2em; padding:3px"}
      "CSS Unleashed")

    (mech/reactive-class-selection)
    (mech/reactive-style-string)
    (mech/reactive-map-converted-to-style-string)
    (mech/mxweb-style-object-with-reactive-properties)

    ; And here we are just showing off: one CSS property defined as a function of...
    ; well, that is your mission.
    (timer/clock 100
      ; finally, one style formula dependent on another formula's property
      (cFonce
        (make-css-inline me
          :font-size "48px"
          :line-height "1.5em"
          :padding "6px"
          :background (sinusoidal-gray-hex-string) ;; showing off again: big hairy rules separate nicely

          ; --- your code here -------------------------------
          ;  recall:
          ;    - any formula starts with the :mxweb.css/css object as "me"
          ;    - the background will be in the form "#XXXXXX", eg "#FF00000" for red, but...
          ;    - ...we are constructing grays, so each "XX" component will be the same.
          ;    - we can use hex-string-to-int to convert eg "FF" to 255
          ;  problem:
          ;    - the text disappears when the background changes to black because that is also the font color
          ;  your mission:
          ;    - adjust the `color` parameter as the `background` changes to prevent the text from disappearing
          :color :black
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
