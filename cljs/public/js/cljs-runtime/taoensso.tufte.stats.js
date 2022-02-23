goog.provide('taoensso.tufte.stats');
goog.scope(function(){
  taoensso.tufte.stats.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sort_longs = (function taoensso$tufte$stats$sort_longs(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_(longs))?longs:cljs.core.to_array(longs));
taoensso.tufte.stats.goog$module$goog$array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs(longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[Math.round((0.25 * max_idx))]),(a[Math.round((0.5 * max_idx))]),(a[Math.round((0.75 * max_idx))]),(a[Math.round((0.9 * max_idx))]),(a[Math.round((0.95 * max_idx))]),(a[Math.round((0.99 * max_idx))]),(a[max_idx])], null);
}
});

/**
* @constructor
*/
taoensso.tufte.stats.MinMax = (function (vmin,vmax){
this.vmin = vmin;
this.vmax = vmax;
});

(taoensso.tufte.stats.MinMax.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vmin","vmin",2087078343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vmax","vmax",205317983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte.stats/MinMax");
}));

/**
 * Positional factory function for taoensso.tufte.stats/MinMax.
 */
taoensso.tufte.stats.__GT_MinMax = (function taoensso$tufte$stats$__GT_MinMax(vmin,vmax){
return (new taoensso.tufte.stats.MinMax(vmin,vmax));
});

/**
 * Returns ?[<min> <max>]
 */
taoensso.tufte.stats.min_max = (function taoensso$tufte$stats$min_max(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count(longs) === (0))){
return null;
} else {
var vec__33087 = longs;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(0),null);
var min_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var vmin = acc.vmin;
var vmax = acc.vmax;
if((in$ > vmax)){
return (new taoensso.tufte.stats.MinMax(vmin,in$));
} else {
if((in$ < vmin)){
return (new taoensso.tufte.stats.MinMax(in$,vmin));
} else {
return acc;
}
}
}),(new taoensso.tufte.stats.MinMax(v1,v1)),longs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_max.vmin,min_max.vmax], null);
}
}
});
/**
 * Given a collection of longs, returns map with keys:
 *   #{:n :min :max :sum :mean :mad-sum :mad :p25 :p50 :p75 :p90 :p95 :p99}, or nil
 *   if collection is empty.
 */
