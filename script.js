const emojiBase = document.getElementById("emojiBase");
const emojiMix = document.getElementById("emojiMix");
const emojiTheme = document.getElementById("emojiTheme");
const emojiGenerate = document.getElementById("emojiGenerate");
const emojiShuffle = document.getElementById("emojiShuffle");
const emojiCopy = document.getElementById("emojiCopy");
const emojiPreviewA = document.getElementById("emojiPreviewA");
const emojiPreviewB = document.getElementById("emojiPreviewB");
const emojiResult = document.getElementById("emojiResult");

const emojiSearchInput = document.getElementById("emojiSearchInput");
const emojiSearchGrid = document.getElementById("emojiSearchGrid");
const emojiSearchCount = document.getElementById("emojiSearchCount");
const emojiTargetBase = document.getElementById("emojiTargetBase");
const emojiTargetMix = document.getElementById("emojiTargetMix");
const emojiBrowserPreviewBase = document.getElementById("emojiBrowserPreviewBase");
const emojiBrowserPreviewMix = document.getElementById("emojiBrowserPreviewMix");

const emojiCategories = [
  {
    label: "smileys",
    search: "smile face happy laugh wink love cry angry shocked sleepy cool kawaii かわいい 笑顔 顔",
    emojis: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🫣 🤭 🫢 🤫 🤥 😶 😐 😑 😬 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕"
  },
  {
    label: "hands",
    search: "hand fingers clap point wave ok peace love thanks support 手 指 ハート ピース",
    emojis: "👋 🤚 🖐️ ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🫰 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 🫶 👐 🤲 🤝 🙏 ✍️ 💅 🤳"
  },
  {
    label: "people",
    search: "people person friend baby family student worker artist party human 人 人物 友達 家族",
    emojis: "👶 🧒 👦 👧 🧑 👱 👨 🧔 👩 🧓 👴 👵 🙍 🙎 🙅 🙆 💁 🙋 🧏 🙇 🤦 🤷 👮 🕵️ 💂 🥷 👷 🤴 👸 👳 👲 🧕 🤵 👰 🤰 🤱 👼 🎅 🤶 🦸 🦹 🧙 🧚 🧛 🧜 🧝 🧞 🧟 💆 💇 🚶 🧍 🧎 🏃 💃 🕺 👯 🧖 🧗 🤺 🏇 🏂 🏄 🚣 🏊 ⛹️ 🏋️ 🚴 🚵 🤸 🤼 🤽 🤾 🤹"
  },
  {
    label: "animals",
    search: "animal pet cute cat dog bear rabbit panda wild sea bird 動物 ねこ いぬ くま うさぎ",
    emojis: "🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷️ 🕸️ 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🫎 🦬 🐘 🦣 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊️ 🐇 🦝 🦨 🦡 🦫"
  },
  {
    label: "nature",
    search: "flower tree leaf plant weather sky fire water star moon sun nature 花 木 葉 天気 自然",
    emojis: "🌵 🎄 🌲 🌳 🌴 🪵 🌱 🌿 ☘️ 🍀 🎍 🪴 🎋 🍃 🍂 🍁 🍄 🐚 🪨 🌾 💐 🌷 🌹 🥀 🌺 🌸 🪷 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐ 🌟 ✨ ⚡ ☄️ 💥 🔥 🌪️ 🌈 ☀️ 🌤️ ⛅ 🌥️ ☁️ 🌦️ 🌧️ ⛈️ 🌩️ 🌨️ ❄️ ☃️ ⛄ 🌬️ 💨 💧 💦 ☔ 🌊"
  },
  {
    label: "food",
    search: "food drink sweet fruit cake meal coffee tea sushi burger pizza 食べ物 飲み物 スイーツ",
    emojis: "🍏 🍎 🍐 🍊 🍋 🍋‍🟩 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🫒 🥑 🍆 🥔 🥕 🌽 🌶️ 🫑 🥒 🥬 🥦 🧄 🧅 🍄 🥜 🫘 🌰 🍞 🥐 🥖 🫓 🥨 🥯 🥞 🧇 🧀 🍖 🍗 🥩 🥓 🍔 🍟 🍕 🌭 🥪 🌮 🌯 🫔 🥙 🧆 🥚 🍳 🥘 🍲 🫕 🥣 🥗 🍿 🧈 🧂 🥫 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🥮 🍡 🥟 🥠 🥡 🦪 🍦 🍧 🍨 🍩 🍪 🎂 🍰 🧁 🥧 🍫 🍬 🍭 🍮 🍯 🍼 🥛 ☕ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾"
  },
  {
    label: "activities",
    search: "sport game music art movie book hobby fun party 活動 スポーツ ゲーム 音楽 趣味",
    emojis: "⚽ 🏀 🏈 ⚾ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸️ 🥌 🎿 ⛷️ 🏂 🪂 🏋️ 🤼 🤸 ⛹️ 🤺 🤾 🏌️ 🏇 🧘 🏄 🏊 🤽 🚣 🚴 🚵 🎮 🕹️ 🎰 🎲 🧩 ♟️ 🎯 🎳 🎨 🎭 🧵 🪡 🧶 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎬 🎞️ 🎟️ 🎫 🎪 🤹 🎊 🎉 🎈 🎂 📚 📖 🧸"
  },
  {
    label: "travel",
    search: "travel place car train plane map city home shop trip 旅行 乗り物 場所 家 街",
    emojis: "🚗 🚕 🚙 🚌 🚎 🏎️ 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍️ 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩️ 💺 🛰️ 🚀 🛸 🚁 🛶 ⛵ 🚤 🛥️ 🛳️ ⛴️ 🚢 ⚓ 🪝 ⛽ 🚧 🚏 🗺️ 🗿 🗽 🗼 🏰 🏯 🏟️ 🎡 🎢 🎠 ⛲ ⛱️ 🏖️ 🏝️ 🏜️ 🌋 ⛰️ 🏔️ 🗻 🏕️ ⛺ 🛖 🏠 🏡 🏘️ 🏚️ 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛️ ⛪ 🕌 🕍 🛕 🕋 ⛩️ 🛤️ 🛣️ 🌁 🌃 🏙️ 🌄 🌅 🌆 🌇 🌉 ♨️"
  },
  {
    label: "objects",
    search: "object phone computer camera gift light work study home item 物 仕事 勉強 小物",
    emojis: "⌚ 📱 📲 💻 ⌨️ 🖥️ 🖨️ 🖱️ 💽 💾 💿 📀 🧮 🎥 🎞️ 📷 📸 📹 🎙️ 🎚️ 🎛️ 📻 🧭 ⏰ ⏱️ ⏲️ 🕰️ 🔋 🪫 🔌 💡 🔦 🕯️ 🪔 🧯 🛢️ 💸 💵 💴 💶 💷 🪙 💰 💳 🪪 📔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 🗞️ 📑 🔖 🏷️ 💼 📦 📫 📬 📭 📮 🗳️ ✏️ ✒️ 🖋️ 🖊️ 🖌️ 🖍️ 📝 💌 📩 📨 📧 📨 📤 📥 📁 📂 🗂️ 📅 📆 🗒️ 🗓️ 📈 📉 📊 📋 📌 📍 📎 🖇️ 📏 📐 ✂️ 🗃️ 🗄️ 🗑️ 🔒 🔓 🔏 🔐 🔑 🗝️ 🔨 🪓 ⛏️ ⚒️ 🛠️ 🗡️ ⚔️ 💣 🪃 🏺 ⚱️ 🧱 🔮 📿 🧿 🪬 💎 🧸 🪆 🪞 🪟 🛏️ 🪑 🚪 🛁 🚿 🧴 🧷 🧹 🧺 🧻 🪠 🧼 🫧 🪥 🧽 🧯"
  },
  {
    label: "symbols",
    search: "heart star arrow symbol mark love sign shapes 記号 ハート 星 矢印 マーク",
    emojis: "❤️ 🩷 🧡 💛 💚 💙 🩵 💜 🤎 🖤 🩶 🤍 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉️ ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🅾️ 🆑 🆘 ❌ ⭕ 🛑 ⛔ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿ 🅿️ 🛗 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 ⚧ 🚻 🚮 🎦 📶 🛜 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 ⏹️ ⏺️ ⏭️ ⏯️ ⏮️ ⏸️ ⏏️ ▶️ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂"
  },
  {
    label: "flags",
    search: "flag country world nation 国旗 国 世界 flag",
    emojis: "🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏳️‍⚧️ 🇯🇵 🇰🇷 🇨🇳 🇹🇼 🇭🇰 🇲🇴 🇸🇬 🇹🇭 🇻🇳 🇲🇾 🇮🇩 🇵🇭 🇮🇳 🇵🇰 🇧🇩 🇳🇵 🇱🇰 🇦🇪 🇸🇦 🇶🇦 🇰🇼 🇴🇲 🇧🇭 🇹🇷 🇬🇷 🇮🇹 🇪🇸 🇵🇹 🇫🇷 🇩🇪 🇳🇱 🇧🇪 🇱🇺 🇨🇭 🇦🇹 🇬🇧 🇮🇪 🇩🇰 🇳🇴 🇸🇪 🇫🇮 🇮🇸 🇵🇱 🇨🇿 🇸🇰 🇭🇺 🇷🇴 🇧🇬 🇭🇷 🇷🇸 🇸🇮 🇧🇦 🇲🇪 🇦🇱 🇲🇰 🇺🇦 🇲🇩 🇱🇹 🇱🇻 🇪🇪 🇧🇾 🇷🇺 🇬🇪 🇦🇲 🇦🇿 🇰🇿 🇺🇿 🇰🇬 🇹🇯 🇹🇲 🇦🇫 🇲🇳 🇦🇺 🇳🇿 🇨🇦 🇺🇸 🇲🇽 🇧🇷 🇦🇷 🇨🇱 🇵🇪 🇨🇴 🇻🇪 🇺🇾 🇵🇾 🇧🇴 🇪🇨 🇨🇷 🇵🇦 🇬🇹 🇭🇳 🇳🇮 🇸🇻 🇨🇺 🇩🇴 🇯🇲 🇹🇹 🇧🇸 🇿🇦 🇳🇬 🇪🇬 🇲🇦 🇹🇳 🇩🇿 🇪🇹 🇰🇪 🇬🇭 🇺🇬"
  }
];

