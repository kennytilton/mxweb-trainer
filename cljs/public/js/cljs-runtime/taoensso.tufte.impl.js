goog.provide('taoensso.tufte.impl');

/**
* @constructor
*/
taoensso.tufte.impl.Time = (function (id,t){
this.id = id;
this.t = t;
});

(taoensso.tufte.impl.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.Time.cljs$lang$type = true);

(taoensso.tufte.impl.Time.cljs$lang$ctorStr = "taoensso.tufte.impl/Time");

(taoensso.tufte.impl.Time.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/Time");
}));

/**
 * Positional factory function for taoensso.tufte.impl/Time.
 */
taoensso.tufte.impl.__GT_Time = (function taoensso$tufte$impl$__GT_Time(id,t){
return (new taoensso.tufte.impl.Time(id,t));
});


/**
* @constructor
*/
taoensso.tufte.impl.TimeSpan = (function (t0,t1){
this.t0 = t0;
this.t1 = t1;
});

(taoensso.tufte.impl.TimeSpan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.TimeSpan.cljs$lang$type = true);

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorStr = "taoensso.tufte.impl/TimeSpan");

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/TimeSpan");
}));

/**
 * Positional factory function for taoensso.tufte.impl/TimeSpan.
 */
taoensso.tufte.impl.__GT_TimeSpan = (function taoensso$tufte$impl$__GT_TimeSpan(t0,t1){
return (new taoensso.tufte.impl.TimeSpan(t0,t1));
});


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PStats = (function (pd,t1,tspans,realized_){
this.pd = pd;
this.t1 = t1;
this.tspans = tspans;
this.realized_ = realized_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(taoensso.tufte.impl.PStats.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.realized_);
}));

(taoensso.tufte.impl.PStats.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.realized_QMARK_(self__.realized_);
}));

(taoensso.tufte.impl.PStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pd","pd",1514324481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"tspans","tspans",451349869,null),new cljs.core.Symbol(null,"realized_","realized_",495032039,null)], null);
}));

(taoensso.tufte.impl.PStats.cljs$lang$type = true);

(taoensso.tufte.impl.PStats.cljs$lang$ctorStr = "taoensso.tufte.impl/PStats");

(taoensso.tufte.impl.PStats.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/PStats");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PStats.
 */
taoensso.tufte.impl.__GT_PStats = (function taoensso$tufte$impl$__GT_PStats(pd,t1,tspans,realized_){
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,realized_));
});


/**
* @constructor
*/
taoensso.tufte.impl.PState = (function (acc,id_times,id_stats){
this.acc = acc;
this.id_times = id_times;
this.id_stats = id_stats;
});

(taoensso.tufte.impl.PState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"id-times","id-times",-1251134881,null),new cljs.core.Symbol(null,"id-stats","id-stats",-1687089031,null)], null);
}));

(taoensso.tufte.impl.PState.cljs$lang$type = true);

(taoensso.tufte.impl.PState.cljs$lang$ctorStr = "taoensso.tufte.impl/PState");

(taoensso.tufte.impl.PState.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/PState");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PState.
 */
taoensso.tufte.impl.__GT_PState = (function taoensso$tufte$impl$__GT_PState(acc,id_times,id_stats){
return (new taoensso.tufte.impl.PState(acc,id_times,id_stats));
});


/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PData = (function (nmax,t0,pstate_){
this.nmax = nmax;
this.t0 = t0;
this.pstate_ = pstate_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.impl.PData.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (taoensso.tufte.impl.deref_pdata.cljs$core$IFn$_invoke$arity$1 ? taoensso.tufte.impl.deref_pdata.cljs$core$IFn$_invoke$arity$1(this$__$1) : taoensso.tufte.impl.deref_pdata.call(null,this$__$1));
}));

(taoensso.tufte.impl.PData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nmax","nmax",-2045441365,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"pstate_","pstate_",-1982806579,null)], null);
}));

