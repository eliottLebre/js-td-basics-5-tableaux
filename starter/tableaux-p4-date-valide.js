/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/
// debugger;
// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
        if (annee % 4 === 0){
            if (annee % 100 === 0 && annee % 400 !== 0){
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
}

const maxDayPerMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
    if (isBissextile(annee)){
        if (jour <= maxDayPerMonths[mois - 1]){
            return  true;
        } else {
            return false
        }
    } else {
        maxDayPerMonths[1] = 28;
        if (jour <= maxDayPerMonths[mois -1]){
            return  true;
        } else {
            return false;
        }
    }
}

console.log(isValid(29, 2, 1996));
// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
