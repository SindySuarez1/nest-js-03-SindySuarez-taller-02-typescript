import type { User } from "../interfaces/types";

export class ApiService {
     private apiUrl = "https://dummyjson.com/users";

     async getUsers(): Promise<User[]> {
         // TODO: Hacer fetch a la API y mapear solo name, age, email, gender
         try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error("Error al obtener usuarios");

             const data = await response.json();

             return data.users.map((user: any) => ({
                 id: user.id,
                 name: `${user.firstName} ${user.lastName}`,
                 age: user.age,
                 email: user.email,
                 gender: user.gender
        }));
      } catch (e) {
        console.error("Error en getUsers:",  e);
        return [];
      }
    }


     async getUserById(id: number): Promise<User | null> {
       // TODO: Obtener un usuario específico de la API
         try {
            const response = await fetch(`${this.apiUrl}/${id}`);
            if (!response.ok) throw new Error("Error ¡Usuario no encontrado!");
            
            const user = await response.json();

            return {
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                age: user.age,
                email: user.email,
                gender: user.gender
           };
         } catch (e) {
           console.error("Error en getUserById:", e);
           return null;
         }
     }
   }