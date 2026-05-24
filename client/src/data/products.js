const products = [

  // HOODIES
  {
    _id: 1,
    name: "Black Hoodie",
    category: "Hoodies",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    description: "Premium black hoodie for winter fashion"
  },

  {
    _id: 2,
    name: "Grey Oversized Hoodie",
    category: "Hoodies",
    price: 1199,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    description: "Oversized streetwear hoodie"
  },

  {
    _id: 3,
    name: "Red Zip Hoodie",
    category: "Hoodies",
    price: 1299,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable zipper hoodie"
  },

  

  {
    _id: 5,
    name: "Minimal Beige Hoodie",
    category: "Hoodies",
    price: 1499,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    description: "Minimal modern fashion hoodie"
  },

  // SHOES
  {
    _id: 6,
    name: "White Sneakers",
    category: "Shoes",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable sneakers"
  },

  {
    _id: 7,
    name: "Running Shoes",
    category: "Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    description: "Lightweight running shoes"
  },

  
  {
    _id: 9,
    name: "Casual Sneakers",
    category: "Shoes",
    price: 1899,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
    description: "Everyday casual sneakers"
  },

  {
    _id: 10,
    name: "Premium Trainers",
    category: "Shoes",
    price: 3299,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    description: "Premium trainers for comfort"
  },

  // TSHIRTS
  {
    _id: 11,
    name: "Oversized T-Shirt",
    category: "T-Shirts",
    price: 599,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    description: "Stylish oversized t-shirt"
  },

  {
    _id: 12,
    name: "Graphic Tee",
    category: "T-Shirts",
    price: 799,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    description: "Printed graphic t-shirt"
  },

  
  {
    _id: 14,
    name: "Black Slim Fit Tee",
    category: "T-Shirts",
    price: 749,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    description: "Modern slim fit t-shirt"
  },

  {
    _id: 15,
    name: "Streetwear Tee",
    category: "T-Shirts",
    price: 899,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    description: "Street fashion t-shirt"
  },

  // JEANS
  {
    _id: 16,
    name: "Blue Denim Jeans",
    category: "Jeans",
    price: 1499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    description: "Classic denim jeans"
  },

  {
    _id: 17,
    name: "Slim Fit Jeans",
    category: "Jeans",
    price: 1699,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    description: "Slim fit blue jeans"
  },

 
  

  {
    _id: 20,
    name: "Black Denim Jeans",
    category: "Jeans",
    price: 1599,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop",
    description: "Black stylish denim jeans"
  },

  // WATCHES
  

  {
    _id: 22,
    name: "Smart Watch",
    category: "Watches",
    price: 6999,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1200&auto=format&fit=crop",
    description: "Advanced smart watch"
  },

  {
    _id: 23,
    name: "Classic Silver Watch",
    category: "Watches",
    price: 3599,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
    description: "Classic silver analog watch"
  },

  {
    _id: 24,
    name: "Black Dial Watch",
    category: "Watches",
    price: 4299,
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
    description: "Modern black dial watch"
  },

  {
    _id: 25,
    name: "Leather Strap Watch",
    category: "Watches",
    price: 3899,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
    description: "Premium leather strap watch"
  },

  // BAGS
  {
    _id: 26,
    name: "Travel Backpack",
    category: "Bags",
    price: 2499,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description: "Large travel backpack"
  },

  {
    _id: 27,
    name: "Office Bag",
    category: "Bags",
    price: 1999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    description: "Professional office bag"
  },

  

  {
    _id: 29,
    name: "Laptop Backpack",
    category: "Bags",
    price: 2999,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    description: "Backpack with laptop compartment"
  },

  {
    _id: 30,
    name: "Mini Sling Bag",
    category: "Bags",
    price: 1499,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    description: "Stylish sling bag"
  }

]
export default products;