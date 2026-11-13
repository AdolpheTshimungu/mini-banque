class CompteBancaire{
    constructor(titulaire, solde){
        this.titulaire=titulaire;
        this.solde=solde;
    }
    deposer(montant){
        this.solde+=montant;
    }
    retirer(montant){
        if(montant>this.solde){
            console.log("Solde insuffisant");
        }else{
            this.solde-=montant;
        }}
    afficher(){
        console.log(`Titulaire: ${this.titulaire}, Solde: ${this.solde}`);
    }
}
const c1= new CompteBancaire("Mukendi",15000);
c1.deposer(5000);
c1.retirer(30000);
c1.retirer(2000);
c1.afficher();