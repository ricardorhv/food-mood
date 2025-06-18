export interface PaymentMethod {
  id: string;
  methodPayment: "CREDIT_CARD" | "DEBIT_CARD" | "IN_CASH" | "PIX";
}
