// ═══════════════════════════════════════════════════════════
// EXERCISE DETAIL DATA — Kas anatomisi + hareket evreleri + sesli
// ═══════════════════════════════════════════════════════════
const EX_DETAIL = {

"Bench Press": {
  primaryMuscles: ["Pectoralis Major"],
  secondaryMuscles: ["Triceps Brachii","Anterior Deltoid"],
  stabilizers: ["Serratus Anterior","Rotator Cuff"],
  phases: [
    { name: "Başlangıç Pozisyonu", desc: "Sırt bankoya düz yat. Ayaklar yerde sabit. Kürek kemiklerini birbirine çek ve bankoya bas. Geniş tutuş ile bara uzan — başparmak çevresine sar.", tip: "⚠️ Bileği düz tut, bükmé", color: "#52B788" },
    { name: "İniş (Eksantrik)", desc: "Nefes al. Barı kontrollü olarak göğüse indir. Dirsekler 45-75° açıda — ne çok açık ne çok kapalı. Göğüs ortasına, meme hizasına doğun.", tip: "🎯 Hız: 2-3 saniye", color: "#F4845F" },
    { name: "Alt Nokta", desc: "Bar göğse değer veya 2-3 cm yaklaşır. Omuzlar bankoda sabit — yukarı kalkmasın. Bu noktada kısa bir duraklama kas gerilimini artırır.", tip: "🔑 PIF: Göğüsü şişir, barı ittir", color: "#EF4444" },
    { name: "İtiş (Konsantrik)", desc: "Nefesi tut veya ver. Barı yukarı it — hızlı ve patlayıcı. Dirsekler kilitlenmeye yakın dur. Göğüs kaslarını sık.", tip: "💪 Sanki göğüsü ortaya doğru sıkıştır", color: "#4A90D9" },
  ],
  keyPoints: ["Sırt hafif kemer — doğal eğri koru","Ayaklar zemine sabit bas","Kürek kemiklerini çek ve sabit tut","Bar yolunu hafif diyagonal yap — omuzdan göğüse"],
  breathe: "İniş → Nefes al | İtiş → Nefes ver"
},

"Squat": {
  primaryMuscles: ["Quadriceps","Gluteus Maximus"],
  secondaryMuscles: ["Hamstrings","Adductors"],
  stabilizers: ["Core","Erector Spinae","Calves"],
  phases: [
    { name: "Başlangıç — Duruş", desc: "Ayaklar omuz genişliğinde veya biraz daha geniş. Parmak uçları 15-30° dışa. Bar trapez kasının üst kısmına — boyun üstüne değil. Göğüs açık, bakış düz.", tip: "⚠️ Bel düz — kamburlaşma", color: "#52B788" },
    { name: "İniş (Eksantrik)", desc: "Nefes al, core'u sık. Kalçayı geriye ve aşağıya doğru iter gibi in. Diz, ayak parmak yönünde açılsın. Ağırlık topuk ve ayak ortasında.", tip: "🎯 2-3 saniye kontrollü ini", color: "#F4845F" },
    { name: "Alt Nokta — Paralel", desc: "Uyluk yere paralel veya biraz altı. Diz, ayak parmak ucunu geçebilir — önemli olan topuğun yerden kalkmaması. Göğüs dik.", tip: "🔑 Diz içe çökmesin!", color: "#EF4444" },
    { name: "Kalkış (Konsantrik)", desc: "Topuktan yere basarak it. Kalça ve diz aynı anda açılsın. Başla hızlı bitir. Üst noktada dizleri kilitlemeden dur.", tip: "💪 Yere bastığını hisset", color: "#4A90D9" },
  ],
  keyPoints: ["Topuklar yerden kalkmasın","Diz içe çökmemeli","Bel nötr eğri — ne fazla kemer ne düz","Bar boyun kemiğine değil trapeze"],
  breathe: "İniş → Nefes al | Kalkış → Nefes ver (Valsalva tekniği)"
},

"Lat Pulldown": {
  primaryMuscles: ["Latissimus Dorsi"],
  secondaryMuscles: ["Biceps Brachii","Rear Deltoid"],
  stabilizers: ["Rhomboids","Trapezius","Core"],
  phases: [
    { name: "Başlangıç — Oturma", desc: "Diz tutucuların altına dizleri sıkıştır. Geniş tutuş — omuzdan biraz daha geniş. Kolları tamamen uzat, hafif öne eğil (15-20°). Kürek kemiklerini hisset.", tip: "⚠️ Fazla öne eğilme", color: "#52B788" },
    { name: "Çekiş Başlangıcı", desc: "Dirsekleri aşağıya ve arkaya doğru çek. Bunu yaparken önce kürek kemiklerini birbirine yaklaştır — kollardan değil sırt kasından başla.", tip: "🎯 'Dirseklerini ceplerine sok' düşün", color: "#F4845F" },
    { name: "Alt Nokta — Göğüs", desc: "Bar çene veya üst göğse kadar gelir. Göğsü biraz dışa çıkar, kürek kemikleri tam birbirine yaklaşmış. Bu noktada 1 sn sık.", tip: "🔑 1 saniye izometrik kasılma!", color: "#EF4444" },
    { name: "Dönüş (Eksantrik)", desc: "Barı kontrollü olarak yukarı bırak — ama kontrolsüz bırakma. 2-3 saniye boyunca lat kaslarını gergin tut. Tam uzama noktasında lat gerilimini hisset.", tip: "💪 Geri dönüş en önemli faz", color: "#4A90D9" },
  ],
  keyPoints: ["Çekişi kollardan değil sırttan başlat","Gövde sabit — sallanma yok","Bar arkaya değil göğüse gelsin","Tam hareket açısı — tamamen uzat"],
  breathe: "Çekiş → Nefes ver | Uzama → Nefes al"
},

"Shoulder Press": {
  primaryMuscles: ["Anterior Deltoid","Medial Deltoid"],
  secondaryMuscles: ["Triceps Brachii","Upper Trapezius"],
  stabilizers: ["Rotator Cuff","Core","Serratus Anterior"],
  phases: [
    { name: "Başlangıç", desc: "Otur veya ayakta dur. Dumbbelllar kulak hizasında, avuç içleri öne bakıyor. Dirsekler 90° açıda. Core sıkı, bel düz.", tip: "⚠️ Beli aşırı sola alma", color: "#52B788" },
    { name: "İtiş Yukarı", desc: "Dumbbellları yukarı ve hafif içe doğru it. Tam tepe noktada dumbbelllar birbirine yaklaşır ama dokunmaz. Sürekli omuz kasılması.", tip: "🎯 Dirsekler hafif önde kalsın", color: "#F4845F" },
    { name: "Tepe Nokta", desc: "Kollar neredeyse tam uzamış — ama dirsekleri kilitleme. Trapezin kasılmasını his. Bu noktada omuz eklemini sık.", tip: "🔑 1 sn kasılma + sıkıştır", color: "#EF4444" },
    { name: "İniş", desc: "Kontrollü olarak kulak hizasına in. 2 saniye. Omuz kaslarının gerildiğini hisset. Dirsekler hiçbir zaman omuz çizgisinin altına inmesin.", tip: "💪 Gravitiye dirén", color: "#4A90D9" },
  ],
  keyPoints: ["Beli aşırı kamburlaştırma","Dirsekler 90° başlangıç noktası","Tepe noktada omuz sık","Kontrollü iniş — hızlı düşürme"],
  breathe: "İniş → Nefes al | İtiş → Nefes ver"
}

};

