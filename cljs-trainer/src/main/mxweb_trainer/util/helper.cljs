(ns mxweb-trainer.util.helper
  (:require [goog.dom :as dom]
            [clojure.string :as str]
            [tiltontec.cell.core :refer-macros [cF cFonce] :refer [cI]]
            [tiltontec.model.core
             :refer [matrix mx-par mget mget mset! mset!
                     mxi-find mxu-find-name] :as md]
            [tiltontec.mxweb.gen-macro
             :refer-macros [section audio img header h1 h2 h3 input footer p a span label ul li div button br]]
            [tiltontec.mxweb.gen
             :refer [make-tag dom-tag evt-mx target-value]]))

(defn find-and-set
  "Return an event handler that will search up for a named mx model
  and set the given property to the given value"
  [name property value]
  (fn [e]
    (md/mset!
      (mxu-find-name (evt-mx e) name)
      property value)))

(defn its-just-html-click-handler [e]
  (md/mset!
    (mxu-find-name (evt-mx e) :dum-dum)
    :success true))