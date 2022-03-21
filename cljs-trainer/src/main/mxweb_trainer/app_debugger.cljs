(ns mxweb-trainer.app-debugger
  (:require [clojure.string :as str]
            [goog.dom :as dom]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency]]
            [tiltontec.model.core
             :refer [matrix fget mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 audio img input figure p a b span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.util.helper :as helper]))

(defn inject-mx [where what]
  (let [root (dom/getElement where)
        _ (assert root (str "inject-mx cannot find target with ID <" where ">"))
        app-matrix (md/make
                     ::training
                     :mx-dom (cFonce (md/with-par me
                                       (what))))
        app-dom (tag-dom-create
                  (md/mget app-matrix :mx-dom))]

    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))

(defn app-debugger []
  (div {:style (style/column-center
                 :padding "9px"
                 :background :pink)}
    {:target (cF (let [omx (helper/matrix-get :mx-trainer)]
                   (assert omx)
                   (prn :bam-omx (md/mget omx :mx-dom))
                   (let [sp (fget :spelling (md/mget omx :mx-dom) :inside? true)]
                     (assert sp)
                     (prn :bam-spelling sp)
                     sp)))}
    (span "got sp")))

(defn panel-install []
  (div {:onclick (fn [e] (inject-mx "app-debugger" app-debugger))}
    "Debug"))
