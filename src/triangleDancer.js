var TriangleDancer = function(top, left, timeBetweenSteps){
  //this = Object.create(BlinkyDancer.prototype); (implicit)

  Dancer.call(this,top, left, timeBetweenSteps);
  //this.$node = $('<span class="triangle"></span>');
  this.setPosition(top, left);
  this.dancerType = "triangleDancer";

};

TriangleDancer.prototype = Object.create(Dancer.prototype);

TriangleDancer.prototype.constructor = TriangleDancer;

TriangleDancer.prototype.tempStep = Dancer.prototype.step;

TriangleDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.tempStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


