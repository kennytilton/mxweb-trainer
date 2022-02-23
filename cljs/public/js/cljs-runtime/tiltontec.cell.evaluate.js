goog.provide('tiltontec.cell.evaluate');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__5753__auto___29343 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5753__auto___29343)){
var me_29345 = temp__5753__auto___29343;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_29345,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(tiltontec.cell.base.c_optimized_away_QMARK_(used)){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot(used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_useds(tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure(used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(cljs.core.truth_(tiltontec.cell.base._STAR_not_to_be_STAR_)){
if(tiltontec.cell.base.c_unbound_QMARK_(c)){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":unbound!!!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.c_slot], 0));

return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3("evic> unbound slot %s of model %s",tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_model(c));
} else {
if(tiltontec.cell.base.c_valid_QMARK_(c)){
return tiltontec.cell.base.c_value(c);
} else {
return null;
}
}
} else {
if(tiltontec.cell.integrity.c_current_QMARK_(c)){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = tiltontec.cell.base.c_input_QMARK_(c);
if(cljs.core.truth_(and__4251__auto__)){
return ((tiltontec.cell.base.c_valid_QMARK_(c)) && ((!(((tiltontec.cell.base.c_formula_QMARK_(c)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_optimize(c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value(c) == null)))))))));
} else {
return and__4251__auto__;
}
})())){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var temp__5753__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5753__auto__)){
var md = temp__5753__auto__;
return tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_model(c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model(c),c);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var G__29245 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__29246 = G__29245;
var seq__29247 = cljs.core.seq(vec__29246);
var first__29248 = cljs.core.first(seq__29247);
var seq__29247__$1 = cljs.core.next(seq__29247);
var used = first__29248;
var urest = seq__29247__$1;
var G__29245__$1 = G__29245;
while(true){
var vec__29249 = G__29245__$1;
var seq__29250 = cljs.core.seq(vec__29249);
var first__29251 = cljs.core.first(seq__29250);
var seq__29250__$1 = cljs.core.next(seq__29250);
var used__$1 = first__29251;
var urest__$1 = seq__29250__$1;
if(cljs.core.truth_(used__$1)){
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c));

var or__4253__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed(used__$1) > tiltontec.cell.base.c_pulse(c));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var G__29370 = urest__$1;
G__29245__$1 = G__29370;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(tiltontec.cell.integrity.c_current_QMARK_(c)){
} else {
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer) : tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer));
}

return tiltontec.cell.base.c_value(c);
} else {
tiltontec.cell.integrity.c_pulse_update(c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value(c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
var result__26632__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__26632__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c))))))){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__26632__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency(c);
} else {
}

return result__26632__auto__;
} else {
if(tiltontec.util.core.any_ref_QMARK_(c)){
return cljs.core.deref(c);
} else {
return c;

}
}
});
tiltontec.cell.evaluate._LT_cget = (function tiltontec$cell$evaluate$_LT_cget(c){
return tiltontec.cell.evaluate.c_get(c);
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__29252 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(1),null);
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error(["Assert failed: ","calc-n-set","\n","(map? (clojure.core/deref c))"].join('')));
}

return (tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3(c,raw_value,propagation_code) : tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code));
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value*, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 * 
 *   * Well, we also look to see if a synaptic cell has attached a
 *   propagaion code to a vector used to wrap the raw value, which we then unpack.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR__orig_val__29255 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__29256 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__29257 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__29258 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__29259 = c;
var _STAR_defer_changes_STAR__temp_val__29260 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__29258);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29259);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__29260);

try{(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380)) : tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380)));

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__29261 = tiltontec.cell.base.c_rule(c);
return (fexpr__29261.cljs$core$IFn$_invoke$arity$1 ? fexpr__29261.cljs$core$IFn$_invoke$arity$1(c) : fexpr__29261.call(null,c));
})();
var prop_code_QMARK_ = (function (){var and__4251__auto__ = tiltontec.cell.base.c_synaptic_QMARK_(c);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.vector_QMARK_(raw_value)) && (cljs.core.contains_QMARK_(cljs.core.meta(raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905))));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__29257);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29256);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__29255);
}});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.c_awaken !== 'undefined')){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29262 = cljs.core.get_global_hierarchy;
return (fexpr__29262.cljs$core$IFn$_invoke$arity$0 ? fexpr__29262.cljs$core$IFn$_invoke$arity$0() : fexpr__29262.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),(function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":awk-fallthru-entry",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(c),cljs.core.seq_QMARK_(c),cljs.core.coll_QMARK_(c),cljs.core.vector_QMARK_(c)], 0));

