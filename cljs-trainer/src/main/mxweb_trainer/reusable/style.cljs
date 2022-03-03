(ns mxweb-trainer.reusable.style)

(def mission-style
  (str "display:flex"
    ";flex-direction:column"
    ";align-items:center"
    ";align-content:center"
    ";justify-content:center"
    ";padding:3px"
    ;;";background:pink"
    ))

(def row-top (str "display:flex"
               ";flex-direction:row"
               ";align-items:top"
               ";align-content:top"
               ";justify-content:center"
               ";padding:3px"))

(def column-left (str "display:flex"
                   ";flex-direction:column"
                   ";align-items:left"
                   ";align-content:left"
                   ";justify-content:center"
                   ";padding:3px"))

(def column-center (str "display:flex"
                     ";flex-direction:column"
                     ";align-items:center"
                     ";align-content:center"
                     ";justify-content:center"
                     ";padding:3px"))

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