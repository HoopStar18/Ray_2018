var game_canvas;
var game_context;

var cloudx;

function initGame() 
{
 game_canvas = document.getElementById("gameCanvas");

 game_context = game_canvas.getContext("2d");

 setInterval(updateGame, 10);

 cloudx = game_canvas.width;
}

function updateGame() 
{
game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);


game_context.fillStyle = "red";

game_context.fillRect(50, 50, 100, 100);

game_context.fillStyle = "green";

game_context.fillRect(40, (game_canvas.height-100), 50, 100);

game_context.fillStyle = "blue";

game_context.fillRect(((game_canvas.width/2)+50), (game_canvas.height/2), 75, 75);

game_context.fillStyle = "yellow";

cloudx=cloudx-1;

game_context.fillRect(cloudx,10,100,50);


}