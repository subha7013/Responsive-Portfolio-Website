const btn = document.getElementById("topBtn");
window.onscroll = () =>{
  btn.style.display = window.scrollY > 200 ? "block" : "none";
}
btn.onclick = () => scrollTo({top: 0,behavior: "smooth"});
// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
const mobileDarkToggle = document.getElementById('mobileDarkToggle');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const icon = isDark ? '/assets/light.svg' : '/assets/dark.svg';
  darkToggle.src = icon;
  mobileDarkToggle.src = icon;
}

darkToggle.addEventListener('click', toggleDarkMode);
mobileDarkToggle.addEventListener('click', toggleDarkMode);

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

async function loadProjectsAndInitSwiper() {
  try {
    const resp = await fetch('./projects.json', { cache: "no-store" });
    if (!resp.ok) throw new Error('Failed to load projects.json');
    console.log("Response status:", resp.status);
    console.log("Fetching from:", window.location.origin + "/projects.json");

    const projects = await resp.json();

    const wrapper = document.getElementById('projectsWrapper');
    wrapper.innerHTML = ''; // clear

    projects.forEach((p) => {
      const techHTML = (p.tech || []).map(t => `<span class="tech-badge">${t}</span>`).join('');
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="project-card">
          <img class="thumb" src="${p.image}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tech-list">${techHTML}</div>
          <div class="project-links">
            <a class="live" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>
            <a class="code" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      `;
      wrapper.appendChild(slide);
    });

    // Initialize Swiper (one card at a time, with arrows + pagination)
    const swiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      pagination: {
        el: '.projects-pagination',
        clickable: true,
      },
      breakpoints: {
        // a little larger screen - still one per view as you chose
        900: {
          slidesPerView: 1,
        }
      }
    });

  } catch (err) {
    console.error('Projects load/init error:', err);
  }
}

// wait for DOMContentLoaded and for Swiper script to exist
document.addEventListener('DOMContentLoaded', function () {
  // ensure Swiper is loaded
  if (typeof Swiper === 'undefined') {
    console.error('Swiper not found. Did you include the Swiper script?');
    return;
  }
  loadProjectsAndInitSwiper();
});



// contact
(function(){
  emailjs.init("3pApLSwcAD6Ba5Z_F"); // Your Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formStatus = document.getElementById("formStatus");

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_9dsieua";
  const templateID = "template_oxr2dvf";   
  const autoReplyTemplate = "template_31xex6k"; 

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.style.color = "green";
      document.getElementById("contactForm").reset();

      // ✅ Auto-reply to the user
      emailjs.send(serviceID, autoReplyTemplate, {
        user_name: params.from_name,
        user_email: params.from_email
      });
    })
    .catch((err) => {
      console.error(err);
      formStatus.textContent = "❌ Failed to send message. Please try again.";
      formStatus.style.color = "red";
    });
});





