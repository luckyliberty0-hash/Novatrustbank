// Simple frontend-only banking simulation (no real money, just dummy values)

// Load account balance from local storage or set default
let balance = parseFloat(localStorage.getItem("balance")) || 5200.75;

// Update balance display if element exists
function updateBalance() {
  const balanceElement = document.getElementById("balance");
  if (balanceElement) {
    balanceElement.innerText = "$" + balance.toLocaleString();
  }
}

// Add a new transaction to local storage
function addTransaction(type, amount) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  const newTransaction = {
    type: type,
    amount: amount,
    date: new Date().toLocaleString()
  };
  transactions.unshift(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Handle transfer form
// === SIGNUP ACCOUNT CREATION ===
const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Save user data (fake account)
        localStorage.setItem("nt_user", JSON.stringify({
            name: name,
            email: email
        }));

        // Demo balance
        localStorage.setItem("nt_balance", "1250.75");

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    });
}
