function Figura(nazwa) {
  this.nazwa = nazwa;
}

function Czworokat(nazwa, typ_czworokata, dlugosci_bokow) {
  this.typ_czworokata = typ_czworokata;
  this.dlugosci_bokow = dlugosci_bokow;
  Figura.call(this, nazwa);
}

function Prostokat(nazwa, typ_czworokata, dlugosci_bokow) {
  Czworokat.call(this, nazwa, typ_czworokata, dlugosci_bokow);
}

Prostokat.prototype.podaj_pole = function (){
  return this.dlugosci_bokow[0] * this.dlugosci_bokow[1];
}

Prostokat.prototype.podaj_obwod = function (){
  return this.dlugosci_bokow[0] + this.dlugosci_bokow[1] +
    this.dlugosci_bokow[2] + this.dlugosci_bokow[3];
}

x = new Prostokat("figurka", "prostokat", [5,8,5,8]);
console.log(x.nazwa);
console.log(x.typ_czworokata);
console.log(x.podaj_pole());
console.log(x.podaj_obwod());