const emojiCatalog = Array.from(
  new Map(
    emojiCategories
      .flatMap((category) => category.emojis.split(/\s+/).filter(Boolean).map((emoji) => ({
        emoji,
        label: category.label,
        search: `${category.label} ${category.search}`.toLowerCase()
      })))
      .map((item) => [item.emoji, item])
  ).values()
);

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

let activeSlot = "base";

function ensureSelectOptions(select, fallbackValue) {
  if (!select) return;
  const currentValue = select.value || fallbackValue;
  select.innerHTML = emojiCatalog
    .map((item) => `<option value="${item.emoji}">${item.emoji} ${item.label}</option>`)
    .join("");
  if (emojiCatalog.some((item) => item.emoji === currentValue)) {
    select.value = currentValue;
  } else {
    select.value = fallbackValue;
  }
}

function buildHeadline(first, second, theme) {
  return `${first}${second} ${theme.label}`;
}

function syncBrowserPreviews() {
  if (emojiBrowserPreviewBase && emojiBase) {
    emojiBrowserPreviewBase.textContent = emojiBase.value;
  }
  if (emojiBrowserPreviewMix && emojiMix) {
    emojiBrowserPreviewMix.textContent = emojiMix.value;
  }
}

function renderEmojiMix() {
  if (!emojiBase || !emojiMix || !emojiTheme || !emojiPreviewA || !emojiPreviewB || !emojiResult) return;

  const first = emojiBase.value;
  const second = emojiMix.value;
  const theme = themeCopy[emojiTheme.value] || themeCopy.cute;

  emojiPreviewA.textContent = first;
  emojiPreviewB.textContent = second;
  syncBrowserPreviews();

  emojiResult.innerHTML = `
    <p><strong>${buildHeadline(first, second, theme)}</strong></p>
    <p>${theme.line}</p>
    <p class="note">使い方の例: ${theme.useCase}</p>
  `;

  if (emojiSearchGrid) {
    emojiSearchGrid.querySelectorAll(".emoji-search-button").forEach((button) => {
      const slot = button.dataset.slot;
      const value = button.dataset.emoji;
      const isSelected = (slot === "base" && value === emojiBase.value) || (slot === "mix" && value === emojiMix.value);
      button.classList.toggle("is-selected", isSelected);
    });
  }
}

