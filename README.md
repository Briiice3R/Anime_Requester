# 🎌 Anime Requester

Projet de groupe réalisé dans le cadre de l'apprentissage du JavaScript (Projet proposé par Christophe Vallot).

## 📌 Description

**Anime Requester** est une application Web permettant à l'utilisateur de rechercher des animes via une API publique. Grâce à un formulaire interactif, il est possible de lancer des requêtes simples ou avancées et d'obtenir des résultats affichés dynamiquement sous forme de cartes.

Le projet est décliné en deux versions :
- **V1** : Recherche simple (par nom, identifiant ou classement)
- **V2** : Recherche avancée (par genres, thèmes, etc.) avec options d’affichage supplémentaires (mode clair/sombre, stockage local...)

---

## 🛠️ Technologies utilisées

- **Langages** : HTML, CSS, JavaScript
- **IDE** : Visual Studio Code
- **Versionnage** : Git & GitHub
- **API** : [Anime DB via RapidAPI](https://rapidapi.com/)
- **Hébergement** : GitHub Pages (V2)

---

## 🎯 Objectifs pédagogiques

- Savoir utiliser une API externe selon sa documentation
- Envoyer des requêtes HTTP avec `fetch`
- Manipuler le DOM pour intégrer dynamiquement du contenu
- Gérer l’apparence d’une page Web via JavaScript
- Appliquer les bonnes pratiques de structuration de code (modules, séparation des responsabilités)
- Travailler en groupe avec des outils collaboratifs (GitHub)

---

## 📄 Fonctionnalités

### ✅ Version 1 (fonctionnelle)
- Formulaire de recherche (nom, ID, classement)
- Requête vers l’API Anime DB
- Affichage dynamique de cartes contenant :
  - Titre de l’anime
  - Image (si disponible)
  - Synopsis
  - Genres/Catégories
  - Classement
  - Nombre d’épisodes
- Boutons :
  - **Rechercher** : lance la requête
  - **Réinitialiser** : vide le formulaire et efface les résultats
- Affichage responsive conforme aux normes HTML/CSS (W3C)
- Accessibilité partielle (WCAG AA 2.0)

### 🧪 Version 2 (en cours / finalisée)
- **Recherche par genres** (via cases à cocher ou champs dynamiques)
- **Mode clair/sombre** (préférence sauvegardée dans `sessionStorage`)
- **Clé API** fournie par l’utilisateur et stockée en session (sécurité basique)
- Hébergement sur **GitHub Pages**

---

## 💻 Utilisation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/username/anime-requester.git