(taoensso.tufte.impl.PData.cljs$lang$type = true);

(taoensso.tufte.impl.PData.cljs$lang$ctorStr = "taoensso.tufte.impl/PData");

(taoensso.tufte.impl.PData.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/PData");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PData.
 */
taoensso.tufte.impl.__GT_PData = (function taoensso$tufte$impl$__GT_PData(nmax,t0,pstate_){
return (new taoensso.tufte.impl.PData(nmax,t0,pstate_));
});

taoensso.tufte.impl.new_pdata_local = (function taoensso$tufte$impl$new_pdata_local(nmax){
var t0 = taoensso.encore.now_nano();
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.volatile_BANG_((new taoensso.tufte.impl.PState([],null,null)))));
});
taoensso.tufte.impl.new_pdata_dynamic = (function taoensso$tufte$impl$new_pdata_dynamic(nmax){
var t0 = taoensso.encore.now_nano();
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new taoensso.tufte.impl.PState(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),null,null)))));
});
/**
 * PData->PStats
 */
taoensso.tufte.impl.deref_pdata = (function taoensso$tufte$impl$deref_pdata(pd){
var t1 = taoensso.encore.now_nano();
var t0 = pd.t0;
var tspans = (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan(t0,t1)),null,(1),null));
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,(new cljs.core.Delay((function (){
return (taoensso.tufte.impl.deref_pstats.cljs$core$IFn$_invoke$arity$3 ? taoensso.tufte.impl.deref_pstats.cljs$core$IFn$_invoke$arity$3(pd,t1,tspans) : taoensso.tufte.impl.deref_pstats.call(null,pd,t1,tspans));
}),null))));
});
/**
 * nnil iff dynamic profiling active
 */
taoensso.tufte.impl._STAR_pdata_STAR_ = null;
var stack_34376 = [];
var state__34377 = cljs.core.volatile_BANG_(false);
taoensso.tufte.impl.pdata_proxy_get = (function taoensso$tufte$impl$pdata_proxy_get(){
return cljs.core.deref(state__34377);
});

taoensso.tufte.impl.pdata_proxy_pop = (function taoensso$tufte$impl$pdata_proxy_pop(){
var temp__5751__auto__ = stack_34376.pop();
if(cljs.core.truth_(temp__5751__auto__)){
var stashed = temp__5751__auto__;
return cljs.core.vreset_BANG_(state__34377,stashed);
} else {
return cljs.core.vreset_BANG_(state__34377,null);
}
});

taoensso.tufte.impl.pdata_proxy_push = (function taoensso$tufte$impl$pdata_proxy_push(v){
var temp__5751__auto__ = cljs.core.deref(state__34377);
if(cljs.core.truth_(temp__5751__auto__)){
var to_stash = temp__5751__auto__;
stack_34376.push(to_stash);

return cljs.core.vreset_BANG_(state__34377,v);
} else {
return cljs.core.vreset_BANG_(state__34377,v);
}
});

/**
* @constructor
*/
taoensso.tufte.impl.ElapsedTimeAcc = (function (tsum,max_t1){
this.tsum = tsum;
this.max_t1 = max_t1;
});

(taoensso.tufte.impl.ElapsedTimeAcc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tsum","tsum",-52990159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"max-t1","max-t1",314172921,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$type = true);

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorStr = "taoensso.tufte.impl/ElapsedTimeAcc");

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.impl/ElapsedTimeAcc");
}));

/**
 * Positional factory function for taoensso.tufte.impl/ElapsedTimeAcc.
 */
taoensso.tufte.impl.__GT_ElapsedTimeAcc = (function taoensso$tufte$impl$__GT_ElapsedTimeAcc(tsum,max_t1){
return (new taoensso.tufte.impl.ElapsedTimeAcc(tsum,max_t1));
});

var sort_tspans_34389 = (function (tspans){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (tspan){
return tspan.t0;
}),tspans);
});
/**
 * Returns `tsum` (elapsed time) given collection of `TimeSpan`s.
 *  Based on https://codereview.stackexchange.com/a/126927.
 */
