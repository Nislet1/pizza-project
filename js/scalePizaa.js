function scalePizza(a) {
    var element = document.getElementById("fullpizza");
    if(a==25){
        element.style.scale=0.9;
        element.style.transition= "scale 250ms";
        element.style.transition= "all 1s";
    }
    if(a==30){
        element.style.scale=1;
        element.style.transition= "scale 250ms";
        element.style.transition= "all 1s";
    }
    if(a==45){
        element.style.scale=1.1;
        element.style.transition= "scale 250ms";
        element.style.transition= "all 1s";
    }
}