function setActiveSlot(slot) {
  activeSlot = slot;
  if (emojiTargetBase) {
    emojiTargetBase.classList.toggle("is-active", slot === "base");
  }
  if (emojiTargetMix) {
    emojiTargetMix.classList.toggle("is-active", slot === "mix");
  }
}

function applyEmojiSelection(emoji) {
  if (!emojiBase || !emojiMix) return;

  if (activeSlot === "base") {
    emojiBase.value = emoji;
    setActiveSlot("mix");
  } else {
    emojiMix.value = emoji;
    setActiveSlot("base");
  }
  renderEmojiMix();
}

function renderEmojiBrowser(filterText = "") {
  if (!emojiSearchGrid) return;

  const query = filterText.trim().toLowerCase();
  const filtered = emojiCatalog.filter((item) => {
    if (!query) return true;
    return item.emoji.includes(query) || item.search.includes(query);
  });

  if (emojiSearchCount) {
    emojiSearchCount.textContent = `${filtered.length} emoji`;
  }

  if (!filtered.length) {
    emojiSearchGrid.innerHTML = `<div class="emoji-search-empty">一致する絵文字が見つかりません。別のキーワードで試してください。</div>`;
    return;
  }

  emojiSearchGrid.innerHTML = filtered.map((item) => {
    const selected =
      (activeSlot === "base" && emojiBase && emojiBase.value === item.emoji) ||
      (activeSlot === "mix" && emojiMix && emojiMix.value === item.emoji);
    return `<button class="emoji-search-button${selected ? " is-selected" : ""}" type="button" data-emoji="${item.emoji}" title="${item.label}">${item.emoji}</button>`;
  }).join("");

  emojiSearchGrid.querySelectorAll(".emoji-search-button").forEach((button) => {
    button.addEventListener("click", () => applyEmojiSelection(button.dataset.emoji));
  });
}

