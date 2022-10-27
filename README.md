# RegistrAPP_Leiva_Godoy_009D
La aplicación debería de funcionar correctamente en la mayoría de los pages, pero en el caso de querer ir a la página de "Feriados" tirará un error de CORS por lo que para solucionar este problema y que la aplicación funcione al 100% se debe hacer lo siguiente:

-Primeramente instalar el storage con los siguientes comandos:
    -npm install --save @ionic/storage
    -nom install --save @ionic/storage-angular
-Ir a la carpeta de raíz, concretamente hasta el archivo "angular.json"
-En dicho archivo dirigirse hasta la sección de "Serve" línea 72 aproximadamente
-En la subsección de serve llamada "options", agregar la siguiente línea de codigo: "proxyConfig": "src/proxy.config.json"


Una vez hecho todo esto volver a iniciar nuevamente, ya que con esto la api debería de estar funcionando correctamente.
