var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("../img/picCharacters.jpg", "../img/hogwartsBattle.jpg", "../img/backstars.gif", "../img/books/harry1.jpg", "../img/castleBackground.jpg", "../img/library.jpg");