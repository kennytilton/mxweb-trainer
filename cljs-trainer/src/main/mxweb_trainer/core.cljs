(ns mxweb-trainer.core
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
            [tiltontec.mxweb.html :refer [tag-dom-create]]
            [mxweb-trainer.util.helper :as helper]
            [mxweb-trainer.mission-control :as mc]))

(enable-console-print!)

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (let [root (dom/getElement "app")
        app-matrix (helper/matrix-register
                     (md/make
                     ::training
                     :id :mx-trainer
                     :mx-dom (cFonce (md/with-par me
                                       (mc/training-root)))))
        app-dom (tag-dom-create
                  (md/mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

