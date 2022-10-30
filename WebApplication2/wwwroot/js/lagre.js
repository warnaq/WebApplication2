function lagrePerson() {
    const person = {
        Fornavn: $("#Fornavn").val(),
        Etternavn: $("#Etternavn").val(),
        Email: $("#Email").val()
    }
    const url = "Person/Lagre";
    $.post(url, Person, function (OK) {
        if (OK) {
        window.location.href = 'index.html';
        }
        else {
        $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
};

    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#email").val("");
 }

function hentAlle() {
    $.get("/hentAlle", function (observasjoner) {
        formaterData(observasjoner);
    });
}

function formaterData(observasjoner) {
    let ut = "<table><tr><th>Fornavn</th><th>Etternavn</th><th>Email</th>";
    for (const observasjon of observasjoner) {
        ut += "<tr><td>" + observasjon.Fornavn + "</td><td>" + observasjon.Etternavn + "</td><td>" + observasjon.Email + "</td>" ;
    }
    ut += "</table>";
    $("#observasjonene").html(ut);
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