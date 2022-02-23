goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34906){
var map__34907 = p__34906;
var map__34907__$1 = cljs.core.__destructure_map(map__34907);
var m = map__34907__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34907__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34907__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34911_35251 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34912_35252 = null;
var count__34913_35253 = (0);
var i__34914_35254 = (0);
while(true){
if((i__34914_35254 < count__34913_35253)){
var f_35255 = chunk__34912_35252.cljs$core$IIndexed$_nth$arity$2(null,i__34914_35254);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35255], 0));


var G__35256 = seq__34911_35251;
var G__35257 = chunk__34912_35252;
var G__35258 = count__34913_35253;
var G__35259 = (i__34914_35254 + (1));
seq__34911_35251 = G__35256;
chunk__34912_35252 = G__35257;
count__34913_35253 = G__35258;
i__34914_35254 = G__35259;
continue;
} else {
var temp__5753__auto___35260 = cljs.core.seq(seq__34911_35251);
if(temp__5753__auto___35260){
var seq__34911_35261__$1 = temp__5753__auto___35260;
if(cljs.core.chunked_seq_QMARK_(seq__34911_35261__$1)){
var c__4679__auto___35262 = cljs.core.chunk_first(seq__34911_35261__$1);
var G__35263 = cljs.core.chunk_rest(seq__34911_35261__$1);
var G__35264 = c__4679__auto___35262;
var G__35265 = cljs.core.count(c__4679__auto___35262);
var G__35266 = (0);
seq__34911_35251 = G__35263;
chunk__34912_35252 = G__35264;
count__34913_35253 = G__35265;
i__34914_35254 = G__35266;
continue;
} else {
var f_35267 = cljs.core.first(seq__34911_35261__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35267], 0));


var G__35268 = cljs.core.next(seq__34911_35261__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__34911_35251 = G__35268;
chunk__34912_35252 = G__35269;
count__34913_35253 = G__35270;
i__34914_35254 = G__35271;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35272 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35272], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35272)))?cljs.core.second(arglists_35272):arglists_35272)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34926_35273 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34927_35274 = null;
var count__34928_35275 = (0);
var i__34929_35276 = (0);
while(true){
if((i__34929_35276 < count__34928_35275)){
var vec__34942_35277 = chunk__34927_35274.cljs$core$IIndexed$_nth$arity$2(null,i__34929_35276);
var name_35278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35277,(0),null);
var map__34945_35279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34942_35277,(1),null);
var map__34945_35280__$1 = cljs.core.__destructure_map(map__34945_35279);
var doc_35281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34945_35280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34945_35280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35278], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35282], 0));

if(cljs.core.truth_(doc_35281)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35281], 0));
} else {
}


var G__35284 = seq__34926_35273;
var G__35285 = chunk__34927_35274;
var G__35286 = count__34928_35275;
var G__35287 = (i__34929_35276 + (1));
seq__34926_35273 = G__35284;
chunk__34927_35274 = G__35285;
count__34928_35275 = G__35286;
i__34929_35276 = G__35287;
continue;
} else {
var temp__5753__auto___35288 = cljs.core.seq(seq__34926_35273);
if(temp__5753__auto___35288){
var seq__34926_35289__$1 = temp__5753__auto___35288;
if(cljs.core.chunked_seq_QMARK_(seq__34926_35289__$1)){
var c__4679__auto___35290 = cljs.core.chunk_first(seq__34926_35289__$1);
var G__35291 = cljs.core.chunk_rest(seq__34926_35289__$1);
var G__35292 = c__4679__auto___35290;
var G__35293 = cljs.core.count(c__4679__auto___35290);
var G__35294 = (0);
seq__34926_35273 = G__35291;
chunk__34927_35274 = G__35292;
count__34928_35275 = G__35293;
i__34929_35276 = G__35294;
continue;
} else {
var vec__34949_35295 = cljs.core.first(seq__34926_35289__$1);
var name_35296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35295,(0),null);
var map__34952_35297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34949_35295,(1),null);
var map__34952_35298__$1 = cljs.core.__destructure_map(map__34952_35297);
var doc_35299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952_35298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34952_35298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35296], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35300], 0));

if(cljs.core.truth_(doc_35299)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35299], 0));
} else {
}


var G__35302 = cljs.core.next(seq__34926_35289__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__34926_35273 = G__35302;
chunk__34927_35274 = G__35303;
count__34928_35275 = G__35304;
i__34929_35276 = G__35305;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34954 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34955 = null;
var count__34956 = (0);
var i__34957 = (0);
while(true){
if((i__34957 < count__34956)){
var role = chunk__34955.cljs$core$IIndexed$_nth$arity$2(null,i__34957);
var temp__5753__auto___35306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35306__$1)){
var spec_35309 = temp__5753__auto___35306__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35309)], 0));
} else {
}


