# kiteNews

kiteNews is a modern, fast, and responsive news web application built with React and Vite. It fetches the latest news articles from NewsAPI.org and displays them in a clean, user-friendly interface. The app supports category-based browsing, infinite scrolling, and search functionality, making it easy to stay updated with trending topics.

## Features
- 📰 Fetches real-time news from [NewsAPI.org](https://newsapi.org/)
- 🔍 Search for news by keyword or category
- ♾️ Infinite scroll for seamless news browsing
- 📱 Responsive design for mobile and desktop
- ⚡ Built with React, Vite, and Bootstrap
- 🌐 Easy deployment on Vercel

## Demo
Live: [kite-news.vercel.app](https://kite-news.vercel.app)

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm
- A free API key from [NewsAPI.org](https://newsapi.org/register)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rohan04022003/kite-news.git
   cd kite-news-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your NewsAPI key:
   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment
This project is ready to deploy on [Vercel](https://vercel.com/):
- Set the environment variable `VITE_NEWS_API_KEY` in your Vercel dashboard.
- Vercel will automatically build and deploy your app from the `main` branch.

## Folder Structure
```
kite-news-main/
├── public/
├── src/
│   ├── components/
│   ├── Context/
│   └── ...
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

## License
This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Rohan Kumar Mahto**
