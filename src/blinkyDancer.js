var BlinkyDancer = function(top, left, timeBetweenSteps){
  //this = Object.create(BlinkyDancer.prototype); (implicit)

  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancerType = 'blinkyDancer';

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.expand = function(){

  this.$node.animate({
    width: "30%"
  });

};

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.expand();
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


