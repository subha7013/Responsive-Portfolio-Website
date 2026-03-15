document.addEventListener("DOMContentLoaded", () => {

  /* =========================
  LOADER
  ========================= */

  const loader = document.getElementById("global-loader");

  window.showLoader = () => loader?.classList.remove("hidden");
  window.hideLoader = () => loader?.classList.add("hidden");

  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hidden"), 300);
  });

  /* =========================
  TIMELINE SWITCH
  ========================= */

  window.showTimeline = function (tab, index) {

    const timelines = document.querySelectorAll(".timeline");
    const buttons = document.querySelectorAll(".tab-btn");
    const underline = document.querySelector(".tab-underline");

    timelines.forEach(t => t.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(tab).style.display = "block";
    buttons[index].classList.add("active");

    underline.style.transform = `translateX(${index * 150}px)`;
  };

  /* =========================
  TYPEWRITER TEXT
  ========================= */

  const words = ["Subhasish", "Developer", "Engineer"];
  let index = 0;
  const text = document.querySelector(".changing-text");

  function changeText() {

    if (!text) return;

    text.style.opacity = 0;

    setTimeout(() => {

      text.textContent = words[index];
      text.style.opacity = 1;

      index = (index + 1) % words.length;

    }, 400);

  }

  changeText();
  setInterval(changeText, 2000);

  /* =========================
  SCROLL REVEAL
  ========================= */

  const reveals = document.querySelectorAll(".reveal");

  function reveal() {

    const windowHeight = window.innerHeight;

    reveals.forEach(el => {

      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - 120) {

        el.classList.add("show");

      }

    });

  }

  window.addEventListener("scroll", reveal);
  reveal();

  /* =========================
  SCROLL TO TOP
  ========================= */

  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 200 ? "block" : "none";

  });

  topBtn.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

  /* =========================
  DARK MODE
  ========================= */

  const darkToggle = document.getElementById("dark-toggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");

  function toggleDark() {

    document.body.classList.toggle("dark-mode");

    const icon = document.body.classList.contains("dark-mode")
      ? "/assets/light.svg"
      : "/assets/dark.svg";

    darkToggle.src = icon;
    mobileDarkToggle.src = icon;

  }

  darkToggle?.addEventListener("click", toggleDark);
  mobileDarkToggle?.addEventListener("click", toggleDark);

  /* =========================
  MOBILE MENU
  ========================= */

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.onclick = () => mobileMenu.classList.add("active");
  closeMenu.onclick = () => mobileMenu.classList.remove("active");

  /* =========================
  LOAD PROJECTS
  ========================= */

  async function loadProjects() {

    try {

      const resp = await fetch("projects.json");
      const projects = await resp.json();

      const wrapper = document.getElementById("projectsWrapper");

      if (!wrapper) return;

      wrapper.innerHTML = "";

      projects.forEach(p => {

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `

<div class="project-image">

  <img src="${p.image}" alt="${p.title}">

  <div class="project-overlay">
    <h3 class="project-title">${p.title}</h3>
    <a class="view-project"
       href="project.html?id=${encodeURIComponent(p.title)}">
       View Project
    </a>
  </div>

</div>

`;

        wrapper.appendChild(card);

      });

    }

    catch (err) {

      console.error("Project load error:", err);

    }

  }

  loadProjects();


  /* =========================
  EMAILJS CONTACT
  ========================= */

  // ✅ EMAILJS ONLY (No MongoDB)
  (function () {
    emailjs.init("3pApLSwcAD6Ba5Z_F"); // ✅ Your Public Key
  })();

  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formStatus = document.getElementById("formStatus");
    const submitBtn = this.querySelector("button[type='submit']");

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_9dsieua";
    const templateID = "template_oxr2dvf";
    const autoReplyTemplate = "template_31xex6k";

    // ✅ SHOW LOADER IMMEDIATELY
    showLoader("Sending message...");
    submitBtn.disabled = true;

    try {
      // 1️⃣ Send message to YOU
      await emailjs.send(serviceID, templateID, params);

      // 2️⃣ Auto-reply to USER
      await emailjs.send(serviceID, autoReplyTemplate, {
        user_email: params.from_email,
        user_name: params.from_name,
      });

      formStatus.textContent = "✅ Message Sent!";
      formStatus.style.color = "green";
      this.reset();

    } catch (err) {
      console.error(err);
      formStatus.textContent = "❌ Failed to send message. Please try again.";
      formStatus.style.color = "red";

    } finally {
      // ✅ HIDE LOADER ONLY AFTER RESULT IS SHOWN
      setTimeout(() => {
        hideLoader();
        submitBtn.disabled = false;
      }, 300);
    }
  });

});





