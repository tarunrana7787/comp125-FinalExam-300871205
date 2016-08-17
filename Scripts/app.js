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
    function main() {
        //roll button
        rollButton = new createjs.Bitmap("Assets/images/rollButton.png");
        rollButton.x = 350;
        rollButton.y = 220;
        stage.addChild(rollButton);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map