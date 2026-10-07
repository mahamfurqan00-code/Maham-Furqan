// High-resolution SVG Data URI thumbnails matching the 12 uploaded project showcase banners

const toDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

export const THUMB_ADVANCE_BLOG_API = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020B1C"/>
      <stop offset="55%" stop-color="#061A3A"/>
      <stop offset="100%" stop-color="#031026"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg1)"/>
  <!-- Top Tech Logos -->
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="70" height="70" rx="16" fill="#0B254E" stroke="#1E40AF"/>
    <text x="35" y="45" fill="#FACC15" font-family="sans-serif" font-weight="900" font-size="30" text-anchor="middle">Py</text>
    <text x="35" y="96" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="20" text-anchor="middle">Python</text>

    <rect x="130" y="0" width="70" height="70" rx="16" fill="#0B254E" stroke="#1E40AF"/>
    <text x="165" y="45" fill="#E2E8F0" font-family="serif" font-weight="900" font-size="26" text-anchor="middle">Flask</text>
    <text x="165" y="96" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="20" text-anchor="middle">Flask</text>

    <rect x="260" y="0" width="70" height="70" rx="16" fill="#0B254E" stroke="#38BDF8"/>
    <ellipse cx="295" cy="22" rx="22" ry="8" fill="#38BDF8"/>
    <rect x="273" y="22" width="44" height="28" fill="#0284C7"/>
    <ellipse cx="295" cy="50" rx="22" ry="8" fill="#38BDF8"/>
    <text x="295" y="96" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="20" text-anchor="middle">SQLite</text>
  </g>

  <!-- Main Title -->
  <g transform="translate(45, 240)">
    <text x="0" y="0" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="64">ADVANCED</text>
    <text x="0" y="68" fill="#00B4D8" font-family="sans-serif" font-weight="900" font-size="52">BLOG PLATFORM</text>
    <text x="0" y="135" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="64">API</text>
    <text x="0" y="175" fill="#7DD3FC" font-family="sans-serif" font-weight="600" font-size="21">A RESTful Blog Platform with Posts &amp; Comments</text>
    <rect x="0" y="198" width="85" height="5" rx="2.5" fill="#00B4D8"/>
  </g>

  <!-- Feature Icons Left -->
  <g transform="translate(45, 480)" font-family="sans-serif">
    <circle cx="30" cy="30" r="28" fill="#05294A" stroke="#00B4D8" stroke-width="2"/>
    <text x="30" y="37" fill="#38BDF8" font-size="20" font-weight="bold" text-anchor="middle">DB</text>
    <text x="0" y="82" fill="#FFFFFF" font-weight="700" font-size="17">Two Related</text>
    <text x="0" y="102" fill="#FFFFFF" font-weight="700" font-size="17">Tables</text>
    <text x="0" y="124" fill="#94A3B8" font-size="14">posts &amp; comments</text>

    <circle cx="175" cy="30" r="28" fill="#05294A" stroke="#00B4D8" stroke-width="2"/>
    <text x="175" y="37" fill="#38BDF8" font-size="20" font-weight="bold" text-anchor="middle">FK</text>
    <text x="145" y="82" fill="#FFFFFF" font-weight="700" font-size="17">Foreign Key</text>
    <text x="145" y="102" fill="#FFFFFF" font-weight="700" font-size="17">Relationship</text>
    <text x="145" y="124" fill="#94A3B8" font-size="14">(post_id)</text>

    <circle cx="315" cy="30" r="28" fill="#05294A" stroke="#00B4D8" stroke-width="2"/>
    <text x="315" y="37" fill="#38BDF8" font-size="20" font-weight="bold" text-anchor="middle">✓</text>
    <text x="285" y="82" fill="#FFFFFF" font-weight="700" font-size="17">ON DELETE</text>
    <text x="285" y="102" fill="#FFFFFF" font-weight="700" font-size="17">CASCADE</text>
    <text x="285" y="124" fill="#94A3B8" font-size="14">(delete comments)</text>

    <circle cx="30" cy="185" r="28" fill="#05294A" stroke="#00B4D8" stroke-width="2"/>
    <text x="30" y="192" fill="#38BDF8" font-size="18" font-weight="bold" text-anchor="middle">SQL</text>
    <text x="0" y="235" fill="#FFFFFF" font-weight="700" font-size="17">JOIN + GROUP BY</text>
    <text x="0" y="257" fill="#94A3B8" font-size="14">(comment counts)</text>

    <circle cx="175" cy="185" r="28" fill="#05294A" stroke="#00B4D8" stroke-width="2"/>
    <text x="175" y="192" fill="#38BDF8" font-size="18" font-weight="bold" text-anchor="middle">API</text>
    <text x="145" y="235" fill="#FFFFFF" font-weight="700" font-size="17">CRUD API</text>
    <text x="145" y="257" fill="#94A3B8" font-size="14">(Create, Read, Update)</text>
  </g>

  <!-- Code Window Center -->
  <g transform="translate(480, 55)">
    <rect width="380" height="370" rx="14" fill="#071327" stroke="#1E3A5F" stroke-width="2"/>
    <circle cx="22" cy="20" r="6" fill="#EF4444"/>
    <circle cx="40" cy="20" r="6" fill="#F59E0B"/>
    <circle cx="58" cy="20" r="6" fill="#10B981"/>
    <text x="90" y="25" fill="#93C5FD" font-family="monospace" font-size="14" font-weight="bold">app.py</text>
    <g transform="translate(20, 55)" font-family="monospace" font-size="12.5" fill="#E2E8F0">
      <text x="0" y="0" fill="#38BDF8">from <tspan fill="#F8FAFC">flask</tspan> import <tspan fill="#7DD3FC">Flask, request, jsonify</tspan></text>
      <text x="0" y="20" fill="#38BDF8">from <tspan fill="#F8FAFC">models</tspan> import <tspan fill="#7DD3FC">db, Post, Comment</tspan></text>
      <text x="0" y="45">app = Flask(__name__)</text>
      <text x="0" y="75" fill="#FACC15">@app.route('/posts', methods=['GET'])</text>
      <text x="0" y="95"><tspan fill="#38BDF8">def</tspan> <tspan fill="#60A5FA">get_posts</tspan>():</text>
      <text x="15" y="115">posts = Post.query.with_entities(</text>
      <text x="30" y="135">Post.id, Post.title, Post.content,</text>
      <text x="30" y="155">db.func.count(Comment.id).label('c')</text>
      <text x="15" y="175">).outerjoin(Comment).group_by(Post.id)</text>
      <text x="15" y="195" fill="#38BDF8">return <tspan fill="#E2E8F0">jsonify([</tspan></text>
      <text x="30" y="215">{'id': p.id, 'title': p.title,</text>
      <text x="30" y="235"> 'comment_count': p.c} <tspan fill="#38BDF8">for</tspan> p <tspan fill="#38BDF8">in</tspan> posts</text>
      <text x="15" y="255">])</text>
    </g>
  </g>

  <!-- Database Schema Top Right -->
  <g transform="translate(875, 45)">
    <rect width="295" height="245" rx="14" fill="#07162E" stroke="#1E3A5F" stroke-width="2"/>
    <text x="20" y="32" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">Database Schema</text>
    <rect x="20" y="50" width="110" height="140" rx="10" fill="#0B254E" stroke="#0284C7"/>
    <rect x="20" y="50" width="110" height="32" rx="10" fill="#0284C7"/>
    <text x="45" y="71" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="15">posts</text>
    <text x="30" y="102" fill="#E2E8F0" font-family="monospace" font-size="13">id (PK)</text>
    <text x="30" y="124" fill="#E2E8F0" font-family="monospace" font-size="13">title</text>
    <text x="30" y="146" fill="#E2E8F0" font-family="monospace" font-size="13">content</text>
    <text x="30" y="168" fill="#E2E8F0" font-family="monospace" font-size="13">created_at</text>

    <line x1="130" y1="115" x2="165" y2="115" stroke="#38BDF8" stroke-width="2"/>
    <rect x="165" y="50" width="110" height="140" rx="10" fill="#0B254E" stroke="#10B981"/>
    <rect x="165" y="50" width="110" height="32" rx="10" fill="#059669"/>
    <text x="180" y="71" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="15">comments</text>
    <text x="175" y="102" fill="#E2E8F0" font-family="monospace" font-size="13">id (PK)</text>
    <text x="175" y="124" fill="#E2E8F0" font-family="monospace" font-size="13">post_id (FK)</text>
    <text x="175" y="146" fill="#E2E8F0" font-family="monospace" font-size="13">comment</text>
    <text x="175" y="168" fill="#E2E8F0" font-family="monospace" font-size="13">created_at</text>
    <rect x="75" y="202" width="145" height="26" rx="6" fill="#08203E" stroke="#0284C7"/>
    <text x="147" y="219" fill="#7DD3FC" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">ON DELETE CASCADE</text>
  </g>

  <!-- API Endpoints Bottom Right -->
  <g transform="translate(875, 310)">
    <rect width="295" height="305" rx="14" fill="#07162E" stroke="#1E3A5F" stroke-width="2"/>
    <text x="20" y="34" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">&lt;/&gt; API Endpoints</text>
    <g transform="translate(20, 52)" font-family="monospace" font-size="12">
      <rect x="0" y="0" width="46" height="22" rx="5" fill="#059669"/><text x="23" y="15" fill="#FFF" font-weight="bold" text-anchor="middle">GET</text><text x="58" y="15" fill="#FFF">/posts</text>
      <rect x="0" y="34" width="46" height="22" rx="5" fill="#0284C7"/><text x="23" y="49" fill="#FFF" font-weight="bold" text-anchor="middle">GET</text><text x="58" y="49" fill="#FFF">/posts/&lt;id&gt;</text>
      <rect x="0" y="68" width="46" height="22" rx="5" fill="#D97706"/><text x="23" y="83" fill="#FFF" font-weight="bold" text-anchor="middle">POST</text><text x="58" y="83" fill="#FFF">/posts</text>
      <rect x="0" y="102" width="46" height="22" rx="5" fill="#7C3AED"/><text x="23" y="117" fill="#FFF" font-weight="bold" text-anchor="middle">PUT</text><text x="58" y="117" fill="#FFF">/posts/&lt;id&gt;</text>
      <rect x="0" y="136" width="46" height="22" rx="5" fill="#DC2626"/><text x="23" y="151" fill="#FFF" font-weight="bold" text-anchor="middle">DEL</text><text x="58" y="151" fill="#FFF">/posts/&lt;id&gt;</text>
      <rect x="0" y="170" width="46" height="22" rx="5" fill="#059669"/><text x="23" y="185" fill="#FFF" font-weight="bold" text-anchor="middle">GET</text><text x="58" y="185" fill="#FFF">/posts/&lt;id&gt;/comments</text>
      <rect x="0" y="204" width="46" height="22" rx="5" fill="#D97706"/><text x="23" y="219" fill="#FFF" font-weight="bold" text-anchor="middle">POST</text><text x="58" y="219" fill="#FFF">/posts/&lt;id&gt;/comments</text>
    </g>
  </g>

  <!-- Blog UI Preview Bottom Center -->
  <g transform="translate(460, 455)">
    <rect width="395" height="285" rx="14" fill="#071327" stroke="#1E3A5F" stroke-width="2"/>
    <text x="20" y="45" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">My Blog</text>
    <rect x="20" y="65" width="210" height="90" rx="10" fill="#0C2142"/>
    <text x="35" y="92" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="14">Web Development Tips</text>
    <text x="35" y="112" fill="#38BDF8" font-family="sans-serif" font-size="11">3 comments • 2025-08-15</text>
    <rect x="20" y="170" width="210" height="90" rx="10" fill="#0C2142"/>
    <text x="35" y="197" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="14">Python for Beginners</text>
    <text x="35" y="217" fill="#38BDF8" font-family="sans-serif" font-size="11">5 comments • 2025-08-10</text>
    <rect x="245" y="65" width="135" height="195" rx="10" fill="#0C2142"/>
    <text x="258" y="92" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="14">Comments</text>
    <text x="258" y="120" fill="#93C5FD" font-family="sans-serif" font-size="12" font-weight="bold">Sara Khan</text>
    <text x="258" y="136" fill="#CBD5E1" font-family="sans-serif" font-size="11">Great post! Very helpful.</text>
    <text x="258" y="175" fill="#93C5FD" font-family="sans-serif" font-size="12" font-weight="bold">Ali Raza</text>
    <text x="258" y="191" fill="#CBD5E1" font-family="sans-serif" font-size="11">Thanks for sharing!</text>
  </g>
