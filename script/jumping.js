/*
var game_canvas;
var game_context;
var game_loaded = false;

var title = "Hola";
var titleMenu = "Jumping";
var description = "Jumping consiste en saltar los";
var description2 = "obstaculos que te encontraras";
var description3 =  "en tu camino.";
var backgroundColor = "black";
var colorMenu = "Green";
var colorDescription = "Red";
var fontColor = "white";

var background = "black";
var currentPanel = 0;
*/


//GameEngine
var game_engine = 
    {
        canvas : null,
        context : null,
        loaded : false,
        currentPanel : 0
    }

//SplashScreen 1 Config.
var game_configOne =
{
    //Main Settings
    fontColor : "White",
    background : "Black",
    fontDef : "16px Arial",
    
    //Menu Settings
    titleMenu : "Jumping",
    colorBackMenu : "Green",
    
    //DescriptionSettings
    description : "1- Menu",
    description2 : "2- Ayuda",
    description3 :  "3- Credito",
    descriptionBackColor : "Red"
}

var game_configTwo = 
    {
        fontColor : "Blue",
        background : "Magenta",
        fontDef : "16px Arial",
        
        welcomeMenu : "Bienvenido",
        colorBackWelcomeMenu : "White",
        
        instruction : "Haz cliq P para empezar",
        colorInstruction : "Black"
    }

var game_configThree = 
    {
        fontColor : "White",
        background : "Green",
        fontDef : "16px Arial",
        
        pauseMenu : "STOP",
        colorBackPause : "Black",
        
        pauseDescription : "El juego está parado",
        colorPause : "Blue"
    }

var game_configFour = 
    {
        fontColor : "White",
        background : "Green",
        fontDef : "16px Arial",
        
        ayudaMenu : "Help",
        colorBackAyuda : "Black",
        
        ayudaDescription : "¿Que necesitas?",
        colorAyuda : "Blue"
    }

var game_configFive = 
    {
        fontColor : "White",
        background : "Green",
        fontDef : "16px Arial",
        
        creditoMenu : "Credito",
        colorBackCredito : "Black",
        
        creditoDescription : "Autores",
        colorCredito : "Blue"
    }

function initGame()
{
    game_engine.canvas = document.getElementById("gameCanvas");
    game_engine.context = game_engine.canvas.getContext("2d");
    
    if(!game_engine.loaded)
    {
        document.addEventListener('keydown', function(event)
        {
            captureGameInputs(event);
            //splashScreenInputs(event);
        });
        
        setInterval(updateGame, 10);
        game_engine.loaded = true;
        startGame();
    }
    console.log("Juego cargado");
}

function captureGameInputs(event)
{
    switch(game_engine.currentPanel)
    {
        case 0:
            splashScreenInputs(event);
            break;
        case 1:
            initScreenInput(event);
            break;
        case 2:
           pauseScreenInput(event);
            break;
        case 3:
           ayudaScreenInput(event);
            break;
        case 4:
           creditoScreenInput(event);
            break;         
        default:
            console.log("sin definir");
            break;
    }
}

function updateGame()
{
    game_engine.context.clearRect(0, 0,  game_engine.canvas.width,  game_engine.canvas.height);
    
    switch(game_engine.currentPanel)
    {
        case 0:
            splashScreen();
            break;
        case 1:
            splashScreenTwo();
            break;
        case 2 :
            splashScreenThree();
            break;
        case 3:
            splashScreenFour();
            break;
        case 4:
            splashScreenFive();
            break;
        default:
            console.log("sin definir");
            break;
    }
}

function splashScreenInputs(event)
{
    if(event.keyCode == 49) 
    {
        game_engine.currentPanel = 1;
    }
    if(event.keyCode == 50)
    {
        game_engine.currentPanel = 3;
    }
    
    if(event.keyCode == 51)
    {
        game_engine.currentPanel = 4;
    }
}

function initScreenInput(event)
{
        if(event.keyCode == 83) 
    {
        game_engine.currentPanel = 2;
    }
}

function pauseScreenInput(event)
{
        if(event.keyCode == 83) 
    {
        game_engine.currentPanel = 0;
    }
}

function gameScreenInput(event)
{
        if(event.keyCode == 83) 
    {
        game_engine.currentPanel = 0;
    }
}

function ayudaScreenInput(event)
{
        if(event.keyCode == 83) 
    {
        game_engine.currentPanel = 0;
    }
}

function creditoScreenInput(event)
{
        if(event.keyCode == 83) 
    {
        game_engine.currentPanel = 0;
    }
}

function splashScreen()
{   
    drawBackgroundComponent();
    drawHeaderCompoent();
    drawDescriptionComponent();
}

function splashScreenTwo()
{
    //welcomePanel();
    //drawWelcomeComponent();
    //drawInstructionComponent();
    //startGame();
    updateGameArea();
}

function splashScreenThree()
{
    drawMenuBackround();
    drawPauseMenuComponent();
    drawMenuDescriptionComponent();
}

function splashScreenFour()
{
    drawAyudaBackgropundComponent();
    drawAyudaMenuComponent();
    drawAyudaDescriptionComponent();
}

