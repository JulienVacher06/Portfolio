// Animation du titre de l'onglet
const titletext = "Portfolio.VACHER.Julien";
document.title = titletext[0];
let i = 1;

const interval = setInterval(() => {
  document.title += titletext[i];
  i++;
  if (i >= titletext.length) { 
    clearInterval(interval); 
  }
}, 100);

const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.classList.add("intro-title");
body.appendChild(h1);

// Animation d'arrivée
const text = "Welcome to Julien VACHER's Portfolio!";
h1.textContent = "";
let y = 0;
const interval2 = setInterval(() => {
  h1.textContent += text[y];
  y++;
  if (y >= text.length) { 
    clearInterval(interval2);
    setTimeout(() => {
        h1.classList.add("move-up");
        showSite(); 
    }, 600);
  }
}, 65);

// Les filtres des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter').toLowerCase();
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                return; 
            }
            const tags = card.querySelectorAll('.tag');
            let hasTag = false;
            tags.forEach(tag => {
                const tagText = tag.textContent.toLowerCase();
                if (filterValue === 'web') {
                    if (tagText.includes('html') || 
                        tagText.includes('css') || 
                        tagText.includes('js') || 
                        tagText.includes('laravel') || 
                        tagText.includes('php') ||
                        tagText.includes('web')) {
                        hasTag = true;
                    }
                }
                else if (tagText.includes(filterValue)) {
                    hasTag = true;
                }
            });
            if (hasTag) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Afficher le contenu du site
function showSite(){
  const mainContent = document.getElementById("main-content");
  const navbar = document.getElementById("navbar");
  
  navbar.style.display = "block";

  setTimeout(() => {
    mainContent.style.opacity = "1";
  }, 500);
}

