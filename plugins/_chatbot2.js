let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 

 if (/^احا$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `احتين بيكوز احا واحده لاتكفي 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^الحمدلله$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` ادام الله حمدك `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^حصل$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `لم ولن يحصل`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^بتعمل ايه دلوقتي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` بكلمك, `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^علاوي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `*حبيب كلبي ابو حسين اني خادمكم الصغير انت عندك نقص بشخصيتك يجوز اهلك سايگين عليك او ولد المنطقة مسوينك ميز مال تنمر عليك وعلى شكلك فا لذلك تريد تعوض النقص الي بداخلك بهيج سوالف فارغة مثلك ومثل صاحبك الثاني واصلاً من تحجي بالگروب محد مهتملك وكلهم لابسينك يسلكون براسك لأن انت ضعيف وعديم شخصية وشخصيتك تحت الصفر انت واحد منغولي معيدي المن عايش حياتك روح شوف شغلة تسويها يا متخلف هو انت ضعيف شخصية وبيك عقد نفسية وشخصيتك متخلخلة من كد ما يخجلونك واصلاً  يتنمرون عليك فتشوف الكل مثلك اكلك عيناي ليش ماتنتحر بشرفك حرامات والله تصرف الاوكسجين والماي والفواكه من عدنا ياخي انت انسان فاشل انت عباره عن احتباس حراري زايد فايدتك تثكل الكره الارضيه عليه وتصرف ضوه شمس يعني انت هم يسموك بشر ياخي الحيوان صح يصرف نبات بس بيه فايده اكثر منك انت تصرف حيوانات ونباتات وحياتك بس كاعد تاكل وتنام انتحر بشرفك حتى توفر علينه هوى زايد*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 


 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` عارفين ف اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^اه$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` انا برئ معملتش حاجه🙂 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` وانت من اهل الخير حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 }  

 if (/^اتفق$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `  اطلق من يتفق✨ `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` انظر بعيد `, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

  if (/^باي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` باي تربيع`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^عمك$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, `هل تحتاجني؟`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

 if (/^كيفك|عامل اي$/i.test(m.text) ) { //sem prefixo 
 conn.reply(m.chat, ` الحمد لله زي الفل و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     return !0 } 
 export default handler