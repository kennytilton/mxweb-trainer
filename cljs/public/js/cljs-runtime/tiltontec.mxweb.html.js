goog.provide('tiltontec.mxweb.html');
tiltontec.mxweb.html._STAR_mxweb_trace_STAR_ = false;
tiltontec.mxweb.html.tagfo = (function tiltontec$mxweb$html$tagfo(me){
if(typeof me === 'string'){
return "string";
} else {
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
}
});
tiltontec.mxweb.html.dom_has_class = (function tiltontec$mxweb$html$dom_has_class(dom,class$){
return goog.dom.classlist.contains(dom,class$);
});
tiltontec.mxweb.html.dom_ancestor_by_class = (function tiltontec$mxweb$html$dom_ancestor_by_class(dom,class$){
return goog.dom.getAncestorByTagNameAndClass(dom,null,class$);
});
tiltontec.mxweb.html.dom_ancestor_by_tag = (function tiltontec$mxweb$html$dom_ancestor_by_tag(dom,tag){
return goog.dom.getAncestorByTagNameAndClass(dom,tag);
});
tiltontec.mxweb.html.map_less_nils = (function tiltontec$mxweb$html$map_less_nils(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4652__auto__ = (function tiltontec$mxweb$html$map_less_nils_$_iter__35039(s__35040){
return (new cljs.core.LazySeq(null,(function (){
var s__35040__$1 = s__35040;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35040__$1);
if(temp__5753__auto__){
var s__35040__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35040__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35040__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35042 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35041 = (0);
while(true){
if((i__35041 < size__4651__auto__)){
var vec__35043 = cljs.core._nth(c__4650__auto__,i__35041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043,(1),null);
if((v == null)){
cljs.core.chunk_append(b__35042,k);

var G__35194 = (i__35041 + (1));
i__35041 = G__35194;
continue;
} else {
var G__35195 = (i__35041 + (1));
i__35041 = G__35195;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35042),tiltontec$mxweb$html$map_less_nils_$_iter__35039(cljs.core.chunk_rest(s__35040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35042),null);
}
} else {
var vec__35053 = cljs.core.first(s__35040__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$mxweb$html$map_less_nils_$_iter__35039(cljs.core.rest(s__35040__$2)));
} else {
var G__35196 = cljs.core.rest(s__35040__$2);
s__35040__$1 = G__35196;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(m);
})());
});
tiltontec.mxweb.html.tag_dom = (function tiltontec$mxweb$html$tag_dom(me){
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
return null;
}
}
});
tiltontec.mxweb.html.tag_attrs = (function tiltontec$mxweb$html$tag_attrs(mx){
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4652__auto__ = (function tiltontec$mxweb$html$tag_attrs_$_iter__35063(s__35064){
return (new cljs.core.LazySeq(null,(function (){
var s__35064__$1 = s__35064;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35064__$1);
if(temp__5753__auto__){
var s__35064__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35064__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35064__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35066 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35065 = (0);
while(true){
if((i__35065 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__35065);
cljs.core.chunk_append(b__35066,(function (){var temp__5753__auto____$1 = tiltontec.model.core.mget(mx,k);
if(cljs.core.truth_(temp__5753__auto____$1)){
var v = temp__5753__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),(function (){var G__35068 = k;
var G__35068__$1 = (((G__35068 instanceof cljs.core.Keyword))?G__35068.fqn:null);
switch (G__35068__$1) {
case "style":
return tiltontec.mxweb.style.style_string(v);

break;
case "class":
if(cljs.core.coll_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",v);
} else {
return v;
}

break;
default:
return v;

}
})()], null);
} else {
return null;
}
})());

var G__35202 = (i__35065 + (1));
i__35065 = G__35202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35066),tiltontec$mxweb$html$tag_attrs_$_iter__35063(cljs.core.chunk_rest(s__35064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35066),null);
}
} else {
var k = cljs.core.first(s__35064__$2);
return cljs.core.cons((function (){var temp__5753__auto____$1 = tiltontec.model.core.mget(mx,k);
if(cljs.core.truth_(temp__5753__auto____$1)){
var v = temp__5753__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),(function (){var G__35078 = k;
var G__35078__$1 = (((G__35078 instanceof cljs.core.Keyword))?G__35078.fqn:null);
switch (G__35078__$1) {
case "style":
return tiltontec.mxweb.style.style_string(v);

break;
case "class":
if(cljs.core.coll_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",v);
} else {
return v;
}

break;
default:
return v;

}
})()], null);
} else {
return null;
}
})(),tiltontec$mxweb$html$tag_attrs_$_iter__35063(cljs.core.rest(s__35064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mx)));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,beef));
});
tiltontec.mxweb.html.tag_dom_create = (function tiltontec$mxweb$html$tag_dom_create(var_args){
var G__35084 = arguments.length;
switch (G__35084) {
case 1:
return tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1 = (function (me){
return tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(me,false);
}));

(tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
return goog.dom.safeHtmlToNode(goog.html.sanitizer.HtmlSanitizer.sanitize(me));
} else {
if(cljs.core.coll_QMARK_(me)){
var frag = document.createDocumentFragment();
var seq__35091_35226 = cljs.core.seq(me);
var chunk__35092_35227 = null;
var count__35093_35228 = (0);
var i__35094_35229 = (0);
while(true){
if((i__35094_35229 < count__35093_35228)){
var tag_35230 = chunk__35092_35227.cljs$core$IIndexed$_nth$arity$2(null,i__35094_35229);
if(cljs.core.truth_(tag_35230)){
goog.dom.appendChild(frag,tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_35230));
} else {
}


var G__35231 = seq__35091_35226;
var G__35232 = chunk__35092_35227;
var G__35233 = count__35093_35228;
var G__35234 = (i__35094_35229 + (1));
seq__35091_35226 = G__35231;
chunk__35092_35227 = G__35232;
count__35093_35228 = G__35233;
i__35094_35229 = G__35234;
continue;
} else {
var temp__5753__auto___35235 = cljs.core.seq(seq__35091_35226);
if(temp__5753__auto___35235){
var seq__35091_35236__$1 = temp__5753__auto___35235;
if(cljs.core.chunked_seq_QMARK_(seq__35091_35236__$1)){
var c__4679__auto___35237 = cljs.core.chunk_first(seq__35091_35236__$1);
var G__35238 = cljs.core.chunk_rest(seq__35091_35236__$1);
var G__35239 = c__4679__auto___35237;
var G__35240 = cljs.core.count(c__4679__auto___35237);
var G__35241 = (0);
seq__35091_35226 = G__35238;
chunk__35092_35227 = G__35239;
count__35093_35228 = G__35240;
i__35094_35229 = G__35241;
continue;
} else {
var tag_35242 = cljs.core.first(seq__35091_35236__$1);
if(cljs.core.truth_(tag_35242)){
goog.dom.appendChild(frag,tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_35242));
} else {
}


var G__35243 = cljs.core.next(seq__35091_35236__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__35091_35226 = G__35243;
chunk__35092_35227 = G__35244;
count__35093_35228 = G__35245;
i__35094_35229 = G__35246;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"tag","tag",-1290361223)),tiltontec.mxweb.html.tag_attrs(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35081_SHARP_){
return tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__35081_SHARP_,dbg);
}),tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"kids","kids",1156670771))),(function (){var temp__5753__auto__ = tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),null], null), null),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
dom.setAttribute("list",tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"list","list",765357683)));
} else {
}

