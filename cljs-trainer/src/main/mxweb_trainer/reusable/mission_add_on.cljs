(ns mxweb-trainer.reusable.mission-add-on
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer [mdead?]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section audio figure img header h1 h2 h3 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]))

(defn mi-dum-dum []
  (div {} {:name    :dum-dum
           :success (cI false)}
    (when (md/mget me :success)
      (audio {:src      "/audio/mi-dum-dum.mp3"
              :controls true
              :loop     false
              :onplay   (fn [e] (prn :onplay-sees e))
              :autoplay true}))))

(defn mi-dum-dum-if [test]
  (div
    (when (test me)
      (figure {#_#_:style "background:red"}
        (audio {:src      "/audio/dum-dum-full.ogg"
                :controls false ;; true
                ;;:loop     true
                :onplay   (fn [e] (prn :onplay-sees e))
                :autoplay true})))))