if(cljs.core.coll_QMARK_(c)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function tiltontec$cell$evaluate$iter__29266(s__29267){
return (new cljs.core.LazySeq(null,(function (){
var s__29267__$1 = s__29267;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29267__$1);
if(temp__5753__auto__){
var s__29267__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29267__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29267__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29269 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29268 = (0);
while(true){
if((i__29268 < size__4651__auto__)){
var ce = cljs.core._nth(c__4650__auto__,i__29268);
cljs.core.chunk_append(b__29269,tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce));

var G__29386 = (i__29268 + (1));
i__29268 = G__29386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29269),tiltontec$cell$evaluate$iter__29266(cljs.core.chunk_rest(s__29267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29269),null);
}
} else {
var ce = cljs.core.first(s__29267__$2);
return cljs.core.cons(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce),tiltontec$cell$evaluate$iter__29266(cljs.core.rest(s__29267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(c);
})());
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),((tiltontec.util.core.any_ref_QMARK_(c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type(c),cljs.core.deref(c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type(c)], null))], 0));

}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c))){
var temp__5753__auto___29390 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5753__auto___29390)){
var me_29391 = temp__5753__auto___29390;
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),me_29391], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR__orig_val__29278 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29279 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29279);

try{if(tiltontec.cell.integrity.c_current_QMARK_(c)){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29278);
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__26632__auto__ = new_value;
var _STAR_depender_STAR__orig_val__29281_29392 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29282_29393 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29282_29393);

try{var prior_value_29394 = tiltontec.cell.base.c_value(c);
var prior_state_29395 = tiltontec.cell.base.c_value_state(c);
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__4251__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c));
} else {
return and__4251__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_slot(c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update(c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_29395]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,true);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false)){
return null;
} else {
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_29394) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_29394));
}
}
}
})())){
var callers_29420 = tiltontec.cell.base.c_callers(c);
var temp__5753__auto___29422 = (function (){var and__4251__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(and__4251__auto__){
return tiltontec.cell.base.c_optimize(c);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___29422)){
var optimize_29423 = temp__5753__auto___29422;
var G__29284_29424 = optimize_29423;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__29284_29424)){
if(cljs.core.truth_(tiltontec.cell.base.c_value(c))){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot(c)], 0));

(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)) : tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__29284_29424)){
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_29394) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_29394));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29284_29424)].join('')));

}
}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970))) || (tiltontec.cell.base.c_optimized_away_QMARK_(c)))){
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_29394,callers_29420) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_29394,callers_29420));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29281_29392);
}
return result__26632__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__4652__auto___29431 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__29286(s__29287){
return (new cljs.core.LazySeq(null,(function (){
var s__29287__$1 = s__29287;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29287__$1);
if(temp__5753__auto__){
var s__29287__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29287__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29287__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29289 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29288 = (0);
while(true){
if((i__29288 < size__4651__auto__)){
var used = cljs.core._nth(c__4650__auto__,i__29288);
cljs.core.chunk_append(b__29289,tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)));

var G__29433 = (i__29288 + (1));
i__29288 = G__29433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29289),tiltontec$cell$evaluate$unlink_from_used_$_iter__29286(cljs.core.chunk_rest(s__29287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29289),null);
}
} else {
var used = cljs.core.first(s__29287__$2);
return cljs.core.cons(tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__29286(cljs.core.rest(s__29287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4652__auto___29431(tiltontec.cell.base.c_useds(c));

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5753__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5753__auto__)){
var me = temp__5753__auto__;
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_pulse_observed(c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__4251__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.empty_QMARK_(tiltontec.cell.base.c_useds(c));
if(and__4251__auto____$1){
var and__4251__auto____$2 = tiltontec.cell.base.c_optimize(c);
if(cljs.core.truth_(and__4251__auto____$2)){
return (((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))) && (((tiltontec.cell.base.c_valid_QMARK_(c)) && (((cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c))) && (cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))))))));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__5753__auto___29439 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5753__auto___29439)){
var me_29440 = temp__5753__auto___29439;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_29440], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_29440)),tiltontec.cell.base.c_slot(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__29294_29441 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__29295_29442 = null;
var count__29296_29443 = (0);
var i__29297_29444 = (0);
while(true){
if((i__29297_29444 < count__29296_29443)){
var caller_29445 = chunk__29295_29442.cljs$core$IIndexed$_nth$arity$2(null,i__29297_29444);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_29445,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_29445)));

tiltontec.cell.base.caller_drop(c,caller_29445);

tiltontec.cell.evaluate.ensure_value_is_current(caller_29445,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);


