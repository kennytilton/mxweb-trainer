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
   :objective "Your Mission: global, scoped Matrix tree navigation."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/No-Widget-Is-An-Island"
   :content   no-islands})

(defn target-toggle [color color-name target-finder]
  (button {:style   (str "min-width:2em;min-height:2em;margin:4px;border:outset;background:" color)
           :onclick (cF (when target-finder
                          (let [root (fmu :app-root)]
                            (let [search-me (md/fget :me (mget root :data)
                                              :must? true   ; throw an error if search fails
                                              :me? false
                                              :inside? true
                                              :up? false)]
                              (fn [event]
                                (let [target (target-finder search-me)]
                                  (if target
                                    (md/mswap! target :tagged? not)
                                    (do (prn :cannot-find-target-for!!!!! color-name :from search-me)
                                        (js/alert (str "Cannot find target for " color-name))))))))))}))

(defn mx-tree [spec]
  (prn :spec spec)
  (let [[name color secret & kids] (if (vector? spec)
                                     spec [spec])]
    (md/make ::data-tree
      :name name :color color :secret secret
      :tagged? (cI false)
      :kids (when (seq kids)
              (cF (md/the-kids
                    (map mx-tree kids)))))))

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
    {:node data-node}                                       ;; link rendered tree back to data tree
    (span {:style (cF (let [color (mxt-color$ data-node)]
                        (str "margin:3px;padding:3px;font-size:1.5em"
                          (if color
                            (if (mxt-tagged? data-node)
                              (str ";color:white;background:" color ";border: thick solid " color)
                              (str ";border: thick solid " color))))))}
      (str (mxt-name$ data-node)
        (when-let [s (mget data-node :secret)]
          (str "=" s))))
    (when (seq (mget data-node :kids))
      (div {:style (str style/row-top
                     #_";border: thick outset linen; padding:18px")}
        (map #(render-data-tree %) (mget data-node :kids))))))

;; color-blind friendly colors from https://jfly.uni-koeln.de/color/
(def cb-reddish-purple "#cc79a7")
(def cb-orange "#e69d00")
(def cb-yellow "#f0e442")
(def cb-vermillion "#d55c00")
(def cb-sky-blue "#56b3e9")
(def cb-black "#000")
(def cb-bluish-green "#009e74")

(defn render-togglers []
  (div {:style (str style/row-top ";align-items:center")}
    (span {:style "font-size:1.5em"} "Solved:")

    ;; --- solved examples -------
    (target-toggle cb-sky-blue "sky blue"
      (fn [me] me))
    (target-toggle cb-reddish-purple "reddish-purple"
      ;; we search with an arbitrary test function
      (fn [me] (md/fget (fn [mx] (and
                                   (= :k1 (mxt-name mx))
                                   (= 7 (mget mx :secret))))
                 me :inside? true)))

    ;; --- Unsolved examples: Your code here! ---------
    ;;
    ;; Please see https://github.com/kennytilton/mxweb-trainer/wiki/No-Widget-Is-An-Island
    ;; for help navigating as specified below.
    ;;
    ;; The idea is to navigate from a solid-colored "toggler" to identify the corresponding
    ;; bordered tree node.
    ;;
    ;; Note that nodes labeled "kN" have keyword :kN as their Matrix names, and where we see
    ;; sth like k1=42, that means that node has the property :secret with the value 42.
    ;; Because the name "k1" repeats, you will need to use the "secret" to disambiguate.

    (span {:style "margin-left:1em;font-size:1.5em"} "Unsolved:")
    (target-toggle cb-orange "orange"
      (fn [me] nil)
      #_(fn [me] (fmu :trash)))
    (target-toggle cb-vermillion "vermillion"
      (fn [me] nil)
      #_(fn [me]
          (second (mget me :kids))))
    (target-toggle cb-yellow "yellow"
      (fn [me] nil)
      #_mx-par)
    (target-toggle cb-bluish-green "bluish-green"
      ;; careful. We cannot just search by name, because other widgets earlier in
      ;; the search algorithm order have the same name!
      (fn [me] nil)
      #_(fn [me]
          (md/fget (fn [mx] (and (= :k1 (mxt-name mx))
                              (= 42 (mget mx :secret))))
            me :inside? true)))
    (target-toggle cb-black "black"
      (fn [me] nil)
      #_md/nextsib)))

(defn no-islands
  ; GUI application elements are highly inter-dependent. We want to read and
  ; mutate arbitrary state, as our app demands, without fussing with subscriptions,
  ; actions, reducers, and other artifacts of the Flux pattern.
  ;
  ; Here we simply learn how to navigate precisely and unambiguously from
  ; a starting 'me' node to intended other nodes, to access state in a global yet
  ; naturally scoped fashion."
  []
  ;; First, we define an abstract state tree from which we will generate
  ;; an isomorphic tree of Matrix models:
  (let [data-tree (mx-tree [:app nil nil
                            [:toolbar nil nil
                             [:trash cb-orange nil]]
                            [:par cb-yellow nil
                             [:prev-sibling nil nil
                              [:k1 cb-reddish-purple 7] :k2 :k3]
                             [:me cb-sky-blue nil
                              :k1 [:k2 cb-vermillion] :k3]
                             [:next-sibling cb-black nil
                              [:k1 cb-bluish-green 42] :k2 :k3]]])]
    ;; Next, we build our GUI, with state togglers (your mission)
    ;; and a visual rendering of the state tree to help you think about
    ;; the navigations you will need to implement:
    (div {:style style/mission-style}
      {:name :app-root
       :data data-tree}
      (div {:style (str style/column-center)}
        (render-togglers)
        (render-data-tree data-tree)))))