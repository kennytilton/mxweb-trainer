![Matrix cell culture](images/mx-banner-red.jpg)

# mxWeb Trainer
Welcome to `mxweb-trainer`, the learn-by-doing repo for [Matrix](https://github.com/kennytilton/matrix).

Matrix is the generic, point-reactive engine that began as Common Lisp [Cells](https://github.com/kennytilton/cells) twenty-five years ago, and has been used to drive several significant enterprise-scale applications. [Tilton's Algebra](http://tiltonsalgebra.com/#) and an [AskHN Who's Hiring browser](https://kennytilton.github.io/whoishiring/) are two.

Matrix manages even the most complex, asynchronous application state transparently and automatically, simply by watching application state usage at run-time. [MobX](https://mobx.js.org/README.html) is roughly comparable.

The prime use case for automatic state management is building GUI interfaces, so our Matrix trainer is also a trainer in using [mxWeb](https://github.com/kennytilton/matrix/tree/main/cljs/mxweb).

Matrix has native versions for both JS, CLJS, and ClojureDart (CLJD). mxWeb stacks exist in varying degrees of completeness for:
* JS + HTML/CSS;
* CLJS + HTML/CSS;
* CLJD + Flutter;
* CJLS + React web; and
* CLJS + ReactNative.

We will port this trainer to all the above RSN, but for now we just have the CLJS+HTML/CSS version. Please continue [here](https://github.com/kennytilton/mxweb-trainer/wiki) to get started on mxWeb/Matrix.
