// BEER BUDDY: 乾杯ボタンで飲む→ほろ酔い→乾杯！
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#cheers');
  const message = document.querySelector('#message');
  const mascot = document.querySelector('#mascot');
  const art = mascot?.closest('.hero-art');
  if (!button || !message || !mascot || !art) return;
  let busy = false;
  let cheersCount = 0;
  const messages = [
    'ぷは〜っ！ おいしい！ 今日もカンパイ！ 🍻',
    'ほっぺがぽかぽか！ もう一度カンパイ！ 💗',
    'BEER BUDDYと最高のひとときを！ 🎉'
  ];
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    button.disabled = true;
    art.classList.remove('blushing', 'drinking');
    void art.offsetWidth;
    art.classList.add('drinking');
    message.textContent = 'ゴクゴク… 🍺';
    try {
      await wait(1650);
      art.classList.remove('drinking');
      art.classList.add('blushing');
      message.textContent = messages[cheersCount % messages.length];
      cheersCount += 1;
      // Keep the red cheeks visible until the next cheers click.
    } finally {
      button.disabled = false;
      busy = false;
    }
  });
});
