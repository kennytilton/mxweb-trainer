(ns mxweb-trainer.mission.cells-intro
  (:require [clojure.string :as str]
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


(declare counter-cells)

(defn mission-factory []
  {:id :cells-intro
   :objective "Next we do the \"Hello, world!\" of Matrix reactivity."
   :source-path "mxweb-trainer.mission/cells-intro"
   :content counter-cells})

(defn counter-cells []
  (div {:style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    (span {:style "font-size:3em"}
      "Hello, Cells")

    (span "The time is now....")

    #_ (div {:style   (str "color:red"
                     ";font-size: 64px;"
                     ";line-height: 1.2em;")

          :content (cF (-> (mget me :time-now)
                         .toTimeString
                         (str/split " ")
                         first))}
      ;; The second map is for custom properties that DIVs know nothing about.
      ;; With these, we can get more re-use out of DIVs, because we do not need
      ;; to get into OO issues forever subclassing.
      {:time-now   (cI (js/Date.))})


    ;;
    ;; ----------------------------------------------------------------
    ;;   Mission Instructions
    ;; ----------------------------------------------------------------
    ;; n.b. If you look around you will see a lot of code unrelated to the mission,
    ;; including snazzy reactive code, none of which will make a lot of sense yet.
    ;; Please just read on for simpler stuff that will help you to complete this
    ;; mission and take home the message:
    ;;
    ;;                mxWeb is just HTML/CSS
    ;;
    ;; To complete the mission, you can just add code right here to create
    ;; an mxWeb button with an onclick handler that we will provide for you.
    ;;
    ;; The HTML button syntax we have in mind might look like this in pseudo mixed JS/CLJS:
    ;;
    ;;    <button onclick=helper/find-and-set(:dum-dum, :success, true)>Claim Mission</button>
    ;;
    ;; Note that the function helper/find-and-set is not itself the onclick event handler.
    ;; Instead, it returns a function, the event handler.
    ;;
    ;; So how can you complete this mission? As we said ^^^, you need to add a button right here.
    ;;
    ;; The syntax for all mxWeb "tag" functions parallels that of HTML.
    ;; Where HTML has: <tag attributes*>content</tag>
    ;; mxWeb has: (tag {optional CLJS attributes map} content*).
    ;;
    ;; So to add a SPAN here, we might have:
    ;;    (span "Hi, Mom")
    ;;    ...or...
    ;;    (span {:style "color:red;font-size:2em"
    ;;           :onclick (fn [e] (prn "onclick sees:" e))} "Hi, Mom!")
    ;;
    ;; Ready?
    ;;
    ;; 1. This expression will return the necessary `onclick` handler:
    ;;   (helper/find-and-set :dum-dum :success true)
    ;; 2. We like the label "Claim Mission", but suit yourself!
    ;;    And use nice-button-style defined above for the style attribute, if you like.
    ;; 3. Then to complete this mission, just click the button!
    ;;
    ;; OK, go for it!
    ;;
    ;; --- your button code here ---
    ;;
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
    ))