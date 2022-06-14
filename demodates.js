var dt = new Date();
console.log("full date", dt);
console.log("year", dt.getFullYear());
console.log("month", new Date().getMonth() + 1);
console.log("day", new Date().getDate());
console.log("day order", dt.getDay());
// ecrire un programme permettant d'afficher le mois et le jour en texte
// a partir de la date du jour
var mois = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
]
var jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
]
console.log("jour= " + jours[dt.getDay()] + " le " + new Date().getDate() + " mois= " + mois[dt.getMonth()] + " ");
