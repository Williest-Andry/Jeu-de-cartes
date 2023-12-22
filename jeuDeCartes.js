const prompt=require("prompt-sync")();

function bienvenu(){
    return "Bienvenu sur ce jeu";
}
console.log(bienvenu());

function pseudo(){
    return prompt("Veuillez saisir votre pseudo : ");
}
pseudo();

function jouer(){
    let joueur=0;
    let IA=0;
    let choixJoueur;
    let cartes=["eau","feu","plante"];
    for (let manche=1; manche<=3; manche++){
        let choixIA=cartes[Math.floor(Math.random()*cartes.length)];
        choixJoueur=prompt("Choississez la carte que vous voulez montrer (eau/feu/plante) : ");
        if ((choixJoueur=="eau")&&(choixIA=="feu") || (choixJoueur=="feu")&&(choixIA=="plante") || (choixJoueur=="plante") && (choixIA=="eau")){
            console.log("la reponse de l'IA est : "+choixIA);
            joueur++;
        }
        else if ((choixIA=="eau")&&(choixJoueur=="feu") || (choixIA=="feu")&&(choixJoueur=="plante") || (choixIA=="plante") && (choixJoueur=="eau")){
            console.log("la reponse de l'IA est : "+choixIA);
            IA++;
        }
        else if ((choixJoueur=="eau")&&(choixIA=="eau") || (choixJoueur=="feu")&&(choixIA=="feu") || (choixJoueur=="plante") && (choixIA=="plante")){
            console.log("la reponse de l'IA est : "+choixIA);
            joueur++;
            IA++;
        }
        else {
            do{
                console.log("La manche precedente a ete annulee, veuillez choisir une carte correcte (eau/feu/plante)");
                choixJoueur=prompt("Choississez la carte que vous voulez montrer (eau/feu/plante) : ");
            if ((choixJoueur=="eau")&&(choixIA=="feu") || (choixJoueur=="feu")&&(choixIA=="plante") || (choixJoueur=="plante") && (choixIA=="eau")){
                console.log("la reponse de l'IA est : "+choixIA);
                joueur++;
            }
            else if ((choixIA=="eau")&&(choixJoueur=="feu") || (choixIA=="feu")&&(choixJoueur=="plante") || (choixIA=="plante") && (choixJoueur=="eau")){
                console.log("la reponse de l'IA est : "+choixIA);
                IA++;
            }
            else if ((choixJoueur=="eau")&&(choixIA=="eau") || (choixJoueur=="feu")&&(choixIA=="feu") || (choixJoueur=="plante") && (choixIA=="plante")){
                console.log("la reponse de l'IA est : "+choixIA);
                joueur++;
                IA++;
            }
            }while((choixJoueur!="eau") && (choixJoueur!="feu") && (choixJoueur!="plante"))
        }
    }
    return [joueur,IA];
}

function resultat(){
    let fin= jouer();
    if (fin[0]>fin[1]){
        return "Felicitation! vous avez gagne la partie"
    }
    else if (fin[0]<fin[1]){
        return "Dommage! l'IA a gagne la partie"
    }
    else if(fin[0]==fin[1]){
        console.log("Egalite!");
        let chance=prompt("Voulez vous retenter votre chance? ");
        if (chance=="oui"){
            return resultat();
        }
        else if(chance=="non"){
            return "Merci d'avoir jouer, a la prochaine fois"
        }
                chance=prompt("Voulez vous retenter votre chance? ");
                 if (chance=="oui"){
                    return resultat();
                }
                else if(chance=="non"){
                    return "Merci d'avoir jouer, a la prochaine fois"
                }
            } while ((chance!="oui") || (chance!="non"))
        }
    }
}
console.log(resultat());