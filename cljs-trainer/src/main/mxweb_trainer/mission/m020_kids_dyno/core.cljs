(ns mxweb-trainer.mission.m020-kids-dyno.core
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 h3 audio img input figure p a b i span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m015-no-islands.extra
             :refer [target-toggle mx-tree render-data-tree] :as extra]))

(defn word-to-spell []
  (div {:class "color-input"}
    "Spell me: "
    (input {:name     :word-to-spell
            :style    {:margin-left "9px" :padding "6px"}
            :tag/type "text"
            :value    (cI "booya!"
                        ;; for not particular reason, we include a sneak preview of
                        ;; the Matrix observer mechanism for state change side effects
                        :obs (fn [slot me newv oldv c]
                               (prn :word-to-spell-is-now!!! newv)))
            :oninput  (fn [e]
                        ;; we want to display the faux spelling dynamically even before
                        ;; the user enters the word, so we propagate on the `input` event, which
                        ;; fires on every edit action.
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
      {:entered-words (cI nil
                        :obs (fn [slot me newv oldv c]
                               ;; again no reason for this observer, except perhaps as
                               ;; a temporary testing aid so one can check the 'onchange' is working
                               ;; note that this file fire also if we implement deletion in the
                               ;; second part of Mission II
                               (prn :entered-words!!!!! newv)))})))

;;; we like to read source top-down
(declare word-spelling word-history)

(defn dyno-kids
  ;
  ; mxWeb creates the illusion of coding HTML, including how
  ; the children of tags are simply listed inside a tag, and
  ; be either other tags or simple strings.
  ;
  ; mxWeb takes the flexibility of HTML further and allows us
  ; to generate vectors, nested vectors, and nils under a tag, then
  ; flattening any of that to get a nice nil-free flat list of children.
  ;
  ; We demonstrate that below, and leave you the mission of taking the
  ; "Spell me" input word and expanding it into a vector of spans
  ; each holding a character of the input word.
  ; Bonus points for interposing "-" as if someone were spelling outloud,
  ; such that the opening rendering will be "b - o - o - y - a -!"
  ;
  []
  (div {:style (style/mission-style)} {}
    (div {:style (str style/column-center)}
      (word-to-spell)
      ; -- Mission Part 1 --------------------------------------
      (word-spelling)
      ; -- Mission Part 2 ----------------------------------------
      (word-history))))

(defn word-spelling []
  (div {:style (style/column-center :padding "6px")}
    (let [w (mget (fmu :word-to-spell) :value)]
      (if (str/blank? w)
        "Waiting for you to type sth ^^^."
        (div {:style (style/column-center)}
          (div {:style (style/row-center)}
            (span (str "The word \"" w "\""))
            ;; next is a quick demo that proxy DOM lists get flattened and cleaned of nils
            nil [nil nil]
            (span "&nbspis spelled&nbsp...<i>thinking</i>..."))
          ;; --- Mission #1: Faux spelling ------
          ;; show a row of spans, one per letter in the current value of :word-to-spell
          ;; extra credit: interleave hyphens to convey thinking
          ;; -----------------------------
          ;; --- your code here ----------
          ;; -----------------------------
          #_(div {:style (str style/row-center ";padding:6px")}
              (map (fn [c] (span {:style "font-size:2em; margin:3px"}
                             (str c))) (interpose "-" w))))))))

(defn word-history []
  (div {:style (style/column-center :padding "6px" :border "thin dotted #000")}
    (b {:style "font-size: 1.5em"}
      "History")
    (i "Click a word to delete it.")
    ; --- Mission part 2: Your code here ---
    ; display a column of words that have been entered:
    ; - modify input widget :word-to-spell to have a new property called :entered-words
    ; - initialize :entered-words as a cell "input". Syntax reminder: cI
    ; - ad an `onchange` handler to add the :word-to-spell content to :entered-words if (a) non-blank and (b) new
    ; - display here that list of words in a column, one span per word.
    ; -- for now do not worry about rebuilding the whole list on each change
    ; - add an "onclick" handler each history span to delete a word from the original history :entered-words
    ; -- Pro tip: the span word string can be retrieved as `(first (mget me :kids))` where `me` is the span
    (let [word-history (mget (fmu :word-to-spell) :entered-words)]
      (div {:style (style/column-left
                     :padding "6px"
                     :margin-top "9px")}
        (if (seq word-history)
          ;; a more advanced topic is how to avoid rebuilding the
          ;; whole DOM list on each change. See Matrix "family values".
          ;; -----------------------------
          ;; --- your code here ----------
          ;; -----------------------------
          "Your history here"
          (span "Entered/changed words appear here. (Change \"booya!\" and hit 'Enter' to try it out.)"))))))

(defn mission-factory []
  {:id        :dyno-kids
   :tab-label "Kids Dynomite"
   :source    "m020_kids_dyno/core.cljs"
   :title     "Dynamic Kids"
   :objective "Missions #1 and #2: dynamic reactive content."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Kids-Dyno-Mite"
   :content   dyno-kids})