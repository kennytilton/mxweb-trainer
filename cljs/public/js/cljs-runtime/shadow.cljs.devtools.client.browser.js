goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36312 = arguments.length;
var i__4865__auto___36313 = (0);
while(true){
if((i__4865__auto___36313 < len__4864__auto___36312)){
args__4870__auto__.push((arguments[i__4865__auto___36313]));

var G__36314 = (i__4865__auto___36313 + (1));
i__4865__auto___36313 = G__36314;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36029){
var G__36030 = cljs.core.first(seq36029);
var seq36029__$1 = cljs.core.next(seq36029);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36030,seq36029__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36032 = cljs.core.seq(sources);
var chunk__36033 = null;
var count__36034 = (0);
var i__36035 = (0);
while(true){
if((i__36035 < count__36034)){
var map__36040 = chunk__36033.cljs$core$IIndexed$_nth$arity$2(null,i__36035);
var map__36040__$1 = cljs.core.__destructure_map(map__36040);
var src = map__36040__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36041){var e_36315 = e36041;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36315);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36315.message)].join('')));
}

var G__36316 = seq__36032;
var G__36317 = chunk__36033;
var G__36318 = count__36034;
var G__36319 = (i__36035 + (1));
seq__36032 = G__36316;
chunk__36033 = G__36317;
count__36034 = G__36318;
i__36035 = G__36319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36032);
if(temp__5753__auto__){
var seq__36032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36032__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36032__$1);
var G__36320 = cljs.core.chunk_rest(seq__36032__$1);
var G__36321 = c__4679__auto__;
var G__36322 = cljs.core.count(c__4679__auto__);
var G__36323 = (0);
seq__36032 = G__36320;
chunk__36033 = G__36321;
count__36034 = G__36322;
i__36035 = G__36323;
continue;
} else {
var map__36042 = cljs.core.first(seq__36032__$1);
var map__36042__$1 = cljs.core.__destructure_map(map__36042);
var src = map__36042__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36043){var e_36324 = e36043;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36324);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36324.message)].join('')));
}

var G__36325 = cljs.core.next(seq__36032__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36032 = G__36325;
chunk__36033 = G__36326;
count__36034 = G__36327;
i__36035 = G__36328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36046 = cljs.core.seq(js_requires);
var chunk__36047 = null;
var count__36048 = (0);
var i__36049 = (0);
while(true){
if((i__36049 < count__36048)){
var js_ns = chunk__36047.cljs$core$IIndexed$_nth$arity$2(null,i__36049);
var require_str_36329 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36329);


var G__36330 = seq__36046;
var G__36331 = chunk__36047;
var G__36332 = count__36048;
var G__36333 = (i__36049 + (1));
seq__36046 = G__36330;
chunk__36047 = G__36331;
count__36048 = G__36332;
i__36049 = G__36333;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36046);
if(temp__5753__auto__){
var seq__36046__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36046__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36046__$1);
var G__36334 = cljs.core.chunk_rest(seq__36046__$1);
var G__36335 = c__4679__auto__;
var G__36336 = cljs.core.count(c__4679__auto__);
var G__36337 = (0);
seq__36046 = G__36334;
chunk__36047 = G__36335;
count__36048 = G__36336;
i__36049 = G__36337;
continue;
} else {
var js_ns = cljs.core.first(seq__36046__$1);
var require_str_36338 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36338);


