1- Empezamos a meter mano recien a partir de la parte 2 Escuchar Eventos  
2- Dentro del archivo de html colocamos el enlace al archivo script.js  
3- Ahora dentro del archivo vamos a comenzar a escuchar las etiquetas, anterior a esto vimos el metodo querySelector de javascript  
4-  Para seleccionar las etiquetas vamos a ver una nueva forma llamada data atributes. Dentro de la etiqueta se coloca la palabra data-yloquelequerramosponer. Osea: data- (data seguido de guion) y luego lo que le querramos porner. Generalmente algun referenciable logico como form-button  
5- En el javascript creamos una constante y le asignamos un document.querySelector([loquelehayamospuesto]), importante no olvidar los corchetes, y ya con eso referenciamos al data que pusimos en html a una constante.  
6- Usamos document.createElement('el elemento que vamos a crear') para poner alguna etiqueta en el DOM.  
7- Luego podemos conectar uno con el otro usando por ejemplo list.appenChild('constante que creamos') de esa forma creamos todo un elemento dentro del DOM.  
8- para agregar una etiqueta de CSS aqui usamos classList.add('el nombre de la etiqueta'), con classList.delete('lo que queremos sacar') y con classList.toggle('lo que querramos intercambiar')
9- separamos las funciones del archivo a manera de componentes. para ello creamos una carpeta de componentes y en ella por cada funcion creamos un archivo .js. En ese archivo enviamos la funcion que habiamos creado antes. Al fina de dicho archivo vamos a colocar: export default yElNombbreDeLaFuncion
10- Luego en el otro archivo de Js donde usamos esas funciones y es el que esta enlazado a la pagina html introduciremos arriba de todo import: elNombreDeLaFuncion from 'yEntreComillas'; la direccion relativa al archivo donde creamos esa funcion.  
11-  Es importante que en archivo html donde enlazamos el js coloquemos un atributo en la etiqueta script que diga type="module". esto le indicarà al navegador que el archivo main de js importara modulos.  
FIN hasta aqui creo que esta todo lo relevante de lo aprendido en esta parte del curso luego colocare algunos apendices.