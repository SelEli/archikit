/* ============================
   CONFIG GLOBALE DU SITE
============================ */

// Identité
window.SITE_INFO = {
  name: "COMPANY_NAME",
  baseline: "COMPANY_BASELINE",
  year: "2024"
};

// Coordonnées
window.SITE_CONTACT = {
  address: "123 Rue Exemple, 00000 Ville, Pays",
  city: "VILLE",
  phone: "+00 00 00 00 00",
  email: "contact@example.com",
  mapEmbed: "MAP_IFRAME_URL"
};

window.SITE_HOURS = {
  weekdays: "WEEKDAYS_HOURS",
  weekend: "WEEKEND_HOURS"
};

// Menu principal (on NE TOUCHE PAS)
window.MENU = [
  { label: "Accueil", href: "index.html" },
  { label: "Entreprise", href: "company.html" },
  { label: "Expertise", href: "expertise.html" },
  { label: "Réalisations", href: "projects.html" },
  { label: "Contact", href: "contact.html" }
];

// Services
window.SITE_SERVICES = [
  "SERVICE_1",
  "SERVICE_2",
  "SERVICE_3",
  "SERVICE_4",
  "SERVICE_5"
];

// Liens légaux
window.SITE_LEGAL = {
  legal: "legal.html",
  privacy: "privacy.html"
};

// ============================
//   MENTIONS LÉGALES (GÉNÉRIQUE)
// ============================

window.SITE_LEGAL_DATA = {
  editor_name: "EDITOR_NAME",
  editor_email: "EDITOR_EMAIL",

  publication_siren: "000 000 000",
  publication_tva: "FR00000000000",
  publication_capital: "0 €",

  host_name: "HOST_NAME",
  host_address: "HOST_ADDRESS",
  host_url: "HOST_URL"
};

// Options globales
window.SITE_OPTIONS = {
  debug: false,
  theme: "light"
};
