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
];

const router = express.Router();

router.get("/listings", (req, res) => {
  console.log("Received request for apartment listings || api/listings");
  //   res.send("🛖Apartment listings will be here."); // this is server side rendering
  res.json({ listings }); // this is for API response
});

export default router;
