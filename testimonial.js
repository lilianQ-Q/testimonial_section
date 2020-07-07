function salope(index){
    //Je cherche les éléments dans la page
    var description = document.getElementById(index);
    var picture = document.getElementById("c"+index);
    //J'enlève la classe active pour la description
    for(i = 1; i<=4; i++){
        var aDesc = document.getElementById(i);
        aDesc.classList.remove("--active");
    }
    //J'enlève la classe active pour la photo
    for(i = 1; i<=4; i++){
        var aPic = document.getElementById("c"+i);
        aPic.classList.remove("--active");
    }
    //Je met ces éléments en classe active
    picture.classList.add("--active");
    description.classList.add("--active");
}