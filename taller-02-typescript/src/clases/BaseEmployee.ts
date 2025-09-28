import type { User, Department} from "../interfaces/types";

export abstract class BaseEmployee {
    protected id: number;
    protected name: string;
    protected age: number;  
    protected email: string;
    protected gender: string;
    protected department: Department;

    constructor(User: User, id: number, department: Department) {
        this.id = id;
        this.name = User.name;
        this.age = User.age;
        this.email = User.email;
        this.gender = User.gender;
        this.department = department; 
        this.validateAge(this.age);
        this.validateEmail(this.email);
    }

    private validateAge(age: number): void {
        if (age <= 0) {
            throw new Error(`Edad inválida: ${age}`);
        }
    }
    private validateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error(`Email inválido: ${email}`);
        }
    }


    abstract getDetails(): string;
    abstract calculateSalary(): number;

    public getId(): number {
    return this.id;
  }

}