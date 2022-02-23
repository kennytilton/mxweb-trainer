goog.provide('taoensso.tufte');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
taoensso.tufte.valid_call_level_QMARK_ = (function taoensso$tufte$valid_call_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__34878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34878.cljs$core$IFn$_invoke$arity$1 ? fexpr__34878.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34878.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__34879 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34879.cljs$core$IFn$_invoke$arity$1 ? fexpr__34879.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34879.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_call_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_call_level = (function taoensso$tufte$valid_call_level(x){
var or__4253__auto__ = (function (){var fexpr__34882 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34882.cljs$core$IFn$_invoke$arity$1 ? fexpr__34882.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34882.call(null,x));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__4253__auto__ = (function (){var fexpr__34883 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34883.cljs$core$IFn$_invoke$arity$1 ? fexpr__34883.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34883.call(null,x));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
/**
 * Integer e/o #{0 1 2 3 4 5 6}, or vector mapping ns-patterns to min-levels:
 *  [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]]
 * 
 *   See `*ns-filter*` for example patterns.
 */
taoensso.tufte._STAR_min_level_STAR_ = (2);
/**
 * (fn may-profile-ns? [ns]) predicate, or ns-pattern.
 *   Example ns-patterns:
 *  #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *  {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.tufte._STAR_ns_filter_STAR_ = "*";
var fn_QMARK__35069 = cljs.core.fn_QMARK_;
var compile_35070 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__35071 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__34885 = compile_35070(x);
return (fexpr__34885.cljs$core$IFn$_invoke$arity$1 ? fexpr__34885.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__34885.call(null,ns));
}));
var conform_QMARK__35072 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__35069.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__35069.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__35069.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return conform_QMARK__STAR__35071(ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.tufte.may_profile_ns_QMARK_ = (function taoensso$tufte$may_profile_ns_QMARK_(var_args){
var G__34888 = arguments.length;
switch (G__34888) {
case 1:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ns){
if(cljs.core.truth_(conform_QMARK__35072(taoensso.tufte._STAR_ns_filter_STAR_,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__35072(ns_filter,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$lang$maxFixedArity = 2);


/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.tufte.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__34892){
var vec__34893 = p__34892;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__35071(ns_pattern,ns))){
return taoensso.tufte.valid_min_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_min_level_35087 = taoensso.tufte.valid_min_level;
var ns__GT__QMARK_min_level_35088 = taoensso.tufte.ns__GT__QMARK_min_level;
taoensso.tufte.get_min_level = (function taoensso$tufte$get_min_level(default$,x,ns){
var G__34900 = (function (){var or__4253__auto__ = ((cljs.core.vector_QMARK_(x))?ns__GT__QMARK_min_level_35088(x,ns):x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
})();
return (valid_min_level_35087.cljs$core$IFn$_invoke$arity$1 ? valid_min_level_35087.cljs$core$IFn$_invoke$arity$1(G__34900) : valid_min_level_35087.call(null,G__34900));
});
var valid_call_level_35099 = taoensso.tufte.valid_call_level;
var may_profile_ns_QMARK__35100 = taoensso.tufte.may_profile_ns_QMARK_;
var get_min_level_35101 = taoensso.tufte.get_min_level;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__34904 = arguments.length;
switch (G__34904) {
case 1:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_ns_STAR_);
}));

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if(((valid_call_level_35099.cljs$core$IFn$_invoke$arity$1 ? valid_call_level_35099.cljs$core$IFn$_invoke$arity$1(level) : valid_call_level_35099.call(null,level)) >= cljs.core.long$((get_min_level_35101.cljs$core$IFn$_invoke$arity$3 ? get_min_level_35101.cljs$core$IFn$_invoke$arity$3((6),taoensso.tufte._STAR_min_level_STAR_,ns) : get_min_level_35101.call(null,(6),taoensso.tufte._STAR_min_level_STAR_,ns))))){
if(cljs.core.truth_((may_profile_ns_QMARK__35100.cljs$core$IFn$_invoke$arity$2 ? may_profile_ns_QMARK__35100.cljs$core$IFn$_invoke$arity$2(taoensso.tufte._STAR_ns_filter_STAR_,ns) : may_profile_ns_QMARK__35100.call(null,taoensso.tufte._STAR_ns_filter_STAR_,ns)))){
return true;
} else {
return false;
}
} else {
return false;
}
}));

(taoensso.tufte.may_profile_QMARK_.cljs$lang$maxFixedArity = 2);


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
taoensso.tufte.HandlerVal = (function (ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,__meta,__extmap,__hash){
this.ns_str = ns_str;
this.level = level;
this._QMARK_id = _QMARK_id;
this._QMARK_data = _QMARK_data;
this.pstats = pstats;
this.pstats_str_ = pstats_str_;
this._QMARK_file = _QMARK_file;
this._QMARK_line = _QMARK_line;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34908,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34916 = k34908;
var G__34916__$1 = (((G__34916 instanceof cljs.core.Keyword))?G__34916.fqn:null);
switch (G__34916__$1) {
case "ns-str":
return self__.ns_str;

break;
case "level":
return self__.level;

break;
case "?id":
return self__._QMARK_id;

break;
case "?data":
return self__._QMARK_data;

break;
case "pstats":
return self__.pstats;

break;
case "pstats-str_":
return self__.pstats_str_;

break;
case "?file":
return self__._QMARK_file;

break;
case "?line":
return self__._QMARK_line;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34908,else__4505__auto__);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34921){
var vec__34922 = p__34921;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34907){
var self__ = this;
var G__34907__$1 = this;
return (new cljs.core.RecordIter((0),G__34907__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34909,other34910){
var self__ = this;
var this34909__$1 = this;
return (((!((other34910 == null)))) && ((((this34909__$1.constructor === other34910.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1.ns_str,other34910.ns_str)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1.level,other34910.level)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1._QMARK_id,other34910._QMARK_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1._QMARK_data,other34910._QMARK_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1.pstats,other34910.pstats)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1.pstats_str_,other34910.pstats_str_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1._QMARK_file,other34910._QMARK_file)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1._QMARK_line,other34910._QMARK_line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34909__$1.__extmap,other34910.__extmap)))))))))))))))))))));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"?file","?file",1533429675),null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"?line","?line",-631853385),null,new cljs.core.Keyword(null,"pstats","pstats",276614232),null,new cljs.core.Keyword(null,"?id","?id",-712098248),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34908){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34925 = k34908;
var G__34925__$1 = (((G__34925 instanceof cljs.core.Keyword))?G__34925.fqn:null);
switch (G__34925__$1) {
case "ns-str":
case "level":
case "?id":
case "?data":
case "pstats":
case "pstats-str_":
case "?file":
case "?line":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34908);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34907){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34929 = cljs.core.keyword_identical_QMARK_;
var expr__34930 = k__4511__auto__;
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__34930)))){
return (new taoensso.tufte.HandlerVal(G__34907,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__34907,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?id","?id",-712098248),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"?id","?id",-712098248),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__34907,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?data","?data",-9471433),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__34907,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__34907,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,G__34907,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?file","?file",1533429675),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"?file","?file",1533429675),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,G__34907,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34929.cljs$core$IFn$_invoke$arity$2 ? pred__34929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?line","?line",-631853385),expr__34930) : pred__34929.call(null,new cljs.core.Keyword(null,"?line","?line",-631853385),expr__34930)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,G__34907,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34907),null));
}
}
}
}
}
}
}
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"level","level",1290497552),self__.level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line,null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34907){
var self__ = this;
var this__4501__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,G__34907,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),new cljs.core.Symbol(null,"pstats","pstats",1917145759,null),new cljs.core.Symbol(null,"pstats-str_","pstats-str_",-735205348,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Symbol(null,"?line","?line",1008678142,null)], null);
}));

(taoensso.tufte.HandlerVal.cljs$lang$type = true);

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"taoensso.tufte/HandlerVal",null,(1),null));
}));

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"taoensso.tufte/HandlerVal");
}));

/**
 * Positional factory function for taoensso.tufte/HandlerVal.
 */
taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

/**
 * Factory function for taoensso.tufte/HandlerVal, taking a map of keywords to field values.
 */
taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__34914){
var extmap__4542__auto__ = (function (){var G__34934 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34914,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], 0));
if(cljs.core.record_QMARK_(G__34914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34934);
} else {
return G__34934;
}
})();
return (new taoensso.tufte.HandlerVal(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"?id","?id",-712098248).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"pstats","pstats",276614232).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"?file","?file",1533429675).cljs$core$IFn$_invoke$arity$1(G__34914),new cljs.core.Keyword(null,"?line","?line",-631853385).cljs$core$IFn$_invoke$arity$1(G__34914),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Use this to register interest in stats output produced by `profile` calls.
 *   Each registered `handler-fn` will be called as:
 * 
 *  (handler-fn {:ns-str _ :level _ :?id _ :?data _ :pstats _ :pstats-str_ _})
 * 
 *   Map args:
 *  :ns-str      - Namespace string where `profile` call took place
 *  :level       - Level e/o #{0 1 2 3 4 5}, given in `(profile {:level _} ...)`
 *  :?id         - Optional group id,        given in `(profile {:id    _} ...)`
 *  :?data       - Optional arb data,        given in `(profile {:data  _} ...)`
 *  :pstats      - As in `(second (profiled ...))`. Derefable, mergeable.
 *  :pstats-str_ - `(delay (format-pstats pstats))
 * 
 *   Error handling (NB):
 *  Handler errors will be silently swallowed. Please `try`/`catch` and
 *  appropriately deal with (e.g. log) possible errors *within* `handler-fn`.
 * 
 *   Async/blocking:
 *  `handler-fn` should ideally be non-blocking, or reasonably cheap. Handler
 *   dispatch occurs through a 1-thread 1k-buffer dropping queue.
 * 
 *   Ns filtering:
 *  Provide an optional `ns-pattern` arg to only call handler for matching
 *  namespaces. See `*ns-filter*` for example patterns.
 * 
 *   Handler ideas:
 *  Save to a db, log, `put!` to an appropriate `core.async` channel, filter,
 *  aggregate, use for a realtime analytics dashboard, examine for outliers
 *  or unexpected output, ...
 */
taoensso.tufte.add_handler_BANG_ = (function taoensso$tufte$add_handler_BANG_(var_args){
var G__34936 = arguments.length;
switch (G__34936) {
case 2:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,null,handler_fn);
}));

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = (((((ns_pattern == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*"))))?handler_fn:(function (){var nsf_QMARK_ = taoensso.encore.compile_str_filter(ns_pattern);
return (function (m){
if(cljs.core.truth_(nsf_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499))))){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(m) : handler_fn.call(null,m));
} else {
return null;
}
});
})());
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
}));

(taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__34939){
var map__34940 = p__34939;
var map__34940__$1 = cljs.core.__destructure_map(map__34940);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34940__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34940__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"basic-println","basic-println",-1128346249));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34940__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__34941){
var map__34942 = p__34941;
var map__34942__$1 = cljs.core.__destructure_map(map__34942);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34942__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(_QMARK_id)?["\nid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null),(cljs.core.truth_(_QMARK_data)?["\ndata: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(pstats,format_pstats_opts) : taoensso.tufte.format_pstats.call(null,pstats,format_pstats_opts)))].join('')], 0));
}));
});
/**
 * Returns a `format-id-fn` that abbreviates form ids (pids).
 *   Takes `n` (default 1), the number of namespace parts to keep unabbreviated.
 * 
 *   Examples:
 *  ((format-id-abbr)   :foo)                     => "foo"
 *  ((format-id-abbr)   :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello.world/foo) => "e.h.world/foo"
 *  ((format-id-abbr 2) :example.hello.world/foo) => "e.hello.world/foo"
 *  ((format-id-abbr 0) :example.hello.world/foo) => "e.h.w/foo"
 */
taoensso.tufte.format_id_abbr = (function taoensso$tufte$format_id_abbr(var_args){
var G__34948 = arguments.length;
switch (G__34948) {
case 0:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((1));
}));

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1 = (function (n){
var n__$1 = cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34951){if((e34951 instanceof Error)){
var e = e34951;
return e;
} else {
throw e34951;

}
}})();
if((e == null)){
return n;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte",279,"(enc/int? n)",n,e,null);
}
})());
return (function (s){
var ns_parts = cljs.core.pop(taoensso.encore.explode_keyword(s));
var cnt = cljs.core.count(ns_parts);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if(((cnt - idx) <= n__$1)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3(in$,(0),(1)));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
if((cnt > (0))){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");
} else {
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.str_replace(cljs.core.name(s),/^defn_/,""));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
}));

(taoensso.tufte.format_id_abbr.cljs$lang$maxFixedArity = 1);

/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata_STAR_)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571);
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_proxy_get())){
return new cljs.core.Keyword(null,"thread","thread",947001524);
} else {
return null;
}
}
});
taoensso.tufte.default_nmax = 800000.0;
/**
 * Note: this is a low-level primitive for advanced users!
 *   Returns a new pdata object for use with `with-profiling` and/or `capture-time!`.
 *   Deref to get pstats:
 * 
 *  (let [pd (new-pdata)
 *        t0 (System/nanoTime)]
 *    (with-profiling pd {}
 *      (p :foo (Thread/sleep 100))
 *      (capture-time! pd :bar (- t0 (System/nanoTime))))
 *    @pd)
 * 
 *   Dynamic (thread-safe) by default.
 *   *WARNING*: don't change this default unless you're very sure the resulting
 *   pdata object will not be concurrently modified across threads. Concurrent
 *   modification will lead to bad data and/or exceptions!
 */
taoensso.tufte.new_pdata = (function taoensso$tufte$new_pdata(var_args){
var G__34958 = arguments.length;
switch (G__34958) {
case 0:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1 = (function (p__34959){
var map__34960 = p__34959;
var map__34960__$1 = cljs.core.__destructure_map(map__34960);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34960__$1,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),true);
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34960__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404),800000.0);
if(cljs.core.truth_(dynamic_QMARK_)){
return taoensso.tufte.impl.new_pdata_dynamic(nmax);
} else {
return taoensso.tufte.impl.new_pdata_local(nmax);
}
}));

(taoensso.tufte.new_pdata.cljs$lang$maxFixedArity = 1);

/**
 * Note: this is a low-level primitive for advanced users!
 *   Can be useful when tracking time across arbitrary thread boundaries or for
 *   async jobs / callbacks / etc.
 * 
 *   See `new-pdata` for more info on low-level primitives.
 */
taoensso.tufte.capture_time_BANG_ = (function taoensso$tufte$capture_time_BANG_(var_args){
var G__34964 = arguments.length;
switch (G__34964) {
case 3:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pdata,id,nano_secs_elapsed){
return taoensso.tufte.impl.capture_time_BANG_(pdata,id,nano_secs_elapsed);
}));

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nano_secs_elapsed){
var temp__5753__auto__ = (function (){var or__4253__auto__ = taoensso.tufte.impl._STAR_pdata_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy_get();
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var pd = temp__5753__auto__;
return taoensso.tufte.impl.capture_time_BANG_(pd,id,nano_secs_elapsed);
} else {
return null;
}
}));

(taoensso.tufte.capture_time_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Wraps `taoensso.encore/compile-str-filter`.
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_str_filter(ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
/**
 * Statistics are lossless unless data to merge are very large.
 */
taoensso.tufte.merge_pstats = (function taoensso$tufte$merge_pstats(var_args){
var G__34979 = arguments.length;
switch (G__34979) {
case 0:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps0){
return ps0;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(ps0,ps1);
}));

(taoensso.tufte.merge_pstats.cljs$lang$maxFixedArity = 2);

/**
 * Formats given pstats to a string table.
 *  Accounted < Clock => Some work was done that wasn't tracked by any p forms.
 *  Accounted > Clock => Nested p forms, and/or parallel threads.
 */
taoensso.tufte.format_pstats = (function taoensso$tufte$format_pstats(var_args){
var G__34988 = arguments.length;
switch (G__34988) {
case 1:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps){
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(ps,null);
}));

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps,opts){
if(cljs.core.truth_(ps)){
var map__34989 = (((ps instanceof taoensso.tufte.impl.PStats))?cljs.core.deref(ps):ps);
var map__34989__$1 = cljs.core.__destructure_map(map__34989);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34989__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34989__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
return taoensso.tufte.stats.format_stats(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clock,new cljs.core.Keyword(null,"total","total",1916810418)),stats,opts);
} else {
return null;
}
}));

(taoensso.tufte.format_pstats.cljs$lang$maxFixedArity = 2);

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,_QMARK_meta_pid,fn_sym,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_(cljs.core.first(sigs));
var sigs__$1 = ((single_arity_QMARK_)?(new cljs.core.List(null,sigs,null,(1),null)):sigs);
var base_id = (cljs.core.truth_(_QMARK_meta_pid)?taoensso.encore.as_qname(_QMARK_meta_pid):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",(cljs.core.truth_(def_QMARK_)?"defn_":"fn_"),cljs.core.name(fn_sym)].join(''));
var get_id = ((single_arity_QMARK_)?(function (fn_sym__$1,_params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
}):(function (fn_sym__$1,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([base_id,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''));
}));
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34992){
var vec__34993 = p__34992;
var seq__34994 = cljs.core.seq(vec__34993);
var first__34995 = cljs.core.first(seq__34994);
var seq__34994__$1 = cljs.core.next(seq__34994);
var params = first__34995;
var others = seq__34994__$1;
var has_prepost_map_QMARK_ = ((cljs.core.map_QMARK_(cljs.core.first(others))) && (cljs.core.next(others)));
var vec__34996 = ((has_prepost_map_QMARK_)?others:cljs.core.cons(null,others));
var seq__34997 = cljs.core.seq(vec__34996);
var first__34998 = cljs.core.first(seq__34997);
var seq__34997__$1 = cljs.core.next(seq__34997);
var _QMARK_prepost_map = first__34998;
var body = seq__34997__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,_QMARK_prepost_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
}),sigs__$1);
return new_sigs;
});
taoensso.tufte.sacc_drain_and_merge_BANG_ = (function taoensso$tufte$sacc_drain_and_merge_BANG_(pstats_){
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,cljs.core.PersistentArrayMap.EMPTY);
});
taoensso.tufte.sacc_add_BANG_ = (function taoensso$tufte$sacc_add_BANG_(pstats_,group_id,ps){
if(cljs.core.truth_((function (){var and__4251__auto__ = group_id;
if(cljs.core.truth_(and__4251__auto__)){
return ps;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,group_id,taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,group_id),ps));
}));

return true;
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.StatsAccumulator = (function (pstats_){
this.pstats_ = pstats_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.StatsAccumulator.prototype.call = (function (unused__9632__auto__){
var self__ = this;
var self__ = this;
var G__35005 = (arguments.length - (1));
switch (G__35005) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.tufte.StatsAccumulator.prototype.apply = (function (self__,args35003){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35003)));
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (group_id,ps){
var self__ = this;
var _ = this;
return taoensso.tufte.sacc_add_BANG_(self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.tufte.sacc_drain_and_merge_BANG_(self__.pstats_);
}));

(taoensso.tufte.StatsAccumulator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pstats_","pstats_",-970084866,null)], null);
}));

(taoensso.tufte.StatsAccumulator.cljs$lang$type = true);

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorStr = "taoensso.tufte/StatsAccumulator");

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"taoensso.tufte/StatsAccumulator");
}));

/**
 * Positional factory function for taoensso.tufte/StatsAccumulator.
 */
taoensso.tufte.__GT_StatsAccumulator = (function taoensso$tufte$__GT_StatsAccumulator(pstats_){
return (new taoensso.tufte.StatsAccumulator(pstats_));
});

/**
 * Alpha, subject to change.
 *   Small util to help merge pstats from multiple runs or threads.
 * 
 *   Returns a stateful StatsAccumulator (`sacc`) with:
 *  - `(sacc <group-id> <pstats>)` ; Merges given pstats under given group id
 *  - `@sacc`                      ; Drains accumulator and returns {<group-id> <merged-pstats>}
 * 
 *   Note that you may want some kind of async/buffer/serialization
 *   mechanism in front of merge calls for performance (e.g. by using an agent).
 * 
 *   See also `add-accumulating-handler!`, example clj project.
 */
taoensso.tufte.stats_accumulator = (function taoensso$tufte$stats_accumulator(){
return (new taoensso.tufte.StatsAccumulator(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)));
});
/**
 * Alpha, subject to change.
 * 
 *   Creates a new StatsAccumulator (and agent in clj), then
 *   registers a handler to accumulate `profile` output to the
 *   StatsAccumulator using the agent.
 * 
 *   Returns the StatsAccumulator. You can deref the result to
 *   drain the accumulator and return {<group-id> <merged-pstats>}.
 * 
 *   One common pattern is to deref the accumulator every n
 *   minutes/etc. to get a view of total-system performance over
 *   the period, e.g.:
 * 
 *   (defonce my-sacc (add-accumulating-handler! "*"))
 *   (defonce my-sacc-drainer
 *  ;; Will drain and print formatted stats every minute
 *  (future
 *    (while true
 *      (when-let [m (not-empty @my-sacc)]
 *        (println (format-grouped-pstats m)))
 *      (Thread/sleep 60000))))
 * 
 *   (profile ...) ; Used elsewhere in your application, e.g.
 *              ; wrapping relevant Ring routes in a web application.
 * 
 *   See also `format-grouped-pstats`, example clj project.
 */
taoensso.tufte.add_accumulating_handler_BANG_ = (function taoensso$tufte$add_accumulating_handler_BANG_(p__35009){
var map__35010 = p__35009;
var map__35010__$1 = cljs.core.__destructure_map(map__35010);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35010__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986));
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35010__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"accumulating","accumulating",988482775));
var sacc = taoensso.tufte.stats_accumulator();
var agent_ = null;
taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__35013){
var map__35014 = p__35013;
var map__35014__$1 = cljs.core.__destructure_map(map__35014);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35014__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35014__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35014__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
var id = (function (){var or__4253__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("tufte","nil-id","tufte/nil-id",1406139614);
}
})();
return (sacc.cljs$core$IFn$_invoke$arity$2 ? sacc.cljs$core$IFn$_invoke$arity$2(id,pstats) : sacc.call(null,id,pstats));
}));

return sacc;
});
/**
 * Alpha, subject to change.
 *   Takes a map of {<group-id> <PStats>} and formats a combined
 *   output string using `format-pstats`.
 * 
 *   See also example clj project.
 */
taoensso.tufte.format_grouped_pstats = (function taoensso$tufte$format_grouped_pstats(var_args){
var G__35017 = arguments.length;
switch (G__35017) {
case 1:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2 = (function (m,p__35022){
var map__35023 = p__35022;
var map__35023__$1 = cljs.core.__destructure_map(map__35023);
var group_sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35023__$1,new cljs.core.Keyword(null,"group-sort-fn","group-sort-fn",1474480015),(function (m__$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null),(0));
}));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
if(cljs.core.truth_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,taoensso.encore.force_ref(v));
}),cljs.core.transient$(m),m));
var sorted_group_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__35024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id);
return (group_sort_fn.cljs$core$IFn$_invoke$arity$1 ? group_sort_fn.cljs$core$IFn$_invoke$arity$1(G__35024) : group_sort_fn.call(null,G__35024));
}),taoensso.encore.rcompare,cljs.core.keys(m__$1));
var max_id_width = cljs.core.reduce_kv((function (acc,_,p__35025){
var map__35026 = p__35025;
var map__35026__$1 = cljs.core.__destructure_map(map__35026);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
var temp__5751__auto__ = taoensso.tufte.stats.get_max_id_width(stats,format_pstats_opts);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
if((cljs.core.long$(c) > acc)){
return c;
} else {
return acc;
}
} else {
return acc;
}
}),(0),m__$1);
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),",\n",taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(format_pstats_opts,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373),max_id_width))].join('');
})),sorted_group_ids);
} else {
return null;
}
}));

(taoensso.tufte.format_grouped_pstats.cljs$lang$maxFixedArity = 2);

var ret__4913__auto___35158 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35159 = arguments.length;
var i__4865__auto___35160 = (0);
while(true){
if((i__4865__auto___35160 < len__4864__auto___35159)){
args__4870__auto__.push((arguments[i__4865__auto___35160]));

var G__35161 = (i__4865__auto___35160 + (1));
i__4865__auto___35160 = G__35161;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*min-level*","taoensso.tufte/*min-level*",-1012922549,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq35027){
var G__35028 = cljs.core.first(seq35027);
var seq35027__$1 = cljs.core.next(seq35027);
var G__35029 = cljs.core.first(seq35027__$1);
var seq35027__$2 = cljs.core.next(seq35027__$1);
var G__35030 = cljs.core.first(seq35027__$2);
var seq35027__$3 = cljs.core.next(seq35027__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35028,G__35029,G__35030,seq35027__$3);
}));

return null;
})()
;
(taoensso.tufte.with_min_level.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_min_level_BANG_ = (function taoensso$tufte$set_min_level_BANG_(level){
return (taoensso.tufte._STAR_min_level_STAR_ = level);
});

var ret__4913__auto___35165 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35166 = arguments.length;
var i__4865__auto___35167 = (0);
while(true){
if((i__4865__auto___35167 < len__4864__auto___35166)){
args__4870__auto__.push((arguments[i__4865__auto___35167]));

var G__35168 = (i__4865__auto___35167 + (1));
i__4865__auto___35167 = G__35168;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*ns-filter*","taoensso.tufte/*ns-filter*",843426356,null),null,(1),null)),(new cljs.core.List(null,ns_pattern,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq35035){
var G__35036 = cljs.core.first(seq35035);
var seq35035__$1 = cljs.core.next(seq35035);
var G__35037 = cljs.core.first(seq35035__$1);
var seq35035__$2 = cljs.core.next(seq35035__$1);
var G__35038 = cljs.core.first(seq35035__$2);
var seq35035__$3 = cljs.core.next(seq35035__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35036,G__35037,G__35038,seq35035__$3);
}));

return null;
})()
;
(taoensso.tufte.with_ns_pattern.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
return (taoensso.tufte._STAR_ns_filter_STAR_ = ns_pattern);
});

//# sourceMappingURL=taoensso.tufte.js.map
