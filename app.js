// =============================================
//  MY RECIPE BOOK — app.js
//  Contains all recipes + filter/search/modal logic
// =============================================

// -------------------------------------------------------
// RECIPE DATA
// To add a new recipe, copy one object and fill in your own values!
// -------------------------------------------------------
const recipes = [
  {
    title: "Chocolate Chip Cookies",
    emoji: "🍪",
    tag: "Dessert",
    desc: "Soft, chewy cookies packed with melty chocolate chips. A timeless classic.",
    time: "22 mins",
    serves: "24",
    difficulty: "Easy",
    ingredients: [
      "2¼ cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup (2 sticks) butter, softened",
      "¾ cup granulated sugar",
      "¾ cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    steps: [
      "Preheat your oven to 375°F (190°C). Line a baking sheet with parchment paper.",
      "In a bowl, whisk together flour, baking soda, and salt. Set aside.",
      "In a large bowl, beat butter with both sugars until light and creamy (about 2 minutes).",
      "Add eggs one at a time, then add vanilla. Mix well.",
      "Gradually stir in the flour mixture until just combined.",
      "Fold in the chocolate chips with a spatula.",
      "Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them 2 inches apart.",
      "Bake for 10–12 minutes until edges are golden. Centers may look slightly underdone — that's perfect!",
      "Cool on the baking sheet for 5 minutes, then transfer to a wire rack. Enjoy!"
    ]
  },
  {
    title: "Margherita Pizza",
    emoji: "🍕",
    tag: "Main",
    desc: "Classic Italian pizza with tangy tomato sauce, fresh mozzarella, and fragrant basil.",
    time: "35 mins",
    serves: "2",
    difficulty: "Medium",
    ingredients: [
      "1 store-bought or homemade pizza dough ball",
      "½ cup tomato passata or pizza sauce",
      "200g fresh mozzarella, torn",
      "A large handful of fresh basil leaves",
      "2 tbsp good olive oil",
      "Salt and black pepper to taste",
      "A little flour for rolling"
    ],
    steps: [
      "Place a baking tray in the oven and preheat to the highest setting (250°C/480°F). Let it heat for 30 minutes.",
      "On a floured surface, stretch or roll the dough into a thin 30cm circle.",
      "Spread tomato sauce evenly, leaving a 1.5cm border for the crust.",
      "Scatter the torn mozzarella on top and season with salt and pepper.",
      "Carefully slide the pizza onto the hot baking tray.",
      "Bake for 10–12 minutes until the crust is puffed and golden, and the cheese is bubbling.",
      "Remove from oven, top with fresh basil and a drizzle of olive oil. Serve immediately."
    ]
  },
  {
    title: "Mango Lassi",
    emoji: "🥭",
    tag: "Drinks",
    desc: "A creamy, refreshing Indian yogurt drink bursting with tropical mango flavour.",
    time: "5 mins",
    serves: "2",
    difficulty: "Easy",
    ingredients: [
      "1 cup ripe mango chunks (fresh or frozen)",
      "1 cup plain full-fat yogurt",
      "½ cup cold milk",
      "2 tbsp sugar (adjust to taste)",
      "¼ tsp ground cardamom",
      "A pinch of salt",
      "Ice cubes to serve"
    ],
    steps: [
      "Add mango chunks, yogurt, milk, sugar, cardamom, and salt to a blender.",
      "Blend on high for 45–60 seconds until completely smooth and frothy.",
      "Taste — adjust sweetness or add more mango if you like.",
      "Fill two tall glasses with ice cubes.",
      "Pour the lassi over the ice and serve immediately. Garnish with a pinch of cardamom or a slice of mango."
    ]
  },
  {
    title: "Vegetable Fried Rice",
    emoji: "🍳",
    tag: "Main",
    desc: "Quick, flavourful fried rice loaded with colourful vegetables — great for using leftover rice.",
    time: "20 mins",
    serves: "3",
    difficulty: "Easy",
    ingredients: [
      "2 cups cooked rice (day-old rice works best)",
      "1 cup mixed vegetables (carrot, peas, corn, capsicum)",
      "2 large eggs",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "3 garlic cloves, minced",
      "1 tsp grated fresh ginger",
      "2 tbsp neutral oil",
      "Spring onions to garnish",
      "White pepper to taste"
    ],
    steps: [
      "Make sure your rice is cold and not clumped — break apart any lumps with your hands.",
      "Heat oil in a wok or large non-stick pan over high heat until smoking hot.",
      "Add garlic and ginger, stir-fry for 20–30 seconds until fragrant.",
      "Add vegetables and stir-fry for 2–3 minutes until just cooked but still bright.",
      "Push everything to one side. Crack in the eggs and scramble until just set.",
      "Add the rice, breaking it up and tossing everything together over high heat.",
      "Pour soy sauce and sesame oil over the rice. Toss well for 2 minutes.",
      "Season with white pepper. Garnish generously with sliced spring onions and serve hot."
    ]
  },
  {
    title: "Banana Pancakes",
    emoji: "🥞",
    tag: "Breakfast",
    desc: "Fluffy, golden pancakes naturally sweetened with ripe banana. Ready in 15 minutes.",
    time: "15 mins",
    serves: "2",
    difficulty: "Easy",
    ingredients: [
      "1 large ripe banana",
      "2 large eggs",
      "½ cup all-purpose flour",
      "½ cup milk",
      "1 tsp baking powder",
      "1 tsp vanilla extract",
      "A pinch of salt",
      "Butter for the pan",
      "Honey or maple syrup to serve"
    ],
    steps: [
      "Peel and mash the banana in a large bowl until as smooth as possible.",
      "Whisk in the eggs, milk, and vanilla extract.",
      "Add flour, baking powder, and a pinch of salt. Stir gently until just combined — a few lumps are fine!",
      "Heat a non-stick pan over medium heat and add a small knob of butter.",
      "Pour roughly 3 tablespoons of batter per pancake. Cook for 2–3 minutes until bubbles appear on the surface.",
      "Flip carefully and cook for another 1–2 minutes until golden.",
      "Serve in a stack, drizzled with honey or maple syrup. Add sliced banana on top if you like!"
    ]
  },
  {
    title: "Tomato Soup",
    emoji: "🍅",
    tag: "Soup",
    desc: "Velvety, warming tomato soup made from pantry staples. Pure comfort in a bowl.",
    time: "30 mins",
    serves: "4",
    difficulty: "Easy",
    ingredients: [
      "2 cans (400g each) whole peeled tomatoes",
      "1 large onion, roughly chopped",
      "4 garlic cloves, minced",
      "1 cup vegetable broth",
      "2 tbsp olive oil",
      "1 tsp sugar",
      "½ tsp dried basil or oregano",
      "Salt and black pepper to taste",
      "A splash of cream to serve (optional)"
    ],
    steps: [
      "Heat olive oil in a large pot over medium heat. Add onion and cook for 5 minutes until soft.",
      "Add garlic and cook for 1 minute more until fragrant.",
      "Pour in the canned tomatoes (with their juice), vegetable broth, sugar, and dried herbs.",
      "Season with salt and pepper. Bring to a boil, then reduce heat and simmer for 15 minutes.",
      "Use a hand blender (or carefully transfer to a blender) and blend until completely smooth.",
      "Return to the pot, taste and adjust seasoning. Heat through.",
      "Ladle into bowls. Add a swirl of cream if you like, and serve with crusty bread."
    ]
  },
  {
    title: "Avocado Toast",
    emoji: "🥑",
    tag: "Breakfast",
    desc: "Creamy smashed avocado on toasted bread — endlessly customisable and ready in minutes.",
    time: "8 mins",
    serves: "1",
    difficulty: "Easy",
    ingredients: [
      "2 thick slices of sourdough or whole-grain bread",
      "1 ripe avocado",
      "½ lemon, juiced",
      "Salt and chilli flakes to taste",
      "1 egg (optional — fried or poached)",
      "A drizzle of olive oil",
      "Fresh coriander or microgreens to garnish"
    ],
    steps: [
      "Toast the bread slices until golden and crispy.",
      "Halve the avocado, remove the stone, and scoop the flesh into a bowl.",
      "Add lemon juice and a good pinch of salt. Mash with a fork to your preferred texture — chunky or smooth.",
      "Spread generously onto the toast.",
      "Top with chilli flakes, a drizzle of olive oil, and any toppings you like (egg, tomatoes, feta, etc.).",
      "Serve immediately while the toast is still warm."
    ]
  },
  {
    title: "Garlic Bread",
    emoji: "🥖",
    tag: "Snack",
    desc: "Golden, buttery garlic bread with crispy edges and a soft, garlicky centre. Irresistible.",
    time: "18 mins",
    serves: "4",
    difficulty: "Easy",
    ingredients: [
      "1 baguette or Italian bread loaf",
      "100g butter, softened",
      "4 garlic cloves, finely minced",
      "2 tbsp fresh parsley, finely chopped",
      "A pinch of salt",
      "Optional: 50g grated mozzarella or parmesan"
    ],
    steps: [
      "Preheat your oven to 200°C (390°F).",
      "Mix softened butter, minced garlic, parsley, and a pinch of salt together in a small bowl.",
      "Slice the baguette in half lengthways (or make diagonal cuts without cutting all the way through).",
      "Spread the garlic butter generously over the cut surfaces.",
      "If using cheese, sprinkle it on top.",
      "Wrap in foil and bake for 10 minutes. Then open the foil and bake for another 5 minutes until golden and crispy.",
      "Slice and serve hot!"
    ]
  }
];


