class Livre {
  constructor(titre, annee, auteur) {
    this.titre = titre;
    this.annee = annee;
    this.auteur = auteur;
  }

  afficherInformations() {
    return `Titre : ${this.titre}\nAuteur : ${this.auteur}\nAnnée : ${this.annee}`;
  }
}


let bibliotheque = [];


function ajouterLivre() {
  while (true) {
    try {
      const titre = prompt("Entrez le titre du livre :");
      if (!titre) throw new Error("Titre invalide");

      const auteur = prompt("Entrez l'auteur du livre :");
      if (!auteur) throw new Error("Auteur invalide");

      const annee = prompt("Entrez l'année de parution du livre :");
      if (!annee || isNaN(annee)) throw new Error("Année invalide");

      const livre = new Livre(titre, annee, auteur);
      bibliotheque.push(livre);

      const continuer = prompt("Voulez-vous ajouter un autre livre ? (oui/non)").toLowerCase();
      if (continuer !== "oui") break;

    } catch (err) {
      alert("Erreur : " + err.message);
    }
  }
}


function afficherLivres() {
  if (bibliotheque.length === 0) {
    alert("Aucun livre dans la bibliothèque.");
  } else {
    let message = "Liste des livres :\n\n";
    for (const livre of bibliotheque) {
      message += livre.afficherInformations() + "\n\n";
    }
    alert(message);
  }
}


function rechercherLivre() {
  const titreRecherche = prompt("Entrez le titre exact du livre à rechercher :");
  const livre = bibliotheque.find(l => l.titre.toLowerCase() === titreRecherche.toLowerCase());
  if (livre) {
    alert("Livre trouvé :\n\n" + livre.afficherInformations());
  } else {
    alert("Livre non trouvé.");
  }
}


function supprimerLivre() {
  const titreSuppression = prompt("Entrez le titre exact du livre à supprimer :");
  const index = bibliotheque.findIndex(l => l.titre.toLowerCase() === titreSuppression.toLowerCase());
  if (index !== -1) {
    bibliotheque.splice(index, 1);
    alert("Livre supprimé avec succès.");
  } else {
    alert("Livre non trouvé.");
  }
}


function menu() {
  let quitter = false;

  while (!quitter) {
    const choix = prompt(
      "Choisissez une option :\n" +
      "1. Ajouter un livre\n" +
      "2. Afficher tous les livres\n" +
      "3. Rechercher un livre par titre\n" +
      "4. Supprimer un livre\n" +
      "5. Quitter"
    );

    switch (choix) {
      case "1":
        ajouterLivre();
        break;
      case "2":
        afficherLivres();
        break;
      case "3":
        rechercherLivre();
        break;
      case "4":
        supprimerLivre();
        break;
      case "5":
        quitter = true;
        break;
      default:
        alert("Option invalide. Veuillez réessayer.");
    }
  }

  alert("Merci d'avoir utilisé la bibliothèque !");
}

menu();