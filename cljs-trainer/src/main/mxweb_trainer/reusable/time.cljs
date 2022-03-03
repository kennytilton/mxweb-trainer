(ns mxweb-trainer.reusable.time
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer [mdead?]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section audio img header h1 h2 h3 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]))

(defn clock []
  (div {:class   "example-clock"
        :style   (str "color:red"
                   ";font-size: 64px;"
                   ";line-height: 1.2em;")

        :content (cF (if (mget me :tick)
                       (-> (js/Date.)
                         .toTimeString
                         (str/split " ")
                         first)
                       "*checks watch*"))}
    {:tick   (cI false :ephemeral? true)
     :ticker (let [jid (atom nil)]
               ;; todo wrap all this up as a new mx-interval
               (cFonce (reset! jid (js/setInterval
                                #(if (mdead? me)
                                   (when-let [id @jid]
                                     (js/clearInterval id)
                                     (reset! jid nil))
                                   (mset! me :tick true))
                               1000))))}))

;; todo have cells throw exceptions on attempts to act on dead cells or models

#_(defn color-input []
    (div {:class "color-input"}
      "Time color: "
      (input {:name     :timecolor
              :tag/type "text"
              :value    (cI "#f00")
              :onchange (fn [e]
                          (prn :evt (evt-mx e) (target-value e))
                          (mset! (evt-mx e)
                            :value (target-value e)))})))