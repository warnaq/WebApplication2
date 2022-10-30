$(function () {
    // hent perosn med person-id fra url og vis denne i skjemaet

    const id = window.location.search.substring(1);
    const url = "Person/HentEn?" + id;
    $.get(url, function (Person) {
        $("#Fornavn").val(Person.Fornavn); // må ha med id inn skjemaet, hidden i html
        $("#Etternavn").val(Person.Etternavn);
        $("#Email").val(kunde.Email);
    });
});

function endrePerson() {
    const Person = {
        Fornavn: $("#Fornavn").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        Etternavn: $("#Etternavn").val(),
        Email: $("#Email").val()
    }
    $.post("Person/Endre", Person, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
}