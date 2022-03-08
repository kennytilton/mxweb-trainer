![Matrix cell culture](../images/mx-banner-red.jpg)

# mxWeb Trainer -- CLJS

This is the CLJS version of the mxWeb Trainer. We will have a JS version RSN.

The trainer combines in one hybrid package:
* an exemplar Web application;
* [Wiki](https://github.com/kennytilton/mxweb-trainer/wiki) documentation; and
* hands-on learning exercises for you to complete.

It also comes with an author-instructor, `@kennytilton`, available by DM or in the #matrix channel on the [#clojurians](clojurians.slack.com) Slack.

Now please find below instructions on running the app, in its WIP current form. The opening page will guide you to our [Wiki](https://github.com/kennytilton/mxweb-trainer/wiki) for instructions on following the progressive learning activities.

## Required Software

- [node.js (v6.0.0+)](https://nodejs.org/en/download/)
- [Java JDK (8+)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) or [Open JDK (8+)](http://jdk.java.net/10/)

## Running the Example

```bash
git clone https://github.com/kennytilton/mxweb-trainer mxweb-trainer
cd mxweb-trainer/cljs
npm install
npx shadow-cljs server
```

This ^^^ runs the `shadow-cljs` server process to which all following commands will talk. It does not return us to a terminal prompt. We leave it running and open a new terminal to continue.

The first startup takes a bit of time since it has to download all the dependencies and do some prep work. Once this is running we can get started.

```txt
npx shadow-cljs watch app
```

This, too, will not return us to a terminal prompt. It will begin the compilation of the configured `:app` build and re-compile whenever we change a file. 

When we see a "Build completed." message our build is ready to be used.

```txt
[:app] Build completed. (23 files, 4 compiled, 0 warnings, 7.41s)
```

We can now then open [http://localhost:8020](http://localhost:8020).

# Matrix from 30,000 feet
With the Matrix library, global variables or individual properties of objects can be expressed as so-called *cells*. Cells come in two flavors. *Formulaic* cells use standard HLL code to compute their value from other cells. For a dead simple example, the *TodoMVC* rules mandate we apply the "completed" class to to-do LIs if and only if the user has marked them as, well, completed:
````cljs
  (li {:class   (c? (when (<mget todo :completed)
                        "completed"))
       ...}...)
````
Above we see the CSS `class` tracking the completed property of the lexically closed-over `todo`, another Matrix-aware object lifted from `window.localStorage`. `(<mget <x> <y>)` establishes dependency of the enclosing formula on property `y` of `x`. A so-called *observer* (discussed below) automatically propagates freshly computed values of `class` to the actual DOM.
                      
*Input* cells are assigned new values by conventional imperative code, usually in an event handler.
````cljs
(input {:class "toggle" ::tag/type "checkbox"
        :checked (c? (<mget todo :completed))
        :onclick #(mswap!> todo :completed)}) ;; <-- mswap!> does swap and triggers dataflow to dependents
````
`mswap!>` is a dataflow "writer" that mirrors `<mget`. It causes all direct or indirect dependents to recalculate. (Note also the `checked` attribute, another example of a property following the `completed` property of our todo.)

Why the "input" characterization? It cannot be rules all the way down. These cells are the inputs into the dataflow from outside imperative code. The diagram below is of a *directed acyclic graph* depicting the flow that arises when input cells change and their new values are consumed by formulaic cells (when their recomputation is triggered). In the diagram below, cells 7, 5, and 3 would be the input cells.

![DAG graphic](https://github.com/kennytilton/matrix/blob/main/cljs/matrix/resources/Directed_acyclic_graph.png?raw=true) 

The dataflow engine propagates each new input value by recursively recomputing dependent formulaic cells in a [glitch](https://en.wikipedia.org/wiki/Reactive_programming#Glitches)-free cascade. We get useful behavior out of this cascading calculation via "on change" callbacks. We name these callbacks "observers" (not to be confused with [RxJS](http://reactivex.io/rxjs/) or [MobX](https://github.com/mobxjs/mobx/blob/master/README.md) *observables*). Much simplified:
````cljs
(defmethod observe-by-type [:tiltontec.tag.html/tag] [slot me new-value prior-value _]
  (case slot
        :hidden (set! (.-hidden dom) new-value)
        :class (classlist/set dom new-value)
        :checked (set! (.-checked (tag-dom me)) new-value
        ....)))
````
In contrast with RxJS and MobX, Matrix observers work off to the side, if you will, as ancillary participants tapping into the main flow to produce tangible behavior. Think "UN observer vs. combatant". 

We refer to the combination of cascading recomputation and consequent observation as *dataflow*. Objects with Cells as properties are called *models* in the sense of a *working model*, this because these objects change and act autonomously as driven by dataflow. Hence the *md-* prefix, by the way.

Matrix includes support for arranging models as a tree in which a model can have zero or more children and children have one parent and have a reference to that parent. This omni-directional linkage means any cell formula or observer can reach any other cell in the tree of models; they have perfect information. We call a population of objects connected by interdependent cell properties a *matrix* in concordance with this definition (forget the otherwise fine movie): 

> ma·trix ˈmātriks *noun* an environment in which something else takes form. *Origin:* Latin, female animal used for breeding, parent plant, from *matr-*, *mater*

[To be continued]

## notes from the shadow-cljs doc

## Live reload

To see the live reload in action you can edit the `src/main/start/browser.cljs`. Some output will be printed in the browser console.

## REPL

During development it the REPL is very useful.

From the command line use `npx shadow-cljs cljs-repl app`.

```
shadow-cljs - config .../shadow-cljs.edn
shadow-cljs - connected to server
cljs.user=>
```

This can now be used to eval code in the browser (assuming you still have it open). Try `(js/alert "Hi.")` and take it from there. You might want to use `rlwrap npx shadow-cljs cljs-repl app` if you intend to type a lot here.

You can exit the REPL by either `CTRL+C` or typing `:repl/quit`.


## Release

The `watch` process we started is all about development. It injects the code required for the REPL and the all other devtools but we do not want any of that when putting the code into "production" (ie. making it available publicly).

The `release` action will remove all development code and run the code through the Closure Compiler to produce a minified `main.js` file. Since that will overwrite the file created by the `watch` we first need to stop that.

Use `CTRL+C` to stop the `watch` process and instead run `npx shadow-cljs release app`.

When done you can open `http://localhost:8020` and see the `release` build in action. At this point you would usually copy the `public` directory to the "production" web server.

Note that in the default config we overwrote the `public/js/main.js` created by the `watch`. You can also configure a different path to use for release builds but writing the output to the same file means we do not have to change the `index.html` and test everything as is.
