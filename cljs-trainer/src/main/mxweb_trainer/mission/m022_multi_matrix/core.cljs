(ns mxweb-trainer.mission.m022-multi-matrix.core
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency] :as cells]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 h3 img input figure p a b span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.mission.m015-no-islands.extra
             :refer [target-toggle mx-tree render-data-tree] :as extra]))

(defn word-to-spell []
  (div {:id    :word-to-spell
        :class "color-input"}
    "Spell me: "
    (input {:name     :word-to-spell
            :tag/type "text"
            :value    (cI "abc"
                        :obs (fn [slot me newv oldv c]
                               (prn :word-to-spell-is-now!!! newv)))
            :oninput  (fn [e]
                        (mset! (evt-mx e)
                          :value (target-value e)))
            ;
            ; Mission Part II: --- your code here ---
            ;  - an onchange handler to check for new words and if so....
            ;  - conj it onto a new :entered-words vector
            :onchange (fn [e]
                        (let [me (evt-mx e)
                              new-word (target-value e)]
                          (when-not (or (str/blank? new-word)
                                      (some #{new-word} (mget me :entered-words)))
                            (md/mswap! me :entered-words conj new-word))))}
      {:entered-words (cI nil :obs (fn [slot me newv oldv c]
                                     (prn :entered-words!!!!! newv)))})))

(defn word-spelling []
  (div {:style (style/column-center :padding "6px")}
    (span {:content (cF (let [w (mget (fmu :word-to-spell) :value)]
                          (if (str/blank? w)
                            "Waiting for you to type sth ^^^."
                            (str "The word \"" w "\"&nbspis spelled&nbsp...<i>thinking</i>..."))))})
    (div {:style (cF (str style/row-center ";padding:6px" (mget me :xstyle)))}
      {:name :spelling
       :xstyle (cI ";background:cyan")}
      (let [w (mget (fmu :word-to-spell) :value)]
        (map (fn [c] (span {:style "font-size:2em; margin:3px"}
                       (str c))) (interpose "-" w))))))

(defn dyno-kids
  []
  (div {:id    :dyno-kids
        :style (style/mission-style)} {}
    (div {:style (str style/column-center)}
      (word-to-spell)
      ; -- Mission Part 1 --------------------------------------
      (word-spelling))))

(defn mission-factory []
  {:id        :multi-mx
   :tab-label "MX Multiverse"
   :source    "m022_multi_matrix"
   :title     "MX Multi"
   :objective "Stress testing multiple MXes. Click \"Debug\" in toolbar to add a separate MX faux debugger."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/MX-Multiverse"
   :content   dyno-kids})