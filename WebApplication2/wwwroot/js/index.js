$(function () {
    hentAllePersonene();
});

function hentAllePersoner() {
    $.get("Person/hentAlle", function (Personer) {
        formaterPersoner(Personer);
    });
}

function formaterPersoner(Personer) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th> <th>Etternavn</th> <th>Email</th><th></th>" +
        "</tr>";
    for (let Person of Personer) {
        ut += "<tr>" +
            "<td>" + Person.Fornavn + "</td>" +
            "<td>" + Person.Etternavn + "</td>" +
            "<td>" + Person.Email + "</td>" +
            "<td> <a class='btn btn-primary' href='endre.html?id=" + Person.id + "'>Endre</a></td>" +
            "<td> <button class='btn btn-danger' onclick='slettKunde(" + Perosn.id + ")'>Slett</button></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#Personene").html(ut);
}

function slettPerson(id) {
    const url = "Person/Slett?id=" + id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'index.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }

    });
};