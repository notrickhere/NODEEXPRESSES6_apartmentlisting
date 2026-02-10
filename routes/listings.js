import express from "express";

const listings = [
  {
    title: "Cozy Studio Apartment",
    address: "Downtown",
    price: "$1200/month",
    bedrooms: 2,
    notes: "Close to public transport and shopping centers.",
    photos: ["photo1.jpg", "photo2.jpg"],
  },
  {
    title: "Spacious 2-Bedroom Apartment",
    address: "Uptown",
    price: "$2000/month",
    bedrooms: 2,
    notes: "Includes a balcony with a great view.",
    photos: ["photo3.jpg", "photo4.jpg"],
  },
  {
    title: "Modern 1-Bedroom Apartment",
    address: "Midtown",
    price: "$1500/month",
    bedrooms: 1,
    notes: "Recently renovated with new appliances.",
    photos: ["photo5.jpg", "photo6.jpg"],
  },
];

const router = express.Router();

router.get("/listings", (req, res) => {
  console.log("Received request for apartment listings || api/listings");
  //   res.send("🛖Apartment listings will be here."); // this is server side rendering
  res.json({ listings }); // this is for API response
});

export default router;