taoensso.tufte.stats.stats = (function taoensso$tufte$stats$stats(longs){
if(cljs.core.truth_(longs)){
var sorted_longs = taoensso.tufte.stats.sort_longs(longs);
var a = sorted_longs.a;
var n = a.length;
if((n === (0))){
return null;
} else {
var sum = (function (){var a__4738__auto__ = a;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var acc = (0);
while(true){
if((i < l__4739__auto__)){
var G__33534 = (i + (1));
var G__33536 = (acc + (a[i]));
i = G__33534;
acc = G__33536;
continue;
} else {
return acc;
}
break;
}
})();
var mean = (sum / n);
var mad_sum = (function (){var a__4738__auto__ = a;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var acc = 0.0;
while(true){
if((i < l__4739__auto__)){
var G__33537 = (i + (1));
var G__33538 = (acc + Math.abs(((a[i]) - mean)));
i = G__33537;
acc = G__33538;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__33097 = taoensso.tufte.stats.long_percentiles(sorted_longs);
var vmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(6),null);
var vmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
}
} else {
return null;
}
});
/**
 * `(merge-stats (stats c0) (stats c1))` is a basic approximation of `(stats (into c0 c1)))`.
 */
taoensso.tufte.stats.merge_stats = (function taoensso$tufte$stats$merge_stats(m0,m1){
if(cljs.core.truth_(m0)){
if(cljs.core.truth_(m1)){
var _ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__33108 = m0;
var map__33108__$1 = cljs.core.__destructure_map(map__33108);
var p99_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p90_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"max","max",61366548));
var p25_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var n0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p75_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var p95_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var mad_sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var min0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33108__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var map__33110 = m1;
var map__33110__$1 = cljs.core.__destructure_map(map__33110);
var p95_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"n","n",562130025));
var max1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mad_sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p75_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var min1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var p99_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var p25_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var ___$2 = (((n0 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n0)"))})());
var ___$3 = (((n1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n1)"))})());
var n2 = (n1 + n0);
var n0_ratio = (n0 / n2);
var n1_ratio = (n1 / n2);
var sum2 = (sum0 + sum1);
var mean2 = (sum2 / n2);
var min2 = (((min0 < min1))?min0:min1);
var max2 = (((max0 > max1))?max0:max1);
var mad_sum2 = (mad_sum0 + mad_sum1);
var p25_2 = Math.round(((n0_ratio * p25_0) + (n1_ratio * p25_1)));
var p50_2 = Math.round(((n0_ratio * p50_0) + (n1_ratio * p50_1)));
var p75_2 = Math.round(((n0_ratio * p75_0) + (n1_ratio * p75_1)));
var p90_2 = Math.round(((n0_ratio * p90_0) + (n1_ratio * p90_1)));
var p95_2 = Math.round(((n0_ratio * p95_0) + (n1_ratio * p95_1)));
var p99_2 = Math.round(((n0_ratio * p99_0) + (n1_ratio * p99_1)));
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((n / d) * 100.0))),"%"].join('');
});
var round2_33552 = taoensso.encore.round2;
taoensso.tufte.stats.fmt = (function taoensso$tufte$stats$fmt(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33117 = (ns / 6.0E10);
return (round2_33552.cljs$core$IFn$_invoke$arity$1 ? round2_33552.cljs$core$IFn$_invoke$arity$1(G__33117) : round2_33552.call(null,G__33117));
})()),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33119 = (ns / 1.0E9);
return (round2_33552.cljs$core$IFn$_invoke$arity$1 ? round2_33552.cljs$core$IFn$_invoke$arity$1(G__33119) : round2_33552.call(null,G__33119));
})()),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33121 = (ns / 1000000.0);
return (round2_33552.cljs$core$IFn$_invoke$arity$1 ? round2_33552.cljs$core$IFn$_invoke$arity$1(G__33121) : round2_33552.call(null,G__33121));
})()),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33123 = (ns / 1000.0);
return (round2_33552.cljs$core$IFn$_invoke$arity$1 ? round2_33552.cljs$core$IFn$_invoke$arity$1(G__33123) : round2_33552.call(null,G__33123));
})()),"\u03BCs"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((round2_33552.cljs$core$IFn$_invoke$arity$1 ? round2_33552.cljs$core$IFn$_invoke$arity$1(ns) : round2_33552.call(null,ns))),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.fmt_comma = (function taoensso$tufte$stats$fmt_comma(n){
return [(((n < (0)))?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__33130){
var map__33132 = p__33130;
var map__33132__$1 = cljs.core.__destructure_map(map__33132);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33132__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv((function (acc,k,v){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(k) : format_id_fn.call(null,k)));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),stats);
} else {
return null;
}
});
/**
 * Returns a formatted table string for given `{<id> <stats>}` map.
 *   Assumes nanosecond clock, stats based on profiling id'd nanosecond times.
 */
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__33152){
var map__33156 = p__33152;
var map__33156__$1 = cljs.core.__destructure_map(map__33156);
var opts = map__33156__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33156__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33156__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33156__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33156__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_((function (__in){
var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.all_format_columns) : taoensso.truss.impl.set_STAR_.call(null,taoensso.tufte.stats.all_format_columns)),x);
})(__in)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e33163){if((e33163 instanceof Error)){
var e = e33163;
return e;
} else {
throw e33163;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte.stats",276,"([:el all-format-columns] __in)",__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,s){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__33168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__33168) : sort_fn.call(null,G__33168));
}),taoensso.encore.rcompare,cljs.core.keys(id_stats));
var max_id_width__$1 = (function (){var or__4253__auto__ = max_id_width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__33169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__33169__$1 = cljs.core.__destructure_map(map__33169);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33169__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33169__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33172 = align;
var G__33172__$1 = (((G__33172 instanceof cljs.core.Keyword))?G__33172.fqn:null);
switch (G__33172__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33172__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__33174_33593 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns));
var chunk__33175_33594 = null;
var count__33176_33595 = (0);
var i__33177_33596 = (0);
while(true){
if((i__33177_33596 < count__33176_33595)){
var column_33597 = chunk__33175_33594.cljs$core$IIndexed$_nth$arity$2(null,i__33177_33596);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_33597)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_33597,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_33597,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__33614 = seq__33174_33593;
var G__33615 = chunk__33175_33594;
var G__33616 = count__33176_33595;
var G__33617 = (i__33177_33596 + (1));
seq__33174_33593 = G__33614;
chunk__33175_33594 = G__33615;
count__33176_33595 = G__33616;
i__33177_33596 = G__33617;
continue;
} else {
var temp__5753__auto___33622 = cljs.core.seq(seq__33174_33593);
if(temp__5753__auto___33622){
var seq__33174_33623__$1 = temp__5753__auto___33622;
if(cljs.core.chunked_seq_QMARK_(seq__33174_33623__$1)){
var c__4679__auto___33625 = cljs.core.chunk_first(seq__33174_33623__$1);
var G__33626 = cljs.core.chunk_rest(seq__33174_33623__$1);
var G__33627 = c__4679__auto___33625;
var G__33628 = cljs.core.count(c__4679__auto___33625);
var G__33629 = (0);
seq__33174_33593 = G__33626;
chunk__33175_33594 = G__33627;
count__33176_33595 = G__33628;
i__33177_33596 = G__33629;
continue;
} else {
var column_33632 = cljs.core.first(seq__33174_33623__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_33632)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_33632,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_33632,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__33645 = cljs.core.next(seq__33174_33623__$1);
var G__33646 = null;
var G__33647 = (0);
var G__33648 = (0);
seq__33174_33593 = G__33645;
chunk__33175_33594 = G__33646;
count__33176_33595 = G__33647;
i__33177_33596 = G__33648;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__33185_33649 = cljs.core.seq(sorted_ids);
var chunk__33186_33650 = null;
var count__33187_33651 = (0);
var i__33188_33652 = (0);
while(true){
if((i__33188_33652 < count__33187_33651)){
var id_33655 = chunk__33186_33650.cljs$core$IIndexed$_nth$arity$2(null,i__33188_33652);
var s_33678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_33655);
var sum_33679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_33680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_33655) : format_id_fn.call(null,id_33655)));

var seq__33231_33682 = cljs.core.seq(columns);
var chunk__33232_33683 = null;
var count__33233_33684 = (0);
var i__33234_33685 = (0);
while(true){
if((i__33234_33685 < count__33233_33684)){
var column_33691 = chunk__33232_33683.cljs$core$IIndexed$_nth$arity$2(null,i__33234_33685);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33242_33698 = column_33691;
var G__33242_33699__$1 = (((G__33242_33698 instanceof cljs.core.Keyword))?G__33242_33698.fqn:null);
switch (G__33242_33699__$1) {
case "n-calls":
append_col(column_33691,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_33691,taoensso.tufte.stats.fmt(mean_33680));

break;
case "mad":
append_col(column_33691,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_33680)].join(''));

break;
case "total":
append_col(column_33691,taoensso.tufte.stats.perc(sum_33679,clock_total__$1));

break;
case "clock":
append_col(column_33691,taoensso.tufte.stats.fmt(sum_33679));

break;
default:
append_col(column_33691,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,column_33691)));

}