</svg>
`);

export const THUMB_BANK_OOP = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071022"/>
      <stop offset="60%" stop-color="#0C1B33"/>
      <stop offset="100%" stop-color="#1E1B18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg2)"/>
  <!-- Python Logo Top Left -->
  <g transform="translate(70, 65)">
    <rect x="0" y="0" width="110" height="110" rx="28" fill="#1E293B" stroke="#FACC15" stroke-width="2"/>
    <text x="55" y="72" fill="#FACC15" font-family="sans-serif" font-weight="900" font-size="52" text-anchor="middle">Py</text>
  </g>
  <!-- Title -->
  <g transform="translate(70, 255)" font-family="sans-serif">
    <text x="0" y="0" fill="#FFFFFF" font-weight="900" font-size="58">BANK ACCOUNT</text>
    <text x="0" y="68" fill="#FACC15" font-weight="900" font-size="60">MANAGEMENT</text>
    <text x="0" y="136" fill="#FACC15" font-weight="900" font-size="60">SYSTEM</text>
    <rect x="0" y="165" width="75" height="6" rx="3" fill="#FACC15"/>
    <text x="0" y="215" fill="#FFFFFF" font-weight="700" font-size="28" letter-spacing="6">PYTHON  •  OOP</text>
  </g>
  <!-- Bottom Feature Circles -->
  <g transform="translate(70, 565)" font-family="sans-serif" text-anchor="middle">
    <g transform="translate(45, 0)">
      <circle cx="0" cy="35" r="32" fill="#0F172A" stroke="#FACC15" stroke-width="2.5"/>
      <text x="0" y="42" fill="#FACC15" font-weight="bold" font-size="20">&lt;/&gt;</text>
      <text x="0" y="92" fill="#FFFFFF" font-size="16" font-weight="600">Object-Oriented</text>
      <text x="0" y="112" fill="#FFFFFF" font-size="16" font-weight="600">Programming</text>
    </g>
    <g transform="translate(200, 0)">
      <circle cx="0" cy="35" r="32" fill="#0F172A" stroke="#FACC15" stroke-width="2.5"/>
      <text x="0" y="42" fill="#FACC15" font-weight="bold" font-size="20">✓</text>
      <text x="0" y="92" fill="#FFFFFF" font-size="16" font-weight="600">Secure</text>
      <text x="0" y="112" fill="#FFFFFF" font-size="16" font-weight="600">Transactions</text>
    </g>
    <g transform="translate(355, 0)">
      <circle cx="0" cy="35" r="32" fill="#0F172A" stroke="#FACC15" stroke-width="2.5"/>
      <text x="0" y="42" fill="#FACC15" font-weight="bold" font-size="20">DB</text>
      <text x="0" y="92" fill="#FFFFFF" font-size="16" font-weight="600">Account</text>
      <text x="0" y="112" fill="#FFFFFF" font-size="16" font-weight="600">Management</text>
    </g>
    <g transform="translate(500, 0)">
      <circle cx="0" cy="35" r="32" fill="#0F172A" stroke="#FACC15" stroke-width="2.5"/>
      <text x="0" y="42" fill="#FACC15" font-weight="bold" font-size="20">⇄</text>
      <text x="0" y="92" fill="#FFFFFF" font-size="16" font-weight="600">Deposit &amp;</text>
      <text x="0" y="112" fill="#FFFFFF" font-size="16" font-weight="600">Withdrawal</text>
    </g>
  </g>
  <!-- Laptop Code Screen -->
  <g transform="translate(570, 145)">
    <rect width="460" height="370" rx="16" fill="#091326" stroke="#334155" stroke-width="3"/>
    <circle cx="24" cy="22" r="6" fill="#EF4444"/>
    <circle cx="42" cy="22" r="6" fill="#F59E0B"/>
    <circle cx="60" cy="22" r="6" fill="#10B981"/>
    <g transform="translate(28, 60)" font-family="monospace" font-size="13.5" fill="#E2E8F0">
      <text x="0" y="0"><tspan fill="#38BDF8">class</tspan> <tspan fill="#FACC15">Account</tspan>:</text>
      <text x="20" y="22"><tspan fill="#38BDF8">def</tspan> <tspan fill="#60A5FA">__init__</tspan>(self, owner, balance=0):</text>
      <text x="40" y="42">self.owner = owner</text>
      <text x="40" y="62">self.balance = balance</text>
      <text x="20" y="95"><tspan fill="#38BDF8">def</tspan> <tspan fill="#60A5FA">deposit</tspan>(self, amount):</text>
      <text x="40" y="115"><tspan fill="#38BDF8">if</tspan> amount &gt; 0:</text>
      <text x="60" y="135">self.balance += amount</text>
      <text x="60" y="155"><tspan fill="#38BDF8">return</tspan> <tspan fill="#FBBF24">f"Deposited $&#123;amount&#125;"</tspan></text>
      <text x="20" y="190"><tspan fill="#38BDF8">def</tspan> <tspan fill="#60A5FA">withdraw</tspan>(self, amount):</text>
      <text x="40" y="210"><tspan fill="#38BDF8">if</tspan> amount &lt;= self.balance:</text>
      <text x="60" y="230">self.balance -= amount</text>
      <text x="40" y="250"><tspan fill="#38BDF8">else</tspan>: <tspan fill="#F87171">raise ValueError("Insufficient")</tspan></text>
    </g>
  </g>
  <!-- Mobile Bank UI -->
  <g transform="translate(875, 240)">
    <rect width="280" height="340" rx="22" fill="#111C33" stroke="#475569" stroke-width="2.5"/>
    <text x="22" y="38" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="20">My Bank</text>
    <rect x="20" y="58" width="240" height="82" rx="14" fill="#192846"/>
    <text x="35" y="86" fill="#94A3B8" font-family="sans-serif" font-size="14">Total Balance</text>
    <text x="35" y="120" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="28">$2,450.00</text>
    <rect x="20" y="155" width="240" height="46" rx="10" fill="#192846"/>
    <circle cx="45" cy="178" r="14" fill="#10B981"/><text x="72" y="183" fill="#FFF" font-family="sans-serif" font-size="15" font-weight="600">Deposit</text>
    <rect x="20" y="210" width="240" height="46" rx="10" fill="#192846"/>
    <circle cx="45" cy="233" r="14" fill="#EF4444"/><text x="72" y="238" fill="#FFF" font-family="sans-serif" font-size="15" font-weight="600">Withdraw</text>
    <rect x="20" y="265" width="240" height="46" rx="10" fill="#192846"/>
    <circle cx="45" cy="288" r="14" fill="#3B82F6"/><text x="72" y="293" fill="#FFF" font-family="sans-serif" font-size="15" font-weight="600">Transaction History</text>
  </g>
</svg>
`);