function pickRandom(select) {
  if (!select) return;
  const index = Math.floor(Math.random() * select.options.length);
  select.selectedIndex = index;
}

if (emojiBase && emojiMix && emojiTheme && emojiGenerate && emojiShuffle && emojiCopy) {
  ensureSelectOptions(emojiBase, "😊");
  ensureSelectOptions(emojiMix, "✨");

  emojiGenerate.addEventListener("click", renderEmojiMix);

  emojiShuffle.addEventListener("click", () => {
    pickRandom(emojiBase);
    pickRandom(emojiMix);
    pickRandom(emojiTheme);
    renderEmojiMix();
    if (emojiSearchInput) {
      renderEmojiBrowser(emojiSearchInput.value);
    }
  });

  emojiCopy.addEventListener("click", async () => {
    const text = emojiResult ? emojiResult.innerText.trim() : "";
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

  emojiBase.addEventListener("change", renderEmojiMix);
  emojiMix.addEventListener("change", renderEmojiMix);
  emojiTheme.addEventListener("change", renderEmojiMix);

  if (emojiTargetBase && emojiTargetMix) {
    emojiTargetBase.addEventListener("click", () => setActiveSlot("base"));
    emojiTargetMix.addEventListener("click", () => setActiveSlot("mix"));
  }

  if (emojiSearchInput) {
    emojiSearchInput.addEventListener("input", () => renderEmojiBrowser(emojiSearchInput.value));
  }

  renderEmojiMix();
  renderEmojiBrowser("");
}
