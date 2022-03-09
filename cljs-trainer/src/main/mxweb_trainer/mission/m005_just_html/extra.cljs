(ns mxweb-trainer.mission.m005-just-html.extra
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]))

(defn mi-dum-dum []
  (div {} {:name    :dum-dum
           :success (cI false)}
    (when (md/mget me :success)
      (audio {:src      "/audio/mi-dum-dum.mp3"
              :controls true
              :loop     false
              :onplay   (fn [e] (prn :onplay-sees e))
              :autoplay true}))))