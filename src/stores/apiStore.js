import { defineStore } from "pinia";

const API_URL =
  "https://cqu9arlxha.execute-api.us-east-1.amazonaws.com/dev/challenge1";

export const useApiStore = defineStore("api", {
  state: () => ({
    data: null,
    card: null,
  }),
  actions: {
    async fetchAllCards() {
      try {
        const response = await fetch(`${API_URL}/all`);

        const data = await response.json();
        this.data = data.items.items;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchOneCard(cardNumber) {
      try {
        const response = await fetch(`${API_URL}/${cardNumber}`);
        const data = await response.json();
        this.card = data.item;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async addCard(formData) {
      try {
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log("Card added successfully:", result);
      } catch (error) {
        console.error("Error adding card:", error);
      }
    },
  },
});
