async function loadProject(){

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const resp = await fetch("projects.json");
const projects = await resp.json();

const project = projects.find(p => p.title === id);

document.getElementById("project-title").textContent = project.title;
document.getElementById("project-image").src = project.image;
document.getElementById("project-description").textContent = project.description;

document.getElementById("liveBtn").href = project.live;
document.getElementById("githubBtn").href = project.github;

const techContainer = document.getElementById("project-tech");

project.tech.forEach(t=>{
const span = document.createElement("span");
span.className="tech-badge";
span.textContent=t;
techContainer.appendChild(span);
});

}

loadProject();


  const darkToggle = document.getElementById("dark-toggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");

  function toggleDark() {

    document.body.classList.toggle("dark-mode");

    const icon = document.body.classList.contains("dark-mode")
      ? "/assets/light.svg"
      : "/assets/dark.svg";

    darkToggle.src = icon;
  }

  darkToggle?.addEventListener("click", toggleDark);