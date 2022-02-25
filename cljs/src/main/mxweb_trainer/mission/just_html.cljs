(ns mxweb-trainer.mission.just-html
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section audio img header h1 h2 h3 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]))

(def nice-button-style
  (str "background:#ea4c89"
       ";color:white"
       ";font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;"
       ";font-size: 14px;"
       ";font-weight: 500;"
       ";cursor:pointer"
       ";height: 40px"
       ";padding: 10px 16px"
       ";transition: color 100ms"
       ";border-radius:8px;border-style:none"))

(defn mi-dum-dum []
  (div {} {:name :dum-dum
           :success (cI false)}
    (when (md/mget me :success)
      (audio {:src      "/audio/mi-dum-dum.mp3"
              :controls true
              :loop     true
              :onplay   (fn [e] (prn :onplay-sees e))
              :autoplay true}))))

(defn mission []
  (div {:style (str "display:flex"
                 ";flex-direction:column"
                 ";align-items:center"
                 ";align-content:center"
                 ";justify-content:center"
                 ";padding:9px"
                 ";background:pink")}
    (img {:src "/images/mx-banner-red.jpg"
          :alt "The Matrix logo, a cell culture Petri dish"
          :style "max-width:100%;max-height:100%"})
    (span {:style "font-size:3em"}
      "Hello, Matrix")
    (span "The time is now....")
    (timer/clock)
    (p {:style "font-size:1.5em;text-align:center"}
      "In this mission, we discover that<br>in the end mxWeb&reg; is just HTML/CSS.")
    (p {:style "font-size:1em;text-align:center"}
      "See instructions at the end of <i>mxweb-trainer.mission/just-html</i> to complete this mission.")
    (mi-dum-dum)
    ;;
    ;; n.b. If you look around you will see a lot of code unrelated to the mission,
    ;; including snazzy reactive code, none of which will make a lot of sense yet.
    ;; Please just read on to complete this mission and take home the message:
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
    ;; Note that the function helper/find-and-set is not the onclick event handler.
    ;; Instead, it returns a function itself, the event handler.
    ;;
    ;; So how can you complete this mission? As we said ^^^, you need to add a button right here.
    ;;
    ;; The syntax for all mxWeb tag functions parallels that of HTML.
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
    (button {:style nice-button-style
             :onclick (helper/find-and-set :dum-dum :success true)}
      "Bam")
    ))