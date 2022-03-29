(ns mxweb-trainer.mission.m012-not-just-css.mechanism
  ; --- different ways of apply CSS ---
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

(defn reactive-style-string []
  ;; We can stick to CSS style strings, but add reactivity by building them up based on other state.
  ;; This is a little silly, because the only reactivity is watching the 'tick' boolean, but any app
  ;; state would work in a real app where styling have to be responsive.
  (p {:style (cF (str "font-size:32px;line-height:1em;padding:9px;background:white;"
                   (if (even? (.getSeconds (js/Date.)))
                     "font-style:italic;" "font-style:normal;")
                   (when-not (mget (mx-par me) :tick)
                     ;; wait until first tick to appear
                     ";visibility:hidden")))}
    ; ...or still a straight style string, but re-built reactively
    "Reactive style string"))

(defn reactive-class-selection []
  ;; Mind you, we can still leverage CSS classes, but now we can do so declaratively/reactively
  (div {:class (cF (let [_ (mget (mx-par me) :tick)]
                     (conj [:col-row-switcher]
                       ;; this next is brittle. relies on interval not being an even number of seconds!
                       ;; so if you change the interval ^^^ from 3 secs to two, not good!
                       (if (even? (.getSeconds (js/Date.)))
                         "col" "row"))))}
    (span "Toggling the&nbsp;")
    (span "class attribute.")))

(defn reactive-map-converted-to-style-string []
  ;; Editing/building style strings is clumsy and error prone.
  ;; Here we code a map and convert to a style string with the utility 'style-string'.
  ;; Note that the map varies reactively.
  (span {:style (cF (let [_ (mget (mx-par me) :tick)]
                      (style-string
                        (merge {:font-size   "18px"
                                :line-height "1em"
                                :padding "6px"
                                :background :white}
                          (if (even? (.getSeconds (js/Date.)))
                            {:color      :black}
                            {:color      :gray})))))}
    "Reactive style map -> style-string"))

(defn mxweb-style-object-with-reactive-properties []
  ;; We take the granularity to another level with an msWeb built-in style object so
  ;; individual style props can have their own derivations, reactive or not.
  ;; We get a small efficiency win by having mxWeb update just the changed style properties.
  ;; More helpful is making explicit derivations recognizable.
  (p {:style (cF1 (let [tag-par (mx-par me)]
                    (make-css-inline me
                      :font-size "18px"
                      :line-height "1.5em"
                      :padding "6px"
                      :background :white
                      :color (cF (let [tick (mget tag-par :tick)]
                                   (if (odd? (.getSeconds (js/Date.)))
                                     :black :gray))))))}
    ; the mxWeb :mxweb.css/css type supports reactive formulas for individual style sub-properties.
    "mxWeb CSS Style Object, separate reactive style properties"))