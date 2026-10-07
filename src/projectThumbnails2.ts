// Part 2 of High-Resolution SVG Data URI thumbnails matching the remaining 6 uploaded project banners

const toDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

export const THUMB_LAHORE_EXPLORER = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg7" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#030D26"/>
      <stop offset="55%" stop-color="#0A1D4E"/>
      <stop offset="100%" stop-color="#2E1B3B"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg7)"/>
  <!-- Minar-e-Pakistan Skyline Silhouette Right -->
  <g transform="translate(880, 35)" fill="#F59E0B" opacity="0.85">
    <polygon points="105,0 115,0 128,220 92,220"/>
    <polygon points="75,220 145,220 165,260 55,260"/>
    <rect x="40" y="260" width="140" height="16" rx="4"/>
  </g>
  <!-- Title -->
  <g transform="translate(60, 110)" font-family="sans-serif">
    <text x="0" y="0" fill="#FFFFFF" font-weight="900" font-size="68">LAHORE CITY</text>
    <text x="0" y="82" fill="#FBBF24" font-weight="900" font-size="82">EXPLORER</text>
    <text x="0" y="138" fill="#FFFFFF" font-weight="700" font-size="34">Python  •  Pandas  •  Folium</text>
  </g>
  <!-- Code Card Bottom Left -->
  <g transform="translate(35, 395)">
    <rect width="380" height="235" rx="14" fill="#06122E" stroke="#1E3A8A" stroke-width="2"/>
    <circle cx="22" cy="20" r="5" fill="#EF4444"/><circle cx="38" cy="20" r="5" fill="#F59E0B"/><circle cx="54" cy="20" r="5" fill="#10B981"/>
    <g transform="translate(22, 50)" font-family="monospace" font-size="13" fill="#E2E8F0">
      <text x="0" y="0"><tspan fill="#38BDF8">import</tspan> pandas <tspan fill="#38BDF8">as</tspan> pd</text>
      <text x="0" y="22">df = pd.read_csv(<tspan fill="#FACC15">'lahore_locations.csv'</tspan>)</text>
      <text x="0" y="55" fill="#93C5FD" font-weight="bold">name               category    lat       lon</text>
      <text x="0" y="80">Minar-e-Pakistan   Historical  31.5925   74.3095</text>
      <text x="0" y="102">Badshahi Mosque    Historical  31.5880   74.3107</text>
      <text x="0" y="124">Lahore Fort        Historical  31.5882   74.3159</text>
      <text x="0" y="146">Jinnah Garden      Park        31.5546   74.3308</text>
    </g>
  </g>
  <!-- Map Laptop Center -->
  <g transform="translate(435, 300)">
    <rect width="465" height="335" rx="18" fill="#0B1730" stroke="#475569" stroke-width="3"/>
    <text x="25" y="34" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">Lahore City Explorer</text>
    <rect x="16" y="48" width="433" height="268" rx="8" fill="#E2E8F0"/>
    <!-- Simulated Folium Map -->
    <path d="M16,180 Q150,120 260,150 T449,90" fill="none" stroke="#38BDF8" stroke-width="14" opacity="0.6"/>
    <circle cx="180" cy="140" r="10" fill="#EF4444"/><circle cx="240" cy="190" r="10" fill="#10B981"/>
    <circle cx="290" cy="155" r="10" fill="#3B82F6"/><circle cx="210" cy="235" r="10" fill="#F59E0B"/>
    <text x="215" y="180" fill="#0F172A" font-family="sans-serif" font-weight="900" font-size="22">Lahore</text>
    <rect x="305" y="60" width="132" height="125" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="318" y="82" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold">☑ Historical Places</text>
    <text x="318" y="104" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold">☑ Parks</text>
    <text x="318" y="126" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold">☑ Hospitals</text>
    <text x="318" y="148" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold">☑ Universities</text>
    <text x="318" y="170" fill="#0F172A" font-family="sans-serif" font-size="11" font-weight="bold">☑ Markets</text>
  </g>
  <!-- Right Feature Pills -->
  <g transform="translate(925, 380)" font-family="sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">
    <rect x="0" y="0" width="245" height="72" rx="22" fill="#081C3E" stroke="#0284C7" stroke-width="2"/>
    <circle cx="42" cy="36" r="22" fill="#0284C7"/><text x="82" y="43">Data Processing</text>
    <rect x="0" y="90" width="245" height="72" rx="22" fill="#07262A" stroke="#10B981" stroke-width="2"/>
    <circle cx="42" cy="126" r="22" fill="#10B981"/><text x="82" y="133">Interactive Maps</text>
    <rect x="0" y="180" width="245" height="72" rx="22" fill="#1D1238" stroke="#8B5CF6" stroke-width="2"/>
    <circle cx="42" cy="216" r="22" fill="#8B5CF6"/><text x="82" y="213" font-size="18">Geospatial</text><text x="82" y="235" font-size="18">Visualization</text>
  </g>
