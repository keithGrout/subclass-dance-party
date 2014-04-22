// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  //this = Object.create(Dancer.prototype); (implicit)
  //var instance = Object.create(Dancer.prototype);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.counter = 0;
  this.colorStr = "blue";
  this.top = top;
  this.left = left;
  this.dancerType = "dancer";
  this.speed = 50;



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // instance one sets the position to some random default point within the body
  this.setPosition(top, left);
  //return this;
};

Dancer.prototype.lineup = function(top){
  var styleSettings = {
    top: top
  };
  this.$node.css(styleSettings);

};

Dancer.prototype.updateSpeed = function(left){
  var styleSettings = {
    left: left
  };
  this.$node.css(styleSettings);

};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function(){

    that.updatePosition();
    //that.changeSize();

    that.changeColor(that.colorStr);
    that.step();

  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left

  };
  this.$node.css(styleSettings);
};

Dancer.prototype.updatePosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    left: this.left
  };
  this.left = this.left + this.speed;
  if (this.left > $(document).width()){
    this.left = 0;
  }
  this.$node.css(styleSettings);
};

Dancer.prototype.changeColor = function(color){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  if (this.colorStr === "blue"){
    if (this.counter < 2){
      this.counter ++;
    } else{
      this.colorStr = "red";
      this.counter = 0;
    }
  } else if (this.colorStr === "red"){
    if (this.counter < 2){
      this.counter ++;
    } else{
      this.colorStr = "blue";
      this.counter = 0;
    }
  }
  var styleSettings = {
    backgroundColor: color,
  };
  this.$node.css(styleSettings);
};