function splashScreenFive()
{
    drawCreditoBackgropundComponent();
    drawCreditoMenuComponent();
    drawCreditoDescriptionComponent();
}

//////////////////////////////////////

function drawBackgroundComponent()
{
    drawPanel(0, 0, 450, 320);
}

function drawHeaderCompoent()
{   
    drawMenuPanel(0, 0, 450, 50);
    drawMenuText(200, 25,  game_configOne.titleMenu);    
}

function drawDescriptionComponent()
{
    drawDescriptionPanel(0, 50, 230, 100);
    drawDescriptionText(0, 62,  game_configOne.description);
    drawDescriptionTextTwo(0, 78,  game_configOne.description2);
    drawDescriptionTextThree(0, 94,  game_configOne.description3);
}

function drawPanel(posx, posy, width, height)
{   
    game_engine.context.fillStyle =  game_configOne.background;
    game_engine.context.fillRect(posx, posy, width, height);
}

function drawMenuPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle =  game_configOne.colorBackMenu;
    game_engine.context.fillRect(posx, posy, width, height);
}

function drawMenuText(posx, posy, text)
{
    game_engine.context.fillStyle =  game_configOne.fontColor;
    game_engine.context.font = game_configOne.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function drawText(posx, posy, text)
{
    game_engine.context.fillStyle =  game_configOne.fontColor;
    game_engine.context.font = game_configOne.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function drawDescriptionPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle =  game_configOne.descriptionBackColor;
    game_engine.context.fillRect(posx, posy, width, height);
}

function drawDescriptionText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configOne.fontColor;
    game_engine.context.font = game_configOne.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function drawDescriptionTextTwo(posx, posy, text)
{
    game_engine.context.fillStyle = game_configOne.fontColor;
    game_engine.context.font = game_configOne.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function drawDescriptionTextThree(posx, posy, text)
{
    game_engine.context.fillStyle = game_configOne.fontColor;
    game_engine.context.font = game_configOne.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

///////////////////////////

function welcomePanel(posx, posy, width, height)
{
    drawWelcomePanel(0, 0, 450, 320);
}

function drawWelcomePanel(posx, posy, width, height)
{   
    game_engine.context.fillStyle =  game_configTwo.background;
    game_engine.context.fillRect(posx, posy, width, height);
}

function drawWelcomeComponent()
{
    welcomeMenuPanel(0, 0, 450, 50);
    welcomeText(200, 25, game_configTwo.welcomeMenu);
}

function welcomeMenuPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configTwo.colorBackWelcomeMenu;
    game_engine.context.fillRect(posx, posy, width, height);
}

function welcomeText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configTwo.fontColor;
    game_engine.context.font = game_configTwo.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function drawInstructionComponent()
{
    instructionMenuPanel(0, 50, 230, 100);
    instructionText(0, 62, game_configTwo.instruction);
}

function instructionMenuPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configTwo.colorInstruction;
    game_engine.context.fillRect(posx, posy, width, height);
}

function instructionText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configTwo.fontColor;
    game_engine.context.font = game_configTwo.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

////////////////////////////////

function drawMenuBackround()
{
    pausePanel(0, 0, 450, 320);
}

function drawPauseMenuComponent()
{
    pauseMenu(0, 0, 450, 50);
    pauseMenuText(200, 25, game_configThree.pauseMenu);
}

function drawMenuDescriptionComponent()
{
    pauseMenuDescription(0, 50, 230, 100);
    pauseMenuDescriptionText(0, 62, game_configThree.pauseDescription);
}

function pausePanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configThree.background;
    game_engine.context.fillRect(posx, posy, width, height);
}

function pauseMenu(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configThree.colorBackPause;
    game_engine.context.fillRect(posx, posy, width, height); 
}

function pauseMenuText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configThree.fontColor;
    game_engine.context.font = game_configThree.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function pauseMenuDescription(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configThree.colorPause;
    game_engine.context.fillRect(posx, posy, width, height); 
}

function pauseMenuDescriptionText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configThree.fontColor;
    game_engine.context.font = game_configThree.fontDef;
    game_engine.context.fillText(text, posx, posy);
}
////////////////////////////////////////////

function drawAyudaBackgropundComponent()
{
    ayudaPanel(0, 0, 450, 320);
}

function drawAyudaMenuComponent()
{
    ayudaMenuPanel(0, 0, 450, 50);
    ayudaMenuText(200, 25, game_engine.ayudaMenu);
}

function drawAyudaDescriptionComponent()
{
    ayudaDescriptionPanel(0, 50, 230, 100);
    ayudaDescriptionText(0, 62, game_configFour.ayudaDescription);
}

function ayudaPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFour.background;
    game_engine.context.fillRect (posx, posy, width, height);
}

function ayudaMenuPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFour.colorBackAyuda;
    game_engine.context.fillRect (posx, posy, width, height);
}

function ayudaMenuText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configFour.fontColor;
    game_engine.context.font = game_configFour.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function ayudaDescriptionPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFour.colorAyuda;
    game_engine.context.fillRect (posx, posy, width, height);
}

