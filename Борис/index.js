    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    function subscribe() {
      const emailField = document.getElementById("userInput");
      const email = emailField.value.trim();

      if (!email) {
        alert("Please enter an email first.");
        return;
      }

      if (!isValidEmail(email)) {
        alert("This doesn't look like a valid email.");
        return;
      }

      alert("Your email has been saved!");
      emailField.value = ""; 
    }
    
document.querySelectorAll('.toggle-btn').forEach(button => {
button.addEventListener('click', () => {
const content = button.nextElementSibling; 
const arrow = button.querySelector('.arrow'); 
const isOpen = content.style.display === 'block'; 

if (isOpen) {
  content.style.display = 'none'; 
  arrow.textContent = '▲';  
  } 
else {
  content.style.display = 'block'; 
  arrow.textContent = '▼';  
    }
  });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.parentElement;
    section.classList.toggle('expanded');
  });
});

let selectedRating = 0;

      function createStars() {
      const starsContainer = document.getElementById('stars');
      for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.className = 'star';
          star.innerHTML = '☆';
          star.dataset.value = i;
          star.onclick = () => setRating(i);
          starsContainer.appendChild(star);
      }
      }

      function setRating(value) {
      selectedRating = value;
      const stars = document.querySelectorAll('.star');
      stars.forEach((star, index) => {
          star.innerHTML = index < value ? '★' : '☆';
      });
      }

      function submitReview() {
      const name = document.getElementById('name').value.trim();
      const comment = document.getElementById('comment').value.trim();

      if (!name || !comment || selectedRating === 0) {
          alert("Моля, попълнете всички полета и изберете звезди.");
          return;
      }

      const review = {
          name,
          stars: selectedRating,
          comment
      };

      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.push(review);
      localStorage.setItem('reviews', JSON.stringify(reviews));

      addReviewToDOM(review);

      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
      setRating(0);
      }

      function addReviewToDOM({ name, stars, comment }) {
      const box = document.createElement('div');
      box.className = 'review-box';
      box.innerHTML = `
          <strong>${name}</strong>
          <div class="star-display">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
          <p>${comment}</p>
      `;
      document.getElementById('reviewsGrid').appendChild(box);
}

  function loadReviews() {
  const saved = localStorage.getItem('reviews');
  let reviews = saved ? JSON.parse(saved) : [];

  
  if (!saved) {
      reviews = [
      { name: "Иван", stars: 5, comment: "Страхотен сайт!" },
      { name: "Мария", stars: 4, comment: "Много ми хареса!" },
      { name: "Георги", stars: 3, comment: "Има какво да се подобри." }
      ];
      localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  reviews.forEach(addReviewToDOM);
  }

  createStars();
  loadReviews();
