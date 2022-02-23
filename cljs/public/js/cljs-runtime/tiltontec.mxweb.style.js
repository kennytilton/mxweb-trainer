goog.provide('tiltontec.mxweb.style');
tiltontec.mxweb.style.tag_dom = (function tiltontec$mxweb$style$tag_dom(me){
var id = tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__4253__auto__ = tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5751__auto__ = goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
if(cljs.core.truth_(temp__5751__auto__)){
var dom = temp__5751__auto__;
return tiltontec.model.core.backdoor_reset_BANG_(me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),dom);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style-no-element","style-no-element",25297282),id,new cljs.core.Keyword(null,"found","found",-584700170)], 0));
}
}
});
tiltontec.mxweb.style.make_css_inline = (function tiltontec$mxweb$style$make_css_inline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29906 = arguments.length;
var i__4865__auto___29907 = (0);
while(true){
if((i__4865__auto___29907 < len__4864__auto___29906)){
args__4870__auto__.push((arguments[i__4865__auto___29907]));

var G__29908 = (i__4865__auto___29907 + (1));
i__4865__auto___29907 = G__29908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return tiltontec.mxweb.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(tiltontec.mxweb.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic = (function (tag,stylings){
if(tiltontec.mxweb.base.tag_QMARK_(tag)){
} else {
throw (new Error("Assert failed: (tag? tag)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("mxweb.css","css","mxweb.css/css",1741435333),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"css-keys","css-keys",876048944),(function (){var iter__4652__auto__ = (function tiltontec$mxweb$style$iter__29843(s__29844){
return (new cljs.core.LazySeq(null,(function (){
var s__29844__$1 = s__29844;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29844__$1);
if(temp__5753__auto__){
var s__29844__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29844__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29844__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29846 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29845 = (0);
while(true){
if((i__29845 < size__4651__auto__)){
var vec__29853 = cljs.core._nth(c__4650__auto__,i__29845);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(1),null);
cljs.core.chunk_append(b__29846,k);

var G__29909 = (i__29845 + (1));
i__29845 = G__29909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29846),tiltontec$mxweb$style$iter__29843(cljs.core.chunk_rest(s__29844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29846),null);
}
} else {
var vec__29863 = cljs.core.first(s__29844__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(1),null);
return cljs.core.cons(k,tiltontec$mxweb$style$iter__29843(cljs.core.rest(s__29844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),stylings));
})(),stylings], 0));
}));

(tiltontec.mxweb.style.make_css_inline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.mxweb.style.make_css_inline.cljs$lang$applyTo = (function (seq29820){
var G__29821 = cljs.core.first(seq29820);
var seq29820__$1 = cljs.core.next(seq29820);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29821,seq29820__$1);
}));

tiltontec.mxweb.style.style_string = (function tiltontec$mxweb$style$style_string(s){
if(typeof s === 'string'){
return s;
} else {
if((s == null)){
return "";
} else {
if(cljs.core.map_QMARK_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",(function (){var iter__4652__auto__ = (function tiltontec$mxweb$style$style_string_$_iter__29872(s__29873){
return (new cljs.core.LazySeq(null,(function (){
var s__29873__$1 = s__29873;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29873__$1);
if(temp__5753__auto__){
var s__29873__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29873__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29873__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29875 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29874 = (0);
while(true){
if((i__29874 < size__4651__auto__)){
var vec__29876 = cljs.core._nth(c__4650__auto__,i__29874);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(1),null);
cljs.core.chunk_append(b__29875,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),v], 0)));

var G__29910 = (i__29874 + (1));
i__29874 = G__29910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29875),tiltontec$mxweb$style$style_string_$_iter__29872(cljs.core.chunk_rest(s__29873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29875),null);
}
} else {
var vec__29879 = cljs.core.first(s__29873__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(1),null);
return cljs.core.cons(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),v], 0)),tiltontec$mxweb$style$style_string_$_iter__29872(cljs.core.rest(s__29873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(s);
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mxweb.css","css","mxweb.css/css",1741435333),tiltontec.cell.base.ia_type(s))){
var G__29882 = cljs.core.select_keys(cljs.core.deref(s),new cljs.core.Keyword(null,"css-keys","css-keys",876048944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
return (tiltontec.mxweb.style.style_string.cljs$core$IFn$_invoke$arity$1 ? tiltontec.mxweb.style.style_string.cljs$core$IFn$_invoke$arity$1(G__29882) : tiltontec.mxweb.style.style_string.call(null,G__29882));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ss-unknown","ss-unknown",-2022604565),s,cljs.core.type(s)], 0));

return "";

}
}
}
}
});
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mxweb.css","css","mxweb.css/css",1741435333)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var dom = tiltontec.mxweb.style.tag_dom(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
return goog.style.setStyle(dom,cljs.core.name(slot),newv);
} else {
return null;
}
}));

//# sourceMappingURL=tiltontec.mxweb.style.js.map