var G__36339 = cljs.core.next(seq__36046__$1);
var G__36340 = null;
var G__36341 = (0);
var G__36342 = (0);
seq__36046 = G__36339;
chunk__36047 = G__36340;
count__36048 = G__36341;
i__36049 = G__36342;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36051){
var map__36052 = p__36051;
var map__36052__$1 = cljs.core.__destructure_map(map__36052);
var msg = map__36052__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36053(s__36054){
return (new cljs.core.LazySeq(null,(function (){
var s__36054__$1 = s__36054;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36054__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36059 = cljs.core.first(xs__6308__auto__);
var map__36059__$1 = cljs.core.__destructure_map(map__36059);
var src = map__36059__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36059__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36059__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36054__$1,map__36059,map__36059__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36052,map__36052__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36053_$_iter__36055(s__36056){
return (new cljs.core.LazySeq(null,((function (s__36054__$1,map__36059,map__36059__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36052,map__36052__$1,msg,info,reload_info){
return (function (){
var s__36056__$1 = s__36056;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36056__$1);
if(temp__5753__auto____$1){
var s__36056__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36056__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36056__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36058 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36057 = (0);
while(true){
if((i__36057 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36057);
cljs.core.chunk_append(b__36058,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36343 = (i__36057 + (1));
i__36057 = G__36343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36058),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36053_$_iter__36055(cljs.core.chunk_rest(s__36056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36058),null);
}
} else {
var warning = cljs.core.first(s__36056__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36053_$_iter__36055(cljs.core.rest(s__36056__$2)));
}
} else {
return null;
}
break;
}
});})(s__36054__$1,map__36059,map__36059__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36052,map__36052__$1,msg,info,reload_info))
,null,null));
});})(s__36054__$1,map__36059,map__36059__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36052,map__36052__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36053(cljs.core.rest(s__36054__$1)));
} else {
var G__36344 = cljs.core.rest(s__36054__$1);
s__36054__$1 = G__36344;
continue;
}
} else {
var G__36345 = cljs.core.rest(s__36054__$1);
s__36054__$1 = G__36345;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36060_36346 = cljs.core.seq(warnings);
var chunk__36061_36347 = null;
var count__36062_36348 = (0);
var i__36063_36349 = (0);
while(true){
if((i__36063_36349 < count__36062_36348)){
var map__36066_36350 = chunk__36061_36347.cljs$core$IIndexed$_nth$arity$2(null,i__36063_36349);
var map__36066_36351__$1 = cljs.core.__destructure_map(map__36066_36350);
var w_36352 = map__36066_36351__$1;
var msg_36353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36351__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36356)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36354),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36355),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36353__$1)].join(''));


var G__36357 = seq__36060_36346;
var G__36358 = chunk__36061_36347;
var G__36359 = count__36062_36348;
var G__36360 = (i__36063_36349 + (1));
seq__36060_36346 = G__36357;
chunk__36061_36347 = G__36358;
count__36062_36348 = G__36359;
i__36063_36349 = G__36360;
continue;
} else {
var temp__5753__auto___36361 = cljs.core.seq(seq__36060_36346);
if(temp__5753__auto___36361){
var seq__36060_36362__$1 = temp__5753__auto___36361;
if(cljs.core.chunked_seq_QMARK_(seq__36060_36362__$1)){
var c__4679__auto___36363 = cljs.core.chunk_first(seq__36060_36362__$1);
var G__36364 = cljs.core.chunk_rest(seq__36060_36362__$1);
var G__36365 = c__4679__auto___36363;
var G__36366 = cljs.core.count(c__4679__auto___36363);
var G__36367 = (0);
seq__36060_36346 = G__36364;
chunk__36061_36347 = G__36365;
count__36062_36348 = G__36366;
i__36063_36349 = G__36367;
continue;
} else {
var map__36067_36368 = cljs.core.first(seq__36060_36362__$1);
var map__36067_36369__$1 = cljs.core.__destructure_map(map__36067_36368);
var w_36370 = map__36067_36369__$1;
var msg_36371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36369__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36369__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36374)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36372),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36373),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36371__$1)].join(''));


