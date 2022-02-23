goog.provide('tiltontec.cell.core');
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29405 = arguments.length;
var i__4865__auto___29406 = (0);
while(true){
if((i__4865__auto___29406 < len__4864__auto___29405)){
args__4870__auto__.push((arguments[i__4865__auto___29406]));

var G__29413 = (i__4865__auto___29406 + (1));
i__4865__auto___29406 = G__29413;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"synapses","synapses",-614206130),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,(0),false,(0),new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null)], 0));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq29366){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29366));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29417 = arguments.length;
var i__4865__auto___29418 = (0);
while(true){
if((i__4865__auto___29418 < len__4864__auto___29417)){
args__4870__auto__.push((arguments[i__4865__auto___29418]));

var G__29421 = (i__4865__auto___29418 + (1));
i__4865__auto___29418 = G__29421;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_(rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,(0),false,(0),new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null)], 0));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq29369){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29369));
}));

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29428 = arguments.length;
var i__4865__auto___29429 = (0);
while(true){
if((i__4865__auto___29429 < len__4864__auto___29428)){
args__4870__auto__.push((arguments[i__4865__auto___29429]));

var G__29432 = (i__4865__auto___29429 + (1));
i__4865__auto___29429 = G__29432;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.cell.core.make_cell,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_kvs], 0));
}));

(tiltontec.cell.core.cI.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq29376){
var G__29377 = cljs.core.first(seq29376);
var seq29376__$1 = cljs.core.next(seq29376);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29377,seq29376__$1);
}));

tiltontec.cell.core.cset_BANG__GT_ = (function tiltontec$cell$core$cset_BANG__GT_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"c-reset-rejecting-undeferred!","c-reset-rejecting-undeferred!",1674321026),tiltontec.cell.base.c_slot(c)], 0));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity(new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot(c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
}));

}
}
});
tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){
return tiltontec.cell.core.cset_BANG__GT_(c,new_value);
});
tiltontec.cell.core.cswap_BANG__GT_ = (function tiltontec$cell$core$cswap_BANG__GT_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29435 = arguments.length;
var i__4865__auto___29436 = (0);
while(true){
if((i__4865__auto___29436 < len__4864__auto___29435)){
args__4870__auto__.push((arguments[i__4865__auto___29436]));

var G__29437 = (i__4865__auto___29436 + (1));
i__4865__auto___29436 = G__29437;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG__GT_(c,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.cell.evaluate._LT_cget(c),swap_fn_args));
}));

(tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$applyTo = (function (seq29396){
var G__29397 = cljs.core.first(seq29396);
var seq29396__$1 = cljs.core.next(seq29396);
var G__29398 = cljs.core.first(seq29396__$1);
var seq29396__$2 = cljs.core.next(seq29396__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29397,G__29398,seq29396__$2);
}));

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);

}
});

//# sourceMappingURL=tiltontec.cell.core.js.map
