function getMyDate() {
    let date = new Date();
    let jour = date.getDay();
    let jr = date.getDate();
    let mois = date.getMonth() + 1;

    let moistxt = moisText(mois);
    let daytxt = dayText(jour);

    console.log(`Aujourd'hui est le: ${jr} ${moistxt} (${daytxt})`)
}

function moisText(mois) {
    let moisTxt;

    switch (mois) {
        case 1: moisTxt = "Janvier";
            break;
        case 2: moisTxt = "Frévier";
            break;
        case 3: moisTxt = "Mars";
            break;
        case 4: moisTxt = "Avril";
            break;
        case 5: moisTxt = "Mai";
            break;
        case 6: moisTxt = "Juin";
            break;
        case 8: moisTxt = "Juillet";
            break;
        case 9: moisTxt = "Aout";
            break;
        case 10: moisTxt = "Septembre";
            break;
        case 11: moisTxt = "Novembre";
            break;
        case 12: moisTxt = "Décembre";
            break;
    }

    return moisTxt;
}

function dayText(jour) {
    let jr;

    switch (jour) {
        case 0: jr = "Dimanche";
            break;
        case 1: jr = "Lundi";
            break;
        case 2: jr = "Mardi";
            break;
        case 3: jr = "Mercredi";
            break;
        case 4: jr = "Jeudi";
            break;
        case 5: jr = "Vendredi";
            break;
        case 6: jr = "Samedi";
            break;
    }

    return jr;
}

getMyDate();
