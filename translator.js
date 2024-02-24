function translate() {

// Get references to input field and translate button
const inputText = document.getElementById("inputText");
const translateBtn = document.getElementById("translateBtn");

// Add click event listener to the Translate button
translateBtn.addEventListener("click", translate);

// Dictionary for English to Japanese translation
const translations = {
    "hello": "こんにちは",
    "goodbye": "さようなら",
    "thank you": "ありがとうございました",
    "please": "お願いします",
    "excuse me": "すみません",
    "yes": "はい",
    "no": "いいえ",
    "sorry": "ごめんなさい",
    "how are you?": "お元気ですか？",
    "I'm fine, thank you": "元気です、ありがとう",
    "what is your name?": "あなたのお名前は何ですか？",
    "my name is": "私の名前は",
    "where are you from?": "どこから来ましたか？",
    "I am from": "私は",
    "please wait a moment": "少々お待ちください",
    "please help me": "助けてください",
    "I'm sorry": "ごめんなさい",
    "how much is this?": "これはいくらですか？",
    "where is the restroom?": "トイレはどこですか？",
    "I don't understand": "わかりません",
    "I understand": "わかります",
    "could you speak slowly?": "ゆっくり話していただけますか？",
    "what time is it?": "何時ですか？",
    "I'm hungry": "お腹が空いています",
    "I'm thirsty": "のどが渇いています",
    "I'm tired": "疲れました",
    "I'm cold": "寒いです",
    "I'm hot": "暑いです",
    "I love you": "愛しています",
    "I miss you": "会いたいです",
    "happy birthday": "お誕生日おめでとう",
    "congratulations": "おめでとう",
    "please write it down": "書いてください",
    "please repeat": "もう一度お願いします",
    "one moment, please": "ちょっと待ってください",
    "I don't know": "わかりません",
    "yes, please": "はい、お願いします",
    "no, thank you": "いいえ、結構です",
    "I'm lost": "道に迷いました",
    "I'm sick": "病気です",
    "please call the police": "警察を呼んでください",
    "please call an ambulance": "救急車を呼んでください",
    "where is the nearest hospital?": "最寄りの病院はどこですか？",
    "I need help": "助けが必要です",
    "I don't have any money": "お金がありません",
    "please speak English": "英語を話してください",
    "what is this?": "これは何ですか？",
    "please show me": "見せてください",
    "please wait for me": "私を待ってください",
    "please come with me": "私についてきてください",
    "where is the nearest train station?": "最寄りの駅はどこですか？",
    "I don't speak Japanese": "日本語が話せません",
    "do you speak English?": "英語を話せますか？",
    "can you help me?": "手伝っていただけますか？",
    "I need a doctor": "医者が必要です",
    "I'm allergic to": "〜にアレルギーがあります",
    "please be quiet": "静かにしてください",
    "what is the weather like today?": "今日の天気はどうですか？",
    "it's sunny": "晴れです",
    "it's raining": "雨が降っています",
    "it's snowing": "雪が降っています",
    "it's hot": "暑いです",
    "it's cold": "寒いです",
    "have a nice day": "良い一日を",
    "take care": "気を付けて",
    "good morning": "おはようございます",
    "good afternoon": "こんにちは",
    "good evening": "こんばんは",
    "good night": "おやすみなさい",
    "sweet dreams": "良い夢を",
    "see you later": "また後で会いましょう",
    "see you tomorrow": "また明日",
    "I'll miss you": "寂しくなります",
    "I'll be back soon": "すぐ戻ります",
    "I'm looking forward to it": "楽しみにしています",
    "let's go": "行きましょう",
    "I'll do my best": "頑張ります",
    "good luck": "がんばって",
    "cheers": "乾杯",
    "bottoms up": "一気飲み",
    "enjoy your meal": "食事を楽しんでください",
    "itadakimasu": "いただきます",
    "gochisousama deshita": "ごちそうさまでした",
    "I'm sorry for your loss": "ご愁傷

    // Add more translations as needed
};

// Translate function
function translate() {
    const inputTextValue = inputText.value.trim().toLowerCase();
    
    // Lookup translation from dictionary
    const translatedText = translations[inputTextValue] || "Translation not found";
    
    // Display translated text
    document.getElementById("translatedText").innerText = translatedText;
}
