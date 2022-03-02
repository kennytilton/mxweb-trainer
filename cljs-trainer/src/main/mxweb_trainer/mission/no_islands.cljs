(ns mxweb-trainer.mission.no-islands
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 audio img input figure p a span div button br]]
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
   :objective "The Mission: global, scoped reach."
   :wiki-url  "https://github.com/kennytilton/mxweb-trainer/wiki/No-Widget-Is-An-Island"
   :content   no-islands})

(defn node [node-spec]
  ;(prn :nspec node-spec (vector? node-spec))
  (let [[label color value] (if (vector? node-spec) node-spec [node-spec :white nil])]
    (prn :node-generated label color value)
    (span {:style (cF (str "color:black;"
                        (if (mget me :tagged?)
                          (str "border:none; background:" (name color))
                          (str "border: medium solid " (name color)))
                        ";margin:3px;padding:3px"))}
      {:tagged? (cI false)
       :name    (keyword label)}
      (if value (str label "=" value) label))))

(defn tree [root & kid-specs]
  ;(prn :tree-sees root kid-specs)
  (let [[label color value] (if (vector? root) root [root :white nil])]
    (div {:style (str "display:flex"
                   ";background:white"
                   ";flex-direction:column"
                   ";align-items:center"
                   ";align-content:center"
                   ";justify-content:center"
                   ";border: thin dashed gray"
                   ";padding:3px")}
      {:name    (keyword label)
       :tagged? (cI false)}
      (span label)
      (when (seq kid-specs)
        (map #(node %) kid-specs)))))

(defn msn-try [color & [finder]]
  (button {:style   (str "min-width:2em;min-height:2em;margin:4px;border:none;background:" color)
           :onclick (cF
                      ;; this one made me think.
                      ;; when the matrix springs to life,
                      ;; each "try" button that has had a finder coded...
                      (when finder
                        ;; ...goes outs and finds the node we want each finder to use as "me",
                        ;; aka the origin of the family search.
                        (when-let [root (fmu :app-root)]
                          (prn :root! root)
                          (let [search-from (md/fget :me (mget root :data) :me? false :inside? true :must? true :up? false)]
                            ;; It better find it.
                            (prn :search-from!! search-from)
                            (assert search-from)
                            ;; We then return a handler
                            (fn [event]
                              (prn :try-fires color search-from event)
                              (let [target (finder search-from)]
                                (prn :fire-target!!! target (mget target :tagged?))
                                (if target
                                  (md/mswap! target :tagged? not)
                                  (prn :cannot-find-target-for!!!!! color search-from))))))))}))

(defn mx-tree [spec]
  (prn :spec spec)
  (let [[name color secret & kids] (if (vector? spec)
                                     spec [spec])]
    (md/make ::data-tree
      :name name :color color :secret secret
      :tagged? (cI false)
      :kids (cF (md/the-kids
                  (map mx-tree kids))))))

(defn tree-div [d]
  (let [[label color secret tagged? kids] (map (fn [k] (mget d k)) [:name :color :secret :tagged? :kids])]
    (prn :treediv-sees label color tagged? secret kids)
    (div {:style (cF (str "display:flex"
                       ";flex-direction:column"
                       ";align-items:center"
                       ";align-content:center"
                       ";justify-content:center"
                       ";padding:3px"))}
      {:name (keyword (str "tdiv-" (name label)))
       :node d}
      (span {:style (cF (do
                          (prn :treenode label color )
                          (str "padding:3px;"
                            (if color
                              (if (mget d :tagged?)
                                (str ";background:" (name color) ";border:none")
                                (str ";border: thick solid " (name color)))
                              ";border: thin dashed gray"))))}
             (name label))
      (when (seq kids)
        (div {:style (str "display:flex"
                       ";flex-direction:row"
                       ";align-items:top"
                       ";align-content:top"
                       ";justify-content:center"
                       ;;";border: thin dashed gray"
                       ";padding:3px")}
          (map #(tree-div %) kids))))))

(defn no-islands []
  (let [data (mx-tree [:par :lime nil
                       [:sibling nil nil
                        [:k1 nil 7]
                        :k2
                        :k3]
                       [:me :cyan nil
                        :k1
                        [:k2 :red]
                        :k3]
                       [:sibling :sandybrown nil
                        [:k1 :fuchsia 42]
                        :k2 :k3]])]
    (div {:style style/mission-style}
      {:name :app-root
       :data data}
      (h1 "No Widget Is An Island")
      (div {:style (str "display:flex"
                     ";flex-direction:row"
                     ";align-items:top"
                     ";align-content:top"
                     ";justify-content:center"
                     ";padding:3px")}
        (div {:style (str "display:flex"
                       ";flex-direction:column"
                       ";align-items:left"
                       ";align-content:left"
                       ";justify-content:center"
                       ";padding:3px")}
          ;; (fget what where :me? false, :inside? false, :up? true, :wocd? true ;; without-c-dependency
          (msn-try "red" #_(fn [me]
                             (prn :redme (count (mget me :kids)) me)
                             (let [k2 (md/fget (fn [x y]
                                                 (prn :testing x :vs y)
                                                 (= :k2 (mget y :name)))
                                        me :me? false :up? false :inside? true)]
                               (prn :k2!!!!! k2)
                               k2)))
          (msn-try "lime" #_(fn [me] (fmu :ancestor)))
          (msn-try "aqua" identity)
          (msn-try "fuchsia")
          (msn-try "sandybrown"))
        (tree-div data)))))