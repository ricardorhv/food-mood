export interface PaymentMethod {
  id: string;
  name: "CREDIT_CARD" | "DEBIT_CARD" | "IN_CASH" | "PIX";
}
