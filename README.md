# 🎌 Anime Requester

Projet de groupe réalisé dans le cadre de l’apprentissage du JavaScript *(Projet proposé par Christophe Vallot)*.

## 📌 Description

**Anime Requester** est une application Web qui permet de rechercher des animes via une API publique.  
Grâce à un formulaire interactif, l’utilisateur peut lancer des recherches simples ou avancées et obtenir des résultats affichés dynamiquement sous forme de cartes.

Le projet est décliné en deux versions :
- **V1** : Recherche simple (par nom, identifiant ou classement)
- **V2** : Recherche avancée (par genres, thèmes, etc.) avec options d’affichage supplémentaires (mode clair/sombre, stockage local…)

---

## 🛠️ Technologies utilisées

- **Langages** : HTML, CSS, JavaScript  
- **IDE** : Visual Studio Code  
- **Versionnage** : Git & GitHub  
- **API** : [RapidAPI - Anime DB](https://rapidapi.com/)  
- **Hébergement** : GitHub Pages (V2)

---

## 🎯 Objectifs pédagogiques

- Utiliser une API externe selon sa documentation
- Envoyer des requêtes HTTP avec `fetch`
- Manipuler le DOM pour intégrer dynamiquement du contenu
- Gérer l’apparence d’une page Web via JavaScript
- Appliquer les bonnes pratiques de structuration du code
- Travailler en groupe avec des outils collaboratifs (GitHub)

---

## 📄 Fonctionnalités

### ✅ Version 1 (fonctionnelle)
- Formulaire de recherche (nom, ID, classement)
- Requête vers l’API Anime DB
- Affichage dynamique des résultats :
  - Titre de l’anime
  - Image (si disponible)
  - Synopsis
  - Genres/Catégories
  - Classement
  - Nombre d’épisodes
- Boutons :
  - **Rechercher** : lance la requête
  - **Réinitialiser** : vide le formulaire et efface les résultats
- Design responsive (conforme aux normes HTML/CSS W3C)
- Accessibilité partielle (WCAG AA 2.0)

### 🧪 Version 2 (en cours / finalisée)
- Recherche par genres (cases à cocher ou champs dynamiques)
- Mode clair/sombre (préférence sauvegardée dans `sessionStorage`)
- Clé API fournie par l’utilisateur et stockée localement (session)
- Hébergement sur GitHub Pages

---

## 💻 Utilisation

### 1. Cloner le dépôt
```bash
git clone https://github.com/username/anime-requester.git
cd anime-requester
```

---

## 🔑 Récupérer votre clé API sur RapidAPI

1. **Créer un compte** sur [RapidAPI](https://rapidapi.com/auth/sign-up).  
2. **Rechercher “Anime DB”** dans la barre de recherche.  
3. Cliquer sur **Subscribe** pour s’abonner au plan gratuit.  
4. Aller dans l’onglet **Endpoints**.  
5. Copier votre clé API affichée dans **Request Headers** sous le nom :
   ```
   X-RapidAPI-Key
   ```

⚠️ **Important** : cette clé est personnelle — ne la partagez jamais publiquement et **ne la poussez pas sur GitHub**.

---

## 🧰 Ajouter votre clé API à l’application

- Au **premier lancement**, l’application vous demandera de saisir votre clé API dans un champ prévu à cet effet.  

---

## 🚀 Lancer l’application

1. Ouvrez le fichier `index.html` dans votre navigateur.  
2. Saisissez votre clé API si ce n’est pas déjà fait.  
3. Recherchez des animes par nom, ID, classement ou genre.  
4. Les résultats s’affichent dynamiquement sous forme de cartes.

---

## 🌐 Hébergement

La version finale est déployée sur **GitHub Pages**, ce qui permet d’y accéder depuis n’importe quel navigateur sans installation locale.

---

## 👥 Auteurs

Projet réalisé dans le cadre d’un travail de groupe — encadré par Christophe Vallot.  
- Étudiants participants : *Brice RAMETTE, Milene PELLERIN et Camille GOLLIOT*
 
