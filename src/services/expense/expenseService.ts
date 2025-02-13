export function fetchExpense() {
  return fetch("/api/expense");
}
export function createExpense(data) {
  return fetch("/api/expense", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
