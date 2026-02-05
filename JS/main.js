const Recipes = [
  {
    title: "Mediterranean Quinoa Bowl",
    rating: 4.5,
    reviews: 156,
    img: "./Images/imgi_2_photo-1546069901-ba9599a7e63c.jfif",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    prepTime: 20,
    cookTime: 35,
    serving: 2,
    level: "Easy",
    cuisine: "Mediterranean",
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],

    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    ],

    nutrition: {
      calories: 480,
      Carbohydrates: 58,
      Fiber: 10,
      protien: 18,
      FatL: 20,
      sodium: 540,
    },

    ChefTips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Let quinoa cool before adding fresh ingredients",
      "Let quinoa cool before adding fresh ingredients",
    ],
  },
  {
    title: "Pad Thai",
    rating: 4.8,
    reviews: 445,
    img: "./Images/imgi_2_photo-1559314809-0d155014e29e (1).jfif",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    prepTime: 20,
    cookTime: 15,
    serving: 2,
    level: "Intermediate",
    cuisine: "Asian",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],

    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
    ],

    nutrition: {
      calories: 540,
      Carbohydrates: 62,
      Fiber: 4,
      protien: 32,
      FatL: 16,
      sodium: 1120,
    },

    ChefTips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    title: "Chicken Stir-Fry",
    rating: 4.5,
    reviews: 324,
    img: "./Images/imgi_2_photo-1603133872878-684f208fb84b.jfif",
    description: "Quick and healthy stir-fry with colorful vegetables",
    prepTime: 15,
    cookTime: 15,
    serving: 4,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, slice",
      "1 broccoli head, floret",
      "2 carrots, julienne",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    ],

    nutrition: {
      calories: 320,
      Carbohydrates: 18,
      Fiber: 5,
      protien: 34,
      FatL: 12,
      sodium: 840,
    },

    ChefTips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    title: "Beef Tacos",
    rating: 4.6,
    reviews: 278,
    img: "./Images/imgi_2_photo-1565299585323-38d6b0865b47.jfif",
    description: "Flavorful Mexican tacos with seasoned ground beef",

    prepTime: 15,
    cookTime: 20,
    serving: 4,
    level: "Easy",
    cuisine: "American",

    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],

    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],

    nutrition: {
      calories: 420,
      Carbohydrates: 32,
      Fiber: 4,
      protien: 26,
      FatL: 20,
      sodium: 780,
    },

    ChefTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    title: "Chicken Tikka Masala",
    rating: 4.7,
    reviews: 389,
    img: "./Images/imgi_2_photo-1565557623262-b51c2513a641 (1).jfif",
    description: "Rich and creamy Indian curry with tender chicken pieces",

    prepTime: 20,
    cookTime: 30,
    serving: 4,
    level: "Intermediate",
    cuisine: "Asian",

    ingredients: [
      "Chicken breast pieces",
      "Yogurt",
      "Tikka paste",
      "Onion, chopped",
      "Garlic, minced",
      "Ginger, minced",
      "Canned tomatoes",
      "Coconut cream",
      "Oil",
      "Fresh cilantro",
      "Basmati rice or naan bread",
    ],

    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],

    nutrition: {
      calories: 450,
      Carbohydrates: 24,
      Fiber: 4,
      protien: 38,
      FatL: 22,
      sodium: 760,
    },

    ChefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
];

