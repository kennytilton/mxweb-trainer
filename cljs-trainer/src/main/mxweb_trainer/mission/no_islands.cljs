(ns mxweb-trainer.mission.no-islands
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             ;; todo lose md- prefix on kids %a
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 audio img input figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.reusable.mission-add-on :as add-on]
            ))


(declare no-islands)

(defn mission-factory []
  {:id        :no-island
   :source    "no_islands"
   :title     "No Widget Is An Island"
   :objective "Your Mission: global, naturally-scoped access to state.<br>aka, Omniscience and omnipotence."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/No-Widget-Is-An-Island"
   :content   no-islands})

(defn target-toggle [color & [target-finder]]
  (button {:style   (str "min-width:2em;min-height:2em;margin:4px;border:outset;background:" color)
           :onclick (cF
                      ;; [This one made me think. This is advanced material not relevant to the mission,
                      ;; but the ambitious reader may find it helpful.
                      ;;
                      ;; The tricky thing is that the tree view is not the tree we are learning
                      ;; to navigate! The tree view is generated *from* the _data_ tree we want to navigate.
                      ;; What is the salient difference? The tree view will have additional layers of DOM
                      ;; to achieve neat layout. Its view nodes have to "watch" the nodes in the navigation tree
                      ;; to see when _they_ get tagged, and so when to turn a solid color. -kt]
                      ;;
                      ;; Understanding this code
                      ;; -----------------------
                      ;; When the matrix springs to life, a process we call "awakening",
                      ;; for each "toggle" button that is specified with a "finder"...
                      (when target-finder
                        ;; ...go out and find the node we want each finder to use as "me", the search starting point.
                        ;; Looking at the code, we know the data tree is the :data property of the node named :app-root.
                        ;; We find that first.
                        (let [root (fmu :app-root)]
                          ;; as a mnemonic, we gave the name :me to the node we plan to use as the search starting node.
                          ;; The starting node is fundamental to Matrix: it means the state seen by a node is always
                          ;; naturally scoped from the local node making a computation out to wider and wider scope. This
                          ;; search begins in cell formulas and those know only about the anaphoric "me".
                          ;;
                          ;; So let's find :me in the data tree (in the :data property of the app root)....
                          (let [search-me (md/fget :me (mget root :data)
                                            :must? true ; throw an error if search fails
                                            :me? false
                                            :inside? true
                                            :up? false)]
                            ;; We then return a handler for the toggle button that uses the specified finder
                            (fn [event]
                              (let [target (target-finder search-me)]
                                (if target
                                  (md/mswap! target :tagged? not)
                                  (do (prn :cannot-find-target-for!!!!! color :from search-me)
                                      (js/alert (str "Cannot find target for " color))))))))))}))

(defn mx-tree [spec]
  (let [[name color secret & kids] (if (vector? spec)
                                     spec [spec])]
    (md/make ::data-tree
      :name name :color color :secret secret
      :tagged? (cI false)
      :kids (cF (md/the-kids
                  (map mx-tree kids))))))

;; some handy accessors to hide `mget`
(defn mxt-name [mx] (mget mx :name))
(defn mxt-tagged? [mx] (mget mx :tagged?))
(defn mxt-color$ [mx]
  (when-let [c (mget mx :color)] (name c)))
(defn mxt-name$ [mx] (name (mxt-name mx)))

(defn render-data-tree [data-node]
  (div {:style (str style/column-center ";padding:4px;background:white"
                 (when (seq (md-kids data-node))
                   ";border: thick outset linen; padding:18px"))}
    {:node data-node} ;; link rendered tree back to data tree
    (span {:style (cF (let [color (mxt-color$ data-node)]
                        (str "margin:3px;padding:3px;font-size:1.5em"
                          (if color
                            (if (mxt-tagged? data-node)
                              (str ";background:" color ";border: medium solid " color)
                              (str ";border: medium solid " color))))))}
      (str (mxt-name$ data-node)
        (when-let [s (mget data-node :secret)]
          (str "=" s))))
    (when (seq (mget data-node :kids))
      (div {:style (str style/row-top
                     #_ ";border: thick outset linen; padding:18px")}
        (map #(render-data-tree %) (mget data-node :kids))))))

(defn no-islands
  "GUI application elements are highly inter-dependent.
  We learn how to navigate from a component to others to discover
  state in a naturally scoped fashion, and likewise to mutate state."
  []
  (let [data-tree (mx-tree [:par :lime nil
                       [:prev-sibling nil nil
                        [:k1 nil 7] :k2 :k3]
                       [:me :cyan nil
                        :k1 [:k2 :red] :k3]
                       [:next-sibling :sandybrown nil
                        [:k1 :fuchsia 42] :k2 :k3]])]
    (div {:style style/mission-style}
      {:name :app-root
       :data data-tree}
      (div {:style (str style/column-center)}
        (div {:style style/row-top}
          (span {:style "font-size:1.5em"} "Please complete these togglers:")
          ;; (fget what-is-sought where-do-we-start
          ;;    :me?     false   should we consider the start node
          ;;    :inside? false   should we search descendants of the starting node?
          ;;    :up?     true    search recursively up (ancesters, starting with parent of start node)?
          ;;    :wocd?   true    should we NOT form reactive dependency on the "kids" nodes as wesearch them?

          ;; --- Your code here ---------
          (target-toggle "red" (fn [me] nil) #_ (fn [me]
                                 (second (mget me :kids))))
          (target-toggle "lime" mx-par)
          (target-toggle "aqua" identity)
          (target-toggle "fuchsia" (fn [me]
                                     (md/fget (fn [mx] (= 42 (mget mx :secret))) me
                                       :inside? true)))
          (target-toggle "sandybrown" md/nextsib))
        (render-data-tree data-tree)))))