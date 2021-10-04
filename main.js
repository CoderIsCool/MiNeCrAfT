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