(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.back3 = function() {
	this.initialize(img.back3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.back4 = function() {
	this.initialize(img.back4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.back5 = function() {
	this.initialize(img.back5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.car3 = function() {
	this.initialize(img.car3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.car4 = function() {
	this.initialize(img.car4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.logo_blue = function() {
	this.initialize(img.logo_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.logo_white = function() {
	this.initialize(img.logo_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.mag = function() {
	this.initialize(img.mag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,117);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99651").s().p("AmcBKIM2iiIADAPIs2Cig");
	this.shape.setTransform(41.275,8.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tick, new cjs.Rectangle(0,0,82.6,17.9), null);


(lib.text5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text5_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(0,0,160,600), null);


(lib.text1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.mouse_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mouse();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouse_1, new cjs.Rectangle(0,0,39,58.5), null);


(lib.mag_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mag();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mag_1, new cjs.Rectangle(0,0,160,600), null);


(lib.logo_white_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_white();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_white_1, new cjs.Rectangle(0,0,160,600), null);


(lib.logo_blue_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_blue();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_blue_1, new cjs.Rectangle(0,0,160,600), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxORPMAAAgidMAidAAAMAAAAidg");
	mask.setTransform(110.25,110.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99651").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape.setTransform(110.225,110.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(104.7,104.8,11.099999999999994,11), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxORPMAAAgidMAidAAAMAAAAidg");
	mask.setTransform(110.25,110.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43302E").s().p("AhECLQgMgGgEgMQgEgLAGgMIBvjeQAGgLAMgEQALgEALAGQAMAFAEAMQAEAMgGALIhvDeQgGAMgMADQgEACgFAAQgHAAgGgDg");
	this.shape.setTransform(99.8,130.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(91.2,116.6,17.200000000000003,28.30000000000001), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	mask.setTransform(8.925,8.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DA4F3A","#EC614C"],[0,1],7.2,2.5,-8.5,-2.9).s().p("AhYAsIAtiEICEAtIgtCEg");
	this.shape.setTransform(8.925,8.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(3.4,3.4,11.1,11.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxORPMAAAgidMAidAAAMAAAAidg");
	mask.setTransform(110.25,110.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43302E").s().p("AgoEKIgCAAQgGgBgEgGQgEgFABgHIBOnyQAAgHAGgEQAFgEAIABIAAAAQAHABAEAGQAEAGgBAGIhNHyQgBAHgGAEQgFADgFAAIgCAAg");
	this.shape.setTransform(114.9,80.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(109.3,54.3,11.200000000000003,53.10000000000001), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	mask.setTransform(8.925,8.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DA4F3A","#EC614C"],[0,1],7.2,2.5,-8.5,-2.9).s().p("AhYAsIAtiEICEAtIgtCEg");
	this.shape.setTransform(8.925,8.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(3.4,3.4,11.1,11.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AurOsIAA9XIdXAAIAAdXg");
	mask.setTransform(94.025,94.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6843E").s().p("AltNiQiphHiCiCQiCiChHipQhKivAAi/QAAi+BKivQBHipCCiCQCCiCCphHQCvhKC+AAQC/AACvBKQCpBHCCCCQCCCCBHCpQBKCvAAC+QAAC/hKCvQhHCpiCCCQiCCCipBHQivBKi/AAQi+AAivhKg");
	this.shape.setTransform(94.025,94.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,188.1,188.1), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,160,600), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.car4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.car4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car4_1, new cjs.Rectangle(0,0,160,600), null);


(lib.car3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.car3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car3_1, new cjs.Rectangle(0,0,160,600), null);


(lib.car2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.car2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car2_1, new cjs.Rectangle(0,0,160,600), null);


(lib.car1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.car1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.car1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.small_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(19,-6.4,1,1,0,0,0,110.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.small_hand, new cjs.Rectangle(-91.2,-116.6,220.5,220.5), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(94,94,1,1,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,188.1,188.1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxORPMAAAgidMAidAAAMAAAAidg");
	mask.setTransform(110.25,110.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43302E").s().p("AhCBDQgcgbAAgoQAAgnAcgbQAcgcAmAAQAoAAAbAcQAcAbAAAnQAAAngcAcQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(110.225,110.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43302E").s().p("AgwA1IBFh4IAbAQIhEB3g");
	this.shape_1.setTransform(144.2,51.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#43302E").s().p("AgwA0IBFh3IAbAPIhEB4g");
	this.shape_2.setTransform(76.25,169.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43302E").s().p("AhDgUIAPgbIB4BEIgQAcg");
	this.shape_3.setTransform(169.075,144.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#43302E").s().p("AhDgUIAQgbIB3BEIgPAcg");
	this.shape_4.setTransform(51.375,76.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#43302E").s().p("Agwg0IAcgPIBEB3IgbAQg");
	this.shape_5.setTransform(144.2,169.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43302E").s().p("AgwgzIAcgQIBEB4IgbAPg");
	this.shape_6.setTransform(76.25,51.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#43302E").s().p("AhDAVIB4hEIAPAbIh3BFg");
	this.shape_7.setTransform(51.375,144.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#43302E").s().p("AhDAVIB3hEIAQAbIh4BFg");
	this.shape_8.setTransform(169.075,76.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43302E").s().p("AhFAQIAAgfICLAAIAAAfg");
	this.shape_9.setTransform(178.175,110.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#43302E").s().p("AhFAQIAAgfICLAAIAAAfg");
	this.shape_10.setTransform(42.275,110.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#43302E").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_11.setTransform(110.225,178.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#43302E").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_12.setTransform(110.225,42.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_13.setTransform(110.225,110.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkfKqQiFg4hmhnQhnhmg4iFQg6iKAAiWQAAiWA6iJQA4iFBnhmQBmhnCFg4QCKg6CVAAQCXAACJA6QCFA4BmBnQBnBmA4CFQA6CJAACWQAACWg6CKQg4CFhnBmQhmBniFA4QiJA6iXAAQiVAAiKg6g");
	this.shape_14.setTransform(110.225,110.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECECEC").s().p("AlUMoQiehDh5h5Qh5h5hDieQhFijAAiyQAAixBFijQBDieB5h5QB5h5CehDQCjhFCxAAQCzAACiBFQCeBDB5B5QB5B5BDCeQBFCiAACyQAACyhFCjQhDCeh5B5Qh5B5ieBDQiiBFizAAQixAAijhFg");
	this.shape_15.setTransform(110.225,110.275);

	this.instance = new lib.Group();
	this.instance.setTransform(110.2,110.25,1,1,0,0,0,94,94);
	this.instance.alpha = 0.6016;
	this.instance.compositeOperation = "multiply";

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F19F5A").s().p("AmsP4QjGhUiYiZQiZiYhUjGQhWjMgBjhQABjfBWjNQBUjGCZiYQCYiZDGhUQDMhWDggBQDgABDNBWQDGBUCYCZQCZCYBUDGQBWDNABDfQgBDhhWDMQhUDGiZCYQiYCZjGBUQjNBWjgABQjggBjMhWg");
	this.shape_16.setTransform(110.25,110.25);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.instance,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,220.5,220.5), null);


(lib.big_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(0.9,55.95,1,1,0,0,0,110.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_hand, new cjs.Rectangle(-109.3,-54.2,220.5,220.5), null);


(lib.back5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// mouse
	this.instance = new lib.mouse_1();
	this.instance.setTransform(181.85,622.3,0.6224,0.6224,0,0,0,19.5,29.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:19.6,x:138.2,y:361.7},27).wait(9).to({regX:19.5,x:138.35,y:362.05},0).to({regX:19.6,x:178.15,y:622.3},24).wait(1));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(82,330,1,1,0,0,0,82,330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({regX:82.1,regY:330.1,scaleX:0.9109,scaleY:0.9109,x:82.15,y:330.05},0).wait(9).to({regX:82,regY:330,scaleX:1,scaleY:1,x:82,y:330},0).wait(25));

	// text5
	this.instance_2 = new lib.text5_1();
	this.instance_2.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81));

	// back
	this.instance_3 = new lib.back5();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,640.5);


(lib.back4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 800);
	}
	this.frame_67 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 200);
	}
	this.frame_115 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 200);
	}
	this.frame_165 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(48).call(this.frame_115).wait(50).call(this.frame_165).wait(46));

	// car4
	this.instance = new lib.car4_1();
	this.instance.setTransform(-149.7,300,1,1,0,0,0,150,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({x:150},31,cjs.Ease.cubicOut).wait(46));

	// car3
	this.instance_1 = new lib.car3_1();
	this.instance_1.setTransform(-149.7,300,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(1).to({x:310},29,cjs.Ease.cubicIn).wait(66));

	// car2
	this.instance_2 = new lib.car2_1();
	this.instance_2.setTransform(-149.7,300,1,1,0,0,0,150,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({x:150},30,cjs.Ease.cubicOut).wait(1).to({x:310},29,cjs.Ease.cubicIn).wait(114));

	// car1
	this.instance_3 = new lib.car1_1();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({x:310},29,cjs.Ease.cubicIn).wait(163));

	// text4
	this.instance_4 = new lib.text4_1();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211));

	// Layer_1
	this.instance_5 = new lib.back4();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(211));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.7,0,619.7,600);


(lib.back3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.mag_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.instance_1 = new lib.text3_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.back3();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back3_1, new cjs.Rectangle(0,0,160,600), null);


(lib.back1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text1
	this.instance = new lib.text1_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// back
	this.instance_1 = new lib.back1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back1_1, new cjs.Rectangle(0,0,160,600), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// middle
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(110.2,110.2,1,1,0,0,0,110.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// small_hand
	this.instance_1 = new lib.small_hand();
	this.instance_1.setTransform(110.3,110.2,1,1,0,0,0,19.1,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-6.3,rotation:43.6757,y:110.3},299).wait(1));

	// big hand
	this.instance_2 = new lib.big_hand();
	this.instance_2.setTransform(110.3,110.35,1,1,26.1944,0,0,1,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:150,x:110.2,y:110.2},299).wait(1));

	// tick
	this.instance_3 = new lib.tick();
	this.instance_3.setTransform(110.05,109.95,1,1,138.0486,0,0,15.9,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:16,regY:13.9,rotation:900,x:110,y:110},299).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxORPMAAAgidMAidAAAMAAAAidg");
	mask.setTransform(110.25,110.25);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.setTransform(110.2,110.25,1,1,0,0,0,8.9,8.9);

	this.instance_5 = new lib.ClipGroup_3();
	this.instance_5.setTransform(110.2,110.25,1,1,0,0,0,8.9,8.9);

	this.instance_6 = new lib.ClipGroup_5();
	this.instance_6.setTransform(110.2,110.2,1,1,0,0,0,110.2,110.2);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-45.6,311.7,311.70000000000005);


(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(71,245,0.7347,0.7347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(43.5,217.6,216.89999999999998,216.79999999999998), null);


(lib.back2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clock
	this.instance = new lib.clock();
	this.instance.setTransform(79.6,290.1,0.738,0.738,0,0,0,149.8,300.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.text2_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.back2();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back2_1, new cjs.Rectangle(0,0,161.2,600), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,42,84,127,169,211];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
		
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1800);
	}
	this.frame_42 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1800);
	}
	this.frame_84 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1400);
	}
	this.frame_127 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 4200);
	}
	this.frame_169 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.back5.play();
		
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_211 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(42).call(this.frame_84).wait(43).call(this.frame_127).wait(42).call(this.frame_169).wait(42).call(this.frame_211).wait(91));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(80,300,0.2198,6.6667,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(302));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_42 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_43 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_44 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_45 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_46 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_47 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_48 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_49 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_50 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_51 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_52 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_53 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_54 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_55 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_56 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_57 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_58 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_59 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_60 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_61 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_62 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_63 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_64 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_65 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_66 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_67 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_68 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_69 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_70 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_71 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_72 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_73 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_74 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_75 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_76 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_77 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_78 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_79 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_80 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_81 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_82 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_83 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_84 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_85 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_86 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_87 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_88 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_89 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_90 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_91 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_92 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_93 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_94 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_95 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_96 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_97 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_98 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_99 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_100 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_101 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_102 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_103 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_104 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_105 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_106 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_107 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_108 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_109 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_110 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_111 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_112 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_113 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_114 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_115 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_116 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_117 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_118 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_119 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_120 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_121 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_122 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_123 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_124 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_125 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_126 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_127 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_graphics_42,x:150,y:300}).wait(1).to({graphics:mask_graphics_43,x:150,y:299.95}).wait(1).to({graphics:mask_graphics_44,x:150,y:299.75}).wait(1).to({graphics:mask_graphics_45,x:150,y:299.15}).wait(1).to({graphics:mask_graphics_46,x:150,y:297.95}).wait(1).to({graphics:mask_graphics_47,x:150,y:295.95}).wait(1).to({graphics:mask_graphics_48,x:150,y:293}).wait(1).to({graphics:mask_graphics_49,x:150,y:288.9}).wait(1).to({graphics:mask_graphics_50,x:150,y:283.4}).wait(1).to({graphics:mask_graphics_51,x:150,y:276.4}).wait(1).to({graphics:mask_graphics_52,x:150,y:267.6}).wait(1).to({graphics:mask_graphics_53,x:150,y:256.9}).wait(1).to({graphics:mask_graphics_54,x:150,y:244}).wait(1).to({graphics:mask_graphics_55,x:150,y:228.85}).wait(1).to({graphics:mask_graphics_56,x:150,y:211.1}).wait(1).to({graphics:mask_graphics_57,x:150,y:190.7}).wait(1).to({graphics:mask_graphics_58,x:150,y:167.3}).wait(1).to({graphics:mask_graphics_59,x:150,y:140.85}).wait(1).to({graphics:mask_graphics_60,x:150,y:111.1}).wait(1).to({graphics:mask_graphics_61,x:150,y:77.8}).wait(1).to({graphics:mask_graphics_62,x:150,y:40.85}).wait(1).to({graphics:mask_graphics_63,x:150,y:0}).wait(1).to({graphics:mask_graphics_64,x:150,y:-40.85}).wait(1).to({graphics:mask_graphics_65,x:150,y:-77.8}).wait(1).to({graphics:mask_graphics_66,x:150,y:-111.05}).wait(1).to({graphics:mask_graphics_67,x:150,y:-140.85}).wait(1).to({graphics:mask_graphics_68,x:150,y:-167.3}).wait(1).to({graphics:mask_graphics_69,x:150,y:-190.65}).wait(1).to({graphics:mask_graphics_70,x:150,y:-211.1}).wait(1).to({graphics:mask_graphics_71,x:150,y:-228.85}).wait(1).to({graphics:mask_graphics_72,x:150,y:-244}).wait(1).to({graphics:mask_graphics_73,x:150,y:-256.9}).wait(1).to({graphics:mask_graphics_74,x:150,y:-267.6}).wait(1).to({graphics:mask_graphics_75,x:150,y:-276.4}).wait(1).to({graphics:mask_graphics_76,x:150,y:-283.4}).wait(1).to({graphics:mask_graphics_77,x:150,y:-288.9}).wait(1).to({graphics:mask_graphics_78,x:150,y:-293}).wait(1).to({graphics:mask_graphics_79,x:150,y:-295.95}).wait(1).to({graphics:mask_graphics_80,x:150,y:-297.9}).wait(1).to({graphics:mask_graphics_81,x:150,y:-299.1}).wait(1).to({graphics:mask_graphics_82,x:150,y:-299.75}).wait(1).to({graphics:mask_graphics_83,x:150,y:-299.95}).wait(1).to({graphics:mask_graphics_84,x:150,y:-300}).wait(1).to({graphics:mask_graphics_85,x:-150,y:300}).wait(1).to({graphics:mask_graphics_86,x:-150,y:300}).wait(1).to({graphics:mask_graphics_87,x:-149.85,y:300}).wait(1).to({graphics:mask_graphics_88,x:-149.55,y:300}).wait(1).to({graphics:mask_graphics_89,x:-148.95,y:300}).wait(1).to({graphics:mask_graphics_90,x:-148,y:300}).wait(1).to({graphics:mask_graphics_91,x:-146.5,y:300}).wait(1).to({graphics:mask_graphics_92,x:-144.45,y:300}).wait(1).to({graphics:mask_graphics_93,x:-141.7,y:300}).wait(1).to({graphics:mask_graphics_94,x:-138.2,y:300}).wait(1).to({graphics:mask_graphics_95,x:-133.8,y:300}).wait(1).to({graphics:mask_graphics_96,x:-128.45,y:300}).wait(1).to({graphics:mask_graphics_97,x:-122,y:300}).wait(1).to({graphics:mask_graphics_98,x:-114.4,y:300}).wait(1).to({graphics:mask_graphics_99,x:-105.55,y:300}).wait(1).to({graphics:mask_graphics_100,x:-95.35,y:300}).wait(1).to({graphics:mask_graphics_101,x:-83.65,y:300}).wait(1).to({graphics:mask_graphics_102,x:-70.45,y:300}).wait(1).to({graphics:mask_graphics_103,x:-55.55,y:300}).wait(1).to({graphics:mask_graphics_104,x:-38.9,y:300}).wait(1).to({graphics:mask_graphics_105,x:-20.45,y:300}).wait(1).to({graphics:mask_graphics_106,x:0,y:300}).wait(1).to({graphics:mask_graphics_107,x:20.4,y:300}).wait(1).to({graphics:mask_graphics_108,x:38.9,y:300}).wait(1).to({graphics:mask_graphics_109,x:55.55,y:300}).wait(1).to({graphics:mask_graphics_110,x:70.4,y:300}).wait(1).to({graphics:mask_graphics_111,x:83.65,y:300}).wait(1).to({graphics:mask_graphics_112,x:95.35,y:300}).wait(1).to({graphics:mask_graphics_113,x:105.55,y:300}).wait(1).to({graphics:mask_graphics_114,x:114.4,y:300}).wait(1).to({graphics:mask_graphics_115,x:122,y:300}).wait(1).to({graphics:mask_graphics_116,x:128.45,y:300}).wait(1).to({graphics:mask_graphics_117,x:133.8,y:300}).wait(1).to({graphics:mask_graphics_118,x:138.2,y:300}).wait(1).to({graphics:mask_graphics_119,x:141.7,y:300}).wait(1).to({graphics:mask_graphics_120,x:144.45,y:300}).wait(1).to({graphics:mask_graphics_121,x:146.5,y:300}).wait(1).to({graphics:mask_graphics_122,x:147.95,y:300}).wait(1).to({graphics:mask_graphics_123,x:148.95,y:300}).wait(1).to({graphics:mask_graphics_124,x:149.55,y:300}).wait(1).to({graphics:mask_graphics_125,x:149.85,y:300}).wait(1).to({graphics:mask_graphics_126,x:150,y:300}).wait(1).to({graphics:mask_graphics_127,x:150,y:300}).wait(175));

	// logo white
	this.instance = new lib.logo_white_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302));

	// back1
	this.instance_1 = new lib.back1_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-10},42,cjs.Ease.cubicInOut).wait(260));

	// back2
	this.instance_2 = new lib.back2_1();
	this.instance_2.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({y:-300},42,cjs.Ease.cubicInOut).wait(218));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_42 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_1_graphics_42,x:150,y:300}).wait(43).to({graphics:mask_1_graphics_85,x:150,y:300}).wait(1).to({graphics:mask_1_graphics_86,x:150,y:300}).wait(1).to({graphics:mask_1_graphics_87,x:150.15,y:300}).wait(1).to({graphics:mask_1_graphics_88,x:150.45,y:300}).wait(1).to({graphics:mask_1_graphics_89,x:151.05,y:300}).wait(1).to({graphics:mask_1_graphics_90,x:152,y:300}).wait(1).to({graphics:mask_1_graphics_91,x:153.5,y:300}).wait(1).to({graphics:mask_1_graphics_92,x:155.55,y:300}).wait(1).to({graphics:mask_1_graphics_93,x:158.3,y:300}).wait(1).to({graphics:mask_1_graphics_94,x:161.8,y:300}).wait(1).to({graphics:mask_1_graphics_95,x:166.2,y:300}).wait(1).to({graphics:mask_1_graphics_96,x:171.55,y:300}).wait(1).to({graphics:mask_1_graphics_97,x:178,y:300}).wait(1).to({graphics:mask_1_graphics_98,x:185.6,y:300}).wait(1).to({graphics:mask_1_graphics_99,x:194.45,y:300}).wait(1).to({graphics:mask_1_graphics_100,x:204.65,y:300}).wait(1).to({graphics:mask_1_graphics_101,x:216.35,y:300}).wait(1).to({graphics:mask_1_graphics_102,x:229.55,y:300}).wait(1).to({graphics:mask_1_graphics_103,x:244.45,y:300}).wait(1).to({graphics:mask_1_graphics_104,x:261.1,y:300}).wait(1).to({graphics:mask_1_graphics_105,x:279.55,y:300}).wait(1).to({graphics:mask_1_graphics_106,x:300,y:300}).wait(1).to({graphics:mask_1_graphics_107,x:320.4,y:300}).wait(1).to({graphics:mask_1_graphics_108,x:338.9,y:300}).wait(1).to({graphics:mask_1_graphics_109,x:355.55,y:300}).wait(1).to({graphics:mask_1_graphics_110,x:370.4,y:300}).wait(1).to({graphics:mask_1_graphics_111,x:383.65,y:300}).wait(1).to({graphics:mask_1_graphics_112,x:395.35,y:300}).wait(1).to({graphics:mask_1_graphics_113,x:405.55,y:300}).wait(1).to({graphics:mask_1_graphics_114,x:414.4,y:300}).wait(1).to({graphics:mask_1_graphics_115,x:422,y:300}).wait(1).to({graphics:mask_1_graphics_116,x:428.45,y:300}).wait(1).to({graphics:mask_1_graphics_117,x:433.8,y:300}).wait(1).to({graphics:mask_1_graphics_118,x:438.2,y:300}).wait(1).to({graphics:mask_1_graphics_119,x:441.7,y:300}).wait(1).to({graphics:mask_1_graphics_120,x:444.45,y:300}).wait(1).to({graphics:mask_1_graphics_121,x:446.5,y:300}).wait(1).to({graphics:mask_1_graphics_122,x:447.95,y:300}).wait(1).to({graphics:mask_1_graphics_123,x:448.95,y:300}).wait(1).to({graphics:mask_1_graphics_124,x:449.55,y:300}).wait(1).to({graphics:mask_1_graphics_125,x:449.85,y:300}).wait(1).to({graphics:mask_1_graphics_126,x:450,y:300}).wait(1).to({graphics:mask_1_graphics_127,x:450,y:300}).wait(175));

	// logo blue
	this.instance_3 = new lib.logo_blue_1();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(302));

	// back3
	this.instance_4 = new lib.back3_1();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({x:310,y:300.1},42,cjs.Ease.cubicInOut).wait(175));

	// back4
	this.instance_5 = new lib.back4_1();
	this.instance_5.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).wait(42).to({y:-300},42,cjs.Ease.cubicInOut).wait(133));

	// back5
	this.back5 = new lib.back5_1();
	this.back5.name = "back5";
	this.back5.setTransform(150,300,1,1,0,0,0,150,300);
	this.back5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back5).wait(127).to({_off:false},0).wait(175));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,400,901);