taoensso.tufte.impl.tspans__GT_tsum = (function taoensso$tufte$impl$tspans__GT_tsum(tspans){
if(cljs.core.empty_QMARK_(tspans)){
return (0);
} else {
var sorted_tspans = sort_tspans_34389(tspans);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tspan){
var t1 = tspan.t1;
var max_t1 = acc.max_t1;
if((t1 > max_t1)){
var t0 = tspan.t0;
var tsum = acc.tsum;
return (new taoensso.tufte.impl.ElapsedTimeAcc((tsum + (t1 - Math.max(t0,max_t1))),t1));
} else {
return acc;
}
}),(new taoensso.tufte.impl.ElapsedTimeAcc((0),(0))),sorted_tspans).tsum;
}
});
taoensso.tufte.impl.merge_tspans = (function taoensso$tufte$impl$merge_tspans(nmax,t1,tspans0,tspans1){
var n0 = cljs.core.count(tspans0);
var n1 = cljs.core.count(tspans1);
var tspans2 = (((n1 > n0))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(tspans1,tspans0):cljs.core.into.cljs$core$IFn$_invoke$arity$2(tspans0,tspans1));
if(((n0 + n1) > nmax)){
var tsum = taoensso.tufte.impl.tspans__GT_tsum(tspans2);
return (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan((t1 - tsum),t1)),null,(1),null));
} else {
return tspans2;
}
});
/**
 * NB treats `from-times` as read-only (may be mutable `acc`)!
 */
taoensso.tufte.impl.times_into_id_times = (function taoensso$tufte$impl$times_into_id_times(to_id_times,from_times){
return cljs.core.not_empty((function (){var temp__5751__auto__ = taoensso.encore.force_ref(from_times);
if(cljs.core.truth_(temp__5751__auto__)){
var from_times__$1 = temp__5751__auto__;
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,in$){
var id = in$.id;
var t = in$.t;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,id),t));
}),cljs.core.transient$((function (){var or__4253__auto__ = to_id_times;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),from_times__$1));
} else {
return to_id_times;
}
})());
});
/**
 * PStats->{:clock _ :stats {<id> <stats/stats>}} (API output)
 */
taoensso.tufte.impl.deref_pstats = (function taoensso$tufte$impl$deref_pstats(pd,t1,tspans){
var t0 = pd.t0;
var pstate_ = pd.pstate_;
var pstate = taoensso.encore.force_ref(pstate_);
var id_times = pstate.id_times;
var id_stats = pstate.id_stats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times(id_times,pstate.acc);
var id_stats__$1 = cljs.core.reduce_kv((function (m,id,times){
var stats_LT_times = taoensso.tufte.stats.stats(times);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.stats.merge_stats,stats_LT_times,cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,merged);
}),id_times__$1,id_times__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stats","stats",-85643011),id_stats__$1,new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t0","t0",2120162535),t0,new cljs.core.Keyword(null,"t1","t1",24972444),t1,new cljs.core.Keyword(null,"total","total",1916810418),taoensso.tufte.impl.tspans__GT_tsum(tspans)], null)], null);
});
taoensso.tufte.impl.fast_into = (function taoensso$tufte$impl$fast_into(c0,c1){
if((cljs.core.count(c0) > cljs.core.count(c1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(c0,c1);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(c1,c0);
}
});
taoensso.tufte.impl.merge_stats_when_needed = (function taoensso$tufte$impl$merge_stats_when_needed(nmax,stats){
if((cljs.core.count(stats) <= nmax)){
return stats;
} else {
return (new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.tufte.stats.merge_stats,stats),null,(1),null));
}
});
/**
 * Compacting merge
 */
