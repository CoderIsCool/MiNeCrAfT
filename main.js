var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
var player_object = "";
block_w = 30;
block_h = 30;
var block_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_Image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top:player_y,
            left:player_x
    });
    canvas.add(block_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    Grover = e.keyCode;
   console.log(Grover);

   if(e.shiftKey == true && Grover=='80' )
   {
       console.log("p and shift are pressed together");
       block_w = block_w + 10;
       block_h = block_h + 10;
       document.getElementById("current_w").innerHTML  = block_w;
       document.getElementById("current_h").innerHTML = block_h;
   }
   if(e.shiftKey && Grover== '77')
   {
       console.log("m and shift are pressed together");
       block_w = block_w - 10;
       block_h = block_h - 10;
       document.getElementById("current_w").innerHTML = block_w;
       document.getElementById("current_h").innerHTML = block_h;
   }
   if(Grover == '38')
   {
    Up();
    console.log("Up");
   }
   if(Grover == '37')
   {
    Left();
    console.log("Left");
   }
   if(Grover == '39')
   {
    Right();
    console.log("Right");
   }
   if(Grover == '40')
   {
    Down();
    console.log("Down");
   }
   if(Grover == '71')
   {
    new_Image("ground.png")   
    console.log("G");
   }
   if(Grover == '87')
   {
    new_Image("wall.jpg")   
    console.log("W");
   }
   if(Grover == '68')
   {
    new_Image("dark_green.png")   
    console.log("D");
    
   }
   if(Grover == '76')
   {
    new_Image("light_green.png")   
    console.log("L");
   }
   if(Grover == '84')
   {
    new_Image("trunk.jpg")   
    console.log("T");
   }
   if(Grover == '82')
   {
    new_Image("roof.jpg")   
    console.log("R");
   }
   if(Grover == '89')
   {
    new_Image("yellow_wall.png")   
    console.log("Y");
   }
   if(Grover == '85')
   {
    new_Image("unique.png")   
    console.log("u");
   }
   if(Grover == '67')
   {
    new_Image("cloud.jpg")   
    console.log("C");
   }
}