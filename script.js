/* ============================================
ACCRFB - JS COMPLETO CORREGIDO
============================================ */

const translations = {
  es: {
    "nav-inicio": "Inicio",
    "tl":"Teléfono",
    "key":"Llave Pix (E-mail)",
    "nav-sobre": "Nosotros",
    "tr":"Trabajando por la dignidad y el bienestar de los cubanos en Brasil. Construyendo puentes de esperanza desde 2026.",
    "ubi":"Ubicación",
    "nav-proyectos": "Proyectos",
    "nav-donar": "Donar Ahora",
    "hero-tag": "Asociación de Comunidades Cubanas en Brasil",
    "hero-title": "Construyendo un futuro juntos en Brasil",
    "hero-subtitle": "Brindamos soporte legal, social y cultural.",
    "btn-donar-hero": "Quiero Ayudar",
    "btn-saber-mas": "Saber Más",
    "stat-1": "Familias Apoyadas",
    "stat-2": "Proyectos Activos",
    "stat-3": "Miembros",
    "title-sobre": "Quiénes Somos",
    "title-proyectos": "Nuestros Proyectos",
    "p1-title": "Ayuda Humanitaria",
    "p1-desc": "Distribución de alimentos y kits básicos",
    "p2-title": "Integración Cultural",
    "p2-desc": "Eventos culturales ",
    "p3-title": "Capacitación Profesional",
    "p3-desc": "Cursos y formación laboral",
    "title-donar": "Tu apoyo cambia vidas",
    "pix-text": "Donaciones directas para ayuda humanitaria",
    "desc-sobre":"Somos una organización comunitaria dedicada a apoyar a migrantes y refugiados cubanos en Brasil. Brindamos orientación, acompañamiento y acceso a recursos esenciales, promoviendo la inclusión social, el respeto a los derechos humanos y una vida digna.Trabajamos para fortalecer la integración cultural, social y económica, fomentando la solidaridad y la convivencia en la sociedad brasileña..",
"section-subtitle":"Actuales y Futuros proyectos para la comunidad cubana",
"section":"Vision y Mision",
"vision":"Brindar apoyo, orientación y acompañamiento a los migrantes y refugiados cubanos, promoviendo la protección de sus derechos humanos, la inclusión social y el acceso a servicios básicos, con el fin de garantizar condiciones de vida dignas y seguras.",
"title-":"Misión",
"vision":"Visión",
"v-text":"Consolidarse como una organización comunitaria sólida, transparente y reconocida, que contribuya de manera efectiva a la integración social, cultural y económica de los migrantes cubanos en la sociedad brasileña, fortaleciendo la solidaridad y la convivencia intercultural.",
"desc-":"Brindar apoyo, orientación y acompañamiento a los migrantes y refugiados cubanos, promoviendo la protección de sus derechos humanos, la inclusión social y el acceso a servicios básicos, con el fin de garantizar condiciones de vida dignas y seguras.",
"title-valores":"Valores",
"desc-valores":"Solidaridad, dignidad, respeto, inclusión y compromiso con el bienestar de nuestra comunidad.",
  },

  pt: {
    "nav-inicio": "Início",
    "ubi":"Localização",
    "nav-sobre": "Sobre nós",
    "nav-proyectos": "Projetos",
    "nav-donar": "Doar Agora",
    "hero-tag": "ASSOCIAÇÃO DAS COMUNIDADES CUBANAS NO BRASIL",
    "hero-title": "Construindo um futuro juntos",
    "hero-subtitle": "Apoio legal, social e cultural.",
    "btn-donar-hero": "Quero Ajudar",
    "btn-saber-mas": "Saber Mais",
    "stat-1": "Famílias Apoiadas",
    "stat-2": "Projetos Ativos",
    "stat-3": "Membros",
    "title-sobre": "Quem Somos",
    "title-proyectos": "Projetos",
    "p1-title": "Ajuda Humanitária",
    "p1-desc": "Distribuição de alimentos",
    "desc-valores":"Solidariedade, dignidade, respeito, inclusão e compromisso com o bem-estar da nossa comunidade.",
    "p2-title": "Integração Cultural",
    "p2-desc": "Eventos culturais",
    "p3-title": "Formação Profissional",
    "p3-desc": "Cursos e treinamento",
    "title-donar": "Seu apoio muda vidas",
    "pix-text": "Doações para ajuda direta",
    "desc-sobre":"Somos uma organização comunitária dedicada a apoiar migrantes e refugiados cubanos no Brasil. Oferecemos orientação, apoio e acesso a recursos essenciais, promovendo a inclusão social, o respeito aos direitos humanos e uma vida digna. Trabalhamos para fortalecer a integração cultural, social e econômica, fomentando a solidariedade e a convivência na sociedade brasileira.",
"sobre-list": "Apoio em procedimentos de imigração",
"sobre-list1": "Rede de Emprego e Formação",
"section-subtitle":"Projetos atuais e futuros para a comunidade cubana",
"section":"Visão e Missão",
"vision":"Prestar apoio, orientação e acompanhamento a migrantes e refugiados cubanos, promovendo a proteção dos seus direitos humanos, a inclusão social e o acesso a serviços básicos, a fim de garantir condições de vida dignas e seguras.",
"title-":"Missão",
"vision":"Visão",
"v-text":"Consolidar-se como uma organização comunitária sólida, transparente e reconhecida, que contribua efetivamente para a integração social, cultural e econômica dos migrantes cubanos na sociedade brasileira, fortalecendo a solidariedade e a convivência intercultural",
"desc-":"Prestar apoio, orientação e acompanhamento a migrantes e refugiados cubanos, promovendo a proteção dos seus direitos humanos, a inclusão social e o acesso a serviços básicos, a fim de garantir condições de vida dignas e seguras.",
"title-valores":"Valores",
"key":"Chave Pix (E-mail)",
"tr":"Trabalhando pela dignidade e bem-estar dos cubanos no Brasil. Construindo pontes de esperança desde 2026.",
"tl":"Telefone",
  },

  en: {
    "nav-inicio": "Home",
    "desc-valores":"Solidarity, dignity, respect, inclusion, and commitment to the well-being of our community",
    "tr":"Working for the dignity and well-being of Cubans in Brazil. Building bridges of hope since 2026.",
    "key":"Pix Key (E-mail)",
    "nav-sobre": "About",
    "nav-proyectos": "Projects",
    "nav-donar": "Donate Now",
    "hero-tag": "ASSOCIATION OF CUBAN COMMUNITIES IN BRAZIL",
    "hero-title": "Building a future together",
    "title-valores":"Values",
    "hero-subtitle": "Legal, social and cultural support.",
    "btn-donar-hero": "I Want to Help",
    "btn-saber-mas": "Learn More",
    "stat-1": "Families Helped",
    "stat-2": "Active Projects",
    "stat-3": "Members",
    "title-sobre": "Who We Are",
    "title-proyectos": "Our Projects",
    "p1-title": "Humanitarian Aid",
    "p1-desc": "Food distribution",
    "p2-title": "Cultural Integration",
    "p2-desc": "Cultural events",
    "p3-title": "Professional Training",
    "p3-desc": "Courses and training",
    "title-donar": "Your support changes lives",
    "pix-text": "Direct donations for aid",
    "desc-sobre":"We are a community organization dedicated to supporting Cuban migrants and refugees in Brazil. We provide guidance, accompaniment, and access to essential resources, promoting social inclusion, respect for human rights, and a dignified life. We work to strengthen cultural, social, and economic integration, fostering solidarity and coexistence in Brazilian society",
    "section-subtitle":"Current and Future Projects for the Cuban Community",
    "desc-":"To provide support, guidance and accompaniment to Cuban migrants and refugees, promoting the protection of their human rights, social inclusion and access to basic services, in order to guarantee dignified and safe living conditions.",
    
    
    "section":"Vision and Mission",
    "vision":"To provide support,guidance, and accompaniment to Cuban migrants and refugees, promoting the protection of their human rights, social inclusion, and access to basic services, in order to guarantee dignified and safe living conditions",
    "title-":"Mission",
    "vision":"vision",
    "v-text":"To consolidate itself as a solid, transparent, and recognized community organization that effectively contributes to the social, cultural, and economic integration of Cuban migrants into Brazilian society, strengthening solidarity and intercultural coexistence.",
    "ubi":"Location",
    "tl":"Telephone",
  }
};

