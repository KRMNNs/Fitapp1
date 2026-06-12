// ══════════════════════════════════════════════════════════
// STATİK KAS ANATOMİSİ — Fotoğraftaki tarz
// Animasyon YOK — sadece gerçekçi kas çizimi + pozisyon
// ══════════════════════════════════════════════════════════

const MUSCLE_SVG = {

// ──────────────────────────────────────────────────────────
// BENCH PRESS
// ──────────────────────────────────────────────────────────
"Bench Press": {
  anatomySVG: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_bp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="pec_bp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF5252"/><stop offset="60%" stop-color="#CC0000"/><stop offset="100%" stop-color="#7A0000"/></linearGradient>
  <linearGradient id="delt_bp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF8C00"/><stop offset="100%" stop-color="#AA4400"/></linearGradient>
  <linearGradient id="tri_bp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#996600"/></linearGradient>
  <linearGradient id="bench_g" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6B3A1F"/><stop offset="100%" stop-color="#3E1A08"/></linearGradient>
  <linearGradient id="bar_g" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E0E0E0"/><stop offset="100%" stop-color="#909090"/></linearGradient>
  <filter id="shadow_bp"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.4"/></filter>
  <filter id="muscle_glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<!-- ══ BAŞLANGIÇ POZİSYONU (sol taraf) ══ -->
<text x="75" y="12" text-anchor="middle" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">BAŞLANGIÇ</text>

<!-- BANK -->
<rect x="18" y="120" width="125" height="14" rx="5" fill="url(#bench_g)" filter="url(#shadow_bp)"/>
<rect x="25" y="134" width="10" height="22" rx="3" fill="#3E1A08"/>
<rect x="120" y="134" width="10" height="22" rx="3" fill="#3E1A08"/>

<!-- Yatan figür — başlangıç (bar yukarda) -->
<!-- Baş -->
<ellipse cx="130" cy="112" rx="11" ry="13" fill="url(#skin_bp)"/>
<ellipse cx="135" cy="108" rx="1.8" ry="1.5" fill="#1A0A00"/>
<!-- Boyun -->
<rect x="122" y="121" width="10" height="8" rx="4" fill="#B87030"/>
<!-- Gövde -->
<path d="M35 112 Q35 122 45 126 Q85 130 118 126 Q128 122 128 112 Q95 116 83 114 Q60 116 35 112Z" fill="url(#skin_bp)"/>
<!-- Göğüs hacmi (kabarık) -->
<ellipse cx="82" cy="116" rx="38" ry="9" fill="#A06030" opacity=".4"/>
<!-- PEC SOL — KIRMIZI ANA -->
<path d="M55 110 Q45 112 42 120 Q40 128 48 132 Q58 134 68 128 Q76 120 76 112 Q68 108 55 110Z" fill="url(#pec_bp)" filter="url(#muscle_glow)"/>
<path d="M57 112 Q50 118 50 124" fill="none" stroke="#FF7777" stroke-width=".8" opacity=".6"/>
<path d="M62 110 Q56 118 56 126" fill="none" stroke="#FF7777" stroke-width=".8" opacity=".6"/>
<!-- PEC SAĞ — KIRMIZI ANA -->
<path d="M107 110 Q117 112 120 120 Q122 128 114 132 Q104 134 94 128 Q86 120 86 112 Q94 108 107 110Z" fill="url(#pec_bp)" filter="url(#muscle_glow)"/>
<path d="M105 112 Q112 118 112 124" fill="none" stroke="#FF7777" stroke-width=".8" opacity=".6"/>
<path d="M100 110 Q106 118 106 126" fill="none" stroke="#FF7777" stroke-width=".6" opacity=".6"/>
<!-- Göğüs orta çizgisi -->
<line x1="82" y1="108" x2="82" y2="130" stroke="#5A1A1A" stroke-width="1.2" opacity=".35"/>
<!-- Klavikula -->
<path d="M55 110 Q82 104 107 110" fill="none" stroke="#7A3A1A" stroke-width="1.2" opacity=".4"/>
<!-- DELTOID SOL — turuncu -->
<path d="M42 108 Q34 110 30 118 Q28 126 34 132 Q42 134 48 128 Q50 120 48 112Z" fill="url(#delt_bp)" filter="url(#muscle_glow)"/>
<!-- DELTOID SAĞ — turuncu -->
<path d="M122 108 Q130 110 132 118 Q134 126 128 132 Q120 134 114 128 Q112 120 114 112Z" fill="url(#delt_bp)" filter="url(#muscle_glow)"/>
<!-- BACAKLAR -->
<path d="M36 122 Q26 132 22 148 Q20 158 26 162 Q34 164 38 156 Q40 146 40 132Z" fill="url(#skin_bp)"/>
<path d="M36 122 Q30 130 28 144 Q24 160 32 164" fill="none" stroke="#B07040" stroke-width="2" opacity=".4"/>
<!-- Ayak -->
<ellipse cx="24" cy="163" rx="8" ry="4" fill="#4A2E12"/>
<!-- BAR — yukarıda -->
<rect x="44" y="76" width="80" height="7" rx="3" fill="url(#bar_g)"/>
<ellipse cx="44" cy="79" rx="5" ry="11" fill="#CC2200" stroke="#AA0000" stroke-width="1"/>
<ellipse cx="124" cy="79" rx="5" ry="11" fill="#CC2200" stroke="#AA0000" stroke-width="1"/>
<ellipse cx="39" cy="79" rx="4" ry="8" fill="#990000"/>
<ellipse cx="129" cy="79" rx="4" ry="8" fill="#990000"/>
<!-- Kollar uzatılmış -->
<path d="M118 114 Q122 96 124 79" fill="none" stroke="url(#skin_bp)" stroke-width="10" stroke-linecap="round"/>
<path d="M46 114 Q44 96 44 79" fill="none" stroke="url(#skin_bp)" stroke-width="10" stroke-linecap="round"/>
<!-- Ön kol -->
<path d="M124 79 L128 79" fill="none" stroke="#A07040" stroke-width="8" stroke-linecap="round"/>
<path d="M44 79 L40 79" fill="none" stroke="#A07040" stroke-width="8" stroke-linecap="round"/>

<!-- ══ ALT NOKTA POZİSYONU (sağ taraf) ══ -->
<text x="255" y="12" text-anchor="middle" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ALT NOKTA (GÖĞSE)</text>

<!-- BANK 2 -->
<rect x="200" y="120" width="125" height="14" rx="5" fill="url(#bench_g)" filter="url(#shadow_bp)"/>
<rect x="207" y="134" width="10" height="22" rx="3" fill="#3E1A08"/>
<rect x="302" y="134" width="10" height="22" rx="3" fill="#3E1A08"/>

<!-- Yatan figür — alt nokta -->
<ellipse cx="312" cy="112" rx="11" ry="13" fill="url(#skin_bp)"/>
<ellipse cx="317" cy="108" rx="1.8" ry="1.5" fill="#1A0A00"/>
<rect x="304" y="121" width="10" height="8" rx="4" fill="#B87030"/>
<path d="M217 112 Q217 122 227 126 Q267 130 300 126 Q310 122 310 112 Q277 116 265 114 Q242 116 217 112Z" fill="url(#skin_bp)"/>
<ellipse cx="264" cy="116" rx="38" ry="9" fill="#A06030" opacity=".4"/>
<!-- PEC SOL kasılmış — daha parlak kırmızı -->
<path d="M237 108 Q227 110 224 118 Q222 128 230 132 Q240 136 250 130 Q258 122 258 114 Q248 108 237 108Z" fill="#FF2222" filter="url(#muscle_glow)"/>
<path d="M239 110 Q232 118 232 126" fill="none" stroke="#FF9999" stroke-width=".8" opacity=".7"/>
<path d="M244 108 Q238 118 238 128" fill="none" stroke="#FF9999" stroke-width=".8" opacity=".7"/>
<!-- PEC SAĞ kasılmış -->
<path d="M289 108 Q299 110 302 118 Q304 128 296 132 Q286 136 276 130 Q268 122 268 114 Q278 108 289 108Z" fill="#FF2222" filter="url(#muscle_glow)"/>
<path d="M287 110 Q294 118 294 126" fill="none" stroke="#FF9999" stroke-width=".8" opacity=".7"/>
<path d="M282 108 Q288 118 288 128" fill="none" stroke="#FF9999" stroke-width=".6" opacity=".7"/>
<line x1="264" y1="108" x2="264" y2="132" stroke="#5A1A1A" stroke-width="1.2" opacity=".35"/>
<path d="M237 108 Q264 102 289 108" fill="none" stroke="#7A3A1A" stroke-width="1.2" opacity=".4"/>
<path d="M224 108 Q216 110 212 118 Q210 126 216 132 Q224 136 230 128 Q232 120 230 112Z" fill="url(#delt_bp)" filter="url(#muscle_glow)"/>
<path d="M304 108 Q312 110 314 118 Q316 126 310 132 Q302 136 296 128 Q294 120 296 112Z" fill="url(#delt_bp)" filter="url(#muscle_glow)"/>
<path d="M218 122 Q208 132 204 148 Q202 158 208 162 Q216 164 220 156 Q222 146 222 132Z" fill="url(#skin_bp)"/>
<ellipse cx="206" cy="163" rx="8" ry="4" fill="#4A2E12"/>
<!-- BAR — göğüste (aşağıda) -->
<rect x="226" y="116" width="80" height="7" rx="3" fill="url(#bar_g)"/>
<ellipse cx="226" cy="119" rx="5" ry="11" fill="#CC2200" stroke="#AA0000" stroke-width="1"/>
<ellipse cx="306" cy="119" rx="5" ry="11" fill="#CC2200" stroke="#AA0000" stroke-width="1"/>
<ellipse cx="221" cy="119" rx="4" ry="8" fill="#990000"/>
<ellipse cx="311" cy="119" rx="4" ry="8" fill="#990000"/>
<!-- Kollar bükülerek göğüste -->
<path d="M300 114 Q304 116 306 119" fill="none" stroke="url(#skin_bp)" stroke-width="10" stroke-linecap="round"/>
<path d="M228 114 Q226 116 226 119" fill="none" stroke="url(#skin_bp)" stroke-width="10" stroke-linecap="round"/>
<!-- TRİCEPS görünür (kollar bükülü) -->
<path d="M298 112 Q308 116 312 124 Q312 132 306 136 Q298 138 294 130 Q292 120 296 112Z" fill="url(#tri_bp)" filter="url(#muscle_glow)" opacity=".85"/>
<path d="M230 112 Q220 116 216 124 Q216 132 222 136 Q230 138 234 130 Q236 120 232 112Z" fill="url(#tri_bp)" filter="url(#muscle_glow)" opacity=".85"/>

<!-- ORTA BÖLME -->
<line x1="170" y1="4" x2="170" y2="196" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>

<!-- LEJANT ALTTA -->
<rect x="15" y="170" width="10" height="7" rx="2" fill="#CC0000"/>
<text x="29" y="176" font-size="7.5" fill="#ddd" font-family="sans-serif" font-weight="bold">Pectoralis Major (Ana Kas)</text>
<rect x="15" y="181" width="10" height="7" rx="2" fill="#AA4400"/>
<text x="29" y="187" font-size="7.5" fill="#ddd" font-family="sans-serif">Anterior Deltoid (Yardımcı)</text>
<rect x="160" y="170" width="10" height="7" rx="2" fill="#996600"/>
<text x="174" y="176" font-size="7.5" fill="#ddd" font-family="sans-serif">Triceps Brachii (Yardımcı)</text>
<rect x="160" y="181" width="10" height="7" rx="2" fill="#333"/>
<text x="174" y="187" font-size="7.5" fill="#ddd" font-family="sans-serif">= Kasılmış kas daha parlak</text>
</svg>`,
  motionSVG: null
},

// ──────────────────────────────────────────────────────────
// SQUAT
// ──────────────────────────────────────────────────────────
"Squat": {
  anatomySVG: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_sq" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="quad_sq" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF4444"/><stop offset="55%" stop-color="#CC0000"/><stop offset="100%" stop-color="#660000"/></linearGradient>
  <linearGradient id="glute_sq" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FF3333"/><stop offset="100%" stop-color="#880000"/></linearGradient>
  <linearGradient id="ham_sq" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF8822"/><stop offset="100%" stop-color="#AA3300"/></linearGradient>
  <linearGradient id="calf_sq" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#AA7700"/></linearGradient>
  <linearGradient id="bar_sq" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E0E0E0"/><stop offset="100%" stop-color="#909090"/></linearGradient>
  <filter id="shadow_sq"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.4"/></filter>
  <filter id="mg_sq"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<!-- ══ BAŞLANGIÇ (sol) ══ -->
<text x="75" y="12" text-anchor="middle" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">BAŞLANGIÇ DURUŞU</text>

<!-- BAR -->
<rect x="20" y="56" width="115" height="7" rx="3" fill="url(#bar_sq)"/>
<ellipse cx="20" cy="59" rx="5" ry="12" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.2"/>
<ellipse cx="135" cy="59" rx="5" ry="12" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.2"/>
<ellipse cx="15" cy="59" rx="3.5" ry="8" fill="#6C3483"/>
<ellipse cx="140" cy="59" rx="3.5" ry="8" fill="#6C3483"/>

<!-- Ayakta duran figür -->
<!-- Baş -->
<ellipse cx="78" cy="28" rx="13" ry="15" fill="url(#skin_sq)"/>
<ellipse cx="78" cy="19" rx="12" ry="7" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="83" cy="26" rx="1.8" ry="1.5" fill="#1A0A00"/>
<!-- Boyun -->
<rect x="71" y="40" width="14" height="10" rx="5" fill="#B87030"/>
<!-- Gövde üst -->
<path d="M52 52 Q50 78 52 96 Q62 104 78 102 Q94 104 104 96 Q106 78 104 52 Q90 60 78 58 Q66 60 52 52Z" fill="url(#skin_sq)"/>
<ellipse cx="78" cy="72" rx="24" ry="18" fill="#A06030" opacity=".35"/>
<!-- Omuzlar -->
<ellipse cx="48" cy="56" rx="13" ry="10" fill="url(#skin_sq)"/>
<ellipse cx="108" cy="56" rx="13" ry="10" fill="url(#skin_sq)"/>
<!-- Kollar bar tutuyor -->
<path d="M50 54 L22 59" fill="none" stroke="url(#skin_sq)" stroke-width="10" stroke-linecap="round"/>
<path d="M106 54 L134 59" fill="none" stroke="url(#skin_sq)" stroke-width="10" stroke-linecap="round"/>
<!-- BACAKLAR — düz duruş -->
<!-- Kalça -->
<path d="M58 98 Q52 106 52 114 Q54 120 62 122 Q70 120 72 112 Q72 104 68 98Z" fill="url(#skin_sq)"/>
<path d="M98 98 Q104 106 104 114 Q102 120 94 122 Q86 120 84 112 Q84 104 88 98Z" fill="url(#skin_sq)"/>
<!-- QUAD SOL (düz, hafif görünür) -->
<path d="M54 112 Q50 126 50 142 Q50 158 56 168 Q64 174 72 168 Q78 156 78 140 Q78 124 74 112Z" fill="url(#quad_sq)" filter="url(#mg_sq)" opacity=".8"/>
<path d="M55 116 Q52 132 53 148 Q55 160 60 166" fill="none" stroke="#FF6666" stroke-width="1" opacity=".5"/>
<path d="M66 112 Q70 128 70 144 Q70 158 66 168" fill="none" stroke="#FF6666" stroke-width="1" opacity=".5"/>
<!-- Vastus medialis sol -->
<ellipse cx="63" cy="165" rx="7" ry="5" fill="#FF3333" opacity=".75" filter="url(#mg_sq)"/>
<!-- QUAD SAĞ -->
<path d="M102 112 Q106 126 106 142 Q106 158 100 168 Q92 174 84 168 Q78 156 78 140 Q78 124 82 112Z" fill="url(#quad_sq)" filter="url(#mg_sq)" opacity=".8"/>
<path d="M101 116 Q104 132 103 148 Q101 160 96 166" fill="none" stroke="#FF6666" stroke-width="1" opacity=".5"/>
<path d="M90 112 Q86 128 86 144 Q86 158 90 168" fill="none" stroke="#FF6666" stroke-width="1" opacity=".5"/>
<ellipse cx="93" cy="165" rx="7" ry="5" fill="#FF3333" opacity=".75" filter="url(#mg_sq)"/>
<!-- Diz kapakları -->
<ellipse cx="63" cy="170" rx="8" ry="6" fill="url(#skin_sq)" stroke="#7A4828" stroke-width=".8"/>
<ellipse cx="93" cy="170" rx="8" ry="6" fill="url(#skin_sq)" stroke="#7A4828" stroke-width=".8"/>
<!-- Baldırlar sol -->
<path d="M56 172 Q50 184 52 198 Q58 206 66 204 Q72 196 72 182 Q72 174 68 170Z" fill="url(#calf_sq)" opacity=".8" filter="url(#mg_sq)"/>
<!-- Baldırlar sağ -->
<path d="M100 172 Q106 184 104 198 Q98 206 90 204 Q84 196 84 182 Q84 174 88 170Z" fill="url(#calf_sq)" opacity=".8" filter="url(#mg_sq)"/>
<!-- Ayaklar -->
<ellipse cx="60" cy="207" rx="14" ry="5" fill="#3E1A08"/>
<ellipse cx="96" cy="207" rx="14" ry="5" fill="#3E1A08"/>

<!-- ══ ALT NOKTA SQUAT (sağ) ══ -->
<text x="265" y="12" text-anchor="middle" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ALT NOKTA (PARALELİ)</text>
<!-- Paralel çizgisi -->
<line x1="190" y1="162" x2="280" y2="162" stroke="#F4845F" stroke-width="1.5" stroke-dasharray="5,3" opacity=".8"/>
<text x="282" y="166" font-size="7" fill="#F4845F" font-family="sans-serif">↔ Paralel</text>

<!-- BAR 2 -->
<rect x="198" y="76" width="115" height="7" rx="3" fill="url(#bar_sq)"/>
<ellipse cx="198" cy="79" rx="5" ry="12" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.2"/>
<ellipse cx="313" cy="79" rx="5" ry="12" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.2"/>

<!-- Çömelmiş figür -->
<!-- Baş -->
<ellipse cx="256" cy="62" rx="13" ry="15" fill="url(#skin_sq)"/>
<ellipse cx="256" cy="53" rx="12" ry="7" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="261" cy="60" rx="1.8" ry="1.5" fill="#1A0A00"/>
<!-- Boyun -->
<rect x="249" y="74" width="14" height="10" rx="5" fill="#B87030"/>
<!-- Gövde (hafif öne eğik) -->
<path d="M232 80 Q228 100 232 116 Q242 124 256 122 Q270 124 280 116 Q284 100 280 80 Q266 88 256 86 Q246 88 232 80Z" fill="url(#skin_sq)"/>
<ellipse cx="256" cy="96" rx="24" ry="16" fill="#A06030" opacity=".35"/>
<!-- GLUTEUS — kasılmış (kırmızı) -->
<path d="M234 118 Q226 126 226 140 Q226 152 236 156 Q248 158 256 150 Q264 158 276 156 Q286 152 286 140 Q286 126 278 118 Q264 128 256 126 Q248 128 234 118Z" fill="url(#glute_sq)" filter="url(#mg_sq)"/>
<path d="M238 128 Q244 140 256 144 Q268 140 274 128" fill="none" stroke="#FF6666" stroke-width="1" opacity=".5"/>
<!-- Omuzlar -->
<ellipse cx="228" cy="82" rx="13" ry="10" fill="url(#skin_sq)"/>
<ellipse cx="284" cy="82" rx="13" ry="10" fill="url(#skin_sq)"/>
<!-- Kollar bar tutuyor -->
<path d="M230 82 L200 79" fill="none" stroke="url(#skin_sq)" stroke-width="10" stroke-linecap="round"/>
<path d="M282 82 L312 79" fill="none" stroke="url(#skin_sq)" stroke-width="10" stroke-linecap="round"/>
<!-- ÜÇGEN KOL — bükülü bacaklar -->
<!-- ÜST BACAK SOL (yatay) -->
<path d="M232 150 Q226 160 222 170 Q218 182 218 198" fill="none" stroke="url(#skin_sq)" stroke-width="17" stroke-linecap="round"/>
<!-- QUAD SOL kasılmış -->
<path d="M228 150 Q220 162 218 178 Q216 192 220 200" fill="none" stroke="#FF2222" stroke-width="12" stroke-linecap="round" opacity=".75"/>
<path d="M234 150 Q230 164 230 180" fill="none" stroke="#FF5555" stroke-width="1" opacity=".5"/>
<!-- ÜST BACAK SAĞ -->
<path d="M280 150 Q286 160 290 170 Q294 182 294 198" fill="none" stroke="url(#skin_sq)" stroke-width="17" stroke-linecap="round"/>
<!-- QUAD SAĞ kasılmış -->
<path d="M284 150 Q292 162 294 178 Q296 192 292 200" fill="none" stroke="#FF2222" stroke-width="12" stroke-linecap="round" opacity=".75"/>
<!-- ALT BACAK SOL -->
<path d="M218 198 Q216 208 216 215" fill="none" stroke="url(#skin_sq)" stroke-width="14" stroke-linecap="round"/>
<!-- ALT BACAK SAĞ -->
<path d="M294 198 Q296 208 296 215" fill="none" stroke="url(#skin_sq)" stroke-width="14" stroke-linecap="round"/>
<!-- Diz -->
<circle cx="222" cy="172" r="7" fill="#C07030"/>
<circle cx="290" cy="172" r="7" fill="#C07030"/>
<!-- Ayaklar -->
<ellipse cx="216" cy="216" rx="15" ry="5" fill="#3E1A08"/>
<ellipse cx="295" cy="216" rx="15" ry="5" fill="#3E1A08"/>

<!-- BÖLME -->
<line x1="170" y1="4" x2="170" y2="216" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>

<!-- LEJANT -->
<rect x="15" y="188" width="10" height="7" rx="2" fill="#CC0000"/>
<text x="29" y="194" font-size="7" fill="#ddd" font-family="sans-serif" font-weight="bold">Quadriceps (Ana)</text>
<rect x="15" y="199" width="10" height="7" rx="2" fill="#880000"/>
<text x="29" y="205" font-size="7" fill="#ddd" font-family="sans-serif">Gluteus Maximus (Ana)</text>
<rect x="170" y="188" width="10" height="7" rx="2" fill="#AA3300"/>
<text x="184" y="194" font-size="7" fill="#ddd" font-family="sans-serif">Hamstrings (Yardımcı)</text>
<rect x="170" y="199" width="10" height="7" rx="2" fill="#AA7700"/>
<text x="184" y="205" font-size="7" fill="#ddd" font-family="sans-serif">Baldır/Core (Stabilizatör)</text>
</svg>`,
  motionSVG: null
},

// ──────────────────────────────────────────────────────────
// LAT PULLDOWN
// ──────────────────────────────────────────────────────────
"Lat Pulldown": {
  anatomySVG: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_ld" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="lat_ld" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF4444"/><stop offset="50%" stop-color="#BB0000"/><stop offset="100%" stop-color="#550000"/></linearGradient>
  <linearGradient id="trap_ld" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF8822"/><stop offset="100%" stop-color="#AA3300"/></linearGradient>
  <linearGradient id="bic_ld" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9966FF"/><stop offset="100%" stop-color="#440088"/></linearGradient>
  <filter id="mg_ld"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<!-- ══ BAŞLANGIÇ — kollar uzatılmış (sol) ══ -->
<text x="75" y="12" text-anchor="middle" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">BAŞLANGIÇ</text>

<!-- MAKİNE -->
<rect x="30" y="14" width="95" height="10" rx="4" fill="#374151"/>
<line x1="76" y1="24" x2="76" y2="44" stroke="#6B7280" stroke-width="3"/>
<circle cx="42" cy="20" r="7" fill="#4B5563" stroke="#1F2937" stroke-width="1.2"/>
<circle cx="110" cy="20" r="7" fill="#4B5563" stroke="#1F2937" stroke-width="1.2"/>
<!-- Kablo + Bar -->
<line x1="42" y1="27" x2="34" y2="48" stroke="#94A3B8" stroke-width="2"/>
<line x1="110" y1="27" x2="118" y2="48" stroke="#94A3B8" stroke-width="2"/>
<rect x="28" y="46" width="102" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="28" cy="49" rx="4" ry="9" fill="#5B21B6"/>
<ellipse cx="130" cy="49" rx="4" ry="9" fill="#5B21B6"/>

<!-- Oturan figür — kollar tamamen uzatılmış -->
<!-- Baş -->
<ellipse cx="76" cy="76" rx="12" ry="14" fill="url(#skin_ld)"/>
<ellipse cx="76" cy="67" rx="11" ry="6" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="81" cy="74" rx="1.6" ry="1.4" fill="#1A0A00"/>
<!-- Boyun -->
<rect x="69" y="88" width="14" height="9" rx="4" fill="#B87030"/>
<!-- Gövde (ARKA GÖRÜNÜM) -->
<path d="M52 94 Q50 118 52 138 Q62 148 76 146 Q90 148 100 138 Q102 118 100 94 Q88 102 76 100 Q64 102 52 94Z" fill="url(#skin_ld)"/>
<!-- TRAPEZIUS — turuncu -->
<path d="M58 90 Q76 82 94 90 Q88 102 76 100 Q64 102 58 90Z" fill="url(#trap_ld)" opacity=".85" filter="url(#mg_ld)"/>
<!-- LAT SOL — kırmızı uzun -->
<path d="M54 104 Q40 118 36 138 Q34 152 42 160 Q52 166 62 158 Q68 144 68 126 Q68 112 62 104Z" fill="url(#lat_ld)" filter="url(#mg_ld)"/>
<path d="M52 108 Q42 126 42 146" fill="none" stroke="#FF6666" stroke-width=".9" opacity=".5"/>
<path d="M58 106 Q50 124 50 144" fill="none" stroke="#FF6666" stroke-width=".9" opacity=".5"/>
<!-- LAT SAĞ -->
<path d="M98 104 Q112 118 116 138 Q118 152 110 160 Q100 166 90 158 Q84 144 84 126 Q84 112 90 104Z" fill="url(#lat_ld)" filter="url(#mg_ld)"/>
<path d="M100 108 Q110 126 110 146" fill="none" stroke="#FF6666" stroke-width=".9" opacity=".5"/>
<path d="M94 106 Q102 124 102 144" fill="none" stroke="#FF6666" stroke-width=".9" opacity=".5"/>
<!-- Omurilik -->
<line x1="76" y1="100" x2="76" y2="142" stroke="#2A0A00" stroke-width="1.2" opacity=".25"/>
<!-- Kollar tamamen uzatılmış (bar tutuyor) -->
<path d="M58 96 Q46 72 34 49" fill="none" stroke="url(#skin_ld)" stroke-width="11" stroke-linecap="round"/>
<path d="M94 96 Q106 72 118 49" fill="none" stroke="url(#skin_ld)" stroke-width="11" stroke-linecap="round"/>
<!-- BİCEPS (uzatılmış, az görünür) -->
<path d="M50 92 Q38 76 34 56" fill="none" stroke="#6633AA" stroke-width="7" stroke-linecap="round" opacity=".5"/>
<path d="M102 92 Q114 76 118 56" fill="none" stroke="#6633AA" stroke-width="7" stroke-linecap="round" opacity=".5"/>
<!-- OTURMA YERİ -->
<rect x="48" y="160" width="56" height="10" rx="4" fill="#4B5563"/>
<rect x="56" y="170" width="10" height="22" rx="3" fill="#374151"/>
<rect x="86" y="170" width="10" height="22" rx="3" fill="#374151"/>
<!-- Bacaklar oturur -->
<path d="M54 164 Q46 168 40 172" fill="none" stroke="url(#skin_ld)" stroke-width="13" stroke-linecap="round"/>
<path d="M98 164 Q106 168 112 172" fill="none" stroke="url(#skin_ld)" stroke-width="13" stroke-linecap="round"/>

<!-- ══ ÇEKİŞ — bar göğüste (sağ) ══ -->
<text x="262" y="12" text-anchor="middle" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ÇEKİŞ — BAR GÖĞÜSTE</text>

<!-- MAKİNE 2 -->
<rect x="210" y="14" width="95" height="10" rx="4" fill="#374151"/>
<line x1="256" y1="24" x2="256" y2="44" stroke="#6B7280" stroke-width="3"/>
<circle cx="222" cy="20" r="7" fill="#4B5563" stroke="#1F2937" stroke-width="1.2"/>
<circle cx="290" cy="20" r="7" fill="#4B5563" stroke="#1F2937" stroke-width="1.2"/>
<!-- Kablo kısalmış -->
<line x1="222" y1="27" x2="224" y2="88" stroke="#94A3B8" stroke-width="2"/>
<line x1="290" y1="27" x2="288" y2="88" stroke="#94A3B8" stroke-width="2"/>
<rect x="218" y="86" width="76" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="218" cy="89" rx="4" ry="9" fill="#5B21B6"/>
<ellipse cx="294" cy="89" rx="4" ry="9" fill="#5B21B6"/>

<!-- Oturan figür — bar göğüste -->
<ellipse cx="256" cy="70" rx="12" ry="14" fill="url(#skin_ld)"/>
<ellipse cx="256" cy="61" rx="11" ry="6" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="261" cy="68" rx="1.6" ry="1.4" fill="#1A0A00"/>
<rect x="249" y="82" width="14" height="9" rx="4" fill="#B87030"/>
<!-- Gövde -->
<path d="M232 88 Q230 112 232 132 Q242 142 256 140 Q270 142 280 132 Q282 112 280 88 Q268 96 256 94 Q244 96 232 88Z" fill="url(#skin_ld)"/>
<!-- TRAPEZIUS kasılmış -->
<path d="M238 84 Q256 74 274 84 Q268 96 256 94 Q244 96 238 84Z" fill="#FF6600" filter="url(#mg_ld)" opacity=".9"/>
<!-- LAT SOL kasılmış — daha büyük, parlak -->
<path d="M234 98 Q218 112 214 132 Q212 148 220 158 Q230 165 242 155 Q248 140 248 122 Q248 108 242 98Z" fill="#FF1111" filter="url(#mg_ld)"/>
<path d="M230 104 Q220 122 220 142" fill="none" stroke="#FF9999" stroke-width="1" opacity=".6"/>
<path d="M236 102 Q228 120 228 140" fill="none" stroke="#FF9999" stroke-width="1" opacity=".6"/>
<!-- LAT SAĞ kasılmış -->
<path d="M278 98 Q294 112 298 132 Q300 148 292 158 Q282 165 270 155 Q264 140 264 122 Q264 108 270 98Z" fill="#FF1111" filter="url(#mg_ld)"/>
<path d="M282 104 Q292 122 292 142" fill="none" stroke="#FF9999" stroke-width="1" opacity=".6"/>
<path d="M276 102 Q284 120 284 140" fill="none" stroke="#FF9999" stroke-width="1" opacity=".6"/>
<line x1="256" y1="94" x2="256" y2="136" stroke="#2A0A00" stroke-width="1.2" opacity=".25"/>
<!-- Kollar çekilmiş — dirsekler aşağıda -->
<path d="M238 94 Q228 92 220 90" fill="none" stroke="url(#skin_ld)" stroke-width="11" stroke-linecap="round"/>
<path d="M274 94 Q284 92 292 90" fill="none" stroke="url(#skin_ld)" stroke-width="11" stroke-linecap="round"/>
<!-- Ön kol -->
<path d="M220 90 Q222 88 224 88" fill="none" stroke="#A07040" stroke-width="9" stroke-linecap="round"/>
<path d="M292 90 Q290 88 288 88" fill="none" stroke="#A07040" stroke-width="9" stroke-linecap="round"/>
<!-- BİCEPS kasılmış -->
<path d="M238 94 Q230 88 224 88" fill="none" stroke="#7744CC" stroke-width="9" stroke-linecap="round" opacity=".8"/>
<path d="M274 94 Q282 88 288 88" fill="none" stroke="#7744CC" stroke-width="9" stroke-linecap="round" opacity=".8"/>
<!-- OTURMA YERİ 2 -->
<rect x="228" y="154" width="56" height="10" rx="4" fill="#4B5563"/>
<rect x="236" y="164" width="10" height="22" rx="3" fill="#374151"/>
<rect x="266" y="164" width="10" height="22" rx="3" fill="#374151"/>
<path d="M234 158 Q226 162 220 166" fill="none" stroke="url(#skin_ld)" stroke-width="13" stroke-linecap="round"/>
<path d="M278 158 Q286 162 292 166" fill="none" stroke="url(#skin_ld)" stroke-width="13" stroke-linecap="round"/>

<!-- BÖLME -->
<line x1="170" y1="4" x2="170" y2="206" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>

<!-- LEJANT -->
<rect x="15" y="182" width="10" height="7" rx="2" fill="#BB0000"/>
<text x="29" y="188" font-size="7" fill="#ddd" font-family="sans-serif" font-weight="bold">Latissimus Dorsi (Ana)</text>
<rect x="15" y="194" width="10" height="7" rx="2" fill="#AA3300"/>
<text x="29" y="200" font-size="7" fill="#ddd" font-family="sans-serif">Trapezius + Arka Deltoid</text>
<rect x="175" y="182" width="10" height="7" rx="2" fill="#440088"/>
<text x="189" y="188" font-size="7" fill="#ddd" font-family="sans-serif">Biceps Brachii (Yardımcı)</text>
<rect x="175" y="194" width="10" height="7" rx="2" fill="#333"/>
<text x="189" y="200" font-size="7" fill="#ddd" font-family="sans-serif">= Daha parlak → kasılmış</text>
</svg>`,
  motionSVG: null
},

// ──────────────────────────────────────────────────────────
// SHOULDER PRESS
// ──────────────────────────────────────────────────────────
"Shoulder Press": {
  anatomySVG: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_sp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="delt_sp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF5500"/><stop offset="55%" stop-color="#CC2200"/><stop offset="100%" stop-color="#770000"/></linearGradient>
  <linearGradient id="med_sp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF3333"/><stop offset="100%" stop-color="#880000"/></linearGradient>
  <linearGradient id="trap_sp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9966FF"/><stop offset="100%" stop-color="#440088"/></linearGradient>
  <linearGradient id="tri_sp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700"/><stop offset="100%" stop-color="#AA6600"/></linearGradient>
  <filter id="mg_sp"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<!-- ══ BAŞLANGIÇ — kulak hizası (sol) ══ -->
<text x="75" y="12" text-anchor="middle" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">BAŞLANGIÇ (KULAK HİZASI)</text>

<!-- Sandalye -->
<rect x="42" y="152" width="66" height="10" rx="4" fill="#4B5563"/>
<rect x="50" y="162" width="10" height="28" rx="3" fill="#374151"/>
<rect x="90" y="162" width="10" height="28" rx="3" fill="#374151"/>
<rect x="72" y="120" width="6" height="34" rx="3" fill="#374151"/>

<!-- Oturan figür başlangıç -->
<ellipse cx="76" cy="54" rx="12" ry="14" fill="url(#skin_sp)"/>
<ellipse cx="76" cy="45" rx="11" ry="6" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="81" cy="52" rx="1.6" ry="1.4" fill="#1A0A00"/>
<!-- Boyun -->
<rect x="69" y="66" width="14" height="9" rx="4" fill="#B87030"/>
<!-- TRAPEZ boyun -->
<path d="M54 72 Q76 62 98 72 Q92 82 76 80 Q60 82 54 72Z" fill="url(#trap_sp)" opacity=".85" filter="url(#mg_sp)"/>
<!-- Gövde -->
<path d="M54 78 Q52 106 54 130 Q64 140 76 138 Q88 140 98 130 Q100 106 98 78 Q86 86 76 84 Q66 86 54 78Z" fill="url(#skin_sp)"/>
<ellipse cx="76" cy="100" rx="20" ry="16" fill="#A06030" opacity=".3"/>
<!-- Karın -->
<rect x="70" y="100" width="6" height="7" rx="2" fill="#0055AA" opacity=".45"/>
<rect x="78" y="100" width="6" height="7" rx="2" fill="#0055AA" opacity=".45"/>
<!-- ÖN DELTOID SOL — başlangıç (dumbbell kulak hizasında) -->
<path d="M52 72 Q36 66 28 52 Q24 40 32 32 Q42 26 50 36 Q54 48 52 62Z" fill="url(#delt_sp)" filter="url(#mg_sp)"/>
<path d="M50 38 Q40 52 38 64" fill="none" stroke="#FF7744" stroke-width=".9" opacity=".6"/>
<path d="M52 46 Q44 58 42 68" fill="none" stroke="#FF7744" stroke-width=".9" opacity=".6"/>
<!-- ÖN DELTOID SAĞ -->
<path d="M100 72 Q116 66 124 52 Q128 40 120 32 Q110 26 102 36 Q98 48 100 62Z" fill="url(#delt_sp)" filter="url(#mg_sp)"/>
<path d="M102 38 Q112 52 114 64" fill="none" stroke="#FF7744" stroke-width=".9" opacity=".6"/>
<!-- YAN DELTOID SOL -->
<path d="M48 74 Q32 84 28 104 Q26 120 36 130 Q48 136 58 126 Q62 112 60 94 Q58 80 52 74Z" fill="url(#med_sp)" filter="url(#mg_sp)"/>
<!-- YAN DELTOID SAĞ -->
<path d="M104 74 Q120 84 124 104 Q126 120 116 130 Q104 136 94 126 Q90 112 92 94 Q94 80 100 74Z" fill="url(#med_sp)" filter="url(#mg_sp)"/>
<!-- TRİCEPS SOL -->
<path d="M30 90 Q18 104 18 122 Q18 138 28 146 Q40 150 50 140 Q54 126 52 110 Q50 96 40 88Z" fill="url(#tri_sp)" opacity=".8" filter="url(#mg_sp)"/>
<!-- TRİCEPS SAĞ -->
<path d="M122 90 Q134 104 134 122 Q134 138 124 146 Q112 150 102 140 Q98 126 100 110 Q102 96 112 88Z" fill="url(#tri_sp)" opacity=".8" filter="url(#mg_sp)"/>
<!-- Kollar dirsek 90° — dumbbell kulak hizasında -->
<path d="M52 80 L28 84" fill="none" stroke="url(#skin_sp)" stroke-width="11" stroke-linecap="round"/>
<path d="M100 80 L124 84" fill="none" stroke="url(#skin_sp)" stroke-width="11" stroke-linecap="round"/>
<path d="M28 84 L26 70" fill="none" stroke="url(#skin_sp)" stroke-width="10" stroke-linecap="round"/>
<path d="M124 84 L126 70" fill="none" stroke="url(#skin_sp)" stroke-width="10" stroke-linecap="round"/>
<!-- DUMBBELL SOL (kulak hizasında) -->
<rect x="16" y="64" width="14" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="16" cy="67" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<ellipse cx="30" cy="67" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<!-- DUMBBELL SAĞ -->
<rect x="122" y="64" width="14" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="122" cy="67" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<ellipse cx="136" cy="67" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<!-- Bacaklar oturur -->
<path d="M58 138 Q50 148 44 162" fill="none" stroke="url(#skin_sp)" stroke-width="14" stroke-linecap="round"/>
<path d="M94 138 Q102 148 108 162" fill="none" stroke="url(#skin_sp)" stroke-width="14" stroke-linecap="round"/>

<!-- ══ TEPE NOKTA — dumbbell yukarıda (sağ) ══ -->
<text x="258" y="12" text-anchor="middle" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">TEPE NOKTA (YUKARI)</text>

<!-- Sandalye 2 -->
<rect x="220" y="152" width="66" height="10" rx="4" fill="#4B5563"/>
<rect x="228" y="162" width="10" height="28" rx="3" fill="#374151"/>
<rect x="268" y="162" width="10" height="28" rx="3" fill="#374151"/>
<rect x="250" y="120" width="6" height="34" rx="3" fill="#374151"/>

<!-- Figür tepe noktada -->
<ellipse cx="254" cy="60" rx="12" ry="14" fill="url(#skin_sp)"/>
<ellipse cx="254" cy="51" rx="11" ry="6" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="259" cy="58" rx="1.6" ry="1.4" fill="#1A0A00"/>
<rect x="247" y="72" width="14" height="9" rx="4" fill="#B87030"/>
<!-- TRAPEZ kasılmış -->
<path d="M232 76 Q254 64 276 76 Q270 88 254 86 Q238 88 232 76Z" fill="#AA33FF" filter="url(#mg_sp)" opacity=".9"/>
<!-- Gövde -->
<path d="M232 82 Q230 110 232 134 Q242 144 254 142 Q266 144 276 134 Q278 110 276 82 Q264 90 254 88 Q244 90 232 82Z" fill="url(#skin_sp)"/>
<!-- ÖN DELTOID kasılmış — daha parlak -->
<path d="M230 76 Q214 68 206 54 Q202 42 210 34 Q220 28 228 38 Q232 50 230 66Z" fill="#FF2200" filter="url(#mg_sp)"/>
<path d="M228 40 Q218 54 216 66" fill="none" stroke="#FF9977" stroke-width="1" opacity=".7"/>
<path d="M230 48 Q222 60 220 70" fill="none" stroke="#FF9977" stroke-width="1" opacity=".7"/>
<!-- ÖN DELTOID SAĞ kasılmış -->
<path d="M278 76 Q294 68 302 54 Q306 42 298 34 Q288 28 280 38 Q276 50 278 66Z" fill="#FF2200" filter="url(#mg_sp)"/>
<!-- YAN DELTOID kasılmış -->
<path d="M226 78 Q210 88 206 108 Q204 124 214 134 Q226 140 236 130 Q240 116 238 98 Q236 84 230 78Z" fill="#EE1111" filter="url(#mg_sp)"/>
<path d="M278 78 Q294 88 298 108 Q300 124 290 134 Q278 140 268 130 Q264 116 266 98 Q268 84 274 78Z" fill="#EE1111" filter="url(#mg_sp)"/>
<!-- TRİCEPS kasılmış (kollar uzatılmış) -->
<path d="M208 88 Q196 100 194 118 Q192 134 202 142 Q214 148 224 138 Q228 124 226 106 Q224 92 216 86Z" fill="#FFB700" filter="url(#mg_sp)"/>
<path d="M300 88 Q312 100 314 118 Q316 134 306 142 Q294 148 284 138 Q280 124 282 106 Q284 92 292 86Z" fill="#FFB700" filter="url(#mg_sp)"/>
<!-- Kollar tamamen uzatılmış yukarı -->
<path d="M230 84 L206 86" fill="none" stroke="url(#skin_sp)" stroke-width="11" stroke-linecap="round"/>
<path d="M278 84 L302 86" fill="none" stroke="url(#skin_sp)" stroke-width="11" stroke-linecap="round"/>
<path d="M206 86 L200 48" fill="none" stroke="url(#skin_sp)" stroke-width="10" stroke-linecap="round"/>
<path d="M302 86 L308 48" fill="none" stroke="url(#skin_sp)" stroke-width="10" stroke-linecap="round"/>
<!-- DUMBBELL SOL (yukarıda) -->
<rect x="192" y="42" width="14" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="192" cy="45" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<ellipse cx="206" cy="45" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<!-- DUMBBELL SAĞ -->
<rect x="300" y="42" width="14" height="6" rx="3" fill="#B0B0B0"/>
<ellipse cx="300" cy="45" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<ellipse cx="314" cy="45" rx="4" ry="8" fill="#CC3333" stroke="#AA1111" stroke-width="1"/>
<!-- Bacaklar -->
<path d="M236 142 Q228 152 222 166" fill="none" stroke="url(#skin_sp)" stroke-width="14" stroke-linecap="round"/>
<path d="M272 142 Q280 152 286 166" fill="none" stroke="url(#skin_sp)" stroke-width="14" stroke-linecap="round"/>

<!-- BÖLME -->
<line x1="170" y1="4" x2="170" y2="206" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>

<!-- LEJANT -->
<rect x="15" y="182" width="10" height="7" rx="2" fill="#CC2200"/>
<text x="29" y="188" font-size="7" fill="#ddd" font-family="sans-serif" font-weight="bold">Ön + Yan Deltoid (Ana)</text>
<rect x="15" y="194" width="10" height="7" rx="2" fill="#AA6600"/>
<text x="29" y="200" font-size="7" fill="#ddd" font-family="sans-serif">Triceps (Yardımcı)</text>
<rect x="175" y="182" width="10" height="7" rx="2" fill="#440088"/>
<text x="189" y="188" font-size="7" fill="#ddd" font-family="sans-serif">Trapezius (Yardımcı)</text>
<rect x="175" y="194" width="10" height="7" rx="2" fill="#333"/>
<text x="189" y="200" font-size="7" fill="#ddd" font-family="sans-serif">= Parlak → kasılmış kas</text>
</svg>`,
  motionSVG: null
},

// ──────────────────────────────────────────────────────────
// DEFAULT PUSH
// ──────────────────────────────────────────────────────────
"default_push": {
  anatomySVG: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_dp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="pec_dp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF4444"/><stop offset="100%" stop-color="#880000"/></linearGradient>
  <linearGradient id="delt_dp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF8800"/><stop offset="100%" stop-color="#AA3300"/></linearGradient>
  <filter id="mg_dp2"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<!-- ÖN GÖRÜNÜM — genel push kas haritası -->
<text x="85" y="14" text-anchor="middle" font-size="9" fill="#52B788" font-family="sans-serif" font-weight="bold">ÖN GÖRÜNÜM — KAS HARİTASI</text>
<text x="265" y="14" text-anchor="middle" font-size="9" fill="#F4845F" font-family="sans-serif" font-weight="bold">HAREKET AÇISI</text>
<line x1="170" y1="4" x2="170" y2="196" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
<!-- Figür ön -->
<path d="M52 48 Q50 76 52 100 Q62 110 85 108 Q108 110 118 100 Q120 76 118 48 Q104 56 85 54 Q66 56 52 48Z" fill="url(#skin_dp2)"/>
<path d="M58 44 Q85 36 112 44 Q108 56 85 54 Q62 56 58 44Z" fill="#B07030" opacity=".5"/>
<path d="M52 48 Q38 52 32 64 Q28 76 36 84 Q46 88 56 80 Q58 68 56 56Z" fill="url(#delt_dp2)" filter="url(#mg_dp2)"/>
<path d="M118 48 Q132 52 136 64 Q140 76 132 84 Q122 88 112 80 Q110 68 112 56Z" fill="url(#delt_dp2)" filter="url(#mg_dp2)"/>
<path d="M56 50 Q46 52 42 62 Q38 72 46 78 Q56 82 64 74 Q68 62 66 52 Q62 50 56 50Z" fill="#FF4400" filter="url(#mg_dp2)"/>
<path d="M114 50 Q124 52 128 62 Q132 72 124 78 Q114 82 106 74 Q102 62 104 52 Q108 50 114 50Z" fill="#FF4400" filter="url(#mg_dp2)"/>
<path d="M58 52 Q48 54 44 64 Q40 74 48 80 Q58 84 68 76 Q72 64 70 54 Q66 52 62 52 Q60 50 58 52Z" fill="url(#pec_dp2)" filter="url(#mg_dp2)"/>
<path d="M112 52 Q122 54 126 64 Q130 74 122 80 Q112 84 102 76 Q98 64 100 54 Q104 52 108 52 Q110 50 112 52Z" fill="url(#pec_dp2)" filter="url(#mg_dp2)"/>
<path d="M30 66 Q20 78 20 96 Q20 110 30 118 Q42 122 52 112 Q56 98 54 82 Q52 68 44 64Z" fill="#FFCC00" opacity=".8" filter="url(#mg_dp2)"/>
<path d="M140 66 Q150 78 150 96 Q150 110 140 118 Q128 122 118 112 Q114 98 116 82 Q118 68 126 64Z" fill="#FFCC00" opacity=".8" filter="url(#mg_dp2)"/>
<line x1="85" y1="54" x2="85" y2="104" stroke="#2A0A00" stroke-width="1.2" opacity=".25"/>
<ellipse cx="85" cy="30" rx="18" ry="20" fill="url(#skin_dp2)"/>
<ellipse cx="85" cy="21" rx="17" ry="9" fill="#2C1A0E" opacity=".7"/>
<ellipse cx="80" cy="28" rx="2" ry="1.8" fill="#1A0A00"/>
<ellipse cx="90" cy="28" rx="2" ry="1.8" fill="#1A0A00"/>
<path d="M55 104 Q50 120 52 140 Q60 148 85 146 Q110 148 118 140 Q120 120 115 104 Q100 112 85 110 Q70 112 55 104Z" fill="url(#skin_dp2)"/>
<rect x="78" y="116" width="7" height="7" rx="2" fill="#0055AA" opacity=".5"/>
<rect x="87" y="116" width="7" height="7" rx="2" fill="#0055AA" opacity=".5"/>
<!-- Sağ taraf — hareket açısı diyagramı -->
<text x="225" y="40" text-anchor="middle" font-size="8" fill="#9CA3AF" font-family="sans-serif">Dirsek Açısı: 45-75°</text>
<path d="M225 55 Q225 95 225 130" fill="none" stroke="#374151" stroke-width="1.5"/>
<path d="M225 90 Q260 90 270 80" fill="none" stroke="#52B788" stroke-width="2" stroke-dasharray="4,2"/>
<path d="M225 90 Q260 90 270 100" fill="none" stroke="#52B788" stroke-width="2" stroke-dasharray="4,2"/>
<path d="M235 82 Q248 90 235 98" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="3,2"/>
<text x="272" y="84" font-size="7" fill="#52B788" font-family="sans-serif">45°</text>
<text x="272" y="104" font-size="7" fill="#52B788" font-family="sans-serif">75°</text>
<text x="220" y="145" text-anchor="middle" font-size="7" fill="#9CA3AF" font-family="sans-serif">Doğru açı = maksimum</text>
<text x="220" y="155" text-anchor="middle" font-size="7" fill="#9CA3AF" font-family="sans-serif">göğüs aktivasyonu</text>
<rect x="15" y="168" width="10" height="7" rx="2" fill="#880000"/><text x="29" y="174" font-size="7.5" fill="#ddd" font-family="sans-serif" font-weight="bold">Pectoralis Major (Ana)</text>
<rect x="15" y="180" width="10" height="7" rx="2" fill="#AA3300"/><text x="29" y="186" font-size="7.5" fill="#ddd" font-family="sans-serif">Deltoid (Yardımcı)</text>
<rect x="175" y="168" width="10" height="7" rx="2" fill="#AA8800"/><text x="189" y="174" font-size="7.5" fill="#ddd" font-family="sans-serif">Triceps (Yardımcı)</text>
</svg>`,
  motionSVG: null
},

// ──────────────────────────────────────────────────────────
// DEFAULT PULL
// ──────────────────────────────────────────────────────────
"default_pull": {
  anatomySVG: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="skin_dpl3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C8814A"/><stop offset="100%" stop-color="#7A4828"/></linearGradient>
  <linearGradient id="lat_dpl3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF3333"/><stop offset="55%" stop-color="#AA0000"/><stop offset="100%" stop-color="#550000"/></linearGradient>
  <filter id="mg_dpl3"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<text x="85" y="14" text-anchor="middle" font-size="9" fill="#4A90D9" font-family="sans-serif" font-weight="bold">ARKA GÖRÜNÜM — SIRT KAS HARİTASI</text>
<line x1="170" y1="4" x2="170" y2="196" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
<!-- Arka gövde -->
<path d="M52 48 Q50 76 52 105 Q62 115 85 113 Q108 115 118 105 Q120 76 118 48 Q104 56 85 54 Q66 56 52 48Z" fill="url(#skin_dpl3)"/>
<!-- Trapez -->
<path d="M58 44 Q85 34 112 44 Q108 56 85 54 Q62 56 58 44Z" fill="#FF7722" opacity=".8" filter="url(#mg_dpl3)"/>
<!-- Lat sol -->
<path d="M54 62 Q38 76 34 100 Q30 118 40 128 Q52 136 64 126 Q70 110 70 92 Q70 74 64 62Z" fill="url(#lat_dpl3)" filter="url(#mg_dpl3)"/>
<path d="M52 68 Q40 86 38 106" fill="none" stroke="#FF6666" stroke-width="1" opacity=".55"/>
<path d="M58 66 Q48 84 46 104" fill="none" stroke="#FF6666" stroke-width="1" opacity=".55"/>
<!-- Lat sağ -->
<path d="M116 62 Q132 76 136 100 Q140 118 130 128 Q118 136 106 126 Q100 110 100 92 Q100 74 106 62Z" fill="url(#lat_dpl3)" filter="url(#mg_dpl3)"/>
<path d="M118 68 Q130 86 132 106" fill="none" stroke="#FF6666" stroke-width="1" opacity=".55"/>
<path d="M112 66 Q122 84 124 104" fill="none" stroke="#FF6666" stroke-width="1" opacity=".55"/>
<!-- Rhomboids -->
<path d="M68 58 Q76 54 85 56 Q94 54 102 58 Q98 72 85 74 Q72 72 68 58Z" fill="#33AA44" opacity=".65" filter="url(#mg_dpl3)"/>
<!-- Omurilik -->
<line x1="85" y1="54" x2="85" y2="108" stroke="#2A0A00" stroke-width="1.5" opacity=".25"/>
<!-- Arka deltoid -->
<ellipse cx="46" cy="56" rx="14" ry="10" fill="#FF7722" opacity=".7" transform="rotate(-10,46,56)" filter="url(#mg_dpl3)"/>
<ellipse cx="124" cy="56" rx="14" ry="10" fill="#FF7722" opacity=".7" transform="rotate(10,124,56)" filter="url(#mg_dpl3)"/>
<!-- Biceps -->
<path d="M34 60 Q22 72 20 90 Q18 106 28 114 Q40 118 50 108 Q54 92 52 76 Q50 62 42 58Z" fill="#7744CC" opacity=".75" filter="url(#mg_dpl3)"/>
<path d="M136 60 Q148 72 150 90 Q152 106 142 114 Q130 118 120 108 Q116 92 118 76 Q120 62 128 58Z" fill="#7744CC" opacity=".75" filter="url(#mg_dpl3)"/>
<ellipse cx="85" cy="30" rx="18" ry="20" fill="url(#skin_dpl3)"/>
<ellipse cx="85" cy="21" rx="17" ry="9" fill="#2C1A0E" opacity=".8"/>
<!-- Sağ taraf — kürek kemiği pozisyonu -->
<text x="255" y="36" text-anchor="middle" font-size="8" fill="#9CA3AF" font-family="sans-serif">Kürek Kemiği Hareketi</text>
<ellipse cx="230" cy="80" rx="16" ry="22" fill="none" stroke="#FF7722" stroke-width="2" stroke-dasharray="4,2"/>
<ellipse cx="280" cy="80" rx="16" ry="22" fill="none" stroke="#FF7722" stroke-width="2" stroke-dasharray="4,2"/>
<path d="M246 80 L264 80" fill="none" stroke="#52B788" stroke-width="2"/>
<text x="255" y="94" text-anchor="middle" font-size="7" fill="#52B788" font-family="sans-serif">Birbirine yaklaştır</text>
<path d="M230 106 L230 130 Q255 140 280 130 L280 106" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/>
<text x="255" y="148" text-anchor="middle" font-size="7" fill="#9CA3AF" font-family="sans-serif">Omuz bıçaklarını sık</text>
<rect x="15" y="168" width="10" height="7" rx="2" fill="#AA0000"/><text x="29" y="174" font-size="7.5" fill="#ddd" font-family="sans-serif" font-weight="bold">Latissimus Dorsi (Ana)</text>
<rect x="15" y="180" width="10" height="7" rx="2" fill="#FF7722"/><text x="29" y="186" font-size="7.5" fill="#ddd" font-family="sans-serif">Trapez + Arka Deltoid</text>
<rect x="175" y="168" width="10" height="7" rx="2" fill="#550088"/><text x="189" y="174" font-size="7.5" fill="#ddd" font-family="sans-serif">Biceps (Yardımcı)</text>
<rect x="175" y="180" width="10" height="7" rx="2" fill="#225500"/><text x="189" y="186" font-size="7.5" fill="#ddd" font-family="sans-serif">Rhomboids (Stabilizatör)</text>
</svg>`,
  motionSVG: null
}

};