return dom;

}
}
}));

(tiltontec.mxweb.html.tag_dom_create.cljs$lang$maxFixedArity = 2);

tiltontec.mxweb.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tiltontec.mxweb.html","type","tiltontec.mxweb.html/type",-1911783164),"type"], null);
tiltontec.mxweb.html.true_html = (function tiltontec$mxweb$html$true_html(keyword){
var or__4253__auto__ = (keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(tiltontec.mxweb.html._PLUS_true_html_PLUS_) : keyword.call(null,tiltontec.mxweb.html._PLUS_true_html_PLUS_));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(keyword);
}
});
tiltontec.mxweb.html.tag = (function tiltontec$mxweb$html$tag(me){
return tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
tiltontec.mxweb.html.tag_QMARK_ = (function tiltontec$mxweb$html$tag_QMARK_(me){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.type_cljc(me),new cljs.core.Keyword("mxweb.base","tag","mxweb.base/tag",423821799));
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("mxweb.base","tag","mxweb.base/tag",423821799)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var pdom = tiltontec.mxweb.html.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__35116_35247 = cljs.core.seq(newv);
var chunk__35117_35248 = null;
var count__35118_35249 = (0);
var i__35119_35250 = (0);
while(true){
if((i__35119_35250 < count__35118_35249)){
var newk_35260 = chunk__35117_35248.cljs$core$IIndexed$_nth$arity$2(null,i__35119_35250);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.mxweb.html.tag_dom(newk_35260)));


var G__35263 = seq__35116_35247;
var G__35264 = chunk__35117_35248;
var G__35265 = count__35118_35249;
var G__35266 = (i__35119_35250 + (1));
seq__35116_35247 = G__35263;
chunk__35117_35248 = G__35264;
count__35118_35249 = G__35265;
i__35119_35250 = G__35266;
continue;
} else {
var temp__5753__auto___35277 = cljs.core.seq(seq__35116_35247);
if(temp__5753__auto___35277){
var seq__35116_35278__$1 = temp__5753__auto___35277;
if(cljs.core.chunked_seq_QMARK_(seq__35116_35278__$1)){
var c__4679__auto___35279 = cljs.core.chunk_first(seq__35116_35278__$1);
var G__35280 = cljs.core.chunk_rest(seq__35116_35278__$1);
var G__35281 = c__4679__auto___35279;
var G__35282 = cljs.core.count(c__4679__auto___35279);
var G__35283 = (0);
seq__35116_35247 = G__35280;
chunk__35117_35248 = G__35281;
count__35118_35249 = G__35282;
i__35119_35250 = G__35283;
continue;
} else {
var newk_35284 = cljs.core.first(seq__35116_35278__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.mxweb.html.tag_dom(newk_35284)));


var G__35285 = cljs.core.next(seq__35116_35278__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__35116_35247 = G__35285;
chunk__35117_35248 = G__35286;
count__35118_35249 = G__35287;
i__35119_35250 = G__35288;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);
} else {
if(cljs.core.empty_QMARK_(gained)){
var seq__35121 = cljs.core.seq(lost);
var chunk__35122 = null;
var count__35123 = (0);
var i__35124 = (0);
while(true){
if((i__35124 < count__35123)){
var oldk = chunk__35122.cljs$core$IIndexed$_nth$arity$2(null,i__35124);
pdom.removeChild(tiltontec.mxweb.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk);
}


var G__35293 = seq__35121;
var G__35294 = chunk__35122;
var G__35295 = count__35123;
var G__35296 = (i__35124 + (1));
seq__35121 = G__35293;
chunk__35122 = G__35294;
count__35123 = G__35295;
i__35124 = G__35296;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35121);
if(temp__5753__auto__){
var seq__35121__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35121__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35121__$1);
var G__35305 = cljs.core.chunk_rest(seq__35121__$1);
var G__35306 = c__4679__auto__;
var G__35307 = cljs.core.count(c__4679__auto__);
var G__35308 = (0);
seq__35121 = G__35305;
chunk__35122 = G__35306;
count__35123 = G__35307;
i__35124 = G__35308;
continue;
} else {
var oldk = cljs.core.first(seq__35121__$1);
pdom.removeChild(tiltontec.mxweb.html.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk);
}


var G__35310 = cljs.core.next(seq__35121__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__35121 = G__35310;
chunk__35122 = G__35311;
count__35123 = G__35312;
i__35124 = G__35313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
var seq__35133_35317 = cljs.core.seq(lost);
var chunk__35135_35318 = null;
var count__35136_35319 = (0);
var i__35137_35320 = (0);
while(true){
if((i__35137_35320 < count__35136_35319)){
var oldk_35322 = chunk__35135_35318.cljs$core$IIndexed$_nth$arity$2(null,i__35137_35320);
if(typeof oldk_35322 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_35322);
}


var G__35334 = seq__35133_35317;
var G__35335 = chunk__35135_35318;
var G__35336 = count__35136_35319;
var G__35337 = (i__35137_35320 + (1));
seq__35133_35317 = G__35334;
chunk__35135_35318 = G__35335;
count__35136_35319 = G__35336;
i__35137_35320 = G__35337;
continue;
} else {
var temp__5753__auto___35343 = cljs.core.seq(seq__35133_35317);
if(temp__5753__auto___35343){
var seq__35133_35348__$1 = temp__5753__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__35133_35348__$1)){
var c__4679__auto___35349 = cljs.core.chunk_first(seq__35133_35348__$1);
var G__35350 = cljs.core.chunk_rest(seq__35133_35348__$1);
var G__35351 = c__4679__auto___35349;
var G__35352 = cljs.core.count(c__4679__auto___35349);
var G__35353 = (0);
seq__35133_35317 = G__35350;
chunk__35135_35318 = G__35351;
count__35136_35319 = G__35352;
i__35137_35320 = G__35353;
continue;
} else {
var oldk_35354 = cljs.core.first(seq__35133_35348__$1);
if(typeof oldk_35354 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_35354);
}


var G__35356 = cljs.core.next(seq__35133_35348__$1);
var G__35357 = null;
var G__35358 = (0);
var G__35359 = (0);
seq__35133_35317 = G__35356;
chunk__35135_35318 = G__35357;
count__35136_35319 = G__35358;
i__35137_35320 = G__35359;
continue;
}
} else {
}
}
break;
}

var seq__35143_35360 = cljs.core.seq(newv);
var chunk__35144_35361 = null;
var count__35145_35362 = (0);
var i__35146_35363 = (0);
while(true){
if((i__35146_35363 < count__35145_35362)){
var newk_35364 = chunk__35144_35361.cljs$core$IIndexed$_nth$arity$2(null,i__35146_35363);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35364]),oldv))?pdom.removeChild(tiltontec.mxweb.html.tag_dom(newk_35364)):tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_35364)));