</svg>
`);

export const THUMB_LOGIN_PAGE = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg8" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071022"/>
      <stop offset="100%" stop-color="#0F1E3A"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg8)"/>
  <polygon points="750,800 1200,220 1200,320 830,800" fill="#FACC15"/>
  <!-- Left Header -->
  <g transform="translate(55, 65)" font-family="sans-serif">
    <rect x="0" y="25" width="84" height="70" rx="14" fill="#FACC15"/>
    <path d="M22,25 V10 A20,20 0 0,1 62,10 V25" fill="none" stroke="#FACC15" stroke-width="10"/>
    <text x="115" y="42" fill="#FFFFFF" font-weight="900" font-size="48">Responsive</text>
    <text x="115" y="102" fill="#FACC15" font-weight="900" font-size="54">Login Page</text>
    <text x="0" y="160" fill="#FFFFFF" font-weight="700" font-size="28">Modern • Clean • User Friendly</text>
  </g>
  <!-- Checklist -->
  <g transform="translate(55, 275)" font-family="sans-serif" font-size="25" font-weight="600" fill="#FFFFFF">
    <circle cx="18" cy="12" r="15" fill="#FACC15"/><text x="12" y="19" fill="#0F172A" font-size="18" font-weight="bold">✓</text><text x="50" y="20">Responsive Design</text>
    <circle cx="18" cy="65" r="15" fill="#FACC15"/><text x="12" y="72" fill="#0F172A" font-size="18" font-weight="bold">✓</text><text x="50" y="73">Clean &amp; Modern UI</text>
    <circle cx="18" cy="118" r="15" fill="#FACC15"/><text x="12" y="125" fill="#0F172A" font-size="18" font-weight="bold">✓</text><text x="50" y="126">Secure Login Form</text>
    <circle cx="18" cy="171" r="15" fill="#FACC15"/><text x="12" y="178" fill="#0F172A" font-size="18" font-weight="bold">✓</text><text x="50" y="179">Cross-Device Compatible</text>
    <circle cx="18" cy="224" r="15" fill="#FACC15"/><text x="12" y="231" fill="#0F172A" font-size="18" font-weight="bold">✓</text><text x="50" y="232">Smooth User Experience</text>
  </g>
  <!-- Bottom Icons -->
  <g transform="translate(55, 585)" font-family="sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">
    <rect x="0" y="0" width="85" height="85" rx="18" fill="#EA580C"/><text x="42" y="55" font-size="36">5</text><text x="42" y="118">HTML5</text>
    <rect x="120" y="0" width="85" height="85" rx="18" fill="#0284C7"/><text x="162" y="55" font-size="36">3</text><text x="162" y="118">CSS3</text>
    <rect x="240" y="0" width="85" height="85" rx="18" fill="#FACC15"/><text x="282" y="55" fill="#0F172A" font-size="32">JS</text><text x="282" y="118">JavaScript</text>
    <rect x="360" y="0" width="85" height="85" rx="18" fill="#1E293B" stroke="#475569"/><text x="402" y="55" font-size="28">📱</text><text x="402" y="118">Responsive</text>
  </g>
  <!-- Tablet Login UI -->
  <g transform="translate(555, 115)">
    <rect width="435" height="515" rx="28" fill="#09152B" stroke="#334155" stroke-width="4"/>
    <text x="217" y="150" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="28" text-anchor="middle">Welcome Back</text>
    <text x="217" y="176" fill="#94A3B8" font-family="sans-serif" font-size="15" text-anchor="middle">Please login to your account</text>
    <rect x="65" y="205" width="305" height="48" rx="12" fill="#16243E" stroke="#334155"/>
    <text x="90" y="235" fill="#CBD5E1" font-family="sans-serif" font-size="15">Email or Username</text>
    <rect x="65" y="268" width="305" height="48" rx="12" fill="#16243E" stroke="#334155"/>
    <text x="90" y="298" fill="#CBD5E1" font-family="sans-serif" font-size="15">Password</text>
    <rect x="65" y="335" width="305" height="48" rx="24" fill="#FACC15"/>
    <text x="217" y="366" fill="#0F172A" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle">Login</text>
    <text x="217" y="415" fill="#94A3B8" font-family="sans-serif" font-size="13" text-anchor="middle">Forgot Password?</text>
  </g>
  <!-- Phone Login UI -->
  <g transform="translate(960, 215)">
    <rect width="210" height="440" rx="30" fill="#061022" stroke="#475569" stroke-width="4"/>
    <text x="105" y="125" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18" text-anchor="middle">Welcome Back</text>
    <rect x="22" y="165" width="166" height="36" rx="8" fill="#16243E"/>
    <text x="34" y="188" fill="#CBD5E1" font-family="sans-serif" font-size="11">Email or Username</text>
    <rect x="22" y="212" width="166" height="36" rx="8" fill="#16243E"/>
    <text x="34" y="235" fill="#CBD5E1" font-family="sans-serif" font-size="11">Password</text>
    <rect x="22" y="262" width="166" height="36" rx="18" fill="#FACC15"/>
    <text x="105" y="285" fill="#0F172A" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle">Login</text>
  </g>
</svg>
`);

