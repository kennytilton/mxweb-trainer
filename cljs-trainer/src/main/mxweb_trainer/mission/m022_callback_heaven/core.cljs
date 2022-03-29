(ns mxweb-trainer.mission.m022-callback-heaven.core
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

(defn callback-heaven
  []
  (div {:style (style/mission-style)} {}
    (div {:style (str style/column-center)}
      (word-to-spell))))

(defn mission-factory []
  {:id        :callback-heaven
   :tab-label "Callback Heaven"
   :source    "m022_callback_heaven/core.cljs"
   :title     "Dynamic Kids"
   :objective "Mission: Graceful synchronous XHR"
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Callback-Heaven"
   :content   callback-heaven})