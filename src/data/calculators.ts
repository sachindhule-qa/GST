export type ProductCategory = {
  slug: string;
  name: string;
  hsn: string;
  rate: number;
  description: string;
};

export type IndianState = {
  slug: string;
  name: string;
  code: string;
  type: "state" | "ut";
};

export type AmountRange = {
  slug: string;
  label: string;
  value: number;
};

export type GSTRate = {
  value: number;
  label: string;
  slug: string;
};

export type BusinessType = {
  slug: string;
  name: string;
  description: string;
  defaultRate: number;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { slug: "smartphones", name: "Smartphones", hsn: "8517", rate: 18, description: "Mobile phones and smartphones with GST at 18%" },
  { slug: "laptops", name: "Laptops & Computers", hsn: "8471", rate: 18, description: "Laptops, desktops and computer hardware" },
  { slug: "televisions", name: "Televisions", hsn: "8528", rate: 18, description: "LED, OLED and smart televisions" },
  { slug: "refrigerators", name: "Refrigerators", hsn: "8418", rate: 18, description: "Household refrigerators and freezers" },
  { slug: "washing-machines", name: "Washing Machines", hsn: "8450", rate: 18, description: "Automatic and semi-automatic washing machines" },
  { slug: "air-conditioners", name: "Air Conditioners", hsn: "8415", rate: 18, description: "Split and window air conditioners" },
  { slug: "cars", name: "Cars", hsn: "8703", rate: 28, description: "Passenger motor vehicles and cars" },
  { slug: "two-wheelers", name: "Two Wheelers", hsn: "8711", rate: 28, description: "Motorcycles, scooters and mopeds" },
  { slug: "tyres", name: "Tyres", hsn: "4011", rate: 28, description: "Pneumatic tyres for motor vehicles" },
  { slug: "cement", name: "Cement", hsn: "2523", rate: 28, description: "Portland cement and hydraulic cement" },
  { slug: "gold", name: "Gold", hsn: "7108", rate: 3, description: "Gold jewellery and unwrought gold" },
  { slug: "silver", name: "Silver", hsn: "7106", rate: 3, description: "Silver jewellery and articles of silver" },
  { slug: "rice", name: "Rice", hsn: "1006", rate: 0, description: "Non-basmati and basmati rice (unbranded)" },
  { slug: "wheat", name: "Wheat", hsn: "1001", rate: 0, description: "Wheat and meslin grains" },
  { slug: "milk", name: "Milk", hsn: "0401", rate: 0, description: "Fresh milk and pasteurised milk" },
  { slug: "bread", name: "Bread", hsn: "1905", rate: 0, description: "Bread, rusks and plain bakery items" },
  { slug: "sugar", name: "Sugar", hsn: "1701", rate: 5, description: "Cane sugar and beet sugar" },
  { slug: "tea", name: "Tea", hsn: "0902", rate: 5, description: "Black tea, green tea and tea bags" },
  { slug: "coffee", name: "Coffee", hsn: "0901", rate: 5, description: "Roasted coffee beans and instant coffee" },
  { slug: "packaged-food", name: "Packaged Food", hsn: "2106", rate: 5, description: "Packaged food preparations and snacks" },
  { slug: "medicines", name: "Medicines", hsn: "3004", rate: 12, description: "Medicaments for therapeutic use" },
  { slug: "ayurvedic-medicines", name: "Ayurvedic Medicines", hsn: "3004", rate: 12, description: "Ayurvedic and herbal medicines" },
  { slug: "fruit-juice", name: "Fruit Juice", hsn: "2009", rate: 12, description: "Packaged fruit juices and concentrates" },
  { slug: "hotel-rooms", name: "Hotel Rooms", hsn: "996331", rate: 12, description: "Hotel accommodation services" },
  { slug: "restaurant-food", name: "Restaurant Food", hsn: "996311", rate: 5, description: "Restaurant and food serving services" },
  { slug: "soaps", name: "Soaps & Detergents", hsn: "3401", rate: 18, description: "Soap, detergents and cleaning products" },
  { slug: "cosmetics", name: "Cosmetics", hsn: "3304", rate: 18, description: "Beauty and make-up preparations" },
  { slug: "furniture", name: "Furniture", hsn: "9403", rate: 18, description: "Wooden and metal furniture" },
  { slug: "footwear", name: "Footwear", hsn: "6403", rate: 18, description: "Leather and rubber footwear" },
  { slug: "clothing", name: "Clothing", hsn: "6109", rate: 5, description: "Apparel, t-shirts and garments below ₹1000" },
  { slug: "sarees", name: "Sarees", hsn: "6204", rate: 5, description: "Cotton and silk sarees" },
  { slug: "books", name: "Books", hsn: "4901", rate: 0, description: "Printed books, brochures and newspapers" },
  { slug: "stationery", name: "Stationery", hsn: "4820", rate: 12, description: "Notebooks, registers and stationery" },
  { slug: "pens", name: "Pens", hsn: "9608", rate: 18, description: "Ball point pens and writing instruments" },
  { slug: "paint", name: "Paint", hsn: "3208", rate: 18, description: "Paints, varnishes and coatings" },
  { slug: "steel", name: "Steel", hsn: "7210", rate: 18, description: "Flat-rolled steel products" },
  { slug: "pipes", name: "Pipes & Fittings", hsn: "7304", rate: 18, description: "Steel pipes, tubes and fittings" },
  { slug: "electrical-wires", name: "Electrical Wires", hsn: "8544", rate: 18, description: "Insulated electric wires and cables" },
  { slug: "solar-panels", name: "Solar Panels", hsn: "8541", rate: 12, description: "Solar cells and photovoltaic panels" },
  { slug: "generators", name: "Generators", hsn: "8502", rate: 18, description: "Electric generators and alternators" },
  { slug: "pesticides", name: "Pesticides", hsn: "3808", rate: 18, description: "Insecticides, fungicides and herbicides" },
  { slug: "fertilizers", name: "Fertilizers", hsn: "3102", rate: 5, description: "Nitrogenous and phosphatic fertilizers" },
  { slug: "seeds", name: "Seeds", hsn: "1209", rate: 0, description: "Agricultural seeds for sowing" },
  { slug: "coconut-oil", name: "Coconut Oil", hsn: "1513", rate: 5, description: "Coconut oil and edible oils" },
  { slug: "biscuits", name: "Biscuits", hsn: "1905", rate: 18, description: "Sweet biscuits and cookies" },
  { slug: "chocolates", name: "Chocolates", hsn: "1806", rate: 18, description: "Chocolate and cocoa preparations" },
  { slug: "soft-drinks", name: "Soft Drinks", hsn: "2202", rate: 28, description: "Aerated beverages and soft drinks" },
  { slug: "tobacco", name: "Tobacco", hsn: "2402", rate: 28, description: "Cigarettes, cigars and tobacco products" },
  { slug: "pan-masala", name: "Pan Masala", hsn: "2106", rate: 28, description: "Pan masala and chewing tobacco" },
  { slug: "legal-services", name: "Legal Services", hsn: "998511", rate: 18, description: "Legal services by advocates and firms" },
  { slug: "it-services", name: "IT Services", hsn: "998314", rate: 18, description: "Software development and IT consulting" },
];

