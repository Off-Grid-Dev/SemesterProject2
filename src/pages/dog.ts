import { fetchDogById } from "../api/fetch";

export const render = async (app: HTMLElement, id: string) => {
  app.innerHTML = "";
  const dog = await fetchDogById(id);
  if (!dog) {
    app.innerHTML = "<p>Dog not found!</p>";
    return;
  }
  const card = document.createElement("custom-card");
  card.setAttribute("id", dog.id);
  card.setAttribute("avatar", dog.image.url);
  card.setAttribute("title", dog.name);
  card.setAttribute("description", dog.description);
  card.setAttribute("button-text", "Back");
  card.setAttribute("button-variant", "secondary");
  card.addEventListener("card-button-click", () => {
    window.history.back();
    setTimeout(() => {
      window.location.reload();
    }, 400);
  });

  // Details section
  const details = document.createElement("div");
  details.className =
    "mt-6 bg-primary-50 rounded-lg p-6 shadow text-primary-900 border border-primary-200";
  details.innerHTML = `
    <h2 class="text-xl font-bold mb-2 text-primary-700">Details</h2>
    <ul class="mb-4">
      <li><strong>Species:</strong> <span class='text-secondary-700'>${
        dog.species
      }</span></li>
      <li><strong>Breed:</strong> <span class='text-secondary-700'>${
        dog.breed
      }</span></li>
      <li><strong>Age:</strong> <span class='text-secondary-700'>${
        dog.age
      }</span></li>
      <li><strong>Gender:</strong> <span class='text-secondary-700'>${
        dog.gender
      }</span></li>
      <li><strong>Size:</strong> <span class='text-secondary-700'>${
        dog.size
      }</span></li>
      <li><strong>Color:</strong> <span class='text-secondary-700'>${
        dog.color
      }</span></li>
      <li><strong>Status:</strong> <span class='text-secondary-700'>${
        dog.adoptionStatus
      }</span></li>
      <li><strong>Location:</strong> <span class='text-secondary-700'>${
        dog.location
      }</span></li>
      <li><strong>Created:</strong> <span class='text-secondary-700'>${new Date(
        dog.created,
      ).toLocaleString()}</span></li>
      <li><strong>Updated:</strong> <span class='text-secondary-700'>${new Date(
        dog.updated,
      ).toLocaleString()}</span></li>
    </ul>
    <h2 class="text-xl font-bold mb-2 text-primary-700">Owner</h2>
    <ul>
      <li><strong>Name:</strong> <span class='text-secondary-700'>${
        dog.owner.name
      }</span></li>
      <li><strong>Email:</strong> <span class='text-secondary-700'>${
        dog.owner.email
      }</span></li>
      <li><strong>Bio:</strong> <span class='text-secondary-700'>${
        dog.owner.bio ?? "N/A"
      }</span></li>
      <li><strong>Avatar:</strong> <img src="${dog.owner.avatar.url}" alt="${
        dog.owner.avatar.alt
      }" class="inline-block w-12 h-12 rounded-full border ml-2 align-middle border-secondary-300" /></li>
      <li><strong>Banner:</strong> <img src="${dog.owner.banner.url}" alt="${
        dog.owner.banner.alt
      }" class="inline-block w-32 h-12 rounded border ml-2 align-middle object-cover border-secondary-300" /></li>
    </ul>
  `;

  app.appendChild(card);
  app.appendChild(details);
};