var G__35310 = seq__34954;
var G__35311 = chunk__34955;
var G__35312 = count__34956;
var G__35313 = (i__34957 + (1));
seq__34954 = G__35310;
chunk__34955 = G__35311;
count__34956 = G__35312;
i__34957 = G__35313;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34954);
if(temp__5753__auto____$1){
var seq__34954__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34954__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34954__$1);
var G__35314 = cljs.core.chunk_rest(seq__34954__$1);
var G__35315 = c__4679__auto__;
var G__35316 = cljs.core.count(c__4679__auto__);
var G__35317 = (0);
seq__34954 = G__35314;
chunk__34955 = G__35315;
count__34956 = G__35316;
i__34957 = G__35317;
continue;
} else {
var role = cljs.core.first(seq__34954__$1);
var temp__5753__auto___35318__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35318__$2)){
var spec_35320 = temp__5753__auto___35318__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35320)], 0));
} else {
}


var G__35323 = cljs.core.next(seq__34954__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__34954 = G__35323;
chunk__34955 = G__35324;
count__34956 = G__35325;
i__34957 = G__35326;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35333 = cljs.core.ex_cause(t);
via = G__35332;
t = G__35333;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35039 = datafied_throwable;
var map__35039__$1 = cljs.core.__destructure_map(map__35039);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35039__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35039__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35039__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35040 = cljs.core.last(via);
var map__35040__$1 = cljs.core.__destructure_map(map__35040);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35040__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35040__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35040__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35041 = data;
var map__35041__$1 = cljs.core.__destructure_map(map__35041);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35041__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35042 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35042__$1 = cljs.core.__destructure_map(map__35042);
var top_data = map__35042__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35067 = phase;
var G__35067__$1 = (((G__35067 instanceof cljs.core.Keyword))?G__35067.fqn:null);
switch (G__35067__$1) {
case "read-source":
var map__35075 = data;
var map__35075__$1 = cljs.core.__destructure_map(map__35075);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35075__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35075__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35076 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35076__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35076,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35076);
var G__35076__$2 = (cljs.core.truth_((function (){var fexpr__35091 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35091.cljs$core$IFn$_invoke$arity$1 ? fexpr__35091.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35091.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35076__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35076__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35076__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35076__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35100 = top_data;
var G__35100__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35100);
var G__35100__$2 = (cljs.core.truth_((function (){var fexpr__35101 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35101.cljs$core$IFn$_invoke$arity$1 ? fexpr__35101.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35101.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35100__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35100__$1);
var G__35100__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35100__$2);
var G__35100__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35100__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35100__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35102 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(3),null);
var G__35105 = top_data;
var G__35105__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35105,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35105);
var G__35105__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35105__$1);
var G__35105__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35105__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35105__$2);
var G__35105__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35105__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35105__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35105__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35105__$4;
}

break;
case "execution":
var vec__35106 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35013_SHARP_){
var or__4253__auto__ = (p1__35013_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35109 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35109.cljs$core$IFn$_invoke$arity$1 ? fexpr__35109.cljs$core$IFn$_invoke$arity$1(p1__35013_SHARP_) : fexpr__35109.call(null,p1__35013_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35110 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35110__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35110,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35110);
var G__35110__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35110__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35110__$1);
var G__35110__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35110__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35110__$2);
var G__35110__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35110__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35110__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35110__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35110__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35067__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35131){
var map__35132 = p__35131;
var map__35132__$1 = cljs.core.__destructure_map(map__35132);
var triage_data = map__35132__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35135 = phase;
var G__35135__$1 = (((G__35135 instanceof cljs.core.Keyword))?G__35135.fqn:null);
switch (G__35135__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35143 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35145 = loc;
var G__35146 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35147_35397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35148_35398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35149_35399 = true;
var _STAR_print_fn_STAR__temp_val__35150_35400 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35149_35399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35150_35400);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35127_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35127_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35148_35398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35147_35397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35143,G__35144,G__35145,G__35146) : format.call(null,G__35143,G__35144,G__35145,G__35146));

break;
case "macroexpansion":
var G__35172 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35173 = cause_type;
var G__35174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35175 = loc;
var G__35176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35172,G__35173,G__35174,G__35175,G__35176) : format.call(null,G__35172,G__35173,G__35174,G__35175,G__35176));

break;
case "compile-syntax-check":
var G__35184 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35185 = cause_type;
var G__35186 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35187 = loc;
var G__35188 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35184,G__35185,G__35186,G__35187,G__35188) : format.call(null,G__35184,G__35185,G__35186,G__35187,G__35188));

break;
case "compilation":
var G__35194 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35195 = cause_type;
var G__35196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35197 = loc;
var G__35198 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35194,G__35195,G__35196,G__35197,G__35198) : format.call(null,G__35194,G__35195,G__35196,G__35197,G__35198));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35204 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35205 = symbol;
var G__35206 = loc;
var G__35207 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35210_35427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35211_35428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35212_35429 = true;
var _STAR_print_fn_STAR__temp_val__35213_35430 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35212_35429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35213_35430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35129_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35129_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35211_35428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35210_35427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35204,G__35205,G__35206,G__35207) : format.call(null,G__35204,G__35205,G__35206,G__35207));
} else {
var G__35225 = "Execution error%s at %s(%s).\n%s\n";
var G__35226 = cause_type;
var G__35227 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35228 = loc;
var G__35229 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35225,G__35226,G__35227,G__35228,G__35229) : format.call(null,G__35225,G__35226,G__35227,G__35228,G__35229));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35135__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