var G__35365 = seq__35143_35360;
var G__35366 = chunk__35144_35361;
var G__35367 = count__35145_35362;
var G__35368 = (i__35146_35363 + (1));
seq__35143_35360 = G__35365;
chunk__35144_35361 = G__35366;
count__35145_35362 = G__35367;
i__35146_35363 = G__35368;
continue;
} else {
var temp__5753__auto___35369 = cljs.core.seq(seq__35143_35360);
if(temp__5753__auto___35369){
var seq__35143_35370__$1 = temp__5753__auto___35369;
if(cljs.core.chunked_seq_QMARK_(seq__35143_35370__$1)){
var c__4679__auto___35375 = cljs.core.chunk_first(seq__35143_35370__$1);
var G__35376 = cljs.core.chunk_rest(seq__35143_35370__$1);
var G__35377 = c__4679__auto___35375;
var G__35378 = cljs.core.count(c__4679__auto___35375);
var G__35379 = (0);
seq__35143_35360 = G__35376;
chunk__35144_35361 = G__35377;
count__35145_35362 = G__35378;
i__35146_35363 = G__35379;
continue;
} else {
var newk_35380 = cljs.core.first(seq__35143_35370__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35380]),oldv))?pdom.removeChild(tiltontec.mxweb.html.tag_dom(newk_35380)):tiltontec.mxweb.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_35380)));