export const THUMB_CAMPUS_STORE = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#041527"/>
      <stop offset="100%" stop-color="#092740"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg3)"/>
  <g transform="translate(45, 45)">
    <rect width="235" height="54" rx="27" fill="#0B2948" stroke="#1E40AF"/>
    <text x="125" y="34" fill="#E2E8F0" font-family="sans-serif" font-weight="700" font-size="22" text-anchor="middle">Python Project</text>
  </g>
  <g transform="translate(45, 200)" font-family="sans-serif">
    <text x="0" y="0" fill="#FFFFFF" font-weight="900" font-size="60">CAMPUS STORE</text>
    <text x="0" y="68" fill="#2DD4BF" font-weight="900" font-size="56">SALES ANALYTICS</text>
    <text x="0" y="118" fill="#CBD5E1" font-size="21">Analyzing store sales data using <tspan fill="#FFF" font-weight="bold">Python, Pandas</tspan></text>
    <text x="0" y="148" fill="#CBD5E1" font-size="21">and Jupyter Notebook to uncover insights and</text>
    <text x="0" y="178" fill="#CBD5E1" font-size="21">support data-driven decisions.</text>
  </g>
  <!-- Jupyter Window Right -->
  <g transform="translate(565, 65)">
    <rect width="600" height="460" rx="18" fill="#0F172A" stroke="#334155" stroke-width="3"/>
    <text x="25" y="35" fill="#F97316" font-family="sans-serif" font-weight="900" font-size="20">jupyter</text>
    <text x="120" y="35" fill="#E2E8F0" font-family="monospace" font-size="14">Campus_Store_Sales_Analysis.ipynb</text>
    <rect x="12" y="55" width="576" height="390" rx="10" fill="#FFFFFF"/>
    <!-- 4 Sub-charts inside Jupyter -->
    <g transform="translate(28, 75)" font-family="sans-serif">
      <text x="0" y="15" fill="#0F172A" font-weight="800" font-size="14">Monthly Sales Trend</text>
      <polyline points="20,130 60,115 100,105 140,110 180,90 220,70 260,45" fill="none" stroke="#2563EB" stroke-width="3"/>
      <text x="300" y="15" fill="#0F172A" font-weight="800" font-size="14">Sales by Category</text>
      <circle cx="380" cy="95" r="55" fill="#3B82F6"/>
      <path d="M380,95 L380,40 A55,55 0 0,1 435,95 Z" fill="#F59E0B"/>
      <path d="M380,95 L435,95 A55,55 0 0,1 380,150 Z" fill="#10B981"/>
      <text x="455" y="65" fill="#334155" font-size="12">● Stationery 40.2%</text>
      <text x="455" y="85" fill="#334155" font-size="12">● Snacks 22.9%</text>
      <text x="455" y="105" fill="#334155" font-size="12">● Beverages 15.6%</text>
      <text x="455" y="125" fill="#334155" font-size="12">● Books 12.3%</text>

      <text x="0" y="205" fill="#0F172A" font-weight="800" font-size="14">Top 5 Products by Sales</text>
      <rect x="65" y="220" width="170" height="14" fill="#3B82F6"/><text x="0" y="232" fill="#334155" font-size="11">Notebook</text>
      <rect x="65" y="242" width="135" height="14" fill="#3B82F6"/><text x="0" y="254" fill="#334155" font-size="11">Water Bottle</text>
      <rect x="65" y="264" width="115" height="14" fill="#3B82F6"/><text x="0" y="276" fill="#334155" font-size="11">Snacks</text>
      <rect x="65" y="286" width="90" height="14" fill="#3B82F6"/><text x="0" y="298" fill="#334155" font-size="11">Pen</text>

      <text x="300" y="205" fill="#0F172A" font-weight="800" font-size="14">Sales Summary</text>
      <rect x="300" y="218" width="250" height="22" fill="#EFF6FF"/>
      <text x="308" y="234" fill="#1E293B" font-size="11" font-weight="bold">Category       Total Sales   Items</text>
      <text x="308" y="256" fill="#334155" font-size="11">Stationery       8,450       1,203</text>
      <text x="308" y="276" fill="#334155" font-size="11">Snacks           6,320         980</text>
      <text x="308" y="296" fill="#334155" font-size="11">Beverages        5,870         912</text>
      <text x="308" y="320" fill="#0F172A" font-size="12" font-weight="bold">Total           28,850       4,250</text>
    </g>
  </g>
  <!-- Bottom Code & CSV Card -->
  <g transform="translate(610, 545)">
    <rect width="540" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1"/>
    <text x="25" y="35" fill="#059669" font-family="monospace" font-size="14">import pandas as pd</text>
    <text x="25" y="58" fill="#059669" font-family="monospace" font-size="14">import matplotlib.pyplot as plt</text>
    <text x="25" y="88" fill="#0F172A" font-family="monospace" font-size="14">df = pd.read_csv(<tspan fill="#DC2626">'campus_store_sales.csv'</tspan>)</text>
  </g>
