goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34271 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34271(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34289 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34289(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33307 = coll;
var G__33308 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33307,G__33308) : shadow.dom.lazy_native_coll_seq.call(null,G__33307,G__33308));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33327 = arguments.length;
switch (G__33327) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33340 = arguments.length;
switch (G__33340) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33357 = arguments.length;
switch (G__33357) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33425 = arguments.length;
switch (G__33425) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33448 = arguments.length;
switch (G__33448) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33461){if((e33461 instanceof Object)){
var e = e33461;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33461;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33477 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33478 = null;
var count__33479 = (0);
var i__33480 = (0);
while(true){
if((i__33480 < count__33479)){
var el = chunk__33478.cljs$core$IIndexed$_nth$arity$2(null,i__33480);
var handler_34336__$1 = ((function (seq__33477,chunk__33478,count__33479,i__33480,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33477,chunk__33478,count__33479,i__33480,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34336__$1);


var G__34337 = seq__33477;
var G__34338 = chunk__33478;
var G__34339 = count__33479;
var G__34340 = (i__33480 + (1));
seq__33477 = G__34337;
chunk__33478 = G__34338;
count__33479 = G__34339;
i__33480 = G__34340;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33477);
if(temp__5753__auto__){
var seq__33477__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33477__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33477__$1);
var G__34341 = cljs.core.chunk_rest(seq__33477__$1);
var G__34342 = c__4679__auto__;
var G__34343 = cljs.core.count(c__4679__auto__);
var G__34344 = (0);
seq__33477 = G__34341;
chunk__33478 = G__34342;
count__33479 = G__34343;
i__33480 = G__34344;
continue;
} else {
var el = cljs.core.first(seq__33477__$1);
var handler_34345__$1 = ((function (seq__33477,chunk__33478,count__33479,i__33480,el,seq__33477__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33477,chunk__33478,count__33479,i__33480,el,seq__33477__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34345__$1);


var G__34346 = cljs.core.next(seq__33477__$1);
var G__34347 = null;
var G__34348 = (0);
var G__34349 = (0);
seq__33477 = G__34346;
chunk__33478 = G__34347;
count__33479 = G__34348;
i__33480 = G__34349;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33516 = arguments.length;
switch (G__33516) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33531 = cljs.core.seq(events);
var chunk__33534 = null;
var count__33535 = (0);
var i__33536 = (0);
while(true){
if((i__33536 < count__33535)){
var vec__33555 = chunk__33534.cljs$core$IIndexed$_nth$arity$2(null,i__33536);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34355 = seq__33531;
var G__34356 = chunk__33534;
var G__34357 = count__33535;
var G__34358 = (i__33536 + (1));
seq__33531 = G__34355;
chunk__33534 = G__34356;
count__33535 = G__34357;
i__33536 = G__34358;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33531);
if(temp__5753__auto__){
var seq__33531__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33531__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33531__$1);
var G__34359 = cljs.core.chunk_rest(seq__33531__$1);
var G__34360 = c__4679__auto__;
var G__34361 = cljs.core.count(c__4679__auto__);
var G__34362 = (0);
seq__33531 = G__34359;
chunk__33534 = G__34360;
count__33535 = G__34361;
i__33536 = G__34362;
continue;
} else {
var vec__33560 = cljs.core.first(seq__33531__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33560,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33560,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34363 = cljs.core.next(seq__33531__$1);
var G__34364 = null;
var G__34365 = (0);
var G__34366 = (0);
seq__33531 = G__34363;
chunk__33534 = G__34364;
count__33535 = G__34365;
i__33536 = G__34366;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33567 = cljs.core.seq(styles);
var chunk__33568 = null;
var count__33569 = (0);
var i__33570 = (0);
while(true){
if((i__33570 < count__33569)){
var vec__33583 = chunk__33568.cljs$core$IIndexed$_nth$arity$2(null,i__33570);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33583,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34367 = seq__33567;
var G__34368 = chunk__33568;
var G__34369 = count__33569;
var G__34370 = (i__33570 + (1));
seq__33567 = G__34367;
chunk__33568 = G__34368;
count__33569 = G__34369;
i__33570 = G__34370;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33567);
if(temp__5753__auto__){
var seq__33567__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33567__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33567__$1);
var G__34371 = cljs.core.chunk_rest(seq__33567__$1);
var G__34372 = c__4679__auto__;
var G__34373 = cljs.core.count(c__4679__auto__);
var G__34374 = (0);
seq__33567 = G__34371;
chunk__33568 = G__34372;
count__33569 = G__34373;
i__33570 = G__34374;
continue;
} else {
var vec__33587 = cljs.core.first(seq__33567__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33587,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34375 = cljs.core.next(seq__33567__$1);
var G__34376 = null;
var G__34377 = (0);
var G__34378 = (0);
seq__33567 = G__34375;
chunk__33568 = G__34376;
count__33569 = G__34377;
i__33570 = G__34378;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33593_34379 = key;
var G__33593_34380__$1 = (((G__33593_34379 instanceof cljs.core.Keyword))?G__33593_34379.fqn:null);
switch (G__33593_34380__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34383 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34383,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34383,"aria-");
}
})())){
el.setAttribute(ks_34383,value);
} else {
(el[ks_34383] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33645){
var map__33646 = p__33645;
var map__33646__$1 = cljs.core.__destructure_map(map__33646);
var props = map__33646__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33648 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33654 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33654,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33654;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33662 = arguments.length;
switch (G__33662) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33678){
var vec__33679 = p__33678;
var seq__33680 = cljs.core.seq(vec__33679);
var first__33681 = cljs.core.first(seq__33680);
var seq__33680__$1 = cljs.core.next(seq__33680);
var nn = first__33681;
var first__33681__$1 = cljs.core.first(seq__33680__$1);
var seq__33680__$2 = cljs.core.next(seq__33680__$1);
var np = first__33681__$1;
var nc = seq__33680__$2;
var node = vec__33679;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33687 = nn;
var G__33688 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33687,G__33688) : create_fn.call(null,G__33687,G__33688));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33690 = nn;
var G__33691 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33690,G__33691) : create_fn.call(null,G__33690,G__33691));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33695 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695,(1),null);
var seq__33701_34408 = cljs.core.seq(node_children);
var chunk__33702_34410 = null;
var count__33703_34411 = (0);
var i__33704_34412 = (0);
while(true){
if((i__33704_34412 < count__33703_34411)){
var child_struct_34421 = chunk__33702_34410.cljs$core$IIndexed$_nth$arity$2(null,i__33704_34412);
var children_34422 = shadow.dom.dom_node(child_struct_34421);
if(cljs.core.seq_QMARK_(children_34422)){
var seq__33775_34423 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34422));
var chunk__33777_34424 = null;
var count__33778_34425 = (0);
var i__33779_34426 = (0);
while(true){
if((i__33779_34426 < count__33778_34425)){
var child_34427 = chunk__33777_34424.cljs$core$IIndexed$_nth$arity$2(null,i__33779_34426);
if(cljs.core.truth_(child_34427)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34427);


var G__34428 = seq__33775_34423;
var G__34429 = chunk__33777_34424;
var G__34430 = count__33778_34425;
var G__34431 = (i__33779_34426 + (1));
seq__33775_34423 = G__34428;
chunk__33777_34424 = G__34429;
count__33778_34425 = G__34430;
i__33779_34426 = G__34431;
continue;
} else {
var G__34432 = seq__33775_34423;
var G__34433 = chunk__33777_34424;
var G__34434 = count__33778_34425;
var G__34435 = (i__33779_34426 + (1));
seq__33775_34423 = G__34432;
chunk__33777_34424 = G__34433;
count__33778_34425 = G__34434;
i__33779_34426 = G__34435;
continue;
}
} else {
var temp__5753__auto___34436 = cljs.core.seq(seq__33775_34423);
if(temp__5753__auto___34436){
var seq__33775_34437__$1 = temp__5753__auto___34436;
if(cljs.core.chunked_seq_QMARK_(seq__33775_34437__$1)){
var c__4679__auto___34438 = cljs.core.chunk_first(seq__33775_34437__$1);
var G__34439 = cljs.core.chunk_rest(seq__33775_34437__$1);
var G__34440 = c__4679__auto___34438;
var G__34441 = cljs.core.count(c__4679__auto___34438);
var G__34442 = (0);
seq__33775_34423 = G__34439;
chunk__33777_34424 = G__34440;
count__33778_34425 = G__34441;
i__33779_34426 = G__34442;
continue;
} else {
var child_34443 = cljs.core.first(seq__33775_34437__$1);
if(cljs.core.truth_(child_34443)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34443);


var G__34450 = cljs.core.next(seq__33775_34437__$1);
var G__34451 = null;
var G__34452 = (0);
var G__34453 = (0);
seq__33775_34423 = G__34450;
chunk__33777_34424 = G__34451;
count__33778_34425 = G__34452;
i__33779_34426 = G__34453;
continue;
} else {
var G__34454 = cljs.core.next(seq__33775_34437__$1);
var G__34455 = null;
var G__34456 = (0);
var G__34457 = (0);
seq__33775_34423 = G__34454;
chunk__33777_34424 = G__34455;
count__33778_34425 = G__34456;
i__33779_34426 = G__34457;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34422);
}


var G__34458 = seq__33701_34408;
var G__34459 = chunk__33702_34410;
var G__34460 = count__33703_34411;
var G__34461 = (i__33704_34412 + (1));
seq__33701_34408 = G__34458;
chunk__33702_34410 = G__34459;
count__33703_34411 = G__34460;
i__33704_34412 = G__34461;
continue;
} else {
var temp__5753__auto___34462 = cljs.core.seq(seq__33701_34408);
if(temp__5753__auto___34462){
var seq__33701_34463__$1 = temp__5753__auto___34462;
if(cljs.core.chunked_seq_QMARK_(seq__33701_34463__$1)){
var c__4679__auto___34464 = cljs.core.chunk_first(seq__33701_34463__$1);
var G__34465 = cljs.core.chunk_rest(seq__33701_34463__$1);
var G__34466 = c__4679__auto___34464;
var G__34467 = cljs.core.count(c__4679__auto___34464);
var G__34468 = (0);
seq__33701_34408 = G__34465;
chunk__33702_34410 = G__34466;
count__33703_34411 = G__34467;
i__33704_34412 = G__34468;
continue;
} else {
var child_struct_34469 = cljs.core.first(seq__33701_34463__$1);
var children_34470 = shadow.dom.dom_node(child_struct_34469);
if(cljs.core.seq_QMARK_(children_34470)){
var seq__33805_34471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34470));
var chunk__33807_34472 = null;
var count__33808_34473 = (0);
var i__33809_34474 = (0);
while(true){
if((i__33809_34474 < count__33808_34473)){
var child_34475 = chunk__33807_34472.cljs$core$IIndexed$_nth$arity$2(null,i__33809_34474);
if(cljs.core.truth_(child_34475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34475);


var G__34476 = seq__33805_34471;
var G__34477 = chunk__33807_34472;
var G__34478 = count__33808_34473;
var G__34479 = (i__33809_34474 + (1));
seq__33805_34471 = G__34476;
chunk__33807_34472 = G__34477;
count__33808_34473 = G__34478;
i__33809_34474 = G__34479;
continue;
} else {
var G__34480 = seq__33805_34471;
var G__34481 = chunk__33807_34472;
var G__34482 = count__33808_34473;
var G__34483 = (i__33809_34474 + (1));
seq__33805_34471 = G__34480;
chunk__33807_34472 = G__34481;
count__33808_34473 = G__34482;
i__33809_34474 = G__34483;
continue;
}
} else {
var temp__5753__auto___34484__$1 = cljs.core.seq(seq__33805_34471);
if(temp__5753__auto___34484__$1){
var seq__33805_34485__$1 = temp__5753__auto___34484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33805_34485__$1)){
var c__4679__auto___34486 = cljs.core.chunk_first(seq__33805_34485__$1);
var G__34487 = cljs.core.chunk_rest(seq__33805_34485__$1);
var G__34488 = c__4679__auto___34486;
var G__34489 = cljs.core.count(c__4679__auto___34486);
var G__34490 = (0);
seq__33805_34471 = G__34487;
chunk__33807_34472 = G__34488;
count__33808_34473 = G__34489;
i__33809_34474 = G__34490;
continue;
} else {
var child_34492 = cljs.core.first(seq__33805_34485__$1);
if(cljs.core.truth_(child_34492)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34492);


var G__34493 = cljs.core.next(seq__33805_34485__$1);
var G__34494 = null;
var G__34495 = (0);
var G__34496 = (0);
seq__33805_34471 = G__34493;
chunk__33807_34472 = G__34494;
count__33808_34473 = G__34495;
i__33809_34474 = G__34496;
continue;
} else {
var G__34497 = cljs.core.next(seq__33805_34485__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__33805_34471 = G__34497;
chunk__33807_34472 = G__34498;
count__33808_34473 = G__34499;
i__33809_34474 = G__34500;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34470);
}


var G__34501 = cljs.core.next(seq__33701_34463__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__33701_34408 = G__34501;
chunk__33702_34410 = G__34502;
count__33703_34411 = G__34503;
i__33704_34412 = G__34504;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33844 = cljs.core.seq(node);
var chunk__33845 = null;
var count__33846 = (0);
var i__33847 = (0);
while(true){
if((i__33847 < count__33846)){
var n = chunk__33845.cljs$core$IIndexed$_nth$arity$2(null,i__33847);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34509 = seq__33844;
var G__34510 = chunk__33845;
var G__34511 = count__33846;
var G__34512 = (i__33847 + (1));
seq__33844 = G__34509;
chunk__33845 = G__34510;
count__33846 = G__34511;
i__33847 = G__34512;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33844);
if(temp__5753__auto__){
var seq__33844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33844__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33844__$1);
var G__34513 = cljs.core.chunk_rest(seq__33844__$1);
var G__34514 = c__4679__auto__;
var G__34515 = cljs.core.count(c__4679__auto__);
var G__34516 = (0);
seq__33844 = G__34513;
chunk__33845 = G__34514;
count__33846 = G__34515;
i__33847 = G__34516;
continue;
} else {
var n = cljs.core.first(seq__33844__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34517 = cljs.core.next(seq__33844__$1);
var G__34518 = null;
var G__34519 = (0);
var G__34520 = (0);
seq__33844 = G__34517;
chunk__33845 = G__34518;
count__33846 = G__34519;
i__33847 = G__34520;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33850 = arguments.length;
switch (G__33850) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33874 = arguments.length;
switch (G__33874) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33902 = arguments.length;
switch (G__33902) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34538 = arguments.length;
var i__4865__auto___34539 = (0);
while(true){
if((i__4865__auto___34539 < len__4864__auto___34538)){
args__4870__auto__.push((arguments[i__4865__auto___34539]));

var G__34540 = (i__4865__auto___34539 + (1));
i__4865__auto___34539 = G__34540;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33924_34542 = cljs.core.seq(nodes);
var chunk__33925_34543 = null;
var count__33926_34544 = (0);
var i__33927_34545 = (0);
while(true){
if((i__33927_34545 < count__33926_34544)){
var node_34546 = chunk__33925_34543.cljs$core$IIndexed$_nth$arity$2(null,i__33927_34545);
fragment.appendChild(shadow.dom._to_dom(node_34546));


var G__34547 = seq__33924_34542;
var G__34548 = chunk__33925_34543;
var G__34549 = count__33926_34544;
var G__34550 = (i__33927_34545 + (1));
seq__33924_34542 = G__34547;
chunk__33925_34543 = G__34548;
count__33926_34544 = G__34549;
i__33927_34545 = G__34550;
continue;
} else {
var temp__5753__auto___34551 = cljs.core.seq(seq__33924_34542);
if(temp__5753__auto___34551){
var seq__33924_34552__$1 = temp__5753__auto___34551;
if(cljs.core.chunked_seq_QMARK_(seq__33924_34552__$1)){
var c__4679__auto___34553 = cljs.core.chunk_first(seq__33924_34552__$1);
var G__34555 = cljs.core.chunk_rest(seq__33924_34552__$1);
var G__34556 = c__4679__auto___34553;
var G__34557 = cljs.core.count(c__4679__auto___34553);
var G__34558 = (0);
seq__33924_34542 = G__34555;
chunk__33925_34543 = G__34556;
count__33926_34544 = G__34557;
i__33927_34545 = G__34558;
continue;
} else {
var node_34559 = cljs.core.first(seq__33924_34552__$1);
fragment.appendChild(shadow.dom._to_dom(node_34559));


var G__34560 = cljs.core.next(seq__33924_34552__$1);
var G__34561 = null;
var G__34562 = (0);
var G__34563 = (0);
seq__33924_34542 = G__34560;
chunk__33925_34543 = G__34561;
count__33926_34544 = G__34562;
i__33927_34545 = G__34563;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33914));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33943_34573 = cljs.core.seq(scripts);
var chunk__33944_34574 = null;
var count__33945_34575 = (0);
var i__33946_34576 = (0);
while(true){
if((i__33946_34576 < count__33945_34575)){
var vec__33962_34577 = chunk__33944_34574.cljs$core$IIndexed$_nth$arity$2(null,i__33946_34576);
var script_tag_34578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33962_34577,(0),null);
var script_body_34579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33962_34577,(1),null);
eval(script_body_34579);


var G__34580 = seq__33943_34573;
var G__34581 = chunk__33944_34574;
var G__34582 = count__33945_34575;
var G__34583 = (i__33946_34576 + (1));
seq__33943_34573 = G__34580;
chunk__33944_34574 = G__34581;
count__33945_34575 = G__34582;
i__33946_34576 = G__34583;
continue;
} else {
var temp__5753__auto___34584 = cljs.core.seq(seq__33943_34573);
if(temp__5753__auto___34584){
var seq__33943_34585__$1 = temp__5753__auto___34584;
if(cljs.core.chunked_seq_QMARK_(seq__33943_34585__$1)){
var c__4679__auto___34586 = cljs.core.chunk_first(seq__33943_34585__$1);
var G__34587 = cljs.core.chunk_rest(seq__33943_34585__$1);
var G__34588 = c__4679__auto___34586;
var G__34589 = cljs.core.count(c__4679__auto___34586);
var G__34590 = (0);
seq__33943_34573 = G__34587;
chunk__33944_34574 = G__34588;
count__33945_34575 = G__34589;
i__33946_34576 = G__34590;
continue;
} else {
var vec__33967_34591 = cljs.core.first(seq__33943_34585__$1);
var script_tag_34592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33967_34591,(0),null);
var script_body_34593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33967_34591,(1),null);
eval(script_body_34593);


var G__34594 = cljs.core.next(seq__33943_34585__$1);
var G__34595 = null;
var G__34596 = (0);
var G__34597 = (0);
seq__33943_34573 = G__34594;
chunk__33944_34574 = G__34595;
count__33945_34575 = G__34596;
i__33946_34576 = G__34597;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33972){
var vec__33973 = p__33972;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33973,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33998 = arguments.length;
switch (G__33998) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34008 = cljs.core.seq(style_keys);
var chunk__34009 = null;
var count__34010 = (0);
var i__34011 = (0);
while(true){
if((i__34011 < count__34010)){
var it = chunk__34009.cljs$core$IIndexed$_nth$arity$2(null,i__34011);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34606 = seq__34008;
var G__34607 = chunk__34009;
var G__34608 = count__34010;
var G__34609 = (i__34011 + (1));
seq__34008 = G__34606;
chunk__34009 = G__34607;
count__34010 = G__34608;
i__34011 = G__34609;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34008);
if(temp__5753__auto__){
var seq__34008__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34008__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34008__$1);
var G__34610 = cljs.core.chunk_rest(seq__34008__$1);
var G__34611 = c__4679__auto__;
var G__34612 = cljs.core.count(c__4679__auto__);
var G__34613 = (0);
seq__34008 = G__34610;
chunk__34009 = G__34611;
count__34010 = G__34612;
i__34011 = G__34613;
continue;
} else {
var it = cljs.core.first(seq__34008__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34614 = cljs.core.next(seq__34008__$1);
var G__34615 = null;
var G__34616 = (0);
var G__34617 = (0);
seq__34008 = G__34614;
chunk__34009 = G__34615;
count__34010 = G__34616;
i__34011 = G__34617;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34014,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34021 = k34014;
var G__34021__$1 = (((G__34021 instanceof cljs.core.Keyword))?G__34021.fqn:null);
switch (G__34021__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34014,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34026){
var vec__34027 = p__34026;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34027,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34027,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34013){
var self__ = this;
var G__34013__$1 = this;
return (new cljs.core.RecordIter((0),G__34013__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34015,other34016){
var self__ = this;
var this34015__$1 = this;
return (((!((other34016 == null)))) && ((((this34015__$1.constructor === other34016.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34015__$1.x,other34016.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34015__$1.y,other34016.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34015__$1.__extmap,other34016.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34014){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34070 = k34014;
var G__34070__$1 = (((G__34070 instanceof cljs.core.Keyword))?G__34070.fqn:null);
switch (G__34070__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34014);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34013){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34071 = cljs.core.keyword_identical_QMARK_;
var expr__34072 = k__4511__auto__;
if(cljs.core.truth_((pred__34071.cljs$core$IFn$_invoke$arity$2 ? pred__34071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34072) : pred__34071.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34072)))){
return (new shadow.dom.Coordinate(G__34013,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34071.cljs$core$IFn$_invoke$arity$2 ? pred__34071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34072) : pred__34071.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34072)))){
return (new shadow.dom.Coordinate(self__.x,G__34013,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34013),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34013){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34013,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34017){
var extmap__4542__auto__ = (function (){var G__34077 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34017,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34017)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34077);
} else {
return G__34077;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34017),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34017),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34082,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34086 = k34082;
var G__34086__$1 = (((G__34086 instanceof cljs.core.Keyword))?G__34086.fqn:null);
switch (G__34086__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34082,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34087){
var vec__34088 = p__34087;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34081){
var self__ = this;
var G__34081__$1 = this;
return (new cljs.core.RecordIter((0),G__34081__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34083,other34084){
var self__ = this;
var this34083__$1 = this;
return (((!((other34084 == null)))) && ((((this34083__$1.constructor === other34084.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.w,other34084.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.h,other34084.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.__extmap,other34084.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34082){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34091 = k34082;
var G__34091__$1 = (((G__34091 instanceof cljs.core.Keyword))?G__34091.fqn:null);
switch (G__34091__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34082);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34081){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34095 = cljs.core.keyword_identical_QMARK_;
var expr__34096 = k__4511__auto__;
if(cljs.core.truth_((pred__34095.cljs$core$IFn$_invoke$arity$2 ? pred__34095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34096) : pred__34095.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34096)))){
return (new shadow.dom.Size(G__34081,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34095.cljs$core$IFn$_invoke$arity$2 ? pred__34095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34096) : pred__34095.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34096)))){
return (new shadow.dom.Size(self__.w,G__34081,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34081),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34081){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34081,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34085){
var extmap__4542__auto__ = (function (){var G__34106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34085,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34085)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34106);
} else {
return G__34106;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34085),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34085),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34665 = (i + (1));
var G__34666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34665;
ret = G__34666;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34119){
var vec__34120 = p__34119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34124 = arguments.length;
switch (G__34124) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34671 = ps;
var G__34672 = (i + (1));
el__$1 = G__34671;
i = G__34672;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34145 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34145,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34145,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34145,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34154_34677 = cljs.core.seq(props);
var chunk__34155_34678 = null;
var count__34156_34679 = (0);
var i__34157_34680 = (0);
while(true){
if((i__34157_34680 < count__34156_34679)){
var vec__34181_34681 = chunk__34155_34678.cljs$core$IIndexed$_nth$arity$2(null,i__34157_34680);
var k_34682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34681,(0),null);
var v_34683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34181_34681,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34682);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34682),v_34683);


var G__34685 = seq__34154_34677;
var G__34686 = chunk__34155_34678;
var G__34687 = count__34156_34679;
var G__34688 = (i__34157_34680 + (1));
seq__34154_34677 = G__34685;
chunk__34155_34678 = G__34686;
count__34156_34679 = G__34687;
i__34157_34680 = G__34688;
continue;
} else {
var temp__5753__auto___34689 = cljs.core.seq(seq__34154_34677);
if(temp__5753__auto___34689){
var seq__34154_34690__$1 = temp__5753__auto___34689;
if(cljs.core.chunked_seq_QMARK_(seq__34154_34690__$1)){
var c__4679__auto___34691 = cljs.core.chunk_first(seq__34154_34690__$1);
var G__34692 = cljs.core.chunk_rest(seq__34154_34690__$1);
var G__34693 = c__4679__auto___34691;
var G__34694 = cljs.core.count(c__4679__auto___34691);
var G__34695 = (0);
seq__34154_34677 = G__34692;
chunk__34155_34678 = G__34693;
count__34156_34679 = G__34694;
i__34157_34680 = G__34695;
continue;
} else {
var vec__34186_34696 = cljs.core.first(seq__34154_34690__$1);
var k_34697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186_34696,(0),null);
var v_34698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34186_34696,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34697);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34697),v_34698);


var G__34699 = cljs.core.next(seq__34154_34690__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34154_34677 = G__34699;
chunk__34155_34678 = G__34700;
count__34156_34679 = G__34701;
i__34157_34680 = G__34702;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34190 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34190,(1),null);
var seq__34193_34703 = cljs.core.seq(node_children);
var chunk__34195_34704 = null;
var count__34196_34705 = (0);
var i__34197_34706 = (0);
while(true){
if((i__34197_34706 < count__34196_34705)){
var child_struct_34707 = chunk__34195_34704.cljs$core$IIndexed$_nth$arity$2(null,i__34197_34706);
if((!((child_struct_34707 == null)))){
if(typeof child_struct_34707 === 'string'){
var text_34708 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34708),child_struct_34707].join(''));
} else {
var children_34709 = shadow.dom.svg_node(child_struct_34707);
if(cljs.core.seq_QMARK_(children_34709)){
var seq__34213_34710 = cljs.core.seq(children_34709);
var chunk__34215_34711 = null;
var count__34216_34712 = (0);
var i__34217_34713 = (0);
while(true){
if((i__34217_34713 < count__34216_34712)){
var child_34714 = chunk__34215_34711.cljs$core$IIndexed$_nth$arity$2(null,i__34217_34713);
if(cljs.core.truth_(child_34714)){
node.appendChild(child_34714);


var G__34715 = seq__34213_34710;
var G__34716 = chunk__34215_34711;
var G__34717 = count__34216_34712;
var G__34718 = (i__34217_34713 + (1));
seq__34213_34710 = G__34715;
chunk__34215_34711 = G__34716;
count__34216_34712 = G__34717;
i__34217_34713 = G__34718;
continue;
} else {
var G__34719 = seq__34213_34710;
var G__34720 = chunk__34215_34711;
var G__34721 = count__34216_34712;
var G__34722 = (i__34217_34713 + (1));
seq__34213_34710 = G__34719;
chunk__34215_34711 = G__34720;
count__34216_34712 = G__34721;
i__34217_34713 = G__34722;
continue;
}
} else {
var temp__5753__auto___34723 = cljs.core.seq(seq__34213_34710);
if(temp__5753__auto___34723){
var seq__34213_34724__$1 = temp__5753__auto___34723;
if(cljs.core.chunked_seq_QMARK_(seq__34213_34724__$1)){
var c__4679__auto___34725 = cljs.core.chunk_first(seq__34213_34724__$1);
var G__34726 = cljs.core.chunk_rest(seq__34213_34724__$1);
var G__34727 = c__4679__auto___34725;
var G__34728 = cljs.core.count(c__4679__auto___34725);
var G__34729 = (0);
seq__34213_34710 = G__34726;
chunk__34215_34711 = G__34727;
count__34216_34712 = G__34728;
i__34217_34713 = G__34729;
continue;
} else {
var child_34730 = cljs.core.first(seq__34213_34724__$1);
if(cljs.core.truth_(child_34730)){
node.appendChild(child_34730);


var G__34731 = cljs.core.next(seq__34213_34724__$1);
var G__34732 = null;
var G__34733 = (0);
var G__34734 = (0);
seq__34213_34710 = G__34731;
chunk__34215_34711 = G__34732;
count__34216_34712 = G__34733;
i__34217_34713 = G__34734;
continue;
} else {
var G__34735 = cljs.core.next(seq__34213_34724__$1);
var G__34736 = null;
var G__34737 = (0);
var G__34738 = (0);
seq__34213_34710 = G__34735;
chunk__34215_34711 = G__34736;
count__34216_34712 = G__34737;
i__34217_34713 = G__34738;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34709);
}
}


var G__34739 = seq__34193_34703;
var G__34740 = chunk__34195_34704;
var G__34741 = count__34196_34705;
var G__34742 = (i__34197_34706 + (1));
seq__34193_34703 = G__34739;
chunk__34195_34704 = G__34740;
count__34196_34705 = G__34741;
i__34197_34706 = G__34742;
continue;
} else {
var G__34743 = seq__34193_34703;
var G__34744 = chunk__34195_34704;
var G__34745 = count__34196_34705;
var G__34746 = (i__34197_34706 + (1));
seq__34193_34703 = G__34743;
chunk__34195_34704 = G__34744;
count__34196_34705 = G__34745;
i__34197_34706 = G__34746;
continue;
}
} else {
var temp__5753__auto___34747 = cljs.core.seq(seq__34193_34703);
if(temp__5753__auto___34747){
var seq__34193_34748__$1 = temp__5753__auto___34747;
if(cljs.core.chunked_seq_QMARK_(seq__34193_34748__$1)){
var c__4679__auto___34749 = cljs.core.chunk_first(seq__34193_34748__$1);
var G__34750 = cljs.core.chunk_rest(seq__34193_34748__$1);
var G__34751 = c__4679__auto___34749;
var G__34752 = cljs.core.count(c__4679__auto___34749);
var G__34753 = (0);
seq__34193_34703 = G__34750;
chunk__34195_34704 = G__34751;
count__34196_34705 = G__34752;
i__34197_34706 = G__34753;
continue;
} else {
var child_struct_34754 = cljs.core.first(seq__34193_34748__$1);
if((!((child_struct_34754 == null)))){
if(typeof child_struct_34754 === 'string'){
var text_34755 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34755),child_struct_34754].join(''));
} else {
var children_34756 = shadow.dom.svg_node(child_struct_34754);
if(cljs.core.seq_QMARK_(children_34756)){
var seq__34231_34757 = cljs.core.seq(children_34756);
var chunk__34233_34758 = null;
var count__34234_34759 = (0);
var i__34235_34760 = (0);
while(true){
if((i__34235_34760 < count__34234_34759)){
var child_34761 = chunk__34233_34758.cljs$core$IIndexed$_nth$arity$2(null,i__34235_34760);
if(cljs.core.truth_(child_34761)){
node.appendChild(child_34761);


var G__34762 = seq__34231_34757;
var G__34763 = chunk__34233_34758;
var G__34764 = count__34234_34759;
var G__34765 = (i__34235_34760 + (1));
seq__34231_34757 = G__34762;
chunk__34233_34758 = G__34763;
count__34234_34759 = G__34764;
i__34235_34760 = G__34765;
continue;
} else {
var G__34766 = seq__34231_34757;
var G__34767 = chunk__34233_34758;
var G__34768 = count__34234_34759;
var G__34769 = (i__34235_34760 + (1));
seq__34231_34757 = G__34766;
chunk__34233_34758 = G__34767;
count__34234_34759 = G__34768;
i__34235_34760 = G__34769;
continue;
}
} else {
var temp__5753__auto___34770__$1 = cljs.core.seq(seq__34231_34757);
if(temp__5753__auto___34770__$1){
var seq__34231_34771__$1 = temp__5753__auto___34770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34231_34771__$1)){
var c__4679__auto___34772 = cljs.core.chunk_first(seq__34231_34771__$1);
var G__34777 = cljs.core.chunk_rest(seq__34231_34771__$1);
var G__34778 = c__4679__auto___34772;
var G__34779 = cljs.core.count(c__4679__auto___34772);
var G__34780 = (0);
seq__34231_34757 = G__34777;
chunk__34233_34758 = G__34778;
count__34234_34759 = G__34779;
i__34235_34760 = G__34780;
continue;
} else {
var child_34781 = cljs.core.first(seq__34231_34771__$1);
if(cljs.core.truth_(child_34781)){
node.appendChild(child_34781);


var G__34782 = cljs.core.next(seq__34231_34771__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34231_34757 = G__34782;
chunk__34233_34758 = G__34783;
count__34234_34759 = G__34784;
i__34235_34760 = G__34785;
continue;
} else {
var G__34786 = cljs.core.next(seq__34231_34771__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34231_34757 = G__34786;
chunk__34233_34758 = G__34787;
count__34234_34759 = G__34788;
i__34235_34760 = G__34789;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34756);
}
}


var G__34791 = cljs.core.next(seq__34193_34748__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__34193_34703 = G__34791;
chunk__34195_34704 = G__34792;
count__34196_34705 = G__34793;
i__34197_34706 = G__34794;
continue;
} else {
var G__34796 = cljs.core.next(seq__34193_34748__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34193_34703 = G__34796;
chunk__34195_34704 = G__34797;
count__34196_34705 = G__34798;
i__34197_34706 = G__34799;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34800 = arguments.length;
var i__4865__auto___34801 = (0);
while(true){
if((i__4865__auto___34801 < len__4864__auto___34800)){
args__4870__auto__.push((arguments[i__4865__auto___34801]));

var G__34802 = (i__4865__auto___34801 + (1));
i__4865__auto___34801 = G__34802;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34238){
var G__34239 = cljs.core.first(seq34238);
var seq34238__$1 = cljs.core.next(seq34238);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34239,seq34238__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34243 = arguments.length;
switch (G__34243) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__30192__auto___34809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(2),once_or_cleanup);
} else {
if((state_val_34260 === (2))){
var inst_34256 = (state_34259[(2)]);
var inst_34257 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34259__$1 = (function (){var statearr_34261 = state_34259;
(statearr_34261[(7)] = inst_34256);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34257);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29834__auto__ = null;
var shadow$dom$state_machine__29834__auto____0 = (function (){
var statearr_34262 = [null,null,null,null,null,null,null,null];
(statearr_34262[(0)] = shadow$dom$state_machine__29834__auto__);

(statearr_34262[(1)] = (1));

return statearr_34262;
});
var shadow$dom$state_machine__29834__auto____1 = (function (state_34259){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e34263){var ex__29837__auto__ = e34263;
var statearr_34264_34810 = state_34259;
(statearr_34264_34810[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_34259[(4)]))){
var statearr_34265_34811 = state_34259;
(statearr_34265_34811[(1)] = cljs.core.first((state_34259[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34812 = state_34259;
state_34259 = G__34812;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
shadow$dom$state_machine__29834__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29834__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29834__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29834__auto____0;
shadow$dom$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29834__auto____1;
return shadow$dom$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_34266 = f__30193__auto__();
(statearr_34266[(6)] = c__30192__auto___34809);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
