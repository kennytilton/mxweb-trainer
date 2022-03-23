(ns mxweb-trainer.mission.m015-no-islands.extra
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 audio img input figure p a span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [mxweb-trainer.reusable.time :as timer]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.reusable.style :as style]))

(defn target-toggle [color color-name & [target-finder]]
  (button {:style   (str "min-width:2em;min-height:2em;margin:4px;border:outset;background:" color)
           :onclick (cF (when target-finder
                          (let [root (fmu :app-root)]
                            (let [search-me (md/fget :me (mget root :data)
                                              :must? true   ; throw an error if search fails
                                              :inside? true)]
                              (fn [event]
                                (let [target (target-finder search-me)]
                                  (if target
                                    (md/mswap! target :tagged? not)
                                    (do (prn :cannot-find-target-for!!!!! color-name :from search-me)
                                        (js/alert (str "Cannot find target for " color-name))))))))))}))

(defn mx-tree [spec]
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
(defn mxt-secret [mx] (mget mx :secret))

(defn render-data-tree [data-node]
  (div {:style (cF (str (style/column-center :padding "4px" :background "white")
                     (when (seq (md-kids data-node))
                       ";border: thin outset linen; padding:18px")))}
    {:node data-node}                                       ;; link rendered tree back to data tree
    (span {:style (cF (let [color (mxt-color$ data-node)]
                        (str "margin:3px;padding:3px;font-size:1.5em"
                          (if color
                            (if (mxt-tagged? data-node)
                              (str ";color:white;background:" color ";border: thick solid " color)
                              (str ";border: thick solid " color))))))}
      (str (mxt-name$ data-node)
        (when-let [s (mxt-secret data-node)]
          (str "=" s))))
    (when (seq (mget data-node :kids))
      (div {:style (style/row-top)}
        (map #(render-data-tree %) (mget data-node :kids))))))
