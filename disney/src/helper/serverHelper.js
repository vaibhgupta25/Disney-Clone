const localhost = "http://localhost:8000/";

export const movieRequest= async (route) =>{
    try{
        const res = await fetch(localhost+route);
        if(!res.ok) 
        throw new Error("Request failed with status: " + res.status);
        const data = await res.json();
        return data;
    }
    catch(err) {
        throw err;
    }
}