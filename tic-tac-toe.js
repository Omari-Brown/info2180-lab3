"use strict";
var mark = "X";

window.onload = function() 
{
    console.log("Loaded");
    const tiles = document.getElementById("board").children;
    console.log(tiles);
    var tilestates = new Array(9);
    Array.from(tiles).forEach(function (tile)
    {
        console.log(tile);
        tile.classList.add("square");
        tile.addEventListener("click", function ()
        {
            console.log("Setting properties when clicked if not already set");
            //console.log("Outside if mark is now : " + mark);
            if (!tile.classList.contains("X") && !tile.classList.contains("O"))
            {
                tile.classList.add(mark);
                tile.textContent = mark;
                if (mark == "X")
                {
                    mark = "O";
                    //console.log("Inside if mark is now : " + mark);
                } 
                else
                {
                    mark = "X";
                    //console.log(" Inside if mark is now : " + mark);
                }            
            } 
        });
        tile.addEventListener("mouseover", function ()
        {
            console.log("Changing style of element below mouse");
            tile.classList.add("hover");
        });
        tile.addEventListener("mouseout", function ()
        {
            console.log("Removing style of element below mouse")
            tile.classList.remove("hover");
        });

    });
    
}