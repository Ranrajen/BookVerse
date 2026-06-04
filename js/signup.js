(function () {
  const form = document.querySelector('.signup-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').vlue;
    const city = document.getElementById('city').value;
    const terms = document.getElementById('terms').checked;

    if (fullname.length < 3)
      return alert('Full name must be at least 3 characters.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return alert('Invalid email address.');
    if (phone && !/^[0-9]{10}$/.test(phone))
      return alert('Phone must be 10 digits.');
    if (password.length < 8)
      return alert('Password must be at least 8 characters.');
    if (password !== confirmPassword) return alert("Passwords don't match.");
    if (!terms) return alert('Please accept the Terms and Conditions.');

    const newUser = {
      fullname,
      email,
      phone,
      city,
      signupDate: new Date().toISOString(),
    };
    localStorage.setItem('BookVerse-user', JSON.stringify(newUser));
    alert(`Welcome to BookVerse, ${fullname}!`);
    window.location.href = 'index.html';
  });
})();
