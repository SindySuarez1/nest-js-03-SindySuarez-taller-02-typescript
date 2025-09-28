import { BaseEmployee } from "../clases/BaseEmployee";
import type { ApiService } from "./ApiService"; 
import { Developer } from "../clases/Developer";
import { Manager } from "../clases/Manager";   
import { Department } from "../interfaces/types";   
import { Intern } from "../clases/Intern";


export class EmployeeService {
    private employees: BaseEmployee[] = [];

    constructor(private apiService: ApiService) {
       // TODO: Inyectar ApiService
       this.apiService = apiService;
     }

    async loadEmployeesFromApi(): Promise<void> {
        // TODO: Cargar usuarios desde API y convertir algunos a empleados
        // Crear 2 developers y 1 manager usando los datos de la API

        const users = await this.apiService.getUsers();

        this.employees.push(
            new Developer(
                users[0], 
                users[0].id, 
                ["JavaScript", "TypeScript"]),

            new Developer(
                users[1], 
                users[1].id,
                ["Python", "Django", "Java"]),

            new Manager(
                users[2], 
                users[2].id,
                Department.IT,
                5),

            new Intern(
                users[5],
                users[5].id,
                Department.MARKETING,   
                6 )
        );
    }

    getEmployeeById(id: number): BaseEmployee | undefined {
       // TODO: Buscar empleado por ID
         return this.employees.find(emp => emp.getId() === id);
     }

    getAllEmployees(): BaseEmployee[] {
       // TODO: Retornar todos los empleados
       return this.employees;
     }

    addEmployee(employee: BaseEmployee): void {
       // TODO: Agregar nuevo empleado
       this.employees.push(employee);
     }

    // guardando en archivo Json LocalStoreage
    saveEmployees(): void {
        localStorage.setItem("employees", JSON.stringify(this.employees, null, 2));
        console.log("=====Empleados guardados en localStorage=====");
    }

    // cargar de localStorage y mostrar
    loadEmployees(): void {
        const rawData = localStorage.getItem("employees");
        if (!rawData) {
            console.log("No hay empleados en localStorage");
            return;
        }

        const empleados = JSON.parse(rawData);
        console.log("Empleados cargados desde localStorage:", empleados);
    }

}

