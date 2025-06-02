export function formatPreparationTime(preparationTimeInMinutes: number) {
  let formattedPreparationTimeText = `${preparationTimeInMinutes}min`;

  if (preparationTimeInMinutes >= 60) {
    const minutes = preparationTimeInMinutes % 60;
    const hours = Math.floor(preparationTimeInMinutes / 60);

    formattedPreparationTimeText = `${hours}h ${
      minutes > 0 ? `${minutes}min` : ""
    }`;

    return formattedPreparationTimeText;
  }

  return formattedPreparationTimeText;
}
