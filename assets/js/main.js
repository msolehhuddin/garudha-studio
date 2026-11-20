/* Garudha Studio — main script.
   1) translations: English text -> Bahasa Malaysia text (key must match the English text exactly)
   2) attrs: page title, description and aria-labels per language
   3) menu, scroll header, enquiry form (opens email to info@garudhastudio.com) */
const translations = {"About Us":"Tentang Kami","Services":"Perkhidmatan","Contact":"Hubungi Kami","Start a project":"Mulakan projek","Explore Services":"Lihat Perkhidmatan","Event & Concert Management":"Pengurusan Acara & Konsert","We run the show,":"Kami kendalikan acara anda,","from first brief to final load-out.":"daripada perbincangan awal hingga penutup projek.","Founded":"Ditubuhkan","Studio":"Studio","Languages":"Bahasa","Year founded":"Tahun ditubuhkan","Core services":"Perkhidmatan utama","End to end":"Hujung ke hujung","From first brief to final handover":"Daripada perbincangan awal hingga penyerahan akhir","Corporate conferences":"Persidangan korporat","Annual dinners":"Makan malam tahunan","Product launches":"Pelancaran produk","Media events":"Acara media","Concerts":"Konsert","Touring shows":"Persembahan jelajah","Community festivals":"Festival komuniti","Private celebrations":"Majlis persendirian","The crew behind every cue.":"Kru di sebalik setiap isyarat.","Planning an event in Malaysia?":"Merancang acara di Malaysia?","Share a few details and we will help you shape the plan.":"Kongsikan beberapa butiran dan kami akan bantu membentuk pelan anda.","Back to top":"Kembali ke atas","Garudha Studio. All rights reserved.":"Garudha Studio. Hak cipta terpelihara.","Malaysia":"Malaysia",
"Based in Seri Kembangan, Garudha Studio has been bringing people, schedules and production together":"Berpangkalan di Seri Kembangan, Garudha Studio menyelaras pasukan, jadual dan produksi acara","since 2016.":"sejak 2016.","We can plan your event from the first brief or join your team to run the show.":"Kami boleh merancang acara anda dari awal atau menyertai pasukan anda untuk mengendalikan program pada hari acara.","Which events can we help with?":"Apakah jenis acara yang kami kendalikan?","Our Services":"Perkhidmatan Kami","Select a service to explore the process.":"Pilih perkhidmatan untuk melihat langkah pelaksanaannya.",
"Event Management":"Pengurusan Acara","From the first brief to venue handover.":"Daripada perbincangan awal hingga penyerahan semula lokasi.","Set the brief":"Tetapkan keperluan acara","Define the audience, purpose, budget and what a successful event should achieve.":"Kenal pasti tetamu sasaran, tujuan, bajet dan hasil yang ingin dicapai.","Build the plan":"Sediakan pelan kerja","Agree on the venue, programme, cost breakdown and approval dates.":"Persetujui lokasi, atur cara, pecahan kos dan tarikh kelulusan bersama klien.","Bring the team together":"Selaraskan pasukan","Confirm suppliers, floor plans, crew responsibilities and the master schedule.":"Sahkan pembekal, pelan lantai, tanggungjawab kru dan jadual induk.","Open the doors":"Sambut tetamu","Brief the team, rehearse transitions and coordinate guests, vendors and programme changes on site.":"Beri taklimat kepada pasukan, raptai peralihan antara segmen dan selaraskan pergerakan tetamu, pembekal serta perubahan atur cara di lokasi.","Close the project":"Tutup projek","Hand the venue back, reconcile costs and review the outcome with the client.":"Serahkan semula lokasi, semak kos akhir dan nilai hasil acara bersama klien.","What you receive":"Hasil kerja untuk anda","An event plan, itemised budget, master schedule and close-out report.":"Pelan pengurusan acara, pecahan bajet, jadual induk dan laporan penutup.",
"Concert Management":"Pengurusan Konsert","From the artist brief to the final load-out.":"Daripada perbincangan tentang keperluan artis hingga semua peralatan dibawa keluar.","Map the show":"Rancang persembahan","Confirm the line-up, venue, audience capacity and performance schedule with the promoter.":"Sahkan barisan artis, lokasi, kapasiti penonton dan jadual persembahan bersama penganjur.","Advance the production":"Selaraskan keperluan produksi","Review artist riders with the venue and suppliers. Agree on stage layout, backline, audio and lighting.":"Semak keperluan artis bersama pengurusan lokasi dan pembekal. Persetujui susun atur pentas, peralatan muzik, sistem bunyi dan pencahayaan.","Load in & soundcheck":"Pasang peralatan dan uji bunyi","Schedule equipment arrivals, stage setup, line checks and soundchecks before doors open.":"Jadualkan ketibaan peralatan, pemasangan pentas, ujian sambungan audio dan sesi uji bunyi sebelum pintu dibuka.","Run the concert":"Kendalikan konsert","Coordinate artist calls, stage changes and show cues while the venue team manages audience entry and exit.":"Selaraskan panggilan artis, pertukaran set dan isyarat pentas sementara pasukan lokasi mengurus keluar masuk penonton.","Load out & review":"Kosongkan lokasi dan nilai produksi","Coordinate equipment returns, complete venue handover and review production notes with the promoter.":"Selaraskan pemulangan peralatan, serahkan semula lokasi dan semak catatan produksi bersama penganjur.","A production schedule, artist requirements list, venue operations plan and show running order.":"Jadual produksi, senarai keperluan artis, pelan operasi lokasi dan susunan persembahan.",
"Event Planner":"Perancangan Acara","From an early idea to a plan ready for the crew.":"Daripada idea awal hingga terhasilnya pelan yang boleh digunakan oleh kru.","Discover the idea":"Kenal pasti idea dan keutamaan","Identify the occasion, guest profile, priorities and spending limit.":"Fahami tujuan majlis, profil tetamu, keutamaan klien dan had perbelanjaan.","Shape the concept":"Bentuk konsep acara","Compare venue options and propose a theme, guest journey and programme format.":"Bandingkan pilihan lokasi dan cadangkan tema, aliran pergerakan tetamu serta format program.","Develop the blueprint":"Perincikan pelan acara","Build the floor plan, supplier brief, budget and planning calendar.":"Sediakan pelan lantai, panduan untuk pembekal, bajet dan jadual persediaan.","Hand over the plan":"Serahkan pelan kepada pasukan","Walk the delivery team through the run sheet, decision points and contingency options before event day.":"Terangkan jadual acara, perkara yang memerlukan keputusan dan pilihan pelan sandaran kepada pasukan pelaksana sebelum hari acara.","Review the outcome":"Nilai hasil acara","After the event, compare client feedback with the original goals and capture ideas for the next edition.":"Selepas acara, bandingkan maklum balas klien dengan matlamat asal dan catat idea untuk penganjuran seterusnya.","A concept proposal, cost estimate, draft programme, layout and planning calendar.":"Kertas cadangan konsep, anggaran kos, draf atur cara, cadangan susun atur dan jadual persediaan.",
"Event Coordinator":"Penyelarasan Acara","From taking over the brief to the final sign-off.":"Daripada pengambilalihan persediaan hingga pengesahan akhir bersama penganjur.","Take the handover":"Ambil alih maklumat acara","Collect existing bookings, vendor contacts and the latest programme from the organiser.":"Dapatkan butiran tempahan, maklumat hubungan pembekal dan atur cara terkini daripada penganjur.","Confirm the details":"Sahkan butiran operasi","Check access times, deliveries, guest arrangements and outstanding decisions with each lead.":"Semak waktu akses, penghantaran, urusan tetamu dan keputusan yang masih diperlukan bersama setiap ketua pasukan.","Brief & rehearse":"Adakan taklimat dan raptai","Issue the final run sheet, assign cues and rehearse the critical transitions.":"Edarkan jadual akhir, tetapkan pemberi isyarat dan jalankan raptai bagi peralihan penting antara segmen.","Coordinate the day":"Selaraskan perjalanan acara","Call vendors and speakers into position, track timing and relay changes to everyone affected.":"Pastikan pembekal dan penceramah bersedia pada waktunya, pantau jadual dan maklumkan perubahan kepada semua pihak terlibat.","Wrap the site":"Selesaikan urusan di lokasi","Confirm guest departure, vendor collection and venue handover, then report outstanding items to the organiser.":"Sahkan tetamu telah beredar, peralatan pembekal telah diambil dan lokasi telah diserahkan semula. Laporkan perkara tertunggak kepada penganjur.","An event-day run sheet, operations contact list and crew assignments.":"Jadual terperinci hari acara, senarai hubungan operasi dan pembahagian tugas kru.",
"69-1, Jalan PUJ 3/9,":"69-1, Jalan PUJ 3/9,","Taman Puncak Jalil, Pusat Bandar Putra Permai,":"Taman Puncak Jalil, Pusat Bandar Putra Permai,","43300 Seri Kembangan, Selangor.":"43300 Seri Kembangan, Selangor.","View on Google Maps":"Lihat di Google Maps",
"Contact Our Team":"Hubungi Pasukan Kami","General Enquiries":"Pertanyaan Umum","Studio Address":"Alamat Studio","Tell us about your event":"Ceritakan tentang acara anda","Your name":"Nama anda","Company (optional)":"Syarikat (pilihan)","Email address":"Alamat e-mel","Service of interest":"Perkhidmatan yang diperlukan","Choose a service":"Pilih perkhidmatan","Help me choose":"Bantu saya memilih","Event date (optional)":"Tarikh acara (pilihan)","Expected guests (optional)":"Anggaran tetamu (pilihan)","Venue or city (optional)":"Lokasi atau bandar (pilihan)","Event brief":"Ringkasan acara","Include the event type and the support you need.":"Nyatakan jenis acara dan bantuan yang anda perlukan.","Send enquiry":"Hantar pertanyaan","Review and send your enquiry in your email app.":"Semak dan hantar pertanyaan melalui aplikasi e-mel anda."};
const attrs = {en:{menu:"Menu",lang:"Select language",nav:"Main navigation",skip:"Skip to content",title:"GARUDHA STUDIO — Event & Concert Management",desc:"Garudha Studio is an event and concert management company based in Seri Kembangan, Selangor, Malaysia. Event management, concert production, planning and on-site coordination since 2016.",hero:"Concert stage with red lighting and a sound engineer at the mixing desk",band:"Three crew members wearing headsets watching a stage"},
 ms:{menu:"Menu",lang:"Pilih bahasa",nav:"Navigasi utama",skip:"Langkau ke kandungan",title:"GARUDHA STUDIO — Pengurusan Acara dan Konsert",desc:"Garudha Studio ialah syarikat pengurusan acara dan konsert yang berpangkalan di Seri Kembangan, Selangor, Malaysia. Pengurusan acara, produksi konsert, perancangan dan penyelarasan di lokasi sejak 2016.",hero:"Pentas konsert berlampu merah dengan jurutera bunyi di meja campuran",band:"Tiga ahli kru berpakaian hitam dengan fon kepala menonton pentas"}};
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const entries = [];
while(walker.nextNode()){
 const node = walker.currentNode;
 if(node.parentElement.closest('script,style')) continue;
 const key = node.nodeValue.trim();
 if(Object.hasOwn(translations,key)) entries.push([node,node.nodeValue,key]);
}
const langButtons=[...document.querySelectorAll('.lang button')];
function selectLanguage(code){
 const malay = code === 'ms', a = attrs[malay?'ms':'en'];
 document.documentElement.lang = malay?'ms':'en';
 langButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===(malay?'ms':'en'))));
 for(const [node,original,key] of entries) node.nodeValue = malay ? original.replace(key,translations[key]) : original;
 document.title = a.title;
 document.querySelector('meta[name=description]').setAttribute('content',a.desc);
 document.querySelector('.main-nav').setAttribute('aria-label',a.nav);
 document.querySelector('.lang').setAttribute('aria-label',a.lang);
 document.querySelector('.menu-btn').setAttribute('aria-label',a.menu);
 document.querySelector('.skip').textContent = a.skip;
 document.querySelector('.hero-bg').setAttribute('aria-label',a.hero);
 document.querySelector('.band').setAttribute('aria-label',a.band);
}
langButtons.forEach(b=>b.addEventListener('click',()=>{selectLanguage(b.dataset.lang);try{localStorage.setItem('garudha-language',b.dataset.lang)}catch{}}));
let initial='en';try{initial=localStorage.getItem('garudha-language')||'en'}catch{}selectLanguage(initial);

