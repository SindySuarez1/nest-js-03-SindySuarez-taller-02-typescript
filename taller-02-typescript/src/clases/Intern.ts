import { BaseEmployee } from "./BaseEmployee";
import { Department } from "../interfaces/types";
import type { User } from "../interfaces/types";


export class Intern extends BaseEmployee { 
    private durationM : number;

    constructor(User: User, id: number, department: Department, durationM: number) {
        super(User, id, department);
        this.durationM = durationM;
    }   
    getDetails(): string {
        return `Intern: ${this.id}, ${this.name}, Age: ${this.age}, Email: ${this.email}, 
        Gender: ${this.gender}, Department: ${this.department}, Esta pasantía tiene una duración de: ${this.durationM} meses`;
    }
    calculateSalary(): number {
        return 1000;
    }  
    getInternDuration(): string {
        return `Esta pasantía tiene una duración de: ${this.durationM} meses`;
    }                     
}

