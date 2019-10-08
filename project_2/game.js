var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400,400,{backgroundColor: 0xA9A9A9});
gameport.appendChild(renderer.view);

var gameplay_screen = new PIXI.Container();
var title_screen = new PIXI.Container();
var credits_screen = new PIXI.Container();
var info_screen = new PIXI.Container();

var current_stage = title_screen;

var bird_nest = new PIXI.Sprite(PIXI.Texture.fromImage("bird_nest.png"))
var bird = new PIXI.Sprite(PIXI.Texture.fromImage("bird.png"));
var hunter = new PIXI.Sprite(PIXI.Texture.fromImage("hunter.png"));
var victoryScreen = new PIXI.Sprite(PIXI.Texture.fromImage("victory_screen.png"));
var defeatScreen = new PIXI.Sprite(PIXI.Texture.fromImage("defeat_screen.png"));
var title_background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
var gameplay_background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
var wall = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"));
var wall2 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"));
var wall3 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"));

var start_button = new PIXI.Sprite(PIXI.Texture.fromImage("start_button.png"));

var info_background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
var info_button = new PIXI.Sprite(PIXI.Texture.fromImage("info_button.png"));
var info_text = new PIXI.Text("Get to the nest!");
var info_text2 = new PIXI.Text("Don't let the crazy");
var info_text3 = new PIXI.Text("birdcatcher get you!");
var info_text4 = new PIXI.Text("use WASD to move");
var info_text5 = new PIXI.Text("press esc to restart or go back");
var info_text6 = new PIXI.Text("Don't hit the walls!");


var credits_background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
var credits_button = new PIXI.Sprite(PIXI.Texture.fromImage("credits_button.png"));
var credits_text = new PIXI.Text("Design, Audio, and");
var credits_text2 = new PIXI.Text("Illustrations by:");
var credits_text3 = new PIXI.Text("Jonathan Hillman");
var credits_text4 = new PIXI.Text("Press escape to");
var credits_text5 = new PIXI.Text("return to main screen");


//make title screen and add sprites

title_screen.addChild(title_background)
title_background.anchor.x = 0.5;
title_background.anchor.y = 0.5;
title_background.position.x = 200;
title_background.position.y = 200;

title_background.addChild(start_button)
start_button.anchor.x = 0.5;
start_button.anchor.y = 0.5;
start_button.position.x = 0;
start_button.position.y = -100;

title_background.addChild(info_button)
info_button.anchor.x = 0.5;
info_button.anchor.y = 0.5;
info_button.position.x = 0;
info_button.position.y = 0;

title_background.addChild(credits_button)
credits_button.anchor.x = 0.5;
credits_button.anchor.y = 0.5;
credits_button.position.x = 0;
credits_button.position.y = 100;

//make gameplay screen and add text

gameplay_screen.addChild(gameplay_background)
gameplay_background.anchor.x = 0.5;
gameplay_background.anchor.y = 0.5;
gameplay_background.position.x = 200;
gameplay_background.position.y = 200;
 
gameplay_background.addChild(bird);
bird.anchor.x = 0.5;
bird.anchor.y = 0.5;
bird.position.x = -125;
bird.position.y = -125;

gameplay_background.addChild(bird_nest);
bird_nest.anchor.x = 0.5;
bird_nest.anchor.y = 0.5;
bird_nest.position.x = 90;
bird_nest.position.y = -168;

gameplay_background.addChild(hunter);
hunter.anchor.x = 0.5;
hunter.anchor.y = 0.5;
hunter.position.x = -158;
hunter.position.y = 158;

gameplay_background.addChild(victoryScreen);
victoryScreen.anchor.x = 0.5;
victoryScreen.anchor.y = 0.5;
victoryScreen.position.x = 100;
victoryScreen.position.y = 140;
victoryScreen.visible = false;

gameplay_background.addChild(defeatScreen);
defeatScreen.anchor.x = 0.5;
defeatScreen.anchor.y = 0.5;
defeatScreen.position.x = 100;
defeatScreen.position.y = 140;
defeatScreen.visible = false;

gameplay_background.addChild(wall)
wall.anchor.x = 0.5;
wall.anchor.y = 0.5;
wall.position.x = -106;
wall.position.y = 50;

gameplay_background.addChild(wall2)
wall2.anchor.x = 0.5;
wall2.anchor.y = 0.5;
wall2.position.x = 20;
wall2.position.y = -50;

gameplay_background.addChild(wall3)
wall3.anchor.x = 0.5;
wall3.anchor.y = 0.5;
wall3.position.x = 152;
wall3.position.y = -50;


//make info screen and add text

info_screen.addChild(info_background);
info_background.anchor.x = 0.5;
info_background.anchor.y = 0.5;
info_background.position.x = 200;
info_background.position.y = 200;

