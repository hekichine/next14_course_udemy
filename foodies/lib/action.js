'use server';

import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    sumary: formData.get('sumary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }
  await saveMeal(meal)
}