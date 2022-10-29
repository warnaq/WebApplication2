function lagrePerson() {
    const person = {
        Fornavn: $("#Fornavn").val(),
        Etternavn: $("#Etternavn").val(),
        Email: $("#Email").val()
    }
    const url = "Person/Register";
    $.post(url, person, function (OK) {
        if (OK) {
            window.location.href = 'sted.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
};

function lagreSted() {
    const sted = {
        adress: $("#adress").val(),
        by: $("#by").val(),
        land: $("#land").val(),
         dato: $("#dato").val()
    }
    const url = "Sted/Register";
    $.post(url, sted, function (OK) {
        if (OK) {
            window.location.href = 'observasjon.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
};
function lagreObservasjon() {
    const observasjon = {
        observasjon: $("#observasjon").val(),
        PersonID: $("#PersonID").val(),
        PersonID: $("#PersonID").val()
    }
    const url = "Observasjon/Register";
    $.post(url, observasjon, function (OK) {
        if (OK) {
            window.location.href = 'register.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
};