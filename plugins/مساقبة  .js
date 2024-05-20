import fetch from "node-fetch";

let points = 50;
let maxPlayers = 10;
let maxQuestions = 50;
let questionTimeout = 25 * 1000; // 25 ثانية

let handler = async (m, { conn, command }) => {
    let id = m.chat;
    conn.mikey = conn.mikey ? conn.mikey : {};

    if (command === "مسابقه-صور") {
        if (id in conn.mikey) {
            conn.reply(m.chat, '*المسابقة مستمرة بالفعل!*', conn.mikey[id][0]);
            throw false;
        }

        conn.mikey[id] = [
            await conn.reply(m.chat, '1 - جاوب على السؤال بسرعة\n2 - اجمع 50 نقطة\n3 - اتبع التعليمات', m), [], [], 0, 0, null
        ];

        conn.reply(m.chat, '🎡| بدأت المسابقة، اكتب " #انضم-صور" للانضمام', m);
        throw false;
    } else if (command === "انضم-صور") {
        if (!(id in conn.mikey)) {
            conn.reply(m.chat, 'لا توجد مسابقة جارية حالياً!', m);
            throw false;
        }

        if (conn.mikey[id][2].length >= maxPlayers) {
            conn.reply(m.chat, 'اكتمل العدد', m);
            throw false;
        }

        if (conn.mikey[id][2].findIndex(player => player.id === m.sender) !== -1) {
            conn.reply(m.chat, 'أنت مسجل بالفعل', m);
            throw false;
        }

        conn.mikey[id][2].push({ id: m.sender, points: 0, correctAnswers: 0 });
        conn.reply(m.chat, `تم التسجيل بنجاح! العدد الكامل والمشاركة: ${maxPlayers - conn.mikey[id][2].length}`, m);

        if (conn.mikey[id][2].length >= 2) {
            let mikeyData = await (await fetch(`https://raw.githubusercontent.com/DK3MK/worker-bot/main/eye.json`)).json();
            let json = mikeyData[Math.floor(Math.random() * mikeyData.length)];
            conn.mikey[id][1] = json;
            let playersList = conn.mikey[id][2].map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${ player.points} نقطة]`).join('\n');
            let caption = `━ ───── • ⟐ • ───── ━
*• السؤال رقم ${conn.mikey[id][4] + 1}*
*• جاوب بسرعة*
*• الجائزة:* ⌊ ${points} ⌉ *نقطة* لكل إجابة صحيحة
━ ───── • ⟐ • ───── ━`.trim();
            conn.sendFile(m.chat, json.img, '', caption, m);

            conn.mikey[id][5] = setTimeout(() => {
                let correctIndex = conn.mikey[id][2].findIndex(player => player.id === m.sender);
                if (correctIndex !== -1) {
                    conn.mikey[id][2][correctIndex].points += points;
                    conn.mikey[id][2][correctIndex].correctAnswers++;
                    conn.reply(m.chat, `انتهى الوقت! الإجابة الصحيحة هي: ${json.name}\n+${points} نقطة`, conn.mikey[id][0]);
                } else {
                    conn.reply(m.chat, `انتهى الوقت! الإجابة الصحيحة هي: ${json.name}`, conn.mikey[id][0]);
                }

                clearTimeout(conn.mikey[id][5]);
                conn.mikey[id][5] = null;

                setTimeout(async () => {
                    let newJson = mikeyData[Math.floor(Math.random() * mikeyData.length)];
                    conn.mikey[id][1] = newJson;
                    conn.mikey[id][3]++;
                    conn.mikey[id][4]++;

                    let newCaption = `━ ───── • ⟐ • ───── ━
*• السؤال رقم ${conn.mikey[id][4] + 1}*
*• جاوب بسرعة*
*• الجائزة:* ⌊ ${points} ⌉ *نقطة* لكل إجابة صحيحة
━ ───── • ⟐ • ───── ━`.trim();
                    conn.sendFile(m.chat, newJson.img, '', newCaption, m);
                }, 1000); // تأخير إرسال سؤال جديد لتصور أفضل
            }, questionTimeout);
        }
    } else if (command === "حذف-صور") {
        if (!conn.mikey[id]) {
            conn.reply(m.chat, 'لم تبدأ اللعبة بعد', m);
        } else {
            clearTimeout(conn.mikey[id][5]); // مسح المهلة إن وجدت
            delete conn.mikey[id];
            conn.reply(m.chat, 'تم حذف اللعبة بنجاح', m);
        }
    }
};

handler.before = async function (m, { conn }) {
    let id = m.chat;
    this.mikey = this.mikey ? this.mikey : {};

    if (!(id in this.mikey)) return;

    let json = this.mikey[id][1];
    let players = this.mikey[id][2];
    let questionCount = this.mikey[id][3];

    if (json && json.name && m.text.toLowerCase() === json.name.toLowerCase()) {
        clearTimeout(this.mikey[id][5]); // مسح المهلة
        let playerIndex = players.findIndex(player => player.id === m.sender);
        if (playerIndex !== -1) {
            players[playerIndex].points += points;
            players[playerIndex].correctAnswers++;
            questionCount++;

            if (questionCount >= maxQuestions) {
                let sortedPlayers = players.sort((a, b) => b.points - a.points);
                let playersList = sortedPlayers.map((player, i) => `${i + 1} - @${
