var BlueBlinkyDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>');
  //this.setPosition(top, left);
  this.makeBlue();

};

BlueBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
BlueBlinkyDancer.prototype.constructor = BlueBlinkyDancer;

BlueBlinkyDancer.prototype.makeBlue = function(){
  var styleSettings = {
    border:"10px solid blue"
  };

  this.$node.css(styleSettings);

};