taoensso.tufte.impl.merge_pstats = (function taoensso$tufte$impl$merge_pstats(var_args){
var G__34260 = arguments.length;
switch (G__34260) {
case 2:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3(null,ps0,ps1);
}));

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3 = (function (nmax,ps0,ps1){
if(cljs.core.truth_(ps0)){
if(cljs.core.truth_(ps1)){
var ps0__$1 = ps0;
var ps1__$1 = ps1;
var pd0 = ps0__$1.pd;
var pd1 = ps1__$1.pd;
var nmax__$1 = cljs.core.long$((function (){var or__4253__auto__ = nmax;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pd0.nmax;
}
})());
var pd0_t0 = pd0.t0;
var ps0_t1 = ps0__$1.t1;
var pd1_t0 = pd1.t0;
var ps1_t1 = ps1__$1.t1;
var pd2_t0 = (((pd0_t0 < pd1_t0))?pd0_t0:pd1_t0);
var ps2_t1 = (((ps0_t1 > ps1_t1))?ps0_t1:ps1_t1);
var tspans2 = taoensso.tufte.impl.merge_tspans(nmax__$1,ps2_t1,ps0__$1.tspans,ps1__$1.tspans);
var pd0_pstate = taoensso.encore.force_ref(pd0.pstate_);
var pd1_pstate = taoensso.encore.force_ref(pd1.pstate_);
var pd0_id_times = taoensso.tufte.impl.times_into_id_times(pd0_pstate.id_times,pd0_pstate.acc);
var pd1_id_times = taoensso.tufte.impl.times_into_id_times(pd1_pstate.id_times,pd1_pstate.acc);
var pd0_id_stats = pd0_pstate.id_stats;
var pd1_id_stats = pd1_pstate.id_stats;
var pd2_ids = cljs.core.keys(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = pd0_id_times;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),pd1_id_times));
var vec__34269 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34275,id){
var vec__34277 = p__34275;
var pd2_id_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(0),null);
var pd2_id_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(1),null);
var pd0_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd0_id_times,id);
var pd0_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd0_id_stats,id);
var pd1_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd1_id_times,id);
var pd1_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pd1_id_stats,id);
var pd2_times = taoensso.tufte.impl.fast_into(pd0_times,pd1_times);
var pd2_stats = taoensso.tufte.impl.fast_into(pd0_stats,pd1_stats);
if((cljs.core.count(pd2_times) <= nmax__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_times,id,pd2_times),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_stats,id,pd2_stats)], null);
} else {
var stats_LT_times = taoensso.tufte.stats.stats(pd2_times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_times,id,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pd2_id_stats,id,taoensso.tufte.impl.merge_stats_when_needed(nmax__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pd2_stats,stats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd0_id_times,pd0_id_stats], null),pd2_ids);
var pd2_id_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(0),null);
var pd2_id_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34269,(1),null);
var pd2 = (new taoensso.tufte.impl.PData(nmax__$1,pd2_t0,(new taoensso.tufte.impl.PState(null,pd2_id_times,pd2_id_stats))));
return (new taoensso.tufte.impl.PStats(pd2,ps2_t1,tspans2,(new cljs.core.Delay((function (){
return taoensso.tufte.impl.deref_pstats(pd2,ps2_t1,tspans2);
}),null))));
} else {
return ps0;
}
} else {
return ps1;
}
}));

(taoensso.tufte.impl.merge_pstats.cljs$lang$maxFixedArity = 3);

