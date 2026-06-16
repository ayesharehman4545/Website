import React, { useState } from "react";

function Menu() {

const foodItems = [
  {
    id: 1,
    name: "Classic Zinger Burger",
    category: "Burgers",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/zinger burger.jfif",
    description: "Crispy chicken fillet with cheese, lettuce and our special sauce."
  },

  {
    id: 2,
    name: "Beef Cheese Burger",
    category: "Burgers",
    price: "Rs.850",
   image: process.env.PUBLIC_URL + "/images/burger.jfif",
    description: "Juicy grilled beef patty loaded with melted cheese."
  },
  {
    id: 3,
    name: "Spicy Jalapeno Burger",
    category: "Burgers",
    price: "Rs. 700",
    image: process.env.PUBLIC_URL + "/images/jalapeno.jfif",
    description: "Fiery grilled chicken with sliced jalapenos, pepper jack cheese, and spicy mayo."
  },

  {
    id: 4,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    price: "Rs. 800",
    image: process.env.PUBLIC_URL + "/images/mushroom.jfif",
    description: "Smoky beef patty topped with sautéed mushrooms and melted Swiss cheese."
  },

  {
    id: 5,
    name: "Tower Burger",
    category: "Burgers",
    price: "Rs. 500",
    image: process.env.PUBLIC_URL + "/images/tower.jfif",
    description: "Two juicy beef patties with crispy turkey bacon, onion rings, and tangy BBQ sauce."
  },

  {
    id: 6,
    name: "Mighty Burger",
    category: "Burgers",
    price: "Rs. 550",
    image: process.env.PUBLIC_URL + "/images/mighty.jfif",
    description: "Crispy vegetable patty loaded with fresh veggies, cheese, and garlic herb sauce."
  },

  {
    id: 7,
    name: "Chicken Shawarma",
    category: "Shawarma",
    price: "Rs. 400",
    image: process.env.PUBLIC_URL + "/images/shawarma.jfif",
    description: "Arabic style wrap with spicy chicken and garlic sauce."
  },

  {
    id: 8,
    name: "Cheese Shawarma",
    category: "Shawarma",
    price: "Rs.550 ",
    image: process.env.PUBLIC_URL + "/images/cheesy.jfif",
    description: "Creamy cheese loaded shawarma with fresh vegetables."
  },
{
    id: 9,
    name: "Spicy Mexican Shawarma",
    category: "Shawarma",
    price: "Rs.600",
    image: process.env.PUBLIC_URL + "/images/mexican.jfif",
    description: "Hot and spicy chicken wrap with jalapenos, sweet corn, and fiery peri-peri sauce."
  },

  {
    id: 10,
    name: "Platter Shawarma",
    category: "Shawarma",
    price: "Rs. 750",
   image: process.env.PUBLIC_URL + "/images/platter shawarma.jfif",
    description: "Sliced shawarma chicken served with pita bread, hummus, pickles, and garlic dip."
  },
  
  {
    id: 11,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "Rs. 1500",
    image: process.env.PUBLIC_URL + "/images/pepperoni.jfif",
    description: "Loaded with pepperoni, mozzarella and Italian herbs."
  },

  {
    id: 12,
    name: "Fajita Pizza",
    category: "Pizza",
    price: "Rs. 1500",
    image: process.env.PUBLIC_URL + "/images/fajita.jfif",
    description: "Spicy chicken fajita with extra cheese topping."
  },
{
  id: 13,
  name: "Chicken Tikka Pizza",
  category: "Pizza",
  price: "Rs. 1400",
  image: process.env.PUBLIC_URL + "/images/tikka.jfif",
  description: "A spicy blend of chicken tikka, mozzarella cheese and special sauces."
},

{
  id: 14,
  name: "BBQ Chicken Pizza",
  category: "Pizza",
  price: "Rs. 1600",
  image: process.env.PUBLIC_URL + "/images/bbq.jfif",
  description: "Smoky BBQ chicken with melted cheese and fresh toppings."
},

{
  id: 15,
  name: "Veggie Supreme Pizza",
  category: "Pizza",
  price: "Rs. 1200",
  image: process.env.PUBLIC_URL + "/images/veggie.jfif",
  description: "Fresh vegetables, olives, capsicum and delicious mozzarella cheese."
},

{
  id: 16,
  name: "Cheese Lover Pizza",
  category: "Pizza",
  price: "Rs. 1700",
  image: process.env.PUBLIC_URL + "/images/cheese lover.jfif",
  description: "Extra loaded with a rich blend of mozzarella and creamy cheese."
},

  {
    id: 17,
    name: "Loaded Fries",
    category: "Fries",
    price: "Rs. 600",
   image: process.env.PUBLIC_URL + "/images/loaded fries.jfif",
    description: "Crispy fries topped with cheese and sauces."
  },

  {
    id: 18,
    name: "Masala Fries",
    category: "Fries",
    price: "300",
    image: process.env.PUBLIC_URL + "/images/masala.jfif",
    description: "Crunchy fries coated with special spicy masala."
  },
  {
    id: 19,
    name: "Garlic Parmesan Fries",
    category: "Fries",
    price: "Rs. 350",
    image: process.env.PUBLIC_URL + "/images/garlic.jfif",
    description: "Crispy golden fries tossed in garlic butter and topped with shredded parmesan cheese."
  },

  {
    id: 20,
    name: "Cheese Fries",
    category: "Fries",
    price: "Rs. 400",
   image: process.env.PUBLIC_URL + "/images/cheese.jfif",
    description: "Loaded fries topped with chunks of BBQ chicken, melted cheddar, and a drizzle of smoky BBQ sauce."
  },


  {
    id: 21,
    name: "Crispy Chicken Broast",
    category: "Broast",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/broast.jfif",
    description: "Golden fried chicken with crunchy coating."
  },

  {
    id: 22,
    name: "Spicy Broast",
    category: "Broast",
    price: "Rs. 450 ",
    image: process.env.PUBLIC_URL + "/images/spicy.jfif",
    description: "Extra spicy broast with signature seasoning."
  },
  {
    id: 23,
    name: "Garlic Mayo Broast",
    category: "Broast",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/garlic mayo.jfif",
    description: "Crunchy fried chicken drizzled with creamy garlic mayonnaise sauce."
  },

  {
    id: 24,
    name: "BBQ Glazed Broast",
    category: "Broast",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/bbq broast.jfif",
    description: "Crispy broast pieces coated in a sweet and smoky hickory BBQ sauce."
  },

  {
    id: 25,
    name: "Club Sandwich",
    category: "Sandwich",
    price: "Rs. 480",
    image: process.env.PUBLIC_URL + "/images/sandwich.jfif",
    description: "Triple layered sandwich with chicken, cheese and fresh veggies."
  },

 {
  id: 26,
  name: "Grilled Chicken Sandwich",
  category: "Sandwich",
  price: "Rs 550",
  image: process.env.PUBLIC_URL + "/images/grilled.jpg",
  description: "Juicy grilled chicken with creamy mayo and cheese."
},
{
    id: 27,
    name: "BBQ Smoked Sandwich",
    category: "Sandwich",
    price: "Rs, 550",
    image: process.env.PUBLIC_URL + "/images/smoky.jfif",
    description: "Tender shredded chicken tossed in smoky BBQ sauce and melted cheddar."
  },

  {
    id: 28,
    name: "Spicy Jalapeno & Cheese Sandwich",
    category: "Sandwich",
    price: "Rs.650",
    image: process.env.PUBLIC_URL + "/images/spicy jalapeno.jfif",
    description: "Toasted sandwich loaded with spicy jalapenos, mozzarella, and chili garlic spread."
  },

  {
    id: 29,
    name: "Egg & Cheese Breakfast Sandwich",
    category: "Sandwich",
    price: "Rs. 400",
    image: process.env.PUBLIC_URL + "/images/egg.jfif",
    description: "Fluffy scrambled eggs, sliced cheese, and fresh butter on toasted bread."
  },


{
  id: 30,
  name: "Hot & Spicy Wings",
  category: "Wings",
  price: "Rs. 500",
  image: process.env.PUBLIC_URL + "/images/hot.jfif",
  description: "Crispy wings tossed in hot and spicy sauce."
},

{
  id: 31,
  name: "BBQ Wings",
  category: "Wings",
  price: "Rs. 500",
  image: process.env.PUBLIC_URL + "/images/bbq wings.jfif",
  description: "Smoky BBQ wings coated with our special sweet and spicy sauce."
},
{
    id: 32,
    name: "Honey Garlic Wings",
    category: "Wings",
    price: "$Rs. 500",
    image: process.env.PUBLIC_URL + "/images/honey.jfif",
    description: "Crispy fried wings glazed in a sweet and savory honey garlic sauce."
  },

{
  id: 33,
  name: "Chicken Roll",
  category: "Rolls",
  price: "Rs. 400",
  image: process.env.PUBLIC_URL + "/images/roll.jfif",
  description: "Soft paratha wrapped with spicy chicken and fresh vegetables."
},
  {
    id: 34,
    name: "Malai Roll",
    category: "Rolls",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/malai.jfif",
    description: "Creamy malai chicken roll with delicious sauces."
  },
  {
    id: 35,
    name: "Zinger Paratha Roll",
    category: "Rolls",
    price: "Rs. 500",
   image: process.env.PUBLIC_URL + "/images/zinger roll.jfif",
    description: "Crispy zinger chicken strip wrapped in a flaky paratha with mayo-garlic sauce."
  },
  {
    id: 36,
    name: "Spicy Garlic Mayo Roll",
    category: "Rolls",
    price: "Rs. 450",
    image: process.env.PUBLIC_URL + "/images/spicy roll.jfif",
    description: "Spicy boti tikka wrapped with thin sliced onions and extra garlic mayo."
  },
  
  {
    id: 37,
    name: "Beef Steak",
    category: "Steak",
    price: "Rs. 850",
    image: process.env.PUBLIC_URL + "/images/steak.jfif",
    description: "Premium grilled beef steak served with special sauce."
  },
  {
    id: 38,
    name: "Chicken Steak",
    category: "Steak",
    price: "Rs. 700",
    image: process.env.PUBLIC_URL + "/images/chicken steak.jpg",
    description: "Tender grilled chicken steak with herbs and creamy sauce."
  },
{
    id: 39,
    name: "Mushroom Pepper Steak",
    category: "Steak",
    price: "Rs. 750",
    image: process.env.PUBLIC_URL + "/images/mushroom steak.jfif",
    description: "Sizzling grilled steak smothered in a rich, creamy black pepper and mushroom gravy."
  },

  
  {
    id: 40,
    name: "Peri Peri Chicken Bites",
    category: "Peri Peri",
    price: "Rs 500",
    image: process.env.PUBLIC_URL + "/images/bites.jfif",
    description: "Juicy chicken bites with spicy peri peri seasoning."
  },
  {
    id: 41,
    name: "Cheesy Peri Bites",
    category: "Peri Peri",
    price: "Rs 500",
    image: process.env.PUBLIC_URL + "/images/cheesy bites.jfif",
    description: "Crispy bites filled with cheese and peri peri flavors."
  },

  {
    id: 42,
    name: "Alfredo Pasta",
    category: "Pasta",
    price: "Rs. 700",
   image: process.env.PUBLIC_URL + "/images/alfredo.jfif",
    description: "Creamy white sauce pasta topped with parmesan cheese."
  },
  {
    id: 43,
    name: "Spicy Red Pasta",
    category: "Pasta",
    price: "rs.500",
    image: process.env.PUBLIC_URL + "/images/pasta.jfif",
    description: "Italian style pasta with spicy tomato sauce."
  },
  {
    id: 44,
    name: "Creamy Chicken Tarragon Pasta",
    category: "Pasta",
    price: "Rs. 700",
    image: process.env.PUBLIC_URL + "/images/tarragon.jfif",
    description: "Fettuccine pasta tossed in a rich tarragon cream sauce, topped with grilled chicken breast."
  },
  {
    id: 45,
    name: "Baked Mac & Cheese",
    category: "Pasta",
    price: "Rs. 650",
   image: process.env.PUBLIC_URL + "/images/mac.jfif",
    description: "Macaroni pasta baked with a blend of four melted cheeses and a crispy golden breadcrumb crust."
  },
   
  {
    id: 46,
    name: "Chicken Tacos",
    category: "Tacos",
    price: "Rs.600",
    image: process.env.PUBLIC_URL + "/images/tacos.jfif",
    description: "Crispy tacos filled with spicy chicken, cheese and fresh salsa."
  },
  {
    id: 47,
    name: "Beef Tacos",
    category: "Tacos",
    price: "Rs.750",
    image: process.env.PUBLIC_URL + "/images/beef tacos.jfif",
    description: "Mexican style beef tacos with creamy sauces."
  },


  {
    id: 48,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "Rs. 350",
    image: process.env.PUBLIC_URL + "/images/lava.jfif",
    description: "Warm chocolate cake with a rich melted center."
  },

  {
    id: 49,
    name: "Strawberry Cheesecake",
    category: "Desserts",
    price: "Rs. 300",
    image: process.env.PUBLIC_URL + "/images/cheesecake.jfif",
    description: "Creamy cheesecake topped with fresh strawberries."
  },

  {
    id: 50,
    name: "Mint Margrita",
    category: "Juices",
    price: "Rs. 400",
    image: process.env.PUBLIC_URL + "/images/mint.jfif",
    description: "Fresh and refreshing mint juice."
  },

  {
    id: 51,
    name: "Orange Juice",
    category: "Juices",
    price: "Rs.300",
    image: process.env.PUBLIC_URL + "/images/orange.jfif",
    description: "Pure fresh orange juice full of natural flavor."
  },

  {
    id: 52,
    name: "Coca Cola",
    category: "Drinks",
    price: "Rs. 150",
    image: process.env.PUBLIC_URL + "/images/coca.jfif",
    description: "Chilled fizzy soft drink to refresh your meal."
  },

  {
    id: 53,
    name: "Mint Lemon Soda",
    category: "Drinks",
    price: "Rs. 200",
   image: process.env.PUBLIC_URL + "/images/soda.jfif",
    description: "Refreshing mint and lemon sparkling drink."
  }

];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = [
    "All", 
    ...new Set(foodItems.map((item) => item.category)),
  ];

 const filteredItems =
  selectedCategory === "All"
    ? foodItems
    : foodItems.filter((item) => item.category === selectedCategory);

const addToCart = (item) => {
  setCart([...cart, item]);

  setTimeout(() => {
    document
      .getElementById("cart-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

  return (
    <div className="container py-5 mt-5">
     <div className="d-flex justify-content-between align-items-center mb-4">
  <h1>Our Menu</h1>

  <button className="btn btn-danger">
    Cart ({cart.length})
  </button>
</div>

      <div className="text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn m-2 ${
              selectedCategory === category
                ? "btn-danger"
                : "btn-outline-danger"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={`${item.image}?w=500`}
                className="card-img-top"
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{item.name}</h5>
                <p className="text-muted">{item.category}</p>
                <p>{item.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{item.price}</span>
                  <button
                     className="btn btn-warning"
                     onClick={() => addToCart(item)}>
                      Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
          </div>

      <hr />

     <div id="cart-section">
  <h2 className="mt-5 mb-3">
    Cart Items ({cart.length})
  </h2>
</div>

      <div className="row">
        {cart.map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: "150px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">
                <h6>{item.name}</h6>
                <p className="fw-bold text-danger">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;