import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/84e6871b389c3d4438332.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `𝑺𝐻𝐴𝐷𝛩𝑊 𝐵𝛩𝑇
     
                   ‌
                   ‌
*‏◆ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ◆*

⊑ ━═ 🃁⋖ قائـمـة 📰 الاوامـر ⋗🃁 ═━ ⊒
── • ◈ • ──
┇اهلا : *${taguser}*

┇أنـا اسـمـــي "شادو " تمت برمجتي على يد مايكي

┇رقم المطور مايكي :[https://wa.me/201112422078] 

*┇قبل كل امر لازم تحط  .*

*⊑ ━═ 🃁⋖ الأوامـر ⋗🃁 ═━ ⊒*

*˼‏📖˹ قسم الملوك╿☈*
⊑ ━═ ⋖ 👑 ⋗ ═━ ⊒
👑   *الجروب*    👑
بيجيب معلومات الجروب

👑     *منشن*   👑
بيعمل منشن جماعي

👑    *رستر*    👑
بيعمل اعادة تعيين لرابط الجروب

👑    *الاشباح*  👑
بيجبلك الي مش بيتفاعلو

⊑ ━═ ⋖ 👑 ⋗ ═━ ⊒

* قـسـم الاعـضــاء *
⊑ ━═ ⋖🪄⋗ ═━ ⊒ 
🪄     *هل*    🪄
بتسال البوت سؤال وهو بيجاوب بي 
      احتمال-لا-لااعتقد

🪄   *شخصيه*   🪄
بيقولك شخصية الي انت بتكتبو اسمو

🪄     *صوره*  🪄
بيجبلك صوره اي حاجه انت بتقول اسمها

🪄   *بروفايلي*  🪄
     بيجبلك بروفايلك

🪄   *المطور*   🪄
بيجبلك معلومات المطور

🪄   *اغنيه*   🪄
بيجبلك الاغنيه الي بتكتب اسمها 
      *ملحوظة مهمه انا متبري من ذنوب الاغاني*

⊑ ━═ ⋖ 🪄 ⋗ ═━ ⊒

       *قـسـم الدين*
⊑ ━═ ⋖ 🕋 ⋗ ═━ ⊒
🕋   *قران*    🕋
بيجبلك اية من القران الكريم 

🕋 *اذكار الصباح* 🕋   
     بيجبلك اذكار الصباح 

🕋  *اذكار المساء*🕋 
    بيجبلك اذكار المساء

🕋  *حديث*   🕋
    بيجبلك حديث

⊑ ━═ ⋖  🕋  ⋗ ═━ ⊒

      *قـسـم التـرفـيه*
⊑ ━═ ⋖ 🎇 ⋗ ═━ ⊒
🎇    *رياضيات*   🎇
بيجبلك اسالة رياضيات 

🎇    *رياضه*    🎇
بيجبلك اسالة عن الكورة

🎇     *كت*     🎇
بيجبلك اسالة انمي وانت تكتبها 
       بسرعة قبل اي حد

🎇     *احزر*    🎇
بيجبلك شخصية انمي وانت تقول اسمها 

🎇     *اتحداك*   🎇
البوت بيقولك تحدي

🎇    *المارد*    🎇
المارد بيجبلك ثوره وتعرفها زي احزر

🎇     *اكس او*    🎇
        لعبة اكس او

🎇     *سؤال*      🎇
    بيجبلك سؤال انمي

🎇      *لو*       🎇
       لعبة لو خيروك

🎇      *تاج*      🎇
        لعبة المنشن

🎇      *فزوره*     🎇   
  يقولك فوازير

🎇     *صراحه*     🎇
 يسالك وانت تصارحه

🎇      *حروف*    🎇 
 يقولك جيبلي اسم يبدا بحرف

🎇      *مقولات*    🎇
يقول مقولة من انمي

🎇       *نصيحه*   🎇
         يقولك نصيحه

🎇       *توب*     🎇
         لعبة توب 10
     
🎇        *زواج*   🎇
يمنشن اتنين ويزوجهم

🎇      *طلاق*     🎇
  يمنشن اتنين ويطلقهم

🎇       *لولي*    🎇
يجبلك صورة بنت كيو
   
🎇       *الدون*    🎇
يجيبلك صورة كرستيانو رونالدو

🎇      *ميسي*     🎇
⊑ ━═ ⋖ 🎇 ⋗ ═━ ⊒

       *قسم الـتحميل*
⊑ ━═ ⋖🎆⋗ ═━ ⊒        
🎆     *لفيديو*    🎆
يحول الملصق المتحرك لفديو      

🎆      *صورة*    🎆
يحول الملصق العادي لي صوره

🎆     *تطبيق*     🎆  
يجبلك التطبيق في ملف ياريت تكتب اسم التطبيق بالانجليزي 

⊑ ━═ ⋖ 🎆 ⋗ ═━ ⊒
*˼‏🎥˹ قـسـم التحويل╿☈*
⊑ ━═ ⋖ 👾 ⋗ ═━ ⊒    
👾     *سرقه*      👾
يخلي الملصق بحقوقك الي انت تكتبها

👾     *ملصق*      👾
يحول الصوره لي ملصق
        
👾    *تلجراف*      👾       
يجبلك رابط لي اي صورة او فديو انت تبعتو
  
⊑ ━═ ⋖👾⋗ ═━ ⊒
      *قـسـم الايدت*
⊑ ━═ ⋖🔮⋗ ═━ ⊒
 🎬   *ايديت*     🎬
يجبلك ايديت انمي عشوائي

🎬      *ميمز*    🎬
يجبلك ميمز لي انمي

🎬    *تطقيمي*    🎬
يجبلك تطقيم لي بنت وبنت

🎬    *طقم*      🎬
يجبلك تطقيم ولد وبنت

🎬      *طقم2*   🎬
يجبلك تطقيم لي ولد و ولد

🎬   *ايدت_زورو*   🎬
يجيبلك ايديت لي زورو

    ⊑ ━═ ⋖🔮⋗ ═━ ⊒

🪙*قـسـم البنك*🪙
⊑ ━═ ⋖ 🔮⋗ ═━ ⊒

🎃      *البنك*    🎃
      بيجبلك البنك

🎃       *لفل*    🎃
    بيوريك انت لفل كام

🎃     *شراء*     🎃
بيوريك تقدر تشتري اي

🎃   * يومي*      🎃
      بيديك هدية 

🎃   *تحويل*      🎃
  بتقدر تحول اكس بي

🎃    *تصنيف*     🎃
    بيوريك تصنيفك

⊑ ━═ ⋖ 🎃 ⋗ ═━ ⊒
     * قـسـم المطور*
⊑ ━═ ⋖ 🎃⋗ ═━ ⊒
🎃      *بريم*     🎃
بيخلي الي بتمنشنو مميز

🎃     *حظر *    🎃
      بيعمل حظر

🎃  *الغاء-الحظر*    🎃   
   بيلغي الحظر

🎃   *المحظورين *   🎃   
بيجبلك قايمة المحظورين

🎃    *المميزين*     🎃
  بيجبل قايمة البريم

🎃     *بلوك *     🎃
      بيعمل حظر 

🎃   *رفع-بلوك*     🎃
      بيلغي الحظر

🎃    *البلوكات *    🎃   
بيجيب قائمة المحظورين

🎃     *بان *      🎃
بيدي بان من استعمال البوت

🎃   *رفع-بان*      🎃   
      بيلغي البان

🎃     *انضم *     🎃
البوت بيدخل الجروب 

🎃     *اخرج *     🎃
البوت بيخرج من الجروب

🎃     *اعلان *     🎃
بيبعت رسالة من المطور لي كل الجروبات الي داخل فيها في البوت

⊑ ━═ 🃁⋖🔮⋗🃁 ═━ ⊒                               ‌                              ‌

`.trim();

 await conn.sendMessage(m.chat, { react: { text: '👾', key: m.key } })
   
conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['المهام'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
