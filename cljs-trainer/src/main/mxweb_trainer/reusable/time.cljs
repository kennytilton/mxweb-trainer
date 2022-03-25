(ns mxweb-trainer.reusable.time
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [cljs.pprint :as pp]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer [mdead?]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section audio img header h1 h2 h3 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]))

(defn clock
  ([]
   (clock 1000 "color:red;font-size: 64px;;line-height: 1.2em;"))
  ([update-interval-ms]
   (clock update-interval-ms "color:red;font-size: 64px;;line-height: 1.2em;"))
  ([update-interval-ms style]
   (div {:class   "example-clock"
         :style   style
         :content (cF (if (mget me :tick)
                        (let [d (js/Date.)]
                          (str (-> d
                                 .toTimeString
                                 ;.toISOString
                                 (str/split " ")
                                 first
                                 )
                            "."
                            (* 1 (Math/floor (/ (.getMilliseconds d) 100)))
                            #_ (pp/cl-format nil "~03,'0d" (* 100 (Math/floor (/ (.getMilliseconds d) 100))))))
                        "*checks watch*"))}
     {:tick   (cI false :ephemeral? true)
      :ticker (let [jid (atom nil)]
                (cFonce (reset! jid (js/setInterval
                                      #(if (mdead? me)
                                         (when-let [id @jid]
                                           (js/clearInterval id)
                                           (reset! jid nil))
                                         (mset! me :tick true))
                                      update-interval-ms))))})))

;; todo have cells throw exceptions on attempts to act on dead cells or models

