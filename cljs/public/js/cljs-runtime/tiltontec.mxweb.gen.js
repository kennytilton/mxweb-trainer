goog.provide('tiltontec.mxweb.gen');
tiltontec.mxweb.gen.tagfo = (function tiltontec$mxweb$gen$tagfo(me){
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
tiltontec.mxweb.gen._PLUS_tag_sid_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
tiltontec.mxweb.gen.mxweb_init_BANG_ = (function tiltontec$mxweb$gen$mxweb_init_BANG_(){
return cljs.core.reset_BANG_(tiltontec.mxweb.gen._PLUS_tag_sid_PLUS_,(-1));
});
tiltontec.mxweb.gen.tag_by_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tiltontec.mxweb.gen.dom_tag = (function tiltontec$mxweb$gen$dom_tag(dom){
if((dom == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"outthetop!!!","outthetop!!!",2015243775)], 0));

return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",dom.id)){
var G__29799 = dom.parentNode;
return (tiltontec.mxweb.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.mxweb.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__29799) : tiltontec.mxweb.gen.dom_tag.call(null,G__29799));
} else {
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tiltontec.mxweb.gen.tag_by_id),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["dom-tiltontec.mxweb did not find js for id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id)," of dom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join(''),"\n","tag"].join('')));
}

return tag;

}
}
});
tiltontec.mxweb.gen.make_tag = (function tiltontec$mxweb$gen$make_tag(tag,attrs,aux,cFkids){
var tag_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.mxweb.gen._PLUS_tag_sid_PLUS_,cljs.core.inc))].join('');
}
})());
var mx_tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("mxweb.base","tag","mxweb.base/tag",423821799),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),tag_id,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"kids","kids",1156670771),cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"id","id",-1388402092))))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.mxweb.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mxweb.base","tag","mxweb.base/tag",423821799)], null),(function (me){
var temp__5753__auto___29883 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5753__auto___29883)){
var style_29884 = temp__5753__auto___29883;
if(tiltontec.cell.base.md_ref_QMARK_(style_29884)){
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(style_29884);
} else {
}
} else {
}

var seq__29866_29885 = cljs.core.seq(new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__29867_29886 = null;
var count__29868_29887 = (0);
var i__29869_29888 = (0);
while(true){
if((i__29869_29888 < count__29868_29887)){
var k_29889 = chunk__29867_29886.cljs$core$IIndexed$_nth$arity$2(null,i__29869_29888);
if(tiltontec.cell.base.md_ref_QMARK_(k_29889)){
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_29889);
} else {
}


var G__29890 = seq__29866_29885;
var G__29891 = chunk__29867_29886;
var G__29892 = count__29868_29887;
var G__29893 = (i__29869_29888 + (1));
seq__29866_29885 = G__29890;
chunk__29867_29886 = G__29891;
count__29868_29887 = G__29892;
i__29869_29888 = G__29893;
continue;
} else {
var temp__5753__auto___29894 = cljs.core.seq(seq__29866_29885);
if(temp__5753__auto___29894){
var seq__29866_29895__$1 = temp__5753__auto___29894;
if(cljs.core.chunked_seq_QMARK_(seq__29866_29895__$1)){
var c__4679__auto___29896 = cljs.core.chunk_first(seq__29866_29895__$1);
var G__29897 = cljs.core.chunk_rest(seq__29866_29895__$1);
var G__29898 = c__4679__auto___29896;
var G__29899 = cljs.core.count(c__4679__auto___29896);
var G__29900 = (0);
seq__29866_29885 = G__29897;
chunk__29867_29886 = G__29898;
count__29868_29887 = G__29899;
i__29869_29888 = G__29900;
continue;
} else {
var k_29901 = cljs.core.first(seq__29866_29895__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_29901)){
tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_29901);
} else {
}


var G__29902 = cljs.core.next(seq__29866_29895__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29866_29885 = G__29902;
chunk__29867_29886 = G__29903;
count__29868_29887 = G__29904;
i__29869_29888 = G__29905;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.mxweb.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.mget(me,new cljs.core.Keyword(null,"id","id",-1388402092)));

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
tiltontec.mxweb.gen.evt_mx = (function tiltontec$mxweb$gen$evt_mx(e){
return tiltontec.mxweb.gen.dom_tag(e.target);
});
tiltontec.mxweb.gen.target_value = (function tiltontec$mxweb$gen$target_value(evt){
return goog.dom.forms.getValue(evt.target);
});

//# sourceMappingURL=tiltontec.mxweb.gen.js.map
