goog.provide('tiltontec.util.core');
tiltontec.util.core.type_of = (function tiltontec$util$core$type_of(x){
return cljs.core.type(x);
});
tiltontec.util.core.xor = (function tiltontec$util$core$xor(a,b){
var or__4253__auto__ = (function (){var and__4251__auto__ = a;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(b);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = b;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(a);
} else {
return and__4251__auto__;
}
}
});
tiltontec.util.core.set_ify = (function tiltontec$util$core$set_ify(x){
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
tiltontec.util.core.cl_find = (function tiltontec$util$core$cl_find(sought,coll){
if((sought == null)){
return null;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sought]),coll);
}
});
tiltontec.util.core.uuidv4 = (function tiltontec$util$core$uuidv4(){
var hex = (function tiltontec$util$core$uuidv4_$_hex(){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join(''));
});
tiltontec.util.core.ia_ref = (function tiltontec$util$core$ia_ref(x){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
tiltontec.util.core.any_ref_QMARK_ = (function tiltontec$util$core$any_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(p__26668,new_value){
var vec__26669 = p__26668;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669,(1),null);
if(tiltontec.util.core.any_ref_QMARK_(ref)){
} else {
throw (new Error("Assert failed: (any-ref? ref)"));
}

if(cljs.core.map_QMARK_(cljs.core.deref(ref))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref ref))"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,slot,new_value);

return new_value;
});
tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__26672,new_value){
var vec__26673 = p__26672;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26673,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26673,(1),null);
if(cljs.core.truth_(cljs.core.meta(ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([slot,new_value], 0));

return new_value;
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.util !== 'undefined') && (typeof tiltontec.util.core !== 'undefined') && (typeof tiltontec.util.core.err !== 'undefined')){
} else {
tiltontec.util.core.err = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26676 = cljs.core.get_global_hierarchy;
return (fexpr__26676.cljs$core$IFn$_invoke$arity$0 ? fexpr__26676.cljs$core$IFn$_invoke$arity$0() : fexpr__26676.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.util.core","err"),(function() { 
var G__26711__delegate = function (a1,args){
return cljs.core.fn_QMARK_(a1);
};
var G__26711 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__26712__i = 0, G__26712__a = new Array(arguments.length -  1);
while (G__26712__i < G__26712__a.length) {G__26712__a[G__26712__i] = arguments[G__26712__i + 1]; ++G__26712__i;}
  args = new cljs.core.IndexedSeq(G__26712__a,0,null);
} 
return G__26711__delegate.call(this,a1,args);};
G__26711.cljs$lang$maxFixedArity = 1;
G__26711.cljs$lang$applyTo = (function (arglist__26713){
var a1 = cljs.core.first(arglist__26713);
var args = cljs.core.rest(arglist__26713);
return G__26711__delegate(a1,args);
});
G__26711.cljs$core$IFn$_invoke$arity$variadic = G__26711__delegate;
return G__26711;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function() { 
var G__26715__delegate = function (fn,mas){
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,mas));
};
var G__26715 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__26716__i = 0, G__26716__a = new Array(arguments.length -  1);
while (G__26716__i < G__26716__a.length) {G__26716__a[G__26716__i] = arguments[G__26716__i + 1]; ++G__26716__i;}
  mas = new cljs.core.IndexedSeq(G__26716__a,0,null);
} 
return G__26715__delegate.call(this,fn,mas);};
G__26715.cljs$lang$maxFixedArity = 1;
G__26715.cljs$lang$applyTo = (function (arglist__26717){
var fn = cljs.core.first(arglist__26717);
var mas = cljs.core.rest(arglist__26717);
return G__26715__delegate(fn,mas);
});
G__26715.cljs$core$IFn$_invoke$arity$variadic = G__26715__delegate;
return G__26715;
})()
);
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__26718__delegate = function (bits){
throw (new Error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons("jz/err>",bits))));
};
var G__26718 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__26721__i = 0, G__26721__a = new Array(arguments.length -  0);
while (G__26721__i < G__26721__a.length) {G__26721__a[G__26721__i] = arguments[G__26721__i + 0]; ++G__26721__i;}
  bits = new cljs.core.IndexedSeq(G__26721__a,0,null);
} 
return G__26718__delegate.call(this,bits);};
G__26718.cljs$lang$maxFixedArity = 0;
G__26718.cljs$lang$applyTo = (function (arglist__26722){
var bits = cljs.core.seq(arglist__26722);
return G__26718__delegate(bits);
});
G__26718.cljs$core$IFn$_invoke$arity$variadic = G__26718__delegate;
return G__26718;
})()
);
tiltontec.util.core.flz = (function tiltontec$util$core$flz(x){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.LazySeq)){
return cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;
}
});
tiltontec.util.core.wtrx_test = (function tiltontec$util$core$wtrx_test(n){
return tiltontec.util.base.call_wtrx((function (){
if((n > (0))){
var G__26677 = (n - (1));
return (tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1(G__26677) : tiltontec.util.core.wtrx_test.call(null,G__26677));
} else {
return null;
}
}),(0),(10),(new cljs.core.List(null,"test",(new cljs.core.List(null,n,null,(1),null)),(2),null)));
});
tiltontec.util.core.slot_users = (function tiltontec$util$core$slot_users(me,slot){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slotq","slotq",1456717980),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__26679 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26679) : slot.call(null,G__26679));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.slot_useds = (function tiltontec$util$core$slot_useds(me,slot){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slot","slot",240229571),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__26680 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__26680) : slot.call(null,G__26680));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.make_fifo_queue = (function tiltontec$util$core$make_fifo_queue(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
});
tiltontec.util.core.fifo_data = (function tiltontec$util$core$fifo_data(q){
return cljs.core.deref(q);
});
tiltontec.util.core.fifo_clear = (function tiltontec$util$core$fifo_clear(q){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(q,cljs.core.empty);
});
tiltontec.util.core.fifo_empty_QMARK_ = (function tiltontec$util$core$fifo_empty_QMARK_(q){
return cljs.core.empty_QMARK_(cljs.core.deref(q));
});
tiltontec.util.core.fifo_peek = (function tiltontec$util$core$fifo_peek(q){
return cljs.core.first(cljs.core.deref(q));
});
tiltontec.util.core.fifo_add = (function tiltontec$util$core$fifo_add(q,new$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.conj,new$);
});
tiltontec.util.core.fifo_pop = (function tiltontec$util$core$fifo_pop(q){
if(tiltontec.util.core.fifo_empty_QMARK_(q)){
return null;
} else {
var result__26632__auto__ = cljs.core.first(cljs.core.deref(q));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.subvec,(1));

return result__26632__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.util.core.pln = (function tiltontec$util$core$pln(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26727 = arguments.length;
var i__4865__auto___26728 = (0);
while(true){
if((i__4865__auto___26728 < len__4864__auto___26727)){
args__4870__auto__.push((arguments[i__4865__auto___26728]));

var G__26729 = (i__4865__auto___26728 + (1));
i__4865__auto___26728 = G__26729;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)], 0));
}));

