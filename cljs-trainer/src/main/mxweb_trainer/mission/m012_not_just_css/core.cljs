(ns mxweb-trainer.mission.m012-not-just-css.core
  (:require [clojure.string :as str]
            [tiltontec.cell.base :refer [mdead?]]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu fm! fmo] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input figure p a span div button br]
             :as mxw]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]

            [tiltontec.mxweb.html :refer [tag-dom-create]]

            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.reusable.style :as style]))

;; todo with-tag-style macro
;; todo with-tag macro
;; todo mxweb tracing nil false true keyword [keywords] test
(defn not-just-css []
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
                                        (do (prn :ticking!!!)
                                            (mset! me :tick true)))
                                     5000))))}
    (span {:style (cF (when (mget (mx-par me) :tick)
                        (if (odd? (.getSeconds (js/Date.)))
                          "color:blue;font-size: 24px;;line-height: 1.2em;"
                          "color:red;font-size: 24px;;line-height: 1.2em;")))}
      "CSS Unleashed")

    (timer/clock (cF (when (mget me :tick)
                       (if (even? (.getSeconds (js/Date.)))
                       "color:blue;font-size: 64px;;line-height: 1.2em;"
                       "color:red;font-size: 64px;;line-height: 1.2em;"))))

    (span {:style (cF (when (mget me :tick)
                        (if (even? (.getSeconds (js/Date.)))
                          "color:blue;font-size: 32px;;line-height: 0.5em;"
                          "color:red;font-size: 32px;;line-height: 0.5em;")))}
      "Raw style string")

    (div
      ;; --- your code here ---------

      (button {:style   style/uncolored-button-style
               :onclick (fn [e] (md/mswap! (evt-mx e) :counter inc))}
        {:name        :counter
         :counter     (cI 0)
         :maxxed-out? (cF (>= (mget me :counter) 3))}
        (str "I have been clicked "
          (mget me :counter)
          " times."))
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

      )
    ))


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
