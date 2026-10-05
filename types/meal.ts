export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string | null;
  strCountry?: string; 
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;

  [key: string]: string | null | undefined; 
}

export interface MealDBResponse {
  meals: Meal[] | null;
}