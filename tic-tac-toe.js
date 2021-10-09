"use strict";
var mark = "X";
var freetiles = 9;

window.onload = function() 
{
    console.log("Loaded");
    const tiles = document.getElementById("board").children;
    console.log(tiles);
    var tilestates = new Array(9);
    Array.from(tiles).forEach(function (tile, index)
    {
        //console.log(tile);
        //console.log(index);
        tile.classList.add("square");
        tile.addEventListener("click", onclick);
        tile.addEventListener("mouseover", function ()
        {
            //console.log("Changing style of element below mouse");
            tile.classList.add("hover");
        });
        tile.addEventListener("mouseout", function ()
        {
            //console.log("Removing style of element below mouse")
            tile.classList.remove("hover");
        });
        
        function onclick()
        {
            console.log("Setting properties when clicked if not already set");
            //console.log("Outside if mark is now : " + mark);
            if (!tile.classList.contains("X") && !tile.classList.contains("O"))
            {
                tile.classList.add(mark);
                tile.textContent = mark;
                freetiles--;
                tilestates[index]=mark;
                //console.log("Placed " + mark + " in tile "+ index);
                //console.log("Mark in tile state is "+ tilestates[index]);
                checkwinner();
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
        }

        /*function endGame()
        {
            console.log("Ending game.");
            const tiles = document.getElementById("board").children;
            Array.from(tiles).forEach(function (tile)
            {
                console.log("Removing listeners");
                console.log(tile.textContent);
                tile.removeEventListener('click', onclick);
                console.log(tile.textContent);
            });
        }*/
        function checkwinner()
        {
            console.log("Checking Winners");
            for(var x = 0; x <= 6; x=x+3 )
            {
                //console.log("For loop x is " + x);
                if((tilestates[x] == "X" || tilestates[x] == "O") && tilestates[x] == tilestates[x+1] && tilestates[x] == tilestates[x+2])
                {
                    console.log("Inside if statement");
                    document.getElementById("status").textContent = "Congratulations! "+  mark + " is the Winner!";
                    endGame();
                    break;
                }
            }
            for(var y = 0; y <= 2; y++ )
            {
                //console.log("For loop y is " + y);
                if((tilestates[y] == "X" || tilestates[y] == "O") && tilestates[y] == tilestates[y+3] && tilestates[y] == tilestates[y+6])
                {
                    console.log("Inside if statement");
                    document.getElementById("status").textContent = "Congratulations! "+  mark + " is the Winner!";
                    break;
                }
            }
            //console.log("Checking diagonals");
            if((tilestates[0] == "X" || tilestates[0] == "O") && tilestates[0] == tilestates[4] && tilestates[0] == tilestates[8])
            {
                console.log("Inside if statement");
                document.getElementById("status").textContent = "Congratulations! "+  mark + " is the Winner!";
            } else if ((tilestates[2] == "X" || tilestates[2] == "O") && tilestates[2] == tilestates[4] && tilestates[2] == tilestates[6])
            {
                console.log("Inside if statement");
                document.getElementById("status").textContent = "Congratulations! "+  mark + " is the Winner!";
            }
            if (freetiles == 0)
            {
            console.log("Inside if statement");
            document.getElementById("status").textContent = "Oh no! There is no winner";
            }
        }
    });
    
}