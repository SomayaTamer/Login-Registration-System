document.addEventListener('DOMContentLoaded', () => {
  // Registration form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.find(user => user.email === email)) {
        alert('Email is already registered!');
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration successful! You can now login.');
      window.location.href = 'login.html';
    });
  }

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert(`Welcome, ${user.name}!`);
        window.location.href = 'profile.html';
      } else {
        alert('Invalid email or password!');
      }
    });
  }

  // Profile page
  const profileDiv = document.getElementById('profileInfo');
  if (profileDiv) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
      alert('You are not logged in!');
      window.location.href = 'login.html';
    } else {
      profileDiv.innerHTML = `
        <p><strong>Name:</strong> ${loggedInUser.name}</p>
        <p><strong>Email:</strong> ${loggedInUser.email}</p>
      `;
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('You have logged out.');
        window.location.href = 'login.html';
      });
    }
  }
});
