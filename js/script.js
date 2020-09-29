(function() {
    //variables
    var contentList = document.getElementById('content-list');

    var text = document.getElementById('text');

    var button = document.getElementById('button');

    //funciones

    var agregarTarea = function() {
        var textT = text.value;
        var newtask = document.createElement('li');
        var contenido = document.createTextNode(textT);

        if (textT === "") {
            text.setAttribute("placeholder", "Agrega una tarea valida");
            text.className = "error";
            return false;
        } else {
            newtask.appendChild(contenido);
            contentList.appendChild(newtask);
            text.value = "";

            for (var i = 0; i <= contentList.children.length - 1; i++) {
                contentList.children[i].addEventListener("click", function() {
                    this.parentNode.removeChild(this);
                });
            }
        }
    };

    var comprobarInput = function() {
        text.className = "text";
        text.setAttribute("placeholder", "Agrega tu tarea");
    };


    //eventos

    //agregar tarea 
    button.addEventListener('click', agregarTarea);

    //comprobar inputer
    text.addEventListener('click', comprobarInput);

    /*    //borrar tarea input
    for (var i = 0; i <= contentList.children.length - 1; i++) {
        contentList.children[i].addEventListener('click', eliminarTarea);
    }
*/
}());