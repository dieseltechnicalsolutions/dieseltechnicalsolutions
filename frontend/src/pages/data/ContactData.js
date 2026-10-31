// export default {"title": "Contact Us | DTS - Diesel Technical Solution", "style": "\n  :root{\n    --navy:#0a1a33;\n    --navy-2:#0e2340;\n    --blue:#1f5eff;\n    --blue-dark:#1749c9;\n    --ink:#13213a;\n    --muted:#5c6b85;\n    --line:#e7eaf1;\n    --paper:#ffffff;\n    --bg:#f7f8fb;\n  }\n  *{box-sizing:border-box; margin:0; padding:0;}\n  html{scroll-behavior:smooth;}\n  body{\n    font-family:'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;\n    color:var(--ink);\n    background:var(--paper);\n    line-height:1.55;\n    -webkit-font-smoothing:antialiased;\n  }\n  a{text-decoration:none; color:inherit;}\n  ul{list-style:none;}\n  img,svg{display:block; max-width:100%;}\n  button{font-family:inherit; cursor:pointer; border:none;}\n  .wrap{max-width:1240px; margin:0 auto; padding:0 32px;}\n\n  /* ---------- Buttons ---------- */\n  .btn{\n    display:inline-flex; align-items:center; gap:8px;\n    padding:14px 24px; border-radius:6px; font-weight:600; font-size:15px;\n    white-space:nowrap; transition:transform .15s ease, background .15s ease, color .15s ease;\n  }\n  .btn:active{transform:scale(.97);}\n  .btn-primary{background:var(--blue); color:#fff;}\n  .btn-primary:hover{background:var(--blue-dark);}\n  .btn-outline{background:transparent; color:#fff; border:1.5px solid rgba(255,255,255,.4);}\n  .btn-outline:hover{border-color:#fff; background:rgba(255,255,255,.06);}\n  .btn svg{width:16px; height:16px;}\n\n  /* ---------- Header ---------- */\n  header{\n    position:sticky; top:0; z-index:200;\n    background:#fff; border-bottom:1px solid var(--line);\n  }\n  .nav-row{\n    display:flex; align-items:center; justify-content:space-between;\n    height:84px;\n  }\n .logo-mark{\n  width: 90px;\n  height:90px;\n  border-radius:50%;\n  overflow:hidden;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  flex-shrink:0;\n  background:#fff;\n  border:2px solid #dfe5ed;\n}\n\n.logo-mark img{\n  width:100%;\n  height:100%;\n  object-fit:contain;\n  border-radius:50%;\n}\n  .logo-mark svg{width:24px; height:24px;}\n  .logo-text .name{font-size:22px; font-weight:800; color:var(--ink); letter-spacing:.5px; line-height:1;}\n  .logo-text .sub{font-size:10px; letter-spacing:1.5px; color:var(--muted); font-weight:600; margin-top:3px;}\n\n  .desktop-nav{display:flex; align-items:center; gap:clamp(14px,2vw,36px); flex-wrap:nowrap;}\n  .desktop-nav a{font-size:14.5px; font-weight:600; color:var(--ink); position:relative; padding:6px 0; white-space:nowrap;}\n  .desktop-nav a.active{color:var(--blue);}\n  .desktop-nav a.active::after{\n    content:''; position:absolute; left:0; right:0; bottom:-2px; height:2px; background:var(--blue);\n  }\n  .desktop-nav a:hover{color:var(--blue);}\n\n  .header-actions{display:flex; align-items:center; gap:22px;}\n  .burger{\n    display:none; width:44px; height:44px; align-items:center; justify-content:center;\n    background:none; border-radius:8px;\n  }\n  .burger svg{width:26px; height:26px;}\n\n  /* ---------- Mobile dropdown nav ---------- */\n  .mobile-nav{\n    position:fixed; inset:0; z-index:300;\n    background:#fff;\n    transform:translateY(-100%);\n    transition:transform .35s cubic-bezier(.4,0,.2,1);\n    display:flex; flex-direction:column;\n    visibility:hidden;\n  }\n  .mobile-nav.open{transform:translateY(0); visibility:visible;}\n  .mobile-nav-top{\n    display:flex; align-items:center; justify-content:space-between;\n    height:84px; padding:0 24px; border-bottom:1px solid var(--line);\n  }\n  .mobile-nav-links{padding:8px 24px; overflow-y:auto; flex:1;}\n  .mobile-nav-links li{border-bottom:1px solid var(--line);}\n  .mobile-nav-links a{\n    display:block; padding:22px 4px; font-size:19px; font-weight:500; color:var(--ink);\n  }\n  .mobile-nav-links a.active{color:var(--blue); font-weight:700;}\n  .mobile-nav-cta{padding:20px 24px 28px; background:var(--navy);}\n  .mobile-nav-cta .btn{width:100%; justify-content:center;}\n  .close-btn{width:44px; height:44px; display:flex; align-items:center; justify-content:center; background:none;}\n  .close-btn svg{width:24px; height:24px;}\n  body.nav-open{overflow:hidden;}\n\n  /* ---------- Page hero (simple, for inner pages) ---------- */\n  .page-hero{\n    \n     background-image: url('Images/contact.webp'); background-size:cover; background-position:center;\n    /* background:linear-gradient(180deg,var(--navy) 0%,var(--navy-2) 100%); */\n   color: #ffffff; padding:64px 0;\n  }\n  .page-hero .eyebrow{ color:#5b9bff; font-weight:700; font-size:14px; letter-spacing:.3px; margin-bottom:12px;}\n  .page-hero h1{color:#ffffff; font-size:38px; font-weight:800; letter-spacing:-.3px; margin-bottom:12px;}\n  .page-hero p{color: #d0d8e8; font-size:15.5px; max-width:560px;}\n  .breadcrumb{font-size:13.5px; color:#aab6cf; margin-top:18px;}\n  .breadcrumb a{color:#9fabc4; font-weight:600;}\n  .breadcrumb a:hover{color:#fff;}\n  .breadcrumb span{  color:#5b9bff; font-weight:600;}\n\n  /* ---------- Contact section ---------- */\n  .contact-section{padding:80px 0; background:var(--bg);}\n  .contact-grid{\n    display:grid; grid-template-columns:1fr 1.2fr; gap:40px; align-items:start;\n  }\n\n  .contact-info-card{\n    background:var(--navy); color:#fff; border-radius:14px; padding:40px 34px;\n  }\n  .contact-info-card h2{font-size:24px; font-weight:800; margin-bottom:10px;}\n  .contact-info-card > p{color:#b7c0d4; font-size:14.5px; margin-bottom:32px;}\n\n  .info-row{\n    display:flex; gap:16px; align-items:flex-start; margin-bottom:26px;\n  }\n  .info-row:last-child{margin-bottom:0;}\n  .info-icon{\n    width:44px; height:44px; border-radius:10px; background:rgba(95,140,255,.15);\n    display:flex; align-items:center; justify-content:center; flex-shrink:0;\n  }\n  .info-icon svg{width:20px; height:20px; stroke:#5b9bff;}\n  .info-row h4{font-size:14.5px; font-weight:700; margin-bottom:4px;}\n  .info-row p, .info-row a{font-size:14px; color:#c3cce0; display:block;}\n  .info-row a:hover{color:#fff;}\n\n  .social-row{display:flex; gap:12px; margin-top:32px;}\n  .social-row a{\n    width:38px; height:38px; border-radius:8px; background:rgba(255,255,255,.08);\n    display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,.14);\n  }\n  .social-row a:hover{background:var(--blue); border-color:var(--blue);}\n  .social-row svg{width:17px; height:17px; stroke:#fff;}\n\n  /* ---------- Form ---------- */\n  .contact-form-card{\n    background:#fff; border:1px solid var(--line); border-radius:14px; padding:40px 34px;\n  }\n  .contact-form-card h2{font-size:22px; font-weight:800; margin-bottom:6px;}\n  .contact-form-card > p{color:var(--muted); font-size:14.5px; margin-bottom:28px;}\n\n  .form-row{display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px;}\n  .field{display:flex; flex-direction:column; gap:8px;}\n  .field.full{grid-column:1/-1;}\n  .field label{font-size:13.5px; font-weight:700; color:var(--ink);}\n  .field input, .field select, .field textarea{\n    border:1.5px solid var(--line); border-radius:8px; padding:13px 14px; font-size:14.5px;\n    font-family:inherit; color:var(--ink); background:#fbfcfe; transition:border-color .15s ease;\n  }\n  .field input:focus, .field select:focus, .field textarea:focus{\n    outline:none; border-color:var(--blue); background:#fff;\n  }\n  .field textarea{resize:vertical; min-height:120px;}\n\n  .form-submit{width:100%; justify-content:center; margin-top:6px;}\n  .form-note{font-size:12.5px; color:var(--muted); margin-top:14px; text-align:center;}\n  .form-success{\n    display:none; align-items:center; gap:10px; background:#eefaf0; color:#1c7a35;\n    border:1px solid #bfe8c8; border-radius:8px; padding:14px 16px; font-size:14px; font-weight:600;\n    margin-bottom:18px;\n  }\n  .form-success svg{width:18px; height:18px; stroke:#1c7a35; flex-shrink:0;}\n\n  /* ---------- Map ---------- */\n  .map-section{padding:0 0 90px; background:var(--bg); text-align:center;}\n  .map-section h2{font-size:28px; margin-bottom:8px; color:var(--navy); font-weight:800;}\n  .address{font-size:15px; margin-bottom:26px; color:var(--muted);}\n  .map-container{\n    width:100%; max-width:1180px; margin:0 auto; border-radius:12px; overflow:hidden;\n    box-shadow:0 14px 30px -18px rgba(20,30,60,.25); border:1px solid var(--line);\n  }\n  .map-container iframe{width:100%; height:400px; border:0; display:block;}\n\n  /* ---------- CTA bar ---------- */\n  .cta-bar{background:var(--navy); color:#fff;}\n  .cta-inner{\n    display:flex; align-items:center; justify-content:space-between; gap:24px;\n    padding:34px 0; flex-wrap:wrap;\n  }\n  .cta-left{display:flex; align-items:center; gap:18px;}\n  .cta-icon{\n    width:50px; height:50px; border-radius:50%; background:var(--blue);\n    display:flex; align-items:center; justify-content:center; flex-shrink:0;\n  }\n  .cta-icon svg{width:22px; height:22px; stroke:#fff;}\n  .cta-left h3{font-size:18px; font-weight:700; margin-bottom:2px;}\n  .cta-left p{font-size:14px; color:#9fabc4;}\n\n  footer{background:var(--navy-2); color:#8b98b6; text-align:center; padding:26px 0; font-size:13px;}\n\n  /* ---------- Responsive ---------- */\n  @media (max-width:840px){\n    .desktop-nav, .header-actions{display:none;}\n    .burger{display:flex;}\n    .nav-row{height:76px;}\n    .page-hero{padding:48px 0;}\n    .page-hero h1{font-size:30px;}\n    .contact-grid{grid-template-columns:1fr;}\n    .form-row{grid-template-columns:1fr;}\n    .cta-inner{justify-content:center; text-align:center;}\n    .cta-left{flex-direction:column; text-align:center;}\n  }\n  @media (max-width:600px){\n    .wrap{padding:0 20px;}\n    .page-hero h1{font-size:26px;}\n    .contact-info-card, .contact-form-card{padding:30px 22px;}\n    .map-container iframe{height:300px;}\n  }\n  /* -------------- */\n     .site-footer{\n    background:var(--navy);\n    color:#c3cadb;\n    position:relative;\n  }\n  .site-footer::before{\n    content:'';\n    display:block;\n    height:3px;\n    background:linear-gradient(90deg, var(--blue) 0%, #5b9bff 45%, transparent 100%);\n  }\n  .footer-top{\n    padding:64px 0 48px;\n    display:grid;\n    grid-template-columns:1.3fr 1fr 1fr 1.2fr;\n    gap:48px;\n  }\n  .footer-brand .brand-mark{\n    display:flex; align-items:center; gap:12px; margin-bottom:18px;\n  }\n  .footer-brand .brand-mark .mark{\n    width:42px; height:42px; border-radius:10px; background:var(--blue);\n    display:flex; align-items:center; justify-content:center; flex-shrink:0;\n  }\n  .footer-brand .brand-mark .mark svg{width:22px; height:22px; stroke:#fff;}\n  .footer-brand .brand-mark .brand-name{font-size:19px; font-weight:800; color:#fff; letter-spacing:.3px;}\n  .footer-brand p{font-size:13.5px; line-height:1.75; color:#93a0bd; max-width:320px;}\n\n  .footer-heading{\n    font-size:12.5px; font-weight:700; letter-spacing:.6px; color:#fff;\n    margin-bottom:20px; position:relative; padding-bottom:12px;\n  }\n  .footer-heading::after{\n    content:''; position:absolute; left:0; bottom:0; width:26px; height:2px; background:var(--blue);\n  }\n  .footer-links li{margin-bottom:13px;}\n  .footer-links a{\n    font-size:13.5px; color:#93a0bd; transition:color .15s ease, padding-left .15s ease;\n    display:inline-block;\n  }\n  .footer-links a:hover{color:#fff; padding-left:3px;}\n\n  .footer-contact li{\n    display:flex; align-items:flex-start; gap:12px; margin-bottom:16px; font-size:13.5px; color:#93a0bd; line-height:1.6;\n  }\n  .footer-contact svg{width:17px; height:17px; stroke:#5b9bff; flex-shrink:0; margin-top:2px;}\n  .footer-contact a:hover{color:#fff;}\n\n  .footer-social{display:flex; gap:10px; margin-top:22px;}\n  .footer-social a{\n    width:36px; height:36px; border-radius:8px; border:1px solid rgba(255,255,255,.14);\n    display:flex; align-items:center; justify-content:center;\n    transition:background .15s ease, border-color .15s ease;\n  }\n  .footer-social a svg{width:16px; height:16px; stroke:#c3cadb;}\n  .footer-social a:hover{background:var(--blue); border-color:var(--blue);}\n  .footer-social a:hover svg{stroke:#fff;}\n\n  .footer-bottom-bar{\n    border-top:1px solid rgba(255,255,255,.09);\n    padding:22px 0;\n    display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;\n  }\n  .footer-bottom-bar p{font-size:12.5px; color:#7c88a5;}\n  .footer-bottom-links{display:flex; gap:22px;}\n  .footer-bottom-links a{font-size:12.5px; color:#7c88a5;}\n  .footer-bottom-links a:hover{color:#fff;}\n\n  @media (max-width:960px){\n    .wrap{padding:0 24px;}\n    .footer-top{grid-template-columns:1fr 1fr; row-gap:40px; gap:28px;}\n  }\n\n  @media (max-width:600px){\n    .wrap{padding:0 20px;}\n    .footer-top{\n      grid-template-columns:1fr;\n      padding:44px 0 32px;\n      gap:34px;\n      text-align:center;\n    }\n    .footer-brand .brand-mark{justify-content:center;}\n    .footer-brand p{max-width:none; margin:0 auto;}\n    .footer-social{justify-content:center;}\n    .footer-heading::after{left:50%; transform:translateX(-50%);}\n    .footer-links,.footer-contact{display:inline-block; text-align:left;}\n    .footer-contact li{justify-content:flex-start;}\n    .footer-bottom-bar{\n      flex-direction:column;\n      align-items:center;\n      text-align:center;\n      gap:12px;\n      padding:20px 0 28px;\n    }\n    .footer-bottom-links{justify-content:center;}\n  }\n\n  @media (max-width:380px){\n    .wrap{padding:0 16px;}\n    .footer-top{padding:36px 0 28px; gap:30px;}\n    .footer-brand .brand-mark .brand-name{font-size:17px;}\n    .footer-social a{width:34px; height:34px;}\n  }\n  /* ------------ */\n", "bodyHtml": "\n<header>\n<div class=\"wrap nav-row\">\n<a class=\"logo\" href=\"index.html\">\n<span class=\"logo-mark\">\n<img alt=\"DTS Logo\" src=\"Images/logo.png\"/>\n</span>\n</a>\n<nav class=\"desktop-nav\">\n<a href=\"index.html\">Home</a>\n<a href=\"about.html\">About Us</a>\n<a href=\"services.html\">Services</a>\n<a href=\"products.html\">Products</a>\n<a href=\"#gallery\">Gallery</a>\n<a href=\"faq.html\">FAQ'S</a>\n<a class=\"active\" href=\"contact.html\">Contact Us</a>\n</nav>\n<div class=\"header-actions\">\n<a class=\"btn btn-primary\" href=\"get-a-quote.html\" style=\"background:var(--blue); color:#fff; padding:11px 18px; font-size:14px;\">\n        Get a Quote\n        <svg fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</a>\n</div>\n<button aria-label=\"Open menu\" class=\"burger\" id=\"burgerBtn\">\n<svg fill=\"none\" stroke=\"#0a1a33\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M4 7h16M4 12h16M4 17h16\"></path></svg>\n</button>\n</div>\n</header>\n<!-- Mobile dropdown nav -->\n<div class=\"mobile-nav\" id=\"mobileNav\">\n<div class=\"mobile-nav-top\">\n<a class=\"logo\" href=\"index.html\">\n<span class=\"logo-mark\">\n<img alt=\"DTS - Diesel Technical Solution\" src=\"Images/logo.png\"/>\n</span>\n</a>\n<button aria-label=\"Close menu\" class=\"close-btn\" id=\"closeBtn\">\n<svg fill=\"none\" stroke=\"#0a1a33\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M18 6 6 18M6 6l12 12\"></path></svg>\n</button>\n</div>\n<ul class=\"mobile-nav-links\">\n<li><a class=\"mobile-link\" href=\"index.html\">Home</a></li>\n<li><a class=\"mobile-link\" href=\"about.html\">About Us</a></li>\n<li><a class=\"mobile-link\" href=\"services.html\">Services</a></li>\n<li><a class=\"mobile-link\" href=\"products.html\">Products</a></li>\n<li><a class=\"mobile-link\" href=\"\">Gallery</a></li>\n<li><a class=\"mobile-link\" href=\"faq.html\">FAQ'S</a></li>\n<li><a class=\"mobile-link active\" href=\"contact.html\">Contact Us</a></li>\n</ul>\n<div class=\"mobile-nav-cta\">\n<a class=\"btn btn-primary\" href=\"get-a-quote.html\">Get a Quote</a>\n</div>\n</div>\n<!-- Page hero -->\n<section class=\"page-hero\">\n<div class=\"wrap\">\n<div class=\"eyebrow\">GET IN TOUCH</div>\n<h1>Contact Us</h1>\n<p>Have a question about our services, need a quote, or facing a breakdown? Reach out \u2014 our team is ready to help.</p>\n<div class=\"breadcrumb\"><a href=\"index.html\">Home</a> / <span>Contact Us</span></div>\n</div>\n</section>\n<!-- Contact section -->\n<section class=\"contact-section\">\n<div class=\"wrap\">\n<div class=\"contact-grid\">\n<!-- Contact info -->\n<div class=\"contact-info-card\">\n<h2>Contact Information</h2>\n<p>Reach us directly using the details below, or send a message and we'll get back to you shortly.</p>\n<div class=\"info-row\">\n<span class=\"info-icon\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z\"></path><path d=\"M9.5 12.5 11 14l3.5-3.5\"></path></svg></span>\n<div>\n<h4>Address</h4>\n<p>2-2-128/G/100/1,PLOT NO 100, Sai Baba nagar colony, Road No.1, Laxma Reddy Colony, Uppal, Hyderabad,\nTelangana \u2013 500039,India</p>\n</div>\n</div>\n<div class=\"info-row\">\n<span class=\"info-icon\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z\"></path></svg></span>\n<div>\n<h4>Phone</h4>\n<!-- <a href=\"tel:+919491435957\">+91 94914 35957</a> -->\n<a href=\"tel:+918121312253\">+91 81213 12253</a>\n</div>\n</div>\n<div class=\"info-row\">\n<span class=\"info-icon\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><rect height=\"14\" rx=\"2\" width=\"18\" x=\"3\" y=\"5\"></rect><path d=\"m3 7 9 6 9-6\"></path></svg></span>\n<div>\n<h4>Email</h4>\n<a href=\"mailto:dieseltechniaclsolutions@zohomail.in\">dieseltechniaclsolutions@zohomail.in</a>\n<br/>\n<a href=\"mailto:dieseltechniaclsolutions@gmail.com\">dieseltechniaclsolutions@gmail.com</a>\n</div>\n</div>\n<div class=\"info-row\">\n<span class=\"info-icon\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 7v5l3 3\"></path></svg></span>\n<div>\n<h4>Working Hours</h4>\n<p>Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM<br/>24/7 Emergency Breakdown Support</p>\n</div>\n</div>\n<div class=\"social-row\">\n<a aria-label=\"Facebook\" href=\"#\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg></a>\n<a aria-label=\"Instagram\" href=\"#\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><rect height=\"20\" rx=\"5\" width=\"20\" x=\"2\" y=\"2\"></rect><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><circle cx=\"17.5\" cy=\"6.5\" r=\"1\"></circle></svg></a>\n<a aria-label=\"WhatsApp\" href=\"#\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5z\"></path></svg></a>\n</div>\n</div>\n<!-- Contact form -->\n<div class=\"contact-form-card\">\n<h2>Send Us a Message</h2>\n<p>Fill out the form and our team will respond within 24 hours.</p>\n<div class=\"form-success\" id=\"formSuccess\">\n<svg fill=\"none\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"m8 12 3 3 5-6\"></path></svg>\n          Thank you! Your message has been received.\n        </div>\n<form id=\"contactForm\">\n<div class=\"form-row\">\n<div class=\"field\">\n<label for=\"fname\">Full Name</label>\n<input id=\"fname\" name=\"fname\" placeholder=\"Your name\" required=\"\" type=\"text\"/>\n</div>\n<div class=\"field\">\n<label for=\"phone\">Phone Number</label>\n<input id=\"phone\" name=\"phone\" placeholder=\"+91 00000 00000\" required=\"\" type=\"tel\"/>\n</div>\n</div>\n<div class=\"form-row\">\n<div class=\"field\">\n<label for=\"email\">Email Address</label>\n<input id=\"email\" name=\"email\" placeholder=\"you@example.com\" required=\"\" type=\"email\"/>\n</div>\n<div class=\"field\">\n<label for=\"service\">Service Needed</label>\n<select id=\"service\" name=\"service\">\n<option value=\"\">Select a service</option>\n<option>Engine Overhauling</option>\n<option>AMC (Annual Maintenance Contract)</option>\n<option>Breakdown &amp; Complaint Support</option>\n<option>Spare Parts Supply</option>\n<option>Engine Supply</option>\n<option>Installation &amp; Commissioning</option>\n<option>Other</option>\n</select>\n</div>\n</div>\n<div class=\"form-row\">\n<div class=\"field full\">\n<label for=\"message\">Message</label>\n<textarea id=\"message\" name=\"message\" placeholder=\"Tell us about your requirement...\" required=\"\"></textarea>\n</div>\n</div>\n<button class=\"btn btn-primary form-submit\" type=\"submit\">\n            Send Message\n            <svg fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</button>\n<p class=\"form-note\">We respect your privacy. Your information will never be shared.</p>\n</form>\n</div>\n</div>\n</div>\n</section>\n<!-- Map -->\n<section class=\"map-section\">\n<div class=\"wrap\">\n<h2>Our Location</h2>\n<p class=\"address\">Diesel Technical Solution \u2014 Hyderabad,Telangana, India</p>\n<div class=\"map-container\">\n<iframe allowfullscreen=\"\" loading=\"lazy\" src=\"https://www.google.com/maps?q=Hyderabad,Telangana&amp;output=embed\">\n</iframe>\n</div>\n</div>\n</section>\n<!-- CTA bar -->\n<section class=\"cta-bar\">\n<div class=\"wrap cta-inner\">\n<div class=\"cta-left\">\n<span class=\"cta-icon\"><svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4z\"></path></svg></span>\n<div>\n<h3>Facing an engine breakdown?</h3>\n<p>Call our 24/7 support line for immediate assistance.</p>\n</div>\n</div>\n<a class=\"btn btn-primary\" href=\"tel:+918121312253\">Call Now\n      <svg fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" viewbox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></svg>\n</a>\n</div>\n</section>\n<footer class=\"site-footer\">\n<div class=\"wrap footer-top\">\n<!-- Brand -->\n<div class=\"footer-brand\">\n<div class=\"brand-mark\">\n<span class=\"mark\">\n<img alt=\"\" src=\"Images/logo.png\"/>\n<!-- <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"1\" y=\"7\" width=\"15\" height=\"10\" rx=\"1\"/><path d=\"M16 10h4l3 3v4h-7\"/><circle cx=\"6\" cy=\"19\" r=\"2\"/><circle cx=\"18.5\" cy=\"19\" r=\"2\"/></svg> -->\n</span>\n<span class=\"brand-name\">DTS \u2014 Diesel Technical Solution</span>\n</div>\n<p>Reliable engine overhauling, maintenance and genuine spare parts, backed by an experienced service team you can count on.</p>\n<div class=\"footer-social\">\n<!-- <a href=\"#\" aria-label=\"LinkedIn\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/><path d=\"M10 9v12M10 13.5c0-2.5 2-4.5 4.5-4.5S19 11 19 13.5V21h-4v-6.5a1.5 1.5 0 0 0-3 0V21h-4z\"/></svg></a>\n        <a href=\"#\" aria-label=\"Facebook\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z\"/></svg></a>\n        <a href=\"#\" aria-label=\"Instagram\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1\"/></svg></a>\n        <a href=\"#\" aria-label=\"YouTube\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"4\"/><path d=\"M10 9.5v5l4.5-2.5z\" fill=\"currentColor\" stroke=\"none\"/></svg></a> -->\n</div>\n</div>\n<!-- Quick Links -->\n<div class=\"footer-col\">\n<div class=\"footer-heading\">QUICK LINKS</div>\n<ul class=\"footer-links\">\n<li><a href=\"index.html\">Home</a></li>\n<li><a href=\"about.html\">About Us</a></li>\n<li><a href=\"services.html\">Services</a></li>\n<li><a href=\"products.html\">Products</a></li>\n<li><a href=\"index.html#gallery\">Gallery</a></li>\n<li><a href=\"contact.html\">Contact Us</a></li>\n</ul>\n</div>\n<!-- Services -->\n<div class=\"footer-col\">\n<div class=\"footer-heading\">OUR SERVICES</div>\n<ul class=\"footer-links\">\n<li><a href=\"services.html\">Engine Overhauling</a></li>\n<li><a href=\"services.html\">Engine Maintenance</a></li>\n<li><a href=\"services.html\">Spare Parts Supply</a></li>\n<li><a href=\"services.html\">Onsite Service</a></li>\n<li><a href=\"services.html\">AMC &amp; Service Contracts</a></li>\n</ul>\n</div>\n<!-- Contact -->\n<div class=\"footer-col\">\n<div class=\"footer-heading\">CONTACT INFO</div>\n<ul class=\"footer-contact\">\n<li>\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle></svg>\n<span>2-2-128/G/100/1,PLOT NO 100, Sai Baba nagar colony, Road No.1, Laxma Reddy Colony, Uppal, Hyderabad, <br/>Telangana \u2013 500039, India</span>\n</li>\n<li>\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><path d=\"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z\"></path></svg>\n<span>\n<!-- <a href=\"tel:+919491435957\">+91 94914 35957</a><br> -->\n<a href=\"tel:+91 8121312253\">+91 81213 12253</a></span>\n</li>\n<li>\n<svg fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\"><rect height=\"16\" rx=\"2\" width=\"20\" x=\"2\" y=\"4\"></rect><path d=\"m2 6 10 7L22 6\"></path></svg>\n<span><a href=\"mailto: dieseltechniaclsolutions@zohomail.in\"> dieseltechniaclsolutions@zohomail.in</a><br/>\n<a href=\"mailto: dieseltechniaclsolutions@gmail.com\"> dieseltechniaclsolutions@gmail.com</a>\n</span>\n</li>\n</ul>\n</div>\n</div>\n<div class=\"wrap footer-bottom-bar\">\n<p>\u00a9 2026 DTS \u2014 Diesel Technical Solution. All rights reserved.</p>\n<div class=\"footer-bottom-links\">\n<a href=\"#\">Privacy Policy</a>\n<a href=\"#\">Terms of Service</a>\n</div>\n</div>\n</footer>\n\n", "scripts": ["\n  const burgerBtn = document.getElementById('burgerBtn');\n  const closeBtn = document.getElementById('closeBtn');\n  const mobileNav = document.getElementById('mobileNav');\n\n  function openNav(){\n    mobileNav.classList.add('open');\n    document.body.classList.add('nav-open');\n  }\n  function closeNav(){\n    mobileNav.classList.remove('open');\n    document.body.classList.remove('nav-open');\n  }\n\n  burgerBtn.addEventListener('click', openNav);\n  closeBtn.addEventListener('click', closeNav);\n  document.querySelectorAll('.mobile-link').forEach(link=>{\n    link.addEventListener('click', closeNav);\n  });\n\n  // Contact form handling (front-end only; connect to backend/email service as needed)\n  // const contactForm = document.getElementById('contactForm');\n  // const formSuccess = document.getElementById('formSuccess');\n\n  // contactForm.addEventListener('submit', function(e){\n  //   e.preventDefault();\n  //   formSuccess.style.display = 'flex';\n  //   contactForm.reset();\n  //   formSuccess.scrollIntoView({behavior:'smooth', block:'nearest'});\n  // });\n\n\n  // ---------------\n// --------------------------------------------------\n// Contact Form\n// --------------------------------------------------\n\nconst contactForm =\n    document.getElementById(\"contactForm\");\n\nconst formSuccess =\n    document.getElementById(\"formSuccess\");\n\n\ncontactForm.addEventListener(\n    \"submit\",\n    async function(e) {\n\n        e.preventDefault();\n\n        const submitButton =\n            contactForm.querySelector(\n                \"button[type='submit']\"\n            );\n\n        // Disable button\n        submitButton.disabled = true;\n\n        submitButton.innerHTML = `\n            Sending...\n        `;\n\n\n        // Get form values\n        const formData = {\n\n            fname:\n                document.getElementById(\"fname\").value.trim(),\n\n            phone:\n                document.getElementById(\"phone\").value.trim(),\n\n            email:\n                document.getElementById(\"email\").value.trim(),\n\n            service:\n                document.getElementById(\"service\").value,\n\n            message:\n                document.getElementById(\"message\").value.trim()\n\n        };\n\n\n        try {\n\n            const response = await fetch(\n                \"http://localhost:5000/api/contact\",\n                {\n\n                    method: \"POST\",\n\n                    headers: {\n                        \"Content-Type\":\n                            \"application/json\"\n                    },\n\n                    body:\n                        JSON.stringify(formData)\n\n                }\n            );\n\n\n            const result =\n                await response.json();\n\n\n            if (result.success) {\n\n                // Show success message\n                formSuccess.style.display = \"flex\";\n\n\n                // Clear form\n                contactForm.reset();\n\n\n                formSuccess.scrollIntoView({\n\n                    behavior: \"smooth\",\n\n                    block: \"nearest\"\n\n                });\n\n            } else {\n\n                alert(result.message);\n\n            }\n\n\n        } catch (error) {\n\n            console.error(\n                \"Frontend error:\",\n                error\n            );\n\n            alert(\n                \"Unable to send your message. Please try again.\"\n            );\n\n\n        } finally {\n\n            submitButton.disabled = false;\n\n            submitButton.innerHTML = `\n                Send Message\n\n                <svg\n                    viewBox=\"0 0 24 24\"\n                    fill=\"none\"\n                    stroke=\"#fff\"\n                    stroke-width=\"2\">\n\n                    <path\n                        d=\"M5 12h14M13 6l6 6-6 6\"/>\n\n                </svg>\n            `;\n\n        }\n\n    }\n);\n\n\n\n// ---------------------------\n"]};

