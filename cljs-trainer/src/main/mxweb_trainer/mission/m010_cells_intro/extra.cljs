(ns mxweb-trainer.mission.m010-cells-intro.extra
  (:require [tiltontec.mxweb.gen-macro
             :refer-macros [section audio figure img header h1 h2 h3 input footer p a span label ul li div button br]]))

(defn mi-dum-dum-if [test]
  (div
    (when (test me)
      (figure
        (audio {:src      "/audio/dum-dum-full.ogg"
                :controls false ;; true
                ;;:loop     true
                :onplay   (fn [e] (prn :onplay-sees e))
                :autoplay true})))))