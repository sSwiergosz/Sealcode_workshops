class Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokUrodzenia = rokUrodzenia;
        this.plec = plec;
    }
    podajWiek() {
        let d = new Date();
        let obecnyRok = d.getFullYear();
        return obecnyRok - this.rokUrodzenia;
    }
}

class Nauczyciel extends Osoba {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
        super(imie, nazwisko, rokUrodzenia, plec);
        this.nauczanyPrzedmiot = nauczanyPrzedmiot;
        this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    }
    podajIloscLatPracy() {
        let d = new Date();
        let obecnyRok = d.getFullYear();
        return obecnyRok - this.rokRozpoczeciaPracy;
    }
}

class Wychowawca extends Nauczyciel {
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
        super(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
        this.przydzielonaKlasa = przydzielonaKlasa;
    }
}

let x = new Wychowawca('Szymon', 'Swiergosz', 1995, 'mezczyzna', 'matematyka', '2016');
console.log(x);
console.log(x.podajWiek());
console.log(x.podajIloscLatPracy());