var G__36375 = cljs.core.next(seq__36060_36362__$1);
var G__36376 = null;
var G__36377 = (0);
var G__36378 = (0);
seq__36060_36346 = G__36375;
chunk__36061_36347 = G__36376;
count__36062_36348 = G__36377;
i__36063_36349 = G__36378;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36050_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36050_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36068){
var map__36069 = p__36068;
var map__36069__$1 = cljs.core.__destructure_map(map__36069);
var msg = map__36069__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36070 = cljs.core.seq(updates);
var chunk__36072 = null;
var count__36073 = (0);
var i__36074 = (0);
while(true){
if((i__36074 < count__36073)){
var path = chunk__36072.cljs$core$IIndexed$_nth$arity$2(null,i__36074);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36184_36379 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36188_36380 = null;
var count__36189_36381 = (0);
var i__36190_36382 = (0);
while(true){
if((i__36190_36382 < count__36189_36381)){
var node_36383 = chunk__36188_36380.cljs$core$IIndexed$_nth$arity$2(null,i__36190_36382);
if(cljs.core.not(node_36383.shadow$old)){
var path_match_36384 = shadow.cljs.devtools.client.browser.match_paths(node_36383.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36384)){
var new_link_36385 = (function (){var G__36216 = node_36383.cloneNode(true);
G__36216.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36384),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36216;
})();
(node_36383.shadow$old = true);

(new_link_36385.onload = ((function (seq__36184_36379,chunk__36188_36380,count__36189_36381,i__36190_36382,seq__36070,chunk__36072,count__36073,i__36074,new_link_36385,path_match_36384,node_36383,path,map__36069,map__36069__$1,msg,updates,reload_info){
return (function (e){
var seq__36217_36386 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36219_36387 = null;
var count__36220_36388 = (0);
var i__36221_36389 = (0);
while(true){
if((i__36221_36389 < count__36220_36388)){
var map__36225_36390 = chunk__36219_36387.cljs$core$IIndexed$_nth$arity$2(null,i__36221_36389);
var map__36225_36391__$1 = cljs.core.__destructure_map(map__36225_36390);
var task_36392 = map__36225_36391__$1;
var fn_str_36393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225_36391__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225_36391__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36395 = goog.getObjectByName(fn_str_36393,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36394)].join(''));

(fn_obj_36395.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36395.cljs$core$IFn$_invoke$arity$2(path,new_link_36385) : fn_obj_36395.call(null,path,new_link_36385));


var G__36396 = seq__36217_36386;
var G__36397 = chunk__36219_36387;
var G__36398 = count__36220_36388;
var G__36399 = (i__36221_36389 + (1));
seq__36217_36386 = G__36396;
chunk__36219_36387 = G__36397;
count__36220_36388 = G__36398;
i__36221_36389 = G__36399;
continue;
} else {
var temp__5753__auto___36400 = cljs.core.seq(seq__36217_36386);
if(temp__5753__auto___36400){
var seq__36217_36401__$1 = temp__5753__auto___36400;
if(cljs.core.chunked_seq_QMARK_(seq__36217_36401__$1)){
var c__4679__auto___36402 = cljs.core.chunk_first(seq__36217_36401__$1);
var G__36403 = cljs.core.chunk_rest(seq__36217_36401__$1);
var G__36404 = c__4679__auto___36402;
var G__36405 = cljs.core.count(c__4679__auto___36402);
var G__36406 = (0);
seq__36217_36386 = G__36403;
chunk__36219_36387 = G__36404;
count__36220_36388 = G__36405;
i__36221_36389 = G__36406;
continue;
} else {
var map__36226_36407 = cljs.core.first(seq__36217_36401__$1);
var map__36226_36408__$1 = cljs.core.__destructure_map(map__36226_36407);
var task_36409 = map__36226_36408__$1;
var fn_str_36410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226_36408__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226_36408__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36412 = goog.getObjectByName(fn_str_36410,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36411)].join(''));

(fn_obj_36412.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36412.cljs$core$IFn$_invoke$arity$2(path,new_link_36385) : fn_obj_36412.call(null,path,new_link_36385));


var G__36413 = cljs.core.next(seq__36217_36401__$1);
var G__36414 = null;
var G__36415 = (0);
var G__36416 = (0);
seq__36217_36386 = G__36413;
chunk__36219_36387 = G__36414;
count__36220_36388 = G__36415;
i__36221_36389 = G__36416;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36383);
});})(seq__36184_36379,chunk__36188_36380,count__36189_36381,i__36190_36382,seq__36070,chunk__36072,count__36073,i__36074,new_link_36385,path_match_36384,node_36383,path,map__36069,map__36069__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36384], 0));

goog.dom.insertSiblingAfter(new_link_36385,node_36383);


var G__36417 = seq__36184_36379;
var G__36418 = chunk__36188_36380;
var G__36419 = count__36189_36381;
var G__36420 = (i__36190_36382 + (1));
seq__36184_36379 = G__36417;
chunk__36188_36380 = G__36418;
count__36189_36381 = G__36419;
i__36190_36382 = G__36420;
continue;
} else {
var G__36421 = seq__36184_36379;
var G__36422 = chunk__36188_36380;
var G__36423 = count__36189_36381;
var G__36424 = (i__36190_36382 + (1));
seq__36184_36379 = G__36421;
chunk__36188_36380 = G__36422;
count__36189_36381 = G__36423;
i__36190_36382 = G__36424;
continue;
}
} else {
var G__36425 = seq__36184_36379;
var G__36426 = chunk__36188_36380;
var G__36427 = count__36189_36381;
var G__36428 = (i__36190_36382 + (1));
seq__36184_36379 = G__36425;
chunk__36188_36380 = G__36426;
count__36189_36381 = G__36427;
i__36190_36382 = G__36428;
continue;
}
} else {
var temp__5753__auto___36429 = cljs.core.seq(seq__36184_36379);
if(temp__5753__auto___36429){
var seq__36184_36430__$1 = temp__5753__auto___36429;
if(cljs.core.chunked_seq_QMARK_(seq__36184_36430__$1)){
var c__4679__auto___36431 = cljs.core.chunk_first(seq__36184_36430__$1);
var G__36432 = cljs.core.chunk_rest(seq__36184_36430__$1);
var G__36433 = c__4679__auto___36431;
var G__36434 = cljs.core.count(c__4679__auto___36431);
var G__36435 = (0);
seq__36184_36379 = G__36432;
chunk__36188_36380 = G__36433;
count__36189_36381 = G__36434;
i__36190_36382 = G__36435;
continue;
} else {
var node_36436 = cljs.core.first(seq__36184_36430__$1);
if(cljs.core.not(node_36436.shadow$old)){
var path_match_36437 = shadow.cljs.devtools.client.browser.match_paths(node_36436.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36437)){
var new_link_36438 = (function (){var G__36227 = node_36436.cloneNode(true);
G__36227.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36437),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36227;
})();
(node_36436.shadow$old = true);

(new_link_36438.onload = ((function (seq__36184_36379,chunk__36188_36380,count__36189_36381,i__36190_36382,seq__36070,chunk__36072,count__36073,i__36074,new_link_36438,path_match_36437,node_36436,seq__36184_36430__$1,temp__5753__auto___36429,path,map__36069,map__36069__$1,msg,updates,reload_info){
return (function (e){
var seq__36228_36439 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36230_36440 = null;
var count__36231_36441 = (0);
var i__36232_36442 = (0);
while(true){
if((i__36232_36442 < count__36231_36441)){
var map__36236_36443 = chunk__36230_36440.cljs$core$IIndexed$_nth$arity$2(null,i__36232_36442);
var map__36236_36444__$1 = cljs.core.__destructure_map(map__36236_36443);
var task_36445 = map__36236_36444__$1;
var fn_str_36446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236_36444__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236_36444__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36448 = goog.getObjectByName(fn_str_36446,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36447)].join(''));

(fn_obj_36448.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36448.cljs$core$IFn$_invoke$arity$2(path,new_link_36438) : fn_obj_36448.call(null,path,new_link_36438));


var G__36449 = seq__36228_36439;
var G__36450 = chunk__36230_36440;
var G__36451 = count__36231_36441;
var G__36452 = (i__36232_36442 + (1));
seq__36228_36439 = G__36449;
chunk__36230_36440 = G__36450;
count__36231_36441 = G__36451;
i__36232_36442 = G__36452;
continue;
} else {
var temp__5753__auto___36453__$1 = cljs.core.seq(seq__36228_36439);
if(temp__5753__auto___36453__$1){
var seq__36228_36454__$1 = temp__5753__auto___36453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36228_36454__$1)){
var c__4679__auto___36455 = cljs.core.chunk_first(seq__36228_36454__$1);
var G__36456 = cljs.core.chunk_rest(seq__36228_36454__$1);
var G__36457 = c__4679__auto___36455;
var G__36458 = cljs.core.count(c__4679__auto___36455);
var G__36459 = (0);
seq__36228_36439 = G__36456;
chunk__36230_36440 = G__36457;
count__36231_36441 = G__36458;
i__36232_36442 = G__36459;
continue;
} else {
var map__36237_36460 = cljs.core.first(seq__36228_36454__$1);
var map__36237_36461__$1 = cljs.core.__destructure_map(map__36237_36460);
var task_36462 = map__36237_36461__$1;
var fn_str_36463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36237_36461__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36237_36461__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36465 = goog.getObjectByName(fn_str_36463,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36464)].join(''));

(fn_obj_36465.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36465.cljs$core$IFn$_invoke$arity$2(path,new_link_36438) : fn_obj_36465.call(null,path,new_link_36438));


var G__36466 = cljs.core.next(seq__36228_36454__$1);
var G__36467 = null;
var G__36468 = (0);
var G__36469 = (0);
seq__36228_36439 = G__36466;
chunk__36230_36440 = G__36467;
count__36231_36441 = G__36468;
i__36232_36442 = G__36469;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36436);
});})(seq__36184_36379,chunk__36188_36380,count__36189_36381,i__36190_36382,seq__36070,chunk__36072,count__36073,i__36074,new_link_36438,path_match_36437,node_36436,seq__36184_36430__$1,temp__5753__auto___36429,path,map__36069,map__36069__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36437], 0));

goog.dom.insertSiblingAfter(new_link_36438,node_36436);


var G__36470 = cljs.core.next(seq__36184_36430__$1);
var G__36471 = null;
var G__36472 = (0);
var G__36473 = (0);
seq__36184_36379 = G__36470;
chunk__36188_36380 = G__36471;
count__36189_36381 = G__36472;
i__36190_36382 = G__36473;
continue;
} else {
var G__36474 = cljs.core.next(seq__36184_36430__$1);
var G__36475 = null;
var G__36476 = (0);
var G__36477 = (0);
seq__36184_36379 = G__36474;
chunk__36188_36380 = G__36475;
count__36189_36381 = G__36476;
i__36190_36382 = G__36477;
continue;
}
} else {
var G__36478 = cljs.core.next(seq__36184_36430__$1);
var G__36479 = null;
var G__36480 = (0);
var G__36481 = (0);
seq__36184_36379 = G__36478;
chunk__36188_36380 = G__36479;
count__36189_36381 = G__36480;
i__36190_36382 = G__36481;
continue;
}
}
} else {
}
}
break;
}


