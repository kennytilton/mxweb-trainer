goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30273 = arguments.length;
switch (G__30273) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30289 = (function (f,blockable,meta30290){
this.f = f;
this.blockable = blockable;
this.meta30290 = meta30290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30291,meta30290__$1){
var self__ = this;
var _30291__$1 = this;
return (new cljs.core.async.t_cljs$core$async30289(self__.f,self__.blockable,meta30290__$1));
}));

(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30291){
var self__ = this;
var _30291__$1 = this;
return self__.meta30290;
}));

(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30290","meta30290",66411081,null)], null);
}));

(cljs.core.async.t_cljs$core$async30289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30289");

(cljs.core.async.t_cljs$core$async30289.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30289.
 */
cljs.core.async.__GT_t_cljs$core$async30289 = (function cljs$core$async$__GT_t_cljs$core$async30289(f__$1,blockable__$1,meta30290){
return (new cljs.core.async.t_cljs$core$async30289(f__$1,blockable__$1,meta30290));
});

}

return (new cljs.core.async.t_cljs$core$async30289(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30376 = arguments.length;
switch (G__30376) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30386 = arguments.length;
switch (G__30386) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30406 = arguments.length;
switch (G__30406) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33209 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33209) : fn1.call(null,val_33209));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33209) : fn1.call(null,val_33209));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30411 = arguments.length;
switch (G__30411) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33211 = n;
var x_33212 = (0);
while(true){
if((x_33212 < n__4741__auto___33211)){
(a[x_33212] = x_33212);

var G__33213 = (x_33212 + (1));
x_33212 = G__33213;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30424 = (function (flag,meta30425){
this.flag = flag;
this.meta30425 = meta30425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30426,meta30425__$1){
var self__ = this;
var _30426__$1 = this;
return (new cljs.core.async.t_cljs$core$async30424(self__.flag,meta30425__$1));
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30426){
var self__ = this;
var _30426__$1 = this;
return self__.meta30425;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30425","meta30425",-859953276,null)], null);
}));

(cljs.core.async.t_cljs$core$async30424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30424");

(cljs.core.async.t_cljs$core$async30424.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30424.
 */
cljs.core.async.__GT_t_cljs$core$async30424 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30424(flag__$1,meta30425){
return (new cljs.core.async.t_cljs$core$async30424(flag__$1,meta30425));
});

}

return (new cljs.core.async.t_cljs$core$async30424(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30450 = (function (flag,cb,meta30451){
this.flag = flag;
this.cb = cb;
this.meta30451 = meta30451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30452,meta30451__$1){
var self__ = this;
var _30452__$1 = this;
return (new cljs.core.async.t_cljs$core$async30450(self__.flag,self__.cb,meta30451__$1));
}));

(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30452){
var self__ = this;
var _30452__$1 = this;
return self__.meta30451;
}));

(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30451","meta30451",-192779526,null)], null);
}));

(cljs.core.async.t_cljs$core$async30450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30450");

(cljs.core.async.t_cljs$core$async30450.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30450.
 */
cljs.core.async.__GT_t_cljs$core$async30450 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30450(flag__$1,cb__$1,meta30451){
return (new cljs.core.async.t_cljs$core$async30450(flag__$1,cb__$1,meta30451));
});

}

