goog.provide('tiltontec.cell.base');
tiltontec.cell.base._PLUS_pulse_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.cell.base.pulse_now = (function tiltontec$cell$base$pulse_now(){
return cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_);
});
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_pulse_PLUS_,(0));
});
tiltontec.cell.base._STAR_causation_STAR_ = cljs.core.List.EMPTY;
tiltontec.cell.base._STAR_call_stack_STAR_ = null;
/**
 * *depender* let's us differentiate between the call stack and
 * and dependency. The problem with overloading *call-stack* with both roles
 * is that we miss cyclic reentrance when we use without-c-dependency in a
 * rule to get once behavior or just when fm-traversing to find someone
 */
tiltontec.cell.base._STAR_depender_STAR_ = null;
tiltontec.cell.base._STAR_defer_changes_STAR_ = false;
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.unbound !== 'undefined')){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("unbound-cell-value");
}
tiltontec.cell.base.when_bound = (function tiltontec$cell$base$when_bound(x){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,tiltontec.cell.base.unbound)){
return x;
} else {
return null;
}
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.uncurrent !== 'undefined')){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_not_to_be_STAR_ = false;
tiltontec.cell.base._STAR_unfinished_business_STAR_ = null;
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_finbiz_id_STAR_ = (0);
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._PLUS_c_debug_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var G__26746 = arguments.length;
switch (G__26746) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_c_debug_PLUS_,new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$2(options,false));

cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_pulse_PLUS_,(0));

return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_client_q_handler_PLUS_,new cljs.core.Keyword(null,"client-queue-handler","client-queue-handler",-817174181).cljs$core$IFn$_invoke$arity$1(options));
}));

(tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1);

tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first(tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var G__26752 = arguments.length;
switch (G__26752) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1(true);
}));

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
var fexpr__26753 = cljs.core.deref(tiltontec.cell.base._PLUS_c_stopper_PLUS_);
return (fexpr__26753.cljs$core$IFn$_invoke$arity$1 ? fexpr__26753.cljs$core$IFn$_invoke$arity$1(why) : fexpr__26753.call(null,why));
}));

(tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1);

tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_);
});
tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"ustack> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(var_args){
var G__26759 = arguments.length;
switch (G__26759) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___26792 = arguments.length;
var i__4865__auto___26793 = (0);
while(true){
if((i__4865__auto___26793 < len__4864__auto___26792)){
args_arr__4885__auto__.push((arguments[i__4865__auto___26793]));

var G__26794 = (i__4865__auto___26793 + (1));
i__4865__auto___26793 = G__26794;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1 = (function (assertion){
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["c-assert anon failed"], 0));
}
}));

(tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic = (function (assertion,fmt$,fmt_args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["c-assert> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_args)].join('')], 0));
}
}
}));

/** @this {Function} */
(tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq26756){
var G__26757 = cljs.core.first(seq26756);
var seq26756__$1 = cljs.core.next(seq26756);
var G__26758 = cljs.core.first(seq26756__$1);
var seq26756__$2 = cljs.core.next(seq26756__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26757,G__26758,seq26756__$2);
}));

(tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2));

tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26801 = arguments.length;
var i__4865__auto___26802 = (0);
while(true){
if((i__4865__auto___26802 < len__4864__auto___26801)){
args__4870__auto__.push((arguments[i__4865__auto___26802]));

var G__26803 = (i__4865__auto___26802 + (1));
i__4865__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)], 0));
}
}));

(tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq26761){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26761));
}));

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26806 = arguments.length;
var i__4865__auto___26807 = (0);
while(true){
if((i__4865__auto___26807 < len__4864__auto___26806)){
args__4870__auto__.push((arguments[i__4865__auto___26807]));

var G__26808 = (i__4865__auto___26807 + (1));
i__4865__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"WARNING: ",args)], 0));
}
}));

(tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq26763){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26763));
}));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
tiltontec.cell.base.ia_type = (function tiltontec$cell$base$ia_type(it){
if((it instanceof cljs.core.Atom)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(it));
} else {
return cljs.core.type(it);

}
});
tiltontec.cell.base.ia_type_QMARK_ = (function tiltontec$cell$base$ia_type_QMARK_(it,typ){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(it),typ);
});
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.cell.base.ia_type_QMARK_(c,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037));
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
return tiltontec.cell.base.ia_type_QMARK_(x,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_slot = (function tiltontec$cell$base$c_slot(ref){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return new cljs.core.Keyword(null,"input?","input?",-1792843173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return new cljs.core.Keyword(null,"pulse","pulse",-244494476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_observed = (function tiltontec$cell$base$c_pulse_observed(ref){
return new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synapses = (function tiltontec$cell$base$c_synapses(ref){
return new cljs.core.Keyword(null,"synapses","synapses",-614206130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(tiltontec.util.core.any_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (any-ref? c)"));
}

if(((tiltontec.cell.base.c_ref_QMARK_(c)) && (cljs.core.map_QMARK_(cljs.core.deref(c))))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
} else {
return cljs.core.deref(c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
return (((!(cljs.core.map_QMARK_(cljs.core.deref(c))))) || ((((!(cljs.core.contains_QMARK_(cljs.core.deref(c),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c)))))));
} else {
return true;

}
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
});
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__5751__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5751__auto__)){
var md = temp__5751__auto__;
var or__4253__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(md));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "anon";
}
} else {
return "no-md";
}
});
tiltontec.cell.base.c_slot_name = (function tiltontec$cell$base$c_slot_name(rc){
return new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
});
tiltontec.cell.base.c_value_state = (function tiltontec$cell$base$c_value_state(rc){
var v = tiltontec.cell.base.c_value(rc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.unbound)){
return new cljs.core.Keyword(null,"unbound","unbound",-1366326654);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.uncurrent)){
return new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unbound","unbound",-1366326654),tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.caller_ensure = (function tiltontec$cell$base$caller_ensure(used,new_caller){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),new_caller));
});
tiltontec.cell.base.caller_drop = (function tiltontec$cell$base$caller_drop(used,caller){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(used,cljs.core.assoc,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(c){
var iter__4652__auto___26831 = (function tiltontec$cell$base$unlink_from_callers_$_iter__26783(s__26784){
return (new cljs.core.LazySeq(null,(function (){
var s__26784__$1 = s__26784;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26784__$1);
if(temp__5753__auto__){
var s__26784__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26784__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26784__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26786 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26785 = (0);
while(true){
if((i__26785 < size__4651__auto__)){
var caller = cljs.core._nth(c__4650__auto__,i__26785);
cljs.core.chunk_append(b__26786,tiltontec.cell.base.caller_drop(c,caller));

var G__26837 = (i__26785 + (1));
i__26785 = G__26837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26786),tiltontec$cell$base$unlink_from_callers_$_iter__26783(cljs.core.chunk_rest(s__26784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26786),null);
}
} else {
var caller = cljs.core.first(s__26784__$2);
return cljs.core.cons(tiltontec.cell.base.caller_drop(c,caller),tiltontec$cell$base$unlink_from_callers_$_iter__26783(cljs.core.rest(s__26784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4652__auto___26831(tiltontec.cell.base.c_callers(c));

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),c], null),null);
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_slot,(function (){var G__26787 = cljs.core.deref(c);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__26787) : k.call(null,G__26787));
})()));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return tiltontec.util.core.any_ref_QMARK_(x);
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined')){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26788 = cljs.core.get_global_hierarchy;
return (fexpr__26788.cljs$core$IFn$_invoke$arity$0 ? fexpr__26788.cljs$core$IFn$_invoke$arity$0() : fexpr__26788.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.base","mdead?"),(function (me){
if((((me == null)) || (tiltontec.cell.base.md_ref_QMARK_(me)))){
} else {
throw (new Error("Assert failed: (or (nil? me) (md-ref? me))"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null))], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.cell.base.mdead_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
var temp__5751__auto__ = cljs.core.meta(me);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396).cljs$core$IFn$_invoke$arity$1(m));
} else {
return false;
}
}));
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});
tiltontec.cell.base.c_debug = (function tiltontec$cell$base$c_debug(c,tag){
return null;
});

//# sourceMappingURL=tiltontec.cell.base.js.map