export const THUMB_NETFLIX_ANALYSIS = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg9" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050811"/>
      <stop offset="65%" stop-color="#0A101E"/>
      <stop offset="100%" stop-color="#22060B"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg9)"/>
  <!-- Top Logos -->
  <g transform="translate(45, 75)" font-family="sans-serif" font-weight="700" font-size="18" fill="#FFFFFF">
    <text x="0" y="35" fill="#FACC15" font-size="38" font-weight="900">Py</text>
    <text x="95" y="35" fill="#E2E8F0">pandas</text>
    <text x="195" y="35" fill="#38BDF8">NumPy</text>
    <text x="295" y="35" fill="#E2E8F0">matplotlib</text>
    <text x="415" y="35" fill="#93C5FD">seaborn</text>
  </g>
  <!-- Title -->
  <g transform="translate(45, 285)" font-family="sans-serif">
    <text x="0" y="0" fill="#E50914" font-weight="900" font-size="92" letter-spacing="2">NETFLIX</text>
    <text x="0" y="82" fill="#FFFFFF" font-weight="900" font-size="60">DATA ANALYSIS</text>
    <text x="0" y="128" fill="#CBD5E1" font-size="18">Exploring Movies &amp; TV Shows | Data Cleaning | EDA | Visualization</text>
    <rect x="0" y="155" width="75" height="6" rx="3" fill="#E50914"/>
  </g>
  <!-- Dashboard Panels Right -->
  <g transform="translate(565, 45)" font-family="sans-serif">
    <!-- Donut Chart -->
    <rect x="0" y="0" width="280" height="190" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="16" y="28" fill="#FFFFFF" font-weight="700" font-size="14">Content Type Distribution</text>
    <circle cx="85" cy="110" r="46" fill="none" stroke="#E50914" stroke-width="18"/>
    <path d="M85,64 A46,46 0 0,0 42,125" fill="none" stroke="#4F46E5" stroke-width="18"/>
    <text x="85" y="106" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">Total</text>
    <text x="85" y="124" fill="#FFFFFF" font-size="14" font-weight="900" text-anchor="middle">8,846</text>
    <text x="160" y="102" fill="#E50914" font-size="13" font-weight="bold">● Movies 69.2%</text>
    <text x="160" y="126" fill="#818CF8" font-size="13" font-weight="bold">● TV Shows 30.8%</text>

    <!-- Release Year Chart -->
    <rect x="295" y="0" width="305" height="190" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="312" y="28" fill="#FFFFFF" font-weight="700" font-size="14">Titles by Release Year</text>
    <polyline points="325,155 370,145 415,130 460,105 505,65 545,52 575,85" fill="none" stroke="#E50914" stroke-width="3.5"/>

    <!-- Ratings Breakdown -->
    <rect x="0" y="205" width="210" height="175" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="16" y="232" fill="#FFFFFF" font-weight="700" font-size="14">Ratings Breakdown</text>
    <rect x="35" y="260" width="18" height="85" fill="#8B5CF6"/>
    <rect x="65" y="280" width="18" height="65" fill="#EC4899"/>
    <rect x="95" y="300" width="18" height="45" fill="#F97316"/>
    <rect x="125" y="315" width="18" height="30" fill="#FACC15"/>
    <rect x="155" y="325" width="18" height="20" fill="#10B981"/>

    <!-- Top Countries -->
    <rect x="222" y="205" width="190" height="175" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="236" y="232" fill="#FFFFFF" font-weight="700" font-size="14">Top 10 Countries</text>
    <text x="236" y="260" fill="#CBD5E1" font-size="11">United States   2,142</text>
    <text x="236" y="284" fill="#CBD5E1" font-size="11">India           1,249</text>
    <text x="236" y="308" fill="#CBD5E1" font-size="11">United Kingdom    531</text>
    <text x="236" y="332" fill="#CBD5E1" font-size="11">Canada            426</text>

    <!-- Top Genres -->
    <rect x="424" y="205" width="176" height="175" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="438" y="232" fill="#FFFFFF" font-weight="700" font-size="14">Top 5 Genres</text>
    <text x="438" y="260" fill="#CBD5E1" font-size="11">Drama           2,380</text>
    <text x="438" y="284" fill="#CBD5E1" font-size="11">Comedy          1,705</text>
    <text x="438" y="308" fill="#CBD5E1" font-size="11">Action          1,246</text>
    <text x="438" y="332" fill="#CBD5E1" font-size="11">Documentary       795</text>

    <!-- Code Box Bottom -->
    <rect x="0" y="395" width="320" height="235" rx="12" fill="#070D19" stroke="#1E293B"/>
    <text x="20" y="445" fill="#38BDF8" font-family="monospace" font-size="12">import pandas as pd</text>
    <text x="20" y="465" fill="#38BDF8" font-family="monospace" font-size="12">import seaborn as sns</text>
    <text x="20" y="495" fill="#E2E8F0" font-family="monospace" font-size="12">df = pd.read_csv('netflix.csv')</text>
    <text x="20" y="520" fill="#E2E8F0" font-family="monospace" font-size="12">df.dropna(subset=['title'])</text>

    <!-- Genre Bars Bottom Right -->
    <rect x="332" y="395" width="268" height="235" rx="12" fill="#0B1324" stroke="#1E293B"/>
    <text x="348" y="422" fill="#FFFFFF" font-weight="700" font-size="14">Genre Distribution (Top 5)</text>
    <rect x="365" y="455" width="30" height="125" fill="#E50914"/>
    <rect x="410" y="485" width="30" height="95" fill="#F97316"/>
    <rect x="455" y="505" width="30" height="75" fill="#FACC15"/>
    <rect x="500" y="525" width="30" height="55" fill="#10B981"/>
    <rect x="545" y="535" width="30" height="45" fill="#0EA5E9"/>
  </g>
