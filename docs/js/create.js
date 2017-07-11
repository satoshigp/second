/**
 * 作成処理
 * ゲームにアセットを追加するなどの生成処理を行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */

 var dude;
 //配列に変更
 //java Scriptの配列には、範囲が必要ない、後で増やすことができる

 //グループに変更
 var stars;
 var baddies;
 // var star = array[];

function create() {
//新規のグループを作成してそのインスタンスをstar入れる
    stars=game.add.group();
    baddies=game.add.group();
//星を数える
    stars.starCount=0;
//グループ内のオブジェクトの物理挙動を有効にする
    stars.enableBody=true;
    baddies.enableBody=true;
    for(let i=0;i<100;i++){
        stars.starCount++;


        let star=stars.create(game.rnd.integerInRange(80,560),game.rnd.integerInRange(80,280),'star');

  //star.push(game.add.sprite(game.rnd.integerInRange(80,560),game.rnd.integerInRange(80,280),'star'));

  //game.physics.arcade.enable(star)

    star.body.collideWorldBounds=true;
    star.body.bounce.x=1;
    star.body.bounce.y=1;

    star.inputEnabled=true;

    star.body.velocity.x=game.rnd.realInRange(-200,200);
    star.body.velocity.y=game.rnd.realInRange(-200,200);

  }
  for(let s=0;s<4;s++)
  {
      let baddie=baddies.create(game.rnd.integerInRange(0,80),game.rnd.integerInRange(0,80),'baddie');

      baddie.body.collideWorldBounds=true;
      baddie.body.bounce.x=1;
      baddie.body.bounce.y=1;

      baddie.inputEnabled=true;

      baddie.body.velocity.x=game.rnd.realInRange(-200,200);
      baddie.body.velocity.y=game.rnd.realInRange(-200,200);

      baddie.frame=4;
      baddie.animations.add('left',[0,1],10,true);
      baddie.animations.add('right',[2,3],10,true);
      baddie.animations.play('left');



  }


  //関数方言語の繰り返し
/*
  star.forEach(function(st,index,ar){
      game.physics.arcade.enable(st);


      st.body.collideWorldBounds=true;
      st.body.bounce.x=1;
      st.body.bounce.y=1;

      st.inputEnabled=true;//

      st.body.velocity.x=game.rnd.realInRange(-200,200);
      st.body.velocity.y=game.rnd.realInRange(-200,200);
  })
  */

  dude=game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
  dude.frame=4;
  dude.animations.add('left',[0,1,2,3],10,true);
  dude.animations.add('right',[5,6,7,8],10,true);
  dude.animations.play('left');

  //アンカー＝いかり＝基準点
  dude.anchor = new Phaser.Point(0.5,1);
//物理エンジンをdudeに使う
//arcade物理エンジン＝簡易なもの、速度が早い
  game.physics.arcade.enable(dude);
//物理エンジンを使用するとbodyというプロパティーが使える
// velocity=速度
    //dude.body.velocity.x=200;
    //dude.body.velocity.y=200;

    dude.body.collideWorldBounds=true;


    dude.body.bounce.x=1;
    dude.body.bounce.y=1;

}
