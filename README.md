# Site des AG des personnels

Site simple (pages HTML, sans base de données) pour centraliser les informations des assemblées générales.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : la prochaine AG (date, lieu, ordre du jour, infos) |
| `ag-precedentes.html` | Historique des AG : résumés, décisions, comptes rendus |
| `action.html` | Action en cours : calendrier et répartition des tâches |
| `taches-permanentes.html` | Tâches récurrentes (communication, organisation…) |
| `infos.html` | Votes déjà faits, revendications, infos syndicales |
| `fonctionnement.html` | Affiche du fonctionnement des AG |
| `menu.js` | Nom du site, **menu** et pied de page (communs à toutes les pages) |
| `style.css` | Apparence (couleurs, polices). Normalement pas besoin d'y toucher |
| `comptes-rendus/` | PDF des comptes rendus |
| `images/` | Affiche du fonctionnement |

## Modifier une page (sans connaître le HTML)

1. Sur GitHub, ouvrir le fichier, puis cliquer sur l'icône crayon (« Edit this file »).
2. Lire le commentaire en haut du fichier (le texte entre `<!--` et `-->`) : il explique quoi modifier.
3. Changer uniquement le texte **entre** les balises, par exemple dans `<p>Mon texte</p>`, ne changer que `Mon texte`.
4. Pour ajouter un élément (une AG, une tâche, un vote…), copier un bloc existant et le modifier : chaque page indique quel bloc copier.
5. Cliquer sur « Commit changes ». Le site est mis à jour en une à deux minutes.

**Après chaque AG** : ajouter son résumé dans `ag-precedentes.html`, puis mettre les infos de l'AG suivante dans `index.html`.

## Mettre le site en ligne avec GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `site-ag`) et y déposer tous les fichiers de ce dossier (« Add file » > « Upload files »).
2. Dans le dépôt : **Settings** > **Pages**.
3. Dans « Build and deployment », choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une ou deux minutes, l'adresse du site s'affiche en haut de cette page (de la forme `https://nom-du-compte.github.io/site-ag/`).

Conseil : créer une **organisation** GitHub pour le collectif plutôt qu'utiliser un compte personnel, et y ajouter les personnes qui mettent à jour le site.

## À configurer une fois

- `menu.js` : nom du site, sous-titre, adresse de contact.
- `action.html` : lien vers l'inscription aux tâches (il commence par `https://exemple.fr`).
- `images/` : déposer l'affiche sous le nom `affiche-fonctionnement.jpg`.

## Voir le site sur son ordinateur avant de le publier

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur.
