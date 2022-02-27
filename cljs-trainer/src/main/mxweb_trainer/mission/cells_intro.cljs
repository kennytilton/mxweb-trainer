(ns mxweb-trainer.mission.cells-intro
  (:require [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mxu-find-name] :as md]
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
   :wiki-url "https://github.com/kennytilton/mxweb-trainer/wiki/Hello,-Cells"
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

    (span {:style "font-size:1em"}
      "Click the time to have it updated.")

    (span {:style   (str "color:red"
                      ";font-size: 64px"
                      ";line-height: 1.2em")

           :onclick (fn [e]
                      ; A Matrix application has as its lifeblood an invisible reactive DAG of application
                      ; state, much as a spreadsheet interface masks the state flow from cell to cell.
                      ; Both of these require some state to come from outside the model: it cannot be
                      ; derived state all the way down.
                      ;
                      ; In our intro, the input is the system time, and here we let the user click
                      ; a button to inject the current time into the DAG:
                      (mset! (evt-mx e) :time-now (js/Date.)))

           :content (cF
                      ; When one change requires another, a developer has three problems:
                      ;   1. What are all the things that need to be updated to reflect the original change
                      ;   2. Recursively identifying updates necessitated by the secondary updates
                      ;   3. Updating them in the right order, when the DAG affected is substantial and
                      ;      cross-dependent. Failures here are known as "glitches", btw.
                      ;
                      ; By expressing a property value as a function of other property values, we provide
                      ; Matrix with the information it needs to handle all three tasks transparently and
                      ; with optimal efficiency.
                      ;
                      ; `cF` is a mnemonic for `formula cell` or `ruled cell`. It expands to
                      ;; (make-c-formula
                      ;     :code '~body
                      ;     :value unbound
                      ;     :rule (c-fn ~@body))
                      ;
                      ; Soon after a Matrix object is instantiated and added to the larger tree we
                      ; colloquially call a matrix, each of its formulaic cells will have its rule executed to
                      ; establish its initial value.
                      ;
                      (-> (mget me :time-now)
                          .toTimeString
                          (str/split " ")
                          first))}
      ;; The second map argument to an mxWeb tag function is for custom properties
      ;; that real DIVs know nothing about, but which proxy DIVs can use to react dynamically to user actions.
      ;; With these, we can get more re-use out of DIVs, because we do not need
      ;; to get into OO issues forever subclassing.
      ;;
      ;; `cI` is a mnemonic for "input cell"
      {:time-now (cI (js/Date.))})
    ; Here is the definition of cI:
    ;  (defn cI [value & option-kvs]
    ;    (apply make-cell
    ;         :value value
    ;         :input? true
    ;         option-kvs))
    ; Setting `:input?` to true lets us mutate that value imperatively, as in
    ; the mset! we see in the onclick handler on the span above.

    (p {:onclick (fn [e] (md/mswap! (evt-mx e) :counter inc))}
      {:counter (cI 0)}
      (str "Clicked " (mget me :counter) " times."))
    ))




    ;;
    ;; ----------------------------------------------------------------
    ;;   Mission Instructions
    ;; ----------------------------------------------------------------
    ;; Stuck? Come visit @kennytilton in the #matrix channel of Clojurians
