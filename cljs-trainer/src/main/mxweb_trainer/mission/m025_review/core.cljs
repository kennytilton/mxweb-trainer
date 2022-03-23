(ns mxweb-trainer.mission.m025-review.core
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 img input p a b span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.style :as style]))

(defn word-to-spell []
  (div {:class "color-input"}
    "Spell me: "
    (input {:name     :word-to-spell
            :tag/type "text"
            :value    (cI "booya!")
            :oninput  (fn [e]
                        (mset! (evt-mx e)
                          :value (target-value e)))
            ;
            ; Step 1: --- your code here ---
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

;;; we like to read source top-down
(declare word-history)

(defn dyno-kids-history
  ;
  ; In this review mission we put together what has been covered in earlier missions by extending
  ; our work from the preceding dynamic 'kids' mission.
  ;
  ; - Add a custom input cell property to the HTML input widget
  ; - Add an onchange handler to the same widget, to keep a distinct history of words entered
  ; - Add a view of that history that has to navigate to the history (omniscience);
  ; - Add a handler to a displayed word that acts on the same history by navigating to it (omnipotence).
  ;
  []
  (div {:style (style/mission-style)} {}
    (div {:style (style/column-center)}
      (word-to-spell)
      (word-history))))

(defn word-history []
  (div {:style (style/column-center :padding "6px")}

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
      (if (seq word-history)
        ;; a more advanced topic is how to avoid rebuilding the
        ;; whole DOM list on each change. See Matrix "family values".
        #_ (span "<i>(Your code here #2.)</i>")
        [(b "History (click to delete)")
         (map (fn [word] (span {:style   "font-size:2em; margin:3px"
                                  :onclick (fn [e]
                                             (let [me (evt-mx e)
                                                   ew (fmu :word-to-spell)]
                                               (md/mswap! ew :entered-words
                                                 (fn [words]
                                                   (remove #{(first (mget me :kids))} words)))))}
                             word)) word-history)]
        (span "Entered, changed words appear here. Change \"booya!\" and hit Enter to see this.")))))

(defn mission-factory []
  {:id        :dyno-kids-history
   :tab-label "Review One"
   :source    "m025_review"
   :title     "Mid-term Review One"
   :objective "Your Mission: maintain a word history display."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Review-One:-Word-History"
   :content   dyno-kids-history})