(ns mxweb-trainer.app-debugger
  (:require [clojure.string :as str]
            [goog.dom :as dom]
            [tiltontec.cell.evaluate :refer [not-to-be]]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.cell.base :refer-macros [without-c-dependency] :as cells]
            [tiltontec.model.core
             :refer [matrix fget mx-par mget mget mset! mxu-find-name fmu md-kids] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [h1 h2 h3 img input figure p a b span div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]
            [tiltontec.mxweb.html :refer [tag-dom-create]]
            [mxweb-trainer.reusable.style :as style]
            [mxweb-trainer.util.helper :as helper]))

;;; a lot of code here should be in mxWeb. RSN.

(defn inject-mx [where what]
  (let [root (dom/getElement where)
        _ (assert root (str "inject-mx cannot find target with ID <" where ">"))
        app-matrix (helper/matrix-register
                     (md/make
                       ::training
                       :id :mx-debugger
                       :mx-dom (cFonce (md/with-par me
                                         (what)))))
        app-dom (tag-dom-create
                  (md/mget app-matrix :mx-dom))]
    ;; (prn :debug-inner!!!!!!!! inject? (.-innerHTML root) )
    (set! (.-innerHTML root) nil)
    (dom/appendChild root app-dom)))

(defn toggle-mx [where what]
  (let [root (dom/getElement where)
        _ (assert root (str "inject-mx cannot find target with ID <" where ">"))]
    (if (str/blank? (.-innerHTML root))
      (inject-mx where what)
      (let [mx-debugger (helper/matrix-get :mx-debugger)]
        (set! (.-innerHTML root) nil)
        (helper/matrix-deregister mx-debugger)
        (not-to-be (md/mget mx-debugger :mx-dom))))))

(defn dom-tree [mx]
  (if (string? mx)
    (span {:style   "background:white;padding:4px"
           :content mx})
    (div {:style (style/column-center :padding "6px"
                   :border "thin inset"
                   :background "cyan"
                   )}
      {:target mx}
      (span {:style   "padding:9px"
             :content (cF (str "" (or (mget mx :name)
                                    (mget mx :id)
                                    (mget mx :content)
                                    "anon")))
             :onclick (fn [e]
                        (let [me (evt-mx e)
                              tgt (mget (mx-par me) :target)]
                          (assert me "no evtmx")
                          (assert tgt "no tgt")
                          (md/mset! tgt :xstyle ";background:yellow")))})
      (when (seq (md/md-kids mx))
        (div {:style (style/row-top :border "thin outset"
                       :justify-content "top"
                       :background "linen")}
          (doall (map (fn [mx]
                        (dom-tree mx))
                   (md/md-kids mx))))))))

(defn app-debugger []
  (div {:style (style/mission-style)}
    (h2 "debug panel")
    (div {:style (style/column-left
                   :padding "9px"
                   :background :pink)}
      {:target (cF (let [omx (helper/matrix-get :mx-trainer)]
                     (assert omx)
                     (fget :msn-socket (md/mget omx :mx-dom) :inside? true :must? true)
                     ; (prn :bam-omx (md/mget omx :mx-dom))
                     #_(let [sp (fget :spelling (md/mget omx :mx-dom) :inside? true)]
                         (assert sp)
                         ;(prn :bam-spelling sp)
                         sp)))}
      (dom-tree (mget me :target)))))

(defn panel-install []
  (div {:onclick (fn [e] (toggle-mx "app-debugger" app-debugger))}
    "Debug"))