</svg>
`);

export const THUMB_REACT_PORTFOLIO = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg10" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#060D2E"/>
      <stop offset="60%" stop-color="#0B194B"/>
      <stop offset="100%" stop-color="#050C24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg10)"/>
  <!-- Header -->
  <g transform="translate(55, 65)" font-family="sans-serif">
    <circle cx="65" cy="55" r="14" fill="#00D8FF"/>
    <ellipse cx="65" cy="55" rx="58" ry="22" fill="none" stroke="#00D8FF" stroke-width="5" transform="rotate(30 65 55)"/>
    <ellipse cx="65" cy="55" rx="58" ry="22" fill="none" stroke="#00D8FF" stroke-width="5" transform="rotate(-30 65 55)"/>
    <ellipse cx="65" cy="55" rx="58" ry="22" fill="none" stroke="#00D8FF" stroke-width="5"/>
    <text x="150" y="90" fill="#00D8FF" font-weight="900" font-size="76">React</text>
    <text x="0" y="170" fill="#FFFFFF" font-weight="900" font-size="56">Portfolio Website</text>
    <text x="0" y="218" fill="#E2E8F0" font-weight="600" font-size="27">Modern • Responsive • Professional</text>
  </g>
  <!-- Checklist -->
  <g transform="translate(55, 330)" font-family="sans-serif" font-size="24" font-weight="600" fill="#FFFFFF">
    <circle cx="16" cy="12" r="14" fill="#00D8FF"/><text x="10" y="18" fill="#0F172A" font-size="16" font-weight="bold">✓</text><text x="45" y="20">Clean &amp; Modern UI</text>
    <circle cx="16" cy="60" r="14" fill="#00D8FF"/><text x="10" y="66" fill="#0F172A" font-size="16" font-weight="bold">✓</text><text x="45" y="68">Reusable Components</text>
    <circle cx="16" cy="108" r="14" fill="#00D8FF"/><text x="10" y="114" fill="#0F172A" font-size="16" font-weight="bold">✓</text><text x="45" y="116">Responsive Design</text>
    <circle cx="16" cy="156" r="14" fill="#00D8FF"/><text x="10" y="162" fill="#0F172A" font-size="16" font-weight="bold">✓</text><text x="45" y="164">Projects &amp; Skills Section</text>
    <circle cx="16" cy="204" r="14" fill="#00D8FF"/><text x="10" y="210" fill="#0F172A" font-size="16" font-weight="bold">✓</text><text x="45" y="212">Contact Form &amp; Social Links</text>
  </g>
  <!-- Laptop Mockup -->
  <g transform="translate(560, 125)">
    <rect width="555" height="415" rx="20" fill="#050B1E" stroke="#475569" stroke-width="4"/>
    <text x="40" y="50" fill="#FACC15" font-family="sans-serif" font-weight="900" font-size="22">MF</text>
    <rect x="445" y="30" width="80" height="28" rx="14" fill="#FACC15"/>
    <text x="485" y="49" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle">Hire Me</text>
    <text x="40" y="115" fill="#CBD5E1" font-family="sans-serif" font-size="16">Hello, I'm</text>
    <text x="40" y="160" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="40">Maham <tspan fill="#FACC15">Furqan</tspan></text>
    <text x="40" y="192" fill="#E2E8F0" font-family="sans-serif" font-weight="700" font-size="18">React Front-End Developer</text>
    <text x="40" y="226" fill="#94A3B8" font-family="sans-serif" font-size="14">I build modern and responsive web</text>
    <text x="40" y="246" fill="#94A3B8" font-family="sans-serif" font-size="14">applications using React.js &amp; JavaScript.</text>
    <rect x="40" y="280" width="125" height="36" rx="18" fill="#FACC15"/>
    <text x="102" y="303" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle">View Projects</text>
  </g>
  <!-- Phone Mockup -->
  <g transform="translate(995, 285)">
    <rect width="175" height="350" rx="26" fill="#050B1E" stroke="#475569" stroke-width="4"/>
    <text x="22" y="42" fill="#FACC15" font-family="sans-serif" font-weight="900" font-size="16">MF</text>
    <text x="22" y="210" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="18">Maham <tspan fill="#FACC15">Furqan</tspan></text>
    <rect x="22" y="265" width="130" height="30" rx="15" fill="#FACC15"/>
    <text x="87" y="285" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle">View Projects</text>
  </g>
</svg>
`);

