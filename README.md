# recipe-page
My beginner recipe book project

# 🍽️ My Recipe Book

A beginner-friendly recipe page built with pure HTML, CSS, and JavaScript — no frameworks, no installations, just open and run!

🌐 **Live Demo:** [your-username.github.io/recipe-page](https://your-username.github.io/recipe-page)

---

## ✨ Features

- 📋 **8 recipes** across multiple categories
- 🔍 **Search bar** — find recipes by name or description
- 🏷️ **Category filters** — Breakfast, Main, Dessert, Soup, Drinks, Snack
- 🃏 **Recipe cards** with emoji, cook time, servings, and difficulty
- 📖 **Full recipe modal** — click any card to see ingredients and step-by-step instructions
- ⌨️ **Keyboard friendly** — press `Escape` to close the modal
- 📱 **Responsive** — works on mobile and desktop

---

## 🗂️ Project Structure

```
recipe-page/
├── index.html   → Page structure and layout
├── style.css    → All styling and animations
├── app.js       → Recipe data + search, filter, and modal logic
└── README.md    → You're reading this!
```

---

## 🚀 How to Run Locally

1. Download or clone this repository
2. Open the `recipe-page` folder
3. Double-click `index.html` — it opens straight in your browser!

No server, no installs needed. ✅

---

## ➕ How to Add a New Recipe

Open `app.js` and add a new object inside the `recipes` array:

```js
{
  title: "My New Recipe",
  emoji: "🍜",
  tag: "Main",          // Options: Main / Dessert / Breakfast / Soup / Drinks / Snack
  desc: "A short description of the dish.",
  time: "25 mins",
  serves: "2",
  difficulty: "Easy",   // Easy / Medium / Hard
  ingredients: [
    "Ingredient 1",
    "Ingredient 2",
    "Ingredient 3"
  ],
  steps: [
    "Step 1 instructions.",
    "Step 2 instructions.",
    "Step 3 instructions."
  ]
}
```

Save the file and refresh your browser — the new recipe card appears automatically! 🎉

---

## 🛠️ Built With

- **HTML5** — page structure
- **CSS3** — styling, animations, responsive layout
- **Vanilla JavaScript** — search, filters, modal logic
- **Google Fonts** — Playfair Display + DM Sans
- No libraries, no frameworks, no build tools!

---


## 👩‍💻 Author

Made with ❤️ by **Nancy**  
🔗 [github.com/your-username](https://github.com/your-username)

---

## 📄 License

This project is open source and free to use for learning purposes.
