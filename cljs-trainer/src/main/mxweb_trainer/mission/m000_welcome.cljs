(ns mxweb-trainer.mission.m000-welcome
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
            [mxweb-trainer.reusable.style :as style]))

(declare welcome)

(defn mission-factory []
  {:id        :trainer-welcome
   :tab-label "Welcome"
   :source    "m000_welcome.cljs "
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki"
   :content   welcome})

(defn welcome []
  (div {:style
        ;; later we will see more powerful ways of handling CSS.
        ;; See "It's Not Just CSS"
        (str "display:flex"
          ";background:white"
          ";color:black"
          ";font-family: \"Times New Roman\", Times, serif"
          ";font-size: 1.5em"
          ";flex-direction:column"
          ";align-items:left"
          ";align-content:left"
          ";justify-content:left"
          ";padding:12px"
          ";max-width:40em"
          ";margin:36px"
          )}

    (p {}
      "<i>mxWeb</i> is a declarative, lightweight HTML/CSS library powered by the "
      (a {:target "_blank"
          :href   "https://github.com/kennytilton/matrix/blob/main/README.md"} "Matrix")
      " reactive engine.")
    (p {}
      "This app presents a series of unsolved mxWeb learning \"missions\" for you to, well, solve. ")
    (p {}
      "It comes with free tutorial support/solutions from the author of mxWeb, who can be found in the #Matrix channel of the "
      (a {:target "_blank"
          :href   "https://clojurians.slack.com"} "Clojurians Slack")
      ".")
    (p {:style "padding:0"}
      "&xlarr; Select a mission by clicking its button.")
    (p {:style "padding:0"}
      "Each mission includes:")
    (ul {:style "padding:0;margin-top:0;margin-left:36px"}
      (li "what you will learn;")
      (li "a relevant working example;")
      (li "a link to the mission source; and")
      (li "a link to a Help page to guide your efforts."))
    (p "Please click \"It's Just HTML\" to tackle the first mission.")))

