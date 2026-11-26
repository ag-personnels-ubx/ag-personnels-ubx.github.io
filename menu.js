/* =====================================================================
   EN-TÊTE, MENU ET PIED DE PAGE COMMUNS À TOUTES LES PAGES
   ---------------------------------------------------------------------
   Ce fichier fabrique automatiquement, sur chaque page :
     - le bandeau du haut (nom du site),
     - la barre de navigation horizontale,
     - le pied de page.
   Ainsi, pour modifier le menu, on ne le fait qu'UNE SEULE FOIS ici,
   et le changement apparaît sur toutes les pages.

   Ce que vous pouvez modifier sans risque :
     1. Le nom et le sous-titre du site  (partie 1 ci-dessous)
     2. Les rubriques du menu            (partie 2)
     3. Le texte du pied de page         (partie 3)

   Règles à respecter :
     - garder les guillemets "..." autour de chaque texte ;
     - garder la virgule à la fin de chaque ligne du menu ;
     - si votre texte contient lui-même un guillemet ", écrivez \" à la place.
   ===================================================================== */


/* ---------- 1. NOM ET SOUS-TITRE DU SITE ---------- */

var NOM_DU_SITE = "AG des personnels";
var SOUS_TITRE  = "Université de Bordeaux — informations, actions et comptes rendus";


/* ---------- 2. RUBRIQUES DU MENU ----------
   Chaque ligne = une rubrique : { texte: "ce qui s'affiche", page: "nom-du-fichier.html" },
   L'ordre des lignes est l'ordre d'affichage dans la barre.
   Pour ajouter une rubrique : copiez une ligne, changez le texte et le fichier,
   puis créez le fichier .html correspondant (le plus simple : dupliquer une page existante).
   Pour retirer une rubrique : supprimez sa ligne. */

var RUBRIQUES = [
  { texte: "Accueil",             page: "index.html" },
  { texte: "AG précédentes",      page: "ag-precedentes.html" },
  { texte: "Infos générales",     page: "infos.html" },
];


/* ---------- 3. PIED DE PAGE ----------
   Vous pouvez y mettre une adresse de contact.
   Pour un lien e-mail cliquable, remplacez [À compléter] par :
     <a href=\"mailto:adresse@exemple.fr\">adresse@exemple.fr</a>
   (en gardant bien les \ devant les guillemets) */

var PIED_DE_PAGE =
  "Site tenu par les AG des personnels. " +
  "Contact : [À compléter]";


/* =====================================================================
   NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
   (c'est la partie technique qui construit l'en-tête et le menu)
   ===================================================================== */

(function () {
  // Nom du fichier de la page affichée (ex. "action.html"), pour souligner la bonne rubrique
  var pageActuelle = window.location.pathname.split("/").pop() || "index.html";

  var liens = RUBRIQUES.map(function (r) {
    var actif = (r.page === pageActuelle) ? ' class="page-active" aria-current="page"' : "";
    return '<li><a href="' + r.page + '"' + actif + ">" + r.texte + "</a></li>";
  }).join("");

  var entete =
    '<a class="lien-evitement" href="#contenu">Aller au contenu</a>' +
    '<header class="entete"><div class="entete-interieur">' +
      '<a class="nom-site" href="index.html">' + NOM_DU_SITE + "</a>" +
      '<p class="sous-titre-site">' + SOUS_TITRE + "</p>" +
    "</div></header>" +
    '<nav class="menu" aria-label="Menu principal"><ul>' + liens + "</ul></nav>";

  var pied =
    '<footer class="pied"><div class="pied-interieur">' + PIED_DE_PAGE + "</div></footer>";

  document.body.insertAdjacentHTML("afterbegin", entete);
  document.body.insertAdjacentHTML("beforeend", pied);
})();
