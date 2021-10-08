"use strict";
window.onload = function() 
{
    console.log("Loaded");
    const tiles = document.getElementById("board").children;
    console.log(tiles);
    Array.from(tiles).forEach(function (tile)
    {
        //console.log(tile);
        tile.setAttribute("class", "square");
    });
    
    
}