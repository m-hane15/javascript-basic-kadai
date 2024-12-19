// HTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後に非同期処理を実行する
  setTimeout(() => {
    // textの文章を書き換える
    text.textContent ='ボタンをクリックしました';
  }, 2000);
});




