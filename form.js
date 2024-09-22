// sign in page

const accounts = [
    { email: 'user1@example.com', password: '1111' },
    { email: 'user2@example.com', password: '2222' },
    { email: 'user3@example.com', password: '3333' },
    { email: 'user4@example.com', password: '4444' },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {

    const btnSign = document.getElementById('signInBtn');
    const inputLoginEmail = document.getElementById('loginEmail');
    const inputLoginPassword = document.getElementById('loginPassword');
    const message = document.querySelector('.message-content')
  
    btnSign.addEventListener('click', function (e) {
      e.preventDefault();
      const email = inputLoginEmail.value;
      const password = inputLoginPassword.value;

      const currentAccount = accounts.find(acc => acc.email === email);

      if (currentAccount && currentAccount.password === password) {
        message.textContent = "Login Successful."
        setTimeout(() => {
          window.location.href = './watchlist.html'; 
        }, 2000);
      } else {
        message.textContent = "Incorrect email or password , please try again."
      }
    });
  });



// scroll reveal

  ScrollReveal({
    reset: true ,
    distance:"80px" ,
    duration:2000,
    delay:100
   });
 
   ScrollReveal().reveal('.img-fluid', { origin: 'left' });
   ScrollReveal().reveal('.offset-xl-1', { origin: 'right' });