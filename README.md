# 🛡️ Simple User Authentication App

A basic **user registration, login, and profile** system built with plain **HTML, CSS, and JavaScript**.
It stores user data in the browser's **localStorage** for demonstration and learning purposes — no backend or database needed.

---

## 📋 Features

* User Registration with unique email check
* User Login with email and password validation
* User Profile page displaying logged-in user info
* Logout functionality
* Responsive, clean, and simple UI styling

---

## 🛠️ How It Works

* **Registration:** Users register by entering name, email, and password. The info is saved to `localStorage` as an array of users.
* **Login:** Users enter email and password to log in. If valid, user info is saved as `loggedInUser` in `localStorage`.
* **Profile:** Displays the logged-in user's name and email. Redirects to login if no user is logged in.
* **Logout:** Clears the logged-in user info and redirects to the login page.

---

## 📁 Project Structure

```
/project-folder
│
├── index.html (or login.html)
├── register.html
├── profile.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

---

## 🚀 How to Use

1. Open **register.html** in your browser.
2. Fill the registration form and submit.
3. After successful registration, you are redirected to **login.html**.
4. Log in with your credentials.
5. Upon successful login, you’ll be redirected to **profile.html** showing your info.
6. Click **Logout** to end the session and return to login page.

---

## ⚠️ Notes

* This project is for learning/demo only.
* Data is stored locally on your browser using `localStorage`, so clearing browser data will erase users.
* No backend or security measures are implemented; do NOT use for real-world sensitive data.

---

## 🎨 Styling

* Clean and minimal styling using CSS Flexbox for centering.
* Forms and buttons styled for usability and aesthetic.
* Responsive font sizes and spacing for readability.

---

Would you like me to generate a Markdown (`README.md`) file with this content for you?
