# Kite News

Kite News is a modern, fast, and responsive news web application built with React and Vite. It fetches the latest news articles from the [NewsAPI](https://newsapi.org/) and displays them in a clean, user-friendly interface. The app supports category browsing, keyword search, and infinite scrolling for a seamless news reading experience.

---

## 🚀 Features

- **Live News Feed:** Fetches real-time news articles using NewsAPI.
- **Category Browsing:** Quickly switch between popular categories like Technology, Business, Entertainment, Health, Science, and Sports.
- **Keyword Search:** Search for news articles by any keyword using the search bar.
- **Infinite Scrolling:** Loads more articles as you scroll down, for uninterrupted reading.
- **Responsive Design:** Fully responsive layout using Bootstrap 5, works great on mobile and desktop.
- **Loading Indicators:** Smooth loading animations while fetching news.
- **Error Handling:** Graceful handling of API errors and empty results.

---

## 🏗️ Project Structure

```
newsApp/
├── public/
│   ├── 404.html
│   └── favicon.png
├── loading/
│   └── gif.gif
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── Context/
│   │   └── NewsProvider.jsx
│   └── components/
│       ├── NavBar/
│       │   └── NavBar.jsx
│       ├── News/
│       │   └── News.jsx
│       └── NewsItems/
│           └── NewsItems.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/rohan04022003/kiteNews.git
cd kiteNews
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Set Up Environment Variables**

This project uses [Vite](https://vitejs.dev/) and requires a NewsAPI key. Create a `.env` file in the root directory and add your API key:

```
VITE_NEWS_API_KEY=your_newsapi_key_here
```

You can get a free API key from [https://newsapi.org/](https://newsapi.org/).

### 4. **Run the Development Server**

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🚢 Deployment

This project is ready to deploy on GitHub Pages using the following command:

```bash
npm run deploy
```

This uses the `gh-pages` package to publish the `dist/` folder to your GitHub Pages site. Make sure to set the correct `homepage` in `package.json` and `base` in `vite.config.js` if deploying to a subpath.

---

## 🧩 Main Dependencies

- [React](https://react.dev/) (18+)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [react-router-dom](https://reactrouter.com/)
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
- [NewsAPI](https://newsapi.org/)

---

## 🖥️ Usage Guide

- **Browse Categories:** Use the navigation bar to switch between news categories.
- **Search News:** Enter a keyword in the search bar and press Enter or click Search.
- **Infinite Scroll:** Scroll down to load more articles automatically.
- **Read More:** Click the "Read More" button on any news card to open the full article in a new tab.

---

## ⚙️ Environment Variables

| Variable             | Description                |
|----------------------|----------------------------|
| VITE_NEWS_API_KEY    | Your NewsAPI.org API key   |

---

## 📝 Notes

- **API Rate Limits:** NewsAPI has rate limits on free plans. If you see errors or missing articles, you may have hit the quota.
- **404 Handling:** The app includes a custom `404.html` for GitHub Pages SPA routing.
- **Styling:** Uses Bootstrap for layout and custom styles for cards and loading indicators.

---

## 🙏 Credits

- [NewsAPI.org](https://newsapi.org/) for providing the news data.
- [Bootstrap](https://getbootstrap.com/) for UI components.
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) for the modern frontend stack.

---

## 📬 Contact

For questions, suggestions, or contributions, please open an issue or contact [@rohan04022003](https://github.com/rohan04022003).

---

Enjoy reading the latest news with **Kite News**! 🪁