export const THUMB_QUOTE_SCRAPER = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg11" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#031229"/>
      <stop offset="60%" stop-color="#072247"/>
      <stop offset="100%" stop-color="#04152D"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg11)"/>
  <!-- Python Header -->
  <g transform="translate(55, 60)" font-family="sans-serif">
    <rect x="0" y="0" width="75" height="75" rx="18" fill="#0B294E" stroke="#38BDF8"/>
    <text x="37" y="50" fill="#FACC15" font-weight="900" font-size="36" text-anchor="middle">Py</text>
    <text x="95" y="52" fill="#FFFFFF" font-weight="800" font-size="44">Python</text>
  </g>
  <!-- Title -->
  <g transform="translate(55, 225)" font-family="sans-serif">
    <text x="0" y="0" fill="#FFFFFF" font-weight="900" font-size="48">QUOTE SCRAPER</text>
    <text x="0" y="65" fill="#38BDF8" font-weight="900" font-size="56">&amp; ANALYZER</text>
    <text x="0" y="115" fill="#FFFFFF" font-weight="700" font-size="18" letter-spacing="2">PYTHON  •  WEB SCRAPING  •  PANDAS</text>
  </g>
  <!-- Left Feature List -->
  <g transform="translate(55, 410)" font-family="sans-serif" font-size="24" font-weight="600" fill="#E2E8F0">
    <text x="0" y="25" fill="#38BDF8">🌐</text><text x="55" y="25">Web Scraping</text>
    <text x="0" y="78" fill="#38BDF8">&lt;/&gt;</text><text x="55" y="78">BeautifulSoup</text>
    <text x="0" y="131" fill="#38BDF8">📊</text><text x="55" y="131">Data Processing</text>
    <text x="0" y="184" fill="#38BDF8">📈</text><text x="55" y="184">Data Analysis</text>
  </g>
  <!-- Center Browser Window -->
  <g transform="translate(450, 90)">
    <rect width="335" height="315" rx="14" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
    <rect width="335" height="55" rx="14" fill="#0F172A"/>
    <text x="25" y="34" fill="#E2E8F0" font-family="monospace" font-size="12">https://example.com/quotes</text>
    <text x="25" y="90" fill="#0F172A" font-family="sans-serif" font-weight="900" font-size="22">Inspirational Quotes</text>
    <rect x="20" y="125" width="140" height="75" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="30" y="148" fill="#334155" font-family="sans-serif" font-size="10">"The best time to plant</text>
    <text x="30" y="162" fill="#334155" font-family="sans-serif" font-size="10">a tree was 20 years ago."</text>
    <rect x="175" y="125" width="140" height="75" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="185" y="148" fill="#334155" font-family="sans-serif" font-size="10">"Small steps every day</text>
    <text x="185" y="162" fill="#334155" font-family="sans-serif" font-size="10">lead to big results."</text>
  </g>
  <!-- Right Code Window -->
  <g transform="translate(795, 65)">
    <rect width="365" height="315" rx="14" fill="#061224" stroke="#1E3A5F" stroke-width="2"/>
    <g transform="translate(20, 48)" font-family="monospace" font-size="12" fill="#E2E8F0">
      <text x="0" y="0"><tspan fill="#38BDF8">import</tspan> requests</text>
      <text x="0" y="18"><tspan fill="#38BDF8">from</tspan> bs4 <tspan fill="#38BDF8">import</tspan> BeautifulSoup</text>
      <text x="0" y="36"><tspan fill="#38BDF8">import</tspan> pandas <tspan fill="#38BDF8">as</tspan> pd</text>
      <text x="0" y="68">url = <tspan fill="#FACC15">"https://example.com/quotes"</tspan></text>
      <text x="0" y="88">soup = BeautifulSoup(res.text, <tspan fill="#FACC15">'html.parser'</tspan>)</text>
      <text x="0" y="118"><tspan fill="#38BDF8">for</tspan> card <tspan fill="#38BDF8">in</tspan> soup.select(<tspan fill="#FACC15">'.quote-card'</tspan>):</text>
      <text x="15" y="138">quotes.append({'quote': text, 'author': auth})</text>
      <text x="0" y="172">df = pd.DataFrame(quotes)</text>
      <text x="0" y="192">df.to_csv(<tspan fill="#FACC15">'quotes.csv'</tspan>, index=False)</text>
    </g>
  </g>
  <!-- Extracted Data Card -->
  <g transform="translate(365, 430)">
    <rect width="335" height="185" rx="14" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="22" y="32" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="18">Extracted Data</text>
    <text x="22" y="60" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="13">Quote                             Author</text>
    <text x="22" y="86" fill="#334155" font-family="sans-serif" font-size="12">The best time to plant a tree...  Chinese Proverb</text>
    <text x="22" y="112" fill="#334155" font-family="sans-serif" font-size="12">Small steps every day lead...     Unknown</text>
    <text x="22" y="138" fill="#334155" font-family="sans-serif" font-size="12">Success is not final...           Winston Churchill</text>
  </g>
  <!-- Quote Analysis Bottom Right -->
  <g transform="translate(910, 405)">
    <rect width="250" height="270" rx="14" fill="#061224" stroke="#1E3A5F" stroke-width="2"/>
    <text x="20" y="32" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="17">Quote Analysis</text>
    <rect x="30" y="75" width="22" height="45" fill="#0284C7"/>
    <rect x="62" y="88" width="22" height="32" fill="#0284C7"/>
    <rect x="94" y="68" width="22" height="52" fill="#38BDF8"/>
    <rect x="126" y="55" width="22" height="65" fill="#818CF8"/>
    <text x="20" y="155" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="13">Top Authors            Count</text>
    <text x="20" y="182" fill="#CBD5E1" font-family="sans-serif" font-size="12">Unknown                    2</text>
    <text x="20" y="205" fill="#CBD5E1" font-family="sans-serif" font-size="12">Chinese Proverb            1</text>
    <text x="20" y="228" fill="#CBD5E1" font-family="sans-serif" font-size="12">Winston Churchill          1</text>
  </g>
