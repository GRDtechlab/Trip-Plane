/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for Location : Paris, for 5 days for couple with cheap budget. Give me hotel pictures and view of the rooms.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "##" }],
    },
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for Location : Paris, for 5 days for couple with cheap budget. Give me hotel pictures and view of the rooms.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "## Budget-Friendly Paris for Two: 5 Day Itinerary \n\n**This itinerary focuses on free and low-cost activities, maximizing your experience without breaking the bank.**\n\n**Day 1: Arrival & Montmartre Charm**\n\n* **Morning:** Arrive at Charles de Gaulle Airport (CDG) or Orly Airport (ORY). Take the RER B train to Gare du Nord and walk to your accommodation. \n* **Accommodation:** Consider a budget-friendly hotel like **Hôtel du Nord & de l'Europe** (approx. €50-€80 per night) or a centrally located hostel like **Generator Paris** (approx. €30-€40 per night per person) for a shared room. \n    * **Hotel du Nord & de l'Europe:** [Image Link: https://www.booking.com/hotel/fr/du-nord-et-de-leurope.fr.html](https://www.booking.com/hotel/fr/du-nord-et-de-leurope.fr.html) \n    * **Generator Paris:** [Image Link: https://www.generatorhostels.com/hostels/paris/](https://www.generatorhostels.com/hostels/paris/)\n* **Afternoon:** Explore the charming neighborhood of Montmartre. Take a walk up the hill to the Sacré-Cœur Basilica, enjoy the artistic vibe at Place du Tertre, and admire the views from the top. \n* **Evening:**  Enjoy a picnic dinner in the Jardin du Luxembourg. Pick up some delicious bread, cheese, and wine from a local boulangerie. \n\n**Day 2: Parisian Culture & History**\n\n* **Morning:**  Visit the Louvre Museum on a free admission day (first Sunday of the month). Focus on your favorite masterpieces like the Mona Lisa.\n* **Lunch:** Enjoy a simple and affordable lunch at a local boulangerie or a café. \n* **Afternoon:** Stroll along the Seine River and cross over the Pont Neuf. Take in the beauty of the Notre Dame Cathedral (view from outside - it's currently under renovation).\n* **Evening:**  Enjoy a traditional French dinner at a small, local bistro. \n\n**Day 3: Walking in the City of Lights**\n\n* **Morning:** Explore the Latin Quarter, a student-filled neighborhood with a lively atmosphere. Visit the Pantheon, stroll through the Sorbonne University, and wander through the charming streets. \n* **Lunch:**  Have a picnic in the Jardin des Plantes, a beautiful botanical garden. \n* **Afternoon:**  Take a walk along the Champs-Élysées, stopping at the Arc de Triomphe. \n* **Evening:**  Find a free concert or performance in a park or public square. \n\n**Day 4:  Exploring the City's Charm**\n\n* **Morning:**  Visit the Musée d'Orsay, home to Impressionist and Post-Impressionist art.  \n* **Lunch:** Enjoy a cheap and cheerful lunch at a food market like Marché Bastille or Marché des Enfants Rouges. \n* **Afternoon:**  Explore the bohemian neighborhood of Le Marais, with its charming boutiques, historical buildings, and lively atmosphere. \n* **Evening:**  Take a romantic stroll along the Canal Saint-Martin, with its trendy bars and cafes. \n\n**Day 5:  Farewell Paris**\n\n* **Morning:**  Take a walk through the beautiful Parc de la Villette, a park with a science museum and a variety of cultural events. \n* **Lunch:**  Enjoy a final French lunch at a cafe before heading to the airport. \n* **Afternoon:**  Depart from Charles de Gaulle Airport (CDG) or Orly Airport (ORY). \n\n**Tips for Saving Money:**\n\n* **Travel off-season:** Visiting in the shoulder season (spring or fall) can lead to lower flight and accommodation prices. \n* **Utilize public transportation:** The Paris metro is an affordable and efficient way to get around.  \n* **Take advantage of free activities:** Paris offers many free attractions like museums on free admission days, parks, and walking tours. \n* **Pack snacks and drinks:**  You can easily pack some snacks and drinks to avoid spending a lot of money on food. \n* **Enjoy local delicacies:**  There are many affordable places to find delicious French food, like boulangeries and small cafes. \n\n**Remember:** \n* This itinerary is just a suggestion, you can customize it based on your interests and budget. \n* Check for free museum days and other events happening during your trip. \n* Use online resources like TripAdvisor and Yelp to find budget-friendly dining options. \n* Paris is a city of walking, take advantage of the opportunity to explore on foot and soak up the atmosphere. \n\n**Enjoy your Parisian adventure!**",
        },
      ],
    },
  ],
});
