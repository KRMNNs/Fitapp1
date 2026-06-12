// ══════════════════════════════════════════════════════════
// GERÇEKÇİ İNSAN ANATOMİSİ SVG - Fitness Illustrasyon Tarzı
// ══════════════════════════════════════════════════════════

const MUSCLE_SVG = {

// ══════════════════════════════════════════════════════════
// BENCH PRESS
// ══════════════════════════════════════════════════════════
"Bench Press": {
  anatomySVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="bp_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="bp_pec" cx="40%" cy="40%" r="70%"><stop offset="0%" stop-color="#FF4444"/><stop offset="50%" stop-color="#CC1111"/><stop offset="100%" stop-color="#7A0000"/></radialGradient>
  <radialGradient id="bp_delt" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#FF8833"/><stop offset="100%" stop-color="#AA4400"/></radialGradient>
  <radialGradient id="bp_tri" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FFCC33"/><stop offset="100%" stop-color="#996600"/></radialGradient>
  <radialGradient id="bp_abs" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#44AAFF"/><stop offset="100%" stop-color="#0044AA"/></radialGradient>
  <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="1.5" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <style>
    .pec-a{animation:peca 2s ease-in-out infinite alternate}
    @keyframes peca{0%{opacity:.8;transform:scale(1)}100%{opacity:1;transform:scale(1.02)}}
  </style>
</defs>
<!-- BOYUN -->
<path d="M88 42 Q100 38 112 42 L114 58 Q100 62 86 58Z" fill="url(#bp_skin)"/>
<!-- KLAVIKULA çizgileri -->
<path d="M62 72 Q100 64 138 72" fill="none" stroke="#6B3A1F" stroke-width="1.5" opacity=".5"/>
<!-- DELTOID SOL ön -->
<ellipse class="pec-a" cx="54" cy="88" rx="18" ry="22" fill="url(#bp_delt)" transform="rotate(-15,54,88)" filter="url(#f1)"/>
<ellipse cx="54" cy="88" rx="12" ry="15" fill="none" stroke="#AA4400" stroke-width="1" opacity=".4" transform="rotate(-15,54,88)"/>
<!-- DELTOID SAĞ ön -->
<ellipse class="pec-a" cx="146" cy="88" rx="18" ry="22" fill="url(#bp_delt)" transform="rotate(15,146,88)" filter="url(#f1)"/>
<ellipse cx="146" cy="88" rx="12" ry="15" fill="none" stroke="#AA4400" stroke-width="1" opacity=".4" transform="rotate(15,146,88)"/>
<!-- PECTORALIS MAJOR SOL - ANA KAS -->
<path class="pec-a" d="M66 70 Q56 72 52 88 Q48 104 56 116 Q66 124 80 120 Q94 114 100 104 Q100 90 100 78 Q84 68 66 70Z" fill="url(#bp_pec)" filter="url(#f1)"/>
<path d="M66 70 Q56 72 52 88 Q48 104 56 116 Q66 124 80 120 Q94 114 100 104 Q100 90 100 78 Q84 68 66 70Z" fill="none" stroke="#8B0000" stroke-width="1.2" opacity=".6"/>
<!-- Pec fiber çizgileri sol -->
<path d="M68 74 Q80 86 98 90" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<path d="M65 82 Q78 94 98 96" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<path d="M63 92 Q76 102 98 102" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<!-- PECTORALIS MAJOR SAĞ - ANA KAS -->
<path class="pec-a" d="M134 70 Q144 72 148 88 Q152 104 144 116 Q134 124 120 120 Q106 114 100 104 Q100 90 100 78 Q116 68 134 70Z" fill="url(#bp_pec)" filter="url(#f1)"/>
<path d="M134 70 Q144 72 148 88 Q152 104 144 116 Q134 124 120 120 Q106 114 100 104 Q100 90 100 78 Q116 68 134 70Z" fill="none" stroke="#8B0000" stroke-width="1.2" opacity=".6"/>
<!-- Pec fiber çizgileri sağ -->
<path d="M132 74 Q120 86 102 90" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<path d="M135 82 Q122 94 102 96" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<path d="M137 92 Q124 102 102 102" fill="none" stroke="#FF6666" stroke-width=".8" opacity=".4"/>
<!-- Göğüs orta çizgisi -->
<line x1="100" y1="68" x2="100" y2="122" stroke="#5A1A1A" stroke-width="1.5" opacity=".35"/>
<!-- TRİCEPS SOL -->
<path d="M46 92 Q34 100 32 116 Q30 130 38 140 Q48 146 58 140 Q64 128 62 112 Q60 98 54 90Z" fill="url(#bp_tri)" opacity=".85" filter="url(#f1)"/>
<path d="M46 92 Q34 100 32 116 Q30 130 38 140 Q48 146 58 140 Q64 128 62 112 Q60 98 54 90Z" fill="none" stroke="#996600" stroke-width="1" opacity=".5"/>
<!-- TRİCEPS SAĞ -->
<path d="M154 92 Q166 100 168 116 Q170 130 162 140 Q152 146 142 140 Q136 128 138 112 Q140 98 146 90Z" fill="url(#bp_tri)" opacity=".85" filter="url(#f1)"/>
<path d="M154 92 Q166 100 168 116 Q170 130 162 140 Q152 146 142 140 Q136 128 138 112 Q140 98 146 90Z" fill="none" stroke="#996600" stroke-width="1" opacity=".5"/>
<!-- GÖVDE/KARIN -->
<path d="M68 118 Q64 150 66 175 Q80 185 100 184 Q120 185 134 175 Q136 150 132 118 Q116 128 100 126 Q84 128 68 118Z" fill="url(#bp_skin)" opacity=".9"/>
<!-- Karın kasları (rectus abdominis) -->
<rect x="91" y="130" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".55"/>
<rect x="101" y="130" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".55"/>
<rect x="91" y="142" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".5"/>
<rect x="101" y="142" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".5"/>
<rect x="91" y="154" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".45"/>
<rect x="101" y="154" width="8" height="9" rx="3" fill="url(#bp_abs)" opacity=".45"/>
<!-- Linea alba -->
<line x1="100" y1="126" x2="100" y2="172" stroke="#3A1A0A" stroke-width="1.2" opacity=".3"/>
<!-- BAŞ -->
<ellipse cx="100" cy="26" rx="20" ry="23" fill="url(#bp_skin)"/>
<ellipse cx="100" cy="16" rx="19" ry="10" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="93" cy="23" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<ellipse cx="107" cy="23" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<!-- LEJANT -->
<rect x="8" y="200" width="11" height="8" rx="2" fill="#CC1111"/>
<text x="23" y="207" font-size="8" fill="#eee" font-family="sans-serif" font-weight="bold">Pectoralis Major (Ana)</text>
<rect x="8" y="212" width="11" height="8" rx="2" fill="#AA4400"/>
<text x="23" y="219" font-size="8" fill="#eee" font-family="sans-serif">Ön Deltoid (Yardımcı)</text>
<rect x="8" y="224" width="11" height="8" rx="2" fill="#996600"/>
<text x="23" y="231" font-size="8" fill="#eee" font-family="sans-serif">Triceps (Yardımcı)</text>
<rect x="8" y="236" width="11" height="8" rx="2" fill="#0044AA"/>
<text x="23" y="243" font-size="8" fill="#eee" font-family="sans-serif">Core/Abs (Stabilizatör)</text>
</svg>`,

  motionSVG: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="bm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes bp_press{0%,8%{transform:translateY(0)}42%,58%{transform:translateY(44px)}92%,100%{transform:translateY(0)}}
    #bp_lift{animation:bp_press 3s cubic-bezier(.37,0,.63,1) infinite}
  </style>
</defs>
<!-- BANK -->
<path d="M38 138 Q40 132 280 132 Q282 138 280 148 Q40 148 38 138Z" fill="#5D3A1A" stroke="#3E2010" stroke-width="1.5"/>
<rect x="52" y="148" width="16" height="38" rx="4" fill="#4A2E12"/>
<rect x="232" y="148" width="16" height="38" rx="4" fill="#4A2E12"/>
<!-- Yastık çizgisi -->
<line x1="38" y1="138" x2="280" y2="138" stroke="#7A5030" stroke-width="1" opacity=".5"/>
<!-- VÜCUT GÖVDE (sabit) -->
<path d="M80 108 Q82 116 240 120 Q242 132 240 136 Q82 138 80 136 Q78 128 80 108Z" fill="url(#bm_skin)"/>
<!-- Göğüs hacmi -->
<ellipse cx="160" cy="118" rx="70" ry="14" fill="#C07840" opacity=".35"/>
<!-- BACAKLAR -->
<path d="M84 130 Q72 145 65 170 Q68 178 76 178 Q84 175 84 164 Q86 150 90 136Z" fill="url(#bm_skin)"/>
<path d="M80 130 Q70 142 62 164 Q60 174 68 178 Q76 178 78 168 Q80 154 84 136Z" fill="#C07840" opacity=".7"/>
<path d="M236 130 Q248 145 255 170 Q252 178 244 178 Q236 175 236 164 Q234 150 230 136Z" fill="url(#bm_skin)"/>
<!-- Ayaklar -->
<ellipse cx="67" cy="180" rx="13" ry="6" fill="#4A2E12"/>
<ellipse cx="250" cy="180" rx="13" ry="6" fill="#4A2E12"/>
<!-- BAŞ -->
<ellipse cx="252" cy="112" rx="17" ry="19" fill="url(#bm_skin)"/>
<ellipse cx="258" cy="108" rx="2" ry="1.8" fill="#1A0A00" opacity=".8"/>
<!-- HAREKETLİ GRUP: bar + kollar -->
<g id="bp_lift">
  <!-- Sol kol -->
  <path d="M234 116 Q226 104 210 88" fill="none" stroke="url(#bm_skin)" stroke-width="12" stroke-linecap="round"/>
  <path d="M234 116 Q226 104 210 88" fill="none" stroke="#C07840" stroke-width="8" stroke-linecap="round" opacity=".6"/>
  <!-- Sağ kol -->
  <path d="M130 116 Q138 104 152 88" fill="none" stroke="url(#bm_skin)" stroke-width="12" stroke-linecap="round"/>
  <path d="M130 116 Q138 104 152 88" fill="none" stroke="#C07840" stroke-width="8" stroke-linecap="round" opacity=".6"/>
  <!-- BAR -->
  <rect x="102" y="83" width="108" height="10" rx="5" fill="#B0B0B0" stroke="#888" stroke-width="1"/>
  <ellipse cx="102" cy="88" rx="6" ry="14" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
  <ellipse cx="210" cy="88" rx="6" ry="14" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
  <ellipse cx="94" cy="88" rx="5" ry="10" fill="#AA1111"/>
  <ellipse cx="218" cy="88" rx="5" ry="10" fill="#AA1111"/>
  <!-- Ağırlık kg -->
  <text x="156" y="92" text-anchor="middle" font-size="8" fill="#fff" font-family="sans-serif" font-weight="bold" opacity=".8">BAR</text>
</g>
<!-- Yön okları -->
<path d="M52 72 L52 56" stroke="#52B788" stroke-width="2" stroke-dasharray="3,2"/>
<polygon points="48,58 52,50 56,58" fill="#52B788"/>
<text x="58" y="68" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">İTİŞ</text>
<path d="M52 100 L52 116" stroke="#F4845F" stroke-width="2" stroke-dasharray="3,2"/>
<polygon points="48,114 52,122 56,114" fill="#F4845F"/>
<text x="58" y="112" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">İNİŞ</text>
</svg>`
},

// ══════════════════════════════════════════════════════════
// SQUAT
// ══════════════════════════════════════════════════════════
"Squat": {
  anatomySVG: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="sq_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="sq_quad" cx="45%" cy="40%" r="65%"><stop offset="0%" stop-color="#FF3333"/><stop offset="55%" stop-color="#BB0000"/><stop offset="100%" stop-color="#660000"/></radialGradient>
  <radialGradient id="sq_glute" cx="50%" cy="55%" r="65%"><stop offset="0%" stop-color="#FF2222"/><stop offset="100%" stop-color="#770000"/></radialGradient>
  <radialGradient id="sq_ham" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FF7722"/><stop offset="100%" stop-color="#BB3300"/></radialGradient>
  <radialGradient id="sq_calf" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FFCC44"/><stop offset="100%" stop-color="#AA7700"/></radialGradient>
  <radialGradient id="sq_core" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#44AAFF"/><stop offset="100%" stop-color="#0055AA"/></radialGradient>
  <filter id="f2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <style>
    .qa{animation:qpulse 2s ease-in-out infinite alternate}
    .ga{animation:gpulse 2s ease-in-out infinite alternate}
    @keyframes qpulse{0%{opacity:.8;filter:brightness(.9)}100%{opacity:1;filter:brightness(1.2)}}
    @keyframes gpulse{0%{opacity:.75}100%{opacity:1}}
  </style>
</defs>
<!-- GÖVDE ÜST -->
<path d="M74 82 Q70 105 72 128 Q84 138 100 136 Q116 138 128 128 Q130 105 126 82 Q112 90 100 88 Q88 90 74 82Z" fill="url(#sq_skin)"/>
<!-- Karın kasları -->
<rect x="90" y="102" width="9" height="8" rx="3" fill="url(#sq_core)" opacity=".55"/>
<rect x="101" y="102" width="9" height="8" rx="3" fill="url(#sq_core)" opacity=".55"/>
<rect x="90" y="113" width="9" height="8" rx="3" fill="url(#sq_core)" opacity=".5"/>
<rect x="101" y="113" width="9" height="8" rx="3" fill="url(#sq_core)" opacity=".5"/>
<line x1="100" y1="90" x2="100" y2="132" stroke="#2A0A00" stroke-width="1" opacity=".25"/>
<!-- GLUTEUS MAXIMUS - ANA -->
<path class="ga" d="M74 130 Q64 140 62 158 Q62 172 72 178 Q84 182 96 178 Q104 174 106 164 Q108 152 104 138 Q92 142 82 138 Q78 135 74 130Z" fill="url(#sq_glute)" filter="url(#f2)"/>
<path class="ga" d="M126 130 Q136 140 138 158 Q138 172 128 178 Q116 182 104 178 Q96 174 94 164 Q92 152 96 138 Q108 142 118 138 Q122 135 126 130Z" fill="url(#sq_glute)" filter="url(#f2)"/>
<!-- Glute çizgisi -->
<path d="M72 155 Q100 165 128 155" fill="none" stroke="#550000" stroke-width=".8" opacity=".4"/>
<!-- QUADRICEPS SOL - ANA -->
<path class="qa" d="M64 175 Q52 188 50 210 Q50 228 58 238 Q68 244 78 238 Q86 224 86 205 Q86 188 80 176 Q74 178 68 176Z" fill="url(#sq_quad)" filter="url(#f2)"/>
<!-- Quad detayları (vastus lateralis, medialis) -->
<path d="M64 178 Q56 192 54 212 Q52 228 60 236" fill="none" stroke="#FF5555" stroke-width="1.2" opacity=".5"/>
<path d="M74 178 Q80 192 82 210 Q84 226 78 236" fill="none" stroke="#FF5555" stroke-width="1.2" opacity=".5"/>
<!-- Vastus medialis (iç top) -->
<ellipse cx="70" cy="233" rx="8" ry="6" fill="#FF3333" opacity=".7" filter="url(#f2)"/>
<!-- QUADRICEPS SAĞ - ANA -->
<path class="qa" d="M136 175 Q148 188 150 210 Q150 228 142 238 Q132 244 122 238 Q114 224 114 205 Q114 188 120 176 Q126 178 132 176Z" fill="url(#sq_quad)" filter="url(#f2)"/>
<path d="M136 178 Q144 192 146 212 Q148 228 140 236" fill="none" stroke="#FF5555" stroke-width="1.2" opacity=".5"/>
<path d="M126 178 Q120 192 118 210 Q116 226 122 236" fill="none" stroke="#FF5555" stroke-width="1.2" opacity=".5"/>
<ellipse cx="130" cy="233" rx="8" ry="6" fill="#FF3333" opacity=".7" filter="url(#f2)"/>
<!-- HAMSTRING SOL (arka, soluk görünür) -->
<path d="M60 178 Q50 194 50 215 Q50 230 57 238" fill="none" stroke="#FF7722" stroke-width="4" opacity=".4" stroke-linecap="round"/>
<!-- HAMSTRING SAĞ -->
<path d="M140 178 Q150 194 150 215 Q150 230 143 238" fill="none" stroke="#FF7722" stroke-width="4" opacity=".4" stroke-linecap="round"/>
<!-- Diz kapakçıkları -->
<ellipse cx="68" cy="240" rx="10" ry="8" fill="url(#sq_skin)" stroke="#6B3A1F" stroke-width="1"/>
<ellipse cx="132" cy="240" rx="10" ry="8" fill="url(#sq_skin)" stroke="#6B3A1F" stroke-width="1"/>
<!-- BALDIRLAR SOL -->
<path d="M58 244 Q50 256 52 270 Q58 278 68 276 Q76 270 76 258 Q76 246 70 242Z" fill="url(#sq_calf)" filter="url(#f2)"/>
<path d="M60 246 Q55 258 57 270" fill="none" stroke="#FFAA22" stroke-width="1.2" opacity=".5"/>
<!-- BALDIRLAR SAĞ -->
<path d="M142 244 Q150 256 148 270 Q142 278 132 276 Q124 270 124 258 Q124 246 130 242Z" fill="url(#sq_calf)" filter="url(#f2)"/>
<!-- BAŞ + BOYUN -->
<path d="M88 50 Q100 46 112 50 L114 64 Q100 68 86 64Z" fill="url(#sq_skin)"/>
<ellipse cx="100" cy="34" rx="20" ry="22" fill="url(#sq_skin)"/>
<ellipse cx="100" cy="24" rx="19" ry="10" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="93" cy="31" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<ellipse cx="107" cy="31" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<!-- OMUZLAR -->
<ellipse cx="65" cy="84" rx="16" ry="13" fill="url(#sq_skin)" opacity=".9"/>
<ellipse cx="135" cy="84" rx="16" ry="13" fill="url(#sq_skin)" opacity=".9"/>
<!-- KOLLAR -->
<path d="M68 82 Q52 88 46 104 Q44 116 50 124 Q58 128 64 120 Q68 108 68 94Z" fill="url(#sq_skin)"/>
<path d="M132 82 Q148 88 154 104 Q156 116 150 124 Q142 128 136 120 Q132 108 132 94Z" fill="url(#sq_skin)"/>
<!-- LEJANT -->
<rect x="6" y="228" width="11" height="8" rx="2" fill="#BB0000"/>
<text x="21" y="235" font-size="7.5" fill="#eee" font-family="sans-serif" font-weight="bold">Quadriceps + Gluteus (Ana)</text>
<rect x="6" y="239" width="11" height="8" rx="2" fill="#BB3300"/>
<text x="21" y="246" font-size="7.5" fill="#eee" font-family="sans-serif">Hamstrings (Yardımcı)</text>
<rect x="6" y="250" width="11" height="8" rx="2" fill="#AA7700"/>
<text x="21" y="257" font-size="7.5" fill="#eee" font-family="sans-serif">Baldır + Core (Stabilizatör)</text>
</svg>`,

  motionSVG: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="sm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes sq_down{
      0%,8%{transform:none}
      42%,58%{transform:translateY(46px) scaleY(.78)}
      92%,100%{transform:none}
    }
    #sq_full{animation:sq_down 3.2s cubic-bezier(.37,0,.63,1) infinite; transform-origin:150px 105px}
  </style>
</defs>
<!-- ZEMİN -->
<rect x="30" y="205" width="240" height="6" rx="3" fill="#2D3748"/>
<line x1="30" y1="205" x2="270" y2="205" stroke="#52B788" stroke-width="1.5" opacity=".4"/>
<!-- Paralel seviye çizgisi -->
<line x1="40" y1="162" x2="120" y2="162" stroke="#F4845F" stroke-width="1.5" stroke-dasharray="5,3" opacity=".8"/>
<text x="125" y="166" font-size="8" fill="#F4845F" font-family="sans-serif">Paralel</text>
<g id="sq_full">
  <!-- BAR -->
  <rect x="82" y="78" width="136" height="9" rx="4" fill="#B8B8B8" stroke="#888" stroke-width="1"/>
  <ellipse cx="82" cy="82" rx="7" ry="16" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
  <ellipse cx="218" cy="82" rx="7" ry="16" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
  <ellipse cx="74" cy="82" rx="5" ry="11" fill="#AA1111"/>
  <ellipse cx="226" cy="82" rx="5" ry="11" fill="#AA1111"/>
  <!-- VÜCUT -->
  <!-- Baş -->
  <ellipse cx="150" cy="52" rx="18" ry="20" fill="url(#sm_skin)"/>
  <ellipse cx="150" cy="43" rx="17" ry="9" fill="#2C1A0E" opacity=".7"/>
  <ellipse cx="156" cy="50" rx="2" ry="1.8" fill="#1A0A00" opacity=".8"/>
  <!-- Boyun -->
  <rect x="142" y="70" width="16" height="14" rx="6" fill="#C07840"/>
  <!-- Gövde -->
  <path d="M118 82 Q116 112 118 128 Q130 138 150 136 Q170 138 182 128 Q184 112 182 82 Q166 90 150 88 Q134 90 118 82Z" fill="url(#sm_skin)"/>
  <ellipse cx="150" cy="100" rx="28" ry="22" fill="#C07840" opacity=".3"/>
  <!-- Kollar (bar tutuyor) -->
  <path d="M122 88 L90 82" stroke="url(#sm_skin)" stroke-width="13" stroke-linecap="round"/>
  <path d="M178 88 L210 82" stroke="url(#sm_skin)" stroke-width="13" stroke-linecap="round"/>
  <!-- Ön kol -->
  <path d="M90 82 L84 82" stroke="#C07840" stroke-width="10" stroke-linecap="round"/>
  <path d="M210 82 L216 82" stroke="#C07840" stroke-width="10" stroke-linecap="round"/>
  <!-- Üst bacaklar -->
  <path d="M132 132 Q118 155 112 180" stroke="url(#sm_skin)" stroke-width="17" stroke-linecap="round" fill="none"/>
  <path d="M132 132 Q118 155 112 180" stroke="#C07840" stroke-width="11" stroke-linecap="round" fill="none" opacity=".5"/>
  <path d="M168 132 Q182 155 188 180" stroke="url(#sm_skin)" stroke-width="17" stroke-linecap="round" fill="none"/>
  <path d="M168 132 Q182 155 188 180" stroke="#C07840" stroke-width="11" stroke-linecap="round" fill="none" opacity=".5"/>
  <!-- Alt bacaklar -->
  <path d="M112 180 Q104 198 100 205" stroke="url(#sm_skin)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path d="M188 180 Q196 198 200 205" stroke="url(#sm_skin)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <!-- Diz -->
  <circle cx="112" cy="181" r="8" fill="#C07840"/>
  <circle cx="188" cy="181" r="8" fill="#C07840"/>
  <!-- Ayaklar -->
  <ellipse cx="100" cy="207" rx="15" ry="6" fill="#4A2E12"/>
  <ellipse cx="200" cy="207" rx="15" ry="6" fill="#4A2E12"/>
</g>
<!-- Yön okları -->
<path d="M44 110 L44 90" stroke="#4A90D9" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,92 44,84 48,92" fill="#4A90D9"/>
<text x="8" y="104" font-size="8" fill="#4A90D9" font-family="sans-serif" font-weight="bold">KALKIŞ</text>
<path d="M44 136 L44 156" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,154 44,162 48,154" fill="#F4845F"/>
<text x="14" y="148" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">İNİŞ</text>
</svg>`
},

// ══════════════════════════════════════════════════════════
// LAT PULLDOWN
// ══════════════════════════════════════════════════════════
"Lat Pulldown": {
  anatomySVG: `<svg viewBox="0 0 200 268" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="ld_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="ld_lat" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#FF3333"/><stop offset="50%" stop-color="#AA0000"/><stop offset="100%" stop-color="#550000"/></radialGradient>
  <radialGradient id="ld_trap" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#FF8833"/><stop offset="100%" stop-color="#994400"/></radialGradient>
  <radialGradient id="ld_rhom" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#33CC66"/><stop offset="100%" stop-color="#006622"/></radialGradient>
  <radialGradient id="ld_bic" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#9966FF"/><stop offset="100%" stop-color="#440088"/></radialGradient>
  <filter id="f3" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <style>
    .la{animation:latpulse 2s ease-in-out infinite alternate}
    @keyframes latpulse{0%{opacity:.78;filter:brightness(.88)}100%{opacity:1;filter:brightness(1.2)}}
  </style>
</defs>
<!-- ARKA GÖRÜNÜM -->
<!-- Gövde arka -->
<path d="M70 80 Q64 115 66 155 Q78 168 100 166 Q122 168 134 155 Q136 115 130 80 Q114 88 100 86 Q86 88 70 80Z" fill="url(#ld_skin)"/>
<!-- Omurilik çizgisi -->
<line x1="100" y1="86" x2="100" y2="160" stroke="#2A0A00" stroke-width="1.5" opacity=".3"/>
<!-- TRAPEZIUS ÜST - yardımcı -->
<path d="M76 72 Q88 62 100 60 Q112 62 124 72 Q120 84 100 82 Q80 84 76 72Z" fill="url(#ld_trap)" opacity=".9" filter="url(#f3)"/>
<path d="M78 72 Q100 66 122 72" fill="none" stroke="#CC5500" stroke-width="1" opacity=".5"/>
<!-- TRAPEZIUS ORTA -->
<path d="M74 84 Q70 98 72 112 Q86 120 100 118 Q114 120 128 112 Q130 98 126 84 Q112 92 100 90 Q88 92 74 84Z" fill="url(#ld_trap)" opacity=".65" filter="url(#f3)"/>
<!-- RHOMBOİDS -->
<path d="M88 92 Q84 104 86 114 Q96 120 100 118 Q104 120 114 114 Q116 104 112 92 Q104 98 100 96 Q96 98 88 92Z" fill="url(#ld_rhom)" opacity=".7" filter="url(#f3)"/>
<!-- LATİSSİMUS DORSİ SOL - ANA -->
<path class="la" d="M72 95 Q55 112 50 136 Q46 155 54 167 Q64 175 76 167 Q84 154 84 136 Q84 116 78 97Z" fill="url(#ld_lat)" filter="url(#f3)"/>
<path d="M72 95 Q55 112 50 136 Q46 155 54 167 Q64 175 76 167 Q84 154 84 136 Q84 116 78 97Z" fill="none" stroke="#770000" stroke-width="1.2" opacity=".6"/>
<!-- Lat fiber çizgileri sol -->
<path d="M70 100 Q60 120 56 145" fill="none" stroke="#FF5555" stroke-width=".8" opacity=".4"/>
<path d="M74 108 Q65 128 62 152" fill="none" stroke="#FF5555" stroke-width=".8" opacity=".4"/>
<!-- LATİSSİMUS DORSİ SAĞ - ANA -->
<path class="la" d="M128 95 Q145 112 150 136 Q154 155 146 167 Q136 175 124 167 Q116 154 116 136 Q116 116 122 97Z" fill="url(#ld_lat)" filter="url(#f3)"/>
<path d="M128 95 Q145 112 150 136 Q154 155 146 167 Q136 175 124 167 Q116 154 116 136 Q116 116 122 97Z" fill="none" stroke="#770000" stroke-width="1.2" opacity=".6"/>
<path d="M130 100 Q140 120 144 145" fill="none" stroke="#FF5555" stroke-width=".8" opacity=".4"/>
<path d="M126 108 Q135 128 138 152" fill="none" stroke="#FF5555" stroke-width=".8" opacity=".4"/>
<!-- ARKA DELTOID SOL -->
<ellipse cx="58" cy="82" rx="16" ry="13" fill="url(#ld_trap)" opacity=".75" transform="rotate(-10,58,82)" filter="url(#f3)"/>
<!-- ARKA DELTOID SAĞ -->
<ellipse cx="142" cy="82" rx="16" ry="13" fill="url(#ld_trap)" opacity=".75" transform="rotate(10,142,82)" filter="url(#f3)"/>
<!-- BİCEPS SOL -->
<path d="M50 86 Q36 98 34 116 Q32 130 40 138 Q50 142 60 134 Q64 120 62 104 Q60 90 56 84Z" fill="url(#ld_bic)" opacity=".8" filter="url(#f3)"/>
<path d="M44 100 Q38 116 40 130" fill="none" stroke="#AA77FF" stroke-width="1.2" opacity=".5"/>
<!-- BİCEPS SAĞ -->
<path d="M150 86 Q164 98 166 116 Q168 130 160 138 Q150 142 140 134 Q136 120 138 104 Q140 90 144 84Z" fill="url(#ld_bic)" opacity=".8" filter="url(#f3)"/>
<path d="M156 100 Q162 116 160 130" fill="none" stroke="#AA77FF" stroke-width="1.2" opacity=".5"/>
<!-- BAŞ (arka) + Boyun -->
<path d="M88 48 Q100 44 112 48 L114 62 Q100 66 86 62Z" fill="url(#ld_skin)"/>
<ellipse cx="100" cy="32" rx="20" ry="22" fill="url(#ld_skin)"/>
<ellipse cx="100" cy="22" rx="18" ry="9" fill="#2C1A0E" opacity=".8"/>
<!-- LEJANT -->
<rect x="6" y="190" width="11" height="8" rx="2" fill="#AA0000"/>
<text x="21" y="197" font-size="7.5" fill="#eee" font-family="sans-serif" font-weight="bold">Latissimus Dorsi (Ana)</text>
<rect x="6" y="202" width="11" height="8" rx="2" fill="#994400"/>
<text x="21" y="209" font-size="7.5" fill="#eee" font-family="sans-serif">Arka Deltoid + Trapez</text>
<rect x="6" y="214" width="11" height="8" rx="2" fill="#440088"/>
<text x="21" y="221" font-size="7.5" fill="#eee" font-family="sans-serif">Biceps (Yardımcı)</text>
<rect x="6" y="226" width="11" height="8" rx="2" fill="#006622"/>
<text x="21" y="233" font-size="7.5" fill="#eee" font-family="sans-serif">Rhomboids (Stabilizatör)</text>
</svg>`,

  motionSVG: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="lm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes pull_down{
      0%,8%{transform:translateY(0)}
      42%,58%{transform:translateY(42px)}
      92%,100%{transform:translateY(0)}
    }
    @keyframes cable_extend{
      0%,8%{transform:scaleY(1)}
      42%,58%{transform:scaleY(1.7)}
      92%,100%{transform:scaleY(1)}
    }
    #ld_body{animation:pull_down 2.8s cubic-bezier(.37,0,.63,1) infinite}
    #cable_l{animation:cable_extend 2.8s cubic-bezier(.37,0,.63,1) infinite; transform-origin:104px 18px}
    #cable_r{animation:cable_extend 2.8s cubic-bezier(.37,0,.63,1) infinite; transform-origin:196px 18px}
  </style>
</defs>
<!-- MAKİNE -->
<rect x="118" y="4" width="64" height="14" rx="5" fill="#374151" stroke="#1F2937" stroke-width="1.5"/>
<rect x="148" y="18" width="4" height="28" rx="2" fill="#6B7280"/>
<circle cx="104" cy="18" r="9" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<circle cx="196" cy="18" r="9" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<!-- Kablo sol -->
<line id="cable_l" x1="104" y1="27" x2="104" y2="55" stroke="#94A3B8" stroke-width="2.5"/>
<!-- Kablo sağ -->
<line id="cable_r" x1="196" y1="27" x2="196" y2="55" stroke="#94A3B8" stroke-width="2.5"/>
<!-- Bar -->
<rect x="96" y="52" width="108" height="8" rx="4" fill="#B0B0B0" stroke="#888" stroke-width="1"/>
<ellipse cx="97" cy="56" rx="5" ry="10" fill="#5B21B6"/>
<ellipse cx="203" cy="56" rx="5" ry="10" fill="#5B21B6"/>
<!-- OTURMA YERİ -->
<path d="M108 182 Q108 176 192 176 Q192 182 192 190 Q108 190 108 182Z" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<rect x="120" y="190" width="14" height="28" rx="4" fill="#374151"/>
<rect x="166" y="190" width="14" height="28" rx="4" fill="#374151"/>
<rect x="108" y="172" width="84" height="12" rx="4" fill="#1F2937"/>
<!-- HAREKETLİ VÜCUT -->
<g id="ld_body">
  <ellipse cx="150" cy="118" rx="17" ry="19" fill="url(#lm_skin)"/>
  <ellipse cx="150" cy="109" rx="16" ry="8" fill="#2C1A0E" opacity=".7"/>
  <rect x="142" y="135" width="16" height="12" rx="6" fill="#C07840"/>
  <path d="M128 144 Q124 154 128 166 Q136 172 144 168 Q148 160 144 150Z" fill="url(#lm_skin)"/>
  <path d="M172 144 Q176 154 172 166 Q164 172 156 168 Q152 160 156 150Z" fill="url(#lm_skin)"/>
  <!-- Gövde -->
  <path d="M128 144 Q126 160 128 174 Q138 180 150 178 Q162 180 172 174 Q174 160 172 144 Q160 150 150 148 Q140 150 128 144Z" fill="url(#lm_skin)"/>
  <ellipse cx="150" cy="158" rx="20" ry="15" fill="#C07840" opacity=".3"/>
  <!-- Kollar yukarı uzanmış -->
  <path d="M132 148 Q118 120 104 55" stroke="url(#lm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M132 148 Q118 120 104 55" stroke="#C07840" stroke-width="8" stroke-linecap="round" fill="none" opacity=".5"/>
  <path d="M168 148 Q182 120 196 55" stroke="url(#lm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M168 148 Q182 120 196 55" stroke="#C07840" stroke-width="8" stroke-linecap="round" fill="none" opacity=".5"/>
</g>
<!-- Ok yönleri -->
<path d="M44 80 L44 60" stroke="#52B788" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,62 44,54 48,62" fill="#52B788"/>
<text x="8" y="74" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">YUKARI</text>
<path d="M44 106 L44 126" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,124 44,132 48,124" fill="#F4845F"/>
<text x="14" y="118" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ÇEK</text>
</svg>`
},

// ══════════════════════════════════════════════════════════
// SHOULDER PRESS
// ══════════════════════════════════════════════════════════
"Shoulder Press": {
  anatomySVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="sp_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="sp_ant" cx="45%" cy="40%" r="65%"><stop offset="0%" stop-color="#FF4400"/><stop offset="50%" stop-color="#CC2200"/><stop offset="100%" stop-color="#770000"/></radialGradient>
  <radialGradient id="sp_med" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FF2222"/><stop offset="100%" stop-color="#880000"/></radialGradient>
  <radialGradient id="sp_trap" cx="50%" cy="40%" r="65%"><stop offset="0%" stop-color="#9966FF"/><stop offset="100%" stop-color="#440088"/></radialGradient>
  <radialGradient id="sp_tri" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FFAA22"/><stop offset="100%" stop-color="#AA5500"/></radialGradient>
  <filter id="f4" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <style>
    .spa{animation:sppulse 2s ease-in-out infinite alternate}
    @keyframes sppulse{0%{opacity:.78;filter:brightness(.88)}100%{opacity:1;filter:brightness(1.22)}}
  </style>
</defs>
<!-- TRAPEZIUS / boyun köprüsü -->
<path d="M72 68 Q100 56 128 68 Q122 82 100 78 Q78 82 72 68Z" fill="url(#sp_trap)" opacity=".85" filter="url(#f4)"/>
<path d="M74 68 Q100 62 126 68" fill="none" stroke="#6600CC" stroke-width="1" opacity=".5"/>
<!-- ÖN DELTOID SOL - ANA -->
<path class="spa" d="M62 76 Q42 68 36 52 Q32 38 42 30 Q54 26 62 36 Q66 50 64 66Z" fill="url(#sp_ant)" filter="url(#f4)"/>
<path d="M62 76 Q42 68 36 52 Q32 38 42 30 Q54 26 62 36 Q66 50 64 66Z" fill="none" stroke="#990000" stroke-width="1.2" opacity=".6"/>
<!-- Ön deltoid fiber çizgileri -->
<path d="M60 38 Q48 52 44 66" fill="none" stroke="#FF6633" stroke-width="1" opacity=".5"/>
<path d="M62 46 Q52 58 48 70" fill="none" stroke="#FF6633" stroke-width="1" opacity=".5"/>
<!-- ÖN DELTOID SAĞ - ANA -->
<path class="spa" d="M138 76 Q158 68 164 52 Q168 38 158 30 Q146 26 138 36 Q134 50 136 66Z" fill="url(#sp_ant)" filter="url(#f4)"/>
<path d="M138 76 Q158 68 164 52 Q168 38 158 30 Q146 26 138 36 Q134 50 136 66Z" fill="none" stroke="#990000" stroke-width="1.2" opacity=".6"/>
<path d="M140 38 Q152 52 156 66" fill="none" stroke="#FF6633" stroke-width="1" opacity=".5"/>
<!-- YAN DELTOID SOL - ANA -->
<path class="spa" d="M56 76 Q38 88 36 108 Q34 124 44 134 Q56 140 66 130 Q72 116 70 98 Q68 84 64 76Z" fill="url(#sp_med)" filter="url(#f4)"/>
<path d="M56 76 Q38 88 36 108 Q34 124 44 134 Q56 140 66 130 Q72 116 70 98 Q68 84 64 76Z" fill="none" stroke="#660000" stroke-width="1" opacity=".5"/>
<!-- YAN DELTOID SAĞ - ANA -->
<path class="spa" d="M144 76 Q162 88 164 108 Q166 124 156 134 Q144 140 134 130 Q128 116 130 98 Q132 84 136 76Z" fill="url(#sp_med)" filter="url(#f4)"/>
<path d="M144 76 Q162 88 164 108 Q166 124 156 134 Q144 140 134 130 Q128 116 130 98 Q132 84 136 76Z" fill="none" stroke="#660000" stroke-width="1" opacity=".5"/>
<!-- TRİCEPS SOL - yardımcı -->
<path d="M38 90 Q26 104 26 122 Q26 138 36 146 Q48 150 58 142 Q62 128 60 112 Q58 96 50 88Z" fill="url(#sp_tri)" opacity=".8" filter="url(#f4)"/>
<path d="M32 108 Q30 124 36 136" fill="none" stroke="#FFAA33" stroke-width="1.2" opacity=".5"/>
<!-- TRİCEPS SAĞ - yardımcı -->
<path d="M162 90 Q174 104 174 122 Q174 138 164 146 Q152 150 142 142 Q138 128 140 112 Q142 96 150 88Z" fill="url(#sp_tri)" opacity=".8" filter="url(#f4)"/>
<!-- GÖVDE -->
<path d="M70 76 Q64 115 66 155 Q78 166 100 164 Q122 166 134 155 Q136 115 130 76 Q114 86 100 84 Q86 86 70 76Z" fill="url(#sp_skin)"/>
<!-- Karın kasları -->
<rect x="90" y="112" width="8" height="8" rx="3" fill="#0055AA" opacity=".5"/>
<rect x="100" y="112" width="8" height="8" rx="3" fill="#0055AA" opacity=".5"/>
<rect x="90" y="123" width="8" height="8" rx="3" fill="#0055AA" opacity=".45"/>
<rect x="100" y="123" width="8" height="8" rx="3" fill="#0055AA" opacity=".45"/>
<line x1="100" y1="84" x2="100" y2="158" stroke="#2A0A00" stroke-width="1.2" opacity=".25"/>
<!-- BAŞ + BOYUN -->
<path d="M86 52 Q100 48 114 52 L116 66 Q100 70 84 66Z" fill="url(#sp_skin)"/>
<ellipse cx="100" cy="36" rx="20" ry="22" fill="url(#sp_skin)"/>
<ellipse cx="100" cy="26" rx="19" ry="10" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="93" cy="33" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<ellipse cx="107" cy="33" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<!-- LEJANT -->
<rect x="6" y="185" width="11" height="8" rx="2" fill="#CC2200"/>
<text x="21" y="192" font-size="7.5" fill="#eee" font-family="sans-serif" font-weight="bold">Ön + Yan Deltoid (Ana)</text>
<rect x="6" y="197" width="11" height="8" rx="2" fill="#AA5500"/>
<text x="21" y="204" font-size="7.5" fill="#eee" font-family="sans-serif">Triceps (Yardımcı)</text>
<rect x="6" y="209" width="11" height="8" rx="2" fill="#440088"/>
<text x="21" y="216" font-size="7.5" fill="#eee" font-family="sans-serif">Trapezius (Yardımcı)</text>
</svg>`,

  motionSVG: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="spm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes sp_up{
      0%,8%{transform:translateY(0)}
      42%,58%{transform:translateY(-38px)}
      92%,100%{transform:translateY(0)}
    }
    #sp_arms{animation:sp_up 3s cubic-bezier(.37,0,.63,1) infinite; transform-origin:150px 128px}
  </style>
