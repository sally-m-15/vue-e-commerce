
export const mensFashion = {
'Bags & luggage' : 'FaBriefcase',
"Men's Clothing" : 'FaTshirt'
};

export const womensFashion  = {
"Kid's Fashion" : "FaTshirt",
"Handbags" : "FaShoppingBag",
"Eyewear" : "FaRegularEye",
"Jewellery" : "FaGem",
"Watches" : "FaClock",
"Footwear" : 'FaShoePrints',
"Women's Clothing" : "FaFemale",
};

export const superMarket  = {
"Pet Supplies" : "FaPenSquare",
"Candy & Chocolate" : "FaGolfBall",
"Baby Food" : "FaUtensils",
"Breakfast Food" : "FaEgg",
"Snack Food" : "FaCookieBite",
"Home Care & Cleaning" : "FaBroom",
"Beverages" : "FaMugHot",
"Canned Dry and Packaged Foods" : "FaCubes",
"Cleaning" : "FaBroom"
};

export const babyToys = {
"Toys" : "FaGamepad",
"Potty Training" : "FaBaby",
"Bouncers & Swings" : "FaBabyCarriage",
"Car Seats & Strollers" : "FaBabyCarriage",
"Nursing & Feeding" : "FaBaby",
"Bathing & Skin Care" : "FaPumpSoap",
"Diapers & Diaper Bags" : "FaBaby",
"Baby Safety Products" : "FaHandHolding"
};

export const home = {
    "Kitchen & Dining" : "FaPoo",
    "Home Decor": "FaCouch",
    "Furniture" : "FaCouch",
    "Tools & Home" : "FaHammer",
    "Improvement" : "FaHome",
    "Bath & Bedding" : "FaBed",
    "Drinkware" : "FaGlassCheers",
    "Cookware" : "FaBlender",
    "Large Appliances" : "FaTv",
    "Home Appliances" : "FaPlug",
};

export const beautyHealth = {
    "Health & Nutrition" : "FaCapsules",
    "Personal Care" : "FaSpa",
    "Skin Care" : "FaPumpSoap",
    "Hair Care" : "FaCut",
    "Makeup" : "FaMagic",
    "Fragrance" : "FaSprayCan"
};

export const mobiles = {
    "Mobile Gaming & VR" : "FaGamepad",
    "Gadgets" : "FaLightbulb",
    "Covers & Screen" : "FaShieldAlt",
    "protectors" : "FaMobileAlt",
    "Chargers & Cables" : "FaBolt",
    "Power Banks" : "FaBatteryFull",
    "Earphones" : "FaHeadphones",
    "Wireless Earphones" : "FaBluetoothB",
    "Smartwatches & Accessories" : "FaClock",
    "Accessories" : "FaPlusCircle",
    "All Tablets" : "FaTabletAlt ",
    "All Mobile Phones" : "FaMobileAlt",
    "Mobile New Arrivals" : "FaFire",
};

export const electronics = {
    "Computer Accessories" : "FaMousePointer",
    "Computer Components" : "FaMicrochip",
    "Data Storage" : "FaDatabase",
    "Networking Products" : "FaWifi",
    "Printers & Accessories" : "FaPrint",
    "Cameras & Accessories" : "FaCamera",
    "Video Games" : "FaGhost",
    "Audio & Home" : "FaVolumeUp",
    "Entertainment" : "FaTicketAlt",
    "Laptops & Accessories" : "FaLaptop",
    "TVs, Satellites & Accessories" : "FaSatelliteDish"
};

export const allCategoryIcons : Record <string, string> = {
    ...mensFashion,
    ...womensFashion,
    ...superMarket,
    ...babyToys,
    ...home,
    ...beautyHealth,
    ...mobiles,
    ...electronics
};