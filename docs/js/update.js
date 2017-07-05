/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {

    //dudeとstarsのグループ内のすべての星が衝突する
    //let hit = game.physics.arcade.collide(dude,stars);

    //dudeと星が重なったらその星を消す(pickstar)を呼び出す
    game.physics.arcade.overlap(dude,stars,pickstar,null,this);

    //dude.x++;
    //dude.y++;

    //dude.x=game.input.x;
    //dude.y=game.input.y;
    if(game.input.mousePointer.isDown)
    {
        game.physics.arcade.moveToPointer(dude,400);
        if(Phaser.Rectangle.contains(dude.body,game.input.x,game.input.y))
        {
            dude.body.velocity.setTo(0,0);
        }
    }
    else
    {
        dude.body.velocity.setTo(0,0);

    }
/*
for(let i=0;i<100;i++)
{
if(star[i].input.pointerOver())
{
    star[i].kill();
}
}
*/
}
//dudeに、最初設定したスプライト、starに、次設定したグループ内のスプライトが渡される
function pickstar(dude,star){
    star.kill();
}