var G__36482 = seq__36070;
var G__36483 = chunk__36072;
var G__36484 = count__36073;
var G__36485 = (i__36074 + (1));
seq__36070 = G__36482;
chunk__36072 = G__36483;
count__36073 = G__36484;
i__36074 = G__36485;
continue;
} else {
var G__36486 = seq__36070;
var G__36487 = chunk__36072;
var G__36488 = count__36073;
var G__36489 = (i__36074 + (1));
seq__36070 = G__36486;
chunk__36072 = G__36487;
count__36073 = G__36488;
i__36074 = G__36489;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36070);
if(temp__5753__auto__){
var seq__36070__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36070__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36070__$1);
var G__36490 = cljs.core.chunk_rest(seq__36070__$1);
var G__36491 = c__4679__auto__;
var G__36492 = cljs.core.count(c__4679__auto__);
var G__36493 = (0);
seq__36070 = G__36490;
chunk__36072 = G__36491;
count__36073 = G__36492;
i__36074 = G__36493;
continue;
} else {
var path = cljs.core.first(seq__36070__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36238_36494 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36242_36495 = null;
var count__36243_36496 = (0);
var i__36244_36497 = (0);
while(true){
if((i__36244_36497 < count__36243_36496)){
var node_36498 = chunk__36242_36495.cljs$core$IIndexed$_nth$arity$2(null,i__36244_36497);
if(cljs.core.not(node_36498.shadow$old)){
var path_match_36499 = shadow.cljs.devtools.client.browser.match_paths(node_36498.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36499)){
var new_link_36500 = (function (){var G__36270 = node_36498.cloneNode(true);
G__36270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36499),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36270;
})();
(node_36498.shadow$old = true);

(new_link_36500.onload = ((function (seq__36238_36494,chunk__36242_36495,count__36243_36496,i__36244_36497,seq__36070,chunk__36072,count__36073,i__36074,new_link_36500,path_match_36499,node_36498,path,seq__36070__$1,temp__5753__auto__,map__36069,map__36069__$1,msg,updates,reload_info){
return (function (e){
var seq__36271_36501 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36273_36502 = null;
var count__36274_36503 = (0);
var i__36275_36504 = (0);
while(true){
if((i__36275_36504 < count__36274_36503)){
var map__36279_36505 = chunk__36273_36502.cljs$core$IIndexed$_nth$arity$2(null,i__36275_36504);
var map__36279_36506__$1 = cljs.core.__destructure_map(map__36279_36505);
var task_36507 = map__36279_36506__$1;
var fn_str_36508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279_36506__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279_36506__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36510 = goog.getObjectByName(fn_str_36508,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36509)].join(''));

(fn_obj_36510.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36510.cljs$core$IFn$_invoke$arity$2(path,new_link_36500) : fn_obj_36510.call(null,path,new_link_36500));


var G__36511 = seq__36271_36501;
var G__36512 = chunk__36273_36502;
var G__36513 = count__36274_36503;
var G__36514 = (i__36275_36504 + (1));
seq__36271_36501 = G__36511;
chunk__36273_36502 = G__36512;
count__36274_36503 = G__36513;
i__36275_36504 = G__36514;
continue;
} else {
var temp__5753__auto___36515__$1 = cljs.core.seq(seq__36271_36501);
if(temp__5753__auto___36515__$1){
var seq__36271_36516__$1 = temp__5753__auto___36515__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36271_36516__$1)){
var c__4679__auto___36517 = cljs.core.chunk_first(seq__36271_36516__$1);
var G__36518 = cljs.core.chunk_rest(seq__36271_36516__$1);
var G__36519 = c__4679__auto___36517;
var G__36520 = cljs.core.count(c__4679__auto___36517);
var G__36521 = (0);
seq__36271_36501 = G__36518;
chunk__36273_36502 = G__36519;
count__36274_36503 = G__36520;
i__36275_36504 = G__36521;
continue;
} else {
var map__36280_36522 = cljs.core.first(seq__36271_36516__$1);
var map__36280_36523__$1 = cljs.core.__destructure_map(map__36280_36522);
var task_36524 = map__36280_36523__$1;
var fn_str_36525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280_36523__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280_36523__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36527 = goog.getObjectByName(fn_str_36525,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36526)].join(''));

(fn_obj_36527.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36527.cljs$core$IFn$_invoke$arity$2(path,new_link_36500) : fn_obj_36527.call(null,path,new_link_36500));


var G__36528 = cljs.core.next(seq__36271_36516__$1);
var G__36529 = null;
var G__36530 = (0);
var G__36531 = (0);
seq__36271_36501 = G__36528;
chunk__36273_36502 = G__36529;
count__36274_36503 = G__36530;
i__36275_36504 = G__36531;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36498);
});})(seq__36238_36494,chunk__36242_36495,count__36243_36496,i__36244_36497,seq__36070,chunk__36072,count__36073,i__36074,new_link_36500,path_match_36499,node_36498,path,seq__36070__$1,temp__5753__auto__,map__36069,map__36069__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36499], 0));

goog.dom.insertSiblingAfter(new_link_36500,node_36498);


var G__36532 = seq__36238_36494;
var G__36533 = chunk__36242_36495;
var G__36534 = count__36243_36496;
var G__36535 = (i__36244_36497 + (1));
seq__36238_36494 = G__36532;
chunk__36242_36495 = G__36533;
count__36243_36496 = G__36534;
i__36244_36497 = G__36535;
continue;
} else {
var G__36536 = seq__36238_36494;
var G__36537 = chunk__36242_36495;
var G__36538 = count__36243_36496;
var G__36539 = (i__36244_36497 + (1));
seq__36238_36494 = G__36536;
chunk__36242_36495 = G__36537;
count__36243_36496 = G__36538;
i__36244_36497 = G__36539;
continue;
}
} else {
var G__36540 = seq__36238_36494;
var G__36541 = chunk__36242_36495;
var G__36542 = count__36243_36496;
var G__36543 = (i__36244_36497 + (1));
seq__36238_36494 = G__36540;
chunk__36242_36495 = G__36541;
count__36243_36496 = G__36542;
i__36244_36497 = G__36543;
continue;
}
} else {
var temp__5753__auto___36544__$1 = cljs.core.seq(seq__36238_36494);
if(temp__5753__auto___36544__$1){
var seq__36238_36545__$1 = temp__5753__auto___36544__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36238_36545__$1)){
var c__4679__auto___36546 = cljs.core.chunk_first(seq__36238_36545__$1);
var G__36547 = cljs.core.chunk_rest(seq__36238_36545__$1);
var G__36548 = c__4679__auto___36546;
var G__36549 = cljs.core.count(c__4679__auto___36546);
var G__36550 = (0);
seq__36238_36494 = G__36547;
chunk__36242_36495 = G__36548;
count__36243_36496 = G__36549;
i__36244_36497 = G__36550;
continue;
} else {
var node_36551 = cljs.core.first(seq__36238_36545__$1);
if(cljs.core.not(node_36551.shadow$old)){
var path_match_36552 = shadow.cljs.devtools.client.browser.match_paths(node_36551.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36552)){
var new_link_36553 = (function (){var G__36281 = node_36551.cloneNode(true);
G__36281.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36552),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36281;
})();
(node_36551.shadow$old = true);

(new_link_36553.onload = ((function (seq__36238_36494,chunk__36242_36495,count__36243_36496,i__36244_36497,seq__36070,chunk__36072,count__36073,i__36074,new_link_36553,path_match_36552,node_36551,seq__36238_36545__$1,temp__5753__auto___36544__$1,path,seq__36070__$1,temp__5753__auto__,map__36069,map__36069__$1,msg,updates,reload_info){
return (function (e){
var seq__36282_36554 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36284_36555 = null;
var count__36285_36556 = (0);
var i__36286_36557 = (0);
while(true){
if((i__36286_36557 < count__36285_36556)){
var map__36290_36558 = chunk__36284_36555.cljs$core$IIndexed$_nth$arity$2(null,i__36286_36557);
var map__36290_36559__$1 = cljs.core.__destructure_map(map__36290_36558);
var task_36560 = map__36290_36559__$1;
var fn_str_36561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36290_36559__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36290_36559__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36563 = goog.getObjectByName(fn_str_36561,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36562)].join(''));

(fn_obj_36563.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36563.cljs$core$IFn$_invoke$arity$2(path,new_link_36553) : fn_obj_36563.call(null,path,new_link_36553));


var G__36564 = seq__36282_36554;
var G__36565 = chunk__36284_36555;
var G__36566 = count__36285_36556;
var G__36567 = (i__36286_36557 + (1));
seq__36282_36554 = G__36564;
chunk__36284_36555 = G__36565;
count__36285_36556 = G__36566;
i__36286_36557 = G__36567;
continue;
} else {
var temp__5753__auto___36568__$2 = cljs.core.seq(seq__36282_36554);
if(temp__5753__auto___36568__$2){
var seq__36282_36569__$1 = temp__5753__auto___36568__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36282_36569__$1)){
var c__4679__auto___36570 = cljs.core.chunk_first(seq__36282_36569__$1);
var G__36571 = cljs.core.chunk_rest(seq__36282_36569__$1);
var G__36572 = c__4679__auto___36570;
var G__36573 = cljs.core.count(c__4679__auto___36570);
var G__36574 = (0);
seq__36282_36554 = G__36571;
chunk__36284_36555 = G__36572;
count__36285_36556 = G__36573;
i__36286_36557 = G__36574;
continue;
} else {
var map__36291_36575 = cljs.core.first(seq__36282_36569__$1);
var map__36291_36576__$1 = cljs.core.__destructure_map(map__36291_36575);
var task_36577 = map__36291_36576__$1;
var fn_str_36578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36291_36576__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36291_36576__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36580 = goog.getObjectByName(fn_str_36578,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36579)].join(''));

(fn_obj_36580.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36580.cljs$core$IFn$_invoke$arity$2(path,new_link_36553) : fn_obj_36580.call(null,path,new_link_36553));


var G__36581 = cljs.core.next(seq__36282_36569__$1);
var G__36582 = null;
var G__36583 = (0);
var G__36584 = (0);
seq__36282_36554 = G__36581;
chunk__36284_36555 = G__36582;
count__36285_36556 = G__36583;
i__36286_36557 = G__36584;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36551);
});})(seq__36238_36494,chunk__36242_36495,count__36243_36496,i__36244_36497,seq__36070,chunk__36072,count__36073,i__36074,new_link_36553,path_match_36552,node_36551,seq__36238_36545__$1,temp__5753__auto___36544__$1,path,seq__36070__$1,temp__5753__auto__,map__36069,map__36069__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36552], 0));

