$(document).ready(function() {
    $("#InfosBody, #ProjetosBody, .centered-item img" ).css("display", "none");

    $("#Infos").mouseenter(function() {
        var altura = $("#InfosBody");
        $("#InfosBody").slideDown(2000); 
    });

    $("#Projetos").mouseenter(function() {
        $("ProjetosBody").slideDown(2000);
    });

    $(".centered-item img").fadeIn(1000);
});

