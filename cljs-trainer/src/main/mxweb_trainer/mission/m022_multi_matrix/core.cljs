(ns mxweb-trainer.mission.m022-multi-matrix.core
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 audio img input figure p a b span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m015-no-islands.extra
             :refer [target-toggle mx-tree render-data-tree] :as extra]))

(defn word-to-spell []
  (div {:class "color-input"}
    "Spell me: "
    (input {:name     :word-to-spell
            :tag/type "text"
            :value    (cI "booya!!"
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
    (let [w (mget (fmu :word-to-spell) :value)]
      [(if (str/blank? w)
         "Waiting for you to type sth ^^^."
         [(span (str "The word \"" w "\""))
          nil [nil nil]
          [(span "&nbspis spelled&nbsp...<i>thinking</i>...")]])
       (div {:style (str style/row-center ";padding:6px")}
            (map (fn [c] (span {:style "font-size:2em; margin:3px"}
                           (str c))) (interpose "-" w)))])))

#_#_
(defn inject-mx [where what]
  (let [root (dom/getElement where)
        app-matrix (md/make
                     ::training
                     :mx-dom (cFonce (md/with-par me
                                       (what))))
        app-dom (tag-dom-create
                  (md/mget app-matrix :mx-dom))]

    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))

(defn matrix-two []
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
                                        (do (prn :ticking-two!!!)
                                            (mset! me :tick true)))
                                     3000))))}
    (span {:style (cF (when (mget (mx-par me) :tick)
                        (if (odd? (.getSeconds (js/Date.)))
                          "color:blue;font-size: 24px;;line-height: 1.2em;"
                          "color:red;font-size: 24px;;line-height: 1.2em;")))}
      "CSS Unleashed Two")
    (button {:style   (str style/uncolored-button-style ";margin-top:24px")
             :onclick (fn [e] (inject-mx "app2" matrix-two))}
      {:name        :counter
       :counter     (cI -2)
       :maxxed-out? (cF (>= (mget me :counter) 3))}
      (str "I have been clicked "
        (mget me :counter)
        " times."))))

(defn dyno-kids
  []
  (div {:style (style/mission-style)} {}
    (div {:style (str style/column-center)}
      (word-to-spell)
      ; -- Mission Part 1 --------------------------------------
      (word-spelling))))

(defn mission-factory []
  {:id        :multi-mx
   :tab-label "MX Multiverse"
   :source    "m022_multi_matrix"
   :title     "MX Multi"
   :objective "Stress testing multiple MXes."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/MX-Multiverse"
   :content   dyno-kids})