taoensso.tufte.impl.capture_time_BANG_ = (function taoensso$tufte$impl$capture_time_BANG_(pd,id,ns_elapsed){
while(true){
var nmax = pd.nmax;
var pstate_ = pd.pstate_;
var pstate = cljs.core.deref(pstate_);
var acc = pstate.acc;
if((acc instanceof cljs.core.Atom)){
var _QMARK_pulled_times = (function (){while(true){
var old_times = cljs.core.deref(acc);
var new_times = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_times,(new taoensso.tufte.impl.Time(id,ns_elapsed)));
if((cljs.core.count(new_times) <= nmax)){
if(cljs.core.compare_and_set_BANG_(acc,old_times,new_times)){
return null;
} else {
continue;
}
} else {
if(cljs.core.compare_and_set_BANG_(acc,old_times,null)){
return new_times;
} else {
continue;
}
}
break;
}
})();
var temp__5753__auto__ = _QMARK_pulled_times;
if(cljs.core.truth_(temp__5753__auto__)){
var times = temp__5753__auto__;
var t0 = taoensso.encore.now_nano();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstate_,((function (pd,id,ns_elapsed,t0,times,temp__5753__auto__,_QMARK_pulled_times,nmax,pstate_,pstate,acc){
return (function (pstate__$1){
return (taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4 ? taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4(pstate__$1,times,nmax,true) : taoensso.tufte.impl.compact_pstate.call(null,pstate__$1,times,nmax,true));
});})(pd,id,ns_elapsed,t0,times,temp__5753__auto__,_QMARK_pulled_times,nmax,pstate_,pstate,acc))
);

var G__34517 = pd;
var G__34518 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__34519 = (taoensso.encore.now_nano() - t0);
pd = G__34517;
id = G__34518;
ns_elapsed = G__34519;
continue;
} else {
return null;
}
} else {
acc.push((new taoensso.tufte.impl.Time(id,ns_elapsed)));

if((acc.length > nmax)){
var t0 = taoensso.encore.now_nano();
cljs.core.vreset_BANG_(pstate_,(taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4 ? taoensso.tufte.impl.compact_pstate.cljs$core$IFn$_invoke$arity$4(pstate,acc,nmax,false) : taoensso.tufte.impl.compact_pstate.call(null,pstate,acc,nmax,false)));

var G__34521 = pd;
var G__34522 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__34523 = (taoensso.encore.now_nano() - t0);
pd = G__34521;
id = G__34522;
ns_elapsed = G__34523;
continue;
} else {
return null;
}
}
break;
}
});
taoensso.tufte.impl.compact_pstate = (function taoensso$tufte$impl$compact_pstate(pstate,pulled_times,nmax,dynamic_QMARK_){
var id_times = pstate.id_times;
var id_stats = pstate.id_stats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times(id_times,pulled_times);
var vec__34306 = cljs.core.reduce_kv((function (acc,id,times){
if((cljs.core.count(times) <= nmax)){
return acc;
} else {
var vec__34312 = acc;
var id_times__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(0),null);
var id_stats__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34312,(1),null);
var stats_LT_times = taoensso.tufte.stats.stats(times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_times__$2,id,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_stats__$1,id,taoensso.tufte.impl.merge_stats_when_needed(nmax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats__$1,id),stats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_times__$1,id_stats], null),id_times__$1);
var id_times__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34306,(0),null);
var id_stats__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34306,(1),null);
var new_acc = (cljs.core.truth_(dynamic_QMARK_)?pstate.acc:[]);
return (new taoensso.tufte.impl.PState(new_acc,id_times__$2,id_stats__$1));
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.tufte !== 'undefined') && (typeof taoensso.tufte.impl !== 'undefined') && (typeof taoensso.tufte.impl.handlers_ !== 'undefined')){
} else {
/**
 * {<hid> <handler-fn>}
 */
taoensso.tufte.impl.handlers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
taoensso.tufte.impl.handle_blocking_BANG_ = (function taoensso$tufte$impl$handle_blocking_BANG_(m){
return taoensso.encore.run_kv_BANG_((function (id,f){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}catch (e34318){var e = e34318;
try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["WARNING: Uncaught Tufte `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"` handler error\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));
}catch (e34321){var _ = e34321;
return null;
}}}),cljs.core.deref(taoensso.tufte.impl.handlers_));
});
taoensso.tufte.impl.handle_BANG_ = (function taoensso$tufte$impl$handle_BANG_(m){
taoensso.tufte.impl.handle_blocking_BANG_(m);

return null;
});

//# sourceMappingURL=taoensso.tufte.impl.js.map
