import { MealDBResponse } from "@/types/meal";

// llamamos a la API de themealdb.com
export async function fetchDesserts(id: number): Promise<MealDBResponse> {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  
  if (!res.ok) {
    throw new Error("Error al obtener los datos de la API");
  }

  const data = (await res.json()) as MealDBResponse;
  return data; 
  
}


