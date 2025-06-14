export function formatPrice(value: number) {
  return Number(value.toFixed(2)).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}
