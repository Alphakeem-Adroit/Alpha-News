# 📰 News Reader Application

A modern, responsive News Reader web application built with **React (Vite)** and powered by **TheNewsAPI**.

This project demonstrates real-world frontend development concepts including API integration, state management, routing, pagination, local storage, and responsive UI design.

---

## 🚀 Live Demo

> [Live Demo](https://alpha-news-green.vercel.app/)

---

## 📌 Project Overview

The News Reader App allows users to:

* Browse the latest news articles
* Search news by keywords
* Filter news by category
* Navigate through paginated results
* View detailed article information
* Save favorite articles
* View saved articles on a dedicated Favorites page
* Experience a responsive design across devices

This project simulates a production-level frontend application using modern best practices.

---

## 🛠️ Tech Stack

### Core

* **React (Vite)**
* **JavaScript (ES6+)**
* **React Router DOM**
* **Axios**
* **Tailwind CSS**

### API

* **TheNewsAPI**
  [https://www.thenewsapi.com/](https://www.thenewsapi.com/)

### State Management

* React Hooks (`useState`, `useEffect`)
* Custom hook (`useNews`)
* LocalStorage for favorites

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── CategoryFilter.jsx
 │    ├── NewsCard.jsx
 │    ├── Pagination.jsx
 │
 ├── hooks/
 │    └── useNews.js
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── ArticlePage.jsx
 │    ├── Favorites.jsx
 │
 ├── services/
 │    └── newsApi.js
 │
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Features

### 🔎 Search Functionality

Users can search for news articles by keywords.

* Real-time search input
* API query integration
* Dynamic re-rendering based on search input

---

### 🏷️ Category Filtering

Users can filter news by predefined categories:

* Business
* Entertainment
* Health
* Science
* Sports
* Technology

---

### 📄 Article Details Page

Clicking on a news card routes to a detailed article page.

Displays:

* Title
* Author
* Published date
* Image
* Description
* Link to original source

Uses:

* `useParams()` from React Router
* Dynamic routing (`/article/:id`)

---

### 📚 Pagination

Handles large datasets using API pagination.

* Next and Previous navigation
* Displays current page and total pages
* Uses metadata from TheNewsAPI response

---

### ❤️ Favorites System

Users can save articles to localStorage.

* Toggle favorite icon
* Persistent storage via browser localStorage
* Dedicated Favorites page
* State initialized directly from localStorage

---

### 📱 Responsive Design

Fully responsive layout using Tailwind CSS:

* Mobile-first approach
* Grid-based layout
* Flexible card components
* Optimized spacing and typography

---

### ⏳ Loading States

Improved UX with loading indicators and safe rendering logic.

---

### ❗ Error Handling

* API errors are caught and displayed
* Safe optional chaining (`meta?.last_page`)
* Guarded rendering to prevent crashes
* React error boundary (optional)

---

## 🔌 API Integration

The app integrates with **TheNewsAPI**.

### Example API Request

```js
https://api.thenewsapi.com/v1/news/top
```

Parameters used:

* `api_token`
* `search`
* `categories`
* `language`
* `page`

### API Service Layer

All API logic is separated inside:

```
src/services/newsApi.js
```

This keeps components clean and maintainable.

---

## 🧠 Custom Hook

### `useNews`

Encapsulates:

* Data fetching
* Loading state
* Error handling
* Article data
* Pagination metadata

This ensures:

* Reusability
* Cleaner components
* Separation of concerns

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```
VITE_NEWS_API_KEY=your_api_key_here
```

⚠️ Important:

* Must start with `VITE_`
* Restart dev server after adding

---

## 🏃‍♂️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Alphakeem-Adroit/Alpha-News.git
cd Alpha-News
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Add Environment Variables

Create `.env` file:

```
VITE_NEWS_API_KEY=your_api_key_here
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

This project can be deployed on:

* Vercel
* Netlify

### Recommended: Vercel

1. Push project to GitHub
2. Import into Vercel
3. Add environment variable:

   * `VITE_NEWS_API_KEY`
4. Deploy

---

## 🎯 What This Project Demonstrates

This project showcases:

* API integration with Axios
* Asynchronous data handling
* Custom React hooks
* Component-driven architecture
* Dynamic routing
* State initialization patterns
* LocalStorage integration
* Pagination logic
* Error handling best practices
* Responsive UI with Tailwind
* Production-ready project structure

---

## 🧩 Challenges Solved

During development:

* Fixed `meta not defined` by properly destructuring hook return
* Fixed `Link is not defined` by importing from `react-router-dom`
* Avoided cascading renders by initializing state from localStorage properly
* Guarded against undefined API response properties

---

## 🚀 Future Improvements

* Dark mode toggle
* Infinite scroll instead of pagination
* User authentication
* Personalized news feed
* Backend integration
* Multi-language support
* Push notifications

---

## 👨‍💻 Author

**Alphakeem Adroit**
Full Stack Web Developer

---

## 📜 License

This project is open-source and available for learning and portfolio use.

---
