export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    gender: string;
}

export interface Employee extends User {
    position: string;
    department: string; 
    salary: number;
}

export enum Department  {
    IT = "IT",
    HR = "HR",
    SALES = "SALES",
    MARKETING = "MARKETING",
}
