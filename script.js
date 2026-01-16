  const words = ["Subhasish", "Developer", "Engineer"];
  let index = 0;
  const textElement = document.querySelector(".changing-text");

  function changeText() {
    textElement.style.opacity = 0;
    textElement.style.transform = "translateY(-5px)";

    setTimeout(() => {
      textElement.textContent = words[index];
      textElement.style.opacity = 1;
      textElement.style.transform = "translateY(0)";
      index = (index + 1) % words.length;
    }, 500);
  }

  changeText();               // initial call
  setInterval(changeText, 2000);
// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll to Top Button
const btn = document.getElementById("topBtn");
window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
}
btn.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

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

// Load Projects (Swiper)
async function loadProjectsAndInitSwiper() {
  try {
    const resp = await fetch('projects.json', { cache: "no-store" });
    if (!resp.ok) throw new Error('Failed to load projects.json');
    
    const projects = await resp.json();
    const wrapper = document.getElementById('projectsWrapper');
    wrapper.innerHTML = '';

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

    new Swiper('.projects-swiper', {
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
      }
    });

  } catch (err) {
    console.error('Projects load/init error:', err);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper not found. Did you include the Swiper script?');
    return;
  }
  loadProjectsAndInitSwiper();
});

// ✅ EMAILJS ONLY (No MongoDB)
(function() {
  emailjs.init("3pApLSwcAD6Ba5Z_F"); // ✅ Your Public Key
})();

document.getElementById("contactForm").addEventListener("submit", async function (e) {
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

  try {
    // ✅ 1. Send message to YOU
    await emailjs.send(serviceID, templateID, params);

    // ✅ 2. Auto-reply to USER
    await emailjs.send(serviceID, autoReplyTemplate, {
      user_email: params.from_email,
      user_name: params.from_name,
    });

    formStatus.textContent = "✅ Message Sent!";
    formStatus.style.color = "green";
    document.getElementById("contactForm").reset();
  } catch (err) {
    console.error(err);
    formStatus.textContent = "❌ Failed to send message. Please try again.";
    formStatus.style.color = "red";
  }
});


