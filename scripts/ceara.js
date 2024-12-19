const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

const ratingForm = document.querySelector('form[action="review.html"]');
const ratingStars = document.querySelectorAll('input[name="rating"]');
const ratingDisplay = document.getElementById('rating-display');

function handleRatingClick(event) {
    const ratingValue = event.target.value;
    localStorage.setItem('rating', ratingValue);
    ratingDisplay.textContent = `You rated: ${ratingValue} stars`;
}

ratingStars.forEach(star => {
    star.addEventListener('change', handleRatingClick);
});

const savedRating = localStorage.getItem('rating');
if (savedRating) {
    ratingDisplay.textContent = `You previously rated: ${savedRating} stars`;
    ratingStars.forEach(star => {
        if (star.value === savedRating) {
            star.checked = true;
        }
    });
}

ratingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.getElementById('review').value;
    const userName = document.getElementById('username').value;
    const selectedFeatures = [];
    document.querySelectorAll('input[name="features"]:checked').forEach(checkbox => {
        selectedFeatures.push(checkbox.value);
    });

    const reviewData = {
        rating: localStorage.getItem('rating'),
        dateOfVisit: document.getElementById('install-date').value,
        features: selectedFeatures,
        reviewText: reviewText,
        userName: userName || 'Anonymous'
    };

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert(`Thank you for your review, ${reviewData.userName}! Your rating of ${reviewData.rating} stars has been recorded.`);
    ratingForm.reset();
});

const reviewList = document.getElementById('review-list');
const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

function displayReviews() {
    if (reviews.length === 0) {
        reviewList.innerHTML = '<p>No reviews yet.</p>';
    } else {
        reviewList.innerHTML = reviews.map(review => `
            <div class="review">
                <h3>${review.userName}</h3>
                <p>Rating: ${review.rating} stars</p>
                <p>Visited on: ${review.dateOfVisit}</p>
                <p><strong>Liked Features:</strong> ${review.features.join(', ') || 'None'}</p>
                <p><strong>Review:</strong> ${review.reviewText || 'No review text provided.'}</p>
            </div>
        `).join('');
    }
}

displayReviews();

const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}

toggleThemeButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});

const players = [
    { name: 'Richard', position: 'Goleiro', image: 'images/01-richard.png' },
    { name: 'David Ricardo', position: 'Zagueiro', image: 'images/02-david-ricardo.png' },
    { name: 'Luiz Otávio', position: 'Zagueiro', image: 'images/03-luiz-otavio.png' },
    { name: 'Matheus Bahia', position: 'Lateral', image: 'images/04-matheus-bahia.png' },
    { name: 'Rafael Ramos', position: 'Lateral', image: 'images/05-rafael-ramos.png' },
    { name: 'Lourenço', position: 'Meia', image: 'images/06-lourenco.png' },
    { name: 'Richardson', position: 'Meia', image: 'images/07-richardson.png' },
    { name: 'Lucas Mugni', position: 'Meia', image: 'images/08-mugni.png' },
    { name: 'Erick Pulga', position: 'Atacante', image: 'images/09-erick-pulga.png' },
    { name: 'Aylon', position: 'Atacante', image: 'images/10-aylon.png' },
    { name: 'Saulo Mineiro', position: 'Atacante', image: 'images/11-saulo-mineiro.png' },
    { name: 'Léo Condé', position: 'Técnico', image: 'images/leo-conde.jpg' },
];

function loadPlayers() {
    const playersContainer = document.querySelector('.jogadores');
    playersContainer.innerHTML = players.map(player => `
        <div class="player">
            <img src="${player.image}" alt="${player.name}" width="350px" height="450px">
            <p>${player.name} - ${player.position}</p>
        </div>
    `).join('');
}

loadPlayers();
