function getNomMois(numMois) {
    numMois = numMois - 1; // On décale de 1 car les indices du tableaux commencent à 0
    var mois = ["Janvier", "Février", "Mars", "Avril" ,"Mai", "Juin", "Juillet",
                "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    if (mois[numMois] != null) {
      return mois[numMois];
    } else {
      throw "NuméroMoisInvalide";  // Ici on utilise l'instruction throw
    }
  }
  
  try { // les instructions à essayer si tout se passe bien
    nomMois = getNomMois(22); // La fonction peut renvoyer une exception
  } catch (e) {
    nomMois = "inconnu";
    console.log(e); // on gère l'erreur avec une fonction
  }
  