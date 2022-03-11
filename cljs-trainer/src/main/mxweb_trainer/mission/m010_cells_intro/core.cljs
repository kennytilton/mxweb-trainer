(ns mxweb-trainer.mission.m010-cells-intro.core
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m010-cells-intro.extra :as extra]))

(defn counter-cells []
  (div {:style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    (span {:style "font-size:3em"}
      "Hello, Cells")

    ; The state of a typical Matrix application is mostly derived/computed state, much as
    ; a spreadsheet is mostly cells with formulas. Both of these require /some/ state to come
    ; from outside the model: it cannot be derived state all the way down.
    ;
    ; In this example, the input required is the current time. We let the user click
    ; a button to inject the current time into the DAG:
    ;
    (span {:style   (str "color:red"
                      ";font-size: 64px"
                      ";line-height: 1.2em")
           :onclick (fn [e]
                      ;   mset! is like cljs reset!. It can be called from anywhere, not just event handlers.
                      ;   evt-mx takes an event and returns a matrix object, usually nicknamed 'mx',
                      ;      which is the equivalent of JS 'this', viz,, the object that spawned the handler.
                      (mset! (evt-mx e) :time-now (js/Date.)))
           ; When one change requires another, a developer has three problems:
           ;   1. what are all the things that need to be updated to reflect the original change;
           ;   2. what updates are necessitated by the first round of updates,  andand recursively on;
           ;   3. how to order updates to avoid reactive "glitches", when the DAG gets interesting.
           ;
           ; By expressing a property value as a function of other property values, we provide
           ; Matrix with the information it needs to handle all three tasks transparently and
           ; with optimal efficiency, glitch-free.
           ;
           ; `cF` is a mnemonic for `formula cell` or `ruled cell`. It expands to:
           ;;   (make-c-formula
           ;       :code '~body
           ;       :value unbound
           ;       :rule (c-fn ~@body))
           ;
           ; Soon after a Matrix object is instantiated and added to the larger tree, which we
           ; colloquially call a matrix, each of its formulaic cells will have its rule executed to
           ; establish its initial value.
           ;
           :content (cF (-> (mget me :time-now)
                          .toTimeString
                          (str/split " ")
                          first))}
      ;;
      ;; The second map argument to an mxWeb tag function is for custom properties
      ;; that real DIVs know nothing about, but which proxy DIVs can use to react dynamically to user actions.
      ;; With these, we can get more re-use out of DIVs, because we do not need
      ;; to get into OO issues forever subclassing.
      ;;
      ;; `cI` is a mnemonic for "input cell"
      {:time-now (cI (js/Date.))})

    ; Here is the definition of cI:
    ;  (defn cI [value & option-kvs]
    ;    (apply make-cell
    ;         :value value
    ;         :input? true
    ;         option-kvs))
    ; Setting `:input?` to true lets us mutate that value imperatively, as in
    ; the mset! we see in the onclick handler on the span above.

    (span {:style "font-size:1.5em"}
      "Click the time to have it updated.")
    (p)
    (extra/mi-dum-dum-if (fn [mx]
                           (let [ctr (md/fget :counter mx :me? false :inside? false :must? false :up? true)]
                             (prn :dum-dum-checking!! (when ctr (mget ctr :counter)) ctr)
                             (and ctr
                               (= 3 (mget ctr :counter))
                               (mget ctr :disabled)))))

    (div {:style (cF (str "font-size:" (+ 2 (* 0.5 (mod (mget me :counter) 3))) "em"
                       ";min-height:72px;min-width:400px"
                       ";text-align:center"))}
      ;; --- your code here ---------
      (span "Hi, Mom!")
      ;; Replace this SPAN with a button meeting these requirements:
      ;; * the label is "I have been clicked N times.", where N is a counter of how many times it has been clicked;
      ;; * the counter must start at zero; and
      ;; * when the counter gets to three:
      ;; ** change the message to "I have been clicked enough times."; and
      ;; ** disable the button using the DOM.

      (br)

      ;; hints for writing your code. You will want:
      ;; * a custom input property for the counter, initialized to zero;
      ;; * a button label computed with the counter value plus some fixed text like "The count is now NNN";
      ;; * a standard HTML attribute `onclick` handler that uses mswap! to increment the counter;
      ;; * and a standard HTML attribute `disabled` that goes to CLJS true when the counter reaches 3.
      ;;
      ;; tips:
      ;; * use cI to define input cells, cF to define computed cells;
      ;; * HTML attributes such as `disabled` do not take values, their presence indicates "true". With mxWeb, we use
      ;;   truthiness to make such attributes present or not present.
      ;; * in the event handler, used `(evt-mx the-event)` to get the mx instance hosting the handler.
      ;; * in formulas, just use the anaphoric `me` as if it were `this` or `self`
      ;; * use `(mget MX PROPERTY-KEYWORD)` to get a value;
      ;; * use `(mset! MX PROPERTY-KEYWORD VALUE)` or `(mswap! MX PROPERTY-VALUE FN ARGS*)` to mutate input cells.
      ;; * CAUTION! If functions discover PROPERTY-KEYWORD is not a defined property, they silently do nothing.

      (button {:style    style/uncolored-button-style
               :onclick  (fn [e] (md/mswap! (evt-mx e) :counter inc))
               :disabled (cF (mget me :maxxed-out?))}
        {:name :counter
         :counter     (cI 0)
         :maxxed-out? (cF (>= (mget me :counter) 3))}
        (str "I have been clicked "
          (if (mget me :maxxed-out?) "enough" (mget me :counter))
          " times."))
      )
    ))


(defn mission-factory []
  {:id        :cells-intro
   :tab-label "Basic Cells"
   :source    "cells_intro"
   :objective "The Mission: baby steps with Matrix reactivity."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/Hello,-Cells"
   :content   counter-cells})

;;
;; ----------------------------------------------------------------
;;   Mission Instructions
;; ----------------------------------------------------------------
;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
