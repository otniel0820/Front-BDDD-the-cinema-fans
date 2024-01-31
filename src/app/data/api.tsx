//obtener todos los usuarios

export const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/user', { cache: "no-cache" });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};

// obtener usuarios por id

export const getUserById = async (endpoint: string) => {
    try {
        const response = await fetch('http://localhost:8080/api/user/' + endpoint, { cache: "no-cache" });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};
