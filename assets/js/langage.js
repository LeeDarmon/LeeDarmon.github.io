$( document ).ready(function() {
    var lang =  true;

    if (lang == true){
        console.log('pas de modif');
        $('#title').html('Bienvenue sur le CV numérique de  ');
        $('#introduction').html('Je suis un développeur fullstack spécialisé dans le langage PHP dont Symfony. <br> Cliquez sur une rubrique ci-dessous pour commencer à parcourir mon CV .');
       
    }


$( "#fr" ).click(function() {
  console.log('langage set to fr');
  lang = true;
  $('#title').html('Bienvenue sur le CV numérique de  ');
  $('#introduction').html('Je suis un développeur fullstack spécialisé dans le langage PHP dont Symfony. <br> Cliquez sur une rubrique ci-dessous pour commencer à parcourir mon CV .');
});

$( "#en" ).click(function() {
    console.log('langage set to en');
    lang = false;
    $('#title').html('Welcome to the digital resume of  ');
    $('#introduction').html('I am a fullstack developer specialized in the PHP langage and Symfony. <br> Click a button in order to begin to browse my resume.');
});





});