// Text-to-speech helper
function speak(text, rate=0.95) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'tr-TR';
  u.rate = rate;
  u.pitch = 1.0;
  u.volume = 0.9;
  // Try to find a Turkish voice
  const voices = window.speechSynthesis.getVoices();
  const trVoice = voices.find(v => v.lang.startsWith('tr')) || voices.find(v => v.lang.startsWith('en'));
  if (trVoice) u.voice = trVoice;
  window.speechSynthesis.speak(u);
}

function stopSpeak() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// Build exercise detail modal HTML
function buildExDetailHTML(exName, type) {
  const d = EX_DETAIL[exName];
  if (!d) return `<p style="color:#6B7280;text-align:center;padding:20px">Bu hareket için detaylı bilgi yakında eklenecek.</p>`;

  const isPush = type === 'push';
  const accent = isPush ? '#52B788' : '#4A90D9';
  const bg = isPush ? '#F0FAF3' : '#EFF6FF';

  const phasesHTML = d.phases.map((p, i) => `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:8px;border:1.5px solid #E5E7EB">
      <div style="background:${p.color};padding:8px 12px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <span style="color:#fff;font-size:12px;font-weight:800">Faz ${i+1}: ${p.name}</span>
        <button onclick="event.stopPropagation();speak('Faz ${i+1}. ${p.name}. ${p.desc} İpucu: ${p.tip.replace(/[🎯💪🔑⚠️]/g,'')}');this.textContent=this.textContent==='🔊'?'⏹':'🔊'" style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer">🔊</button>
      </div>
      <div style="padding:10px 12px;background:#FAFAFA">
        <p style="font-size:12px;color:#374151;line-height:1.6;margin-bottom:6px">${p.desc}</p>
        <div style="background:#FFF8E1;border-left:3px solid #F4845F;border-radius:6px;padding:6px 10px;font-size:11px;color:#78350F;font-weight:600">${p.tip}</div>
      </div>
    </div>`).join('');

  const keyHTML = d.keyPoints.map(k => `
    <div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid #F3F4F6;font-size:12px;color:#374151">
      <span style="color:${accent};font-weight:700;flex-shrink:0">✓</span><span>${k}</span>
    </div>`).join('');

  return `
    <!-- Kas haritası + animasyon -->
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px;min-height:200px;display:flex;flex-direction:column">
        <div style="font-size:10px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;text-align:center">KAS HARİTASI</div>
        ${d.muscles_svg}
      </div>
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px;min-height:200px;display:flex;flex-direction:column">
        <div style="font-size:10px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;text-align:center">HAREKET ANİMASYONU</div>
        ${d.exercise_svg}
      </div>
    </div>

    <!-- Kaslar özet -->
    <div style="background:${bg};border-radius:10px;padding:10px 12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:${accent};margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Çalışan Kaslar</div>
      <div style="margin-bottom:4px"><span style="font-size:10px;font-weight:700;color:#374151">🔴 Ana: </span><span style="font-size:11px;color:#374151">${d.primaryMuscles.join(', ')}</span></div>
      <div style="margin-bottom:4px"><span style="font-size:10px;font-weight:700;color:#374151">🟠 Yardımcı: </span><span style="font-size:11px;color:#374151">${d.secondaryMuscles.join(', ')}</span></div>
      <div><span style="font-size:10px;font-weight:700;color:#374151">🟡 Stabilizatör: </span><span style="font-size:11px;color:#374151">${d.stabilizers.join(', ')}</span></div>
    </div>

    <!-- Nefes -->
    <div style="background:#F0FFF4;border:1.5px solid #D8F3DC;border-radius:10px;padding:10px 12px;margin-bottom:10px;display:flex;align-items:center;gap:8px">
      <span style="font-size:20px">🫁</span>
      <div>
        <div style="font-size:10px;font-weight:700;color:#1B4332;text-transform:uppercase;letter-spacing:.5px">Nefes Tekniği</div>
        <div style="font-size:12px;color:#374151;margin-top:2px">${d.breathe}</div>
      </div>
      <button onclick="speak('Nefes tekniği: ${d.breathe}')" style="background:#1B4332;color:#fff;border:none;border-radius:8px;padding:5px 10px;font-size:11px;cursor:pointer;margin-left:auto">🔊</button>
    </div>

    <!-- Hareket fazları -->
    <div style="font-size:11px;font-weight:700;color:#374151;margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase">📋 Hareket Fazları</div>
    ${phasesHTML}

    <!-- Kilit noktalar -->
    <div style="font-size:11px;font-weight:700;color:#374151;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">🔑 Kilit Noktalar</div>
    <div style="background:#fff;border:1.5px solid #E5E7EB;border-radius:10px;padding:10px 12px;margin-bottom:12px">
      ${keyHTML}
    </div>

    <!-- Tüm fazları sesli oku -->
    <div style="display:flex;gap:8px">
      <button onclick="speakAllPhases('${exName}')" style="flex:1;padding:11px;background:#1B4332;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">🔊 Tüm Hareketi Anlat</button>
      <button onclick="stopSpeak()" style="padding:11px 14px;background:#FEE2E2;color:#EF4444;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">⏹</button>
    </div>`;
}

function speakAllPhases(exName) {
  const d = EX_DETAIL[exName];
  if (!d) return;
  const fullText = `${exName} hareketi. Çalışan kaslar: ${d.primaryMuscles.join(', ')}. ` +
    d.phases.map((p, i) => `Faz ${i+1}, ${p.name}. ${p.desc}`).join('. ') +
    `. Nefes tekniği: ${d.breathe}. ` +
    `Kilit noktalar: ${d.keyPoints.join('. ')}`;
  speak(fullText, 0.9);
}
