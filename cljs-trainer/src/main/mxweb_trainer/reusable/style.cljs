(ns mxweb-trainer.reusable.style
  (:require
    [tiltontec.mxweb.style :refer [make-css-inline style-string]]))

(defn row-top [& override-keyvals]
  (style-string (merge {:display        :flex
                         :flex-direction :row
                         :align-items    :top
                         :align-content  :top}
                  (apply hash-map override-keyvals))))

(defn row-center [& override-keyvals]
  (style-string (merge {:display        :flex
                        :flex-direction :row
                        :align-items    :center
                        :align-content  :center
                        :justify-content  :center}
                  (apply hash-map override-keyvals))))

(defn column-center [& override-keyvals]
  (style-string (merge {:display        :flex
                        :flex-direction :column
                        :align-items    :center
                        :align-content  :center
                        :justify-content  :center}
                  (apply hash-map override-keyvals))))

(defn column-left [& override-keyvals]
  (style-string (merge {:display        :flex
                        :flex-direction :column
                        :align-items    :left
                        :align-content  :left
                        :justify-content  :left}
                  (apply hash-map override-keyvals))))

(defn mission-style [& override-keyvals]
  (apply column-center :padding "3px" override-keyvals))

(def nice-button-style
  (str "background:#ea4c89"
    ";color:white"
    ";font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;"
    ";font-size: 14px;"
    ";font-weight: 500;"
    ";cursor:pointer"
    ";height: 40px"
    ";padding: 10px 16px"
    ";transition: color 100ms"
    ";border-radius:8px;border-style:none"))

(def uncolored-button-style
  (str "font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;"
    ";font-size: 14px;"
    ";font-weight: 500;"
    ";cursor:pointer"
    ";height: 40px"
    ";padding: 10px 16px"
    ";transition: color 100ms"
    ";border-radius:8px;border-style:none"))