var G__35383 = cljs.core.next(seq__35143_35370__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__35143_35360 = G__35383;
chunk__35144_35361 = G__35384;
count__35145_35362 = G__35385;
i__35146_35363 = G__35386;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
}
} else {
return null;
}
}));
tiltontec.mxweb.html._PLUS_inline_css_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mxweb.base","tag","mxweb.base/tag",423821799)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var temp__5753__auto__ = tiltontec.mxweb.html.tag_dom(me);
if(cljs.core.truth_(temp__5753__auto__)){
var dom = temp__5753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,new cljs.core.Keyword(null,"content","content",15833224))){
return window.requestAnimationFrame((function (){
return (dom.innerHTML = newv);
}));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var G__35164 = slot;
var G__35164__$1 = (((G__35164 instanceof cljs.core.Keyword))?G__35164.fqn:null);
switch (G__35164__$1) {
case "style":
return (dom.style = tiltontec.mxweb.style.style_string(newv));

break;
case "hidden":
return (dom.hidden = newv);

break;
case "disabled":
if(cljs.core.truth_(newv)){
return dom.setAttribute("disabled",true);
} else {
return dom.removeAttribute("disabled");
}

break;
case "class":
return goog.dom.classlist.set(dom,((cljs.core.sequential_QMARK_(newv))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",newv):newv));

break;
case "checked":
return (dom.checked = newv);

break;
default:
return dom.setAttribute(cljs.core.name(slot),newv);

}
} else {
if(cljs.core.truth_((tiltontec.mxweb.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.mxweb.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1(slot) : tiltontec.mxweb.html._PLUS_inline_css_PLUS_.call(null,slot)))){
throw (new Error(["tiltontec.mxweb obs sees oldskool style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')));
} else {
return null;
}
}
}
} else {
return null;
}
} else {
return null;
}
}));
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.mxweb.html.mxu_find_class = (function tiltontec$mxweb$html$mxu_find_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__35170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(class$),tiltontec.model.core.mget(p1__35170_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.mxweb.html.mxu_find_tag = (function tiltontec$mxweb$html$mxu_find_tag(where,tag){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__35179_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(tag),tiltontec.model.core.mget(p1__35179_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.mxweb.html.mxu_find_id = (function tiltontec$mxweb$html$mxu_find_id(where,id){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__35182_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__35182_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true], 0));
});
tiltontec.mxweb.html.io_upsert = (function tiltontec$mxweb$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.mxweb.html.io_read = (function tiltontec$mxweb$html$io_read(key){
return window.localStorage.getItem(key);
});
tiltontec.mxweb.html.io_delete = (function tiltontec$mxweb$html$io_delete(key){
return window.localStorage.removeItem(key);
});
tiltontec.mxweb.html.io_clear_storage = (function tiltontec$mxweb$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.mxweb.html.io_all_keys = (function tiltontec$mxweb$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.mxweb.html.io_find = (function tiltontec$mxweb$html$io_find(key_prefix){
var keys = tiltontec.mxweb.html.io_all_keys();
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(keys)){
var G__35401 = cljs.core.rest(keys);
var G__35402 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__35401;
found = G__35402;
continue;
} else {
return found;
}
break;
}
});
tiltontec.mxweb.html.io_truncate = (function tiltontec$mxweb$html$io_truncate(key_prefix){
var seq__35187 = cljs.core.seq(tiltontec.mxweb.html.io_find(key_prefix));
var chunk__35188 = null;
var count__35189 = (0);
var i__35190 = (0);
while(true){
if((i__35190 < count__35189)){
var key = chunk__35188.cljs$core$IIndexed$_nth$arity$2(null,i__35190);
tiltontec.mxweb.html.io_delete(key);


var G__35407 = seq__35187;
var G__35408 = chunk__35188;
var G__35409 = count__35189;
var G__35410 = (i__35190 + (1));
seq__35187 = G__35407;
chunk__35188 = G__35408;
count__35189 = G__35409;
i__35190 = G__35410;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35187);
if(temp__5753__auto__){
var seq__35187__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35187__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35187__$1);
var G__35419 = cljs.core.chunk_rest(seq__35187__$1);
var G__35420 = c__4679__auto__;
var G__35421 = cljs.core.count(c__4679__auto__);
var G__35422 = (0);
seq__35187 = G__35419;
chunk__35188 = G__35420;
count__35189 = G__35421;
i__35190 = G__35422;
continue;
} else {
var key = cljs.core.first(seq__35187__$1);
tiltontec.mxweb.html.io_delete(key);


var G__35423 = cljs.core.next(seq__35187__$1);
var G__35424 = null;
var G__35425 = (0);
var G__35426 = (0);
seq__35187 = G__35423;
chunk__35188 = G__35424;
count__35189 = G__35425;
i__35190 = G__35426;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.mxweb.html.input_editing_start = (function tiltontec$mxweb$html$input_editing_start(dom,initial_value){
goog.dom.forms.setValue(dom,initial_value);

goog.editor.focus.focusInputField(dom);

goog.dom.selection.setStart(dom,(0));

return goog.dom.selection.setEnd(dom,cljs.core.count(initial_value));
});

//# sourceMappingURL=tiltontec.mxweb.html.js.map