var G__29453 = seq__29294_29441;
var G__29454 = chunk__29295_29442;
var G__29455 = count__29296_29443;
var G__29456 = (i__29297_29444 + (1));
seq__29294_29441 = G__29453;
chunk__29295_29442 = G__29454;
count__29296_29443 = G__29455;
i__29297_29444 = G__29456;
continue;
} else {
var temp__5753__auto___29457 = cljs.core.seq(seq__29294_29441);
if(temp__5753__auto___29457){
var seq__29294_29458__$1 = temp__5753__auto___29457;
if(cljs.core.chunked_seq_QMARK_(seq__29294_29458__$1)){
var c__4679__auto___29459 = cljs.core.chunk_first(seq__29294_29458__$1);
var G__29460 = cljs.core.chunk_rest(seq__29294_29458__$1);
var G__29461 = c__4679__auto___29459;
var G__29462 = cljs.core.count(c__4679__auto___29459);
var G__29463 = (0);
seq__29294_29441 = G__29460;
chunk__29295_29442 = G__29461;
count__29296_29443 = G__29462;
i__29297_29444 = G__29463;
continue;
} else {
var caller_29464 = cljs.core.first(seq__29294_29458__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_29464,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_29464)));

tiltontec.cell.base.caller_drop(c,caller_29464);

tiltontec.cell.evaluate.ensure_value_is_current(caller_29464,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);


var G__29465 = cljs.core.next(seq__29294_29458__$1);
var G__29466 = null;
var G__29467 = (0);
var G__29468 = (0);
seq__29294_29441 = G__29465;
chunk__29295_29442 = G__29466;
count__29296_29443 = G__29467;
i__29297_29444 = G__29468;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(c,tiltontec.cell.base.c_value(c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.evaluate.unlink_from_used(c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_(c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
tiltontec.cell.evaluate.not_to_be_self = (function tiltontec$cell$evaluate$not_to_be_self(me){
var seq__29300_29473 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__29301_29474 = null;
var count__29302_29475 = (0);
var i__29303_29476 = (0);
while(true){
if((i__29303_29476 < count__29302_29475)){
var c_29477 = chunk__29301_29474.cljs$core$IIndexed$_nth$arity$2(null,i__29303_29476);
if(cljs.core.truth_(c_29477)){
tiltontec.cell.evaluate.c_quiesce(c_29477);
} else {
}


var G__29479 = seq__29300_29473;
var G__29480 = chunk__29301_29474;
var G__29481 = count__29302_29475;
var G__29482 = (i__29303_29476 + (1));
seq__29300_29473 = G__29479;
chunk__29301_29474 = G__29480;
count__29302_29475 = G__29481;
i__29303_29476 = G__29482;
continue;
} else {
var temp__5753__auto___29483 = cljs.core.seq(seq__29300_29473);
if(temp__5753__auto___29483){
var seq__29300_29484__$1 = temp__5753__auto___29483;
if(cljs.core.chunked_seq_QMARK_(seq__29300_29484__$1)){
var c__4679__auto___29485 = cljs.core.chunk_first(seq__29300_29484__$1);
var G__29486 = cljs.core.chunk_rest(seq__29300_29484__$1);
var G__29487 = c__4679__auto___29485;
var G__29488 = cljs.core.count(c__4679__auto___29485);
var G__29489 = (0);
seq__29300_29473 = G__29486;
chunk__29301_29474 = G__29487;
count__29302_29475 = G__29488;
i__29303_29476 = G__29489;
continue;
} else {
var c_29490 = cljs.core.first(seq__29300_29484__$1);
if(cljs.core.truth_(c_29490)){
tiltontec.cell.evaluate.c_quiesce(c_29490);
} else {
}


var G__29494 = cljs.core.next(seq__29300_29484__$1);
var G__29495 = null;
var G__29496 = (0);
var G__29497 = (0);
seq__29300_29473 = G__29494;
chunk__29301_29474 = G__29495;
count__29302_29475 = G__29496;
i__29303_29476 = G__29497;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(me,null);

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.not_to_be !== 'undefined')){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29307 = cljs.core.get_global_hierarchy;
return (fexpr__29307.cljs$core$IFn$_invoke$arity$0 ? fexpr__29307.cljs$core$IFn$_invoke$arity$0() : fexpr__29307.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","not-to-be"),(function (me){
if(tiltontec.cell.base.md_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type(me)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"not2be-default","not2be-default",-728051456),cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),me], 0));

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined')){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29309 = cljs.core.get_global_hierarchy;
return (fexpr__29309.cljs$core$IFn$_invoke$arity$0 ? fexpr__29309.cljs$core$IFn$_invoke$arity$0() : fexpr__29309.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),(function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type(cljs.core.deref(me)):null),slot], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__29311 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_slot(c));
}
})();
return (fexpr__29311.cljs$core$IFn$_invoke$arity$2 ? fexpr__29311.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__29311.call(null,new_value,old_value));
})());
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(cljs.core.truth_(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR__orig_val__29316 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__29317 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__29318 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__29319 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__29320 = null;
var _STAR_call_stack_STAR__temp_val__29321 = null;
var _STAR_c_prop_depth_STAR__temp_val__29322 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__29323 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29320);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__29321);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__29322);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__29323);

