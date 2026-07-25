const programs = [
  [
    "📚",
    "Education Support",
    "Learning spaces, supplies, and mentoring that help children stay curious and in school.",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "⚕️",
    "Healthcare Camps",
    "Free preventative care and referrals in communities where access is limited.",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "✦",
    "Women Empowerment",
    "Skills, savings circles, and leadership training designed by and for women.",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "🌱",
    "Environmental Protection",
    "Community-led planting, clean-up, and climate resilience projects.",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "🍲",
    "Food Distribution",
    "Nutritious meal kits and local food partnerships for families in transition.",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "🧡",
    "Disaster Relief",
    "Fast, dignified essentials and long-term recovery after emergencies.",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
  ],
];
const gallery = [
  programs[0][3],
  programs[1][3],
  programs[2][3],
  programs[3][3],
  programs[4][3],
  programs[5][3],
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
];
const stories = [
  ["Education", "The library that became a second home", programs[0][3]],
  [
    "Community",
    "How neighborhood kitchens nourish more than hunger",
    programs[4][3],
  ],
  ["Climate", "Planting shade for the next generation", programs[3][3]],
  ["Health", "What a mobile clinic can change in one day", programs[1][3]],
  ["Women", "The power of a shared savings circle", programs[2][3]],
  ["Relief", "Showing up after the storm", programs[5][3]],
];
const card = (item, story = false) =>
  `<article class="card"><img src="${item[story ? 2 : 3]}" alt="${item[1]}"><div><span class="eyebrow">${story ? item[0] : "Program"}</span><h3>${item[story ? 1 : 1]}</h3><p>${story ? "Small actions and strong local partnerships create lasting change." : item[2]}</p><a href="#contact">Learn more →</a></div></article>`;
document.querySelector("#program-cards").innerHTML = programs
  .map((x) => card(x))
  .join("");
const galleryGrid = document.querySelector("#gallery-grid");
galleryGrid.innerHTML = gallery
  .map((src, i) => `<img src="${src}" alt="HopeBridge gallery image ${i + 1}">`)
  .join("");
const storyGrid = document.querySelector("#story-cards");
const renderStories = (query) =>
  (storyGrid.innerHTML = stories
    .filter((s) => s.join(" ").toLowerCase().includes(query.toLowerCase()))
    .map((x) => card(x, true))
    .join(""));
renderStories("");
document
  .querySelector("#story-search")
  .addEventListener("input", (e) => renderStories(e.target.value));
document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".nav-links").classList.toggle("open"),
  );
document
  .querySelector(".theme-btn")
  .addEventListener("click", () => document.body.classList.toggle("dark"));
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector(".nav-links").classList.remove("open"),
    ),
  );
document.querySelectorAll(".amounts button").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".amounts button")
      .forEach((x) => x.classList.remove("selected"));
    button.classList.add("selected");
  }),
);
document.querySelectorAll("form").forEach((form) =>
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(form.dataset.message);
    form.reset();
  }),
);
const back = document.querySelector(".back-top");
addEventListener("scroll", () => back.classList.toggle("show", scrollY > 500));
back.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
const lightbox = document.querySelector(".lightbox");
document.querySelectorAll(".gallery img").forEach((img) =>
  img.addEventListener("click", () => {
    lightbox.querySelector("img").src = img.src;
    lightbox.classList.add("show");
  }),
);
lightbox.addEventListener("click", () => lightbox.classList.remove("show"));