(tiltontec.util.core.pln.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq26682){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26682));
}));

tiltontec.util.core.xpln = (function tiltontec$util$core$xpln(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26730 = arguments.length;
var i__4865__auto___26731 = (0);
while(true){
if((i__4865__auto___26731 < len__4864__auto___26730)){
args__4870__auto__.push((arguments[i__4865__auto___26731]));

var G__26732 = (i__4865__auto___26731 + (1));
i__4865__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.xpln.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tiltontec.util.core.xpln.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
}));

(tiltontec.util.core.xpln.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.util.core.xpln.cljs$lang$applyTo = (function (seq26690){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26690));
}));

tiltontec.util.core.eko = (function tiltontec$util$core$eko(key,value){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eko!!!","eko!!!",807507425),key,value], 0));

return value;
});
tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26733 = arguments.length;
var i__4865__auto___26734 = (0);
while(true){
if((i__4865__auto___26734 < len__4864__auto___26733)){
args__4870__auto__.push((arguments[i__4865__auto___26734]));

var G__26735 = (i__4865__auto___26734 + (1));
i__4865__auto___26734 = G__26735;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic = (function (k,r){
if(typeof cljs.core.first(r) === 'string'){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0));
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"force","force",781957286));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.core._STAR_plnk_keys_STAR_], null));
}
})())){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0));
} else {
return null;
}
}
}));

(tiltontec.util.core.plnk.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq26691){
var G__26692 = cljs.core.first(seq26691);
var seq26691__$1 = cljs.core.next(seq26691);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26692,seq26691__$1);
}));

tiltontec.util.core.now = (function tiltontec$util$core$now(){
return (new Date()).getTime();
});
tiltontec.util.core.map_to_json = (function tiltontec$util$core$map_to_json(map){
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),map);
});
tiltontec.util.core.json_to_map = (function tiltontec$util$core$json_to_map(json){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),json);
});
tiltontec.util.core.counts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.util.core.counts_reset = (function tiltontec$util$core$counts_reset(){
return cljs.core.reset_BANG_(tiltontec.util.core.counts,null);
});
/**
 * Count it
 */
tiltontec.util.core.countit = (function tiltontec$util$core$countit(var_args){
var G__26699 = arguments.length;
switch (G__26699) {
case 1:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1 = (function (path){
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(path,(1));
}));

(tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2 = (function (path,n){
if(cljs.core.sequential_QMARK_(path)){
if(cljs.core.counted_QMARK_(n)){
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(n));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tiltontec.util.core.counts,cljs.core.update_in,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
}
} else {
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),n);
}
}));

(tiltontec.util.core.countit.cljs$lang$maxFixedArity = 2);

tiltontec.util.core.counts_reset();

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),(7));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),(new cljs.core.List(null,new cljs.core.Keyword(null,"b","b",1482224470),null,(1),null)),(2),null)),(3));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),(2));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));

//# sourceMappingURL=tiltontec.util.core.js.map
