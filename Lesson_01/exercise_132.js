class Figura {
    constructor(nazwa) {
      this.nazwa = nazwa;
    }
}

class Czworokat extends Figura {
    constructor(nazwa, typ_czworokata, dlugosci_bokow) {
      super(nazwa);
      this.typ_czworokata = typ_czworokata;
      this.dlugosci_bokow = dlugosci_bokow;
    }
}

class Prostokat extends Czworokat {
    podajPole() {
      console.log(this.dlugosci_bokow[0] * this.dlugosci_bokow[1]);
    }
    podajObwod() {
      console.log(this.dlugosci_bokow[0] + this.dlugosci_bokow[1] +
        this.dlugosci_bokow[2] + this.dlugosci_bokow[3]);
    }
}

let x = new Prostokat("figurka", "prostokat", [5,8,5,8]);
x.podajPole();
x.podajObwod();