export const INDIAN_STATES: IndianState[] = [
  { slug: "andhra-pradesh", name: "Andhra Pradesh", code: "AP", type: "state" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh", code: "AR", type: "state" },
  { slug: "assam", name: "Assam", code: "AS", type: "state" },
  { slug: "bihar", name: "Bihar", code: "BR", type: "state" },
  { slug: "chhattisgarh", name: "Chhattisgarh", code: "CG", type: "state" },
  { slug: "goa", name: "Goa", code: "GA", type: "state" },
  { slug: "gujarat", name: "Gujarat", code: "GJ", type: "state" },
  { slug: "haryana", name: "Haryana", code: "HR", type: "state" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", code: "HP", type: "state" },
  { slug: "jharkhand", name: "Jharkhand", code: "JH", type: "state" },
  { slug: "karnataka", name: "Karnataka", code: "KA", type: "state" },
  { slug: "kerala", name: "Kerala", code: "KL", type: "state" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", code: "MP", type: "state" },
  { slug: "maharashtra", name: "Maharashtra", code: "MH", type: "state" },
  { slug: "manipur", name: "Manipur", code: "MN", type: "state" },
  { slug: "meghalaya", name: "Meghalaya", code: "ML", type: "state" },
  { slug: "mizoram", name: "Mizoram", code: "MZ", type: "state" },
  { slug: "nagaland", name: "Nagaland", code: "NL", type: "state" },
  { slug: "odisha", name: "Odisha", code: "OD", type: "state" },
  { slug: "punjab", name: "Punjab", code: "PB", type: "state" },
  { slug: "rajasthan", name: "Rajasthan", code: "RJ", type: "state" },
  { slug: "sikkim", name: "Sikkim", code: "SK", type: "state" },
  { slug: "tamil-nadu", name: "Tamil Nadu", code: "TN", type: "state" },
  { slug: "telangana", name: "Telangana", code: "TS", type: "state" },
  { slug: "tripura", name: "Tripura", code: "TR", type: "state" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", code: "UP", type: "state" },
  { slug: "uttarakhand", name: "Uttarakhand", code: "UK", type: "state" },
  { slug: "west-bengal", name: "West Bengal", code: "WB", type: "state" },
  { slug: "andaman-nicobar", name: "Andaman & Nicobar Islands", code: "AN", type: "ut" },
  { slug: "chandigarh", name: "Chandigarh", code: "CH", type: "ut" },
  { slug: "dadra-nagar-haveli", name: "Dadra & Nagar Haveli and Daman & Diu", code: "DN", type: "ut" },
  { slug: "delhi", name: "Delhi", code: "DL", type: "ut" },
  { slug: "jammu-kashmir", name: "Jammu & Kashmir", code: "JK", type: "ut" },
  { slug: "ladakh", name: "Ladakh", code: "LA", type: "ut" },
  { slug: "lakshadweep", name: "Lakshadweep", code: "LD", type: "ut" },
  { slug: "puducherry", name: "Puducherry", code: "PY", type: "ut" },
];

export const AMOUNT_RANGES: AmountRange[] = [
  { slug: "1k", label: "₹1,000", value: 1000 },
  { slug: "5k", label: "₹5,000", value: 5000 },
  { slug: "10k", label: "₹10,000", value: 10000 },
  { slug: "25k", label: "₹25,000", value: 25000 },
  { slug: "50k", label: "₹50,000", value: 50000 },
  { slug: "1l", label: "₹1,00,000", value: 100000 },
  { slug: "5l", label: "₹5,00,000", value: 500000 },
  { slug: "10l", label: "₹10,00,000", value: 1000000 },
];

export const GST_RATES: GSTRate[] = [
  { value: 0, label: "0%", slug: "0" },
  { value: 3, label: "3%", slug: "3" },
  { value: 5, label: "5%", slug: "5" },
  { value: 12, label: "12%", slug: "12" },
  { value: 18, label: "18%", slug: "18" },
  { value: 28, label: "28%", slug: "28" },
];

export const BUSINESS_TYPES: BusinessType[] = [
  { slug: "freelancer", name: "Freelancer", description: "Independent professionals providing services", defaultRate: 18 },
  { slug: "retailer", name: "Retailer", description: "Retail shops selling goods to consumers", defaultRate: 18 },
  { slug: "wholesaler", name: "Wholesaler", description: "Bulk goods distribution to retailers", defaultRate: 18 },
  { slug: "manufacturer", name: "Manufacturer", description: "Production and manufacturing of goods", defaultRate: 18 },
  { slug: "service-provider", name: "Service Provider", description: "Businesses offering professional services", defaultRate: 18 },
  { slug: "restaurant", name: "Restaurant", description: "Food and beverage serving establishments", defaultRate: 5 },
  { slug: "e-commerce", name: "E-Commerce", description: "Online selling through marketplaces or own website", defaultRate: 18 },
  { slug: "contractor", name: "Contractor", description: "Construction and works contract services", defaultRate: 18 },
];

// Lookup helpers
export function getProductBySlug(slug: string) {
  return PRODUCT_CATEGORIES.find((p) => p.slug === slug);
}

export function getStateBySlug(slug: string) {
  return INDIAN_STATES.find((s) => s.slug === slug);
}

export function getAmountBySlug(slug: string) {
  return AMOUNT_RANGES.find((a) => a.slug === slug);
}

export function getRateBySlug(slug: string) {
  return GST_RATES.find((r) => r.slug === slug);
}

export function getBusinessBySlug(slug: string) {
  return BUSINESS_TYPES.find((b) => b.slug === slug);
}

export function getAllProgrammaticPaths() {
  const productPaths = PRODUCT_CATEGORIES.map((p) => ({
    type: "product" as const,
    path: `gst-on-${p.slug}`,
    priority: 0.8,
  }));

  const ratePaths = GST_RATES.map((r) => ({
    type: "rate" as const,
    path: `gst-${r.slug}-percent`,
    priority: 0.85,
  }));

  const amountRatePaths = AMOUNT_RANGES.flatMap((a) =>
    GST_RATES.map((r) => ({
      type: "amount-rate" as const,
      path: `gst-on-${a.slug}-at-${r.slug}`,
      priority: 0.75,
    }))
  );

  const statePaths = INDIAN_STATES.map((s) => ({
    type: "state" as const,
    path: `gst-calculator-${s.slug}`,
    priority: 0.8,
  }));

  const businessPaths = BUSINESS_TYPES.map((b) => ({
    type: "business" as const,
    path: `gst-for-${b.slug}`,
    priority: 0.8,
  }));

  return [...productPaths, ...ratePaths, ...amountRatePaths, ...statePaths, ...businessPaths];
}
