goog.provide('tiltontec.model.core');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["md-get passed nil for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
var temp__5751__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__29543 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__29543) : slot.call(null,G__29543));
}
} else {
return null;
}
});
tiltontec.model.core.mget = (function tiltontec$model$core$mget(me,slot){
return tiltontec.model.core.md_get(me,slot);
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get(me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__5751__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reset-oops","reset-oops",896366160)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reset-meta","reset-meta",-881217469),cljs.core.meta(me)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)){
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type(me));
} else {
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(cljs.core.str,"change to slot not mediated by cell and map lacks slot ",slot,"\n         ;; but has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(me))));
}
}
});
tiltontec.model.core.mset_BANG_ = (function tiltontec$model$core$mset_BANG_(me,slot,new_value){
return tiltontec.model.core.md_reset_BANG_(me,slot,new_value);
});
tiltontec.model.core.mswap_BANG_ = (function tiltontec$model$core$mswap_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29793 = arguments.length;
var i__4865__auto___29794 = (0);
while(true){
if((i__4865__auto___29794 < len__4864__auto___29793)){
args__4870__auto__.push((arguments[i__4865__auto___29794]));

var G__29795 = (i__4865__auto___29794 + (1));
i__4865__auto___29794 = G__29795;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (me,slot,swap_fn,swap_fn_args){
return tiltontec.model.core.mset_BANG_(me,slot,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.model.core.mget(me,slot),swap_fn_args));
}));

(tiltontec.model.core.mswap_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq29557){
var G__29558 = cljs.core.first(seq29557);
var seq29557__$1 = cljs.core.next(seq29557);
var G__29559 = cljs.core.first(seq29557__$1);
var seq29557__$2 = cljs.core.next(seq29557__$1);
var G__29560 = cljs.core.first(seq29557__$2);
var seq29557__$3 = cljs.core.next(seq29557__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29558,G__29559,G__29560,seq29557__$3);
}));

tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__5751__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29796 = arguments.length;
var i__4865__auto___29797 = (0);
while(true){
if((i__4865__auto___29797 < len__4864__auto___29796)){
args__4870__auto__.push((arguments[i__4865__auto___29797]));

var G__29798 = (i__4865__auto___29797 + (1));
i__4865__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_(cljs.core.count(arg_list))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,arg_list);
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29638){
var vec__29639 = p__29638;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29639,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,((tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29646){
var vec__29648 = p__29646;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29648,(1),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),slot)));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys(iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))], 0))], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29653){
var vec__29654 = p__29653;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29654,(1),null);
return tiltontec.model.base.md_install_cell(me,slot,v);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity(new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,(function (opcode,defer_info){
return tiltontec.model.base.md_awaken(me);
}));

return me;

}
}));