info_background.addChild(info_text);
info_text.anchor.x = 0.5;
info_text.anchor.y = 0.5;
info_text.position.x = 0;
info_text.position.y = -60;

info_background.addChild(info_text2);
info_text2.anchor.x = 0.5;
info_text2.anchor.y = 0.5;
info_text2.position.x = 0;
info_text2.position.y = -30;

info_background.addChild(info_text3);
info_text3.anchor.x = 0.5;
info_text3.anchor.y = 0.5;
info_text3.position.x = 0;
info_text3.position.y = 0;

info_background.addChild(info_text4);
info_text4.anchor.x = 0.5;
info_text4.anchor.y = 0.5;
info_text4.position.x = 0;
info_text4.position.y = 30;

info_background.addChild(info_text5);
info_text5.anchor.x = 0.5;
info_text5.anchor.y = 0.5;
info_text5.position.x = 0;
info_text5.position.y = 60;

info_background.addChild(info_text6);
info_text6.anchor.x = 0.5;
info_text6.anchor.y = 0.5;
info_text6.position.x = 0;
info_text6.position.y = 90;


credits_screen.addChild(credits_background);
credits_background.anchor.x = 0.5;
credits_background.anchor.y = 0.5;
credits_background.position.x = 200;
credits_background.position.y = 200;

credits_background.addChild(credits_text);
credits_text.anchor.x = 0.5;
credits_text.anchor.y = 0.5;
credits_text.position.x = 0;
credits_text.position.y = -60;

credits_background.addChild(credits_text2);
credits_text2.anchor.x = 0.5;
credits_text2.anchor.y = 0.5;
credits_text2.position.x = 0;
credits_text2.position.y = -30;

credits_background.addChild(credits_text3);
credits_text3.anchor.x = 0.5;
credits_text3.anchor.y = 0.5;
credits_text3.position.x = 0;
credits_text3.position.y = 0;

credits_background.addChild(credits_text4);
credits_text4.anchor.x = 0.5;
credits_text4.anchor.y = 0.5;
credits_text4.position.x = 0;
credits_text4.position.y = 30;

credits_background.addChild(credits_text5);
credits_text5.anchor.x = 0.5;
credits_text5.anchor.y = 0.5;
credits_text5.position.x = 0;
credits_text5.position.y = 60;


start_button.interactive = true;
start_button.click = function() {
current_stage = gameplay_screen;
}
info_button.interactive = true;
info_button.click = function() {
current_stage = info_screen;
}
credits_button.interactive = true;
credits_button.click = function() {
current_stage = credits_screen;
}

function keydownEventHandler(e)
{
		if(e.keyCode == 87 && bird.position.y >= -190)
		{
			bird.position.y -= 10;
		}
		if(e.keyCode == 83 && bird.position.y <= 190)
		{
			bird.position.y += 10;
		}
		if(e.keyCode == 65 && bird.position.x >= -190)
		{
			bird.position.x -= 10;
		}
		if(e.keyCode == 68 && bird.position.x <= 190)
		{
			bird.position.x += 10;
		}
		if(e.keyCode == 27)
		{
			current_stage = title_screen;
		}
}
document.addEventListener('keydown', keydownEventHandler);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(current_stage);
	if(!victoryScreen.visible && !defeatScreen.visible && current_stage == gameplay_screen)
	{
		if(hunter.position.x == -158 && hunter.position.y >= -158)
		{
			hunter.position.y -= 2;
		}
		else if(hunter.position.x <= -36)
		{
			hunter.position.x += 2;
		}
		else if(hunter.position.y <= 158 && hunter.position.x == -34)
		{
			hunter.position.y += 2;
		}
		else if(hunter.position.x <= 90)
		{
			hunter.position.x +=2;
		}
		else if(hunter.position.y >= -158)
		{
			hunter.position.y -= 2;
		}
		//else if(hunter.position.y <=
		
	}
	if(//get to nest successfully
		(bird.position.x <= bird_nest.position.x + 20 && bird.position.x >= bird_nest.position.x - 20) &&
		(bird.position.y <= bird_nest.position.y + 20 && bird.position.y >= bird_nest.position.y - 20)
	  )
	{
		victoryScreen.visible = true;
		document.removeEventListener('keydown', keydownEventHandler);
	}
	if(// caught to hunter
		(bird.position.x <= hunter.position.x + 42 && bird.position.x >= hunter.position.x - 42 &&
		 bird.position.y <= hunter.position.y + 42 && bird.position.y >= hunter.position.y - 42)
		||
		(bird.position.x >= -148 && bird.position.x <= -70 && bird.position.y >= -100)
		||
		(bird.position.x >= -20 && bird.position.x <= 50 && bird.position.y <= 100)
		||
		(bird.position.x >= 120 && bird.position.x <= 200 && bird.position.y <= 100)
	  )
	{
		defeatScreen.visible = true;
		document.removeEventListener('keydown', keydownEventHandler);
	}
}
animate();