function ayudaDescriptionText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configFour.fontColor;
    game_engine.context.font = game_configFour.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

/////////////////////////////////////////

function drawCreditoBackgropundComponent()
{
    creditoPanel(0, 0, 450, 320);
}

function drawCreditoMenuComponent()
{
    creditoMenuPanel(0, 0, 450, 50);
    creditoMenuText(200, 25, game_configFive.creditoMenu);
}

function drawCreditoDescriptionComponent()
{
    creditoMenuDescription(0, 50, 230, 100);
    creditoMenuDescriptionText(0, 62, game_configFive.creditoDescription);
}

function creditoPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFive.background;
    game_engine.context.fillRect (posx, posy, width, height);
}

function creditoMenuPanel(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFive.colorBackCredito;
    game_engine.context.fillRect (posx, posy, width, height);
}

function creditoMenuText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configFive.fontColor;
    game_engine.context.font = game_configFive.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

function  creditoMenuDescription(posx, posy, width, height)
{
    game_engine.context.fillStyle = game_configFive.colorCredito;
    game_engine.context.fillRect (posx, posy, width, height);
}

function creditoMenuDescriptionText(posx, posy, text)
{
    game_engine.context.fillStyle = game_configFive.fontColor;
    game_engine.context.font = game_configFive.fontDef;
    game_engine.context.fillText(text, posx, posy);
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var myGamePiece;
var myObstacles = [];
var myScore;

var myGameArea = 
    {
        canvas : game_engine.canvas,
        start : function()
        {
            //game_engine.canvas.width = 450;
            //game_engine.canvas.height = 320;
            //game_engine.context = game_engine.canvas.getContext("2d");
            //document.body.insertBefore(game_engine.canvas, document.body.childNodes[0]);
            this.canvas = game_engine.canvas;
            this.frameNo= 0;
            //this.interval = setInterval(updateGame, 20);
        },
        
        clear : function()
            {
               game_engine.context.clearRect(0, 0, game_engine.canvas.width, game_engine.canvas.height);
            },
            stop : function() {
            clearInterval(this.interval);
            }
    }

function startGame()
{
    myGamePiece = new component(30, 30, "red", 390, 120);
    myGamePiece.gravity = 0.05;
    myObstacle = new component(10, 200, "green", 300, 120); 
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

function component(width, height, color, x, y , type)
{
    this.type = type;
    this.score = 0;
    this.widht = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function()
    {
        //game_engine.context = game_engine.context;
        if(this.type == "text")
        {
            game_engine.context.font = this.width + " " + this.height;
            game_engine.context.fillStyle = color;
            game_engine.context.fillText(this.text, this.x, this.y);
        } else 
            {
                game_engine.context.fillStyle = color;
                game_engine.context.fillRect(this.x, this.y, this.widht, this.height);
            }
    }
    
    this.newPos = function()
    {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY //+ this.gravitySpeed;
        this.hitBottom();    
    }
    
    this.hitBottom = function()
    {
        var rockBottom = game_engine.canvas.height - this.height;
        if(this.y > rockBottom)
        {
            this.y = rockBottom;
            this.gravitySpeed = 0;
        }
    }
    
    this.crashWith = function(otherobj)
    {
        var myLeft = this.x;
        var myRight = this.x + (this.widht);
        var myTop = this.y;
        var myBottom = this.y + (this.height);
        var otherLeft = otherobj.x;
        var otherRight = otherobj.x +(otherobj.widht);
        var otherTop = otherobj.y;
        var otherBottom = otherobj.y + (otherobj.height);
        var crash = true;
        if((myBottom < otherTop) ||(myTop > otherBottom) ||(myRight < otherLeft) ||(myLeft > otherRight))
        {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
    } 
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
    x = myGameArea.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    myObstacles.push(new component(10, height, "green", 0, 0));
    myObstacles.push(new component(10, x - height - gap, "green", 0, height + gap));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += 1;
    myObstacles[i].update();
  }
    myScore.text = "SCORE : " + myGameArea.frameNo;
    myScore.update();
    myObstacle.x += -1;        
    myGamePiece.newPos(); 
    myGamePiece.update();
}
   /* var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.lenght; i += 1)
    {
        (myGamePiece.crashWith(myObstacles[i]))
        {
            return;
        }
    }*/
    
     /*if(myGameArea.frameNo == 1 || everyinterval(150))
    {
        x = game_engine.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random ()*(maxHeight - minHeight+1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random ()* (maxGap - minGap +1) + minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for(i = 0; i < myObstacles.length; i += 1)
    {
        myObstacles[i].x += 1;
        myObstacles[i].update ();
    }
    
    myGameArea.clear();
    myGameArea.frameNo += 1;
    myScore.text = "SCORE : " + myGameArea.frameNo;
    myScore.update();
    myObstacle.update();
    myGamePiece.newPos();
    myGamePiece.update();*/
    
     /*if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
        myGameArea.clear();
        myObstacle.x += -1;        
        myObstacle.update();
        myGamePiece.newPos();    
        myGamePiece.update();
    }*/

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

function everyinterval (n)
{
    if((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n)
{
    myGamePiece.gravity = n;     
}