function changeRecipes() {
  var randomIndex = Math.floor(Math.random() * Recipes.length);
console.log("randomIndex:", randomIndex);
console.log("img:", Recipes[randomIndex].img);
  let ingredients = "";
  let instructions = "";
  let ChefTips = "";
  for (let i = 0; i < Recipes[randomIndex].ingredients.length; i++) {
    ingredients += `     <li class="d-flex align-items-start gap-3">
                    <span
                      class="ing-num d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0">${i + 1}</span>
                    <span>${Recipes[randomIndex].ingredients[i]}</span>
                  </li>
`;
  }

  for (let i = 0; i < Recipes[randomIndex].instructions.length; i++) {
    instructions += `
     <li class="d-flex gap-3">
                    <span class="step-num d-flex align-items-center justify-content-center flex-shrink-0">${i + 1}</span>
                    <p class="mb-0">
                     ${Recipes[randomIndex].instructions[i]}.
                    </p>
                  </li>
`;
  }

  for (let i = 0; i < Recipes[randomIndex].ChefTips.length; i++) {
    ChefTips += `
     <div class="tip-item d-flex align-items-center gap-3 p-3 rounded-4">
                  <i class="fa-solid fa-check tip-icon"></i>
                  <span>${Recipes[randomIndex].ChefTips[i]}</span>
                </div>       
    `;
  }

  document.getElementById("demo").innerHTML = `
      <div  class="row">
        <div class="col-lg-5 p-0"">
      <div class=" sec-img position-relative">
        <div class="rating-badge position-absolute top-0 start-0 m-3">
    <i class="fa-solid fa-star me-2"></i>
    <strong class="me-2">${Recipes[randomIndex].rating}</strong>
    <span class="text-muted">(${Recipes[randomIndex].reviews} reviews)</span>
  </div>
          <img class="  rounded-5 " src="${Recipes[randomIndex].img}" alt="">

           <div class="stats-card position-absolute start-50 translate-middle-x w-100 px-3">
    <div class="bg-white rounded-4 shadow-sm p-3">
      <div class="row text-center g-0">

        <div class="col">
          <div class="stat-icon text-warning mb-1">
            <i class="fa-regular fa-clock"></i>
          </div>
          <div class="small text-muted">Prep Time</div>
          <div class="fw-bold">${Recipes[randomIndex].prepTime} min</div>
        </div>

        <div class="col border-start border-end">
          <div class="stat-icon text-danger mb-1">
            <i class="fa-solid fa-fire-burner"></i>
          </div>
          <div class="small text-muted">Cook Time</div>
          <div class="fw-bold">${Recipes[randomIndex].cookTime} min</div>
        </div>

        <div class="col">
          <div class="stat-icon text-primary mb-1">
            <i class="fa-solid fa-users"></i>
          </div>
          <div class="small text-muted">Servings</div>
          <div class="fw-bold">${Recipes[randomIndex].serving} people</div>
        </div>

      </div>
    </div>
  </div>
        </div>
      </div>
      <div class="col-lg-7 p-0 "">
     <div class=" right-side p-5 rounded-end-4">
        <div class="d-flex gap-3">
          <span class="N-span px-3 d-flex justify-content-center align-items-center">${Recipes[randomIndex].level}</span>
          <span class="T-span px-3 d-flex justify-content-center align-items-center">${Recipes[randomIndex].cuisine}</span>
        </div>
        <div class="content-title d-flex justify-content-between  align-items-center">
          <div class="l-t">
            <h1 class="m-0">${Recipes[randomIndex].title}</h1>
            <p>${Recipes[randomIndex].description}</p>
          </div>
          <div class="R-t d-flex gap-3">
            <span class="span-1"><i class="fa-solid fa-bookmark"></i></span>
            <span class="span-2"><i class="fa-solid fa-share-nodes"></i></span>
          </div>
        </div>
        <!-- NAV & TABS -->
        <div class="recipe-tabs mt-4">

          <ul class="nav nav-underline justify-content-start gap-4" id="recipeTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients"
                type="button" role="tab" aria-controls="ingredients" aria-selected="true">
                <i class="fa-solid fa-list-ul me-2"></i> Ingredients
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="instructions-tab" data-bs-toggle="tab" data-bs-target="#instructions"
                type="button" role="tab" aria-controls="instructions" aria-selected="false">
                <i class="fa-regular fa-bookmark me-2"></i> Instructions
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="nutrition-tab" data-bs-toggle="tab" data-bs-target="#nutrition" type="button"
                role="tab" aria-controls="nutrition" aria-selected="false">
                <i class="fa-solid fa-chart-pie me-2"></i> Nutrition
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link" id="tips-tab" data-bs-toggle="tab" data-bs-target="#tips" type="button"
                role="tab" aria-controls="tips" aria-selected="false">
                <i class="fa-regular fa-lightbulb me-2"></i> Chef's Tips
              </button>
            </li>
          </ul>

          <div class="border-bottom mt-2"></div>

          <div class="tab-content pt-4" id="recipeTabContent">
            <div class="tab-pane fade show active" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
              <!-- Ingredients Box -->
              <div class="card border-0 rounded-4 p-4 ingredients-card">
                <ul class="list-unstyled m-0 d-grid gap-3">
${ingredients}
                </ul>
              </div>

            </div>

            <div class="tab-pane fade" id="instructions" role="tabpanel" aria-labelledby="instructions-tab">
              <!-- Instructions Box -->
              <div class="card border-0 rounded-4 p-4 instructions-card">

                <ul class="list-unstyled m-0 d-grid gap-4 instructions-list">
${instructions}
                </ul>

              </div>

            </div>

            <div class="tab-pane fade" id="nutrition" role="tabpanel" aria-labelledby="nutrition-tab">
              <!-- Nutrition Section -->
              <div class="row g-4 nutrition-cards">

                <!-- Calories -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-warning-subtle text-warning">
                        <i class="fa-solid fa-fire"></i>
                      </div>
                      <span class="fw-semibold">Calories</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.calories} kcal</span>
                  </div>
                </div>

                <!-- Protein -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-primary-subtle text-primary">
                        <i class="fa-solid fa-dumbbell"></i>
                      </div>
                      <span class="fw-semibold">Protein</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.protien}g</span>
                  </div>
                </div>

                <!-- Carbs -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-warning-subtle text-warning">
                        <i class="fa-solid fa-wheat-awn"></i>
                      </div>
                      <span class="fw-semibold">Carbohydrates</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.Carbohydrates}g</span>
                  </div>
                </div>

                <!-- Fat -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-danger-subtle text-danger">
                        <i class="fa-solid fa-droplet"></i>
                      </div>
                      <span class="fw-semibold">Fat</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.FatL}g</span>
                  </div>
                </div>

                <!-- Fiber -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-success-subtle text-success">
                        <i class="fa-solid fa-leaf"></i>
                      </div>
                      <span class="fw-semibold">Fiber</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.Fiber}g</span>
                  </div>
                </div>

                <!-- Sodium -->
                <div class="col-12 col-md-6">
                  <div
                    class="card border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between nutrition-item">
                    <div class="d-flex align-items-center gap-3">
                      <div class="nutri-icon bg-pink-subtle text-danger">
                        <i class="fa-solid fa-cube"></i>
                      </div>
                      <span class="fw-semibold">Sodium</span>
                    </div>
                    <span class="fw-bold fs-5">${Recipes[randomIndex].nutrition.sodium}mg</span>
                  </div>
                </div>

              </div>

            </div>

            <div class="tab-pane fade" id="tips" role="tabpanel" aria-labelledby="tips-tab">
              <!-- Chef Tips -->
              <div class="d-grid gap-3 chef-tips">

               ${ChefTips}

              </div>
            </div>


          </div>

        </div>


        <div class="button-dynamic mt-5">
          
            <button onclick="changeRecipes()" class="btn recipe-btn d-inline-flex align-items-center gap-2 px-4 py-3 mt-2 rounded-4 text-white fw-semibold">
  <i class="fa-solid fa-rotate"></i>
  Try Another Recipe
</button>
        </div>
      </div>
    </div>
    </div>
   
   `;
}

changeRecipes();
