goog.provide('tiltontec.model.base');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,slot){
var G__29419 = new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__29419) : slot.call(null,G__29419));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571),slot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me","me",-139006693),me], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))?tiltontec.cell.base.c_value(c):null));

return true;
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.model !== 'undefined') && (typeof tiltontec.model.base !== 'undefined') && (typeof tiltontec.model.base.md_awaken_before !== 'undefined')){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29449 = cljs.core.get_global_hierarchy;
return (fexpr__29449.cljs$core$IFn$_invoke$arity$0 ? fexpr__29449.cljs$core$IFn$_invoke$arity$0() : fexpr__29449.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.model.base.md_awaken_before.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me);

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nascent","nascent",443401807),tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awakening","awakening",838364227));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function tiltontec$model$base$md_awaken_$_iter__29469(s__29470){
return (new cljs.core.LazySeq(null,(function (){
var s__29470__$1 = s__29470;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29470__$1);
if(temp__5753__auto__){
var s__29470__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29470__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29470__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29472 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29471 = (0);
while(true){
if((i__29471 < size__4651__auto__)){
var slot = cljs.core._nth(c__4650__auto__,i__29471);
cljs.core.chunk_append(b__29472,(function (){var temp__5753__auto____$1 = (function (){var G__29491 = tiltontec.model.base.md_cz(me);
var G__29492 = new cljs.core.Keyword(null,"not-found","not-found",-629079980);
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__29491,G__29492) : slot.call(null,G__29491,G__29492));
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var c = temp__5753__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(slot,me,(function (){var G__29499 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__29499) : slot.call(null,G__29499));
})(),tiltontec.cell.base.unbound,null);
} else {
return tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c);

}
} else {
return null;
}
})());

var G__29530 = (i__29471 + (1));
i__29471 = G__29530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29472),tiltontec$model$base$md_awaken_$_iter__29469(cljs.core.chunk_rest(s__29470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29472),null);
}
} else {
var slot = cljs.core.first(s__29470__$2);
return cljs.core.cons((function (){var temp__5753__auto____$1 = (function (){var G__29502 = tiltontec.model.base.md_cz(me);
var G__29503 = new cljs.core.Keyword(null,"not-found","not-found",-629079980);
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__29502,G__29503) : slot.call(null,G__29502,G__29503));
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var c = temp__5753__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(slot,me,(function (){var G__29506 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__29506) : slot.call(null,G__29506));
})(),tiltontec.cell.base.unbound,null);
} else {
return tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c);

}
} else {
return null;
}
})(),tiltontec$model$base$md_awaken_$_iter__29469(cljs.core.rest(s__29470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys(cljs.core.deref(me)));
})());

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),me], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

return me;
});

//# sourceMappingURL=tiltontec.model.base.js.map