var G__33716 = seq__33231_33682;
var G__33717 = chunk__33232_33683;
var G__33718 = count__33233_33684;
var G__33719 = (i__33234_33685 + (1));
seq__33231_33682 = G__33716;
chunk__33232_33683 = G__33717;
count__33233_33684 = G__33718;
i__33234_33685 = G__33719;
continue;
} else {
var temp__5753__auto___33720 = cljs.core.seq(seq__33231_33682);
if(temp__5753__auto___33720){
var seq__33231_33721__$1 = temp__5753__auto___33720;
if(cljs.core.chunked_seq_QMARK_(seq__33231_33721__$1)){
var c__4679__auto___33723 = cljs.core.chunk_first(seq__33231_33721__$1);
var G__33724 = cljs.core.chunk_rest(seq__33231_33721__$1);
var G__33725 = c__4679__auto___33723;
var G__33726 = cljs.core.count(c__4679__auto___33723);
var G__33727 = (0);
seq__33231_33682 = G__33724;
chunk__33232_33683 = G__33725;
count__33233_33684 = G__33726;
i__33234_33685 = G__33727;
continue;
} else {
var column_33730 = cljs.core.first(seq__33231_33721__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33254_33732 = column_33730;
var G__33254_33733__$1 = (((G__33254_33732 instanceof cljs.core.Keyword))?G__33254_33732.fqn:null);
switch (G__33254_33733__$1) {
case "n-calls":
append_col(column_33730,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_33730,taoensso.tufte.stats.fmt(mean_33680));

break;
case "mad":
append_col(column_33730,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_33680)].join(''));

break;
case "total":
append_col(column_33730,taoensso.tufte.stats.perc(sum_33679,clock_total__$1));

break;
case "clock":
append_col(column_33730,taoensso.tufte.stats.fmt(sum_33679));

break;
default:
append_col(column_33730,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33678,column_33730)));

}


