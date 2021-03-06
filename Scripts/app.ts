/* author: Tarun Rana
  Student id : 300871205
  Date : 17th august 2016
  program : java script
  */


module core {
    "use strict";

    let canvas: HTMLElement;
    let stage: createjs.Stage;


    // app entry function
    function init(): void {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); 
        createjs.Ticker.framerate = 60; 
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
 
    function gameLoop(): void {

        stage.update(); 
    }

    function main(): void {
        
        
    }

    window.addEventListener("load", init);

}