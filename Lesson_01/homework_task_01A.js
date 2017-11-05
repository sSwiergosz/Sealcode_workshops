function Osoba(imie, nazwisko, rokUrodzenia, plec) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;
    this.plec = plec;
}

function Nauczyciel(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
    this.nauczanyPrzedmiot = nauczanyPrzedmiot;
    this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    Osoba.call(this, imie, nazwisko, rokUrodzenia, plec);
}

function Wychowawca(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
    this.przydzielonaKlasa = przydzielonaKlasa;
    Nauczyciel.call(this, imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
}

Osoba.prototype.podajWiek = function() {
    var d = new Date();
    var obecnyRok = d.getFullYear();
    return obecnyRok - this.rokUrodzenia;
}

Wychowawca.prototype.podajIloscLatPracy = function() {
    var d = new Date();
    var obecnyRok = d.getFullYear();
    return obecnyRok - this.rokRozpoczeciaPracy;
}

x = new Wychowawca('Szymon', 'Swiergosz', 1995, 'mezczyzna', 'matematyka', '2016');
console.log(x);
console.log(x.podajWiek());
console.log(x.podajIloscLatPracy());