export default {
  title: "Contact Us | DTS - Diesel Technical Solution",

  style: `
    :root {
      --navy: #0a1a33;
      --navy-2: #0e2340;
      --blue: #1f5eff;
      --blue-dark: #1749c9;
      --ink: #13213a;
      --muted: #5c6b85;
      --line: #e7eaf1;
      --paper: #ffffff;
      --bg: #f7f8fb;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
      color: var(--ink);
      background: var(--paper);
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    img, svg {
      display: block;
      max-width: 100%;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
    }

    .wrap {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* Buttons */

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 24px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 15px;
      white-space: nowrap;
      transition: transform .15s ease, background .15s ease, color .15s ease;
    }

    .btn:active {
      transform: scale(.97);
    }

    .btn-primary {
      background: var(--blue);
      color: #fff;
    }

    .btn-primary:hover {
      background: var(--blue-dark);
    }

    .btn-outline {
      background: transparent;
      color: #fff;
      border: 1.5px solid rgba(255,255,255,.4);
    }

    .btn-outline:hover {
      border-color: #fff;
      background: rgba(255,255,255,.06);
    }

    .btn svg {
      width: 16px;
      height: 16px;
    }

    /* Header */

    header {
      position: sticky;
      top: 0;
      z-index: 200;
      background: #fff;
      border-bottom: 1px solid var(--line);
    }

    .nav-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 84px;
    }

    .logo-mark {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: #fff;
      border: 2px solid #dfe5ed;
    }

    .logo-mark img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }

    .logo-mark svg {
      width: 24px;
      height: 24px;
    }

    .logo-text .name {
      font-size: 22px;
      font-weight: 800;
      color: var(--ink);
      letter-spacing: .5px;
      line-height: 1;
    }

    .logo-text .sub {
      font-size: 10px;
      letter-spacing: 1.5px;
      color: var(--muted);
      font-weight: 600;
      margin-top: 3px;
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: clamp(14px, 2vw, 36px);
      flex-wrap: nowrap;
    }

    .desktop-nav a {
      font-size: 14.5px;
      font-weight: 600;
      color: var(--ink);
      position: relative;
      padding: 6px 0;
      white-space: nowrap;
    }

    .desktop-nav a.active {
      color: var(--blue);
    }

    .desktop-nav a.active::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      height: 2px;
      background: var(--blue);
    }

    .desktop-nav a:hover {
      color: var(--blue);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 22px;
    }

    .burger {
      display: none;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      background: none;
      border-radius: 8px;
    }

    .burger svg {
      width: 26px;
      height: 26px;
    }

    /* Mobile navigation */

    .mobile-nav {
      position: fixed;
      inset: 0;
      z-index: 300;
      background: #fff;
      transform: translateY(-100%);
      transition: transform .35s cubic-bezier(.4,0,.2,1);
      display: flex;
      flex-direction: column;
      visibility: hidden;
    }

    .mobile-nav.open {
      transform: translateY(0);
      visibility: visible;
    }

    .mobile-nav-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 84px;
      padding: 0 24px;
      border-bottom: 1px solid var(--line);
    }

    .mobile-nav-links {
      padding: 8px 24px;
      overflow-y: auto;
      flex: 1;
    }

    .mobile-nav-links li {
      border-bottom: 1px solid var(--line);
    }

    .mobile-nav-links a {
      display: block;
      padding: 22px 4px;
      font-size: 19px;
      font-weight: 500;
      color: var(--ink);
    }

    .mobile-nav-links a.active {
      color: var(--blue);
      font-weight: 700;
    }

    .mobile-nav-cta {
      padding: 20px 24px 28px;
      background: var(--navy);
    }

    .mobile-nav-cta .btn {
      width: 100%;
      justify-content: center;
    }

    .close-btn {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
    }

    .close-btn svg {
      width: 24px;
      height: 24px;
    }

    body.nav-open {
      overflow: hidden;
    }

    /* Hero */

    .page-hero {
      background-image: url('Images/contact.webp');
      background-size: cover;
      background-position: center;
      color: #ffffff;
      padding: 64px 0;
    }

    .page-hero .eyebrow {
      color: #5b9bff;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: .3px;
      margin-bottom: 12px;
    }

    .page-hero h1 {
      color: #ffffff;
      font-size: 38px;
      font-weight: 800;
      letter-spacing: -.3px;
      margin-bottom: 12px;
    }

    .page-hero p {
      color: #d0d8e8;
      font-size: 15.5px;
      max-width: 560px;
    }

    .breadcrumb {
      font-size: 13.5px;
      color: #aab6cf;
      margin-top: 18px;
    }

    .breadcrumb a {
      color: #9fabc4;
      font-weight: 600;
    }

    .breadcrumb a:hover {
      color: #fff;
    }

    .breadcrumb span {
      color: #5b9bff;
      font-weight: 600;
    }

    /* Contact section */

    .contact-section {
      padding: 80px 0;
      background: var(--bg);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 40px;
      align-items: start;
    }

    .contact-info-card {
      background: var(--navy);
      color: #fff;
      border-radius: 14px;
      padding: 40px 34px;
    }

    .contact-info-card h2 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .contact-info-card > p {
      color: #b7c0d4;
      font-size: 14.5px;
      margin-bottom: 32px;
    }

    .info-row {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      margin-bottom: 26px;
    }

    .info-row:last-child {
      margin-bottom: 0;
    }

    .info-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(95,140,255,.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .info-icon svg {
      width: 20px;
      height: 20px;
      stroke: #5b9bff;
    }

    .info-row h4 {
      font-size: 14.5px;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .info-row p, .info-row a {
      font-size: 14px;
      color: #c3cce0;
      display: block;
    }

    .info-row a:hover {
      color: #fff;
    }

    .social-row {
      display: flex;
      gap: 12px;
      margin-top: 32px;
    }

    .social-row a {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: rgba(255,255,255,.08);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,.14);
    }

    .social-row a:hover {
      background: var(--blue);
      border-color: var(--blue);
    }

    .social-row svg {
      width: 17px;
      height: 17px;
      stroke: #fff;
    }

    /* Contact form */

    .contact-form-card {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 40px 34px;
    }

    .contact-form-card h2 {
      font-size: 22px;
      font-weight: 800;
      margin-bottom: 6px;
    }

    .contact-form-card > p {
      color: var(--muted);
      font-size: 14.5px;
      margin-bottom: 28px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 18px;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field.full {
      grid-column: 1 / -1;
    }

    .field label {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--ink);
    }

    .field input,
    .field select,
    .field textarea {
      border: 1.5px solid var(--line);
      border-radius: 8px;
      padding: 13px 14px;
      font-size: 14.5px;
      font-family: inherit;
      color: var(--ink);
      background: #fbfcfe;
      transition: border-color .15s ease;
      width: 100%;
    }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
      outline: none;
      border-color: var(--blue);
      background: #fff;
    }

    .field textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-submit {
      width: 100%;
      justify-content: center;
      margin-top: 6px;
    }

    .form-submit:disabled {
      opacity: .65;
      cursor: not-allowed;
    }

    .form-note {
      font-size: 12.5px;
      color: var(--muted);
      margin-top: 14px;
      text-align: center;
    }

    .form-success,
    .form-error {
      display: none;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      padding: 14px 16px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 18px;
    }

    .form-success {
      background: #eefaf0;
      color: #1c7a35;
      border: 1px solid #bfe8c8;
    }

    .form-error {
      background: #fff0f0;
      color: #b42318;
      border: 1px solid #f3c2c2;
    }

    /* Map */

    .map-section {
      padding: 0 0 90px;
      background: var(--bg);
      text-align: center;
    }

    .map-section h2 {
      font-size: 28px;
      margin-bottom: 8px;
      color: var(--navy);
      font-weight: 800;
    }

    .address {
      font-size: 15px;
      margin-bottom: 26px;
      color: var(--muted);
    }

    .map-container {
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 14px 30px -18px rgba(20,30,60,.25);
      border: 1px solid var(--line);
    }

    .map-container iframe {
      width: 100%;
      height: 400px;
      border: 0;
      display: block;
    }

    /* CTA */

    .cta-bar {
      background: var(--navy);
      color: #fff;
    }

    .cta-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 34px 0;
      flex-wrap: wrap;
    }

    .cta-left {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .cta-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .cta-icon svg {
      width: 22px;
      height: 22px;
      stroke: #fff;
    }

    .cta-left h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .cta-left p {
      font-size: 14px;
      color: #9fabc4;
    }

    /* Footer */

    .site-footer {
      background: var(--navy);
      color: #c3cadb;
      position: relative;
    }

    .site-footer::before {
      content: '';
      display: block;
      height: 3px;
      background: linear-gradient(90deg, var(--blue) 0%, #5b9bff 45%, transparent 100%);
    }

    .footer-top {
      padding: 64px 0 48px;
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
      gap: 48px;
    }

    .footer-brand .brand-mark {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }

    .footer-brand .brand-mark .mark {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .footer-brand .brand-mark .mark img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .footer-brand .brand-mark .brand-name {
      font-size: 19px;
      font-weight: 800;
      color: #fff;
      letter-spacing: .3px;
    }

    .footer-brand p {
      font-size: 13.5px;
      line-height: 1.75;
      color: #93a0bd;
      max-width: 320px;
    }

    .footer-heading {
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: .6px;
      color: #fff;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 12px;
    }

    .footer-heading::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 26px;
      height: 2px;
      background: var(--blue);
    }

    .footer-links li {
      margin-bottom: 13px;
    }

    .footer-links a {
      font-size: 13.5px;
      color: #93a0bd;
      transition: color .15s ease, padding-left .15s ease;
      display: inline-block;
    }

    .footer-links a:hover {
      color: #fff;
      padding-left: 3px;
    }

    .footer-contact li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 16px;
      font-size: 13.5px;
      color: #93a0bd;
      line-height: 1.6;
    }

    .footer-contact svg {
      width: 17px;
      height: 17px;
      stroke: #5b9bff;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .footer-contact a:hover {
      color: #fff;
    }

    .footer-social {
      display: flex;
      gap: 10px;
      margin-top: 22px;
    }

    .footer-social a {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,.14);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background .15s ease, border-color .15s ease;
    }

    .footer-social a svg {
      width: 16px;
      height: 16px;
      stroke: #c3cadb;
    }

    .footer-social a:hover {
      background: var(--blue);
      border-color: var(--blue);
    }

    .footer-social a:hover svg {
      stroke: #fff;
    }

    .footer-bottom-bar {
      border-top: 1px solid rgba(255,255,255,.09);
      padding: 22px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .footer-bottom-bar p {
      font-size: 12.5px;
      color: #7c88a5;
    }

    .footer-bottom-links {
      display: flex;
      gap: 22px;
    }

    .footer-bottom-links a {
      font-size: 12.5px;
      color: #7c88a5;
    }

    .footer-bottom-links a:hover {
      color: #fff;
    }

    /* Responsive */

    @media (max-width: 960px) {
      .wrap {
        padding: 0 24px;
      }

      .footer-top {
        grid-template-columns: 1fr 1fr;
        row-gap: 40px;
        gap: 28px;
      }
    }

    @media (max-width: 840px) {
      .desktop-nav,
      .header-actions {
        display: none;
      }

      .burger {
        display: flex;
      }

      .nav-row {
        height: 76px;
      }

      .page-hero {
        padding: 48px 0;
      }

      .page-hero h1 {
        font-size: 30px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .cta-inner {
        justify-content: center;
        text-align: center;
      }

      .cta-left {
        flex-direction: column;
        text-align: center;
      }
    }

    @media (max-width: 600px) {
      .wrap {
        padding: 0 20px;
      }

      .page-hero h1 {
        font-size: 26px;
      }

      .contact-info-card,
      .contact-form-card {
        padding: 30px 22px;
      }

      .map-container iframe {
        height: 300px;
      }

      .footer-top {
        grid-template-columns: 1fr;
        padding: 44px 0 32px;
        gap: 34px;
        text-align: center;
      }

      .footer-brand .brand-mark {
        justify-content: center;
      }

      .footer-brand p {
        max-width: none;
        margin: 0 auto;
      }

      .footer-social {
        justify-content: center;
      }

      .footer-heading::after {
        left: 50%;
        transform: translateX(-50%);
      }

      .footer-links,
      .footer-contact {
        display: inline-block;
        text-align: left;
      }

      .footer-contact li {
        justify-content: flex-start;
      }

      .footer-bottom-bar {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 12px;
        padding: 20px 0 28px;
      }

      .footer-bottom-links {
        justify-content: center;
      }
    }

    @media (max-width: 380px) {
      .wrap {
        padding: 0 16px;
      }

      .footer-top {
        padding: 36px 0 28px;
        gap: 30px;
      }

      .footer-brand .brand-mark .brand-name {
        font-size: 17px;
      }
    }
  `,

  bodyHtml: `
    <header>
      <div class="wrap nav-row">
        <a class="logo" href="index.html">
          <span class="logo-mark">
            <img alt="DTS Logo" src="Images/logo.png"/>
          </span>
        </a>

        <nav class="desktop-nav">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="services.html">Services</a>
          <a href="products.html">Products</a>
          <a href="index.html#gallery">Gallery</a>
          <a href="faq.html">FAQ'S</a>
          <a class="active" href="contact.html">Contact Us</a>
        </nav>

        <div class="header-actions">
          <a class="btn btn-primary" href="get-a-quote.html"
             style="background:var(--blue);color:#fff;padding:11px 18px;font-size:14px;">
            Get a Quote
            <svg fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>

        <button aria-label="Open menu" class="burger" id="burgerBtn">
          <svg fill="none" stroke="#0a1a33" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>
      </div>
    </header>

    <div class="mobile-nav" id="mobileNav">
      <div class="mobile-nav-top">
        <a class="logo" href="index.html">
          <span class="logo-mark">
            <img alt="DTS Logo" src="Images/logo.png"/>
          </span>
        </a>

        <button aria-label="Close menu" class="close-btn" id="closeBtn">
          <svg fill="none" stroke="#0a1a33" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="mobile-nav-links">
        <li><a class="mobile-link" href="index.html">Home</a></li>
        <li><a class="mobile-link" href="about.html">About Us</a></li>
        <li><a class="mobile-link" href="services.html">Services</a></li>
        <li><a class="mobile-link" href="products.html">Products</a></li>
        <li><a class="mobile-link" href="index.html#gallery">Gallery</a></li>
        <li><a class="mobile-link" href="faq.html">FAQ'S</a></li>
        <li><a class="mobile-link active" href="contact.html">Contact Us</a></li>
      </ul>

      <div class="mobile-nav-cta">
        <a class="btn btn-primary" href="get-a-quote.html">Get a Quote</a>
      </div>
    </div>

    <section class="page-hero">
      <div class="wrap">
        <div class="eyebrow">GET IN TOUCH</div>
        <h1>Contact Us</h1>
        <p>Have a question about our services, need a quote, or facing a breakdown? Reach out — our team is ready to help.</p>
        <div class="breadcrumb">
          <a href="index.html">Home</a> / <span>Contact Us</span>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="wrap">
        <div class="contact-grid">

          <div class="contact-info-card">
            <h2>Contact Information</h2>
            <p>Reach us directly using the details below, or send a message and we'll get back to you shortly.</p>

            <div class="info-row">
              <span class="info-icon">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"></path>
                  <path d="m9.5 12.5 1.5 1.5 3.5-3.5"></path>
                </svg>
              </span>
              <div>
                <h4>Address</h4>
                <p>2-2-128/G/100/1, PLOT NO 100, Sai Baba Nagar Colony, Road No.1, Laxma Reddy Colony, Uppal, Hyderabad, Telangana – 500039, India</p>
              </div>
            </div>

            <div class="info-row">
              <span class="info-icon">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z"></path>
                </svg>
              </span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+918121312253">+91 81213 12253</a>
              </div>
            </div>

            <div class="info-row">
              <span class="info-icon">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <rect height="14" rx="2" width="18" x="3" y="5"></rect>
                  <path d="m3 7 9 6 9-6"></path>
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:dieseltechniaclsolutions@zohomail.in">dieseltechniaclsolutions@zohomail.in</a>
                <a href="mailto:dieseltechniaclsolutions@gmail.com">dieseltechniaclsolutions@gmail.com</a>
              </div>
            </div>

            <div class="info-row">
              <span class="info-icon">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </span>
              <div>
                <h4>Working Hours</h4>
                <p>Mon – Sat: 9:00 AM – 7:00 PM<br/>24/7 Emergency Breakdown Support</p>
              </div>
            </div>

            <div class="social-row">
              <a aria-label="Facebook" href="#">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a aria-label="Instagram" href="#">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <rect height="20" rx="5" width="20" x="2" y="2"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1"></circle>
                </svg>
              </a>
              <a aria-label="WhatsApp" href="#">
                <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="contact-form-card">
            <h2>Send Us a Message</h2>
            <p>Fill out the form and our team will respond within 24 hours.</p>

            <div class="form-success" id="formSuccess" role="status">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="m8 12 3 3 5-6"></path>
              </svg>
              Thank you! Your message has been received.
            </div>

            <div class="form-error" id="formError" role="alert"></div>

            <form id="contactForm">
              <div class="form-row">
                <div class="field">
                  <label for="fname">Full Name</label>
                  <input id="fname" name="fname" placeholder="Your name" required type="text"/>
                </div>

                <div class="field">
                  <label for="phone">Phone Number</label>
                  <input id="phone" name="phone" placeholder="+91 00000 00000" required type="tel"/>
                </div>
              </div>

              <div class="form-row">
                <div class="field">
                  <label for="email">Email Address</label>
                  <input id="email" name="email" placeholder="you@example.com" required type="email"/>
                </div>

                <div class="field">
                  <label for="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option>Engine Overhauling</option>
                    <option>AMC (Annual Maintenance Contract)</option>
                    <option>Breakdown & Complaint Support</option>
                    <option>Spare Parts Supply</option>
                    <option>Engine Supply</option>
                    <option>Installation & Commissioning</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="field full">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your requirement..." required></textarea>
                </div>
              </div>

              <button class="btn btn-primary form-submit" type="submit">
                Send Message
                <svg fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </button>

              <p class="form-note">We respect your privacy. Your information will never be shared.</p>
            </form>
          </div>

        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="wrap">
        <h2>Our Location</h2>
        <p class="address">Diesel Technical Solution — Hyderabad, Telangana, India</p>
        <div class="map-container">
          <iframe
            title="DTS location map"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed">
          </iframe>
        </div>
      </div>
    </section>

    <section class="cta-bar">
      <div class="wrap cta-inner">
        <div class="cta-left">
          <span class="cta-icon">
            <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4z"></path>
            </svg>
          </span>
          <div>
            <h3>Facing an engine breakdown?</h3>
            <p>Call our 24/7 support line for immediate assistance.</p>
          </div>
        </div>

        <a class="btn btn-primary" href="tel:+918121312253">
          Call Now
          <svg fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </a>
      </div>
    </section>

    <footer class="site-footer">
      <div class="wrap footer-top">

        <div class="footer-brand">
          <div class="brand-mark">
            <span class="mark">
              <img alt="DTS Logo" src="Images/logo.png"/>
            </span>
            <span class="brand-name">DTS — Diesel Technical Solution</span>
          </div>

          <p>Reliable engine overhauling, maintenance and genuine spare parts, backed by an experienced service team you can count on.</p>

          <div class="footer-social"></div>
        </div>

        <div class="footer-col">
          <div class="footer-heading">QUICK LINKS</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="index.html#gallery">Gallery</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <div class="footer-heading">OUR SERVICES</div>
          <ul class="footer-links">
            <li><a href="services.html">Engine Overhauling</a></li>
            <li><a href="services.html">Engine Maintenance</a></li>
            <li><a href="services.html">Spare Parts Supply</a></li>
            <li><a href="services.html">Onsite Service</a></li>
            <li><a href="services.html">AMC & Service Contracts</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <div class="footer-heading">CONTACT INFO</div>
          <ul class="footer-contact">
            <li>
              <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>2-2-128/G/100/1, PLOT NO 100, Sai Baba Nagar Colony, Road No.1, Laxma Reddy Colony, Uppal, Hyderabad, Telangana – 500039, India</span>
            </li>

            <li>
              <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z"></path>
              </svg>
              <span><a href="tel:+918121312253">+91 81213 12253</a></span>
            </li>

            <li>
              <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                <path d="m2 6 10 7L22 6"></path>
              </svg>
              <span>
                <a href="mailto:dieseltechniaclsolutions@zohomail.in">dieseltechniaclsolutions@zohomail.in</a><br/>
                <a href="mailto:dieseltechniaclsolutions@gmail.com">dieseltechniaclsolutions@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="wrap footer-bottom-bar">
        <p>© 2026 DTS — Diesel Technical Solution. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  `,

  scripts: [
    `
      (function () {
        const burgerBtn = document.getElementById("burgerBtn");
        const closeBtn = document.getElementById("closeBtn");
        const mobileNav = document.getElementById("mobileNav");

        if (burgerBtn && mobileNav) {
          burgerBtn.addEventListener("click", function () {
            mobileNav.classList.add("open");
            document.body.classList.add("nav-open");
          });
        }

        if (closeBtn && mobileNav) {
          closeBtn.addEventListener("click", function () {
            mobileNav.classList.remove("open");
            document.body.classList.remove("nav-open");
          });
        }

        document.querySelectorAll(".mobile-link").forEach(function (link) {
          link.addEventListener("click", function () {
            if (mobileNav) mobileNav.classList.remove("open");
            document.body.classList.remove("nav-open");
          });
        });

        // Live backend URL
        const API_URL =
          "https://dieseltechnicalsolutions-s2jm.onrender.com/api/contact";

        const contactForm = document.getElementById("contactForm");
        const formSuccess = document.getElementById("formSuccess");
        const formError = document.getElementById("formError");

        if (!contactForm) return;

        contactForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          if (formSuccess) formSuccess.style.display = "none";
          if (formError) {
            formError.style.display = "none";
            formError.textContent = "";
          }

          const submitButton = contactForm.querySelector(
            "button[type='submit']"
          );

          if (!submitButton) return;

          const originalButtonHTML = submitButton.innerHTML;

          const formData = {
            fname: document.getElementById("fname").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            email: document.getElementById("email").value.trim(),
            service: document.getElementById("service").value,
            message: document.getElementById("message").value.trim()
          };

          if (
            !formData.fname ||
            !formData.phone ||
            !formData.email ||
            !formData.message
          ) {
            if (formError) {
              formError.textContent = "Please fill in all required fields.";
              formError.style.display = "flex";
            }
            return;
          }

          submitButton.disabled = true;
          submitButton.textContent = "Sending...";

          try {
            const response = await fetch(API_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
            });

            const result = await response.json().catch(function () {
              return {};
            });

            if (!response.ok || result.success !== true) {
              throw new Error(
                result.message || "Unable to send your message. Please try again."
              );
            }

            if (formSuccess) {
              formSuccess.textContent =
                result.message || "Thank you! Your message has been received.";
              formSuccess.style.display = "flex";
            }

            contactForm.reset();

            if (formSuccess) {
              formSuccess.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
              });
            }

          } catch (error) {
            console.error("Contact form submission error:", error);

            if (formError) {
              formError.textContent =
                error.message || "Unable to send your message. Please try again.";
              formError.style.display = "flex";
            }

          } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHTML;
          }
        });
      })();
    `
  ]
};