</defs>
<!-- SANDALYE -->
<path d="M110 176 Q110 170 190 170 Q190 176 190 184 Q110 184 110 176Z" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<rect x="152" y="132" width="6" height="40" rx="3" fill="#374151"/>
<rect x="120" y="184" width="14" height="26" rx="4" fill="#374151"/>
<rect x="166" y="184" width="14" height="26" rx="4" fill="#374151"/>
<!-- SABIT BACAKLAR + ALT GÖVDE -->
<path d="M132 170 Q120 188 112 208" stroke="url(#spm_skin)" stroke-width="15" stroke-linecap="round" fill="none"/>
<path d="M168 170 Q180 188 188 208" stroke="url(#spm_skin)" stroke-width="15" stroke-linecap="round" fill="none"/>
<ellipse cx="110" cy="210" rx="14" ry="6" fill="#4A2E12"/>
<ellipse cx="190" cy="210" rx="14" ry="6" fill="#4A2E12"/>
<!-- Diz -->
<circle cx="116" cy="194" r="7" fill="#C07840"/>
<circle cx="184" cy="194" r="7" fill="#C07840"/>
<!-- ALT GÖVDE OTURUR -->
<path d="M126 162 Q124 170 126 176 Q138 182 150 180 Q162 182 174 176 Q176 170 174 162 Q160 168 150 166 Q140 168 126 162Z" fill="url(#spm_skin)"/>
<!-- ÜST GÖVDE + HAREKETLİ KOLLAR + BAR -->
<g id="sp_arms">
  <!-- Baş -->
  <ellipse cx="150" cy="108" rx="18" ry="20" fill="url(#spm_skin)"/>
  <ellipse cx="150" cy="99" rx="17" ry="9" fill="#2C1A0E" opacity=".7"/>
  <ellipse cx="156" cy="106" rx="2" ry="1.8" fill="#1A0A00" opacity=".8"/>
  <!-- Boyun -->
  <rect x="142" y="126" width="16" height="12" rx="6" fill="#C07840"/>
  <!-- Gövde üst -->
  <path d="M124 136 Q122 156 124 162 Q136 168 150 166 Q164 168 176 162 Q178 156 176 136 Q162 144 150 142 Q138 144 124 136Z" fill="url(#spm_skin)"/>
  <ellipse cx="150" cy="150" rx="24" ry="18" fill="#C07840" opacity=".3"/>
  <!-- Kollar omuz hizasında, dirsek 90° -->
  <path d="M128 142 Q112 142 106 140" stroke="url(#spm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M172 142 Q188 142 194 140" stroke="url(#spm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <!-- Ön kollar yukarı -->
  <path d="M106 140 Q104 128 104 116" stroke="url(#spm_skin)" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M194 140 Q196 128 196 116" stroke="url(#spm_skin)" stroke-width="12" stroke-linecap="round" fill="none"/>
  <!-- DUMBBELL SOL -->
  <rect x="96" y="110" width="16" height="8" rx="4" fill="#B0B0B0" stroke="#888" stroke-width="1"/>
  <ellipse cx="96" cy="114" rx="5" ry="9" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
  <ellipse cx="112" cy="114" rx="5" ry="9" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
  <!-- DUMBBELL SAĞ -->
  <rect x="188" y="110" width="16" height="8" rx="4" fill="#B0B0B0" stroke="#888" stroke-width="1"/>
  <ellipse cx="188" cy="114" rx="5" ry="9" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
  <ellipse cx="204" cy="114" rx="5" ry="9" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
</g>
<!-- Yön okları -->
<path d="M44 118 L44 98" stroke="#4A90D9" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,100 44,92 48,100" fill="#4A90D9"/>
<text x="8" y="112" font-size="8" fill="#4A90D9" font-family="sans-serif" font-weight="bold">YUKARI</text>
<path d="M44 144 L44 164" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,162 44,170 48,162" fill="#F4845F"/>
<text x="10" y="156" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">İNİŞ</text>
</svg>`
},

// ══════════════════════════════════════════════════════════
// DEFAULT PUSH (diğer push hareketleri için)
// ══════════════════════════════════════════════════════════
"default_push": {
  anatomySVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="dpf_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="dpf_pec" cx="45%" cy="45%" r="70%"><stop offset="0%" stop-color="#FF4444"/><stop offset="100%" stop-color="#880000"/></radialGradient>
  <style>.dpf-a{animation:dpfp 2s ease-in-out infinite alternate}@keyframes dpfp{0%{opacity:.78}100%{opacity:1}}</style>
</defs>
<path d="M86 44 Q100 40 114 44 L116 58 Q100 62 84 58Z" fill="url(#dpf_skin)"/>
<path class="dpf-a" d="M66 72 Q56 74 52 90 Q48 106 56 118 Q66 126 80 122 Q94 116 100 106 Q100 92 100 80 Q84 70 66 72Z" fill="url(#dpf_pec)"/>
<path class="dpf-a" d="M134 72 Q144 74 148 90 Q152 106 144 118 Q134 126 120 122 Q106 116 100 106 Q100 92 100 80 Q116 70 134 72Z" fill="url(#dpf_pec)"/>
<line x1="100" y1="70" x2="100" y2="124" stroke="#5A1A1A" stroke-width="1.5" opacity=".3"/>
<ellipse cx="54" cy="86" rx="17" ry="21" fill="#CC5500" opacity=".8" transform="rotate(-15,54,86)"/>
<ellipse cx="146" cy="86" rx="17" ry="21" fill="#CC5500" opacity=".8" transform="rotate(15,146,86)"/>
<path d="M46 90 Q34 102 32 118 Q30 132 38 142 Q48 148 58 140 Q62 126 60 110 Q58 96 52 88Z" fill="#FFAA22" opacity=".8"/>
<path d="M154 90 Q166 102 168 118 Q170 132 162 142 Q152 148 142 140 Q138 126 140 110 Q142 96 148 88Z" fill="#FFAA22" opacity=".8"/>
<path d="M68 120 Q64 152 66 177 Q80 187 100 185 Q120 187 134 177 Q136 152 132 120 Q116 130 100 128 Q84 130 68 120Z" fill="url(#dpf_skin)"/>
<rect x="90" y="133" width="9" height="8" rx="3" fill="#0055AA" opacity=".5"/>
<rect x="101" y="133" width="9" height="8" rx="3" fill="#0055AA" opacity=".5"/>
<rect x="90" y="145" width="9" height="8" rx="3" fill="#0055AA" opacity=".45"/>
<rect x="101" y="145" width="9" height="8" rx="3" fill="#0055AA" opacity=".45"/>
<ellipse cx="100" cy="26" rx="20" ry="22" fill="url(#dpf_skin)"/>
<ellipse cx="100" cy="16" rx="19" ry="10" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="93" cy="23" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<ellipse cx="107" cy="23" rx="2.5" ry="2" fill="#1A0A00" opacity=".8"/>
<rect x="6" y="205" width="11" height="8" rx="2" fill="#880000"/>
<text x="21" y="212" font-size="8" fill="#eee" font-family="sans-serif" font-weight="bold">Pectoralis + Deltoid (Ana)</text>
<rect x="6" y="218" width="11" height="8" rx="2" fill="#AA5500"/>
<text x="21" y="225" font-size="8" fill="#eee" font-family="sans-serif">Triceps (Yardımcı)</text>
</svg>`,
  motionSVG: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="dpm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes gen_press{0%,8%{transform:translateY(0)}42%,58%{transform:translateY(36px)}92%,100%{transform:translateY(0)}}
    #gp_arms{animation:gen_press 3s cubic-bezier(.37,0,.63,1) infinite; transform-origin:150px 100px}
  </style>
</defs>
<path d="M36 188 Q36 182 264 182 Q264 190 264 198 Q36 198 36 188Z" fill="#5D3A1A" stroke="#3E2010" stroke-width="1.5"/>
<rect x="52" y="198" width="14" height="20" rx="3" fill="#4A2E12"/>
<rect x="234" y="198" width="14" height="20" rx="3" fill="#4A2E12"/>
<path d="M78 162 Q80 168 238 172 Q240 180 238 184 Q80 184 78 180 Q76 174 78 162Z" fill="url(#dpm_skin)"/>
<ellipse cx="156" cy="168" rx="68" ry="12" fill="#C07840" opacity=".3"/>
<path d="M82 168 Q70 178 64 196 Q60 205 5 205" stroke="url(#dpm_skin)" stroke-width="13" stroke-linecap="round" fill="none" opacity="0"/>
<ellipse cx="250" cy="156" rx="17" ry="18" fill="url(#dpm_skin)"/>
<ellipse cx="256" cy="152" rx="2" ry="1.8" fill="#1A0A00" opacity=".8"/>
<g id="gp_arms">
  <path d="M232 160 Q216 142 200 118" stroke="url(#dpm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <path d="M128 162 Q144 144 158 118" stroke="url(#dpm_skin)" stroke-width="13" stroke-linecap="round" fill="none"/>
  <rect x="148" y="112" width="108" height="9" rx="4" fill="#B8B8B8" stroke="#888" stroke-width="1"/>
  <ellipse cx="148" cy="116" rx="6" ry="13" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
  <ellipse cx="256" cy="116" rx="6" ry="13" fill="#CC3333" stroke="#AA1111" stroke-width="1.2"/>
</g>
<path d="M48 108 L48 90" stroke="#52B788" stroke-width="2" stroke-dasharray="3,2"/>
<polygon points="44,92 48,84 52,92" fill="#52B788"/>
<text x="54" y="104" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">İTİŞ</text>
</svg>`
},

// ══════════════════════════════════════════════════════════
// DEFAULT PULL (diğer pull hareketleri için)
// ══════════════════════════════════════════════════════════
"default_pull": {
  anatomySVG: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="dpl2_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <radialGradient id="dpl2_lat" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#FF3333"/><stop offset="100%" stop-color="#770000"/></radialGradient>
  <style>.dpl2-a{animation:dpl2p 2s ease-in-out infinite alternate}@keyframes dpl2p{0%{opacity:.78}100%{opacity:1}}</style>
</defs>
<path d="M86 42 Q100 38 114 42 L116 56 Q100 60 84 56Z" fill="url(#dpl2_skin)"/>
<path d="M70 78 Q64 113 66 152 Q78 164 100 162 Q122 164 134 152 Q136 113 130 78 Q114 86 100 84 Q86 86 70 78Z" fill="url(#dpl2_skin)"/>
<path d="M78 78 Q90 66 100 64 Q110 66 122 78 Q118 90 100 88 Q82 90 78 78Z" fill="#CC5500" opacity=".7"/>
<path class="dpl2-a" d="M68 92 Q50 108 46 134 Q42 154 52 165 Q62 172 74 164 Q82 150 82 132 Q82 112 76 94Z" fill="url(#dpl2_lat)"/>
<path class="dpl2-a" d="M132 92 Q150 108 154 134 Q158 154 148 165 Q138 172 126 164 Q118 150 118 132 Q118 112 124 94Z" fill="url(#dpl2_lat)"/>
<path d="M44 90 Q30 104 28 122 Q26 138 36 148 Q48 154 58 144 Q62 130 60 114 Q58 98 50 88Z" fill="#6600AA" opacity=".8"/>
<path d="M156 90 Q170 104 172 122 Q174 138 164 148 Q152 154 142 144 Q138 130 140 114 Q142 98 150 88Z" fill="#6600AA" opacity=".8"/>
<line x1="100" y1="84" x2="100" y2="156" stroke="#2A0A00" stroke-width="1.5" opacity=".25"/>
<ellipse cx="100" cy="24" rx="20" ry="22" fill="url(#dpl2_skin)"/>
<ellipse cx="100" cy="14" rx="19" ry="10" fill="#2C1A0E" opacity=".7"/>
<rect x="6" y="195" width="11" height="8" rx="2" fill="#770000"/>
<text x="21" y="202" font-size="8" fill="#eee" font-family="sans-serif" font-weight="bold">Latissimus Dorsi (Ana)</text>
<rect x="6" y="208" width="11" height="8" rx="2" fill="#6600AA"/>
<text x="21" y="215" font-size="8" fill="#eee" font-family="sans-serif">Biceps + Arka Deltoid</text>
</svg>`,
  motionSVG: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="dplm_skin" cx="45%" cy="35%" r="65%"><stop offset="0%" stop-color="#D4956A"/><stop offset="100%" stop-color="#8B5E3C"/></radialGradient>
  <style>
    @keyframes pull_gen2{0%,8%{transform:translateY(0)}42%,58%{transform:translateY(38px)}92%,100%{transform:translateY(0)}}
    #pg2_body{animation:pull_gen2 2.8s cubic-bezier(.37,0,.63,1) infinite; transform-origin:150px 120px}
  </style>
</defs>
<rect x="112" y="4" width="76" height="14" rx="5" fill="#374151" stroke="#1F2937" stroke-width="1.5"/>
<rect x="146" y="18" width="8" height="30" rx="3" fill="#6B7280"/>
<circle cx="106" cy="18" r="9" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<circle cx="194" cy="18" r="9" fill="#4B5563" stroke="#374151" stroke-width="1.5"/>
<line x1="106" y1="27" x2="106" y2="55" stroke="#94A3B8" stroke-width="2.5"/>
<line x1="194" y1="27" x2="194" y2="55" stroke="#94A3B8" stroke-width="2.5"/>
<rect x="98" y="52" width="104" height="8" rx="4" fill="#B0B0B0" stroke="#888" stroke-width="1"/>
<rect x="108" y="180" width="84" height="14" rx="6" fill="#4B5563"/>
<rect x="122" y="194" width="14" height="24" rx="4" fill="#374151"/>
<rect x="164" y="194" width="14" height="24" rx="4" fill="#374151"/>
<rect x="108" y="168" width="84" height="12" rx="4" fill="#1F2937"/>
<g id="pg2_body">
  <ellipse cx="150" cy="112" rx="17" ry="18" fill="url(#dplm_skin)"/>
  <ellipse cx="150" cy="103" rx="16" ry="8" fill="#2C1A0E" opacity=".7"/>
  <path d="M130 126 Q128 142 130 162 Q140 170 150 168 Q160 170 170 162 Q172 142 170 126 Q158 134 150 132 Q142 134 130 126Z" fill="url(#dplm_skin)"/>
  <path d="M130 130 L106 55" stroke="url(#dplm_skin)" stroke-width="13" stroke-linecap="round"/>
  <path d="M170 130 L194 55" stroke="url(#dplm_skin)" stroke-width="13" stroke-linecap="round"/>
</g>
<path d="M44 82 L44 62" stroke="#52B788" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,64 44,56 48,64" fill="#52B788"/>
<text x="8" y="76" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">YUKARI</text>
<path d="M44 108 L44 128" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
<polygon points="40,126 44,134 48,126" fill="#F4845F"/>
<text x="14" y="120" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ÇEK</text>
</svg>`
}

};

// buildExDetailHTML — muscles.js'deki versiyon geçerli
function buildExDetailHTML(exName, type) {
  const d = (typeof EX_DETAIL !== 'undefined') ? EX_DETAIL[exName] : null;
  const m = MUSCLE_SVG[exName] || MUSCLE_SVG['default_' + type] || MUSCLE_SVG['default_push'];
  const isPush = type === 'push';
  const accent = isPush ? '#52B788' : '#4A90D9';
  const bg = isPush ? '#F0FAF3' : '#EFF6FF';

  const mediaHTML = `
    <div style="display:flex;gap:6px;margin-bottom:10px">
      <div style="flex:1;background:#111827;border-radius:12px;padding:8px">
        <div style="font-size:9px;font-weight:700;color:#6B7280;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:4px">KAS HARİTASI</div>
        <div style="width:100%">${m.anatomySVG}</div>
      </div>
      <div style="flex:1;background:#111827;border-radius:12px;padding:8px">
        <div style="font-size:9px;font-weight:700;color:#6B7280;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:4px">HAREKETLİ ANİMASYON</div>
        <div style="width:100%">${m.motionSVG}</div>
      </div>
    </div>`;

  if (!d) return mediaHTML + `<p style="color:#6B7280;font-size:12px;text-align:center;padding:8px">Detaylı bilgi yakında eklenecek.</p>`;

  const phasesHTML = d.phases.map((p, i) => `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:8px;border:1.5px solid #E5E7EB">
      <div style="background:${p.color};padding:8px 12px;display:flex;align-items:center;justify-content:space-between">
        <span style="color:#fff;font-size:12px;font-weight:800">Faz ${i+1}: ${p.name}</span>
        <button onclick="event.stopPropagation();speak('Faz ${i+1}. ${p.name}. ${p.desc.replace(/['"]/g,'')} İpucu: ${p.tip.replace(/[🎯💪🔑⚠️'"]/g,'')}');this.textContent=this.textContent==='🔊'?'⏹':'🔊'"
          style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer">🔊</button>
      </div>
      <div style="padding:10px 12px;background:#FAFAFA">
        <p style="font-size:12px;color:#374151;line-height:1.6;margin-bottom:6px">${p.desc}</p>
        <div style="background:#FFF8E1;border-left:3px solid #F4845F;border-radius:6px;padding:6px 10px;font-size:11px;color:#78350F;font-weight:600">${p.tip}</div>
      </div>
    </div>`).join('');

  const keyHTML = d.keyPoints.map(k =>
    `<div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid #F3F4F6;font-size:12px;color:#374151">
      <span style="color:${accent};font-weight:700;flex-shrink:0">✓</span><span>${k}</span>
    </div>`).join('');

  return `${mediaHTML}
    <div style="background:${bg};border-radius:10px;padding:10px 12px;margin-bottom:8px">
      <div style="font-size:10px;font-weight:700;color:${accent};margin-bottom:5px;text-transform:uppercase">Çalışan Kaslar</div>
      <div style="margin-bottom:3px"><span style="font-size:10px;font-weight:700;color:#EF4444">🔴 Ana: </span><span style="font-size:11px;color:#374151">${d.primaryMuscles.join(', ')}</span></div>
      <div style="margin-bottom:3px"><span style="font-size:10px;font-weight:700;color:#F4845F">🟠 Yardımcı: </span><span style="font-size:11px;color:#374151">${d.secondaryMuscles.join(', ')}</span></div>
      <div><span style="font-size:10px;font-weight:700;color:#FFD166">🟡 Stabilizatör: </span><span style="font-size:11px;color:#374151">${d.stabilizers.join(', ')}</span></div>
    </div>
    <div style="background:#F0FFF4;border:1.5px solid #D8F3DC;border-radius:10px;padding:9px 12px;margin-bottom:10px;display:flex;align-items:center;gap:8px">
      <span style="font-size:18px">🫁</span>
      <div style="flex:1"><div style="font-size:9px;font-weight:700;color:#1B4332;text-transform:uppercase">Nefes</div>
      <div style="font-size:12px;color:#374151;margin-top:1px">${d.breathe}</div></div>
      <button onclick="speak('Nefes tekniği: ${d.breathe}')"
        style="background:#1B4332;color:#fff;border:none;border-radius:8px;padding:5px 10px;font-size:11px;cursor:pointer">🔊</button>
    </div>
    <div style="font-size:10px;font-weight:700;color:#374151;margin-bottom:5px;text-transform:uppercase">📋 Hareket Fazları</div>
    ${phasesHTML}
    <div style="font-size:10px;font-weight:700;color:#374151;margin-bottom:5px;text-transform:uppercase">🔑 Kilit Noktalar</div>
    <div style="background:#fff;border:1.5px solid #E5E7EB;border-radius:10px;padding:10px 12px;margin-bottom:10px">${keyHTML}</div>
    <div style="display:flex;gap:8px">
      <button onclick="speakAllPhases('${exName}')"
        style="flex:1;padding:11px;background:#1B4332;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">🔊 Tüm Hareketi Anlat</button>
      <button onclick="stopSpeak()"
        style="padding:11px 14px;background:#FEE2E2;color:#EF4444;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">⏹</button>
    </div>`;
}