</svg>
`);

export const THUMB_EMPLOYEE_SYSTEM = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ECFDF5"/>
      <stop offset="60%" stop-color="#D1FAE5"/>
      <stop offset="100%" stop-color="#A7F3D0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg4)"/>
  <!-- Header -->
  <g transform="translate(60, 55)" font-family="sans-serif">
    <circle cx="55" cy="45" r="24" fill="#047857"/>
    <path d="M15,95 C15,68 95,68 95,95 Z" fill="#047857"/>
    <text x="130" y="42" fill="#0F172A" font-weight="900" font-size="52">Employee</text>
    <text x="130" y="102" fill="#047857" font-weight="900" font-size="52">Management System</text>
    <text x="130" y="146" fill="#0F172A" font-weight="800" font-size="28">Python Web Application</text>
    <text x="0" y="196" fill="#1E293B" font-weight="700" font-size="26">Manage • Track • Organize</text>
  </g>
  <!-- Checklist -->
  <g transform="translate(60, 290)" font-family="sans-serif" font-size="24" font-weight="600" fill="#0F172A">
    <circle cx="16" cy="12" r="14" fill="#047857"/><text x="10" y="19" fill="#FFF" font-size="16">✓</text><text x="45" y="20">Add New Employees</text>
    <circle cx="16" cy="60" r="14" fill="#047857"/><text x="10" y="67" fill="#FFF" font-size="16">✓</text><text x="45" y="68">View Employee Records</text>
    <circle cx="16" cy="108" r="14" fill="#047857"/><text x="10" y="115" fill="#FFF" font-size="16">✓</text><text x="45" y="116">Update &amp; Edit Information</text>
    <circle cx="16" cy="156" r="14" fill="#047857"/><text x="10" y="163" fill="#FFF" font-size="16">✓</text><text x="45" y="164">User-Friendly Interface</text>
    <circle cx="16" cy="204" r="14" fill="#047857"/><text x="10" y="211" fill="#FFF" font-size="16">✓</text><text x="45" y="212">Organized Database</text>
  </g>
  <!-- Bottom Tech Badges -->
  <g transform="translate(60, 585)" font-family="sans-serif" font-weight="700" font-size="20" fill="#0F172A" text-anchor="middle">
    <rect x="0" y="0" width="90" height="90" rx="20" fill="#064E3B"/><text x="45" y="55" fill="#FACC15" font-size="34">Py</text><text x="45" y="120">Python</text>
    <rect x="135" y="0" width="90" height="90" rx="20" fill="#064E3B"/><text x="180" y="55" fill="#FFFFFF" font-size="26">Flask</text><text x="180" y="120">Flask</text>
    <rect x="270" y="0" width="90" height="90" rx="20" fill="#1E3A8A"/><text x="315" y="55" fill="#F97316" font-size="32">5</text><text x="315" y="120">HTML5</text>
    <rect x="405" y="0" width="90" height="90" rx="20" fill="#0284C7"/><text x="450" y="55" fill="#FFFFFF" font-size="32">3</text><text x="450" y="120">CSS3</text>
    <rect x="540" y="0" width="90" height="90" rx="20" fill="#0369A1"/><text x="585" y="55" fill="#FFFFFF" font-size="28">DB</text><text x="585" y="120">Database</text>
  </g>
  <!-- Laptop EMS UI -->
  <g transform="translate(550, 195)">
    <rect width="600" height="370" rx="20" fill="#0F172A" stroke="#334155" stroke-width="4"/>
    <rect x="14" y="14" width="120" height="342" rx="10" fill="#042F2E"/>
    <text x="32" y="48" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="20">EMS</text>
    <rect x="22" y="95" width="104" height="30" rx="6" fill="#059669"/>
    <text x="32" y="115" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold">Employees</text>
    <rect x="134" y="14" width="452" height="342" rx="10" fill="#FFFFFF"/>
    <text x="155" y="52" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="22">Employee Management</text>
    <rect x="465" y="30" width="105" height="32" rx="8" fill="#047857"/>
    <text x="517" y="51" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">+ Add Employee</text>
    <g transform="translate(155, 115)" font-family="sans-serif" font-size="13" fill="#334155">
      <text x="0" y="0" font-weight="bold" fill="#0F172A">ID    Name             Department     Email</text>
      <text x="0" y="35">1     Ali Raza         IT             ali@company.com</text>
      <text x="0" y="70">2     Ayesha Khan      HR             ayesha@company.com</text>
      <text x="0" y="105">3     Usman Tariq      Finance        usman@company.com</text>
      <text x="0" y="140">4     Sara Ahmed       Marketing      sara@company.com</text>
    </g>
  </g>
</svg>
`);

