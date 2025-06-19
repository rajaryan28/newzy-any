# 📰 NEWZY

**NEWZY** is a sleek and modern news web application built using **React**. It fetches and displays daily news articles categorized under various sections like **Home**, **Sports**, **Business**, **Health**, **Entertainment**, **Science**, and **Technology**. The goal is to provide a clean, responsive, and user-friendly experience while exploring current headlines.

---

## 🌟 Features

- 🔍 **Category-based News Sections** (via Navbar)
- 📈 **Top Loading Bar** inspired by YouTube for seamless navigation feedback
- 🔄 **Infinite Scroll** with finite API data fetching
- 🌙 **Dark Mode Toggle** for an aesthetic switch between light & dark themes
- 📰 **Detailed News Cards** with:
  - Image
  - Title
  - Description
  - Author & Source
  - Publication Date & Time
  - **Read More** button to view full article

---

## 🛠️ Tech Stack

- **React.js** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **CSS** for custom styling
- **News API** for real-time article fetching

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rajaryan28e/newzy-any.git
cd newzy
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Get News API Key

- Go to https://newsapi.org
- Sign up and generate a free API key

### 4. Configure .env
Create a .env file in the root and add:

```env

REACT_APP_NEWS_API_KEY=your_api_key_here
```
### 5. Run the App
```bash
npm start
```
## 🧪 Preview
<img width="700" alt="image" src="https://github.com/user-attachments/assets/2c0f3eba-629b-4e41-9030-d75af07c6d8d" />
<br>
<br>
<img width="700" alt="image" src="https://github.com/user-attachments/assets/b6cb67e7-ca5d-4654-9261-77c0ad0b7126" />





## 📂 Project Structure
```bash
/newzy
│
├── /public
├── /src
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── NewsItem.jsx
│   │   ├── NewsList.jsx
│   │   └── Spinner.jsx
│   ├── App.js
│   └── index.js
├── .env
└── package.json
```
## ✍️ About the Project
This is my second **React-based frontend project**, where I challenged myself to:

- ✅ Implement an infinite scrolling mechanism  
- ✅ Use a loading spinner for the first time  
- ✅ Create a responsive top-loading bar  
- ✅ Design a dark/light theme switcher  
- ✅ Practice API integration and dynamic data handling  

The project is named **NEWZY**, complete with a custom logo designed by me.  
It shows fresh news every day and is kept **simple yet feature-rich**.

## 📌 Future Improvements

- 🔍 Add search functionality  
- ⭐ Enable user preferences & bookmarking  
- 📱 Improve responsiveness on smaller screens  
- 📄 Add pagination fallback in case infinite scroll fails  

## 📝 License
This project is open-source and free to use under the MIT License.


## 📬 Contact

If you'd like to connect or give feedback:

- 📧 Email: [rajaryan2816@gmail.com](mailto:rajaryan2816@gmail.com)  
- 💼 LinkedIn: [Raj Aryan](https://www.linkedin.com/in/rajaryan2816)  


---
## Built with ❤️ by Raj Aryan
Let me know if you want me to include deployment instructions (e.g., for **Netlify** or **Vercel**) or auto-generate badges (e.g., for build status, license, etc.) — happy to help!
