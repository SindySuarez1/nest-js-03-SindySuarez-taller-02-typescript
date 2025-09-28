import { BaseEmployee } from "./BaseEmployee";
import { Department } from "../interfaces/types";
import type { User } from "../interfaces/types";    


export class Manager extends BaseEmployee {
    private teamSize: number;

    constructor(User: User, id: number, department: Department, teamSize: number) {
        super(User, id, department );
        this.teamSize = teamSize;
    }

    getDetails(): string {
        return `Manager: ${this.id}, ${this.name}, Age: ${this.age}, Email: ${this.email}, Gender: ${this.gender}, 
        Department: ${this.department}, Team Size: ${this.teamSize}`;
    }

    calculateSalary(): number {
        const salary = 4000 + (this.teamSize * 300);
        if (salary < 0){
            throw new Error("Salario inválido");
        }
        return salary;
    }
}