export const THUMB_HAFIZ_TURBINE = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#05181E"/>
      <stop offset="70%" stop-color="#0A262E"/>
      <stop offset="100%" stop-color="#1E292B"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg5)"/>
  <!-- Top Brand Header -->
  <g transform="translate(45, 55)" font-family="serif">
    <circle cx="48" cy="48" r="38" fill="none" stroke="#EAB378" stroke-width="6" stroke-dasharray="16 8"/>
    <circle cx="48" cy="48" r="22" fill="#EAB378"/>
    <text x="115" y="48" fill="#FFFFFF" font-weight="900" font-size="48" letter-spacing="3">HAFIZ</text>
    <text x="115" y="78" fill="#FFFFFF" font-family="sans-serif" font-weight="600" font-size="18" letter-spacing="2">TURBINE &amp; ENGINEERING</text>
    <text x="115" y="105" fill="#EAB378" font-family="sans-serif" font-size="14" letter-spacing="3">LAHORE  |  PAKISTAN</text>
  </g>
  <!-- Main Title -->
  <g transform="translate(40, 255)">
    <text x="0" y="0" fill="#FFFFFF" font-family="serif" font-weight="900" font-size="48">HAFIZ TURBINE &amp;</text>
    <text x="0" y="56" fill="#FFFFFF" font-family="serif" font-weight="900" font-size="48">ENGINEERING</text>
    <text x="0" y="130" fill="#EAB378" font-family="sans-serif" font-weight="900" font-size="68">WEBSITE</text>
    <rect x="0" y="155" width="70" height="4" fill="#EAB378"/>
    <text x="0" y="195" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="17" letter-spacing="2">WEB DEVELOPMENT • RESPONSIVE DESIGN</text>
    <text x="0" y="224" fill="#E2E8F0" font-family="sans-serif" font-weight="600" font-size="16" letter-spacing="2">HTML • CSS • JAVASCRIPT</text>
  </g>
  <!-- Laptop & Mobile Mockup -->
  <g transform="translate(510, 130)">
    <rect width="540" height="400" rx="18" fill="#0B191E" stroke="#94A3B8" stroke-width="3"/>
    <rect x="16" y="16" width="508" height="230" fill="#0D2E38"/>
    <text x="60" y="110" fill="#EAB378" font-family="sans-serif" font-size="13">Quality Engineering Solutions</text>
    <text x="60" y="140" fill="#FFFFFF" font-family="serif" font-weight="bold" font-size="28">Hafiz Turbine &amp;</text>
    <text x="60" y="170" fill="#FFFFFF" font-family="serif" font-weight="bold" font-size="28">Engineering Works</text>
    <rect x="60" y="205" width="110" height="26" rx="5" fill="#EAB378"/>
    <text x="115" y="222" fill="#0F172A" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Explore Products →</text>
    <rect x="16" y="246" width="508" height="138" fill="#F8FAFC"/>
    <text x="270" y="368" fill="#0F172A" font-family="sans-serif" font-weight="800" font-size="15" text-anchor="middle">Our Products: Water Turbines • Tubewell • Flanges • Pipes</text>
  </g>
  <!-- Phone Mockup -->
  <g transform="translate(990, 270)">
    <rect width="175" height="365" rx="22" fill="#091519" stroke="#94A3B8" stroke-width="3"/>
    <rect x="10" y="15" width="155" height="185" fill="#0D2E38"/>
    <text x="22" y="95" fill="#FFFFFF" font-family="serif" font-weight="bold" font-size="16">Hafiz Turbine &amp;</text>
    <text x="22" y="115" fill="#FFFFFF" font-family="serif" font-weight="bold" font-size="16">Engineering</text>
    <rect x="10" y="200" width="155" height="150" fill="#F8FAFC"/>
    <text x="25" y="230" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">⚙ Water Turbines</text>
    <text x="25" y="260" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">🔧 Tubewell Eng.</text>
    <text x="25" y="290" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">🔩 Flanges &amp; Valves</text>
    <text x="25" y="320" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="11">🛠 Turbine Parts</text>
  </g>