/* =========================
IDIOMA
========================= */

function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");

  if (heroTitle) heroTitle.textContent = translations[lang]["hero-title"];
  if (heroSubtitle) heroSubtitle.textContent = translations[lang]["hero-subtitle"];

  const langText = document.getElementById("lang-text-current");
  const langIcon = document.getElementById("lang-icon-current");

  if (langText) {
    langText.textContent =
      lang === "es" ? "Español" :
      lang === "pt" ? "Português" : "English";
  }

  if (langIcon) langIcon.textContent = lang.toUpperCase();

  localStorage.setItem("lang", lang);
}

/* =========================
SELECTOR IDIOMA
========================= */

function selectLang(lang) {
  applyLanguage(lang);

  document.querySelectorAll(".lang-option")
    .forEach(el => el.classList.remove("active"));

  document.querySelector(`[data-lang="${lang}"]`)
    ?.classList.add("active");

  document.getElementById("lang-selector")
    ?.classList.remove("active");
}

function toggleLangMenu() {
  document.getElementById("lang-selector")
    ?.classList.toggle("active");
}

/* =========================
HAMBURGUESA (🔥 FIX REAL)
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const savedLang = localStorage.getItem("lang") || "es";
  applyLanguage(savedLang);

  // 🔥 MENU HAMBURGUESA
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // cerrar menú al clicar link
  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

});
/* =========================
COPIAR PIX (FIX)
========================= */

function copyPix() {
  const pix = document.getElementById("pix-key").textContent;

  navigator.clipboard.writeText(pix).then(() => {

    // feedback visual simple
    const btn = event.target.closest("button");
    const original = btn.innerHTML;

    btn.innerHTML = "✔ CNo se pudo copiar el PIX";
    btn.style.background = "#10b981";

    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = "";
    }, 1500);

  }).catch(() => {
    alert("✔ Copiado");
  });
}