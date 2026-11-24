# Site des AG des personnels

Site simple (pages HTML, sans base de données) pour centraliser les informations des assemblées générales.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil : prochaine AG + action du moment |
| `ag.html` | Liste des AG et comptes rendus |
| `action.html` | Action en cours : calendrier et répartition des tâches |
| `ordre-du-jour.html` | Propositions de points pour la prochaine AG et soutiens |
| `taches-permanentes.html` | Tâches récurrentes (communication, organisation…) |
| `infos.html` | Votes déjà faits, revendications, infos syndicales |
| `fonctionnement.html` | Règles de fonctionnement des AG |
| `idees.html` | Boîte à idées |
| `menu.js` | Nom du site, **menu** et pied de page (communs à toutes les pages) |
| `style.css` | Apparence (couleurs, polices). Normalement pas besoin d'y toucher |
| `comptes-rendus/` | Dossier où déposer les PDF des comptes rendus |

## Modifier une page (sans connaître le HTML)

1. Sur GitHub, ouvrir le fichier, puis cliquer sur l'icône crayon (« Edit this file »).
2. Lire le commentaire en haut du fichier (le texte entre `<!--` et `-->`) : il explique quoi modifier.
3. Changer uniquement le texte **entre** les balises, par exemple dans `<p>Mon texte</p>`, ne changer que `Mon texte`.
4. Pour ajouter un élément (une AG, une tâche, un vote…), copier un bloc existant et le modifier : chaque page indique quel bloc copier.
5. Cliquer sur « Commit changes ». Le site est mis à jour en une à deux minutes.

**À chaque changement de prochaine AG ou d'action en cours**, penser à mettre à jour à la fois la page d'accueil (`index.html`) et la page détaillée (`ag.html` ou `action.html`).

## Mettre le site en ligne avec GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `site-ag`) et y déposer tous les fichiers de ce dossier (« Add file » > « Upload files »).
2. Dans le dépôt : **Settings** > **Pages**.
3. Dans « Build and deployment », choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une ou deux minutes, l'adresse du site s'affiche en haut de cette page (de la forme `https://nom-du-compte.github.io/site-ag/`).

Conseil : créer une **organisation** GitHub pour le collectif plutôt qu'utiliser un compte personnel, et y ajouter les personnes qui mettent à jour le site.

## À configurer une fois

- `menu.js` : nom du site, sous-titre, adresse de contact.
- `ordre-du-jour.html` : liens vers le formulaire de propositions et le sondage de soutiens.
- `idees.html` : lien vers le formulaire de la boîte à idées.
- `action.html` : lien vers l'inscription aux tâches.

Tous les liens provisoires commencent par `https://exemple.fr` : une recherche de `exemple.fr` dans chaque fichier permet de les retrouver.

## Voir le site sur son ordinateur avant de le publier

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur.
