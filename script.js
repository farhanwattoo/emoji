const emojiBase = document.getElementById("emojiBase");
const emojiMix = document.getElementById("emojiMix");
const emojiTheme = document.getElementById("emojiTheme");
const emojiGenerate = document.getElementById("emojiGenerate");
const emojiShuffle = document.getElementById("emojiShuffle");
const emojiCopy = document.getElementById("emojiCopy");
const emojiPreviewA = document.getElementById("emojiPreviewA");
const emojiPreviewB = document.getElementById("emojiPreviewB");
const emojiResult = document.getElementById("emojiResult");

if (emojiBase && emojiMix && emojiTheme && emojiGenerate && emojiShuffle && emojiCopy && emojiPreviewA && emojiPreviewB && emojiResult) {
  const themeCopy = {
    cute: {
      label: "ふわっとかわいい組み合わせ",
      line: "やさしく親しみやすい雰囲気を出したいときに使いやすいペアです。",
      useCase: "プロフィール、あいさつ投稿、推し活メモの一言に向いています。"
    },
    funny: {
      label: "ちょっと面白い組み合わせ",
      line: "少し意外性があり、見た人の印象に残りやすい組み合わせです。",
      useCase: "雑談投稿、友達とのチャット、軽いネタ文に入れやすいです。"
    },
    seasonal: {
      label: "季節感のある組み合わせ",
      line: "イベントや季節の空気を短い文の中で伝えやすい組み合わせです。",
      useCase: "春のあいさつ、イベント告知、期間限定の投稿に合います。"
    },
    soft: {
      label: "やわらかい雰囲気の組み合わせ",
      line: "落ち着きとかわいさの両方を出したいときにまとまりやすいペアです。",
      useCase: "メモ、日記、優しいお知らせ、プロフィールの雰囲気づくりに使えます。"
    }
  };

  function buildHeadline(first, second, theme) {
    return `${first}${second} ${theme.label}`;
  }

  function renderEmojiMix() {
    const first = emojiBase.value;
    const second = emojiMix.value;
    const theme = themeCopy[emojiTheme.value];

    emojiPreviewA.textContent = first;
    emojiPreviewB.textContent = second;

    emojiResult.innerHTML = `
      <p><strong>${buildHeadline(first, second, theme)}</strong></p>
      <p>${theme.line}</p>
      <p class="note">使い方の例: ${theme.useCase}</p>
    `;
  }

  function pickRandom(select) {
    const index = Math.floor(Math.random() * select.options.length);
    select.selectedIndex = index;
  }

  emojiGenerate.addEventListener("click", renderEmojiMix);
  emojiShuffle.addEventListener("click", () => {
    pickRandom(emojiBase);
    pickRandom(emojiMix);
    pickRandom(emojiTheme);
    renderEmojiMix();
  });

  emojiCopy.addEventListener("click", async () => {
    const text = emojiResult.innerText.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }
      emojiCopy.textContent = "コピーしました";
      setTimeout(() => { emojiCopy.textContent = "結果をコピー"; }, 1600);
    } catch (_) {
      emojiCopy.textContent = "コピーできませんでした";
      setTimeout(() => { emojiCopy.textContent = "結果をコピー"; }, 1600);
    }
  });

  renderEmojiMix();
}