(tiltontec.model.core.make.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq29592){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29592));
}));

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.md_get(me,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
tiltontec.model.core.fm_kids_observe = (function tiltontec$model$core$fm_kids_observe(me,newk,oldk,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
var seq__29666 = cljs.core.seq(lostks);
var chunk__29667 = null;
var count__29668 = (0);
var i__29669 = (0);
while(true){
if((i__29669 < count__29668)){
var k = chunk__29667.cljs$core$IIndexed$_nth$arity$2(null,i__29669);
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k);


var G__29812 = seq__29666;
var G__29813 = chunk__29667;
var G__29814 = count__29668;
var G__29815 = (i__29669 + (1));
seq__29666 = G__29812;
chunk__29667 = G__29813;
count__29668 = G__29814;
i__29669 = G__29815;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29666);
if(temp__5753__auto__){
var seq__29666__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29666__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29666__$1);
var G__29816 = cljs.core.chunk_rest(seq__29666__$1);
var G__29817 = c__4679__auto__;
var G__29818 = cljs.core.count(c__4679__auto__);
var G__29819 = (0);
seq__29666 = G__29816;
chunk__29667 = G__29817;
count__29668 = G__29818;
i__29669 = G__29819;
continue;
} else {
var k = cljs.core.first(seq__29666__$1);
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k);


var G__29822 = cljs.core.next(seq__29666__$1);
var G__29823 = null;
var G__29824 = (0);
var G__29825 = (0);
seq__29666 = G__29822;
chunk__29667 = G__29823;
count__29668 = G__29824;
i__29669 = G__29825;
continue;
}
} else {
return null;
}
}
break;
}
}
}
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,me,newk,oldk,c){
return tiltontec.model.core.fm_kids_observe(me,newk,oldk,c);
}));
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (me){
var seq__29680_29826 = cljs.core.seq(new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__29681_29827 = null;
var count__29682_29828 = (0);
var i__29683_29829 = (0);
while(true){
if((i__29683_29829 < count__29682_29828)){
var k_29830 = chunk__29681_29827.cljs$core$IIndexed$_nth$arity$2(null,i__29683_29829);
if(tiltontec.cell.base.md_ref_QMARK_(k_29830)){
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_29830);
} else {
}


var G__29831 = seq__29680_29826;
var G__29832 = chunk__29681_29827;
var G__29833 = count__29682_29828;
var G__29834 = (i__29683_29829 + (1));
seq__29680_29826 = G__29831;
chunk__29681_29827 = G__29832;
count__29682_29828 = G__29833;
i__29683_29829 = G__29834;
continue;
} else {
var temp__5753__auto___29835 = cljs.core.seq(seq__29680_29826);
if(temp__5753__auto___29835){
var seq__29680_29836__$1 = temp__5753__auto___29835;
if(cljs.core.chunked_seq_QMARK_(seq__29680_29836__$1)){
var c__4679__auto___29837 = cljs.core.chunk_first(seq__29680_29836__$1);
var G__29838 = cljs.core.chunk_rest(seq__29680_29836__$1);
var G__29839 = c__4679__auto___29837;
var G__29840 = cljs.core.count(c__4679__auto___29837);
var G__29841 = (0);
seq__29680_29826 = G__29838;
chunk__29681_29827 = G__29839;
count__29682_29828 = G__29840;
i__29683_29829 = G__29841;
continue;
} else {
var k_29842 = cljs.core.first(seq__29680_29836__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_29842)){
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_29842);
} else {
}


var G__29847 = cljs.core.next(seq__29680_29836__$1);
var G__29848 = null;
var G__29849 = (0);
var G__29850 = (0);
seq__29680_29826 = G__29847;
chunk__29681_29827 = G__29848;
count__29682_29828 = G__29849;
i__29683_29829 = G__29850;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(((tiltontec.util.core.any_ref_QMARK_(poss)) || (typeof poss === 'string'))){
} else {
throw (new Error(["Assert failed: ",["poss not ref ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join(''),"\n","(or (any-ref? poss) (string? poss))"].join('')));
}

if((!(tiltontec.util.core.any_ref_QMARK_(poss)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fget=bailnotref","fget=bailnotref",-1507107200),poss], 0));

return false;
} else {
if(cljs.core.fn_QMARK_(seek)){
return (seek.cljs$core$IFn$_invoke$arity$1 ? seek.cljs$core$IFn$_invoke$arity$1(poss) : seek.call(null,poss));
} else {
if((seek instanceof cljs.core.Keyword)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(poss)))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(poss),seek)));
} else {
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":fget=-else-pplain=!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seek], 0));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29851 = arguments.length;
var i__4865__auto___29852 = (0);
while(true){
if((i__4865__auto___29852 < len__4864__auto___29851)){
args__4870__auto__.push((arguments[i__4865__auto___29852]));

var G__29856 = (i__4865__auto___29852 + (1));
i__4865__auto___29852 = G__29856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = where;
if(cljs.core.truth_(and__4251__auto__)){
return what;
} else {
return and__4251__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__29701 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29702 = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29702);

try{var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
if(cljs.core.truth_(and__4251__auto____$1)){
return where;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__5753__auto__)){
var par = temp__5753__auto__;
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),true], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"fasc-must-failed","fasc-must-failed",845302164),what,where,options__$1);
} else {
return null;
}
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29701);
}} else {
return null;
}
}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq29697){
var G__29698 = cljs.core.first(seq29697);
var seq29697__$1 = cljs.core.next(seq29697);
var G__29699 = cljs.core.first(seq29697__$1);
var seq29697__$2 = cljs.core.next(seq29697__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29698,G__29699,seq29697__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__29705 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29706 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29706);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.mx_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__29857 = cljs.core.rest(sibs);
sibs = G__29857;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29705);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__29710 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29711 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29711);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.mx_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__29858 = cljs.core.rest(sibs);
sibs = G__29858;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29710);
}});
tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29859 = arguments.length;
var i__4865__auto___29860 = (0);
while(true){
if((i__4865__auto___29860 < len__4864__auto___29859)){
args__4870__auto__.push((arguments[i__4865__auto___29860]));

var G__29862 = (i__4865__auto___29860 + (1));
i__4865__auto___29860 = G__29862;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = where;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = what;
if(cljs.core.truth_(and__4251__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_(where);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__29750 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__29751 = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__29751);

try{if(tiltontec.util.core.any_ref_QMARK_(where)){
var or__4253__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
if(cljs.core.truth_(and__4251__auto____$1)){
return where;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4251__auto__)){
var temp__5751__auto__ = tiltontec.model.core.md_get(where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__5751__auto__)){
var kids = temp__5751__auto__;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));

var temp__5751__auto____$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__5751__auto____$1)){
var netkids = temp__5751__auto____$1;
return cljs.core.some((function (p1__29720_SHARP_){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,p1__29720_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false], 0));
}),netkids);
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640)], 0));
}
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4251__auto__)){
var temp__5753__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__5753__auto__)){
var par = temp__5753__auto__;
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true], 0));
} else {
return null;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__29750);
}} else {
return null;
}
}));

(tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq29721){
var G__29722 = cljs.core.first(seq29721);
var seq29721__$1 = cljs.core.next(seq29721);
var G__29723 = cljs.core.first(seq29721__$1);
var seq29721__$2 = cljs.core.next(seq29721__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29722,G__29723,seq29721__$2);
}));

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__29768_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.md_get(p1__29768_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177)));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__29772_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.md_get(p1__29772_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false], 0));
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc((function (visited){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,tiltontec.cell.base.ia_type(visited));
}),me);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__29776_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__29776_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__29776_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false], 0));
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__29779_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__29779_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.md_get(p1__29779_SHARP_,property));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false], 0));
});
tiltontec.model.core.fmo = (function tiltontec$model$core$fmo(me,id_name){
var or__4253__auto__ = tiltontec.model.core.mxu_find_name(me,id_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = tiltontec.model.core.mxu_find_id(me,id_name);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
throw ["fmo> not id or name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)].join('');
}
}
});
tiltontec.model.core.fmov = (function tiltontec$model$core$fmov(var_args){
var G__29781 = arguments.length;
switch (G__29781) {
case 2:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2 = (function (me,id_name){
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3(me,id_name,new cljs.core.Keyword(null,"value","value",305978217));
}));

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3 = (function (me,id_name,slot_name){
var temp__5753__auto__ = tiltontec.model.core.fmo(me,id_name);
if(cljs.core.truth_(temp__5753__auto__)){
var mx = temp__5753__auto__;
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),slot_name)){
return tiltontec.model.core.mget(mx,slot_name);
} else {
throw ["fmov> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)," lacks ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_name)," property"].join('');
}
} else {
return null;
}
}));

(tiltontec.model.core.fmov.cljs$lang$maxFixedArity = 3);

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var k_key = tiltontec.model.core.md_get(me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var _ = (cljs.core.truth_(k_key)?null:(function(){throw (new Error("Assert failed: k-key"))})());
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__29783(s__29784){
return (new cljs.core.LazySeq(null,(function (){
var s__29784__$1 = s__29784;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29784__$1);
if(temp__5753__auto__){
var s__29784__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29784__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29784__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29786 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29785 = (0);
while(true){
if((i__29785 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__29785);
cljs.core.chunk_append(b__29786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__29871 = (i__29785 + (1));
i__29785 = G__29871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29786),tiltontec$model$core$kid_values_kids_$_iter__29783(cljs.core.chunk_rest(s__29784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29786),null);
}
} else {
var k = cljs.core.first(s__29784__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__29783(cljs.core.rest(s__29784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(x_kids);
})()):null);
var k_factory = tiltontec.model.core.md_get(me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,kid_value){
var or__4253__auto__ = (function (){var and__4251__auto__ = x_kids__$1;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x_kids__$1,kid_value);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var _STAR_par_STAR__orig_val__29791 = tiltontec.model.core._STAR_par_STAR_;
var _STAR_par_STAR__temp_val__29792 = me;
(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__temp_val__29792);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR__orig_val__29791);
}}
}),tiltontec.model.core.md_get(me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341))));
});

//# sourceMappingURL=tiltontec.model.core.js.map
