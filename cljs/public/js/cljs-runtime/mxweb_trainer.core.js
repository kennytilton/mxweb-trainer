goog.provide('mxweb_trainer.core');
cljs.core.enable_console_print_BANG_();
mxweb_trainer.core.start = (function mxweb_trainer$core$start(){
console.log("start");

var root = goog.dom.getElement("app");
var app_matrix = tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mxweb-trainer.core","ticktock","mxweb-trainer.core/ticktock",-1385015801),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("ex1","mission","ex1/mission",-914247053,null))], null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR__orig_val__33193 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__33194 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__33194);

try{var _STAR_par_STAR__orig_val__33195 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__33196 = me;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__33196);

try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mxweb_trainer.mission.just_html.mission()], null);
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__33195);
}}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__33193);
}})], 0))], 0));
var app_dom = tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(app_matrix,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107)));
(root.innerHTML = null);

return goog.dom.appendChild(root,app_dom);
});
mxweb_trainer.core.init = (function mxweb_trainer$core$init(){
console.log("init");

return mxweb_trainer.core.start();
});
mxweb_trainer.core.stop = (function mxweb_trainer$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=mxweb_trainer.core.js.map
