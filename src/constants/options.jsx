export const SelectTravelsList = [
  {
    id: 1,
    titlle: "Just me",
    desc: "Solo Traveller.",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    titlle: "A Couple",
    desc: "Two Travellers.",
    icon: "👨‍👧",
    people: "2",
  },
  {
    id: 3,
    titlle: "Family",
    desc: "Travellers with Group.",
    icon: "🏕",
    people: "2 to 6 people.",
  },
  {
    id: 4,
    titlle: "Friends",
    desc: "Like minded people.",
    icon: "👨🏿‍🤝‍👨🏿",
    people: "Group of 10.",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    titlle: "Cheap",
    desc: "Find out for low budget.",
    icon: "💰",
  },
  {
    id: 2,
    titlle: "Moderate",
    desc: "For the average budgets.",
    icon: "💵",
  },
  {
    id: 3,
    titlle: "Luxury",
    desc: "Do not worry about the cost.",
    icon: "🎉",
  },
];

export const AI_PROMPT =
  "Generate travel plan for Location : {favouriteDestination}, for {totalDays} days for {travellers} with {budget} budget. Give me hotels options lists with Hotel Name, Address, Price, HotelImageUrl also make sure image urls from best quality, geo coordinates, ratings, descriptions also give 'itinerary' suggestions with its PlaceName, Details, ImageURLs, GeoCoordinates in JSON format.";
