goog.provide('tiltontec.cell.observer');
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.observer !== 'undefined') && (typeof tiltontec.cell.observer.observe_by_type !== 'undefined')){
} else {
tiltontec.cell.observer.observe_by_type = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29223 = cljs.core.get_global_hierarchy;
return (fexpr__29223.cljs$core$IFn$_invoke$arity$0 ? fexpr__29223.cljs$core$IFn$_invoke$arity$0() : fexpr__29223.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe-by-type"),(function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.base.type_cljc(me)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new_val,old_val,c){
return null;
}));
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.observer !== 'undefined') && (typeof tiltontec.cell.observer.observe !== 'undefined')){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29224 = cljs.core.get_global_hierarchy;
return (fexpr__29224.cljs$core$IFn$_invoke$arity$0 ? fexpr__29224.cljs$core$IFn$_invoke$arity$0() : fexpr__29224.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe"),(function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.util.base.type_cljc(me)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (slot,me,new_val,old_val,c){
var temp__5751__auto__ = cljs.core.deref(tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_);
if(cljs.core.truth_(temp__5751__auto__)){
var obs = temp__5751__auto__;
return (obs.cljs$core$IFn$_invoke$arity$5 ? obs.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : obs.call(null,slot,me,new_val,old_val,c));
} else {
return tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c);
}
}));
tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(var_args){
var G__29226 = arguments.length;
switch (G__29226) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,tiltontec.cell.base.unbound,why);
}));

(tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

if(cljs.core.integer_QMARK_(cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_))){
} else {
throw (new Error("Assert failed: (integer? (clojure.core/deref +pulse+))"));
}

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_value(c),prior_value,c);

var temp__5753__auto__ = new cljs.core.Keyword(null,"obs","obs",-664011444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5753__auto__)){
var cell_observer = temp__5753__auto__;
var G__29227 = tiltontec.cell.base.c_slot(c);
var G__29228 = tiltontec.cell.base.c_model(c);
var G__29229 = tiltontec.cell.base.c_value(c);
var G__29230 = prior_value;
var G__29231 = c;
return (cell_observer.cljs$core$IFn$_invoke$arity$5 ? cell_observer.cljs$core$IFn$_invoke$arity$5(G__29227,G__29228,G__29229,G__29230,G__29231) : cell_observer.call(null,G__29227,G__29228,G__29229,G__29230,G__29231));
} else {
return null;
}
}));

(tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=tiltontec.cell.observer.js.map
