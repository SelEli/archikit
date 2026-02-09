# ArchiKit

Site vitrine statique léger et réutilisable, construit en HTML/CSS/JS avec Bootstrap 5 et SCSS.  
Aucun backend : déploiement simple par FTP, uniquement du statique.

> Projet anonymisé basé sur un site vitrine réel.  
> Les données ont été remplacées par des exemples fictifs.

---

## 📑 Index

- [Aperçu du site](#-apercu-du-site)
- [Objectif du projet](#-objectif-du-projet)
- [Fonctionnalités](#-fonctionnalites)
- [Structure du projet](#-structure-du-projet)
- [Développement](#-developpement)
- [Build](#-build)
- [Déploiement](#-deploiement)
- [Personnalisation](#-personnalisation)
- [Licence](#-licence)

---

## 📸 Aperçu du site

Quelques captures d’écran pour visualiser rapidement le rendu :

Page d’accueil

Page projets

Version mobile

(Les images sont disponibles dans le dossier /docs/ )

---

## 🎯 Objectif du projet

Ce projet a été créé pour répondre à un besoin simple :  
développer un site vitrine statique, léger et facile à maintenir, sans backend ni CMS.

L’objectif était de :
- produire un site propre et réactif,
- factoriser les éléments récurrents (header, footer, sections),
- centraliser les données dans un fichier JSON,
- garder une architecture simple, compréhensible et réutilisable,
- permettre un déploiement immédiat via FTP.

Ce projet montre ma capacité à :
- structurer un site statique complet,
- organiser des assets proprement,
- utiliser SCSS et Bootstrap de manière modulaire,
- manipuler JSON et JavaScript pour automatiser des sections communes,
- livrer un projet finalisé et maintenable.

---

## 🚀 Fonctionnalités

- Pages HTML statiques, structure simple et maintenable.
- Styles personnalisés via SCSS et overrides Bootstrap.
- Données centralisées dans un fichier JSON.
- Header, footer et sections récurrentes injectés automatiquement via JavaScript.
- Déploiement direct sur n’importe quel hébergeur (OVH, Ionos…) sans configuration serveur.

---

## 📂 Structure du projet

assets/
  img/          → images du site  
  js/           → scripts front (main.js, site-data.js)  
  scss/         → SCSS (variables, composants, main.scss)  
  css/          → CSS compilé (main.css)

docs/           → Documentation/screenshots

index.html      → page d’accueil  
company.html    → page entreprise  
expertise.html  → page expertise  
projects.html   → page projets  
contact.html    → page contact  
legal.html      → mentions légales  
README.md       → documentation  
.gitignore      → configuration Git

---

## 🖥️ Développement

Modifier directement les fichiers HTML, SCSS et JS.  
Compiler le SCSS vers CSS avec l’outil de votre choix (Sass CLI, extension VS Code…).

---

## 🏗️ Build

Compiler le SCSS pour générer `assets/css/main.css`.  
Aucun autre build n’est nécessaire.

---

## 📤 Déploiement

Uploader tous les fichiers du projet sur votre hébergement via FTP.  
Le site est immédiatement fonctionnel.

---

## 🛠️ Personnalisation

- Modifier les données globales dans `assets/js/site-data.js`.  
- Modifier les pages HTML à la racine du projet.  
- Modifier les styles dans `assets/scss/`.

---

## 📜 Licence

Projet sous licence ISC.
