(ns mxweb-trainer.mission.m005-just-html.core
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
            [mxweb-trainer.mission.m005-just-html.extra :as extra]))

(defn its-just-html-click-handler [e]
  (md/mset!
    (mxu-find-name (evt-mx e) :dum-dum)
    :success true))

(defn its-just-html []
  (div {:style style/mission-style}
    (span {:style "font-size:3em"}
      "Hello, Matrix")

    (span "The time is now...")
    (timer/clock)
    (extra/mi-dum-dum)
    ;;
    ;; 0. Add a button
    ;; 1. Use its-just-html-click-handler to handle onclick events;
    ;; 2. We like the label "Accomplish Mission", but suit yourself!
    ;;    And use 'style/nice-button-style' defined above for the style attribute, if you like.
    ;; 3. Then to complete this mission, just click the button!
    ;;
    ;; OK, go for it!
    ;;
    ;; -----------------------------
    ;; --- your button code here ---
    ;; -----------------------------
    ;;
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
    ))

(defn mission-factory []
  {:id :just-html
   :tab-label "It's Just HTML"
   :source "its_just_html"
   :objective "Objective: mxWeb is just reactive HTML/CSS."
   :wiki-url "https://github.com/kennytilton/mxweb-trainer/wiki/It's-Just-HTML-CSS"
   :content its-just-html})