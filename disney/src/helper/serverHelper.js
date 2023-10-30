const localhost = "http://localhost:8000/";

export const movieRequest = async (route) => {
  try {
    const res = await fetch(localhost + route);
    if (!res.ok) throw new Error("Request failed with status: " + res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const movie = async (route, id) => {
  try {
    const movie = await fetch(localhost + route + id);
    console.log(localhost + route + id);
    if (!movie.ok)
      throw new Error("Request Failed with Status: " + movie.status);
    const data = await movie.json();
    return data;
  } catch (err) {
    throw err;
  }
};
