// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
let observasjonen = [];
function Observasjonen() {
    const observasjone = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        epost: $("#epost").val(),
        hvor: $("#hvor").val(),
        når: $("#når").val()
    };
    $.post("/lagre", observasjonen, function () {
        visAlleobservasjonene();
    });
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#hvor").val("");
    $("#når").val("");

}
const feil = validerInput();
if (!feil) {
    observasjonen.push(observasjonen);

    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#hvor").val("");
    $('#når').get(0).selectedIndex = 0;

}

function visAlleobservasjonene() {
    let ut = "<table><tr><th>hvor</th><th>når</th>";
    for (let b of observasjonen) {
        ut += "<tr><td>" + b.hvor + "</td><td>" + b.når;
        ut += "<td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.epost + "</td>;
        ut += "</td></tr>";
    }
    $("#alleobservasjonene").html(ut);
}

function slettAlle() {
    observasjonene = [];
    visAlleobservasjonene();
}

function validerInput() {
    $("#fornavnFeil").html("");
    $("#etternavnFeil").html("");
    $("#epostFeil").html("");
    $("#hvorFeil").html("");
    $("#nårFeil").html("");
    let feil = false;
    if ($("#fornavn").val() === "") {
        $("#fornavnFeil").html("Må skrive noe inn i fornavnet");
        feil = true;
    }
    if ($("#etternavn").val() === "") {
        $("#etternavnFeil").html("Må skrive noe inn i etternavnet");
        feil = true;
    }
    if ($("#epost").val() === "") {
        $("#epostFeil").html("Må skrive noe inn i telefonnr");
        feil = true;
    }
    if ($("#hvor").val() === "") {
        $("#hvorFeilFeil").html("Må skrive noe inn i epost");
        feil = true;
    }
    if ($("#når").val() === "") {
        $("#nårFeil").html("Må skrive noe inn i antall");
        feil = true;
    }
    return feil;
}

// Write your JavaScript code.
