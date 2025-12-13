const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Gallery Loader
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        // Use galleryData from gallery_data.js (avoids CORS issues locally)
        if (typeof galleryData !== 'undefined') {
            galleryData.forEach(image => {
                const item = document.createElement('div');
                item.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                img.loading = 'lazy';

                item.appendChild(img);
                galleryGrid.appendChild(item);
            });
        }
    }

    // News Loader
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        // Use newsData from news_data.js
        if (typeof newsData !== 'undefined') {
            newsData.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <div class="news-date">${item.date}</div>
                    <div class="news-content">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                `;
                newsContainer.appendChild(newsItem);
            });
        }
    }

    // Selfie Upload Preview (Simple filename update)
    const selfieInput = document.getElementById('selfie-upload');
    const fileLabel = document.querySelector('.file-input-label');
    if (selfieInput && fileLabel) {
        selfieInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                fileLabel.innerHTML = `<i class="fas fa-check"></i> ${e.target.files[0].name}`;
                fileLabel.classList.add('file-selected');
            }
        });
    }
}

const app = () => {
    navSlide();
}

app();

