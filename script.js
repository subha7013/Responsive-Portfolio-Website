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
