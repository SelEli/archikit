/* ============================
   INJECTION DU HEADER
============================ */
function injectHeader() {
  const header = document.querySelector("header");
  if (!header) return;

  const { name } = window.SITE_INFO;

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand site-name" href="index.html">${name}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navMain" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto" id="menu-container"></ul>
        </div>
      </div>
    </nav>
  `;
}


/* ============================
   INJECTION DU FOOTER
============================ */
function injectFooter() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const info = window.SITE_INFO;
  const c = window.SITE_CONTACT;
  const legal = window.SITE_LEGAL_DATA;

  footer.innerHTML = `
    <div class="footer-grid">

      <div class="footer-card-orange">
        <div class="row">

          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <h4>${info.name}</h4>
            <p class="mb-0">${info.baseline}</p>
          </div>

          <div class="col-12 col-md-6">
            <p class="mb-1"><i class="bi bi-geo-alt me-2"></i>${c.address}</p>
            <p class="mb-1"><i class="bi bi-telephone me-2"></i>${c.phone}</p>
            <p class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              <a class="contact-email-link text-dark">${c.email}</a>
            </p>
            <a href="contact.html" class="btn btn-dark btn-sm">Nous contacter</a>
          </div>

        </div>
      </div>

      <div class="footer-block">
        <h4>Navigation</h4>
        <ul class="list-unstyled" id="footer-menu"></ul>
      </div>

      <div class="footer-block">
        <h4>Nos services</h4>
        <ul class="list-unstyled" id="footer-services"></ul>
      </div>

    </div>

    <div class="footer-bottom">
      © ${info.year} – Designed by 
      <a class="editor-email">${legal.editor_name}</a>
    </div>
  `;
}


/* ============================
   REMPLISSAGE DU MENU
============================ */
function fillMenu() {
  const menuData = window.MENU;
  if (!menuData) return;

  const menu = document.getElementById("menu-container");
  const footerMenu = document.getElementById("footer-menu");

  if (menu) {
    menu.innerHTML = menuData
      .map(item => `<li class="nav-item"><a class="nav-link" href="${item.href}">${item.label}</a></li>`)
      .join("");
  }

  if (footerMenu) {
    footerMenu.innerHTML =
      menuData.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join("") +
      `<li><a href="${window.SITE_LEGAL.legal}">Mentions légales</a></li>`;
  }
}


/* ============================
   REMPLISSAGE DES SERVICES
============================ */
function fillServices() {
  const list = document.getElementById("footer-services");
  const services = window.SITE_SERVICES;

  if (!list || !services) return;

  list.innerHTML = services.map(s => `<li>${s}</li>`).join("");
}


/* ============================
   INJECTION DES DONNÉES PAR PAGE
============================ */
function injectPageContent() {
  const info = window.SITE_INFO;
  const contact = window.SITE_CONTACT;
  const hours = window.SITE_HOURS;
  const legal = window.SITE_LEGAL_DATA;

  const placeholders = [
    // INFO
    ["hero-name", info.name],
    ["hero-baseline", info.baseline],
    ["intro-name", info.name],
    ["company-name", info.name],

    // CONTACT
    ["contact-address", contact.address],
    ["contact-phone", contact.phone],
    ["contact-email", contact.email],
    ["location-city", contact.city],

    // HOURS
    ["hours-weekdays", hours?.weekdays],
    ["hours-weekend", hours?.weekend],

    // LEGAL — publication
    ["legal-siren", legal.publication_siren],
    ["legal-tva", legal.publication_tva],
    ["legal-capital", legal.publication_capital],

    // LEGAL — éditeur
    ["editor-name", legal.editor_name],
    ["editor-email", legal.editor_email],

    // LEGAL — hébergeur
    ["host-name", legal.host_name],
    ["host-address", legal.host_address],
    ["host-url", legal.host_url]
  ];

  // Injection TEXTUELLE (multi-occurrences)
  placeholders.forEach(([cls, value]) => {
    document.querySelectorAll("." + cls).forEach(el => {
      el.textContent = value;
    });
  });

  // Liens email (multi-occurrences)
  document.querySelectorAll(".contact-email-link").forEach(el => {
    el.href = `mailto:${contact.email}`;
    el.textContent = contact.email;
  });

  // CTA email (multi-occurrences)
  document.querySelectorAll(".contact-email-link-cta").forEach(el => {
    el.href = `mailto:${contact.email}`;
  });

  // Map (multi-occurrences)
  document.querySelectorAll(".contact-map").forEach(el => {
    el.src = contact.mapEmbed;
  });

  // Title (only if empty)
  const pageTitle = document.querySelector("title");
  if (pageTitle && !pageTitle.textContent) {
    pageTitle.textContent = `${info.name}`;
  }

  // Meta description (only if empty)
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && !metaDesc.getAttribute("content")) {
    metaDesc.setAttribute("content", `${info.name} – ${info.baseline}`);
  }
}


/* ============================
   INITIALISATION
============================ */
document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
  fillMenu();
  fillServices();
  injectPageContent();
});
