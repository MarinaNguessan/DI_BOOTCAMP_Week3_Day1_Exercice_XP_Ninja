/* Créons la fonction createCalendar */

function createCalendar(year, month) {
    /*  Création du premier jour du calendrier */
    let firstDay = new Date(year, month, 1);

    /*  Créons le numéro du jour de la semaine (0 pour dimanche, 1 pour lundi, etc.) */
    let firstDayWeekday = firstDay.getDay();

    /* Si le premier jour tombe un dimanche, mettre à jour le numéro du jour de la semaine pour être 7 (afin de l'afficher en tant que dimanche dans le calendrier)*/
    if (firstDayWeekday === 0) {
        firstDayWeekday = 7;
    }

    /* Détermination du nombre de jours dans le mois */
    let numDays = new Date(year, month + 1, 0).getDate();

    /* Créons un tableau pour stocker le calendrier */
    let calendar = [];

    /* Créons le titre du calendrier (noms des jours de la semaine) */
    let weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    let titleRow = `<tr><th>${weekdays.join("</th><th>")}</th></tr>`;
    calendar.push(titleRow);

    /* Créons une ligne vide pour le premier jour du mois (pour aligner le calendrier correctement) */
    let emptyCells = "";
    for (let i = 1; i < firstDayWeekday; i++) {
        emptyCells += "<td></td>";
    }

    /* Créons le reste du calendrier */
    let currentDay = 1;
    while (currentDay <= numDays) {
        let row = "<tr>";
        for (let i = 1; i <= 7; i++) {
            if (currentDay > numDays) {
                row += "<td></td>";
            } else {
                row += `<td>${currentDay}</td>`;
                currentDay++;
            }
        }
        row += "</tr>";
        calendar.push(row);
    }

    /* Créons le tableau HTML et le retourner */
    return `<table>${calendar.join("")}</table>`;
}  

let annee = prompt("veuillez entrer une Annee au format AAAA")
let day = prompt("veuillez entrer le jour au format JJ")
let calendarHTML = createCalendar(`${annee}`,`${day}`);
document.body.innerHTML = calendarHTML;



