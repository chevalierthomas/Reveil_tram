annee_nb_entier = prompt("Entrez une annee");
mois_chaine_de_caractere = prompt("Entrez un mois (en minuscule et sans accent)");
jour_nb_entier = prompt("Entrez un jour ");
mois_nb_entier = 0;
mois = ["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];
mois_nb = ["01","02","03","04","05","06","07","08","08","09","10","11","12"];
mois_nb_entier = 0;

for (i = 0; i <= mois.length;i=i+1){
    if (mois[i] == mois_chaine_de_caractere){
        mois_nb_entier = mois_nb[i+1];
    }
}
url_api_calendrier = "https://edt-v2.univ-nantes.fr/events?start=" + annee_nb_entier + "-"+ mois_nb_entier +"-"+jour_nb_entier+"&end=" + annee_nb_entier + "-"+ mois_nb_entier +"-"+jour_nb_entier+"&timetables%5B0%5D=53366";
console.log(url_api_calendrier);
///


api_tan = "http://open_preprod.tan.fr/ewp/horairesarret.json";

arret_proximite = ["École Centrale Audencia","Faculté","Bourgonnière"];
arret_proximite_codetan = ["ECSU2","FACU2","BOGE2"];