(ns mxweb-trainer.mission.m015-no-islands.core
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
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.mission.m015-no-islands.extra
             :refer [target-toggle mx-tree render-data-tree] :as extra]))

;; color-blind friendly colors from https://jfly.uni-koeln.de/color/
(def cb-reddish-purple "#cc79a7")
(def cb-orange "#e69d00")
(def cb-yellow "#f0e442")
(def cb-vermillion "#d55c00")
(def cb-sky-blue "#56b3e9")
(def cb-black "#000")
(def cb-bluish-green "#009e74")

(defn render-togglers []
  (div {:style (style/row-top :align-items :center)}
    (span {:style "font-size:1.5em"} "Solved:")

    ;; --- solved examples -------
    (target-toggle cb-sky-blue "sky blue"
      ; just to get you oriented, this is the trivial case of identifying
      ; the starting search node given, well, the starting search node.
      (fn [me] me))

    (target-toggle cb-black "black"
      ; another straightforward example: return the next sibling node if any
      ; of the starting node. Hint: siblings do not have pointers to each other,
      ; but a node knows its parent, and parents have a "kids" property holding
      ; an ordered list of their children.
      ;
      ; To make this even easier, Matrix provides a utility that navigates
      ; to the parent and finds the next child after the child argument.
      ; i.e., my next sibling.
      ;
      md/nextsib)

    (target-toggle cb-reddish-purple "reddish-purple"
      ; we search with an arbitrary test function.
      ; fget can search for a specified name, type, or for the first node
      ; that passes a test. The search order of fget starting from X:
      ;   X
      ;   depth-first, left-to-right children of X
      ;   recursively, the parent of X
      ;
      (fn [me] (md/fget (fn [mx] (and
                                   (= :k1 (extra/mxt-name mx))
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
      ; mission: find the node named :trash
      ;
      ; notice from the visual rendering that :trash is off someplace else in the hierarchy, where
      ; structure might well change, so hard-coded relative positional search would be brittle.
      ;
      ; check the instructions for utilities you can use, or write your own tree navigator
      ; that searches by widget name.
      ;
      )

    (target-toggle cb-vermillion "vermillion"
      ;; find the second child of `me``
      )
    (target-toggle cb-yellow "yellow"
      ;; find the parent of `me`
      )
    (target-toggle cb-bluish-green "bluish-green"
      ;; careful. We cannot just search by name, because other widgets earlier in
      ;; the search algorithm order have the same name! So we must look
      ;; for an additional distinguishing property.
      )))

(defn no-islands
  ; GUI application elements are highly inter-dependent.
  ; Matrix supports that with painless access to arbitrary state,
  ; unfettered by the Flux pattern.
  ;
  ; Here we simply learn how to navigate precisely and unambiguously from
  ; a starting 'me' node to other nodes we know we want to read or mutate.
  ; This basic skill will be needed when writing any interesting cell formula that
  ; reaches across the matrix tree for relevant app state.
  ;
  []
  ;; First, we define an abstract state tree from which we will generate
  ;; a matching tree of Matrix models:
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
    ;; nb: this ^^^ is the tree we will be navigating!
    ;;
    ;; Next, we build our GUI, with state togglers (your mission)
    ;; and a visual rendering of the state tree to help you think about
    ;; the navigations you will need to implement:
    (div {:style (style/mission-style)}
      {:name :app-root
       :data data-tree}
      (div {:style (style/column-center)}
        (render-togglers)
        (render-data-tree data-tree)))))

(defn mission-factory []
  {:id        :no-island
   :tab-label "No Islands"
   :source    "m015_no_islands/core.cljs"
   :title     "No Widget Is An Island"
   :objective "Your Mission: global, scoped Matrix tree navigation. No widget is an island."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/No-Widget-Is-An-Island"
   :content   no-islands})