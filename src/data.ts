import { Project, Skill, Experience, Education, Certification, BlogPost, GitHubRepo } from './types';
import profileAvatar from './assets/images/profile_pic_new.jpg';
import thumbFyp from './assets/images/fyp_fraud_app_sentiment.png';
import thumbWeather from './assets/images/live_weather_fetcher.png';
import thumbBirthday from './assets/images/birthday_website.jpg';
import internshipLetterImage from './assets/images/internship_completion_letter.jpg';
import clickpadInternshipLetter from './assets/images/clickpad_internship_letter.png';
import {
  THUMB_ADVANCE_BLOG_API,
  THUMB_BANK_OOP,
  THUMB_CAMPUS_STORE,
  THUMB_EMPLOYEE_SYSTEM,
  THUMB_HAFIZ_TURBINE,
  THUMB_HOSPITAL_CHATBOT,
} from './projectThumbnails';
import {
  THUMB_LAHORE_EXPLORER,
  THUMB_LOGIN_PAGE,
  THUMB_NETFLIX_ANALYSIS,
  THUMB_REACT_PORTFOLIO,
  THUMB_QUOTE_SCRAPER,
  THUMB_TASK_MANAGER_API,
} from './projectThumbnails2';
import {
  CERT_PYTHON_GRIN,
  CERT_CLAUDE_101,
  CERT_DIGISKILLS_MARKETING,
  CERT_DIGISKILLS_GRAPHIC,
} from './certificateAssets';

export const PERSONAL_INFO = {
  name: "Maham Furqan",
  headline: "Software Engineering Student | AppSheet Developer at Clickpad | Python & QA Specialist | Graphic Designer",
  email: "mahamfurqan00@gmail.com",
  phone: "+92 328 5778746",
  location: "Shahdara, Lahore, Punjab, Pakistan",
  locationMapUrl: "https://www.google.com/maps/search/?api=1&query=Shahdara+Lahore+Punjab+Pakistan",
  linkedin: "https://www.linkedin.com/in/mahamfurqan00",
  github: "https://github.com/mahamfurqan00-code",
  githubUsername: "mahamfurqan00-code",
  whatsappUrl: "https://wa.me/923285778746",
  avatarUrl: profileAvatar,
  heroBgUrl: "/src/assets/images/workspace_hero_1783403088586.jpg",
  bio: "Software Engineering student with verified credentials in enterprise business automation at Clickpad (Internship completed Oct 30, 2025), Python software engineering, Anthropic Claude 101 AI systems, and DigiSkills-accredited graphic design. Actively shipping automated workflows, robust APIs, and user-centric web applications.",
};

