goog.provide('tiltontec.cell.integrity');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.integrity._STAR_dp_log_STAR_ = false;
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__27012 = arguments.length;
switch (G__27012) {
case 0:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"anon","anon",-765650478));
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(cljs.core.truth_(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_)){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.integrity._STAR_dp_log_STAR_)){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("dp-next> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) + (1)),pulse_info], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base._PLUS_pulse_PLUS_,cljs.core.inc);
}
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1);

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_pulse(c),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) >= tiltontec.cell.base.c_pulse(c))){
} else {
throw (new Error("Assert failed: (>= (clojure.core/deref +pulse+) (c-pulse c))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,new cljs.core.Keyword(null,"pulse","pulse",-244494476),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
}
});
tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),new cljs.core.Keyword(null,"awaken","awaken",-1899628152),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),new cljs.core.Keyword(null,"change","change",-1163046502)], null);
tiltontec.cell.integrity.unfin_biz = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function tiltontec$cell$integrity$iter__27033(s__27034){
return (new cljs.core.LazySeq(null,(function (){
var s__27034__$1 = s__27034;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27034__$1);
if(temp__5753__auto__){
var s__27034__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27034__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27034__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27036 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27035 = (0);
while(true){
if((i__27035 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__27035);
cljs.core.chunk_append(b__27036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));

var G__27155 = (i__27035 + (1));
i__27035 = G__27155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27036),tiltontec$cell$integrity$iter__27033(cljs.core.chunk_rest(s__27034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27036),null);
}
} else {
var i = cljs.core.first(s__27034__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$integrity$iter__27033(cljs.core.rest(s__27034__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_);
})());
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__4253__auto__ = (opcode.cljs$core$IFn$_invoke$arity$1 ? opcode.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.integrity.unfin_biz) : opcode.call(null,tiltontec.cell.integrity.unfin_biz));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(["ufb-queue> opcode unknown: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join(''));
}
});
tiltontec.cell.integrity.ufb_queue_ensure = (function tiltontec$cell$integrity$ufb_queue_ensure(opcode){

return tiltontec.cell.integrity.ufb_queue(opcode);
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add(tiltontec.cell.integrity.ufb_queue_ensure(opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__5751__auto__ = tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(opcode));
if(cljs.core.truth_(temp__5751__auto__)){
var uqp = temp__5751__auto__;
return tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3("ufb queue %s not empty, viz %s",opcode,uqp);
} else {
return true;
}
});
tiltontec.cell.integrity._STAR_ufb_do_q_STAR_ = null;
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__27090 = arguments.length;
switch (G__27090) {
case 1:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1 = (function (opcode){
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.integrity.ufb_queue(opcode),opcode);
}));

(tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__5753__auto__ = tiltontec.util.core.fifo_pop(q);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__27096 = temp__5753__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27096,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27096,(1),null);
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ufb-do-yep","ufb-do-yep",-2077548937),defer_info,task], 0));

(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : task.call(null,opcode,defer_info));

var G__27172 = q;
var G__27173 = opcode;
q = G__27172;
opcode = G__27173;
continue;
} else {
return null;
}
break;
}
}));

(tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2);

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
while(true){
var G__27100 = tag;
var G__27100__$1 = (((G__27100 instanceof cljs.core.Keyword))?G__27100.fqn:null);
switch (G__27100__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"awaken","awaken",-1899628152));

var G__27175 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388))))?new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388):new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173));
tag = G__27175;
continue;

break;
case "handle-clients":
tiltontec.util.core.plnk(new cljs.core.Keyword(null,"handle-clients!!!","handle-clients!!!",-884819601));

var temp__5753__auto__ = tiltontec.cell.integrity.ufb_queue(new cljs.core.Keyword(null,"client","client",-1323448117));
if(cljs.core.truth_(temp__5753__auto__)){
var clientq = temp__5753__auto__;
var temp__5751__auto___27177 = cljs.core.deref(tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__5751__auto___27177)){
var cqh_27178 = temp__5751__auto___27177;
(cqh_27178.cljs$core$IFn$_invoke$arity$1 ? cqh_27178.cljs$core$IFn$_invoke$arity$1(clientq) : cqh_27178.call(null,clientq));
} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(clientq,new cljs.core.Keyword(null,"client","client",-1323448117));
}

var G__27179 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(new cljs.core.Keyword(null,"client","client",-1323448117))))?(function (){
tiltontec.util.core.plnk(new cljs.core.Keyword(null,"re-handling-clients!!!!","re-handling-clients!!!!",-1248166541));

return new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173);
})()
:new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));
tag = G__27179;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));

var G__27186 = new cljs.core.Keyword(null,"deferred-state-change","deferred-state-change",-1362791478);
tag = G__27186;
continue;

break;
case "deferred-state-change":
var temp__5753__auto__ = tiltontec.util.core.fifo_pop(tiltontec.cell.integrity.ufb_queue(new cljs.core.Keyword(null,"change","change",-1163046502)));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__27108 = temp__5753__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(0),null);
var task_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(1),null);
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"defferred-state-chg","defferred-state-chg",-147686539));

(task_fn.cljs$core$IFn$_invoke$arity$2 ? task_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change","change",-1163046502),defer_info) : task_fn.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),defer_info));

var G__27190 = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
tag = G__27190;
continue;
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27100__$1)].join('')));

}
break;
}
}
});
tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(tiltontec.cell.base._STAR_within_integrity_STAR_)){
if(cljs.core.truth_(opcode)){
var result__26632__auto__ = new cljs.core.Keyword(null,"deferred-to-ufb-1","deferred-to-ufb-1",-1094275721);
tiltontec.cell.integrity.ufb_add(opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__26632__auto__;
} else {
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
}
} else {
var _STAR_within_integrity_STAR__orig_val__27129 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR__orig_val__27130 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_within_integrity_STAR__temp_val__27131 = true;
var _STAR_defer_changes_STAR__temp_val__27132 = false;
(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__27131);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__27132);

try{if((((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,new cljs.core.Keyword(null,"change","change",-1163046502))))){
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cwi","cwi",1748296377),opcode,defer_info], null));
} else {
}

var result__26632__auto__ = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
tiltontec.cell.integrity.finish_business();

tiltontec.cell.integrity.ufb_assert_q_empty(new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_assert_q_empty(new cljs.core.Keyword(null,"change","change",-1163046502));

return result__26632__auto__;
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__27130);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__27129);
}
}
});

//# sourceMappingURL=tiltontec.cell.integrity.js.map