goog.dom.insertSiblingAfter(new_link_36553,node_36551);


var G__36585 = cljs.core.next(seq__36238_36545__$1);
var G__36586 = null;
var G__36587 = (0);
var G__36588 = (0);
seq__36238_36494 = G__36585;
chunk__36242_36495 = G__36586;
count__36243_36496 = G__36587;
i__36244_36497 = G__36588;
continue;
} else {
var G__36589 = cljs.core.next(seq__36238_36545__$1);
var G__36590 = null;
var G__36591 = (0);
var G__36592 = (0);
seq__36238_36494 = G__36589;
chunk__36242_36495 = G__36590;
count__36243_36496 = G__36591;
i__36244_36497 = G__36592;
continue;
}
} else {
var G__36593 = cljs.core.next(seq__36238_36545__$1);
var G__36594 = null;
var G__36595 = (0);
var G__36596 = (0);
seq__36238_36494 = G__36593;
chunk__36242_36495 = G__36594;
count__36243_36496 = G__36595;
i__36244_36497 = G__36596;
continue;
}
}
} else {
}
}
break;
}


var G__36597 = cljs.core.next(seq__36070__$1);
var G__36598 = null;
var G__36599 = (0);
var G__36600 = (0);
seq__36070 = G__36597;
chunk__36072 = G__36598;
count__36073 = G__36599;
i__36074 = G__36600;
continue;
} else {
var G__36601 = cljs.core.next(seq__36070__$1);
var G__36602 = null;
var G__36603 = (0);
var G__36604 = (0);
seq__36070 = G__36601;
chunk__36072 = G__36602;
count__36073 = G__36603;
i__36074 = G__36604;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36292){
var map__36293 = p__36292;
var map__36293__$1 = cljs.core.__destructure_map(map__36293);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36293__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36294){
var map__36295 = p__36294;
var map__36295__$1 = cljs.core.__destructure_map(map__36295);
var _ = map__36295__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36295__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36296,done,error){
var map__36297 = p__36296;
var map__36297__$1 = cljs.core.__destructure_map(map__36297);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36298,done,error){
var map__36299 = p__36298;
var map__36299__$1 = cljs.core.__destructure_map(map__36299);
var msg = map__36299__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36300){
var map__36301 = p__36300;
var map__36301__$1 = cljs.core.__destructure_map(map__36301);
var src = map__36301__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36302 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36302) : done.call(null,G__36302));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36303){
var map__36304 = p__36303;
var map__36304__$1 = cljs.core.__destructure_map(map__36304);
var msg__$1 = map__36304__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36304__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36305){var ex = e36305;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36306){
var map__36307 = p__36306;
var map__36307__$1 = cljs.core.__destructure_map(map__36307);
var env = map__36307__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36307__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36308){
var map__36309 = p__36308;
var map__36309__$1 = cljs.core.__destructure_map(map__36309);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36309__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36309__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36310){
var map__36311 = p__36310;
var map__36311__$1 = cljs.core.__destructure_map(map__36311);
var svc = map__36311__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36311__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
