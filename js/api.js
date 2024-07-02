const apiUrl = "https://sweet-moon-backend.vercel.app/productos";

export const getDataFromBackend = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