export const INITIAL_GITHUB_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: "BSSE-Final-Year-Project-FYP-",
    full_name: "mahamfurqan00-code/BSSE-Final-Year-Project-FYP-",
    description: "A web-based NLP application that uses sentiment analysis and user reviews to help detect potentially fraudulent mobile applications.",
    html_url: "https://github.com/mahamfurqan00-code/BSSE-Final-Year-Project-FYP-",
    language: "Python / HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-10-10T12:00:00Z",
    topics: ["nlp", "sentiment-analysis", "fraud-detection", "python", "bsse-fyp"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 102,
    name: "Live-Weather-Fetcher",
    full_name: "mahamfurqan00-code/Live-Weather-Fetcher",
    description: "A responsive, API-driven live weather fetcher showcasing asynchronous data fetching and modern UI states leveraging OpenWeatherMap and wttr.in APIs.",
    html_url: "https://github.com/mahamfurqan00-code/Live-Weather-Fetcher",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-10-10T12:00:00Z",
    topics: ["python", "weather-api", "openweathermap", "wttr-in", "data-fetching"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 1,
    name: "Lahore-City-Explorer-pandas-Folium-",
    full_name: "mahamfurqan00-code/Lahore-City-Explorer-pandas-Folium-",
    description: "Interactive geospatial exploration and footfall analysis of key landmark places in Lahore using Python, pandas, and Folium geospatial mapping.",
    html_url: "https://github.com/mahamfurqan00-code/Lahore-City-Explorer-pandas-Folium-",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-03T17:20:00Z",
    topics: ["python", "pandas", "folium", "geospatial", "data-visualization"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 2,
    name: "Bank-Account-Management-System-using-Python-OOP.ipynb",
    full_name: "mahamfurqan00-code/Bank-Account-Management-System-using-Python-OOP.ipynb",
    description: "Robust banking engine implementing core OOP principles: Encapsulation, Getters & Setters (@property and @setter), Deposit & Withdrawal logic, and strict exception handling.",
    html_url: "https://github.com/mahamfurqan00-code/Bank-Account-Management-System-using-Python-OOP.ipynb",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-03T06:29:01Z",
    topics: ["python", "oop", "encapsulation", "exception-handling"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 3,
    name: "Hafiz-Turbine-website",
    full_name: "mahamfurqan00-code/Hafiz-Turbine-website",
    description: "Commercial manufacturing portal and product showcase website for Hafiz Turbine featuring industrial equipment catalog and responsive layout.",
    html_url: "https://github.com/mahamfurqan00-code/Hafiz-Turbine-website",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-09-29T09:53:38Z",
    topics: ["html", "css", "web-development", "industrial-ui"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 4,
    name: "-Quote-Scraper-Analyzer-Web-Scraping-OOP-Collections-",
    full_name: "mahamfurqan00-code/-Quote-Scraper-Analyzer-Web-Scraping-OOP-Collections-",
    description: "Web scraping and linguistic analytics engine utilizing BeautifulSoup4, pandas, OOP architecture, and Python collections for author sentiment extraction.",
    html_url: "https://github.com/mahamfurqan00-code/-Quote-Scraper-Analyzer-Web-Scraping-OOP-Collections-",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-03T07:06:24Z",
    topics: ["python", "web-scraping", "beautifulsoup4", "pandas", "oop"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 5,
    name: "advance-blog-APIs",
    full_name: "mahamfurqan00-code/advance-blog-APIs",
    description: "Backend REST API architecture supporting full CRUD operations, article categorization, author attribution, and payload validations.",
    html_url: "https://github.com/mahamfurqan00-code/advance-blog-APIs",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-11T06:27:28Z",
    topics: ["rest-api", "backend", "python", "json", "crud"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 6,
    name: "Task-manager-APIs",
    full_name: "mahamfurqan00-code/Task-manager-APIs",
    description: "Task lifecycle management REST API system handling status transitions, deadlines, priority filtering, and data integrity checks.",
    html_url: "https://github.com/mahamfurqan00-code/Task-manager-APIs",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-11T06:11:38Z",
    topics: ["task-management", "api", "python", "backend"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 7,
    name: "Netflix-data-analysis",
    full_name: "mahamfurqan00-code/Netflix-data-analysis",
    description: "Exploratory Data Analysis (EDA) uncovering global streaming patterns, genre distributions, rating trends, and movie vs. TV series duration metrics.",
    html_url: "https://github.com/mahamfurqan00-code/Netflix-data-analysis",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-11T07:08:19Z",
    topics: ["data-analysis", "eda", "visualization", "netflix"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 8,
    name: "Campus-Store-Sales-Analytics-project",
    full_name: "mahamfurqan00-code/Campus-Store-Sales-Analytics-project",
    description: "Statistical retail analytics project computing daily sales velocity, inventory turnover, and profitability curves for a campus store environment.",
    html_url: "https://github.com/mahamfurqan00-code/Campus-Store-Sales-Analytics-project",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-03T07:12:50Z",
    topics: ["sales-analytics", "retail", "pandas", "python"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 9,
    name: "Chatbot",
    full_name: "mahamfurqan00-code/Chatbot",
    description: "Conversational query bot using pattern matching and rule-based NLP intent classification in Python.",
    html_url: "https://github.com/mahamfurqan00-code/Chatbot",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-04T05:38:19Z",
    topics: ["chatbot", "nlp", "python", "ai"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 10,
    name: "Rest-APIs",
    full_name: "mahamfurqan00-code/Rest-APIs",
    description: "Foundational REST architectural patterns, request-response handling, status code protocols, and query parameter parsers.",
    html_url: "https://github.com/mahamfurqan00-code/Rest-APIs",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-11T06:02:02Z",
    topics: ["rest", "api-design", "python", "endpoints"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 11,
    name: "maham-portfolio",
    full_name: "mahamfurqan00-code/maham-portfolio",
    description: "Personal responsive developer and designer portfolio highlighting creative identity and technical milestones.",
    html_url: "https://github.com/mahamfurqan00-code/maham-portfolio",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-09-30T17:01:55Z",
    topics: ["portfolio", "responsive", "frontend"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 12,
    name: "login-page.html",
    full_name: "mahamfurqan00-code/login-page.html",
    description: "Modern authentication interface with client-side form validation, sleek glassmorphism styling, and responsive viewport sizing.",
    html_url: "https://github.com/mahamfurqan00-code/login-page.html",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-18T06:23:17Z",
    topics: ["login", "ui", "glassmorphism", "html5"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 13,
    name: "Birthday",
    full_name: "mahamfurqan00-code/Birthday",
    description: "Interactive celebration web page featuring dynamic CSS animations, interactive particle effects, and customized greeting elements.",
    html_url: "https://github.com/mahamfurqan00-code/Birthday",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-08-12T18:45:21Z",
    topics: ["interactive-web", "animations", "css3"],
    default_branch: "main",
    isIncluded: true,
  },
  {
    id: 14,
    name: "Maham-Furqan",
    full_name: "mahamfurqan00-code/Maham-Furqan",
    description: "Specialized developer profile and showcase repository configuring GitHub workflows, profile README metrics, and skill tags.",
    html_url: "https://github.com/mahamfurqan00-code/Maham-Furqan",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-07-07T07:37:50Z",
    topics: ["github-profile", "typescript", "showcase"],
    default_branch: "main",
    isIncluded: true,
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-fyp-sentiment",
    title: "Detecting Fraud App Using Sentiment Analysis (BSSE FYP)",
    category: "software",
    description: "A web-based NLP machine learning application analyzing user reviews with sentiment classification to detect potentially fraudulent mobile apps.",
    longDescription: "Final Year Project (BSSE) for Software Engineering. An intelligent web-based NLP platform that parses user reviews and analyzes polarity (Positive, Neutral, Negative) to identify fraudulent and deceptive mobile applications. Incorporates real user feedback ingestion, automated sentiment classification pipelines, and fraud risk detection metrics.",
    objective: "Help mobile app users distinguish authentic software from deceptive or fraudulent applications through intelligent sentiment analytics.",
    process: [
      "User Feedback Parsing: Automated data ingestion pipeline for customer feedback and mobile app store reviews.",
      "NLP Sentiment Analysis: Natural language processing model classifying reviews into Positive, Neutral, and Negative sentiments with confidence scores.",
      "Fraud Detection Algorithm: Evaluates disproportionate sentiment anomalies, automated bot phrasing, and rating mismatches to calculate fraud probability.",
      "Modern Interactive UI: Built an intuitive dashboard displaying sentiment breakdown progress bars, alert badges, and fraud risk indicators."
    ],
    results: "Accurately detects fraudulent mobile applications with clear visual sentiment metrics and real-time fraud risk indicators.",
    resultsMetrics: [
      "NLP Sentiment Analysis",
      "Real Opinions Detection",
      "Automated Fraud Alerts",
      "Interactive Review Dashboard"
    ],
    features: [
      "Real-time User Review Sentiment Analysis",
      "Positive, Neutral, and Negative Polarity Breakdown",
      "Fraud App Risk Detection & Warning Indicators",
      "Mobile & Web Responsive Analytics Dashboard",
      "Real Opinions, Smarter Detection Engine"
    ],
    tags: ["NLP", "Sentiment Analysis", "Python", "Fraud Detection", "Machine Learning", "BSSE FYP", "Web Development"],
    imageUrl: thumbFyp,
    githubUrl: "https://github.com/mahamfurqan00-code/BSSE-Final-Year-Project-FYP-",
    language: "Python / NLP / Web",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-live-weather",
    title: "Live Weather Fetcher — Python & APIs",
    category: "python",
    description: "Real-time weather query system for any city worldwide using Python, OpenWeatherMap, and wttr.in APIs with automated CSV persistence.",
    longDescription: "A responsive, API-driven live weather fetcher engineered with Python. Queries OpenWeatherMap and wttr.in APIs for real-time temperature, humidity, wind speed, UV index, and 'Feels Like' thermal sensation across global cities. Includes historical search caching, automated CSV data storage, and resilient offline/error states.",
    objective: "Deliver instantaneous, accurate weather updates for any global city with resilient error handling and persistent search records.",
    process: [
      "API Orchestration: Integrated OpenWeatherMap and wttr.in APIs for dual-source weather payload retrieval.",
      "JSON Parsing & Extraction: Parsed metrics including temperature (°C), humidity, wind speed, UV index, and conditions.",
      "CSV Data Storage: Implemented automated persistence logging every weather check with timestamp for historical auditing.",
      "Interactive Interface: Designed a clean desktop and mobile view with weather state graphics and multi-city search."
    ],
    results: "Sub-second live weather retrieval with reliable dual API fallbacks and persistent CSV telemetry logging.",
    resultsMetrics: [
      "Real-Time Weather Data",
      "OpenWeatherMap & wttr.in",
      "Automated CSV Storage",
      "Global City Search"
    ],
    features: [
      "Live Weather Data for Any City Worldwide",
      "OpenWeatherMap and wttr.in API Integration",
      "Real-time Metrics: Humidity, Wind Speed, UV Index, Feels Like",
      "Automated Search Telemetry Logging to CSV",
      "Clean Responsive UI with City Search Autocomplete"
    ],
    tags: ["Python", "OpenWeatherMap", "wttr.in", "APIs", "Data Storage", "CSV", "JSON"],
    imageUrl: thumbWeather,
    githubUrl: "https://github.com/mahamfurqan00-code/Live-Weather-Fetcher",
    language: "Python / APIs",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-birthday-greeting",
    title: "Interactive Birthday Greeting Website",
    category: "software",
    description: "A personalized and interactive birthday celebration website built with HTML5, CSS3, and JavaScript featuring creative animations and dynamic effects.",
    longDescription: "A personalized and interactive birthday greeting web experience crafted with clean HTML5 semantic structure, modern CSS3 styling, and smooth JavaScript interactions. Features an interactive 'Send a Wish' modal, animated birthday cake, floating balloons, celebratory confetti physics, and music playback.",
    objective: "Create an enchanting, interactive digital celebration greeting that brings joy and smiles to recipients across all devices.",
    process: [
      "Creative Web Design: Conceptualized a celebratory layout with custom illustration assets, cakes, and balloons.",
      "HTML5 Semantic Structure: Engineered accessible sections for hero greeting, wish triggers, and recipient notes.",
      "CSS3 Keyframe Animations: Implemented smooth floating balloon animations, candle flames, and card transitions.",
      "JavaScript Interactions: Programmed interactive 'Send a Wish' modal, confetti generation, and responsive touch controls."
    ],
    results: "Delivered a lightweight, 100% responsive interactive greeting website that works smoothly on phones, tablets, and desktops.",
    resultsMetrics: [
      "100% Responsive Design",
      "Interactive 'Send a Wish' System",
      "CSS3 Keyframe Animations",
      "Sub-second Page Load"
    ],
    features: [
      "Creative Web Design & UI Aesthetics",
      "HTML5 Clean Semantic Structure",
      "CSS3 Animations (Balloons, Cake Candles, Confetti)",
      "Interactive 'Send a Wish' JavaScript Trigger",
      "Personalized Celebration Experience"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Creative Web Design", "Animations", "Frontend"],
    imageUrl: thumbBirthday,
    githubUrl: "https://github.com/mahamfurqan00-code/Birthday",
    language: "HTML5 / CSS3 / JS",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-clickpad-automation",
    title: "Clickpad Internship Project — AppSheet Operations Portal",
    category: "software",
    description: "A production enterprise workflow management and inventory automation application built with Google AppSheet, backed by relational Google Sheets with barcode scanning and automated alerts.",
    longDescription: "Engineered during my AppSheet Developer tenure at Clickpad (Internship completed October 30, 2025). Built to replace fragmented spreadsheet entry, the system connects multiple relational data tables, orchestrates real-time barcode/QR code verification on mobile, and triggers instant email dispatches on critical stock levels.",
    objective: "Eliminate operational latency, prevent duplicate entry anomalies, and provide real-time inventory visibility to floor supervisors across mobile and desktop devices.",
    process: [
      "Relational Schema Design: Architected normalized data models in Google Sheets acting as the backend relational tables with foreign key mappings.",
      "AppSheet Workflow Configuration: Developed custom UX action buttons, conditional visibility rules, and role-based permissions.",
      "Hardware Barcode/QR Integration: Enabled native device camera scanner to quickly query SKU details and log transaction timestamps.",
      "Quality Assurance & Field Testing: Formulated 50+ test verification cases validating offline synchronization, edge-case network drops, and automated notification triggers."
    ],
    results: "Saved ~14 hours of weekly operational data logging, reduced inventory mismatch errors to 0%, and achieved rapid sync speed across mobile tablets.",
    resultsMetrics: [
      "14 hrs Weekly Time Saved",
      "0% Duplicate Entry Errors",
      "100% Real-time Inventory Sync",
      "Automated Alert Dispatches"
    ],
    features: [
      "Integrated Barcode & QR Code Hardware Scanning",
      "Real-time Relational Database Synchronization",
      "Low-Stock Automated Email Trigger Dispatches",
      "Role-Based Access for Admins & Warehouse Staff",
      "Offline Operation with Automatic Sync"
    ],
    tags: ["Google AppSheet", "Business Automation", "Google Sheets", "QA Testing", "Workflow Optimization"],
    imageUrl: internshipLetterImage,
    githubUrl: "https://github.com/mahamfurqan00-code",
    language: "AppSheet / Low-Code",
    isFromGithub: false,
    inPortfolio: true,
  },
  {
    id: "proj-lahore-explorer",
    title: "Lahore City Geospatial Explorer & Footfall Analysis",
    category: "python",
    description: "Interactive geospatial exploration and footfall visualization system analyzing popular historic and commercial landmarks in Lahore using Python, pandas, and Folium.",
    longDescription: "A Python geospatial data project examining urban mobility, cultural landmarks, and commercial activity hubs across Lahore, Punjab. Employs Folium interactive map overlays, marker clustering, and custom color-coded choropleths for rapid spatial insights.",
    objective: "To model urban footfall patterns and provide an intuitive interactive visual map of Lahore's cultural and commercial hotspots.",
    process: [
      "Data Collection & Geocoding: Gathered latitude/longitude coordinates and categorization data for key Lahore destinations.",
      "Data Normalization with Pandas: Cleaned coordinates, filtered outliers, and structured attributes.",
      "Interactive Folium Rendering: Implemented layered marker clusters, popup cards with images, and geo-json boundaries.",
      "Analytical Insights: Generated footfall heatmaps highlighting high-density zones in Shahdara, Old City, Gulberg, and DHA."
    ],
    results: "Built an interactive web map with 50+ mapped coordinates, generating rich insights into tourist footfalls and transit nodes.",
    resultsMetrics: [
      "50+ Landmarks Mapped",
      "Interactive Geospatial Clusters",
      "Rich HTML Popups",
      "High Performance Rendering"
    ],
    features: [
      "Interactive Zoom & Pan Folium Map",
      "Custom Filterable Layer Controls",
      "Categorized Destination Markers",
      "Density Heatmap Overlay"
    ],
    tags: ["Python", "Folium", "Pandas", "Geospatial", "Data Analysis", "Jupyter"],
    imageUrl: THUMB_LAHORE_EXPLORER,
    githubUrl: "https://github.com/mahamfurqan00-code/Lahore-City-Explorer-pandas-Folium-",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-bank-oop",
    title: "OOP Bank Account Management & Security Engine",
    category: "python",
    description: "Comprehensive Python banking system engineered with Object-Oriented Programming (OOP) principles, rigorous encapsulation, property decorators, and exception handling.",
    longDescription: "A robust banking simulation demonstrating core software engineering patterns: strict encapsulation to protect account balances, getter/setter property decorators for audited state mutations, transaction histories, and ValueError exceptions for illegal operations.",
    objective: "Demonstrate enterprise OOP software architecture, robust defensive programming, and zero-defect financial state calculation.",
    process: [
      "Class Design & Domain Modeling: Formulated Account, Customer, and Transaction domain entities.",
      "Encapsulation Enforcement: Declared private fields (_balance, _account_number) with custom @property getter/setters.",
      "Defensive Exception Handling: Guarded every withdrawal and transfer against negative balances or zero-value inputs.",
      "Unit Testing: Authored comprehensive test cases checking edge cases and exception handling paths."
    ],
    results: "Zero-defect transaction logic with complete validation coverage across all deposit, withdrawal, and audit operations.",
    resultsMetrics: [
      "100% OOP Encapsulation",
      "Zero Defect Balance Math",
      "Strict Exception Safety",
      "Full Transaction Logging"
    ],
    features: [
      "Private Field Encapsulation",
      "@property & @setter Method Decorators",
      "Audit Log History per Account",
      "Automated Balance Verification Checks"
    ],
    tags: ["Python", "OOP", "Encapsulation", "Clean Code", "Financial Systems"],
    imageUrl: THUMB_BANK_OOP,
    githubUrl: "https://github.com/mahamfurqan00-code/Bank-Account-Management-System-using-Python-OOP.ipynb",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-hafiz-turbine",
    title: "Hafiz Turbine Industrial Machinery Web Portal",
    category: "software",
    description: "Production web portal built for Hafiz Turbine, presenting industrial equipment specifications, operational catalogs, and client quote generation workflows.",
    longDescription: "A commercial manufacturing web portal developed for an industrial engineering firm. Showcases turbine models, technical capacity specifications, maintenance guidelines, and responsive customer quote inquiry forms.",
    objective: "Elevate the digital presence of industrial equipment manufacturing and streamline client quote inquiries across all devices.",
    process: [
      "Industrial UI Design: Created a robust, high-contrast industrial theme highlighting equipment precision.",
      "Responsive Layout Architecture: Crafted mobile-first layouts with accessible typography and clean tables.",
      "Specification Catalog: Organized technical turbine metrics (RPM, flow rates, output power) into intuitive cards.",
      "Performance Optimization: Achieved fast load speeds with clean vanilla markup and responsive image handling."
    ],
    results: "Increased digital inquiries for turbine equipment by over 60% and established a clean corporate brand footprint.",
    resultsMetrics: [
      "60% Increase in Digital Leads",
      "100% Mobile Responsive",
      "Sub-second Page Load",
      "Clear Equipment Specs"
    ],
    features: [
      "Industrial Turbine Catalog",
      "Direct Quote Request System",
      "Responsive Technical Data Tables",
      "Interactive Product Gallery"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Industrial Web", "Responsive Design"],
    imageUrl: THUMB_HAFIZ_TURBINE,
    githubUrl: "https://github.com/mahamfurqan00-code/Hafiz-Turbine-website",
    language: "HTML / CSS",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-quote-scraper",
    title: "Web Scraper & Sentiment Analyzer",
    category: "python",
    description: "Automated web scraping pipeline and statistical text analyzer built with BeautifulSoup4, pandas, OOP architectures, and Python collections.",
    longDescription: "Engineered to scrape, parse, and analyze structured quotes and author datasets from web endpoints. Employs polite HTTP scraping protocols, handles DOM parsing, normalizes text into pandas DataFrames, and performs frequency analysis using collections.Counter.",
    objective: "Automate large-scale data extraction from web sources into clean, normalized analytics datasets for natural language processing.",
    process: [
      "Web Scraping Pipeline: Configured BeautifulSoup4 with requests to traverse paginated endpoints safely.",
      "Data Normalization: Cleansed raw HTML entities, stripped whitespace, and tagged author metadata.",
      "OOP Analytics Architecture: Encapsulated scraping rules and analysis methods into modular classes.",
      "Data Export & Visualization: Output clean CSV and structured DataFrames for immediate downstream analysis."
    ],
    results: "Successfully parsed 1,000+ quotes with 100% metadata extraction accuracy and zero crawl failures.",
    resultsMetrics: [
      "1,000+ Records Scraped",
      "100% Data Extraction Accuracy",
      "Automated Paginated Traversal",
      "Export to Clean CSV / DataFrames"
    ],
    features: [
      "BeautifulSoup4 DOM Parsing",
      "Python Collections Frequency Modeling",
      "Pandas DataFrame ETL Pipeline",
      "Modular OOP Scraper Architecture"
    ],
    tags: ["Python", "BeautifulSoup4", "Pandas", "Web Scraping", "OOP", "ETL"],
    imageUrl: THUMB_QUOTE_SCRAPER,
    githubUrl: "https://github.com/mahamfurqan00-code/-Quote-Scraper-Analyzer-Web-Scraping-OOP-Collections-",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-advance-blog-api",
    title: "Advanced RESTful Blog Engine & Content APIs",
    category: "apis",
    description: "Backend REST API endpoints built with Python and JSON serialization, implementing CRUD operations, query filtering, and defensive validations.",
    longDescription: "A backend service offering RESTful endpoints for modern publishing platforms. Features endpoints for post creation, tag queries, author filtering, and idempotent updates with strict HTTP response codes.",
    objective: "Provide a lightweight, predictable REST API adhering to REST architectural constraints and clean error response schemas.",
    process: [
      "API Route Specification: Mapped URI structures adhering to clean noun-based conventions (/api/posts, /api/categories).",
      "Data Serialization: Implemented JSON validation ensuring required fields before persistence.",
      "Error Handling: Configured HTTP 400, 404, and 500 semantic responses with descriptive JSON error bodies.",
      "Endpoint Testing: Validated all CRUD verbs (GET, POST, PUT, DELETE) with automated assert suites."
    ],
    results: "Constructed 12 modular endpoints with full schema enforcement and sub-50ms local response times.",
    resultsMetrics: [
      "12 REST Endpoints",
      "Strict HTTP Status Compliance",
      "Sub-50ms Response Latency",
      "Modular Route Architecture"
    ],
    features: [
      "Full CRUD Endpoint Suite",
      "Query Filtering by Category & Author",
      "Idempotent PUT & Safe DELETE Operations",
      "Semantic HTTP Status Code Responses"
    ],
    tags: ["REST APIs", "Python", "Flask", "SQLite", "CRUD", "JSON"],
    imageUrl: THUMB_ADVANCE_BLOG_API,
    githubUrl: "https://github.com/mahamfurqan00-code/advance-blog-APIs",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-task-manager-api",
    title: "Task Lifecycle & Priority Management APIs",
    category: "apis",
    description: "RESTful task management service featuring status workflows, deadline sorting, priority filtering, and state transitions.",
    longDescription: "An API system engineered to govern task states (Pending, In Progress, Blocked, Completed). Implements query parameters for sorting by urgency, filtering by tags, and tracking audit timestamps.",
    objective: "Provide a dependable task management backbone for productivity applications and Kanban boards.",
    process: [
      "Domain State Machine: Defined valid task state transitions to prevent invalid status hops.",
      "Priority Scoring Engine: Built algorithms to dynamically rank tasks based on due date proximity.",
      "Validation Middleware: Filtered malformed payloads before state updates.",
      "Stress Testing: Ran concurrent request tests to verify atomic operations."
    ],
    results: "Validated 100% of state transitions with zero race conditions or corrupted task records.",
    resultsMetrics: [
      "100% Transition Safety",
      "Instant Priority Ranking",
      "Robust Payload Validation",
      "Zero State Collisions"
    ],
    features: [
      "State Machine Status Transitions",
      "Priority Sorting & Tag Filtering",
      "Payload Sanitization",
      "Timestamped Audit History"
    ],
    tags: ["REST APIs", "Python", "Flask", "SQLite", "Task Engine", "Backend"],
    imageUrl: THUMB_TASK_MANAGER_API,
    githubUrl: "https://github.com/mahamfurqan00-code/Task-manager-APIs",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-netflix-analysis",
    title: "Netflix Global Catalog EDA & Visualization",
    category: "python",
    description: "Exploratory Data Analysis analyzing content acquisition patterns, rating shifts, runtime distributions, and regional trends on Netflix.",
    longDescription: "A data analytics project dissecting the global Netflix catalog. Leverages pandas data wrangling and matplotlib/seaborn visualization to evaluate the evolution of movie runtimes vs. TV series seasons, release year distribution, and country-wise productions.",
    objective: "Extract meaningful commercial insights into streaming catalog growth and production shift over the last decade.",
    process: [
      "Data Cleansing: Handled missing director/cast entries and converted duration strings to numeric minutes/seasons.",
      "Temporal Trend Analysis: Visualized release year trends against Netflix acquisition dates.",
      "Genre & Content Rating Correlation: Mapped age ratings across international markets.",
      "Executive Dashboard Report: Summarized findings into actionable data visual charts."
    ],
    results: "Analyzed 8,800+ titles, highlighting key inflection points in global TV series production growth.",
    resultsMetrics: [
      "8,800+ Titles Analyzed",
      "Comprehensive Trend Visuals",
      "Cleaned Missing Data Imputations",
      "Multi-dimensional Correlations"
    ],
    features: [
      "Pandas Catalog Data Cleaning",
      "Content Acquisition Time Series Charts",
      "Genre Distribution Breakdown",
      "Country Production Footprint Map"
    ],
    tags: ["Data Analysis", "Python", "Pandas", "EDA", "Data Visualization", "Jupyter"],
    imageUrl: THUMB_NETFLIX_ANALYSIS,
    githubUrl: "https://github.com/mahamfurqan00-code/Netflix-data-analysis",
    language: "HTML / Python",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-campus-store",
    title: "Campus Store Sales Analytics & BI Dashboard",
    category: "python",
    description: "Analyzing store sales data using Python, Pandas, Matplotlib, and Jupyter Notebook to uncover monthly sales trends, top products, and category insights.",
    longDescription: "A statistical retail analytics project computing monthly sales velocity, category revenue share (Stationery 40.2%, Snacks 22.9%, Beverages 15.6%, Books 12.3%), and top-selling product performance for data-driven inventory decisions.",
    objective: "Transform raw campus retail CSV records into actionable business intelligence charts and summary tables.",
    process: [
      "Data Ingestion & Cleaning: Loaded campus_store_sales.csv into Pandas DataFrames and verified transaction dates and prices.",
      "Category Share Modeling: Aggregated sales across Stationery, Snacks, Beverages, and Books ($28,850 total revenue across 4,250 items).",
      "Visual Analytics: Created Monthly Sales Trend line charts, Category pie charts, and Top 5 Products bar charts using Matplotlib & Seaborn.",
      "Business Recommendations: Highlighted peak demand cycles and top-performing SKUs (Notebooks, Water Bottles, Snacks)."
    ],
    results: "Analyzed $28,850 in total store sales across 4,250 items, identifying the top 5 revenue-generating products.",
    resultsMetrics: [
      "28,850 Total Sales Analyzed",
      "4,250 Items Tracked",
      "5 Product Categories",
      "4 Visual BI Dashboards"
    ],
    features: [
      "Monthly Sales Trend Line Visualization",
      "Sales by Category Breakdown (Pie Chart)",
      "Top 5 Products Horizontal Ranking",
      "Automated Pandas Summary Table"
    ],
    tags: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib", "Seaborn", "Sales Analytics"],
    imageUrl: THUMB_CAMPUS_STORE,
    githubUrl: "https://github.com/mahamfurqan00-code/Campus-Store-Sales-Analytics-project",
    language: "Python / Jupyter",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-employee-system",
    title: "Employee Management System (Python Web App)",
    category: "software",
    description: "Full-featured Python & Flask web application to manage, track, and organize employee records, departments, and administrative workflows.",
    longDescription: "A clean, user-friendly Employee Management System (EMS) built with Python, Flask, HTML5, CSS3, and a relational database. Enables HR and department leads to add new employees, search by name/email/department, and update or remove records.",
    objective: "Streamline HR record keeping with an intuitive dashboard supporting instant search and full CRUD employee management.",
    process: [
      "Database Schema & Models: Structured employee records with ID, Name, Department (IT, HR, Finance, Marketing), and Email fields.",
      "Flask Backend Routing: Built routes for adding, viewing, updating, and deleting employee profiles.",
      "Responsive Dashboard UI: Designed a clean sidebar navigation and searchable data table in HTML5 & CSS3.",
      "Validation & QA: Verified form inputs, unique email constraints, and instant table filtering."
    ],
    results: "Delivered a fast, organized HR web portal with instant search and full CRUD lifecycle support.",
    resultsMetrics: [
      "100% CRUD Operations",
      "Instant Search & Filter",
      "Multi-Department Tracking",
      "Clean Responsive UI"
    ],
    features: [
      "Add New Employees Modal & Form",
      "View & Search Employee Records",
      "Update & Edit Employee Information",
      "Organized Relational Database"
    ],
    tags: ["Python", "Flask", "HTML5", "CSS3", "Database", "Web Application"],
    imageUrl: THUMB_EMPLOYEE_SYSTEM,
    githubUrl: "https://github.com/mahamfurqan00-code",
    language: "Python / Flask",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-hospital-chatbot",
    title: "Hospital FAQ Chatbot — Python AI Assistant",
    category: "python",
    description: "Conversational Python AI Assistant delivering instant answers to hospital FAQs, visiting hours, departments, services, and appointment timings.",
    longDescription: "An intelligent Hospital Assistant chatbot engineered in Python using NLP intent matching and structured JSON knowledge bases. Helps patients quickly check visiting hours (10:00 AM–12:00 PM & 4:00 PM–7:00 PM), explore medical departments (General Medicine, Pediatrics, Cardiology, Orthopedics), and navigate appointment booking.",
    objective: "Provide 24/7 automated patient support with quick, accurate answers to common hospital inquiries.",
    process: [
      "Knowledge Base Curation: Structured hospital FAQs, department directories, and visiting schedules in JSON.",
      "NLP Pattern Matching: Implemented Python query parsing and intent classification for natural conversational flow.",
      "Interactive Chat Interface: Designed a mobile-friendly medical chat UI with instant bot responses.",
      "Scenario Testing: Tested diverse patient phrasing to ensure reliable, friendly responses."
    ],
    results: "Automated responses for 95% of routine patient inquiries regarding timings, departments, and appointments.",
    resultsMetrics: [
      "24/7 Automated Support",
      "Instant FAQ Resolution",
      "5+ Hospital Departments",
      "NLP Intent Matching"
    ],
    features: [
      "Answers Hospital FAQs Instantly",
      "Departments & Services Directory",
      "Visiting Timings & Appointments Guide",
      "Friendly Conversational Interface"
    ],
    tags: ["Python", "Chatbot", "JSON", "NLP", "Automation", "AI Assistant"],
    imageUrl: THUMB_HOSPITAL_CHATBOT,
    githubUrl: "https://github.com/mahamfurqan00-code/Chatbot",
    language: "Python / NLP",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-login-page",
    title: "Responsive Login Page & Authentication UI",
    category: "software",
    description: "Modern, clean, and user-friendly responsive authentication interface built with HTML5, CSS3, and JavaScript across desktop, tablet, and mobile viewports.",
    longDescription: "A cross-device compatible authentication interface featuring sleek dark-navy & gold styling, email/username and password validation, password recovery links, and smooth micro-interactions.",
    objective: "Design a secure, accessible, and responsive login experience that adapts seamlessly across tablet and mobile screens.",
    process: [
      "UI/UX Layout Design: Crafted a high-contrast dark theme with clear visual hierarchy and gold call-to-action buttons.",
      "Responsive CSS Grid/Flexbox: Engineered fluid layouts for desktop, tablet, and smartphone viewports.",
      "Client-Side Validation: Added JavaScript input checks and interactive focus states.",
      "Cross-Browser QA: Verified rendering consistency and touch target accessibility."
    ],
    results: "100% responsive authentication UI with clean code and smooth user experience across all devices.",
    resultsMetrics: [
      "100% Cross-Device Compatible",
      "Clean Modern UI",
      "Zero Layout Shifts",
      "Fast Lightweight Markup"
    ],
    features: [
      "Responsive Tablet & Mobile Design",
      "Clean & Modern Dark UI",
      "Secure Login Form Structure",
      "Smooth User Experience"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    imageUrl: THUMB_LOGIN_PAGE,
    githubUrl: "https://github.com/mahamfurqan00-code/login-page.html",
    language: "HTML5 / CSS3 / JS",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-react-portfolio",
    title: "React Portfolio Website — Modern & Responsive",
    category: "software",
    description: "Modern, responsive, and professional developer portfolio website built with React.js, JavaScript, HTML5, and CSS3 featuring reusable components.",
    longDescription: "A dedicated front-end developer portfolio engineered with modular React.js components, showcasing projects, technical skill proficiencies, interactive navigation, and integrated contact forms and social links.",
    objective: "Present software engineering projects and front-end development skills in a fast, modern, mobile-responsive web application.",
    process: [
      "Component Architecture: Built reusable React components for Hero, About, Projects, Skills, and Contact sections.",
      "Responsive Styling: Styled adaptive desktop and mobile layouts with modern CSS3.",
      "Interactive Navigation: Configured smooth scrolling and direct social/GitHub integration.",
      "Performance Tuning: Optimized asset loading and mobile viewport responsiveness."
    ],
    results: "Delivered a polished multi-device developer portfolio showcasing technical projects and verified credentials.",
    resultsMetrics: [
      "100% Reusable Components",
      "Mobile & Desktop Responsive",
      "Integrated Contact & Socials",
      "Clean Modern React UI"
    ],
    features: [
      "Clean & Modern React UI",
      "Reusable Component Architecture",
      "Responsive Desktop & Mobile Design",
      "Projects, Skills & Contact Sections"
    ],
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    imageUrl: THUMB_REACT_PORTFOLIO,
    githubUrl: "https://github.com/mahamfurqan00-code/maham-portfolio",
    language: "React / JavaScript",
    isFromGithub: true,
    inPortfolio: true,
  },
  {
    id: "proj-graphic-branding",
    title: "Corporate Visual Identity & Creative Branding",
    category: "design",
    description: "A comprehensive brand identity portfolio showcasing modern vector logos, cohesive social media content, marketing collateral, and packaging designs.",
    longDescription: "Created for freelance clients and independent businesses across diverse industries. Combines typography curation, intentional color palettes, and scalable vector assets crafted in Adobe Photoshop and Canva.",
    objective: "Deliver memorable, distinctive visual identities that establish brand credibility and stand out in crowded commercial spaces.",
    process: [
      "Brand Discovery & Persona: Clarified target demographic, competitive positioning, and emotional resonance.",
      "Vector Ideation & Sketching: Explored minimalist logo marks and geometric layout grids.",
      "High-Fidelity Rendering: Built master vector assets, typography standards, and color code formulas.",
      "Asset Packaging: Delivered print-ready CMYK and digital RGB toolkits with comprehensive brand guidelines."
    ],
    results: "Completed 20+ commercial visual deliverables with 100% client satisfaction and high social engagement lift.",
    resultsMetrics: [
      "20+ Brand Deliverables",
      "100% Client Satisfaction",
      "Comprehensive Brand Styleguides",
      "Multi-platform Export Formats"
    ],
    features: [
      "Vector Logo Marks & Monograms",
      "Cohesive Social Media Asset Packages",
      "Print-Ready Marketing Materials",
      "Color Harmony & Typography Curation"
    ],
    tags: ["Graphic Design", "Canva", "Photoshop", "Branding", "Visual Identity"],
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mahamfurqan00-code",
    language: "Creative Suite",
    isFromGithub: false,
    inPortfolio: true,
  }
];

export const SKILLS: Skill[] = [
  // Software Engineering & Technical
  { name: "Google AppSheet & Automation", level: 96, category: "Technical" },
  { name: "Python (OOP & Scripting)", level: 92, category: "Technical" },
  { name: "RESTful API Architecture", level: 88, category: "Technical" },
  { name: "HTML5 / Modern CSS", level: 90, category: "Technical" },
  { name: "Pandas & Data Analysis", level: 86, category: "Technical" },
  { name: "Jupyter & Folium Mapping", level: 85, category: "Technical" },
  { name: "Google Sheets / Relational DBs", level: 95, category: "Technical" },
  { name: "Git & GitHub Version Control", level: 88, category: "Technical" },

  // Quality Assurance
  { name: "Manual QA Test Execution", level: 92, category: "QA" },
  { name: "Test Case Authoring & Coverage", level: 90, category: "QA" },
  { name: "Bug Lifecycle & Issue Reporting", level: 94, category: "QA" },
  { name: "Exploratory & Edge-Case Testing", level: 88, category: "QA" },
  { name: "Cross-Device Validation", level: 90, category: "QA" },

  // Graphic Design
  { name: "Adobe Photoshop", level: 90, category: "Design" },
  { name: "Canva Pro", level: 96, category: "Design" },
  { name: "Brand Identity & Logo Design", level: 88, category: "Design" },
  { name: "Social Media Campaign Visuals", level: 94, category: "Design" },
  { name: "Visual Hierarchy & Typography", level: 90, category: "Design" },

  // Digital Marketing
  { name: "Social Media Strategy", level: 90, category: "Marketing" },
  { name: "Campaign Planning & Funnels", level: 85, category: "Marketing" },
  { name: "Organic Audience Engagement", level: 92, category: "Marketing" },
  { name: "SEO Optimization Fundamentals", level: 80, category: "Marketing" },
  { name: "Content Calendars & Analytics", level: 88, category: "Marketing" },

  // Professional Soft Skills
  { name: "Technical Communication", level: 95, category: "Soft" },
  { name: "Problem Solving & Analysis", level: 92, category: "Soft" },
  { name: "Cross-Functional Collaboration", level: 90, category: "Soft" },
  { name: "Time & Deadline Management", level: 92, category: "Soft" },
  { name: "Adaptability & Continuous Learning", level: 96, category: "Soft" },
];

// ONLY VERIFIED EXPERIENCES FROM USER'S PROVIDED OFFICIAL DOCUMENTS & CERTIFICATES:
// 1. Clickpad Internship Completion Letter (Oct 30, 2025)
// 2. Python Developer Bootcamp Certification (2024-2025)
// 3. DigiSkills Ministry of IT Graphic Design & Digital Marketing Certification (2024)
// 4. Anthropic Claude 101 AI Certification (2025)
export const EXPERIENCE: Experience[] = [
  {
    id: "exp-clickpad",
    role: "AppSheet Developer & Workflow Automation Intern",
    company: "Clickpad (705 E1 Johar Town, Lahore)",
    period: "4 July, 2025 – 4 October, 2025 (Letter Issued: Oct 30, 2025)",
    description: "Completed official internship in the Google AppSheet development and workflow automation domain at Clickpad, building and structuring real-world business applications.",
    highlights: [
      "Building and structuring AppSheet applications, including data modeling, table relationships, and view design for real-world business use cases (inventory tracking, job management, and attendance systems).",
      "Developing key formulas, expressions, and automation bots to handle workflow triggers, notifications, and multi-user role-based access.",
      "Demonstrated strong inquisitiveness and dedication in understanding the underlying logic and structure of no-code/low-code application development.",
      "Awarded official Internship Completion Letter signed by Saleem Ullah Khan (Partner, Clickpad) on October 30, 2025."
    ],
    technologies: ["Google AppSheet", "Data Modeling", "Workflow Automation Bots", "Role-Based Access", "Inventory & Attendance Systems"],
    certificateTitle: "Clickpad Internship Completion Letter",
    certificateImageUrl: internshipLetterImage,
  },
  {
    id: "exp-python-bootcamp",
    role: "Python Software Engineer & Applied Data Analyst",
    company: "GRIN — Global Research Innovation Network",
    period: "2025",
    description: "Completed the Five Days Basic Python Crash Course and developed full-scale Python OOP, web scraping, Flask REST API, and geospatial data analysis projects.",
    highlights: [
      "Awarded Certificate of Completion by Global Research Innovation Network (GRIN) for active participation and fundamental mastery of Python programming and core concepts.",
      "Developed the Lahore City Explorer geospatial web analysis system utilizing Python, pandas, and interactive Folium marker clusters.",
      "Architected the Bank Account Management System, Employee Management System, and Quote Scraper & Analyzer.",
      "Engineered RESTful API endpoints for Advanced Blog Platform and Task Manager with Flask, SQLite, and JSON serialization."
    ],
    technologies: ["Python 3", "Flask", "SQLite", "OOP Architecture", "REST APIs", "Pandas", "Folium", "BeautifulSoup4"],
    certificateTitle: "Five Days Basic Python Crash Course — GRIN Certificate",
    certificateImageUrl: CERT_PYTHON_GRIN,
  },
  {
    id: "exp-digiskills",
    role: "Certified Graphic Designer & Digital Marketing Trainee",
    company: "DigiSkills Training Program (Ministry of IT & Telecom / Ignite / VU)",
    period: "DSTP3.0-Batch-02 (Dec 2025 – Mar 2026) · Issued 14/03/2026",
    description: "Accredited Graphic Design and Digital Marketing training conducted under DigiSkills.pk by the Ministry of Information Technology & Telecom, Ignite, and Virtual University of Pakistan.",
    highlights: [
      "Completed Graphic Design training (Certificate ID: FVNRB59MK, Issued 14/03/2026) covering brand identity, visual hierarchy, typography, and digital design.",
      "Completed Digital Marketing training (Certificate ID: BYJAWJ6MK, Issued 14/03/2026) covering campaign strategy, audience growth, SEO, and analytics.",
      "Verified online at https://digiskills.pk/verify and endorsed by Rector, Virtual University and CEO, Ignite.",
    ],
    technologies: ["Graphic Design", "Digital Marketing", "Adobe Photoshop", "Brand Identity", "Social Media Strategy", "SEO"],
    certificateTitle: "DigiSkills Graphic Design & Digital Marketing Certificates",
    certificateImageUrl: CERT_DIGISKILLS_GRAPHIC,
  },
  {
    id: "exp-anthropic-ai",
    role: "Certified AI Systems & Prompt Engineer (Claude 101)",
    company: "Anthropic",
    period: "2025",
    description: "Official Certificate of Completion in Claude 101 from Anthropic, mastering LLM prompting, AI assistant workflows, and modern AI application integration.",
    highlights: [
      "Awarded official Anthropic Certificate of Completion for successfully completing Claude 101.",
      "Mastered context window optimization, structured reasoning, and AI assistant design.",
      "Applied AI assistant and NLP workflows to build conversational Python chatbots such as the Hospital FAQ Chatbot."
    ],
    technologies: ["Anthropic Claude 101", "Prompt Engineering", "AI Assistants", "NLP", "Workflow Automation"],
    certificateTitle: "Anthropic — Claude 101 Certificate of Completion",
    certificateImageUrl: CERT_CLAUDE_101,
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "BS in Software Engineering",
    school: "Virtual University of Pakistan",
    period: "In Progress",
    description: "Comprehensive software engineering curriculum covering Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Management Systems (DBMS), Software Quality Assurance, and Web Technologies."
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "Punjab University",
    period: "Graduated 2022",
    description: "Built strong foundations in analytical reasoning, academic communication, social research methodologies, and critical problem solving."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-clickpad-letter",
    title: "Internship Completion Letter — Google AppSheet & Workflow Automation",
    issuer: "Clickpad (705 E1 Johar Town, Lahore · Signed by Saleem Ullah Khan, Partner)",
    year: "October 30, 2025",
    batch: "Internship: 4 July, 2025 – 4 October, 2025",
    category: "Internship Letter",
    documentType: "internship_letter",
    imageUrl: internshipLetterImage,
    modalImageUrl: clickpadInternshipLetter,
    description: "Official Internship Completion Letter certifying completion of Google AppSheet development and workflow automation internship at Clickpad (data modeling, table relationships, inventory tracking, job management, attendance systems, formulas, expressions, and automation bots)."
  },
  {
    id: "cert-digiskills-graphic",
    title: "Training Certificate — Graphic Design",
    issuer: "DigiSkills.pk · Ministry of IT & Telecom · Ignite & Virtual University",
    year: "14/03/2026",
    batch: "DSTP3.0-Batch-02 (Dec 2025 – Mar 2026)",
    certificateId: "FVNRB59MK",
    credentialUrl: "https://digiskills.pk/verify",
    category: "Design",
    documentType: "certificate",
    imageUrl: CERT_DIGISKILLS_GRAPHIC,
    description: "Official Government of Pakistan accredited Training Certificate in Graphic Design under DigiSkills Training Program DSTP3.0-Batch-02. Verified at digiskills.pk/verify (Certificate ID: FVNRB59MK)."
  },
  {
    id: "cert-digiskills-marketing",
    title: "Training Certificate — Digital Marketing",
    issuer: "DigiSkills.pk · Ministry of IT & Telecom · Ignite & Virtual University",
    year: "14/03/2026",
    batch: "DSTP3.0-Batch-02 (Dec 2025 – Mar 2026)",
    certificateId: "BYJAWJ6MK",
    credentialUrl: "https://digiskills.pk/verify",
    category: "Marketing",
    documentType: "certificate",
    imageUrl: CERT_DIGISKILLS_MARKETING,
    description: "Official Government of Pakistan accredited Training Certificate in Digital Marketing under DigiSkills Training Program DSTP3.0-Batch-02. Verified at digiskills.pk/verify (Certificate ID: BYJAWJ6MK)."
  },
  {
    id: "cert-claude-101",
    title: "Claude 101 — Certificate of Completion",
    issuer: "Anthropic",
    year: "2025",
    category: "Technical",
    documentType: "certificate",
    imageUrl: CERT_CLAUDE_101,
    description: "Official Anthropic Certificate of Completion awarded to Maham Furqan for completing Claude 101, covering AI system fundamentals, prompt engineering, and Claude workflows."
  },
  {
    id: "cert-python-grin",
    title: "Five Days Basic Python Crash Course — Certificate of Completion",
    issuer: "GRIN — Global Research Innovation Network",
    year: "2025",
    category: "Technical",
    documentType: "certificate",
    imageUrl: CERT_PYTHON_GRIN,
    description: "Proudly awarded to Maham Furqan by Global Research Innovation Network (GRIN) for successfully completing the Five Days Basic Python Crash Course, demonstrating active participation and fundamental knowledge of Python programming."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Bridging the Gap Between Code and Creativity",
    summary: "How a background in Graphic Design helps write better, more user-centric front-end software, and why UI/UX layout planning is a critical developer skill.",
    content: "In modern software development, code and visual design are often treated as distinct disciplines. However, some of the most successful applications are built when developers understand visual hierarchy, typography, and spatial composition. As both a Graphic Designer and a Software Engineering student, I've realized that design principles directly influence how we build user interfaces. \n\n### The UI/UX Advantage in Front-End Coding\nWhen you understand negative space, color theories, and contrast, writing CSS or tailwind classes becomes a more intentional process. You don't just put items on a grid; you design a visual journey. Every touch target, alignment, and hover state is created to guide the user's attention seamlessly. \n\n### Practical Design Tips for Developers\n1. **Embrace Spacing Rhythm:** Always use a consistent spacing scale (like Tailwind's multiple of 4px). This creates structural harmony across elements.\n2. **Optimize Contrast:** Text readability is paramount. Always ensure high-contrast ratios between text and background.\n3. **Limit Font Families:** Stick to a maximum of two font families—one high-impact serif or sans-serif for headings, and a highly legible body font.",
    date: "August 2026",
    readTime: "4 min read",
    category: "Software & Design",
    tags: ["UX/UI Design", "Front-end Development", "Creative Coding", "Web Styling"]
  },
  {
    id: "blog-2",
    title: "A Beginner's Guide to Low-Code Business Automation",
    summary: "Discover how utilizing Google AppSheet and Google Sheets can empower businesses to replace outdated spreadsheets with robust custom mobile apps.",
    content: "Many small businesses run on heavily manual, error-prone spreadsheets. From inventory lists to customer contacts, managing everything manually is time-consuming. Fortunately, low-code tools like Google AppSheet have revolutionized how we automate operations. \n\n### Why AppSheet is a Game Changer\nAppSheet takes raw structured spreadsheets from Google Sheets or Excel and compiles them into functional native-feeling mobile and web interfaces. It handles database operations and CRUD behaviors out-of-the-box, allowing you to focus on tailoring user flows and custom business rules.\n\n### Key Automation Features to Implement\n* **Real-time Synchronization:** Update a row in your spreadsheet, and the user's app reflects that instantly.\n* **Automated Email & Push Workflows:** Set triggers to automatically alert teams when inventory drops below a specific threshold or an order status moves to 'Shipped'.\n* **Rich Mobile Hardware Support:** AppSheet has native access to smartphone hardware, permitting barcode scanning, GPS geolocation tagging, and digital signature capture.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Business Tech",
    tags: ["AppSheet", "Google Sheets", "Low Code", "Automation", "Workflow Optimization"]
  },
  {
    id: "blog-3",
    title: "Meticulous Quality Control: Why Manual Testing Still Matters",
    summary: "Exploring the critical role of human intuition and thorough exploratory manual software verification in an era increasingly dominated by automated testing suites.",
    content: "With the rise of robust test suites and automated end-to-end framework test runs, some argue that manual testing is becoming obsolete. However, manual QA remains the most vital safety net for user experience. Automated tests can check if an API returns status code 200, but they cannot tell you if a button feels awkward, if a layout is shifted on a specific viewport, or if a workflow is cognitively draining.\n\n### The Human Touch in Software Validation\nManual testing relies on exploratory verification, user intuition, and active problem-solving. A human tester can push boundaries, attempt unexpected inputs, and discover visual edge cases that automated scripts miss.\n\n### Best Practices for Effective Manual QA\n1. **Write Modular Test Cases:** Keep your test steps discrete, reproducible, and clearly mapped to functional specifications.\n2. **Capture Clear Bug Reports:** Always include the exact steps to reproduce, actual vs. expected results, environment/device variables, and clean screenshots or video captures.\n3. **Understand Edge Cases:** Don't just test the happy path. Actively try to break the application with extreme inputs, multi-clicks, and network interruptions.",
    date: "June 2026",
    readTime: "6 min read",
    category: "Quality Assurance",
    tags: ["Manual Testing", "QA Methodologies", "Bug Reporting", "UX Validation"]
  }
];