var G__33735 = cljs.core.next(seq__33231_33721__$1);
var G__33736 = null;
var G__33737 = (0);
var G__33738 = (0);
seq__33231_33682 = G__33735;
chunk__33232_33683 = G__33736;
count__33233_33684 = G__33737;
i__33234_33685 = G__33738;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__33740 = seq__33185_33649;
var G__33741 = chunk__33186_33650;
var G__33742 = count__33187_33651;
var G__33743 = (i__33188_33652 + (1));
seq__33185_33649 = G__33740;
chunk__33186_33650 = G__33741;
count__33187_33651 = G__33742;
i__33188_33652 = G__33743;
continue;
} else {
var temp__5753__auto___33744 = cljs.core.seq(seq__33185_33649);
if(temp__5753__auto___33744){
var seq__33185_33745__$1 = temp__5753__auto___33744;
if(cljs.core.chunked_seq_QMARK_(seq__33185_33745__$1)){
var c__4679__auto___33747 = cljs.core.chunk_first(seq__33185_33745__$1);
var G__33749 = cljs.core.chunk_rest(seq__33185_33745__$1);
var G__33751 = c__4679__auto___33747;
var G__33752 = cljs.core.count(c__4679__auto___33747);
var G__33753 = (0);
seq__33185_33649 = G__33749;
chunk__33186_33650 = G__33751;
count__33187_33651 = G__33752;
i__33188_33652 = G__33753;
continue;
} else {
var id_33755 = cljs.core.first(seq__33185_33745__$1);
var s_33756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_33755);
var sum_33757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_33758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_33755) : format_id_fn.call(null,id_33755)));

var seq__33261_33761 = cljs.core.seq(columns);
var chunk__33262_33762 = null;
var count__33263_33763 = (0);
var i__33264_33764 = (0);
while(true){
if((i__33264_33764 < count__33263_33763)){
var column_33767 = chunk__33262_33762.cljs$core$IIndexed$_nth$arity$2(null,i__33264_33764);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33310_33769 = column_33767;
var G__33310_33770__$1 = (((G__33310_33769 instanceof cljs.core.Keyword))?G__33310_33769.fqn:null);
switch (G__33310_33770__$1) {
case "n-calls":
append_col(column_33767,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_33767,taoensso.tufte.stats.fmt(mean_33758));

break;
case "mad":
append_col(column_33767,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_33758)].join(''));

break;
case "total":
append_col(column_33767,taoensso.tufte.stats.perc(sum_33757,clock_total__$1));

break;
case "clock":
append_col(column_33767,taoensso.tufte.stats.fmt(sum_33757));

break;
default:
append_col(column_33767,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,column_33767)));

}