</svg>
`);

export const THUMB_HOSPITAL_CHATBOT = toDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EFF6FF"/>
      <stop offset="100%" stop-color="#DBEAFE"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg6)"/>
  <!-- Header -->
  <g transform="translate(65, 55)" font-family="sans-serif">
    <rect x="0" y="15" width="110" height="95" rx="14" fill="#0284C7"/>
    <text x="55" y="75" fill="#FFFFFF" font-weight="900" font-size="48" text-anchor="middle">+</text>
    <text x="150" y="55" fill="#0F172A" font-weight="900" font-size="54">Hospital</text>
    <text x="150" y="115" fill="#0284C7" font-weight="900" font-size="54">FAQ Chatbot</text>
    <text x="0" y="175" fill="#0F172A" font-weight="800" font-size="36">Python AI Assistant</text>
    <text x="0" y="220" fill="#1E3A8A" font-weight="600" font-size="22">Quick Answers • Better Support • Happier Patients</text>
  </g>
  <!-- Checklist -->
  <g transform="translate(65, 315)" font-family="sans-serif" font-size="24" font-weight="600" fill="#0F172A">
    <circle cx="16" cy="12" r="14" fill="#0284C7"/><text x="10" y="18" fill="#FFF" font-size="15">✓</text><text x="45" y="20">Answers Hospital FAQs</text>
    <circle cx="16" cy="62" r="14" fill="#0284C7"/><text x="10" y="68" fill="#FFF" font-size="15">✓</text><text x="45" y="70">Departments &amp; Services</text>
    <circle cx="16" cy="112" r="14" fill="#0284C7"/><text x="10" y="118" fill="#FFF" font-size="15">✓</text><text x="45" y="120">Timings &amp; Appointments</text>
    <circle cx="16" cy="162" r="14" fill="#0284C7"/><text x="10" y="168" fill="#FFF" font-size="15">✓</text><text x="45" y="170">Friendly Conversation</text>
    <circle cx="16" cy="212" r="14" fill="#0284C7"/><text x="10" y="218" fill="#FFF" font-size="15">✓</text><text x="45" y="220">Easy to Use Interface</text>
  </g>
  <!-- Phone Chat Screen -->
  <g transform="translate(640, 105)">
    <rect width="340" height="535" rx="32" fill="#FFFFFF" stroke="#0F172A" stroke-width="5"/>
    <rect x="6" y="6" width="328" height="72" rx="26" fill="#0284C7"/>
    <text x="72" y="42" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="18">Hospital Assistant</text>
    <text x="72" y="62" fill="#A7F3D0" font-family="sans-serif" font-size="13">● Online</text>
    <rect x="115" y="100" width="205" height="38" rx="12" fill="#60A5FA"/>
    <text x="128" y="124" fill="#0F172A" font-family="sans-serif" font-size="13" font-weight="600">What are your visiting hours?</text>
    <rect x="65" y="155" width="220" height="75" rx="12" fill="#F1F5F9"/>
    <text x="80" y="180" fill="#0F172A" font-family="sans-serif" font-size="13">Our visiting hours are:</text>
    <text x="80" y="200" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="13">10:00 AM – 12:00 PM</text>
    <text x="80" y="218" fill="#0F172A" font-family="sans-serif" font-weight="bold" font-size="13">4:00 PM – 7:00 PM</text>
    <rect x="110" y="248" width="210" height="38" rx="12" fill="#93C5FD"/>
    <text x="122" y="272" fill="#0F172A" font-family="sans-serif" font-size="13" font-weight="600">Which departments do you have?</text>
    <rect x="65" y="302" width="245" height="145" rx="12" fill="#F1F5F9"/>
    <text x="80" y="328" fill="#0F172A" font-family="sans-serif" font-size="13" font-weight="bold">Available Departments:</text>
    <text x="88" y="352" fill="#334155" font-family="sans-serif" font-size="13">• General Medicine</text>
    <text x="88" y="374" fill="#334155" font-family="sans-serif" font-size="13">• Pediatrics &amp; Cardiology</text>
    <text x="88" y="396" fill="#334155" font-family="sans-serif" font-size="13">• Orthopedics</text>
  </g>
  <!-- AI Bot Callout -->
  <g transform="translate(1005, 235)">
    <rect width="170" height="90" rx="20" fill="#0284C7"/>
    <text x="85" y="42" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="22" text-anchor="middle">How can I</text>
    <text x="85" y="72" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="22" text-anchor="middle">help you?</text>
  </g>
</svg>
`);
