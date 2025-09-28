**A continuación se explica lo que se realizó en este proyecto de API**

*Configuración del proyecto:* utilicé Vite inicializar mi proyecto con la plantilla vanilla, vite genera autumaticamente la estructura básica. añadi mis propias carpetas luego.

*Interfaces y tipos:* Creé las interfaces User y Employee, además del enum Department. E4n estas se definieron los atributos de los usuarios y empleados. 

**Clases y herencia:**

Implementé la clase abstracta BaseEmployee.
A partir de ella tres clases concretas:

Developer: calcula salario con base en el número de lenguajes de programación que maneje cada empleado.

Manager: calcula salario en función del tamaño del equipo.

Intern: tiene un salario fijo y un método especial para consultar la duración de la práctica.

obliga a las clases hijas a implementar dos métodos:

getDetails(): devuelve un string con la información específica del empleado.
calculateSalary(): calcula el salario según el rol.

**Servicios:**

ApiService: se conecta a la API de https://dummyjson.com/users para obtener datos de los usuarios.

EmployeeService: administra la lista de empleados,los carga desde la API, busca, lista, guarda y carga desde localStorage.

La herencia la utilicé para aprovechar la clase abstracta BaseEmployee. Esta define los atributos básicos de cualquier empleado (id, name, age, email, gender, department) y obliga a las clases hijas a implementar dos métodos:

*Inyección de dependencia*
En EmployeeService, a través del constructor recibí una instancia de ApiService. Esto permite, separar un servicio para API y otro para empleados.

Hacer el código modular y fácil de probar, ya que EmployeeService no depende directamente de cómo se obtiene la información, solo recibe un servicio que sabe hacerlo.
De esta forma, si quisiera cambiar de API o usar otra fuente de datos, solo reemplazo la implementación de ApiService sin modificar EmployeeService.

**DIFICULTADES**

*Acceso al id en la API:*
La interfaz User original no incluía el campo id, pero al consumir https://dummyjson.com/users, cada usuario venía con un id. Eso me generó errores de compilación.
Por esto agregué la propiedad id a la interfaz User para poder trabajar con ella correctamente.

*JSON/localStorage:*
Al inicio intenté usar fs para guardar en archivos JSON, pero como estaba ejecutando en un entorno donde solo funciona localStorage, me encontré con errores como fs.writeFileSync is not a function.
cambié la estrategia a guardar y cargar empleados con localStorage. Primero serializo la lista de empleados con JSON.stringify y luego la recupero con JSON.parse.

*Ejecución repetida en el for:*
Al principio puse las llamadas a saveEmployees() y loadEmployees() dentro del bucle que recorre empleados, lo que generaba múltiples impresiones repetidas.
moví estas funciones fuera del bucle, para que solo se ejecutaran una vez después de mostrar todos los empleados.