var G__33772 = seq__33261_33761;
var G__33773 = chunk__33262_33762;
var G__33774 = count__33263_33763;
var G__33775 = (i__33264_33764 + (1));
seq__33261_33761 = G__33772;
chunk__33262_33762 = G__33773;
count__33263_33763 = G__33774;
i__33264_33764 = G__33775;
continue;
} else {
var temp__5753__auto___33776__$1 = cljs.core.seq(seq__33261_33761);
if(temp__5753__auto___33776__$1){
var seq__33261_33777__$1 = temp__5753__auto___33776__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33261_33777__$1)){
var c__4679__auto___33778 = cljs.core.chunk_first(seq__33261_33777__$1);
var G__33779 = cljs.core.chunk_rest(seq__33261_33777__$1);
var G__33780 = c__4679__auto___33778;
var G__33781 = cljs.core.count(c__4679__auto___33778);
var G__33782 = (0);
seq__33261_33761 = G__33779;
chunk__33262_33762 = G__33780;
count__33263_33763 = G__33781;
i__33264_33764 = G__33782;
continue;
} else {
var column_33783 = cljs.core.first(seq__33261_33777__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33319_33784 = column_33783;
var G__33319_33785__$1 = (((G__33319_33784 instanceof cljs.core.Keyword))?G__33319_33784.fqn:null);
switch (G__33319_33785__$1) {
case "n-calls":
append_col(column_33783,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_33783,taoensso.tufte.stats.fmt(mean_33758));

break;
case "mad":
append_col(column_33783,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_33758)].join(''));

break;
case "total":
append_col(column_33783,taoensso.tufte.stats.perc(sum_33757,clock_total__$1));

break;
case "clock":
append_col(column_33783,taoensso.tufte.stats.fmt(sum_33757));

break;
default:
append_col(column_33783,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_33756,column_33783)));

}


