// ボタンを押すたびにメッセージが変わり、キャラクターが跳ねます。
const messages = ["乾杯！ 今日もお疲れさまです！ 🍻", "いい一日に、カンパイ！ ✨", "BEER BUDDYと楽しいひとときを！ 🎉"];
let count = 0;
const button = document.querySelector('#cheers');
const message = document.querySelector('#message');
const mascot = document.querySelector('#mascot');
button.addEventListener('click', () => {
  message.textContent = messages[count % messages.length];
  count += 1;
  mascot.classList.remove('celebrate');
  void mascot.offsetWidth; // アニメーションを最初から再生
  mascot.classList.add('celebrate');
});
