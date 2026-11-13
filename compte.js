class CompteBancaire{
    constructor(titulaire, solde){
        this.titulaire=titulaire;
        this.solde=solde;
    }
    deposer(montant){
        if(montant<=0){
            throw new Error("Le montant est invalide");
        }
        this.solde+=montant;
    }
    retirer(montant){
        if(montant>this.solde){
            throw new Error("Solde insuffisant");
        }
            this.solde-=montant;}
    afficher(){
        console.log(`Titulaire: ${this.titulaire}, Solde: ${this.solde}`);
    }
}
const c1= new CompteBancaire("Mukendi",15000);
try{c1.retirer(30000);
    console.log("Retrait effectué");
}catch(Error){
    console.log("Echec:"+Error.message)
}
try{c1.deposer(-500);
    console.log("Depot effectué");}
    catch(Error){
        console.log("Echec:"+Error.message);
    }
c1.afficher();
