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
            [mxweb-trainer.reusable.mission-add-on :as add-on]
            ))

(declare its-just-html)

(defn mission-factory []
  {:id :just-html
   :source "its_just_html"
   :objective "Objective: mxWeb is just reactive HTML/CSS."
   :wiki-url "https://github.com/kennytilton/mxweb-trainer/wiki/It's-Just-HTML-CSS"
   :content its-just-html})

(defn its-just-html []
  (div {:style style/mission-style}
    (span {:style "font-size:3em"}
      "Hello, Matrix")

    (span "The time is now...")
    (timer/clock)
    (add-on/mi-dum-dum)
    ;;
    ;; 1. Use helper/its-just-html-click-handler to handle onclick events;
    ;; 2. We like the label "Accomplish Mission", but suit yourself!
    ;;    And use 'style/nice-button-style' defined above for the style attribute, if you like.
    ;; 3. Then to complete this mission, just click the button!
    ;;
    ;; OK, go for it!
    ;;
    ;; --- your button code here ---
    #_ (button {:style style/nice-button-style
             :onclick helper/its-just-html-click-handler}
      "Accomplish Mission")
    ;;
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
    ))