</svg>
`);

export const THUMB_TASK_MANAGER_API = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg12" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#031026"/>
      <stop offset="60%" stop-color="#072247"/>
      <stop offset="100%" stop-color="#04152E"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg12)"/>
  <text x="65" y="92" fill="#93C5FD" font-family="sans-serif" font-weight="600" font-size="22">&lt;/&gt;  Python Developer Project</text>
  <!-- Title -->
  <g transform="translate(65, 195)" font-family="sans-serif">
    <text x="0" y="0" fill="#FFFFFF" font-weight="900" font-size="56">TASK MANAGER</text>
    <text x="0" y="84" fill="#00B4D8" font-weight="900" font-size="84">API</text>
    <rect x="0" y="112" width="60" height="5" rx="2.5" fill="#00B4D8"/>
    <text x="0" y="160" fill="#FFFFFF" font-weight="700" font-size="27">Python  •  Flask  •  REST API  •  SQLite</text>
  </g>
  <!-- Bottom Icons -->
  <g transform="translate(65, 580)" font-family="sans-serif" font-size="17" font-weight="600" fill="#FFFFFF" text-anchor="middle">
    <g transform="translate(35, 0)">
      <circle cx="0" cy="30" r="30" fill="#06284B" stroke="#00B4D8" stroke-width="2"/>
      <text x="0" y="37" fill="#38BDF8" font-weight="bold">&lt;/&gt;</text>
      <text x="0" y="85">CRUD</text><text x="0" y="106">Operations</text>
    </g>
    <g transform="translate(185, 0)">
      <circle cx="0" cy="30" r="30" fill="#06284B" stroke="#00B4D8" stroke-width="2"/>
      <text x="0" y="37" fill="#38BDF8" font-weight="bold">⫧</text>
      <text x="0" y="85">Filter Tasks</text><text x="0" y="106">(GET /tasks?done=)</text>
    </g>
    <g transform="translate(335, 0)">
      <circle cx="0" cy="30" r="30" fill="#06284B" stroke="#00B4D8" stroke-width="2"/>
      <text x="0" y="37" fill="#38BDF8" font-weight="bold">✓</text>
      <text x="0" y="85">Custom Error</text><text x="0" y="106">Handling</text>
    </g>
    <g transform="translate(485, 0)">
      <circle cx="0" cy="30" r="30" fill="#06284B" stroke="#00B4D8" stroke-width="2"/>
      <text x="0" y="37" fill="#38BDF8" font-weight="bold">DB</text>
      <text x="0" y="85">SQLite</text><text x="0" y="106">Database</text>
    </g>
  </g>
  <!-- Code Window Top Right -->
  <g transform="translate(580, 82)">
    <rect width="360" height="335" rx="16" fill="#06142B" stroke="#1E3A8A" stroke-width="2"/>
    <circle cx="22" cy="20" r="5" fill="#EF4444"/><circle cx="38" cy="20" r="5" fill="#F59E0B"/><circle cx="54" cy="20" r="5" fill="#10B981"/>
    <g transform="translate(22, 58)" font-family="monospace" font-size="12.5" fill="#E2E8F0">
      <text x="0" y="0"><tspan fill="#38BDF8">from</tspan> flask <tspan fill="#38BDF8">import</tspan> Flask, request, jsonify</text>
      <text x="0" y="20"><tspan fill="#38BDF8">from</tspan> models <tspan fill="#38BDF8">import</tspan> Task</text>
      <text x="0" y="50">app = Flask(__name__)</text>
      <text x="0" y="80" fill="#FACC15">@app.route('/tasks', methods=['GET'])</text>
      <text x="0" y="100"><tspan fill="#38BDF8">def</tspan> <tspan fill="#60A5FA">get_tasks</tspan>():</text>
      <text x="15" y="120">done = request.args.get('done')</text>
      <text x="15" y="140">tasks = Task.query.all()</text>
      <text x="15" y="160"><tspan fill="#38BDF8">return</tspan> jsonify([t.to_dict() <tspan fill="#38BDF8">for</tspan> t <tspan fill="#38BDF8">in</tspan> tasks])</text>
    </g>
  </g>
  <!-- API Endpoints Card Far Right -->
  <g transform="translate(935, 102)">
    <rect width="235" height="325" rx="16" fill="#071936" stroke="#0284C7" stroke-width="2"/>
    <text x="22" y="34" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">🔗 API Endpoints</text>
    <g transform="translate(20, 55)" font-family="monospace" font-size="12">
      <rect x="0" y="0" width="52" height="28" rx="6" fill="#059669"/><text x="26" y="18" fill="#FFF" font-weight="bold" text-anchor="middle">GET</text><text x="64" y="18" fill="#FFF">/tasks</text>
      <rect x="0" y="52" width="52" height="28" rx="6" fill="#059669"/><text x="26" y="70" fill="#FFF" font-weight="bold" text-anchor="middle">GET</text><text x="64" y="70" fill="#FFF">/tasks?done=..</text>
      <rect x="0" y="104" width="52" height="28" rx="6" fill="#0284C7"/><text x="26" y="122" fill="#FFF" font-weight="bold" text-anchor="middle">POST</text><text x="64" y="122" fill="#FFF">/tasks</text>
      <rect x="0" y="156" width="52" height="28" rx="6" fill="#D97706"/><text x="26" y="174" fill="#FFF" font-weight="bold" text-anchor="middle">PUT</text><text x="64" y="174" fill="#FFF">/tasks/&#123;id&#125;</text>
      <rect x="0" y="208" width="52" height="28" rx="6" fill="#DC2626"/><text x="26" y="226" fill="#FFF" font-weight="bold" text-anchor="middle">DEL</text><text x="64" y="226" fill="#FFF">/tasks/&#123;id&#125;</text>
    </g>
  </g>
  <!-- Task Manager UI Bottom Right -->
  <g transform="translate(625, 432)">
    <rect width="380" height="230" rx="16" fill="#071936" stroke="#0284C7" stroke-width="2"/>
    <text x="25" y="42" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="22">Task Manager</text>
    <rect x="285" y="18" width="75" height="32" rx="8" fill="#0284C7"/>
    <text x="322" y="39" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">+ Add Task</text>
    <g transform="translate(25, 80)" font-family="sans-serif" font-size="13" fill="#E2E8F0">
      <text x="0" y="0" fill="#94A3B8" font-weight="bold">ID   Task                   Status</text>
      <text x="0" y="36">1    Complete project</text><rect x="185" y="20" width="54" height="22" rx="6" fill="#059669"/><text x="212" y="35" fill="#FFF" font-size="11" font-weight="bold" text-anchor="middle">✓ Done</text>
      <text x="0" y="76">2    Learn Flask</text><rect x="185" y="60" width="58" height="22" rx="6" fill="#D97706"/><text x="214" y="75" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">Pending</text>
      <text x="0" y="116">3    Build portfolio</text><rect x="185" y="100" width="58" height="22" rx="6" fill="#D97706"/><text x="214" y="115" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">Pending</text>
    </g>
  </g>
</svg>
`);
