const cafes = [
  { name: "8shots Cafe", location: "Makati", rating: 4.6 },
  { name: "Starbucks", location: "Taguig", rating: 4.8 },
  { name: "Gong Cha", location: "Quezon City", rating: 4.4 },
  { name: "But First, Coffee", location: "Pasig", rating: 4.7 },
  { name: "Coco", location: "Cebu", rating: 4.5 }
];

cafes.forEach(cafe => {
  console.log(`${cafe.name} is located in ${cafe.location} with a rating of ${cafe.rating}`);
});