var G__33787 = cljs.core.next(seq__33261_33777__$1);
var G__33788 = null;
var G__33789 = (0);
var G__33790 = (0);
seq__33261_33761 = G__33787;
chunk__33262_33762 = G__33788;
count__33263_33763 = G__33789;
i__33264_33764 = G__33790;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__33791 = cljs.core.next(seq__33185_33745__$1);
var G__33792 = null;
var G__33793 = (0);
var G__33794 = (0);
seq__33185_33649 = G__33791;
chunk__33186_33650 = G__33792;
count__33187_33651 = G__33793;
i__33188_33652 = G__33794;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__33338_33795 = cljs.core.seq(columns);
var chunk__33339_33796 = null;
var count__33340_33797 = (0);
var i__33341_33798 = (0);
while(true){
if((i__33341_33798 < count__33340_33797)){
var column_33800 = chunk__33339_33796.cljs$core$IIndexed$_nth$arity$2(null,i__33341_33798);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33381_33803 = column_33800;
var G__33381_33804__$1 = (((G__33381_33803 instanceof cljs.core.Keyword))?G__33381_33803.fqn:null);
switch (G__33381_33804__$1) {
case "total":
append_col(column_33800,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_33800,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_33800,"");

}


var G__33808 = seq__33338_33795;
var G__33809 = chunk__33339_33796;
var G__33810 = count__33340_33797;
var G__33811 = (i__33341_33798 + (1));
seq__33338_33795 = G__33808;
chunk__33339_33796 = G__33809;
count__33340_33797 = G__33810;
i__33341_33798 = G__33811;
continue;
} else {
var temp__5753__auto___33812 = cljs.core.seq(seq__33338_33795);
if(temp__5753__auto___33812){
var seq__33338_33813__$1 = temp__5753__auto___33812;
if(cljs.core.chunked_seq_QMARK_(seq__33338_33813__$1)){
var c__4679__auto___33814 = cljs.core.chunk_first(seq__33338_33813__$1);
var G__33815 = cljs.core.chunk_rest(seq__33338_33813__$1);
var G__33816 = c__4679__auto___33814;
var G__33817 = cljs.core.count(c__4679__auto___33814);
var G__33818 = (0);
seq__33338_33795 = G__33815;
chunk__33339_33796 = G__33816;
count__33340_33797 = G__33817;
i__33341_33798 = G__33818;
continue;
} else {
var column_33819 = cljs.core.first(seq__33338_33813__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33423_33820 = column_33819;
var G__33423_33821__$1 = (((G__33423_33820 instanceof cljs.core.Keyword))?G__33423_33820.fqn:null);
switch (G__33423_33821__$1) {
case "total":
append_col(column_33819,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_33819,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_33819,"");

}


var G__33823 = cljs.core.next(seq__33338_33813__$1);
var G__33824 = null;
var G__33825 = (0);
var G__33826 = (0);
seq__33338_33795 = G__33823;
chunk__33339_33796 = G__33824;
count__33340_33797 = G__33825;
i__33341_33798 = G__33826;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__33432_33828 = cljs.core.seq(columns);
var chunk__33433_33829 = null;
var count__33434_33830 = (0);
var i__33435_33831 = (0);
while(true){
if((i__33435_33831 < count__33434_33830)){
var column_33834 = chunk__33433_33829.cljs$core$IIndexed$_nth$arity$2(null,i__33435_33831);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33438_33837 = column_33834;
var G__33438_33838__$1 = (((G__33438_33837 instanceof cljs.core.Keyword))?G__33438_33837.fqn:null);
switch (G__33438_33838__$1) {
case "total":
append_col(column_33834,"100%");

break;
case "clock":
append_col(column_33834,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_33834,"");

}


var G__33842 = seq__33432_33828;
var G__33843 = chunk__33433_33829;
var G__33844 = count__33434_33830;
var G__33845 = (i__33435_33831 + (1));
seq__33432_33828 = G__33842;
chunk__33433_33829 = G__33843;
count__33434_33830 = G__33844;
i__33435_33831 = G__33845;
continue;
} else {
var temp__5753__auto___33853 = cljs.core.seq(seq__33432_33828);
if(temp__5753__auto___33853){
var seq__33432_33854__$1 = temp__5753__auto___33853;
if(cljs.core.chunked_seq_QMARK_(seq__33432_33854__$1)){
var c__4679__auto___33855 = cljs.core.chunk_first(seq__33432_33854__$1);
var G__33856 = cljs.core.chunk_rest(seq__33432_33854__$1);
var G__33857 = c__4679__auto___33855;
var G__33858 = cljs.core.count(c__4679__auto___33855);
var G__33859 = (0);
seq__33432_33828 = G__33856;
chunk__33433_33829 = G__33857;
count__33434_33830 = G__33858;
i__33435_33831 = G__33859;
continue;
} else {
var column_33860 = cljs.core.first(seq__33432_33854__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__33441_33861 = column_33860;
var G__33441_33862__$1 = (((G__33441_33861 instanceof cljs.core.Keyword))?G__33441_33861.fqn:null);
switch (G__33441_33862__$1) {
case "total":
append_col(column_33860,"100%");

break;
case "clock":
append_col(column_33860,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_33860,"");

}


var G__33864 = cljs.core.next(seq__33432_33854__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33432_33828 = G__33864;
chunk__33433_33829 = G__33865;
count__33434_33830 = G__33866;
i__33435_33831 = G__33867;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});

//# sourceMappingURL=taoensso.tufte.stats.js.map
