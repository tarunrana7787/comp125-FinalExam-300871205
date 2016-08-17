/* author: Tarun Rana
  Student id : 300871205
  Date : 17th august 2016
  Program : java script
  */

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var rollButton;
    var blank;
    var die1;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
      function rollButton_clicked() {
        die1 = Math.floor((Math.random() * 6) + 1);
        console.log(die1);

    function main() {
        //roll button
        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");
        rollButton.x = 350;
        rollButton.y = 220;
        stage.addChild(rollButton);
    }
    var Diceblank = new createjs.Bitmap("../Assets/images/blank.png");
        var Dice = new createjs.Bitmap("../Assets/images/blank.png");
        var Dice1 = new createjs.Bitmap("../Assets/images/1.png");
        var Dice2 = new createjs.Bitmap("../Assets/images/2.png");
        var Dice3 = new createjs.Bitmap("../Assets/images/3.png");
        var Dice4 = new createjs.Bitmap("../Assets/images/4.png");
        var Dice5 = new createjs.Bitmap("../Assets/images/5.png");
        var Dice6 = new createjs.Bitmap("../Assets/images/6.png");
        var rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        var Buttonhelper = new createjs.ButtonHelper(rollButton,"normal","hover","clicked");
        rollButton.addEventListener('clicked', roll);
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map