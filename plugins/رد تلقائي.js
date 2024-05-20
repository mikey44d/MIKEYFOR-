let handler = m => m; 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^شادو بحبك|شادو عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|شادو هنتجوز امتي|شادو انت ليا|شادو بموت فيك$/i.test(m.text)) { 
 responses = [ 
 'شكرا  ',
   'ونا بكرهك',
 'هفكر في الموضوع',  
 'و انا',  
 'استحيت',  
 'خلاص لا اتكسف ',  
 'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
 'طيب و بعدين '  
 ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
 responses = [ 
 'وعليكم السلام',  
 'وعليكم السلام منور',  
 ' وعليكم السلام كيفك',  
 'وعليكم السلام ورحمة الله وبركاته' 
 ]; 
 }else if (/^ شادو عامل ايه|عامله ايه|عاملين ايه|كيفكم|عاملين ايه يشبب$/i.test(m.text)) { 
اresponses = [ 
 'كل شيء بخير الحمد لله ',  
 ' مش عارف  ',  
 ' الحمد لله ماشي الحال ',  
 'الحمد الله',  
 ' لو انت كويس انا كويس' 
 ]; 
 }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
 responses = [ 
 'عيب ',
   'انذار',
 ' اتأدب ',  
 ' يا وسخ ',  
 'الله يهديك ',  
 ' عيب يا طفل' 
 ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
 responses = [ 
 ' عاشت ايدك 🖤',  
 'تسلم ايدك 🖤 ',  
 'عاش 🖤 ',  
 'عاش شادو 🖤',  
 'اوكي 🖤' 
 ]; 
 }else if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂$/i.test(m.text)) { 
 responses = [ 
 'دوم دي ضحكة ',  
 'ضحكني معاك',  
 'دوم يا رب  ',  
 'ههه ',  
 '😂😂😂',  
 'ايه ال بيضحك',  
 'اضحك معاك؟',  
 'دوم ' 
 ]; 
 }else if (/^شادو|شادو عمك|يا شادو/i.test(m.text)) { 
 responses = [ 
 'نعم يا قلب شادو؟ ',  
 'شادو عمك👾 ',  
 'ي عيون شادو',  
 'قلب شادو من جوا ',  
 'نعم يحب' 
]; 
 }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
 responses = [ 
 '*اسمي شادو يا غبي*',  
 '*مش عارف تقول شادو؟*',  
 '*وربي اسمي شادو*',  
 '*انت البوت*',  
 '*كل شويه بوت بوت؟*' 
 ]; 
 }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
 responses = [ 
 'صباح الفل 🖤',  
 'صباحك شادو 🖤 ',  
 'صباح الكاريزما 🖤',  
 'انت صحيت وانا رايح انام 🐦👋🏻 ',  
 'روح نام تاني بقي 🙃' 
 ]; 
 }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
 responses = [ 
 'العفو🖤',  
 ' ولا يهمك مفيش حاجه🖤 ',  
 ' الشكر لله 🖤',  
 'العفو يبشه 🖤' 
]; 
 }else if (/^اكامي$/i.test(m.text)) { 
 responses = [ 
 'زوجتي الي بيقرب لها بفشخه',  
 'حته من قلبي🫣🖤',  
 'اش تبي من زوجتي ولك حثاله',  
 'حبيبتو لقلبي😔',  
 '🖤' 
 ]; 
 }else if (/^انا رجعت|رجعت|انا جيت|جيت$/i.test(m.text)) { 
 responses = [ 
'نورت يحب🖤',  
 'منور/ة',  
'اشتقت لك😔🖤',  
 'منورررر👾🖤',   
 ]; 
 }else if (/^كل ده نور|الجروب نور كده ليه|ايه النور ده|منورين الجدد|نورت|نورتي|منور $/i.test(m.text)) { 
 responses = [
   'نوري الاصل ونورك انعكاس نوري🤝',
 'نوري انا',  
 'الجروب نور فعلا🖤',  
 '🖤',  
 'الجروب منور🖤',  
 '🖤' 
 ]; 
 }else if (/^اسكت|اسكت|هتسكت امتي|اخرس|اخرص|يا ابني اسكت$/i.test(m.text)) { 
 responses = [ 
 'ملكش دعوه ',
   'دز',
   'توكل',
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
 'لا مين انت ال هتسكتني ',  
 'اسكت انت' 
 ]; 
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