return (new cljs.core.async.t_cljs$core$async30450(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30458_SHARP_){
var G__30470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30458_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30470) : fret.call(null,G__30470));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30459_SHARP_){
var G__30474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30459_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30474) : fret.call(null,G__30474));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33218 = (i + (1));
i = G__33218;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33219 = arguments.length;
var i__4865__auto___33220 = (0);
while(true){
if((i__4865__auto___33220 < len__4864__auto___33219)){
args__4870__auto__.push((arguments[i__4865__auto___33220]));

var G__33221 = (i__4865__auto___33220 + (1));
i__4865__auto___33220 = G__33221;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30527){
var map__30528 = p__30527;
var map__30528__$1 = cljs.core.__destructure_map(map__30528);
var opts = map__30528__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30495){
var G__30496 = cljs.core.first(seq30495);
var seq30495__$1 = cljs.core.next(seq30495);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30496,seq30495__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30539 = arguments.length;
switch (G__30539) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30192__auto___33223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_30582){
var state_val_30587 = (state_30582[(1)]);
if((state_val_30587 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30596_33224 = state_30582__$1;
(statearr_30596_33224[(2)] = inst_30578);

(statearr_30596_33224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (1))){
var state_30582__$1 = state_30582;
var statearr_30597_33225 = state_30582__$1;
(statearr_30597_33225[(2)] = null);

(statearr_30597_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (4))){
var inst_30561 = (state_30582[(7)]);
var inst_30561__$1 = (state_30582[(2)]);
var inst_30562 = (inst_30561__$1 == null);
var state_30582__$1 = (function (){var statearr_30599 = state_30582;
(statearr_30599[(7)] = inst_30561__$1);

return statearr_30599;
})();
if(cljs.core.truth_(inst_30562)){
var statearr_30600_33226 = state_30582__$1;
(statearr_30600_33226[(1)] = (5));

} else {
var statearr_30601_33227 = state_30582__$1;
(statearr_30601_33227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (13))){
var state_30582__$1 = state_30582;
var statearr_30603_33228 = state_30582__$1;
(statearr_30603_33228[(2)] = null);

(statearr_30603_33228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (6))){
var inst_30561 = (state_30582[(7)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30582__$1,(11),to,inst_30561);
} else {
if((state_val_30587 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30582__$1,inst_30580);
} else {
if((state_val_30587 === (12))){
var state_30582__$1 = state_30582;
var statearr_30604_33229 = state_30582__$1;
(statearr_30604_33229[(2)] = null);

(statearr_30604_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(4),from);
} else {
if((state_val_30587 === (11))){
var inst_30571 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30571)){
var statearr_30611_33230 = state_30582__$1;
(statearr_30611_33230[(1)] = (12));

} else {
var statearr_30612_33231 = state_30582__$1;
(statearr_30612_33231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (9))){
var state_30582__$1 = state_30582;
var statearr_30613_33232 = state_30582__$1;
(statearr_30613_33232[(2)] = null);

(statearr_30613_33232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (5))){
var state_30582__$1 = state_30582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30614_33233 = state_30582__$1;
(statearr_30614_33233[(1)] = (8));

} else {
var statearr_30615_33234 = state_30582__$1;
(statearr_30615_33234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (14))){
var inst_30576 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30618_33235 = state_30582__$1;
(statearr_30618_33235[(2)] = inst_30576);

(statearr_30618_33235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (10))){
var inst_30568 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30619_33236 = state_30582__$1;
(statearr_30619_33236[(2)] = inst_30568);

(statearr_30619_33236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30587 === (8))){
var inst_30565 = cljs.core.async.close_BANG_(to);
var state_30582__$1 = state_30582;
var statearr_30622_33237 = state_30582__$1;
(statearr_30622_33237[(2)] = inst_30565);

(statearr_30622_33237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_30627 = [null,null,null,null,null,null,null,null];
(statearr_30627[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_30627[(1)] = (1));

return statearr_30627;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_30582){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30582);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30628){var ex__29837__auto__ = e30628;
var statearr_30629_33240 = state_30582;
(statearr_30629_33240[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30582[(4)]))){
var statearr_30630_33241 = state_30582;
(statearr_30630_33241[(1)] = cljs.core.first((state_30582[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33242 = state_30582;
state_30582 = G__33242;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30634 = f__30193__auto__();
(statearr_30634[(6)] = c__30192__auto___33223);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30709){
var vec__30711 = p__30709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30711,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30711,(1),null);
var job = vec__30711;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30192__auto___33246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_30719){
var state_val_30720 = (state_30719[(1)]);
if((state_val_30720 === (1))){
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30719__$1,(2),res,v);
} else {
if((state_val_30720 === (2))){
var inst_30716 = (state_30719[(2)]);
var inst_30717 = cljs.core.async.close_BANG_(res);
var state_30719__$1 = (function (){var statearr_30724 = state_30719;
(statearr_30724[(7)] = inst_30716);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30719__$1,inst_30717);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_30728 = [null,null,null,null,null,null,null,null];
(statearr_30728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__);

(statearr_30728[(1)] = (1));

return statearr_30728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1 = (function (state_30719){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30719);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30729){var ex__29837__auto__ = e30729;
var statearr_30730_33247 = state_30719;
(statearr_30730_33247[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30719[(4)]))){
var statearr_30731_33248 = state_30719;
(statearr_30731_33248[(1)] = cljs.core.first((state_30719[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_30719;
state_30719 = G__33249;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = function(state_30719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1.call(this,state_30719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30736 = f__30193__auto__();
(statearr_30736[(6)] = c__30192__auto___33246);

return statearr_30736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30737){
var vec__30739 = p__30737;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30739,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30739,(1),null);
var job = vec__30739;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33254 = n;
var __33255 = (0);
while(true){
if((__33255 < n__4741__auto___33254)){
var G__30749_33256 = type;
var G__30749_33257__$1 = (((G__30749_33256 instanceof cljs.core.Keyword))?G__30749_33256.fqn:null);
switch (G__30749_33257__$1) {
case "compute":
var c__30192__auto___33259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33255,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = ((function (__33255,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function (state_30766){
var state_val_30767 = (state_30766[(1)]);
if((state_val_30767 === (1))){
var state_30766__$1 = state_30766;
var statearr_30771_33262 = state_30766__$1;
(statearr_30771_33262[(2)] = null);

(statearr_30771_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (2))){
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30766__$1,(4),jobs);
} else {
if((state_val_30767 === (3))){
var inst_30764 = (state_30766[(2)]);
var state_30766__$1 = state_30766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30766__$1,inst_30764);
} else {
if((state_val_30767 === (4))){
var inst_30756 = (state_30766[(2)]);
var inst_30757 = process(inst_30756);
var state_30766__$1 = state_30766;
if(cljs.core.truth_(inst_30757)){
var statearr_30774_33263 = state_30766__$1;
(statearr_30774_33263[(1)] = (5));

} else {
var statearr_30776_33264 = state_30766__$1;
(statearr_30776_33264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (5))){
var state_30766__$1 = state_30766;
var statearr_30778_33265 = state_30766__$1;
(statearr_30778_33265[(2)] = null);

(statearr_30778_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (6))){
var state_30766__$1 = state_30766;
var statearr_30789_33266 = state_30766__$1;
(statearr_30789_33266[(2)] = null);

(statearr_30789_33266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30767 === (7))){
var inst_30762 = (state_30766[(2)]);
var state_30766__$1 = state_30766;
var statearr_30791_33275 = state_30766__$1;
(statearr_30791_33275[(2)] = inst_30762);

(statearr_30791_33275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33255,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
;
return ((function (__33255,switch__29833__auto__,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_30793 = [null,null,null,null,null,null,null];
(statearr_30793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__);

(statearr_30793[(1)] = (1));

return statearr_30793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1 = (function (state_30766){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30766);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30794){var ex__29837__auto__ = e30794;
var statearr_30795_33276 = state_30766;
(statearr_30795_33276[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30766[(4)]))){
var statearr_30796_33277 = state_30766;
(statearr_30796_33277[(1)] = cljs.core.first((state_30766[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33278 = state_30766;
state_30766 = G__33278;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = function(state_30766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1.call(this,state_30766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__;
})()
;})(__33255,switch__29833__auto__,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
})();
var state__30194__auto__ = (function (){var statearr_30801 = f__30193__auto__();
(statearr_30801[(6)] = c__30192__auto___33259);

return statearr_30801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
});})(__33255,c__30192__auto___33259,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
);


break;
case "async":
var c__30192__auto___33279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33255,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = ((function (__33255,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function (state_30814){
var state_val_30815 = (state_30814[(1)]);
if((state_val_30815 === (1))){
var state_30814__$1 = state_30814;
var statearr_30816_33280 = state_30814__$1;
(statearr_30816_33280[(2)] = null);

(statearr_30816_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (2))){
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30814__$1,(4),jobs);
} else {
if((state_val_30815 === (3))){
var inst_30812 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30814__$1,inst_30812);
} else {
if((state_val_30815 === (4))){
var inst_30804 = (state_30814[(2)]);
var inst_30805 = async(inst_30804);
var state_30814__$1 = state_30814;
if(cljs.core.truth_(inst_30805)){
var statearr_30818_33281 = state_30814__$1;
(statearr_30818_33281[(1)] = (5));

} else {
var statearr_30819_33282 = state_30814__$1;
(statearr_30819_33282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (5))){
var state_30814__$1 = state_30814;
var statearr_30820_33283 = state_30814__$1;
(statearr_30820_33283[(2)] = null);

(statearr_30820_33283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (6))){
var state_30814__$1 = state_30814;
var statearr_30824_33284 = state_30814__$1;
(statearr_30824_33284[(2)] = null);

(statearr_30824_33284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (7))){
var inst_30810 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30825_33285 = state_30814__$1;
(statearr_30825_33285[(2)] = inst_30810);

(statearr_30825_33285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33255,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
;
return ((function (__33255,switch__29833__auto__,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_30826 = [null,null,null,null,null,null,null];
(statearr_30826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__);

(statearr_30826[(1)] = (1));

return statearr_30826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1 = (function (state_30814){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30814);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30827){var ex__29837__auto__ = e30827;
var statearr_30828_33286 = state_30814;
(statearr_30828_33286[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30814[(4)]))){
var statearr_30829_33287 = state_30814;
(statearr_30829_33287[(1)] = cljs.core.first((state_30814[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33288 = state_30814;
state_30814 = G__33288;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = function(state_30814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1.call(this,state_30814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__;
})()
;})(__33255,switch__29833__auto__,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
})();
var state__30194__auto__ = (function (){var statearr_30830 = f__30193__auto__();
(statearr_30830[(6)] = c__30192__auto___33279);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
});})(__33255,c__30192__auto___33279,G__30749_33256,G__30749_33257__$1,n__4741__auto___33254,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30749_33257__$1)].join('')));

}

var G__33289 = (__33255 + (1));
__33255 = G__33289;
continue;
} else {
}
break;
}

var c__30192__auto___33290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_30852){
var state_val_30853 = (state_30852[(1)]);
if((state_val_30853 === (7))){
var inst_30848 = (state_30852[(2)]);
var state_30852__$1 = state_30852;
var statearr_30854_33291 = state_30852__$1;
(statearr_30854_33291[(2)] = inst_30848);

(statearr_30854_33291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (1))){
var state_30852__$1 = state_30852;
var statearr_30855_33292 = state_30852__$1;
(statearr_30855_33292[(2)] = null);

(statearr_30855_33292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (4))){
var inst_30833 = (state_30852[(7)]);
var inst_30833__$1 = (state_30852[(2)]);
var inst_30834 = (inst_30833__$1 == null);
var state_30852__$1 = (function (){var statearr_30857 = state_30852;
(statearr_30857[(7)] = inst_30833__$1);

return statearr_30857;
})();
if(cljs.core.truth_(inst_30834)){
var statearr_30858_33293 = state_30852__$1;
(statearr_30858_33293[(1)] = (5));

} else {
var statearr_30859_33294 = state_30852__$1;
(statearr_30859_33294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (6))){
var inst_30838 = (state_30852[(8)]);
var inst_30833 = (state_30852[(7)]);
var inst_30838__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30839 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30840 = [inst_30833,inst_30838__$1];
var inst_30841 = (new cljs.core.PersistentVector(null,2,(5),inst_30839,inst_30840,null));
var state_30852__$1 = (function (){var statearr_30860 = state_30852;
(statearr_30860[(8)] = inst_30838__$1);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30852__$1,(8),jobs,inst_30841);
} else {
if((state_val_30853 === (3))){
var inst_30850 = (state_30852[(2)]);
var state_30852__$1 = state_30852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30852__$1,inst_30850);
} else {
if((state_val_30853 === (2))){
var state_30852__$1 = state_30852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30852__$1,(4),from);
} else {
if((state_val_30853 === (9))){
var inst_30845 = (state_30852[(2)]);
var state_30852__$1 = (function (){var statearr_30861 = state_30852;
(statearr_30861[(9)] = inst_30845);

return statearr_30861;
})();
var statearr_30862_33295 = state_30852__$1;
(statearr_30862_33295[(2)] = null);

(statearr_30862_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (5))){
var inst_30836 = cljs.core.async.close_BANG_(jobs);
var state_30852__$1 = state_30852;
var statearr_30863_33296 = state_30852__$1;
(statearr_30863_33296[(2)] = inst_30836);

(statearr_30863_33296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30853 === (8))){
var inst_30838 = (state_30852[(8)]);
var inst_30843 = (state_30852[(2)]);
var state_30852__$1 = (function (){var statearr_30864 = state_30852;
(statearr_30864[(10)] = inst_30843);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30852__$1,(9),results,inst_30838);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1 = (function (state_30852){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30852);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30873){var ex__29837__auto__ = e30873;
var statearr_30874_33306 = state_30852;
(statearr_30874_33306[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30852[(4)]))){
var statearr_30875_33309 = state_30852;
(statearr_30875_33309[(1)] = cljs.core.first((state_30852[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_30852;
state_30852 = G__33310;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = function(state_30852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1.call(this,state_30852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30876 = f__30193__auto__();
(statearr_30876[(6)] = c__30192__auto___33290);

return statearr_30876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_30931){
var state_val_30932 = (state_30931[(1)]);
if((state_val_30932 === (7))){
var inst_30927 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30936_33311 = state_30931__$1;
(statearr_30936_33311[(2)] = inst_30927);

(statearr_30936_33311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (20))){
var state_30931__$1 = state_30931;
var statearr_30937_33312 = state_30931__$1;
(statearr_30937_33312[(2)] = null);

(statearr_30937_33312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (1))){
var state_30931__$1 = state_30931;
var statearr_30942_33313 = state_30931__$1;
(statearr_30942_33313[(2)] = null);

(statearr_30942_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (4))){
var inst_30883 = (state_30931[(7)]);
var inst_30883__$1 = (state_30931[(2)]);
var inst_30887 = (inst_30883__$1 == null);
var state_30931__$1 = (function (){var statearr_30943 = state_30931;
(statearr_30943[(7)] = inst_30883__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30887)){
var statearr_30944_33314 = state_30931__$1;
(statearr_30944_33314[(1)] = (5));

} else {
var statearr_30945_33315 = state_30931__$1;
(statearr_30945_33315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (15))){
var inst_30906 = (state_30931[(8)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30931__$1,(18),to,inst_30906);
} else {
if((state_val_30932 === (21))){
var inst_30922 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30946_33316 = state_30931__$1;
(statearr_30946_33316[(2)] = inst_30922);

(statearr_30946_33316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (13))){
var inst_30924 = (state_30931[(2)]);
var state_30931__$1 = (function (){var statearr_30947 = state_30931;
(statearr_30947[(9)] = inst_30924);

return statearr_30947;
})();
var statearr_30948_33317 = state_30931__$1;
(statearr_30948_33317[(2)] = null);

(statearr_30948_33317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (6))){
var inst_30883 = (state_30931[(7)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30931__$1,(11),inst_30883);
} else {
if((state_val_30932 === (17))){
var inst_30917 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30917)){
var statearr_30949_33319 = state_30931__$1;
(statearr_30949_33319[(1)] = (19));

} else {
var statearr_30950_33320 = state_30931__$1;
(statearr_30950_33320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (3))){
var inst_30929 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30931__$1,inst_30929);
} else {
if((state_val_30932 === (12))){
var inst_30899 = (state_30931[(10)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30931__$1,(14),inst_30899);
} else {
if((state_val_30932 === (2))){
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30931__$1,(4),results);
} else {
if((state_val_30932 === (19))){
var state_30931__$1 = state_30931;
var statearr_30951_33321 = state_30931__$1;
(statearr_30951_33321[(2)] = null);

(statearr_30951_33321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (11))){
var inst_30899 = (state_30931[(2)]);
var state_30931__$1 = (function (){var statearr_30952 = state_30931;
(statearr_30952[(10)] = inst_30899);

return statearr_30952;
})();
var statearr_30953_33322 = state_30931__$1;
(statearr_30953_33322[(2)] = null);

(statearr_30953_33322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (9))){
var state_30931__$1 = state_30931;
var statearr_30954_33323 = state_30931__$1;
(statearr_30954_33323[(2)] = null);

(statearr_30954_33323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (5))){
var state_30931__$1 = state_30931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30955_33325 = state_30931__$1;
(statearr_30955_33325[(1)] = (8));

} else {
var statearr_30956_33326 = state_30931__$1;
(statearr_30956_33326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (14))){
var inst_30908 = (state_30931[(11)]);
var inst_30906 = (state_30931[(8)]);
var inst_30906__$1 = (state_30931[(2)]);
var inst_30907 = (inst_30906__$1 == null);
var inst_30908__$1 = cljs.core.not(inst_30907);
var state_30931__$1 = (function (){var statearr_30957 = state_30931;
(statearr_30957[(11)] = inst_30908__$1);

(statearr_30957[(8)] = inst_30906__$1);

return statearr_30957;
})();
if(inst_30908__$1){
var statearr_30958_33328 = state_30931__$1;
(statearr_30958_33328[(1)] = (15));

} else {
var statearr_30959_33329 = state_30931__$1;
(statearr_30959_33329[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (16))){
var inst_30908 = (state_30931[(11)]);
var state_30931__$1 = state_30931;
var statearr_30960_33330 = state_30931__$1;
(statearr_30960_33330[(2)] = inst_30908);

(statearr_30960_33330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (10))){
var inst_30896 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30965_33331 = state_30931__$1;
(statearr_30965_33331[(2)] = inst_30896);

(statearr_30965_33331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (18))){
var inst_30914 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30968_33332 = state_30931__$1;
(statearr_30968_33332[(2)] = inst_30914);

(statearr_30968_33332[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (8))){
var inst_30893 = cljs.core.async.close_BANG_(to);
var state_30931__$1 = state_30931;
var statearr_30969_33333 = state_30931__$1;
(statearr_30969_33333[(2)] = inst_30893);

(statearr_30969_33333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1 = (function (state_30931){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_30931);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e30981){var ex__29837__auto__ = e30981;
var statearr_30982_33334 = state_30931;
(statearr_30982_33334[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_30931[(4)]))){
var statearr_30989_33335 = state_30931;
(statearr_30989_33335[(1)] = cljs.core.first((state_30931[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33336 = state_30931;
state_30931 = G__33336;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__ = function(state_30931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1.call(this,state_30931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30993 = f__30193__auto__();
(statearr_30993[(6)] = c__30192__auto__);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31008 = arguments.length;
switch (G__31008) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31010 = arguments.length;
switch (G__31010) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30192__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (7))){
var inst_31036 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31042_33344 = state_31040__$1;
(statearr_31042_33344[(2)] = inst_31036);

(statearr_31042_33344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (1))){
var state_31040__$1 = state_31040;
var statearr_31043_33346 = state_31040__$1;
(statearr_31043_33346[(2)] = null);

(statearr_31043_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (4))){
var inst_31017 = (state_31040[(7)]);
var inst_31017__$1 = (state_31040[(2)]);
var inst_31018 = (inst_31017__$1 == null);
var state_31040__$1 = (function (){var statearr_31044 = state_31040;
(statearr_31044[(7)] = inst_31017__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_31018)){
var statearr_31045_33347 = state_31040__$1;
(statearr_31045_33347[(1)] = (5));

} else {
var statearr_31047_33348 = state_31040__$1;
(statearr_31047_33348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (13))){
var state_31040__$1 = state_31040;
var statearr_31048_33349 = state_31040__$1;
(statearr_31048_33349[(2)] = null);

(statearr_31048_33349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (6))){
var inst_31017 = (state_31040[(7)]);
var inst_31023 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31017) : p.call(null,inst_31017));
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31023)){
var statearr_31049_33350 = state_31040__$1;
(statearr_31049_33350[(1)] = (9));

} else {
var statearr_31050_33351 = state_31040__$1;
(statearr_31050_33351[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (3))){
var inst_31038 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (12))){
var state_31040__$1 = state_31040;
var statearr_31053_33352 = state_31040__$1;
(statearr_31053_33352[(2)] = null);

(statearr_31053_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (2))){
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31040__$1,(4),ch);
} else {
if((state_val_31041 === (11))){
var inst_31017 = (state_31040[(7)]);
var inst_31027 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31040__$1,(8),inst_31027,inst_31017);
} else {
if((state_val_31041 === (9))){
var state_31040__$1 = state_31040;
var statearr_31058_33353 = state_31040__$1;
(statearr_31058_33353[(2)] = tc);

(statearr_31058_33353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (5))){
var inst_31020 = cljs.core.async.close_BANG_(tc);
var inst_31021 = cljs.core.async.close_BANG_(fc);
var state_31040__$1 = (function (){var statearr_31059 = state_31040;
(statearr_31059[(8)] = inst_31020);

return statearr_31059;
})();
var statearr_31060_33355 = state_31040__$1;
(statearr_31060_33355[(2)] = inst_31021);

(statearr_31060_33355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (14))){
var inst_31034 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31063_33356 = state_31040__$1;
(statearr_31063_33356[(2)] = inst_31034);

(statearr_31063_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (10))){
var state_31040__$1 = state_31040;
var statearr_31064_33358 = state_31040__$1;
(statearr_31064_33358[(2)] = fc);

(statearr_31064_33358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (8))){
var inst_31029 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31029)){
var statearr_31065_33359 = state_31040__$1;
(statearr_31065_33359[(1)] = (12));

} else {
var statearr_31066_33360 = state_31040__$1;
(statearr_31066_33360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_31067 = [null,null,null,null,null,null,null,null,null];
(statearr_31067[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_31067[(1)] = (1));

return statearr_31067;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_31040){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_31040);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e31068){var ex__29837__auto__ = e31068;
var statearr_31069_33369 = state_31040;
(statearr_31069_33369[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_31040[(4)]))){
var statearr_31070_33370 = state_31040;
(statearr_31070_33370[(1)] = cljs.core.first((state_31040[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33371 = state_31040;
state_31040 = G__33371;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31071 = f__30193__auto__();
(statearr_31071[(6)] = c__30192__auto___33342);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (7))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31124_33372 = state_31114__$1;
(statearr_31124_33372[(2)] = inst_31110);

(statearr_31124_33372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (1))){
var inst_31086 = init;
var inst_31087 = inst_31086;
var state_31114__$1 = (function (){var statearr_31125 = state_31114;
(statearr_31125[(7)] = inst_31087);

return statearr_31125;
})();
var statearr_31126_33377 = state_31114__$1;
(statearr_31126_33377[(2)] = null);

(statearr_31126_33377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (4))){
var inst_31094 = (state_31114[(8)]);
var inst_31094__$1 = (state_31114[(2)]);
var inst_31096 = (inst_31094__$1 == null);
var state_31114__$1 = (function (){var statearr_31127 = state_31114;
(statearr_31127[(8)] = inst_31094__$1);

return statearr_31127;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31128_33378 = state_31114__$1;
(statearr_31128_33378[(1)] = (5));

} else {
var statearr_31129_33379 = state_31114__$1;
(statearr_31129_33379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31087 = (state_31114[(7)]);
var inst_31101 = (state_31114[(9)]);
var inst_31094 = (state_31114[(8)]);
var inst_31101__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31087,inst_31094) : f.call(null,inst_31087,inst_31094));
var inst_31102 = cljs.core.reduced_QMARK_(inst_31101__$1);
var state_31114__$1 = (function (){var statearr_31130 = state_31114;
(statearr_31130[(9)] = inst_31101__$1);

return statearr_31130;
})();
if(inst_31102){
var statearr_31133_33380 = state_31114__$1;
(statearr_31133_33380[(1)] = (8));

} else {
var statearr_31134_33381 = state_31114__$1;
(statearr_31134_33381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (2))){
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31114__$1,(4),ch);
} else {
if((state_val_31115 === (9))){
var inst_31101 = (state_31114[(9)]);
var inst_31087 = inst_31101;
var state_31114__$1 = (function (){var statearr_31137 = state_31114;
(statearr_31137[(7)] = inst_31087);

return statearr_31137;
})();
var statearr_31138_33382 = state_31114__$1;
(statearr_31138_33382[(2)] = null);

(statearr_31138_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (5))){
var inst_31087 = (state_31114[(7)]);
var state_31114__$1 = state_31114;
var statearr_31139_33383 = state_31114__$1;
(statearr_31139_33383[(2)] = inst_31087);

(statearr_31139_33383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (10))){
var inst_31108 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31140_33384 = state_31114__$1;
(statearr_31140_33384[(2)] = inst_31108);

(statearr_31140_33384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (8))){
var inst_31101 = (state_31114[(9)]);
var inst_31104 = cljs.core.deref(inst_31101);
var state_31114__$1 = state_31114;
var statearr_31141_33385 = state_31114__$1;
(statearr_31141_33385[(2)] = inst_31104);

(statearr_31141_33385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29834__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29834__auto____0 = (function (){
var statearr_31146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31146[(0)] = cljs$core$async$reduce_$_state_machine__29834__auto__);

(statearr_31146[(1)] = (1));

return statearr_31146;
});
var cljs$core$async$reduce_$_state_machine__29834__auto____1 = (function (state_31114){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_31114);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e31147){var ex__29837__auto__ = e31147;
var statearr_31149_33386 = state_31114;
(statearr_31149_33386[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_31114[(4)]))){
var statearr_31150_33387 = state_31114;
(statearr_31150_33387[(1)] = cljs.core.first((state_31114[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33388 = state_31114;
state_31114 = G__33388;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29834__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29834__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29834__auto____0;
cljs$core$async$reduce_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29834__auto____1;
return cljs$core$async$reduce_$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31151 = f__30193__auto__();
(statearr_31151[(6)] = c__30192__auto__);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (1))){
var inst_31157 = cljs.core.async.reduce(f__$1,init,ch);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31162__$1,(2),inst_31157);
} else {
if((state_val_31163 === (2))){
var inst_31159 = (state_31162[(2)]);
var inst_31160 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31159) : f__$1.call(null,inst_31159));
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31162__$1,inst_31160);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29834__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29834__auto____0 = (function (){
var statearr_31166 = [null,null,null,null,null,null,null];
(statearr_31166[(0)] = cljs$core$async$transduce_$_state_machine__29834__auto__);

(statearr_31166[(1)] = (1));

return statearr_31166;
});
var cljs$core$async$transduce_$_state_machine__29834__auto____1 = (function (state_31162){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_31162);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e31167){var ex__29837__auto__ = e31167;
var statearr_31168_33390 = state_31162;
(statearr_31168_33390[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_31162[(4)]))){
var statearr_31169_33391 = state_31162;
(statearr_31169_33391[(1)] = cljs.core.first((state_31162[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33392 = state_31162;
state_31162 = G__33392;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29834__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29834__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29834__auto____0;
cljs$core$async$transduce_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29834__auto____1;
return cljs$core$async$transduce_$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31177 = f__30193__auto__();
(statearr_31177[(6)] = c__30192__auto__);

return statearr_31177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31194 = arguments.length;
switch (G__31194) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_31226){
var state_val_31227 = (state_31226[(1)]);
if((state_val_31227 === (7))){
var inst_31208 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31233_33394 = state_31226__$1;
(statearr_31233_33394[(2)] = inst_31208);

(statearr_31233_33394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (1))){
var inst_31202 = cljs.core.seq(coll);
var inst_31203 = inst_31202;
var state_31226__$1 = (function (){var statearr_31238 = state_31226;
(statearr_31238[(7)] = inst_31203);

return statearr_31238;
})();
var statearr_31239_33395 = state_31226__$1;
(statearr_31239_33395[(2)] = null);

(statearr_31239_33395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (4))){
var inst_31203 = (state_31226[(7)]);
var inst_31206 = cljs.core.first(inst_31203);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31226__$1,(7),ch,inst_31206);
} else {
if((state_val_31227 === (13))){
var inst_31220 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31241_33403 = state_31226__$1;
(statearr_31241_33403[(2)] = inst_31220);

(statearr_31241_33403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (6))){
var inst_31211 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31211)){
var statearr_31242_33404 = state_31226__$1;
(statearr_31242_33404[(1)] = (8));

} else {
var statearr_31243_33405 = state_31226__$1;
(statearr_31243_33405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (3))){
var inst_31224 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31226__$1,inst_31224);
} else {
if((state_val_31227 === (12))){
var state_31226__$1 = state_31226;
var statearr_31244_33406 = state_31226__$1;
(statearr_31244_33406[(2)] = null);

(statearr_31244_33406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (2))){
var inst_31203 = (state_31226[(7)]);
var state_31226__$1 = state_31226;
if(cljs.core.truth_(inst_31203)){
var statearr_31245_33407 = state_31226__$1;
(statearr_31245_33407[(1)] = (4));

} else {
var statearr_31246_33408 = state_31226__$1;
(statearr_31246_33408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (11))){
var inst_31217 = cljs.core.async.close_BANG_(ch);
var state_31226__$1 = state_31226;
var statearr_31247_33410 = state_31226__$1;
(statearr_31247_33410[(2)] = inst_31217);

(statearr_31247_33410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (9))){
var state_31226__$1 = state_31226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31248_33411 = state_31226__$1;
(statearr_31248_33411[(1)] = (11));

} else {
var statearr_31249_33412 = state_31226__$1;
(statearr_31249_33412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (5))){
var inst_31203 = (state_31226[(7)]);
var state_31226__$1 = state_31226;
var statearr_31250_33413 = state_31226__$1;
(statearr_31250_33413[(2)] = inst_31203);

(statearr_31250_33413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (10))){
var inst_31222 = (state_31226[(2)]);
var state_31226__$1 = state_31226;
var statearr_31251_33414 = state_31226__$1;
(statearr_31251_33414[(2)] = inst_31222);

(statearr_31251_33414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31227 === (8))){
var inst_31203 = (state_31226[(7)]);
var inst_31213 = cljs.core.next(inst_31203);
var inst_31203__$1 = inst_31213;
var state_31226__$1 = (function (){var statearr_31253 = state_31226;
(statearr_31253[(7)] = inst_31203__$1);

return statearr_31253;
})();
var statearr_31254_33415 = state_31226__$1;
(statearr_31254_33415[(2)] = null);

(statearr_31254_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_31255 = [null,null,null,null,null,null,null,null];
(statearr_31255[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_31255[(1)] = (1));

return statearr_31255;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_31226){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_31226);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e31256){var ex__29837__auto__ = e31256;
var statearr_31257_33420 = state_31226;
(statearr_31257_33420[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_31226[(4)]))){
var statearr_31258_33421 = state_31226;
(statearr_31258_33421[(1)] = cljs.core.first((state_31226[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33422 = state_31226;
state_31226 = G__33422;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_31226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_31226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31259 = f__30193__auto__();
(statearr_31259[(6)] = c__30192__auto__);

return statearr_31259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31262 = arguments.length;
switch (G__31262) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33426 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33426(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33435 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33435(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33437 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33437(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33438 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33438(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31312 = (function (ch,cs,meta31313){
this.ch = ch;
this.cs = cs;
this.meta31313 = meta31313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31314,meta31313__$1){
var self__ = this;
var _31314__$1 = this;
return (new cljs.core.async.t_cljs$core$async31312(self__.ch,self__.cs,meta31313__$1));
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31314){
var self__ = this;
var _31314__$1 = this;
return self__.meta31313;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31313","meta31313",1791549257,null)], null);
}));

(cljs.core.async.t_cljs$core$async31312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31312");

(cljs.core.async.t_cljs$core$async31312.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31312.
 */
cljs.core.async.__GT_t_cljs$core$async31312 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31312(ch__$1,cs__$1,meta31313){
return (new cljs.core.async.t_cljs$core$async31312(ch__$1,cs__$1,meta31313));
});

}

return (new cljs.core.async.t_cljs$core$async31312(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30192__auto___33453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_31550){
var state_val_31551 = (state_31550[(1)]);
if((state_val_31551 === (7))){
var inst_31546 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31596_33454 = state_31550__$1;
(statearr_31596_33454[(2)] = inst_31546);

(statearr_31596_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (20))){
var inst_31419 = (state_31550[(7)]);
var inst_31431 = cljs.core.first(inst_31419);
var inst_31432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31431,(0),null);
var inst_31434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31431,(1),null);
var state_31550__$1 = (function (){var statearr_31597 = state_31550;
(statearr_31597[(8)] = inst_31432);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31434)){
var statearr_31598_33459 = state_31550__$1;
(statearr_31598_33459[(1)] = (22));

} else {
var statearr_31599_33460 = state_31550__$1;
(statearr_31599_33460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (27))){
var inst_31469 = (state_31550[(9)]);
var inst_31464 = (state_31550[(10)]);
var inst_31462 = (state_31550[(11)]);
var inst_31366 = (state_31550[(12)]);
var inst_31469__$1 = cljs.core._nth(inst_31462,inst_31464);
var inst_31470 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31469__$1,inst_31366,done);
var state_31550__$1 = (function (){var statearr_31613 = state_31550;
(statearr_31613[(9)] = inst_31469__$1);

return statearr_31613;
})();
if(cljs.core.truth_(inst_31470)){
var statearr_31614_33462 = state_31550__$1;
(statearr_31614_33462[(1)] = (30));

} else {
var statearr_31615_33463 = state_31550__$1;
(statearr_31615_33463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (1))){
var state_31550__$1 = state_31550;
var statearr_31617_33467 = state_31550__$1;
(statearr_31617_33467[(2)] = null);

(statearr_31617_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (24))){
var inst_31419 = (state_31550[(7)]);
var inst_31439 = (state_31550[(2)]);
var inst_31440 = cljs.core.next(inst_31419);
var inst_31375 = inst_31440;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31550__$1 = (function (){var statearr_31618 = state_31550;
(statearr_31618[(13)] = inst_31375);

(statearr_31618[(14)] = inst_31439);

(statearr_31618[(15)] = inst_31378);

(statearr_31618[(16)] = inst_31376);

(statearr_31618[(17)] = inst_31377);

return statearr_31618;
})();
var statearr_31619_33469 = state_31550__$1;
(statearr_31619_33469[(2)] = null);

(statearr_31619_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (39))){
var state_31550__$1 = state_31550;
var statearr_31624_33470 = state_31550__$1;
(statearr_31624_33470[(2)] = null);

(statearr_31624_33470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (4))){
var inst_31366 = (state_31550[(12)]);
var inst_31366__$1 = (state_31550[(2)]);
var inst_31367 = (inst_31366__$1 == null);
var state_31550__$1 = (function (){var statearr_31625 = state_31550;
(statearr_31625[(12)] = inst_31366__$1);

return statearr_31625;
})();
if(cljs.core.truth_(inst_31367)){
var statearr_31626_33471 = state_31550__$1;
(statearr_31626_33471[(1)] = (5));

} else {
var statearr_31627_33472 = state_31550__$1;
(statearr_31627_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (15))){
var inst_31375 = (state_31550[(13)]);
var inst_31378 = (state_31550[(15)]);
var inst_31376 = (state_31550[(16)]);
var inst_31377 = (state_31550[(17)]);
var inst_31393 = (state_31550[(2)]);
var inst_31414 = (inst_31378 + (1));
var tmp31620 = inst_31375;
var tmp31621 = inst_31376;
var tmp31622 = inst_31377;
var inst_31375__$1 = tmp31620;
var inst_31376__$1 = tmp31621;
var inst_31377__$1 = tmp31622;
var inst_31378__$1 = inst_31414;
var state_31550__$1 = (function (){var statearr_31628 = state_31550;
(statearr_31628[(13)] = inst_31375__$1);

(statearr_31628[(18)] = inst_31393);

(statearr_31628[(15)] = inst_31378__$1);

(statearr_31628[(16)] = inst_31376__$1);

(statearr_31628[(17)] = inst_31377__$1);

return statearr_31628;
})();
var statearr_31629_33474 = state_31550__$1;
(statearr_31629_33474[(2)] = null);

(statearr_31629_33474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (21))){
var inst_31443 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31633_33475 = state_31550__$1;
(statearr_31633_33475[(2)] = inst_31443);

(statearr_31633_33475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (31))){
var inst_31469 = (state_31550[(9)]);
var inst_31473 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31469);
var state_31550__$1 = state_31550;
var statearr_31634_33476 = state_31550__$1;
(statearr_31634_33476[(2)] = inst_31473);

(statearr_31634_33476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (32))){
var inst_31461 = (state_31550[(19)]);
var inst_31464 = (state_31550[(10)]);
var inst_31462 = (state_31550[(11)]);
var inst_31463 = (state_31550[(20)]);
var inst_31475 = (state_31550[(2)]);
var inst_31476 = (inst_31464 + (1));
var tmp31630 = inst_31461;
var tmp31631 = inst_31462;
var tmp31632 = inst_31463;
var inst_31461__$1 = tmp31630;
var inst_31462__$1 = tmp31631;
var inst_31463__$1 = tmp31632;
var inst_31464__$1 = inst_31476;
var state_31550__$1 = (function (){var statearr_31635 = state_31550;
(statearr_31635[(19)] = inst_31461__$1);

(statearr_31635[(10)] = inst_31464__$1);

(statearr_31635[(21)] = inst_31475);

(statearr_31635[(11)] = inst_31462__$1);

(statearr_31635[(20)] = inst_31463__$1);

return statearr_31635;
})();
var statearr_31636_33485 = state_31550__$1;
(statearr_31636_33485[(2)] = null);

(statearr_31636_33485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (40))){
var inst_31519 = (state_31550[(22)]);
var inst_31523 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31519);
var state_31550__$1 = state_31550;
var statearr_31638_33489 = state_31550__$1;
(statearr_31638_33489[(2)] = inst_31523);

(statearr_31638_33489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (33))){
var inst_31479 = (state_31550[(23)]);
var inst_31481 = cljs.core.chunked_seq_QMARK_(inst_31479);
var state_31550__$1 = state_31550;
if(inst_31481){
var statearr_31642_33491 = state_31550__$1;
(statearr_31642_33491[(1)] = (36));

} else {
var statearr_31643_33492 = state_31550__$1;
(statearr_31643_33492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (13))){
var inst_31387 = (state_31550[(24)]);
var inst_31390 = cljs.core.async.close_BANG_(inst_31387);
var state_31550__$1 = state_31550;
var statearr_31644_33493 = state_31550__$1;
(statearr_31644_33493[(2)] = inst_31390);

(statearr_31644_33493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (22))){
var inst_31432 = (state_31550[(8)]);
var inst_31436 = cljs.core.async.close_BANG_(inst_31432);
var state_31550__$1 = state_31550;
var statearr_31693_33494 = state_31550__$1;
(statearr_31693_33494[(2)] = inst_31436);

(statearr_31693_33494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (36))){
var inst_31479 = (state_31550[(23)]);
var inst_31514 = cljs.core.chunk_first(inst_31479);
var inst_31515 = cljs.core.chunk_rest(inst_31479);
var inst_31516 = cljs.core.count(inst_31514);
var inst_31461 = inst_31515;
var inst_31462 = inst_31514;
var inst_31463 = inst_31516;
var inst_31464 = (0);
var state_31550__$1 = (function (){var statearr_31697 = state_31550;
(statearr_31697[(19)] = inst_31461);

(statearr_31697[(10)] = inst_31464);

(statearr_31697[(11)] = inst_31462);

(statearr_31697[(20)] = inst_31463);

return statearr_31697;
})();
var statearr_31698_33499 = state_31550__$1;
(statearr_31698_33499[(2)] = null);

(statearr_31698_33499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (41))){
var inst_31479 = (state_31550[(23)]);
var inst_31525 = (state_31550[(2)]);
var inst_31526 = cljs.core.next(inst_31479);
var inst_31461 = inst_31526;
var inst_31462 = null;
var inst_31463 = (0);
var inst_31464 = (0);
var state_31550__$1 = (function (){var statearr_31737 = state_31550;
(statearr_31737[(25)] = inst_31525);

(statearr_31737[(19)] = inst_31461);

(statearr_31737[(10)] = inst_31464);

(statearr_31737[(11)] = inst_31462);

(statearr_31737[(20)] = inst_31463);

return statearr_31737;
})();
var statearr_31738_33500 = state_31550__$1;
(statearr_31738_33500[(2)] = null);

(statearr_31738_33500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (43))){
var state_31550__$1 = state_31550;
var statearr_31740_33504 = state_31550__$1;
(statearr_31740_33504[(2)] = null);

(statearr_31740_33504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (29))){
var inst_31534 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31741_33506 = state_31550__$1;
(statearr_31741_33506[(2)] = inst_31534);

(statearr_31741_33506[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (44))){
var inst_31543 = (state_31550[(2)]);
var state_31550__$1 = (function (){var statearr_31742 = state_31550;
(statearr_31742[(26)] = inst_31543);

return statearr_31742;
})();
var statearr_31743_33507 = state_31550__$1;
(statearr_31743_33507[(2)] = null);

(statearr_31743_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (6))){
var inst_31453 = (state_31550[(27)]);
var inst_31452 = cljs.core.deref(cs);
var inst_31453__$1 = cljs.core.keys(inst_31452);
var inst_31454 = cljs.core.count(inst_31453__$1);
var inst_31455 = cljs.core.reset_BANG_(dctr,inst_31454);
var inst_31460 = cljs.core.seq(inst_31453__$1);
var inst_31461 = inst_31460;
var inst_31462 = null;
var inst_31463 = (0);
var inst_31464 = (0);
var state_31550__$1 = (function (){var statearr_31747 = state_31550;
(statearr_31747[(19)] = inst_31461);

(statearr_31747[(27)] = inst_31453__$1);

(statearr_31747[(10)] = inst_31464);

(statearr_31747[(11)] = inst_31462);

(statearr_31747[(20)] = inst_31463);

(statearr_31747[(28)] = inst_31455);

return statearr_31747;
})();
var statearr_31748_33512 = state_31550__$1;
(statearr_31748_33512[(2)] = null);

(statearr_31748_33512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (28))){
var inst_31461 = (state_31550[(19)]);
var inst_31479 = (state_31550[(23)]);
var inst_31479__$1 = cljs.core.seq(inst_31461);
var state_31550__$1 = (function (){var statearr_31751 = state_31550;
(statearr_31751[(23)] = inst_31479__$1);

return statearr_31751;
})();
if(inst_31479__$1){
var statearr_31752_33514 = state_31550__$1;
(statearr_31752_33514[(1)] = (33));

} else {
var statearr_31753_33515 = state_31550__$1;
(statearr_31753_33515[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (25))){
var inst_31464 = (state_31550[(10)]);
var inst_31463 = (state_31550[(20)]);
var inst_31466 = (inst_31464 < inst_31463);
var inst_31467 = inst_31466;
var state_31550__$1 = state_31550;
if(cljs.core.truth_(inst_31467)){
var statearr_31754_33517 = state_31550__$1;
(statearr_31754_33517[(1)] = (27));

} else {
var statearr_31758_33518 = state_31550__$1;
(statearr_31758_33518[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (34))){
var state_31550__$1 = state_31550;
var statearr_31759_33519 = state_31550__$1;
(statearr_31759_33519[(2)] = null);

(statearr_31759_33519[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (17))){
var state_31550__$1 = state_31550;
var statearr_31760_33520 = state_31550__$1;
(statearr_31760_33520[(2)] = null);

(statearr_31760_33520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (3))){
var inst_31548 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31550__$1,inst_31548);
} else {
if((state_val_31551 === (12))){
var inst_31448 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31763_33521 = state_31550__$1;
(statearr_31763_33521[(2)] = inst_31448);

(statearr_31763_33521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (2))){
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31550__$1,(4),ch);
} else {
if((state_val_31551 === (23))){
var state_31550__$1 = state_31550;
var statearr_31775_33522 = state_31550__$1;
(statearr_31775_33522[(2)] = null);

(statearr_31775_33522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (35))){
var inst_31532 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31776_33523 = state_31550__$1;
(statearr_31776_33523[(2)] = inst_31532);

(statearr_31776_33523[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (19))){
var inst_31419 = (state_31550[(7)]);
var inst_31423 = cljs.core.chunk_first(inst_31419);
var inst_31424 = cljs.core.chunk_rest(inst_31419);
var inst_31425 = cljs.core.count(inst_31423);
var inst_31375 = inst_31424;
var inst_31376 = inst_31423;
var inst_31377 = inst_31425;
var inst_31378 = (0);
var state_31550__$1 = (function (){var statearr_31777 = state_31550;
(statearr_31777[(13)] = inst_31375);

(statearr_31777[(15)] = inst_31378);

(statearr_31777[(16)] = inst_31376);

(statearr_31777[(17)] = inst_31377);

return statearr_31777;
})();
var statearr_31778_33524 = state_31550__$1;
(statearr_31778_33524[(2)] = null);

(statearr_31778_33524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (11))){
var inst_31419 = (state_31550[(7)]);
var inst_31375 = (state_31550[(13)]);
var inst_31419__$1 = cljs.core.seq(inst_31375);
var state_31550__$1 = (function (){var statearr_31779 = state_31550;
(statearr_31779[(7)] = inst_31419__$1);

return statearr_31779;
})();
if(inst_31419__$1){
var statearr_31780_33525 = state_31550__$1;
(statearr_31780_33525[(1)] = (16));

} else {
var statearr_31781_33526 = state_31550__$1;
(statearr_31781_33526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (9))){
var inst_31450 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31782_33527 = state_31550__$1;
(statearr_31782_33527[(2)] = inst_31450);

(statearr_31782_33527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (5))){
var inst_31373 = cljs.core.deref(cs);
var inst_31374 = cljs.core.seq(inst_31373);
var inst_31375 = inst_31374;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31550__$1 = (function (){var statearr_31783 = state_31550;
(statearr_31783[(13)] = inst_31375);

(statearr_31783[(15)] = inst_31378);

(statearr_31783[(16)] = inst_31376);

(statearr_31783[(17)] = inst_31377);

return statearr_31783;
})();
var statearr_31784_33528 = state_31550__$1;
(statearr_31784_33528[(2)] = null);

(statearr_31784_33528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (14))){
var state_31550__$1 = state_31550;
var statearr_31785_33529 = state_31550__$1;
(statearr_31785_33529[(2)] = null);

(statearr_31785_33529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (45))){
var inst_31540 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31786_33530 = state_31550__$1;
(statearr_31786_33530[(2)] = inst_31540);

(statearr_31786_33530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (26))){
var inst_31453 = (state_31550[(27)]);
var inst_31536 = (state_31550[(2)]);
var inst_31537 = cljs.core.seq(inst_31453);
var state_31550__$1 = (function (){var statearr_31787 = state_31550;
(statearr_31787[(29)] = inst_31536);

return statearr_31787;
})();
if(inst_31537){
var statearr_31788_33539 = state_31550__$1;
(statearr_31788_33539[(1)] = (42));

} else {
var statearr_31789_33543 = state_31550__$1;
(statearr_31789_33543[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (16))){
var inst_31419 = (state_31550[(7)]);
var inst_31421 = cljs.core.chunked_seq_QMARK_(inst_31419);
var state_31550__$1 = state_31550;
if(inst_31421){
var statearr_31799_33544 = state_31550__$1;
(statearr_31799_33544[(1)] = (19));

} else {
var statearr_31800_33545 = state_31550__$1;
(statearr_31800_33545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (38))){
var inst_31529 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31801_33546 = state_31550__$1;
(statearr_31801_33546[(2)] = inst_31529);

(statearr_31801_33546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (30))){
var state_31550__$1 = state_31550;
var statearr_31806_33547 = state_31550__$1;
(statearr_31806_33547[(2)] = null);

(statearr_31806_33547[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (10))){
var inst_31378 = (state_31550[(15)]);
var inst_31376 = (state_31550[(16)]);
var inst_31386 = cljs.core._nth(inst_31376,inst_31378);
var inst_31387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31386,(0),null);
var inst_31388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31386,(1),null);
var state_31550__$1 = (function (){var statearr_31807 = state_31550;
(statearr_31807[(24)] = inst_31387);

return statearr_31807;
})();
if(cljs.core.truth_(inst_31388)){
var statearr_31808_33551 = state_31550__$1;
(statearr_31808_33551[(1)] = (13));

} else {
var statearr_31809_33552 = state_31550__$1;
(statearr_31809_33552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (18))){
var inst_31446 = (state_31550[(2)]);
var state_31550__$1 = state_31550;
var statearr_31810_33553 = state_31550__$1;
(statearr_31810_33553[(2)] = inst_31446);

(statearr_31810_33553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (42))){
var state_31550__$1 = state_31550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31550__$1,(45),dchan);
} else {
if((state_val_31551 === (37))){
var inst_31366 = (state_31550[(12)]);
var inst_31519 = (state_31550[(22)]);
var inst_31479 = (state_31550[(23)]);
var inst_31519__$1 = cljs.core.first(inst_31479);
var inst_31520 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31519__$1,inst_31366,done);
var state_31550__$1 = (function (){var statearr_31811 = state_31550;
(statearr_31811[(22)] = inst_31519__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31520)){
var statearr_31812_33558 = state_31550__$1;
(statearr_31812_33558[(1)] = (39));

} else {
var statearr_31813_33559 = state_31550__$1;
(statearr_31813_33559[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31551 === (8))){
var inst_31378 = (state_31550[(15)]);
var inst_31377 = (state_31550[(17)]);
var inst_31380 = (inst_31378 < inst_31377);
var inst_31381 = inst_31380;
var state_31550__$1 = state_31550;
if(cljs.core.truth_(inst_31381)){
var statearr_31814_33563 = state_31550__$1;
(statearr_31814_33563[(1)] = (10));

} else {
var statearr_31815_33564 = state_31550__$1;
(statearr_31815_33564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29834__auto__ = null;
var cljs$core$async$mult_$_state_machine__29834__auto____0 = (function (){
var statearr_31816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31816[(0)] = cljs$core$async$mult_$_state_machine__29834__auto__);

(statearr_31816[(1)] = (1));

return statearr_31816;
});
var cljs$core$async$mult_$_state_machine__29834__auto____1 = (function (state_31550){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_31550);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e31817){var ex__29837__auto__ = e31817;
var statearr_31818_33565 = state_31550;
(statearr_31818_33565[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_31550[(4)]))){
var statearr_31819_33566 = state_31550;
(statearr_31819_33566[(1)] = cljs.core.first((state_31550[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33571 = state_31550;
state_31550 = G__33571;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29834__auto__ = function(state_31550){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29834__auto____1.call(this,state_31550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29834__auto____0;
cljs$core$async$mult_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29834__auto____1;
return cljs$core$async$mult_$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31820 = f__30193__auto__();
(statearr_31820[(6)] = c__30192__auto___33453);

return statearr_31820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31833 = arguments.length;
switch (G__31833) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33580 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33580(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33582 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33582(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33586 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33586(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33590 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33590(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33591 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33591(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33592 = arguments.length;
var i__4865__auto___33594 = (0);
while(true){
if((i__4865__auto___33594 < len__4864__auto___33592)){
args__4870__auto__.push((arguments[i__4865__auto___33594]));

var G__33595 = (i__4865__auto___33594 + (1));
i__4865__auto___33594 = G__33595;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31851){
var map__31852 = p__31851;
var map__31852__$1 = cljs.core.__destructure_map(map__31852);
var opts = map__31852__$1;
var statearr_31853_33596 = state;
(statearr_31853_33596[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31854_33597 = state;
(statearr_31854_33597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31855_33598 = state;
(statearr_31855_33598[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31844){
var G__31845 = cljs.core.first(seq31844);
var seq31844__$1 = cljs.core.next(seq31844);
var G__31846 = cljs.core.first(seq31844__$1);
var seq31844__$2 = cljs.core.next(seq31844__$1);
var G__31847 = cljs.core.first(seq31844__$2);
var seq31844__$3 = cljs.core.next(seq31844__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31845,G__31846,G__31847,seq31844__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31891 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31892){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31892 = meta31892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31893,meta31892__$1){
var self__ = this;
var _31893__$1 = this;
return (new cljs.core.async.t_cljs$core$async31891(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31892__$1));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31893){
var self__ = this;
var _31893__$1 = this;
return self__.meta31892;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31892","meta31892",1426580882,null)], null);
}));

(cljs.core.async.t_cljs$core$async31891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31891");

(cljs.core.async.t_cljs$core$async31891.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31891.
 */
cljs.core.async.__GT_t_cljs$core$async31891 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31891(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31892){
return (new cljs.core.async.t_cljs$core$async31891(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31892));
});

}

return (new cljs.core.async.t_cljs$core$async31891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30192__auto___33599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32064){
var state_val_32072 = (state_32064[(1)]);
if((state_val_32072 === (7))){
var inst_32006 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
if(cljs.core.truth_(inst_32006)){
var statearr_32080_33600 = state_32064__$1;
(statearr_32080_33600[(1)] = (8));

} else {
var statearr_32081_33601 = state_32064__$1;
(statearr_32081_33601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (20))){
var inst_31999 = (state_32064[(7)]);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32064__$1,(23),out,inst_31999);
} else {
if((state_val_32072 === (1))){
var inst_31975 = calc_state();
var inst_31976 = cljs.core.__destructure_map(inst_31975);
var inst_31977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31976,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31976,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31976,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31985 = inst_31975;
var state_32064__$1 = (function (){var statearr_32082 = state_32064;
(statearr_32082[(8)] = inst_31977);

(statearr_32082[(9)] = inst_31982);

(statearr_32082[(10)] = inst_31985);

(statearr_32082[(11)] = inst_31983);

return statearr_32082;
})();
var statearr_32083_33602 = state_32064__$1;
(statearr_32083_33602[(2)] = null);

(statearr_32083_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (24))){
var inst_31990 = (state_32064[(12)]);
var inst_31985 = inst_31990;
var state_32064__$1 = (function (){var statearr_32085 = state_32064;
(statearr_32085[(10)] = inst_31985);

return statearr_32085;
})();
var statearr_32086_33603 = state_32064__$1;
(statearr_32086_33603[(2)] = null);

(statearr_32086_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (4))){
var inst_31999 = (state_32064[(7)]);
var inst_32001 = (state_32064[(13)]);
var inst_31998 = (state_32064[(2)]);
var inst_31999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31998,(0),null);
var inst_32000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31998,(1),null);
var inst_32001__$1 = (inst_31999__$1 == null);
var state_32064__$1 = (function (){var statearr_32088 = state_32064;
(statearr_32088[(14)] = inst_32000);

(statearr_32088[(7)] = inst_31999__$1);

(statearr_32088[(13)] = inst_32001__$1);

return statearr_32088;
})();
if(cljs.core.truth_(inst_32001__$1)){
var statearr_32090_33604 = state_32064__$1;
(statearr_32090_33604[(1)] = (5));

} else {
var statearr_32092_33605 = state_32064__$1;
(statearr_32092_33605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (15))){
var inst_32026 = (state_32064[(15)]);
var inst_31991 = (state_32064[(16)]);
var inst_32026__$1 = cljs.core.empty_QMARK_(inst_31991);
var state_32064__$1 = (function (){var statearr_32097 = state_32064;
(statearr_32097[(15)] = inst_32026__$1);

return statearr_32097;
})();
if(inst_32026__$1){
var statearr_32100_33606 = state_32064__$1;
(statearr_32100_33606[(1)] = (17));

} else {
var statearr_32101_33607 = state_32064__$1;
(statearr_32101_33607[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (21))){
var inst_31990 = (state_32064[(12)]);
var inst_31985 = inst_31990;
var state_32064__$1 = (function (){var statearr_32102 = state_32064;
(statearr_32102[(10)] = inst_31985);

return statearr_32102;
})();
var statearr_32103_33608 = state_32064__$1;
(statearr_32103_33608[(2)] = null);

(statearr_32103_33608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (13))){
var inst_32013 = (state_32064[(2)]);
var inst_32015 = calc_state();
var inst_31985 = inst_32015;
var state_32064__$1 = (function (){var statearr_32108 = state_32064;
(statearr_32108[(17)] = inst_32013);

(statearr_32108[(10)] = inst_31985);

return statearr_32108;
})();
var statearr_32109_33609 = state_32064__$1;
(statearr_32109_33609[(2)] = null);

(statearr_32109_33609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (22))){
var inst_32052 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32112_33610 = state_32064__$1;
(statearr_32112_33610[(2)] = inst_32052);

(statearr_32112_33610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (6))){
var inst_32000 = (state_32064[(14)]);
var inst_32004 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32000,change);
var state_32064__$1 = state_32064;
var statearr_32113_33611 = state_32064__$1;
(statearr_32113_33611[(2)] = inst_32004);

(statearr_32113_33611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (25))){
var state_32064__$1 = state_32064;
var statearr_32114_33612 = state_32064__$1;
(statearr_32114_33612[(2)] = null);

(statearr_32114_33612[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (17))){
var inst_32000 = (state_32064[(14)]);
var inst_31992 = (state_32064[(18)]);
var inst_32032 = (inst_31992.cljs$core$IFn$_invoke$arity$1 ? inst_31992.cljs$core$IFn$_invoke$arity$1(inst_32000) : inst_31992.call(null,inst_32000));
var inst_32033 = cljs.core.not(inst_32032);
var state_32064__$1 = state_32064;
var statearr_32115_33613 = state_32064__$1;
(statearr_32115_33613[(2)] = inst_32033);

(statearr_32115_33613[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (3))){
var inst_32056 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32064__$1,inst_32056);
} else {
if((state_val_32072 === (12))){
var state_32064__$1 = state_32064;
var statearr_32119_33614 = state_32064__$1;
(statearr_32119_33614[(2)] = null);

(statearr_32119_33614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (2))){
var inst_31990 = (state_32064[(12)]);
var inst_31985 = (state_32064[(10)]);
var inst_31990__$1 = cljs.core.__destructure_map(inst_31985);
var inst_31991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32064__$1 = (function (){var statearr_32142 = state_32064;
(statearr_32142[(18)] = inst_31992);

(statearr_32142[(16)] = inst_31991);

(statearr_32142[(12)] = inst_31990__$1);

return statearr_32142;
})();
return cljs.core.async.ioc_alts_BANG_(state_32064__$1,(4),inst_31993);
} else {
if((state_val_32072 === (23))){
var inst_32043 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
if(cljs.core.truth_(inst_32043)){
var statearr_32161_33615 = state_32064__$1;
(statearr_32161_33615[(1)] = (24));

} else {
var statearr_32162_33616 = state_32064__$1;
(statearr_32162_33616[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (19))){
var inst_32036 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32163_33617 = state_32064__$1;
(statearr_32163_33617[(2)] = inst_32036);

(statearr_32163_33617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (11))){
var inst_32000 = (state_32064[(14)]);
var inst_32010 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32000);
var state_32064__$1 = state_32064;
var statearr_32164_33619 = state_32064__$1;
(statearr_32164_33619[(2)] = inst_32010);

(statearr_32164_33619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (9))){
var inst_32000 = (state_32064[(14)]);
var inst_32018 = (state_32064[(19)]);
var inst_31991 = (state_32064[(16)]);
var inst_32018__$1 = (inst_31991.cljs$core$IFn$_invoke$arity$1 ? inst_31991.cljs$core$IFn$_invoke$arity$1(inst_32000) : inst_31991.call(null,inst_32000));
var state_32064__$1 = (function (){var statearr_32166 = state_32064;
(statearr_32166[(19)] = inst_32018__$1);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32018__$1)){
var statearr_32168_33621 = state_32064__$1;
(statearr_32168_33621[(1)] = (14));

} else {
var statearr_32181_33622 = state_32064__$1;
(statearr_32181_33622[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (5))){
var inst_32001 = (state_32064[(13)]);
var state_32064__$1 = state_32064;
var statearr_32182_33623 = state_32064__$1;
(statearr_32182_33623[(2)] = inst_32001);

(statearr_32182_33623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (14))){
var inst_32018 = (state_32064[(19)]);
var state_32064__$1 = state_32064;
var statearr_32183_33624 = state_32064__$1;
(statearr_32183_33624[(2)] = inst_32018);

(statearr_32183_33624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (26))){
var inst_32048 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32184_33625 = state_32064__$1;
(statearr_32184_33625[(2)] = inst_32048);

(statearr_32184_33625[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (16))){
var inst_32038 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
if(cljs.core.truth_(inst_32038)){
var statearr_32185_33626 = state_32064__$1;
(statearr_32185_33626[(1)] = (20));

} else {
var statearr_32186_33627 = state_32064__$1;
(statearr_32186_33627[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (10))){
var inst_32054 = (state_32064[(2)]);
var state_32064__$1 = state_32064;
var statearr_32191_33628 = state_32064__$1;
(statearr_32191_33628[(2)] = inst_32054);

(statearr_32191_33628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (18))){
var inst_32026 = (state_32064[(15)]);
var state_32064__$1 = state_32064;
var statearr_32192_33629 = state_32064__$1;
(statearr_32192_33629[(2)] = inst_32026);

(statearr_32192_33629[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (8))){
var inst_31999 = (state_32064[(7)]);
var inst_32008 = (inst_31999 == null);
var state_32064__$1 = state_32064;
if(cljs.core.truth_(inst_32008)){
var statearr_32193_33630 = state_32064__$1;
(statearr_32193_33630[(1)] = (11));

} else {
var statearr_32194_33631 = state_32064__$1;
(statearr_32194_33631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29834__auto__ = null;
var cljs$core$async$mix_$_state_machine__29834__auto____0 = (function (){
var statearr_32196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32196[(0)] = cljs$core$async$mix_$_state_machine__29834__auto__);

(statearr_32196[(1)] = (1));

return statearr_32196;
});
var cljs$core$async$mix_$_state_machine__29834__auto____1 = (function (state_32064){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32064);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32198){var ex__29837__auto__ = e32198;
var statearr_32199_33632 = state_32064;
(statearr_32199_33632[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32064[(4)]))){
var statearr_32200_33633 = state_32064;
(statearr_32200_33633[(1)] = cljs.core.first((state_32064[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33634 = state_32064;
state_32064 = G__33634;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29834__auto__ = function(state_32064){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29834__auto____1.call(this,state_32064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29834__auto____0;
cljs$core$async$mix_$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29834__auto____1;
return cljs$core$async$mix_$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32201 = f__30193__auto__();
(statearr_32201[(6)] = c__30192__auto___33599);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33637 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33637(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33638 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33638(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33639 = (function() {
var G__33640 = null;
var G__33640__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33640__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33640 = function(p,v){
switch(arguments.length){
case 1:
return G__33640__1.call(this,p);
case 2:
return G__33640__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33640.cljs$core$IFn$_invoke$arity$1 = G__33640__1;
G__33640.cljs$core$IFn$_invoke$arity$2 = G__33640__2;
return G__33640;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33639(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33639(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32239 = arguments.length;
switch (G__32239) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32237_SHARP_){
if(cljs.core.truth_((p1__32237_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32237_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32237_SHARP_.call(null,topic)))){
return p1__32237_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32237_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32244 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32245){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32245 = meta32245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32246,meta32245__$1){
var self__ = this;
var _32246__$1 = this;
return (new cljs.core.async.t_cljs$core$async32244(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32245__$1));
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32246){
var self__ = this;
var _32246__$1 = this;
return self__.meta32245;
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32245","meta32245",-1286814908,null)], null);
}));

(cljs.core.async.t_cljs$core$async32244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32244");

(cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32244.
 */
cljs.core.async.__GT_t_cljs$core$async32244 = (function cljs$core$async$__GT_t_cljs$core$async32244(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32245){
return (new cljs.core.async.t_cljs$core$async32244(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32245));
});

}

return (new cljs.core.async.t_cljs$core$async32244(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30192__auto___33647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32372){
var state_val_32373 = (state_32372[(1)]);
if((state_val_32373 === (7))){
var inst_32368 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32374_33651 = state_32372__$1;
(statearr_32374_33651[(2)] = inst_32368);

(statearr_32374_33651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (20))){
var state_32372__$1 = state_32372;
var statearr_32375_33652 = state_32372__$1;
(statearr_32375_33652[(2)] = null);

(statearr_32375_33652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (1))){
var state_32372__$1 = state_32372;
var statearr_32376_33653 = state_32372__$1;
(statearr_32376_33653[(2)] = null);

(statearr_32376_33653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (24))){
var inst_32351 = (state_32372[(7)]);
var inst_32360 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32351);
var state_32372__$1 = state_32372;
var statearr_32377_33655 = state_32372__$1;
(statearr_32377_33655[(2)] = inst_32360);

(statearr_32377_33655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (4))){
var inst_32283 = (state_32372[(8)]);
var inst_32283__$1 = (state_32372[(2)]);
var inst_32284 = (inst_32283__$1 == null);
var state_32372__$1 = (function (){var statearr_32378 = state_32372;
(statearr_32378[(8)] = inst_32283__$1);

return statearr_32378;
})();
if(cljs.core.truth_(inst_32284)){
var statearr_32379_33656 = state_32372__$1;
(statearr_32379_33656[(1)] = (5));

} else {
var statearr_32380_33657 = state_32372__$1;
(statearr_32380_33657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (15))){
var inst_32345 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32381_33658 = state_32372__$1;
(statearr_32381_33658[(2)] = inst_32345);

(statearr_32381_33658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (21))){
var inst_32365 = (state_32372[(2)]);
var state_32372__$1 = (function (){var statearr_32382 = state_32372;
(statearr_32382[(9)] = inst_32365);

return statearr_32382;
})();
var statearr_32383_33661 = state_32372__$1;
(statearr_32383_33661[(2)] = null);

(statearr_32383_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (13))){
var inst_32307 = (state_32372[(10)]);
var inst_32309 = cljs.core.chunked_seq_QMARK_(inst_32307);
var state_32372__$1 = state_32372;
if(inst_32309){
var statearr_32384_33664 = state_32372__$1;
(statearr_32384_33664[(1)] = (16));

} else {
var statearr_32385_33665 = state_32372__$1;
(statearr_32385_33665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (22))){
var inst_32357 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
if(cljs.core.truth_(inst_32357)){
var statearr_32387_33666 = state_32372__$1;
(statearr_32387_33666[(1)] = (23));

} else {
var statearr_32388_33667 = state_32372__$1;
(statearr_32388_33667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (6))){
var inst_32283 = (state_32372[(8)]);
var inst_32351 = (state_32372[(7)]);
var inst_32353 = (state_32372[(11)]);
var inst_32351__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32283) : topic_fn.call(null,inst_32283));
var inst_32352 = cljs.core.deref(mults);
var inst_32353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32352,inst_32351__$1);
var state_32372__$1 = (function (){var statearr_32389 = state_32372;
(statearr_32389[(7)] = inst_32351__$1);

(statearr_32389[(11)] = inst_32353__$1);

return statearr_32389;
})();
if(cljs.core.truth_(inst_32353__$1)){
var statearr_32390_33668 = state_32372__$1;
(statearr_32390_33668[(1)] = (19));

} else {
var statearr_32391_33669 = state_32372__$1;
(statearr_32391_33669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (25))){
var inst_32362 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32392_33670 = state_32372__$1;
(statearr_32392_33670[(2)] = inst_32362);

(statearr_32392_33670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (17))){
var inst_32307 = (state_32372[(10)]);
var inst_32336 = cljs.core.first(inst_32307);
var inst_32337 = cljs.core.async.muxch_STAR_(inst_32336);
var inst_32338 = cljs.core.async.close_BANG_(inst_32337);
var inst_32339 = cljs.core.next(inst_32307);
var inst_32293 = inst_32339;
var inst_32294 = null;
var inst_32295 = (0);
var inst_32296 = (0);
var state_32372__$1 = (function (){var statearr_32393 = state_32372;
(statearr_32393[(12)] = inst_32295);

(statearr_32393[(13)] = inst_32294);

(statearr_32393[(14)] = inst_32293);

(statearr_32393[(15)] = inst_32296);

(statearr_32393[(16)] = inst_32338);

return statearr_32393;
})();
var statearr_32394_33675 = state_32372__$1;
(statearr_32394_33675[(2)] = null);

(statearr_32394_33675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (3))){
var inst_32370 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32372__$1,inst_32370);
} else {
if((state_val_32373 === (12))){
var inst_32347 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32395_33676 = state_32372__$1;
(statearr_32395_33676[(2)] = inst_32347);

(statearr_32395_33676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (2))){
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32372__$1,(4),ch);
} else {
if((state_val_32373 === (23))){
var state_32372__$1 = state_32372;
var statearr_32396_33677 = state_32372__$1;
(statearr_32396_33677[(2)] = null);

(statearr_32396_33677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (19))){
var inst_32283 = (state_32372[(8)]);
var inst_32353 = (state_32372[(11)]);
var inst_32355 = cljs.core.async.muxch_STAR_(inst_32353);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32372__$1,(22),inst_32355,inst_32283);
} else {
if((state_val_32373 === (11))){
var inst_32307 = (state_32372[(10)]);
var inst_32293 = (state_32372[(14)]);
var inst_32307__$1 = cljs.core.seq(inst_32293);
var state_32372__$1 = (function (){var statearr_32397 = state_32372;
(statearr_32397[(10)] = inst_32307__$1);

return statearr_32397;
})();
if(inst_32307__$1){
var statearr_32398_33682 = state_32372__$1;
(statearr_32398_33682[(1)] = (13));

} else {
var statearr_32399_33683 = state_32372__$1;
(statearr_32399_33683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (9))){
var inst_32349 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32400_33684 = state_32372__$1;
(statearr_32400_33684[(2)] = inst_32349);

(statearr_32400_33684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (5))){
var inst_32290 = cljs.core.deref(mults);
var inst_32291 = cljs.core.vals(inst_32290);
var inst_32292 = cljs.core.seq(inst_32291);
var inst_32293 = inst_32292;
var inst_32294 = null;
var inst_32295 = (0);
var inst_32296 = (0);
var state_32372__$1 = (function (){var statearr_32401 = state_32372;
(statearr_32401[(12)] = inst_32295);

(statearr_32401[(13)] = inst_32294);

(statearr_32401[(14)] = inst_32293);

(statearr_32401[(15)] = inst_32296);

return statearr_32401;
})();
var statearr_32402_33686 = state_32372__$1;
(statearr_32402_33686[(2)] = null);

(statearr_32402_33686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (14))){
var state_32372__$1 = state_32372;
var statearr_32406_33689 = state_32372__$1;
(statearr_32406_33689[(2)] = null);

(statearr_32406_33689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (16))){
var inst_32307 = (state_32372[(10)]);
var inst_32331 = cljs.core.chunk_first(inst_32307);
var inst_32332 = cljs.core.chunk_rest(inst_32307);
var inst_32333 = cljs.core.count(inst_32331);
var inst_32293 = inst_32332;
var inst_32294 = inst_32331;
var inst_32295 = inst_32333;
var inst_32296 = (0);
var state_32372__$1 = (function (){var statearr_32408 = state_32372;
(statearr_32408[(12)] = inst_32295);

(statearr_32408[(13)] = inst_32294);

(statearr_32408[(14)] = inst_32293);

(statearr_32408[(15)] = inst_32296);

return statearr_32408;
})();
var statearr_32409_33693 = state_32372__$1;
(statearr_32409_33693[(2)] = null);

(statearr_32409_33693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (10))){
var inst_32295 = (state_32372[(12)]);
var inst_32294 = (state_32372[(13)]);
var inst_32293 = (state_32372[(14)]);
var inst_32296 = (state_32372[(15)]);
var inst_32301 = cljs.core._nth(inst_32294,inst_32296);
var inst_32302 = cljs.core.async.muxch_STAR_(inst_32301);
var inst_32303 = cljs.core.async.close_BANG_(inst_32302);
var inst_32304 = (inst_32296 + (1));
var tmp32403 = inst_32295;
var tmp32404 = inst_32294;
var tmp32405 = inst_32293;
var inst_32293__$1 = tmp32405;
var inst_32294__$1 = tmp32404;
var inst_32295__$1 = tmp32403;
var inst_32296__$1 = inst_32304;
var state_32372__$1 = (function (){var statearr_32410 = state_32372;
(statearr_32410[(12)] = inst_32295__$1);

(statearr_32410[(13)] = inst_32294__$1);

(statearr_32410[(17)] = inst_32303);

(statearr_32410[(14)] = inst_32293__$1);

(statearr_32410[(15)] = inst_32296__$1);

return statearr_32410;
})();
var statearr_32411_33698 = state_32372__$1;
(statearr_32411_33698[(2)] = null);

(statearr_32411_33698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (18))){
var inst_32342 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32412_33705 = state_32372__$1;
(statearr_32412_33705[(2)] = inst_32342);

(statearr_32412_33705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (8))){
var inst_32295 = (state_32372[(12)]);
var inst_32296 = (state_32372[(15)]);
var inst_32298 = (inst_32296 < inst_32295);
var inst_32299 = inst_32298;
var state_32372__$1 = state_32372;
if(cljs.core.truth_(inst_32299)){
var statearr_32413_33706 = state_32372__$1;
(statearr_32413_33706[(1)] = (10));

} else {
var statearr_32414_33707 = state_32372__$1;
(statearr_32414_33707[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32415[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32415[(1)] = (1));

return statearr_32415;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32372){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32372);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32416){var ex__29837__auto__ = e32416;
var statearr_32417_33714 = state_32372;
(statearr_32417_33714[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32372[(4)]))){
var statearr_32418_33715 = state_32372;
(statearr_32418_33715[(1)] = cljs.core.first((state_32372[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33716 = state_32372;
state_32372 = G__33716;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32419 = f__30193__auto__();
(statearr_32419[(6)] = c__30192__auto___33647);

return statearr_32419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32422 = arguments.length;
switch (G__32422) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32428 = arguments.length;
switch (G__32428) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32430 = arguments.length;
switch (G__32430) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30192__auto___33723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var state_32477__$1 = state_32477;
var statearr_32479_33724 = state_32477__$1;
(statearr_32479_33724[(2)] = null);

(statearr_32479_33724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (1))){
var state_32477__$1 = state_32477;
var statearr_32480_33725 = state_32477__$1;
(statearr_32480_33725[(2)] = null);

(statearr_32480_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32436 = (state_32477[(7)]);
var inst_32435 = (state_32477[(8)]);
var inst_32438 = (inst_32436 < inst_32435);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32438)){
var statearr_32482_33739 = state_32477__$1;
(statearr_32482_33739[(1)] = (6));

} else {
var statearr_32483_33740 = state_32477__$1;
(statearr_32483_33740[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (15))){
var inst_32462 = (state_32477[(9)]);
var inst_32467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32462);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32477__$1,(17),out,inst_32467);
} else {
if((state_val_32478 === (13))){
var inst_32462 = (state_32477[(9)]);
var inst_32462__$1 = (state_32477[(2)]);
var inst_32463 = cljs.core.some(cljs.core.nil_QMARK_,inst_32462__$1);
var state_32477__$1 = (function (){var statearr_32484 = state_32477;
(statearr_32484[(9)] = inst_32462__$1);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32463)){
var statearr_32485_33747 = state_32477__$1;
(statearr_32485_33747[(1)] = (14));

} else {
var statearr_32486_33748 = state_32477__$1;
(statearr_32486_33748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var state_32477__$1 = state_32477;
var statearr_32487_33751 = state_32477__$1;
(statearr_32487_33751[(2)] = null);

(statearr_32487_33751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (17))){
var inst_32469 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32490 = state_32477;
(statearr_32490[(10)] = inst_32469);

return statearr_32490;
})();
var statearr_32491_33756 = state_32477__$1;
(statearr_32491_33756[(2)] = null);

(statearr_32491_33756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var inst_32474 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32477__$1,inst_32474);
} else {
if((state_val_32478 === (12))){
var _ = (function (){var statearr_32492 = state_32477;
(statearr_32492[(4)] = cljs.core.rest((state_32477[(4)])));

return statearr_32492;
})();
var state_32477__$1 = state_32477;
var ex32489 = (state_32477__$1[(2)]);
var statearr_32494_33757 = state_32477__$1;
(statearr_32494_33757[(5)] = ex32489);


if((ex32489 instanceof Object)){
var statearr_32495_33758 = state_32477__$1;
(statearr_32495_33758[(1)] = (11));

(statearr_32495_33758[(5)] = null);

} else {
throw ex32489;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (2))){
var inst_32434 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32435 = cnt;
var inst_32436 = (0);
var state_32477__$1 = (function (){var statearr_32496 = state_32477;
(statearr_32496[(7)] = inst_32436);

(statearr_32496[(11)] = inst_32434);

(statearr_32496[(8)] = inst_32435);

return statearr_32496;
})();
var statearr_32497_33769 = state_32477__$1;
(statearr_32497_33769[(2)] = null);

(statearr_32497_33769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (11))){
var inst_32440 = (state_32477[(2)]);
var inst_32441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32477__$1 = (function (){var statearr_32498 = state_32477;
(statearr_32498[(12)] = inst_32440);

return statearr_32498;
})();
var statearr_32499_33770 = state_32477__$1;
(statearr_32499_33770[(2)] = inst_32441);

(statearr_32499_33770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (9))){
var inst_32436 = (state_32477[(7)]);
var _ = (function (){var statearr_32500 = state_32477;
(statearr_32500[(4)] = cljs.core.cons((12),(state_32477[(4)])));

return statearr_32500;
})();
var inst_32448 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32436) : chs__$1.call(null,inst_32436));
var inst_32449 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32436) : done.call(null,inst_32436));
var inst_32450 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32448,inst_32449);
var ___$1 = (function (){var statearr_32501 = state_32477;
(statearr_32501[(4)] = cljs.core.rest((state_32477[(4)])));

return statearr_32501;
})();
var state_32477__$1 = state_32477;
var statearr_32502_33774 = state_32477__$1;
(statearr_32502_33774[(2)] = inst_32450);

(statearr_32502_33774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (5))){
var inst_32460 = (state_32477[(2)]);
var state_32477__$1 = (function (){var statearr_32503 = state_32477;
(statearr_32503[(13)] = inst_32460);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32477__$1,(13),dchan);
} else {
if((state_val_32478 === (14))){
var inst_32465 = cljs.core.async.close_BANG_(out);
var state_32477__$1 = state_32477;
var statearr_32504_33781 = state_32477__$1;
(statearr_32504_33781[(2)] = inst_32465);

(statearr_32504_33781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (16))){
var inst_32472 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32506_33782 = state_32477__$1;
(statearr_32506_33782[(2)] = inst_32472);

(statearr_32506_33782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (10))){
var inst_32436 = (state_32477[(7)]);
var inst_32453 = (state_32477[(2)]);
var inst_32454 = (inst_32436 + (1));
var inst_32436__$1 = inst_32454;
var state_32477__$1 = (function (){var statearr_32507 = state_32477;
(statearr_32507[(7)] = inst_32436__$1);

(statearr_32507[(14)] = inst_32453);

return statearr_32507;
})();
var statearr_32508_33783 = state_32477__$1;
(statearr_32508_33783[(2)] = null);

(statearr_32508_33783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (8))){
var inst_32458 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32509_33784 = state_32477__$1;
(statearr_32509_33784[(2)] = inst_32458);

(statearr_32509_33784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32510[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32510[(1)] = (1));

return statearr_32510;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32477){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32477);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32511){var ex__29837__auto__ = e32511;
var statearr_32512_33785 = state_32477;
(statearr_32512_33785[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32477[(4)]))){
var statearr_32513_33787 = state_32477;
(statearr_32513_33787[(1)] = cljs.core.first((state_32477[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33791 = state_32477;
state_32477 = G__33791;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32514 = f__30193__auto__();
(statearr_32514[(6)] = c__30192__auto___33723);

return statearr_32514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32518 = arguments.length;
switch (G__32518) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32533 = (state_32553[(7)]);
var inst_32532 = (state_32553[(8)]);
var inst_32532__$1 = (state_32553[(2)]);
var inst_32533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532__$1,(0),null);
var inst_32534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532__$1,(1),null);
var inst_32535 = (inst_32533__$1 == null);
var state_32553__$1 = (function (){var statearr_32556 = state_32553;
(statearr_32556[(9)] = inst_32534);

(statearr_32556[(7)] = inst_32533__$1);

(statearr_32556[(8)] = inst_32532__$1);

return statearr_32556;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32557_33794 = state_32553__$1;
(statearr_32557_33794[(1)] = (8));

} else {
var statearr_32558_33795 = state_32553__$1;
(statearr_32558_33795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var inst_32521 = cljs.core.vec(chs);
var inst_32522 = inst_32521;
var state_32553__$1 = (function (){var statearr_32559 = state_32553;
(statearr_32559[(10)] = inst_32522);

return statearr_32559;
})();
var statearr_32560_33796 = state_32553__$1;
(statearr_32560_33796[(2)] = null);

(statearr_32560_33796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32522 = (state_32553[(10)]);
var state_32553__$1 = state_32553;
return cljs.core.async.ioc_alts_BANG_(state_32553__$1,(7),inst_32522);
} else {
if((state_val_32554 === (6))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32562_33797 = state_32553__$1;
(statearr_32562_33797[(2)] = inst_32549);

(statearr_32562_33797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (2))){
var inst_32522 = (state_32553[(10)]);
var inst_32524 = cljs.core.count(inst_32522);
var inst_32525 = (inst_32524 > (0));
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32525)){
var statearr_32564_33798 = state_32553__$1;
(statearr_32564_33798[(1)] = (4));

} else {
var statearr_32565_33799 = state_32553__$1;
(statearr_32565_33799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (11))){
var inst_32522 = (state_32553[(10)]);
var inst_32542 = (state_32553[(2)]);
var tmp32563 = inst_32522;
var inst_32522__$1 = tmp32563;
var state_32553__$1 = (function (){var statearr_32566 = state_32553;
(statearr_32566[(10)] = inst_32522__$1);

(statearr_32566[(11)] = inst_32542);

return statearr_32566;
})();
var statearr_32567_33800 = state_32553__$1;
(statearr_32567_33800[(2)] = null);

(statearr_32567_33800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32533 = (state_32553[(7)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(11),out,inst_32533);
} else {
if((state_val_32554 === (5))){
var inst_32547 = cljs.core.async.close_BANG_(out);
var state_32553__$1 = state_32553;
var statearr_32569_33801 = state_32553__$1;
(statearr_32569_33801[(2)] = inst_32547);

(statearr_32569_33801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var inst_32545 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32570_33802 = state_32553__$1;
(statearr_32570_33802[(2)] = inst_32545);

(statearr_32570_33802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (8))){
var inst_32522 = (state_32553[(10)]);
var inst_32534 = (state_32553[(9)]);
var inst_32533 = (state_32553[(7)]);
var inst_32532 = (state_32553[(8)]);
var inst_32537 = (function (){var cs = inst_32522;
var vec__32527 = inst_32532;
var v = inst_32533;
var c = inst_32534;
return (function (p1__32516_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32516_SHARP_);
});
})();
var inst_32538 = cljs.core.filterv(inst_32537,inst_32522);
var inst_32522__$1 = inst_32538;
var state_32553__$1 = (function (){var statearr_32571 = state_32553;
(statearr_32571[(10)] = inst_32522__$1);

return statearr_32571;
})();
var statearr_32572_33804 = state_32553__$1;
(statearr_32572_33804[(2)] = null);

(statearr_32572_33804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32573[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32573[(1)] = (1));

return statearr_32573;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32553){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32553);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32574){var ex__29837__auto__ = e32574;
var statearr_32575_33814 = state_32553;
(statearr_32575_33814[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32553[(4)]))){
var statearr_32576_33815 = state_32553;
(statearr_32576_33815[(1)] = cljs.core.first((state_32553[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33816 = state_32553;
state_32553 = G__33816;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32578 = f__30193__auto__();
(statearr_32578[(6)] = c__30192__auto___33793);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32581 = arguments.length;
switch (G__32581) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32607){
var state_val_32608 = (state_32607[(1)]);
if((state_val_32608 === (7))){
var inst_32589 = (state_32607[(7)]);
var inst_32589__$1 = (state_32607[(2)]);
var inst_32590 = (inst_32589__$1 == null);
var inst_32591 = cljs.core.not(inst_32590);
var state_32607__$1 = (function (){var statearr_32609 = state_32607;
(statearr_32609[(7)] = inst_32589__$1);

return statearr_32609;
})();
if(inst_32591){
var statearr_32610_33823 = state_32607__$1;
(statearr_32610_33823[(1)] = (8));

} else {
var statearr_32611_33824 = state_32607__$1;
(statearr_32611_33824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (1))){
var inst_32584 = (0);
var state_32607__$1 = (function (){var statearr_32612 = state_32607;
(statearr_32612[(8)] = inst_32584);

return statearr_32612;
})();
var statearr_32613_33825 = state_32607__$1;
(statearr_32613_33825[(2)] = null);

(statearr_32613_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (4))){
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32607__$1,(7),ch);
} else {
if((state_val_32608 === (6))){
var inst_32602 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32614_33826 = state_32607__$1;
(statearr_32614_33826[(2)] = inst_32602);

(statearr_32614_33826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (3))){
var inst_32604 = (state_32607[(2)]);
var inst_32605 = cljs.core.async.close_BANG_(out);
var state_32607__$1 = (function (){var statearr_32616 = state_32607;
(statearr_32616[(9)] = inst_32604);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32607__$1,inst_32605);
} else {
if((state_val_32608 === (2))){
var inst_32584 = (state_32607[(8)]);
var inst_32586 = (inst_32584 < n);
var state_32607__$1 = state_32607;
if(cljs.core.truth_(inst_32586)){
var statearr_32617_33827 = state_32607__$1;
(statearr_32617_33827[(1)] = (4));

} else {
var statearr_32618_33828 = state_32607__$1;
(statearr_32618_33828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (11))){
var inst_32584 = (state_32607[(8)]);
var inst_32594 = (state_32607[(2)]);
var inst_32595 = (inst_32584 + (1));
var inst_32584__$1 = inst_32595;
var state_32607__$1 = (function (){var statearr_32619 = state_32607;
(statearr_32619[(10)] = inst_32594);

(statearr_32619[(8)] = inst_32584__$1);

return statearr_32619;
})();
var statearr_32620_33829 = state_32607__$1;
(statearr_32620_33829[(2)] = null);

(statearr_32620_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (9))){
var state_32607__$1 = state_32607;
var statearr_32621_33830 = state_32607__$1;
(statearr_32621_33830[(2)] = null);

(statearr_32621_33830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (5))){
var state_32607__$1 = state_32607;
var statearr_32622_33831 = state_32607__$1;
(statearr_32622_33831[(2)] = null);

(statearr_32622_33831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (10))){
var inst_32599 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32623_33832 = state_32607__$1;
(statearr_32623_33832[(2)] = inst_32599);

(statearr_32623_33832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (8))){
var inst_32589 = (state_32607[(7)]);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32607__$1,(11),out,inst_32589);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32625[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32625[(1)] = (1));

return statearr_32625;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32607){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32607);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32626){var ex__29837__auto__ = e32626;
var statearr_32627_33833 = state_32607;
(statearr_32627_33833[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32607[(4)]))){
var statearr_32628_33834 = state_32607;
(statearr_32628_33834[(1)] = cljs.core.first((state_32607[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33835 = state_32607;
state_32607 = G__33835;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32629 = f__30193__auto__();
(statearr_32629[(6)] = c__30192__auto___33821);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32632 = (function (f,ch,meta32633){
this.f = f;
this.ch = ch;
this.meta32633 = meta32633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32634,meta32633__$1){
var self__ = this;
var _32634__$1 = this;
return (new cljs.core.async.t_cljs$core$async32632(self__.f,self__.ch,meta32633__$1));
}));

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32634){
var self__ = this;
var _32634__$1 = this;
return self__.meta32633;
}));

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32636 = (function (f,ch,meta32633,_,fn1,meta32637){
this.f = f;
this.ch = ch;
this.meta32633 = meta32633;
this._ = _;
this.fn1 = fn1;
this.meta32637 = meta32637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32638,meta32637__$1){
var self__ = this;
var _32638__$1 = this;
return (new cljs.core.async.t_cljs$core$async32636(self__.f,self__.ch,self__.meta32633,self__._,self__.fn1,meta32637__$1));
}));

(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32638){
var self__ = this;
var _32638__$1 = this;
return self__.meta32637;
}));

(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32630_SHARP_){
var G__32640 = (((p1__32630_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32630_SHARP_) : self__.f.call(null,p1__32630_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32640) : f1.call(null,G__32640));
});
}));

(cljs.core.async.t_cljs$core$async32636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32633","meta32633",-1020882125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32632","cljs.core.async/t_cljs$core$async32632",642542992,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32637","meta32637",1664174088,null)], null);
}));

(cljs.core.async.t_cljs$core$async32636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32636");

(cljs.core.async.t_cljs$core$async32636.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32636.
 */
cljs.core.async.__GT_t_cljs$core$async32636 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32636(f__$1,ch__$1,meta32633__$1,___$2,fn1__$1,meta32637){
return (new cljs.core.async.t_cljs$core$async32636(f__$1,ch__$1,meta32633__$1,___$2,fn1__$1,meta32637));
});

}

return (new cljs.core.async.t_cljs$core$async32636(self__.f,self__.ch,self__.meta32633,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32641 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32641) : self__.f.call(null,G__32641));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32633","meta32633",-1020882125,null)], null);
}));

(cljs.core.async.t_cljs$core$async32632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32632");

(cljs.core.async.t_cljs$core$async32632.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32632.
 */
cljs.core.async.__GT_t_cljs$core$async32632 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32632(f__$1,ch__$1,meta32633){
return (new cljs.core.async.t_cljs$core$async32632(f__$1,ch__$1,meta32633));
});

}

return (new cljs.core.async.t_cljs$core$async32632(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32643 = (function (f,ch,meta32644){
this.f = f;
this.ch = ch;
this.meta32644 = meta32644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32645,meta32644__$1){
var self__ = this;
var _32645__$1 = this;
return (new cljs.core.async.t_cljs$core$async32643(self__.f,self__.ch,meta32644__$1));
}));

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32645){
var self__ = this;
var _32645__$1 = this;
return self__.meta32644;
}));

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32644","meta32644",957970301,null)], null);
}));

(cljs.core.async.t_cljs$core$async32643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32643");

(cljs.core.async.t_cljs$core$async32643.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32643.
 */
cljs.core.async.__GT_t_cljs$core$async32643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32643(f__$1,ch__$1,meta32644){
return (new cljs.core.async.t_cljs$core$async32643(f__$1,ch__$1,meta32644));
});

}

return (new cljs.core.async.t_cljs$core$async32643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32649 = (function (p,ch,meta32650){
this.p = p;
this.ch = ch;
this.meta32650 = meta32650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32651,meta32650__$1){
var self__ = this;
var _32651__$1 = this;
return (new cljs.core.async.t_cljs$core$async32649(self__.p,self__.ch,meta32650__$1));
}));

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32651){
var self__ = this;
var _32651__$1 = this;
return self__.meta32650;
}));

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32650","meta32650",-874171111,null)], null);
}));

(cljs.core.async.t_cljs$core$async32649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32649");

(cljs.core.async.t_cljs$core$async32649.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32649.
 */
cljs.core.async.__GT_t_cljs$core$async32649 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32649(p__$1,ch__$1,meta32650){
return (new cljs.core.async.t_cljs$core$async32649(p__$1,ch__$1,meta32650));
});

}

return (new cljs.core.async.t_cljs$core$async32649(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32655 = arguments.length;
switch (G__32655) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32677){
var state_val_32678 = (state_32677[(1)]);
if((state_val_32678 === (7))){
var inst_32673 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32680_33859 = state_32677__$1;
(statearr_32680_33859[(2)] = inst_32673);

(statearr_32680_33859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (1))){
var state_32677__$1 = state_32677;
var statearr_32681_33860 = state_32677__$1;
(statearr_32681_33860[(2)] = null);

(statearr_32681_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (4))){
var inst_32659 = (state_32677[(7)]);
var inst_32659__$1 = (state_32677[(2)]);
var inst_32660 = (inst_32659__$1 == null);
var state_32677__$1 = (function (){var statearr_32682 = state_32677;
(statearr_32682[(7)] = inst_32659__$1);

return statearr_32682;
})();
if(cljs.core.truth_(inst_32660)){
var statearr_32683_33861 = state_32677__$1;
(statearr_32683_33861[(1)] = (5));

} else {
var statearr_32684_33862 = state_32677__$1;
(statearr_32684_33862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (6))){
var inst_32659 = (state_32677[(7)]);
var inst_32664 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32659) : p.call(null,inst_32659));
var state_32677__$1 = state_32677;
if(cljs.core.truth_(inst_32664)){
var statearr_32685_33863 = state_32677__$1;
(statearr_32685_33863[(1)] = (8));

} else {
var statearr_32686_33864 = state_32677__$1;
(statearr_32686_33864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (3))){
var inst_32675 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32677__$1,inst_32675);
} else {
if((state_val_32678 === (2))){
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32677__$1,(4),ch);
} else {
if((state_val_32678 === (11))){
var inst_32667 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32687_33865 = state_32677__$1;
(statearr_32687_33865[(2)] = inst_32667);

(statearr_32687_33865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (9))){
var state_32677__$1 = state_32677;
var statearr_32688_33866 = state_32677__$1;
(statearr_32688_33866[(2)] = null);

(statearr_32688_33866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (5))){
var inst_32662 = cljs.core.async.close_BANG_(out);
var state_32677__$1 = state_32677;
var statearr_32689_33867 = state_32677__$1;
(statearr_32689_33867[(2)] = inst_32662);

(statearr_32689_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (10))){
var inst_32670 = (state_32677[(2)]);
var state_32677__$1 = (function (){var statearr_32690 = state_32677;
(statearr_32690[(8)] = inst_32670);

return statearr_32690;
})();
var statearr_32691_33868 = state_32677__$1;
(statearr_32691_33868[(2)] = null);

(statearr_32691_33868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (8))){
var inst_32659 = (state_32677[(7)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32677__$1,(11),out,inst_32659);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32692 = [null,null,null,null,null,null,null,null,null];
(statearr_32692[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32692[(1)] = (1));

return statearr_32692;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32677){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32677);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32694){var ex__29837__auto__ = e32694;
var statearr_32695_33869 = state_32677;
(statearr_32695_33869[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32677[(4)]))){
var statearr_32696_33870 = state_32677;
(statearr_32696_33870[(1)] = cljs.core.first((state_32677[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33871 = state_32677;
state_32677 = G__33871;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32697 = f__30193__auto__();
(statearr_32697[(6)] = c__30192__auto___33858);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32699 = arguments.length;
switch (G__32699) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32764){
var state_val_32765 = (state_32764[(1)]);
if((state_val_32765 === (7))){
var inst_32759 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32766_33875 = state_32764__$1;
(statearr_32766_33875[(2)] = inst_32759);

(statearr_32766_33875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (20))){
var inst_32729 = (state_32764[(7)]);
var inst_32740 = (state_32764[(2)]);
var inst_32741 = cljs.core.next(inst_32729);
var inst_32715 = inst_32741;
var inst_32716 = null;
var inst_32717 = (0);
var inst_32718 = (0);
var state_32764__$1 = (function (){var statearr_32767 = state_32764;
(statearr_32767[(8)] = inst_32716);

(statearr_32767[(9)] = inst_32715);

(statearr_32767[(10)] = inst_32740);

(statearr_32767[(11)] = inst_32718);

(statearr_32767[(12)] = inst_32717);

return statearr_32767;
})();
var statearr_32768_33877 = state_32764__$1;
(statearr_32768_33877[(2)] = null);

(statearr_32768_33877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (1))){
var state_32764__$1 = state_32764;
var statearr_32769_33878 = state_32764__$1;
(statearr_32769_33878[(2)] = null);

(statearr_32769_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (4))){
var inst_32704 = (state_32764[(13)]);
var inst_32704__$1 = (state_32764[(2)]);
var inst_32705 = (inst_32704__$1 == null);
var state_32764__$1 = (function (){var statearr_32771 = state_32764;
(statearr_32771[(13)] = inst_32704__$1);

return statearr_32771;
})();
if(cljs.core.truth_(inst_32705)){
var statearr_32772_33879 = state_32764__$1;
(statearr_32772_33879[(1)] = (5));

} else {
var statearr_32773_33880 = state_32764__$1;
(statearr_32773_33880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (15))){
var state_32764__$1 = state_32764;
var statearr_32777_33881 = state_32764__$1;
(statearr_32777_33881[(2)] = null);

(statearr_32777_33881[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (21))){
var state_32764__$1 = state_32764;
var statearr_32778_33882 = state_32764__$1;
(statearr_32778_33882[(2)] = null);

(statearr_32778_33882[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (13))){
var inst_32716 = (state_32764[(8)]);
var inst_32715 = (state_32764[(9)]);
var inst_32718 = (state_32764[(11)]);
var inst_32717 = (state_32764[(12)]);
var inst_32725 = (state_32764[(2)]);
var inst_32726 = (inst_32718 + (1));
var tmp32774 = inst_32716;
var tmp32775 = inst_32715;
var tmp32776 = inst_32717;
var inst_32715__$1 = tmp32775;
var inst_32716__$1 = tmp32774;
var inst_32717__$1 = tmp32776;
var inst_32718__$1 = inst_32726;
var state_32764__$1 = (function (){var statearr_32779 = state_32764;
(statearr_32779[(8)] = inst_32716__$1);

(statearr_32779[(9)] = inst_32715__$1);

(statearr_32779[(14)] = inst_32725);

(statearr_32779[(11)] = inst_32718__$1);

(statearr_32779[(12)] = inst_32717__$1);

return statearr_32779;
})();
var statearr_32780_33883 = state_32764__$1;
(statearr_32780_33883[(2)] = null);

(statearr_32780_33883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (22))){
var state_32764__$1 = state_32764;
var statearr_32782_33884 = state_32764__$1;
(statearr_32782_33884[(2)] = null);

(statearr_32782_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (6))){
var inst_32704 = (state_32764[(13)]);
var inst_32713 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32704) : f.call(null,inst_32704));
var inst_32714 = cljs.core.seq(inst_32713);
var inst_32715 = inst_32714;
var inst_32716 = null;
var inst_32717 = (0);
var inst_32718 = (0);
var state_32764__$1 = (function (){var statearr_32783 = state_32764;
(statearr_32783[(8)] = inst_32716);

(statearr_32783[(9)] = inst_32715);

(statearr_32783[(11)] = inst_32718);

(statearr_32783[(12)] = inst_32717);

return statearr_32783;
})();
var statearr_32784_33885 = state_32764__$1;
(statearr_32784_33885[(2)] = null);

(statearr_32784_33885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (17))){
var inst_32729 = (state_32764[(7)]);
var inst_32733 = cljs.core.chunk_first(inst_32729);
var inst_32734 = cljs.core.chunk_rest(inst_32729);
var inst_32735 = cljs.core.count(inst_32733);
var inst_32715 = inst_32734;
var inst_32716 = inst_32733;
var inst_32717 = inst_32735;
var inst_32718 = (0);
var state_32764__$1 = (function (){var statearr_32786 = state_32764;
(statearr_32786[(8)] = inst_32716);

(statearr_32786[(9)] = inst_32715);

(statearr_32786[(11)] = inst_32718);

(statearr_32786[(12)] = inst_32717);

return statearr_32786;
})();
var statearr_32787_33886 = state_32764__$1;
(statearr_32787_33886[(2)] = null);

(statearr_32787_33886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (3))){
var inst_32761 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32764__$1,inst_32761);
} else {
if((state_val_32765 === (12))){
var inst_32749 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32788_33887 = state_32764__$1;
(statearr_32788_33887[(2)] = inst_32749);

(statearr_32788_33887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (2))){
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32764__$1,(4),in$);
} else {
if((state_val_32765 === (23))){
var inst_32757 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32789_33889 = state_32764__$1;
(statearr_32789_33889[(2)] = inst_32757);

(statearr_32789_33889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (19))){
var inst_32744 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32790_33890 = state_32764__$1;
(statearr_32790_33890[(2)] = inst_32744);

(statearr_32790_33890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (11))){
var inst_32715 = (state_32764[(9)]);
var inst_32729 = (state_32764[(7)]);
var inst_32729__$1 = cljs.core.seq(inst_32715);
var state_32764__$1 = (function (){var statearr_32791 = state_32764;
(statearr_32791[(7)] = inst_32729__$1);

return statearr_32791;
})();
if(inst_32729__$1){
var statearr_32792_33891 = state_32764__$1;
(statearr_32792_33891[(1)] = (14));

} else {
var statearr_32793_33892 = state_32764__$1;
(statearr_32793_33892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (9))){
var inst_32751 = (state_32764[(2)]);
var inst_32752 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32764__$1 = (function (){var statearr_32797 = state_32764;
(statearr_32797[(15)] = inst_32751);

return statearr_32797;
})();
if(cljs.core.truth_(inst_32752)){
var statearr_32798_33893 = state_32764__$1;
(statearr_32798_33893[(1)] = (21));

} else {
var statearr_32799_33894 = state_32764__$1;
(statearr_32799_33894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (5))){
var inst_32707 = cljs.core.async.close_BANG_(out);
var state_32764__$1 = state_32764;
var statearr_32802_33895 = state_32764__$1;
(statearr_32802_33895[(2)] = inst_32707);

(statearr_32802_33895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (14))){
var inst_32729 = (state_32764[(7)]);
var inst_32731 = cljs.core.chunked_seq_QMARK_(inst_32729);
var state_32764__$1 = state_32764;
if(inst_32731){
var statearr_32803_33897 = state_32764__$1;
(statearr_32803_33897[(1)] = (17));

} else {
var statearr_32804_33901 = state_32764__$1;
(statearr_32804_33901[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (16))){
var inst_32747 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32805_33903 = state_32764__$1;
(statearr_32805_33903[(2)] = inst_32747);

(statearr_32805_33903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (10))){
var inst_32716 = (state_32764[(8)]);
var inst_32718 = (state_32764[(11)]);
var inst_32723 = cljs.core._nth(inst_32716,inst_32718);
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32764__$1,(13),out,inst_32723);
} else {
if((state_val_32765 === (18))){
var inst_32729 = (state_32764[(7)]);
var inst_32738 = cljs.core.first(inst_32729);
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32764__$1,(20),out,inst_32738);
} else {
if((state_val_32765 === (8))){
var inst_32718 = (state_32764[(11)]);
var inst_32717 = (state_32764[(12)]);
var inst_32720 = (inst_32718 < inst_32717);
var inst_32721 = inst_32720;
var state_32764__$1 = state_32764;
if(cljs.core.truth_(inst_32721)){
var statearr_32806_33904 = state_32764__$1;
(statearr_32806_33904[(1)] = (10));

} else {
var statearr_32807_33905 = state_32764__$1;
(statearr_32807_33905[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____0 = (function (){
var statearr_32808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32808[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__);

(statearr_32808[(1)] = (1));

return statearr_32808;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____1 = (function (state_32764){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32764);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32809){var ex__29837__auto__ = e32809;
var statearr_32810_33906 = state_32764;
(statearr_32810_33906[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32764[(4)]))){
var statearr_32811_33907 = state_32764;
(statearr_32811_33907[(1)] = cljs.core.first((state_32764[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33908 = state_32764;
state_32764 = G__33908;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__ = function(state_32764){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____1.call(this,state_32764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29834__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32812 = f__30193__auto__();
(statearr_32812[(6)] = c__30192__auto__);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32815 = arguments.length;
switch (G__32815) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32818 = arguments.length;
switch (G__32818) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32820 = arguments.length;
switch (G__32820) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32918){
var state_val_32919 = (state_32918[(1)]);
if((state_val_32919 === (7))){
var inst_32913 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32928_33913 = state_32918__$1;
(statearr_32928_33913[(2)] = inst_32913);

(statearr_32928_33913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (1))){
var inst_32858 = null;
var state_32918__$1 = (function (){var statearr_32929 = state_32918;
(statearr_32929[(7)] = inst_32858);

return statearr_32929;
})();
var statearr_32930_33915 = state_32918__$1;
(statearr_32930_33915[(2)] = null);

(statearr_32930_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (4))){
var inst_32894 = (state_32918[(8)]);
var inst_32894__$1 = (state_32918[(2)]);
var inst_32899 = (inst_32894__$1 == null);
var inst_32900 = cljs.core.not(inst_32899);
var state_32918__$1 = (function (){var statearr_32931 = state_32918;
(statearr_32931[(8)] = inst_32894__$1);

return statearr_32931;
})();
if(inst_32900){
var statearr_32932_33917 = state_32918__$1;
(statearr_32932_33917[(1)] = (5));

} else {
var statearr_32933_33921 = state_32918__$1;
(statearr_32933_33921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (6))){
var state_32918__$1 = state_32918;
var statearr_32934_33922 = state_32918__$1;
(statearr_32934_33922[(2)] = null);

(statearr_32934_33922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (3))){
var inst_32915 = (state_32918[(2)]);
var inst_32916 = cljs.core.async.close_BANG_(out);
var state_32918__$1 = (function (){var statearr_32935 = state_32918;
(statearr_32935[(9)] = inst_32915);

return statearr_32935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32918__$1,inst_32916);
} else {
if((state_val_32919 === (2))){
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32918__$1,(4),ch);
} else {
if((state_val_32919 === (11))){
var inst_32894 = (state_32918[(8)]);
var inst_32907 = (state_32918[(2)]);
var inst_32858 = inst_32894;
var state_32918__$1 = (function (){var statearr_32936 = state_32918;
(statearr_32936[(7)] = inst_32858);

(statearr_32936[(10)] = inst_32907);

return statearr_32936;
})();
var statearr_32937_33923 = state_32918__$1;
(statearr_32937_33923[(2)] = null);

(statearr_32937_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (9))){
var inst_32894 = (state_32918[(8)]);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32918__$1,(11),out,inst_32894);
} else {
if((state_val_32919 === (5))){
var inst_32894 = (state_32918[(8)]);
var inst_32858 = (state_32918[(7)]);
var inst_32902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32894,inst_32858);
var state_32918__$1 = state_32918;
if(inst_32902){
var statearr_32939_33928 = state_32918__$1;
(statearr_32939_33928[(1)] = (8));

} else {
var statearr_32940_33929 = state_32918__$1;
(statearr_32940_33929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (10))){
var inst_32910 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32941_33931 = state_32918__$1;
(statearr_32941_33931[(2)] = inst_32910);

(statearr_32941_33931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (8))){
var inst_32858 = (state_32918[(7)]);
var tmp32938 = inst_32858;
var inst_32858__$1 = tmp32938;
var state_32918__$1 = (function (){var statearr_32942 = state_32918;
(statearr_32942[(7)] = inst_32858__$1);

return statearr_32942;
})();
var statearr_32943_33935 = state_32918__$1;
(statearr_32943_33935[(2)] = null);

(statearr_32943_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_32944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32944[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_32944[(1)] = (1));

return statearr_32944;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32918){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32918);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e32945){var ex__29837__auto__ = e32945;
var statearr_32946_33936 = state_32918;
(statearr_32946_33936[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32918[(4)]))){
var statearr_32947_33937 = state_32918;
(statearr_32947_33937[(1)] = cljs.core.first((state_32918[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33938 = state_32918;
state_32918 = G__33938;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32948 = f__30193__auto__();
(statearr_32948[(6)] = c__30192__auto___33912);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32950 = arguments.length;
switch (G__32950) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_32991){
var state_val_32992 = (state_32991[(1)]);
if((state_val_32992 === (7))){
var inst_32987 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
var statearr_32995_33941 = state_32991__$1;
(statearr_32995_33941[(2)] = inst_32987);

(statearr_32995_33941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (1))){
var inst_32951 = (new Array(n));
var inst_32952 = inst_32951;
var inst_32953 = (0);
var state_32991__$1 = (function (){var statearr_32996 = state_32991;
(statearr_32996[(7)] = inst_32953);

(statearr_32996[(8)] = inst_32952);

return statearr_32996;
})();
var statearr_32997_33942 = state_32991__$1;
(statearr_32997_33942[(2)] = null);

(statearr_32997_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (4))){
var inst_32957 = (state_32991[(9)]);
var inst_32957__$1 = (state_32991[(2)]);
var inst_32958 = (inst_32957__$1 == null);
var inst_32959 = cljs.core.not(inst_32958);
var state_32991__$1 = (function (){var statearr_32999 = state_32991;
(statearr_32999[(9)] = inst_32957__$1);

return statearr_32999;
})();
if(inst_32959){
var statearr_33000_33947 = state_32991__$1;
(statearr_33000_33947[(1)] = (5));

} else {
var statearr_33001_33948 = state_32991__$1;
(statearr_33001_33948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (15))){
var inst_32979 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
var statearr_33002_33949 = state_32991__$1;
(statearr_33002_33949[(2)] = inst_32979);

(statearr_33002_33949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (13))){
var state_32991__$1 = state_32991;
var statearr_33003_33953 = state_32991__$1;
(statearr_33003_33953[(2)] = null);

(statearr_33003_33953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (6))){
var inst_32953 = (state_32991[(7)]);
var inst_32975 = (inst_32953 > (0));
var state_32991__$1 = state_32991;
if(cljs.core.truth_(inst_32975)){
var statearr_33004_33954 = state_32991__$1;
(statearr_33004_33954[(1)] = (12));

} else {
var statearr_33005_33955 = state_32991__$1;
(statearr_33005_33955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (3))){
var inst_32989 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32991__$1,inst_32989);
} else {
if((state_val_32992 === (12))){
var inst_32952 = (state_32991[(8)]);
var inst_32977 = cljs.core.vec(inst_32952);
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32991__$1,(15),out,inst_32977);
} else {
if((state_val_32992 === (2))){
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32991__$1,(4),ch);
} else {
if((state_val_32992 === (11))){
var inst_32969 = (state_32991[(2)]);
var inst_32970 = (new Array(n));
var inst_32952 = inst_32970;
var inst_32953 = (0);
var state_32991__$1 = (function (){var statearr_33006 = state_32991;
(statearr_33006[(10)] = inst_32969);

(statearr_33006[(7)] = inst_32953);

(statearr_33006[(8)] = inst_32952);

return statearr_33006;
})();
var statearr_33009_33960 = state_32991__$1;
(statearr_33009_33960[(2)] = null);

(statearr_33009_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (9))){
var inst_32952 = (state_32991[(8)]);
var inst_32967 = cljs.core.vec(inst_32952);
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32991__$1,(11),out,inst_32967);
} else {
if((state_val_32992 === (5))){
var inst_32957 = (state_32991[(9)]);
var inst_32953 = (state_32991[(7)]);
var inst_32952 = (state_32991[(8)]);
var inst_32962 = (state_32991[(11)]);
var inst_32961 = (inst_32952[inst_32953] = inst_32957);
var inst_32962__$1 = (inst_32953 + (1));
var inst_32963 = (inst_32962__$1 < n);
var state_32991__$1 = (function (){var statearr_33011 = state_32991;
(statearr_33011[(12)] = inst_32961);

(statearr_33011[(11)] = inst_32962__$1);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32963)){
var statearr_33013_33965 = state_32991__$1;
(statearr_33013_33965[(1)] = (8));

} else {
var statearr_33014_33966 = state_32991__$1;
(statearr_33014_33966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (14))){
var inst_32982 = (state_32991[(2)]);
var inst_32985 = cljs.core.async.close_BANG_(out);
var state_32991__$1 = (function (){var statearr_33016 = state_32991;
(statearr_33016[(13)] = inst_32982);

return statearr_33016;
})();
var statearr_33017_33970 = state_32991__$1;
(statearr_33017_33970[(2)] = inst_32985);

(statearr_33017_33970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (10))){
var inst_32973 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
var statearr_33018_33971 = state_32991__$1;
(statearr_33018_33971[(2)] = inst_32973);

(statearr_33018_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (8))){
var inst_32952 = (state_32991[(8)]);
var inst_32962 = (state_32991[(11)]);
var tmp33015 = inst_32952;
var inst_32952__$1 = tmp33015;
var inst_32953 = inst_32962;
var state_32991__$1 = (function (){var statearr_33019 = state_32991;
(statearr_33019[(7)] = inst_32953);

(statearr_33019[(8)] = inst_32952__$1);

return statearr_33019;
})();
var statearr_33020_33976 = state_32991__$1;
(statearr_33020_33976[(2)] = null);

(statearr_33020_33976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_33025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33025[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_33025[(1)] = (1));

return statearr_33025;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_32991){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_32991);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e33027){var ex__29837__auto__ = e33027;
var statearr_33028_33980 = state_32991;
(statearr_33028_33980[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_32991[(4)]))){
var statearr_33032_33981 = state_32991;
(statearr_33032_33981[(1)] = cljs.core.first((state_32991[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33982 = state_32991;
state_32991 = G__33982;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_32991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_32991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_33035 = f__30193__auto__();
(statearr_33035[(6)] = c__30192__auto___33940);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33041 = arguments.length;
switch (G__33041) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__29833__auto__ = (function (state_33099){
var state_val_33100 = (state_33099[(1)]);
if((state_val_33100 === (7))){
var inst_33095 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33105_33985 = state_33099__$1;
(statearr_33105_33985[(2)] = inst_33095);

(statearr_33105_33985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (1))){
var inst_33049 = [];
var inst_33050 = inst_33049;
var inst_33051 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33099__$1 = (function (){var statearr_33109 = state_33099;
(statearr_33109[(7)] = inst_33050);

(statearr_33109[(8)] = inst_33051);

return statearr_33109;
})();
var statearr_33110_33986 = state_33099__$1;
(statearr_33110_33986[(2)] = null);

(statearr_33110_33986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (4))){
var inst_33054 = (state_33099[(9)]);
var inst_33054__$1 = (state_33099[(2)]);
var inst_33056 = (inst_33054__$1 == null);
var inst_33057 = cljs.core.not(inst_33056);
var state_33099__$1 = (function (){var statearr_33112 = state_33099;
(statearr_33112[(9)] = inst_33054__$1);

return statearr_33112;
})();
if(inst_33057){
var statearr_33113_33987 = state_33099__$1;
(statearr_33113_33987[(1)] = (5));

} else {
var statearr_33116_33988 = state_33099__$1;
(statearr_33116_33988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (15))){
var inst_33050 = (state_33099[(7)]);
var inst_33087 = cljs.core.vec(inst_33050);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33099__$1,(18),out,inst_33087);
} else {
if((state_val_33100 === (13))){
var inst_33080 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33119_33989 = state_33099__$1;
(statearr_33119_33989[(2)] = inst_33080);

(statearr_33119_33989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (6))){
var inst_33050 = (state_33099[(7)]);
var inst_33083 = inst_33050.length;
var inst_33084 = (inst_33083 > (0));
var state_33099__$1 = state_33099;
if(cljs.core.truth_(inst_33084)){
var statearr_33123_33990 = state_33099__$1;
(statearr_33123_33990[(1)] = (15));

} else {
var statearr_33124_33991 = state_33099__$1;
(statearr_33124_33991[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (17))){
var inst_33092 = (state_33099[(2)]);
var inst_33093 = cljs.core.async.close_BANG_(out);
var state_33099__$1 = (function (){var statearr_33126 = state_33099;
(statearr_33126[(10)] = inst_33092);

return statearr_33126;
})();
var statearr_33127_33992 = state_33099__$1;
(statearr_33127_33992[(2)] = inst_33093);

(statearr_33127_33992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (3))){
var inst_33097 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33099__$1,inst_33097);
} else {
if((state_val_33100 === (12))){
var inst_33050 = (state_33099[(7)]);
var inst_33073 = cljs.core.vec(inst_33050);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33099__$1,(14),out,inst_33073);
} else {
if((state_val_33100 === (2))){
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33099__$1,(4),ch);
} else {
if((state_val_33100 === (11))){
var inst_33050 = (state_33099[(7)]);
var inst_33054 = (state_33099[(9)]);
var inst_33060 = (state_33099[(11)]);
var inst_33069 = inst_33050.push(inst_33054);
var tmp33131 = inst_33050;
var inst_33050__$1 = tmp33131;
var inst_33051 = inst_33060;
var state_33099__$1 = (function (){var statearr_33132 = state_33099;
(statearr_33132[(7)] = inst_33050__$1);

(statearr_33132[(8)] = inst_33051);

(statearr_33132[(12)] = inst_33069);

return statearr_33132;
})();
var statearr_33134_33993 = state_33099__$1;
(statearr_33134_33993[(2)] = null);

(statearr_33134_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (9))){
var inst_33051 = (state_33099[(8)]);
var inst_33065 = cljs.core.keyword_identical_QMARK_(inst_33051,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33099__$1 = state_33099;
var statearr_33135_33994 = state_33099__$1;
(statearr_33135_33994[(2)] = inst_33065);

(statearr_33135_33994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (5))){
var inst_33051 = (state_33099[(8)]);
var inst_33054 = (state_33099[(9)]);
var inst_33060 = (state_33099[(11)]);
var inst_33062 = (state_33099[(13)]);
var inst_33060__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33054) : f.call(null,inst_33054));
var inst_33062__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33060__$1,inst_33051);
var state_33099__$1 = (function (){var statearr_33136 = state_33099;
(statearr_33136[(11)] = inst_33060__$1);

(statearr_33136[(13)] = inst_33062__$1);

return statearr_33136;
})();
if(inst_33062__$1){
var statearr_33137_33995 = state_33099__$1;
(statearr_33137_33995[(1)] = (8));

} else {
var statearr_33138_33996 = state_33099__$1;
(statearr_33138_33996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (14))){
var inst_33054 = (state_33099[(9)]);
var inst_33060 = (state_33099[(11)]);
var inst_33075 = (state_33099[(2)]);
var inst_33076 = [];
var inst_33077 = inst_33076.push(inst_33054);
var inst_33050 = inst_33076;
var inst_33051 = inst_33060;
var state_33099__$1 = (function (){var statearr_33139 = state_33099;
(statearr_33139[(7)] = inst_33050);

(statearr_33139[(8)] = inst_33051);

(statearr_33139[(14)] = inst_33075);

(statearr_33139[(15)] = inst_33077);

return statearr_33139;
})();
var statearr_33140_33999 = state_33099__$1;
(statearr_33140_33999[(2)] = null);

(statearr_33140_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (16))){
var state_33099__$1 = state_33099;
var statearr_33144_34000 = state_33099__$1;
(statearr_33144_34000[(2)] = null);

(statearr_33144_34000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (10))){
var inst_33067 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
if(cljs.core.truth_(inst_33067)){
var statearr_33145_34001 = state_33099__$1;
(statearr_33145_34001[(1)] = (11));

} else {
var statearr_33147_34002 = state_33099__$1;
(statearr_33147_34002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (18))){
var inst_33089 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33149_34003 = state_33099__$1;
(statearr_33149_34003[(2)] = inst_33089);

(statearr_33149_34003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (8))){
var inst_33062 = (state_33099[(13)]);
var state_33099__$1 = state_33099;
var statearr_33151_34004 = state_33099__$1;
(statearr_33151_34004[(2)] = inst_33062);

(statearr_33151_34004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29834__auto__ = null;
var cljs$core$async$state_machine__29834__auto____0 = (function (){
var statearr_33152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33152[(0)] = cljs$core$async$state_machine__29834__auto__);

(statearr_33152[(1)] = (1));

return statearr_33152;
});
var cljs$core$async$state_machine__29834__auto____1 = (function (state_33099){
while(true){
var ret_value__29835__auto__ = (function (){try{while(true){
var result__29836__auto__ = switch__29833__auto__(state_33099);
if(cljs.core.keyword_identical_QMARK_(result__29836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29836__auto__;
}
break;
}
}catch (e33154){var ex__29837__auto__ = e33154;
var statearr_33155_34005 = state_33099;
(statearr_33155_34005[(2)] = ex__29837__auto__);


if(cljs.core.seq((state_33099[(4)]))){
var statearr_33157_34006 = state_33099;
(statearr_33157_34006[(1)] = cljs.core.first((state_33099[(4)])));

} else {
throw ex__29837__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34007 = state_33099;
state_33099 = G__34007;
continue;
} else {
return ret_value__29835__auto__;
}
break;
}
});
cljs$core$async$state_machine__29834__auto__ = function(state_33099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29834__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29834__auto____1.call(this,state_33099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29834__auto____0;
cljs$core$async$state_machine__29834__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29834__auto____1;
return cljs$core$async$state_machine__29834__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_33159 = f__30193__auto__();
(statearr_33159[(6)] = c__30192__auto___33984);

return statearr_33159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