// ──────────────────────────────────────────────────────────
// buildExDetailHTML — sadece statik görsel + faz bilgileri
// ──────────────────────────────────────────────────────────
function buildExDetailHTML(exName, type) {
  const d = (typeof EX_DETAIL !== 'undefined') ? EX_DETAIL[exName] : null;
  const m = MUSCLE_SVG[exName] || MUSCLE_SVG['default_' + type] || MUSCLE_SVG['default_push'];
  const isPush = type === 'push';
  const accent = isPush ? '#52B788' : '#4A90D9';
  const bg = isPush ? '#F0FAF3' : '#EFF6FF';

  const mediaHTML = `
    <div style="background:#0F172A;border-radius:12px;padding:10px;margin-bottom:10px">
      <div style="font-size:9px;font-weight:700;color:#6B7280;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:6px">
        KAS HARİTASI + HAREKETİN BAŞLANGIÇ & BİTİŞ POZİSYONU
      </div>
      <div style="width:100%;overflow:hidden">${m.anatomySVG}</div>
    </div>`;

  if (!d) return mediaHTML + `<p style="color:#6B7280;font-size:12px;text-align:center;padding:8px">Detaylı bilgi yakında eklenecek.</p>`;

  const phasesHTML = d.phases.map((p, i) => `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:8px;border:1.5px solid #E5E7EB">
      <div style="background:${p.color};padding:8px 12px;display:flex;align-items:center;justify-content:space-between">
        <span style="color:#fff;font-size:12px;font-weight:800">Faz ${i+1}: ${p.name}</span>
        <button onclick="event.stopPropagation();speak('Faz ${i+1}. ${p.name}. ${p.desc.replace(/['"]/g,'').slice(0,120)} İpucu: ${p.tip.replace(/[🎯💪🔑⚠️'"]/g,'').slice(0,80)}');this.textContent=this.textContent==='🔊'?'⏹':'🔊'"
          style="background:rgba(255,255,255,.25);border:none;color:#fff;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer">🔊</button>
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