// library properties:
lib.properties = {
	id: '6C4EF6AA645440568BCDE0F06208653F',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back1.jpg?1711389056842", id:"back1"},
		{src:"images/back2.jpg?1711389056842", id:"back2"},
		{src:"images/back3.jpg?1711389056842", id:"back3"},
		{src:"images/back4.jpg?1711389056842", id:"back4"},
		{src:"images/back5.jpg?1711389056842", id:"back5"},
		{src:"images/car1.png?1711389056842", id:"car1"},
		{src:"images/car2.png?1711389056842", id:"car2"},
		{src:"images/car3.png?1711389056842", id:"car3"},
		{src:"images/car4.png?1711389056842", id:"car4"},
		{src:"images/cta.png?1711389056842", id:"cta"},
		{src:"images/logo_blue.png?1711389056842", id:"logo_blue"},
		{src:"images/logo_white.png?1711389056842", id:"logo_white"},
		{src:"images/mag.png?1711389056842", id:"mag"},
		{src:"images/mouse.png?1711389056842", id:"mouse"},
		{src:"images/text1.png?1711389056842", id:"text1"},
		{src:"images/text2.png?1711389056842", id:"text2"},
		{src:"images/text3.png?1711389056842", id:"text3"},
		{src:"images/text4.png?1711389056842", id:"text4"},
		{src:"images/text5.png?1711389056842", id:"text5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6C4EF6AA645440568BCDE0F06208653F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;