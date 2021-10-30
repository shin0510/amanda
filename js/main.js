// マウスストーカー要素
var mouseStalker

// マウスストーカー要素の位置
var stalker = {
  x: 0,
  y: 0
}

// マウスの位置
var mouse = {
  x: 0,
  y: 0
}

// 読み込み後に初期化をするためのハンドラ
document.addEventListener('DOMContentLoaded', setup)

// マウスの動きを監視
document.addEventListener('mousemove', mousemove)

// 初期化処理
function setup() {
  // マウスストーカー要素を取得
  mouseStalker = document.querySelector('.mouse-stalker')

  // 更新処理を開始
  update()
}

// マウスが動くたびにマウスの位置を保持しておく
function mousemove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

// 更新処理
function update() {
  // マウスストーカー要素の位置を更新
  stalker.x += (mouse.x - stalker.x) * 0.1
  stalker.y += (mouse.y - stalker.y) * 0.1

  // マウスストーカーの位置を小数点第一位まで四捨五入
  var x = Math.round(stalker.x * 10) / 10
  var y = Math.round(stalker.y * 10) / 10

  // マウスストーカー要素のスタイルを更新
  mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)'

  // ループ
  requestAnimationFrame(update)
}
var cursor = document.getElementById('cursor'); 
// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}
//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {//天地中央に配置
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.2rem',
			color:'#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  