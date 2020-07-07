# Testimonial section

Morceau de code visant à reproduire une zone de présentation d'une équipe de développement ou autre. 

## Demo
[https://lilianq-q.github.io/testimonial_section/](https://lilianq-q.github.io/testimonial_section/)
## Installation

Pour installer le projet il vous suffit de cloner le repos !

```git
git clone https://github.com/lilianQ-Q/testimonial_section
```

## Update
Une fois dans le répertoire du projet, utilisez la commande suivante.
```git
git pull https://github.com/lilianQ-Q/testimonial_section
```

## Objectif
Ce petit projet était juste une introduction au Javascript et a la sélection des différents éléments dans une page.

## Javascript

```JS
function LightOn(index){
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
```