const header=document.querySelector('.site-header'),menuBtn=document.querySelector('.menu-btn');
const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>24);onScroll();addEventListener('scroll',onScroll,{passive:true});
menuBtn.addEventListener('click',()=>{const o=header.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(o))});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));

document.getElementById("backtop").addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})});

const form=document.getElementById("enquiry"),fallback=document.getElementById("fallback"),copied=document.getElementById("copied");
let draft={to:"info@garudhastudio.com",subject:"",body:""};
form.addEventListener("submit",function(event){
 event.preventDefault();
 const data=new FormData(this);
 const service=this.elements.service.selectedOptions[0].textContent;
 const lines=Array.from(this.querySelectorAll("[name]")).flatMap(control=>{
   const value=control.name==="service"?service:String(data.get(control.name)||"").trim();
   const label=control.closest("label");
   const text=label&&label.querySelector("span")?label.querySelector("span").textContent:control.name;
   return value?[text+" — "+value]:[];
 });
 draft.subject=(document.documentElement.lang==="ms"?"Pertanyaan acara":"Event enquiry")+" — "+service;
 draft.body=lines.join("\r\n");
 const q="subject="+encodeURIComponent(draft.subject)+"&body="+encodeURIComponent(draft.body);
 document.getElementById("gmail").href="https://mail.google.com/mail/?view=cm&fs=1&to="+draft.to+"&su="+encodeURIComponent(draft.subject)+"&body="+encodeURIComponent(draft.body);
 fallback.hidden=false;copied.textContent="";
 const a=document.createElement("a");a.href="mailto:"+draft.to+"?"+q;document.body.appendChild(a);a.click();a.remove();
});
document.getElementById("copy").addEventListener("click",async()=>{
 const text="To: "+draft.to+"\r\nSubject: "+draft.subject+"\r\n\r\n"+draft.body;
 try{await navigator.clipboard.writeText(text);copied.textContent="Copied ✓"}catch{
  const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();
  try{document.execCommand("copy");copied.textContent="Copied ✓"}catch{copied.textContent="Copy failed"}t.remove();
 }
});