// -------------------------------------------------------
// STATE
// -------------------------------------------------------
let activeTag = "All";


// -------------------------------------------------------
// INITIALISE
// -------------------------------------------------------
function init() {
  renderFilters();
  filterRecipes();
  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });
}


// -------------------------------------------------------
// FILTERS
// -------------------------------------------------------
function renderFilters() {
  const allTags = ["All", ...new Set(recipes.map(r => r.tag))];
  const row = document.getElementById("filterRow");
  row.innerHTML = allTags.map(tag =>
    `<button class="filter-btn ${tag === activeTag ? "active" : ""}" onclick="setFilter('${tag}')">${tag}</button>`
  ).join("");
}

function setFilter(tag) {
  activeTag = tag;
  renderFilters();
  filterRecipes();
  closeDetail();
}


// -------------------------------------------------------
// FILTER + SEARCH + RENDER CARDS
// -------------------------------------------------------
function filterRecipes() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const grid = document.getElementById("cardsGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");

  const filtered = recipes.filter((r) => {
    const matchTag = activeTag === "All" || r.tag === activeTag;
    const matchSearch =
      r.title.toLowerCase().includes(query) ||
      r.desc.toLowerCase().includes(query) ||
      r.tag.toLowerCase().includes(query);
    return matchTag && matchSearch;
  });

  // Update count
  resultsCount.textContent = filtered.length === 0
    ? ""
    : `${filtered.length} recipe${filtered.length !== 1 ? "s" : ""} found`;

  // Show/hide empty state
  emptyState.style.display = filtered.length === 0 ? "block" : "none";
  grid.style.display = filtered.length === 0 ? "none" : "grid";

  // Render cards
  grid.innerHTML = filtered.map((r, idx) => {
    const originalIndex = recipes.indexOf(r);
    return `
      <article
        class="recipe-card"
        onclick="openDetail(${originalIndex})"
        role="button"
        tabindex="0"
        aria-label="Open ${r.title} recipe"
        style="animation-delay: ${idx * 0.05}s"
        onkeydown="if(event.key==='Enter') openDetail(${originalIndex})"
      >
        <div class="card-thumb">${r.emoji}</div>
        <div class="card-body">
          <span class="card-tag tag-${r.tag}">${r.tag}</span>
          <h2 class="card-title">${r.title}</h2>
          <p class="card-desc">${r.desc}</p>
          <div class="card-meta">
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${r.time}
            </span>
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              Serves ${r.serves}
            </span>
            <span>${r.difficulty}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}


// -------------------------------------------------------
// MODAL — OPEN
// -------------------------------------------------------
function openDetail(index) {
  const r = recipes[index];
  const overlay = document.getElementById("modalOverlay");

  // Populate
  document.getElementById("modalEmoji").textContent = r.emoji;
  document.getElementById("modalTag").textContent = r.tag;
  document.getElementById("modalTag").className = `modal-tag tag-${r.tag}`;
  document.getElementById("modalTitle").textContent = r.title;
  document.getElementById("modalDesc").textContent = r.desc;

  // Chips
  document.getElementById("modalChips").innerHTML = `
    <span class="chip">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ${r.time}
    </span>
    <span class="chip">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      Serves ${r.serves}
    </span>
    <span class="chip">
      <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ${r.difficulty}
    </span>
  `;

  // Ingredients
  document.getElementById("modalIngredients").innerHTML = r.ingredients
    .map(ing => `<li><span class="ing-dot"></span>${ing}</li>`)
    .join("");

  // Steps
  document.getElementById("modalSteps").innerHTML = r.steps
    .map((step, i) => `<li><span class="step-num">${i + 1}</span><span>${step}</span></li>`)
    .join("");

  // Show modal
  overlay.classList.add("open");
  document.body.style.overflow = "hidden"; // prevent background scroll
}


// -------------------------------------------------------
// MODAL — CLOSE
// -------------------------------------------------------
function closeDetail() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Close if user clicks the dark overlay (not the modal itself)
function handleOverlayClick(event) {
  if (event.target === document.getElementById("modalOverlay")) {
    closeDetail();
  }
}


// -------------------------------------------------------
// START
// -------------------------------------------------------
init();