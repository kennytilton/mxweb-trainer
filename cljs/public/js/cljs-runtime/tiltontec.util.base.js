goog.provide('tiltontec.util.base');
cljs.core.enable_console_print_BANG_();
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26608 = arguments.length;
var i__4865__auto___26610 = (0);
while(true){
if((i__4865__auto___26610 < len__4864__auto___26608)){
args__4870__auto__.push((arguments[i__4865__auto___26610]));

var G__26614 = (i__4865__auto___26610 + (1));
i__4865__auto___26610 = G__26614;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(cljs.core.truth_(tiltontec.util.base._STAR_trx_QMARK__STAR_)){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,tiltontec.util.base.call_trc$(s,os)], 0));
} else {
return null;
}
} else {
return null;
}
}));

(tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq26591){
var G__26592 = cljs.core.first(seq26591);
var seq26591__$1 = cljs.core.next(seq26591);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26592,seq26591__$1);
}));

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__26597 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__26598 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__26598);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__26597);
}});
tiltontec.util.base.type_cljc = (function tiltontec$util$base$type_cljc(x){
var or__4253__auto__ = (function (){var temp__5753__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.type(x);
}
});

//# sourceMappingURL=tiltontec.util.base.js.map
