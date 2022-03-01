(ns mxweb-trainer.mission.welcome
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [audio img input ul li figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.reusable.mission-add-on :as add-on]
            ))

(declare welcome)

(defn mission-factory []
  {:id        :trainer-welcome
   :objective "Welcome to the mxWeb Trainer"
   :source "welcome"
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki"
   :content   welcome})

(defn welcome []
  (div {:style (str "display:flex"
                 ";color:black"
                 ";flex-direction:column"
                 ";align-items:left"
                 ";align-content:left"
                 ";justify-content:left"
                 ";padding:12px"
                 ";margin:36px"
                 ";background:#fee")}

    (p {}
      "<i>mxWeb</i> is a declarative, lightweight HTML/CSS library powered by the "
      (a {:target "_blank"
          :href   "https://github.com/kennytilton/matrix/blob/main/README.md"} "Matrix")
      " reactive engine.")
    (p {}
      "This app presents a series of unsolved mxWeb learning \"missions\" for you to, well, solve. "
      "It comes with free tutorial support/solutions from the author of mxWeb, who can be found in the #Matrix channel of the "
      (a {:target "_blank"
          :href   "https://clojurians.slack.com"} "Clojurians Slack")
      ".")
    (p {:style "padding:0"}
      "Navigate from mission to mission using the control bar above. Each mission includes:")
    (ul {:style "padding:0;margin-top:0;margin-left:36px"}
      (li "what you will learn;")
      (li "a relevant working example;")
      (li "a link to the mission source; and")
      (li "a link to a Help page to guide your efforts."))
    (p "Please click \"next\" to tackle the first mission.")))

