import { BaseEmployee} from "./BaseEmployee";
import { Department } from "../interfaces/types";
import type { User } from "../interfaces/types";


export class Developer extends BaseEmployee {
    private programmingLanguages: string[];

    constructor(User: User, id: number, Languages: string[]) {
        super(User, id, Department.IT);
        this.programmingLanguages = Languages;

        
    }

    getDetails(): string {
        return `Developer: ${this.id},${this.name}, Age: ${this.age}, Email: ${this.email}, Gender: ${this.gender}, 
        Department: ${this.department}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }

    calculateSalary(): number {
        const salary = 3000 + (this.programmingLanguages.length * 200);
        if (salary < 0){
            throw new Error("Salario inválido");
        }
        return salary;
    }
}