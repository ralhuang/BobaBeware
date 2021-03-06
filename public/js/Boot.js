var TopDownGame = TopDownGame || {};
 
TopDownGame.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
TopDownGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('logo','assets/Menu/BobaBeware.png');
    this.load.image('companyLogo','assets/Menu/logo.png');
    this.game.add.text(0, 0, "font", {font:"1px ThinkNothing", fill:"#FFFFFF"});
    this.game.load.shader('background', 'assets/Shaders/background.frag');
  },
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#000000';
 
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 640;
	  this.scale.minHeight = 640;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
 
    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};