(ns mxweb-trainer.mission.its-just-html
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
            [mxweb-trainer.reusable.style :as style]
            ))

(declare its-just-html)

(defn mission-factory []
  {:id :just-html
   :objective "In this mission, we discover that<br>mxWeb is just reactive HTML/CSS."
   :source-path "mxweb-trainer.mission/just-html"
   :wiki-url "https://github.com/kennytilton/mxweb-trainer/wiki/It's-Just-HTML-CSS"
   :content its-just-html})

(defn mi-dum-dum []
  (div {} {:name    :dum-dum
           :success (cI false)}
    (when (md/mget me :success)
      (figure {#_#_:style "background:red"}
        (audio {:src      "/audio/mi-dum-dum.mp3"
                :controls true
                :loop     true
                :onplay   (fn [e] (prn :onplay-sees e))
                :autoplay true})))))

(defn its-just-html []
  (div {:style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    (span {:style "font-size:3em"}
      "Hello, Matrix")

    (span "The time is now....")
    (timer/clock)
    (mi-dum-dum)
    ;;
    ;; 1. This expression will return the necessary `onclick` handler:
    ;;   (helper/find-and-set :dum-dum :success true)
    ;; 2. We like the label "Claim Mission", but suit yourself!
    ;;    And use 'style/nice-button-style' defined above for the style attribute, if you like.
    ;; 3. Then to complete this mission, just click the button!
    ;;
    ;; OK, go for it!
    ;;
    ;; --- your button code here ---
    (button {:style style/nice-button-style
             :onclick (helper/find-and-set :dum-dum :success true)}
      "Claim HTML")
    ;;
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
    ))