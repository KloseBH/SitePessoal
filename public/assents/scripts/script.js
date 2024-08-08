$(document).ready(function() {
    //$("#SobreMim, #Habilidades, #Experiencias, #Escolaridade, .centered-item img" ).css("display", "none");

    $("#Infos").mouseenter(function() {
        $("#SobreMim").slideDown(1000); 
        $("#Habilidades").slideDown(1500); 
        $("#Experiencias").slideDown(2000); 
        $("#Escolaridade").slideDown(2500); 
    });

    $("#Projetos").mouseenter(function() {
        //Colocar animações dos projetos aqui
    });

    $(".centered-item img").fadeIn(1000);
});

