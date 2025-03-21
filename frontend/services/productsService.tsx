

const API_BASE_URL = "http://localhost:8000";

export const getProductsList = async () => {
  const res = await fetch(`${API_BASE_URL}/items`, {
    method: "GET",
    headers: { 
      "Accept": "application/json" 
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const getProductById = async (id : number) => {
  const res = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: "GET",
    headers: { 
      "Accept": "application/json" 
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const editProduct = async (product : any) => {
  const res = await fetch(`${API_BASE_URL}/items/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product)
  })
  if (!res.ok) {
    throw new Error("Failed to edit product");
  }
  return await res.json();
}

export const deleteProduct = async (id : number) => {
  const res = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
  return 
}

export const addProduct = async (product : any) => {
  const res = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (!res.ok) {
    throw new Error("Failed to add product");
  }
  return await res.json();
}