try{if(cljs.core.truth_((function (){var and__4251__auto__ = prior_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4251__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_(cljs.core.type(tiltontec.cell.base.c_model(c)),tiltontec.cell.base.c_slot(c));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var temp__5753__auto___29507 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5753__auto___29507)){
var ownees_29508 = temp__5753__auto___29507;
var seq__29324_29509 = cljs.core.seq(ownees_29508);
var chunk__29325_29510 = null;
var count__29326_29511 = (0);
var i__29327_29512 = (0);
while(true){
if((i__29327_29512 < count__29326_29511)){
var ownee_29513 = chunk__29325_29510.cljs$core$IIndexed$_nth$arity$2(null,i__29327_29512);
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_29513);


var G__29514 = seq__29324_29509;
var G__29515 = chunk__29325_29510;
var G__29516 = count__29326_29511;
var G__29517 = (i__29327_29512 + (1));
seq__29324_29509 = G__29514;
chunk__29325_29510 = G__29515;
count__29326_29511 = G__29516;
i__29327_29512 = G__29517;
continue;
} else {
var temp__5753__auto___29518__$1 = cljs.core.seq(seq__29324_29509);
if(temp__5753__auto___29518__$1){
var seq__29324_29519__$1 = temp__5753__auto___29518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29324_29519__$1)){
var c__4679__auto___29520 = cljs.core.chunk_first(seq__29324_29519__$1);
var G__29521 = cljs.core.chunk_rest(seq__29324_29519__$1);
var G__29522 = c__4679__auto___29520;
var G__29523 = cljs.core.count(c__4679__auto___29520);
var G__29524 = (0);
seq__29324_29509 = G__29521;
chunk__29325_29510 = G__29522;
count__29326_29511 = G__29523;
i__29327_29512 = G__29524;
continue;
} else {
var ownee_29525 = cljs.core.first(seq__29324_29519__$1);
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_29525);


var G__29526 = cljs.core.next(seq__29324_29519__$1);
var G__29527 = null;
var G__29528 = (0);
var G__29529 = (0);
seq__29324_29509 = G__29526;
chunk__29325_29510 = G__29527;
count__29326_29511 = G__29528;
i__29327_29512 = G__29529;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

(tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2(c,callers) : tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers));

if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}
}

return tiltontec.cell.evaluate.ephemeral_reset(c);
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__29319);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__29318);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__29317);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29316);
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_(callers)){
return null;
} else {
var causation = cljs.core.cons(c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity(new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,(function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_model(c)))){
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("WHOAA!!!! dead by time :tell-deps dispatched; bailing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
} else {
var _STAR_causation_STAR__orig_val__29330 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__29331 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__29331);

try{var seq__29332 = cljs.core.seq(cljs.core.seq(callers));
var chunk__29333 = null;
var count__29334 = (0);
var i__29335 = (0);
while(true){
if((i__29335 < count__29334)){
var caller = chunk__29333.cljs$core$IIndexed$_nth$arity$2(null,i__29335);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}


var G__29531 = seq__29332;
var G__29532 = chunk__29333;
var G__29533 = count__29334;
var G__29534 = (i__29335 + (1));
seq__29332 = G__29531;
chunk__29333 = G__29532;
count__29334 = G__29533;
i__29335 = G__29534;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29332);
if(temp__5753__auto__){
var seq__29332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29332__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29332__$1);
var G__29535 = cljs.core.chunk_rest(seq__29332__$1);
var G__29536 = c__4679__auto__;
var G__29537 = cljs.core.count(c__4679__auto__);
var G__29538 = (0);
seq__29332 = G__29535;
chunk__29333 = G__29536;
count__29334 = G__29537;
i__29335 = G__29538;
continue;
} else {
var caller = cljs.core.first(seq__29332__$1);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}


var G__29539 = cljs.core.next(seq__29332__$1);
var G__29540 = null;
var G__29541 = (0);
var G__29542 = (0);
seq__29332 = G__29539;
chunk__29333 = G__29540;
count__29334 = G__29541;
i__29335 = G__29542;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__29330);
}}
}));
}
});

//# sourceMappingURL=tiltontec.cell.evaluate.js.map
