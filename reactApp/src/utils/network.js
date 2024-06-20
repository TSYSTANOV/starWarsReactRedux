export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`Error data: ${res.status}`);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.log(`Error data: ${error.message}`);
    return false;
  }
};
