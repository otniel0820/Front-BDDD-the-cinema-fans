//obtener todos los usuarios

import { UserDTO } from "../interfaces/usersEntity";

const url = 'http://localhost:8080/api/user'
export const getUsers = async () => {
    try {
        const response = await fetch(url, { cache: "no-cache" });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};

// obtener usuarios por id

export const getUserById = async (endpoint: string) => {
    try {
        const response = await fetch(`${url}/` + endpoint, { cache: "no-cache" });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};

//Crear Usuarios

export const createUser = async ( body: UserDTO) => {
    try {
        const response = await fetch(url, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

//Modificar Usuarios
export const updateUser = async (id:string ,body :UserDTO )=>{
    try {
        const response = await fetch(
            `${url}/` + id,
          {
            method: "PATCH",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
      } catch (error) {
        console.log(error);
      }
}

//Eliminar Usuarios
export const deleteUser = async ( user: UserDTO[])=>{
    try {
        await Promise.all(
            user?.map((user) => {
              (async () => {
                const response = await fetch(
                    `${url}/` + user.id,
                  {
                    method: "DELETE",
                    cache: "no-cache",
                  }
                );
              })();
            })
          )
      } catch (error) {
        console.log(error);
      }
}
