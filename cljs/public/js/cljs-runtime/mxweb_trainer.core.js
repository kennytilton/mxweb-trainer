goog.provide('mxweb_trainer.core');
cljs.core.enable_console_print_BANG_();
mxweb_trainer.core.color_input = (function mxweb_trainer$core$color_input(){
return tiltontec.mxweb.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-input"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Time color: ",cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"timecolor","timecolor",709788352),new cljs.core.Keyword("tag","type","tag/type",1175433270),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),"#f00"),new cljs.core.Keyword(null,"onchange","onchange",1355467329),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"prn","prn",1561684909,null),new cljs.core.Keyword(null,"evt","evt",-1251566867),cljs.core.list(new cljs.core.Symbol(null,"evt-mx","evt-mx",-1296508187,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"target-value","target-value",1545084325,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"mset!","mset!",836980241,null),cljs.core.list(new cljs.core.Symbol(null,"evt-mx","evt-mx",-1296508187,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"target-value","target-value",1545084325,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_par_STAR__orig_val__36570 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__36571 = me;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__36571);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Time color: ",(new cljs.core.List(null,tiltontec.mxweb.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"timecolor","timecolor",709788352),new cljs.core.Keyword("tag","type","tag/type",1175433270),"text",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.cI("#f00"),new cljs.core.Keyword(null,"onchange","onchange",1355467329),(function (e){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"evt","evt",-1251566867),tiltontec.mxweb.gen.evt_mx(e),tiltontec.mxweb.gen.target_value(e)], 0));

return tiltontec.model.core.mset_BANG_(tiltontec.mxweb.gen.evt_mx(e),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.mxweb.gen.target_value(e));
})], null),cljs.core.PersistentArrayMap.EMPTY,null),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__36570);
}})], 0)));
});
mxweb_trainer.core.clock = (function mxweb_trainer$core$clock(){
return tiltontec.mxweb.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"example-clock",new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"color:",cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-name","mxu-find-name",887938412,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"timecolor","timecolor",709788352)),new cljs.core.Keyword(null,"value","value",305978217)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return ["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(tiltontec.model.core.mxu_find_name(me,new cljs.core.Keyword(null,"timecolor","timecolor",709788352)),new cljs.core.Keyword(null,"value","value",305978217)))].join('');
})], 0)),new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"tick","tick",-835886976)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)),new cljs.core.Symbol(null,".toTimeString",".toTimeString",879367720,null),cljs.core.list(new cljs.core.Symbol("str","split","str/split",1040947342,null)," "),new cljs.core.Symbol(null,"first","first",996428481,null)),"*checks watch*")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"tick","tick",-835886976)))){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2((new Date()).toTimeString()," "));
} else {
return "*checks watch*";
}
})], 0))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tick","tick",-835886976),tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),true], 0)),new cljs.core.Keyword(null,"ticker","ticker",214613162),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("js","setInterval","js/setInterval",2090002939,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mset!","mset!",836980241,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"tick","tick",-835886976),true)),(1000))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return setInterval((function (){
return tiltontec.model.core.mset_BANG_(me,new cljs.core.Keyword(null,"tick","tick",-835886976),true);
}),(1000));
})], 0))], null),null);
});
mxweb_trainer.core.start = (function mxweb_trainer$core$start(){
console.log("start");

var root = goog.dom.getElement("app");
var app_matrix = tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("mxweb-trainer.core","ticktock","mxweb-trainer.core/ticktock",-1385015801),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Hello, world. 'Tis now...."),cljs.core.list(new cljs.core.Symbol(null,"clock","clock",746230400,null)),cljs.core.list(new cljs.core.Symbol(null,"color-input","color-input",696074651,null)))], null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR__orig_val__36572 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__36573 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__36573);

try{var _STAR_par_STAR__orig_val__36574 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__36575 = me;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__36575);

try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.mxweb.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Hello, world. 'Tis now...."),cljs.core.list(new cljs.core.Symbol(null,"clock","clock",746230400,null)),cljs.core.list(new cljs.core.Symbol(null,"color-input","color-input",696074651,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_par_STAR__orig_val__36576 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__36577 = me__$1;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__36577);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.mxweb.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Hello, world. 'Tis now....")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_par_STAR__orig_val__36578 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__36579 = me__$2;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__36579);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Hello, world. 'Tis now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__36578);
}})], 0))),(new cljs.core.List(null,mxweb_trainer.core.clock(),(new cljs.core.List(null,mxweb_trainer.core.color_input(),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__36576);
}})], 0)))], null);
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__36574);
}}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__36572);
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
