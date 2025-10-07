// Use the same array and demonstrate a sample code using the unshift() method on the array.

const cafes = [
  { name: "8shots Cafe", location: "Makati", rating: 4.6 },
  { name: "Starbucks", location: "Taguig", rating: 4.8 },
  { name: "Gong Cha", location: "Quezon City", rating: 4.4 },
  { name: "But First, Coffee", location: "Pasig", rating: 4.7 },
  { name: "Coco", location: "Cebu", rating: 4.5 }
];

cafes.unshift({ name: "Tim Hortons", location: "Manila", rating: 4.3 });
console.log("Unshift Result:", cafes);


