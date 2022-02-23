goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32065,res){
var map__32070 = p__32065;
var map__32070__$1 = cljs.core.__destructure_map(map__32070);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32070__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32075 = res;
var G__32075__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32075,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32075);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32075__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32075__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32087 = arguments.length;
switch (G__32087) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32110,msg,handlers,timeout_after_ms){
var map__32111 = p__32110;
var map__32111__$1 = cljs.core.__destructure_map(map__32111);
var runtime = map__32111__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32111__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32258 = arguments.length;
var i__4865__auto___32259 = (0);
while(true){
if((i__4865__auto___32259 < len__4864__auto___32258)){
args__4870__auto__.push((arguments[i__4865__auto___32259]));

var G__32260 = (i__4865__auto___32259 + (1));
i__4865__auto___32259 = G__32260;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32127,ev,args){
var map__32128 = p__32127;
var map__32128__$1 = cljs.core.__destructure_map(map__32128);
var runtime = map__32128__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32128__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32134 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32137 = null;
var count__32138 = (0);
var i__32139 = (0);
while(true){
if((i__32139 < count__32138)){
var ext = chunk__32137.cljs$core$IIndexed$_nth$arity$2(null,i__32139);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32261 = seq__32134;
var G__32262 = chunk__32137;
var G__32263 = count__32138;
var G__32264 = (i__32139 + (1));
seq__32134 = G__32261;
chunk__32137 = G__32262;
count__32138 = G__32263;
i__32139 = G__32264;
continue;
} else {
var G__32265 = seq__32134;
var G__32266 = chunk__32137;
var G__32267 = count__32138;
var G__32268 = (i__32139 + (1));
seq__32134 = G__32265;
chunk__32137 = G__32266;
count__32138 = G__32267;
i__32139 = G__32268;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32134);
if(temp__5753__auto__){
var seq__32134__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32134__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32134__$1);
var G__32269 = cljs.core.chunk_rest(seq__32134__$1);
var G__32270 = c__4679__auto__;
var G__32271 = cljs.core.count(c__4679__auto__);
var G__32272 = (0);
seq__32134 = G__32269;
chunk__32137 = G__32270;
count__32138 = G__32271;
i__32139 = G__32272;
continue;
} else {
var ext = cljs.core.first(seq__32134__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32273 = cljs.core.next(seq__32134__$1);
var G__32274 = null;
var G__32275 = (0);
var G__32276 = (0);
seq__32134 = G__32273;
chunk__32137 = G__32274;
count__32138 = G__32275;
i__32139 = G__32276;
continue;
} else {
var G__32277 = cljs.core.next(seq__32134__$1);
var G__32278 = null;
var G__32279 = (0);
var G__32280 = (0);
seq__32134 = G__32277;
chunk__32137 = G__32278;
count__32138 = G__32279;
i__32139 = G__32280;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first(seq32116);
var seq32116__$1 = cljs.core.next(seq32116);
var G__32118 = cljs.core.first(seq32116__$1);
var seq32116__$2 = cljs.core.next(seq32116__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32117,G__32118,seq32116__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32187,p__32188){
var map__32189 = p__32187;
var map__32189__$1 = cljs.core.__destructure_map(map__32189);
var runtime = map__32189__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32189__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32190 = p__32188;
var map__32190__$1 = cljs.core.__destructure_map(map__32190);
var msg = map__32190__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32190__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32195 = cljs.core.deref(state_ref);
var map__32195__$1 = cljs.core.__destructure_map(map__32195);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32195__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32195__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32202){
var map__32203 = p__32202;
var map__32203__$1 = cljs.core.__destructure_map(map__32203);
var runtime = map__32203__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32203__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32204,msg){
var map__32205 = p__32204;
var map__32205__$1 = cljs.core.__destructure_map(map__32205);
var runtime = map__32205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32216,key,p__32217){
var map__32218 = p__32216;
var map__32218__$1 = cljs.core.__destructure_map(map__32218);
var state = map__32218__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32218__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32219 = p__32217;
var map__32219__$1 = cljs.core.__destructure_map(map__32219);
var spec = map__32219__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32219__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32220,key,spec){
var map__32221 = p__32220;
var map__32221__$1 = cljs.core.__destructure_map(map__32221);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32221__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32226_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32226_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32227_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32227_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32228_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32228_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32229_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32229_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32230_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32230_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32233,key){
var map__32234 = p__32233;
var map__32234__$1 = cljs.core.__destructure_map(map__32234);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32234__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32235,msg){
var map__32236 = p__32235;
var map__32236__$1 = cljs.core.__destructure_map(map__32236);
var runtime = map__32236__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32236__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32240,p__32241){
var map__32242 = p__32240;
var map__32242__$1 = cljs.core.__destructure_map(map__32242);
var runtime = map__32242__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32243 = p__32241;
var map__32243__$1 = cljs.core.__destructure_map(map__32243);
var msg = map__32243__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32243__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32243__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32247 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32249 = null;
var count__32250 = (0);
var i__32251 = (0);
while(true){
if((i__32251 < count__32250)){
var map__32255 = chunk__32249.cljs$core$IIndexed$_nth$arity$2(null,i__32251);
var map__32255__$1 = cljs.core.__destructure_map(map__32255);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32255__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32310 = seq__32247;
var G__32311 = chunk__32249;
var G__32312 = count__32250;
var G__32313 = (i__32251 + (1));
seq__32247 = G__32310;
chunk__32249 = G__32311;
count__32250 = G__32312;
i__32251 = G__32313;
continue;
} else {
var G__32314 = seq__32247;
var G__32315 = chunk__32249;
var G__32316 = count__32250;
var G__32317 = (i__32251 + (1));
seq__32247 = G__32314;
chunk__32249 = G__32315;
count__32250 = G__32316;
i__32251 = G__32317;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32247);
if(temp__5753__auto__){
var seq__32247__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32247__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32247__$1);
var G__32318 = cljs.core.chunk_rest(seq__32247__$1);
var G__32319 = c__4679__auto__;
var G__32320 = cljs.core.count(c__4679__auto__);
var G__32321 = (0);
seq__32247 = G__32318;
chunk__32249 = G__32319;
count__32250 = G__32320;
i__32251 = G__32321;
continue;
} else {
var map__32256 = cljs.core.first(seq__32247__$1);
var map__32256__$1 = cljs.core.__destructure_map(map__32256);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32256__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32322 = cljs.core.next(seq__32247__$1);
var G__32323 = null;
var G__32324 = (0);
var G__32325 = (0);
seq__32247 = G__32322;
chunk__32249 = G__32323;
count__32250 = G__32324;
i__32251 = G__32325;
continue;
} else {
var G__32326 = cljs.core.next(seq__32247__$1);
var G__32327 = null;
var G__32328 = (0);
var G__32329 = (0);
seq__32247 = G__32326;
chunk__32249 = G__32327;
count__32250 = G__32328;
i__32251 = G__32329;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
