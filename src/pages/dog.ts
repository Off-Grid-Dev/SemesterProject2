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
  details.className = "mt-6 bg-white/80 rounded-lg p-6 shadow text-gray-800";
  details.innerHTML = `
    <h2 class="text-xl font-bold mb-2">Details</h2>
    <ul class="mb-4">
      <li><strong>Species:</strong> ${dog.species}</li>
      <li><strong>Breed:</strong> ${dog.breed}</li>
      <li><strong>Age:</strong> ${dog.age}</li>
      <li><strong>Gender:</strong> ${dog.gender}</li>
      <li><strong>Size:</strong> ${dog.size}</li>
      <li><strong>Color:</strong> ${dog.color}</li>
      <li><strong>Status:</strong> ${dog.adoptionStatus}</li>
      <li><strong>Location:</strong> ${dog.location}</li>
      <li><strong>Created:</strong> ${new Date(
        dog.created
      ).toLocaleString()}</li>
      <li><strong>Updated:</strong> ${new Date(
        dog.updated
      ).toLocaleString()}</li>
    </ul>
    <h2 class="text-xl font-bold mb-2">Owner</h2>
    <ul>
      <li><strong>Name:</strong> ${dog.owner.name}</li>
      <li><strong>Email:</strong> ${dog.owner.email}</li>
      <li><strong>Bio:</strong> ${dog.owner.bio ?? "N/A"}</li>
      <li><strong>Avatar:</strong> <img src="${dog.owner.avatar.url}" alt="${
    dog.owner.avatar.alt
  }" class="inline-block w-12 h-12 rounded-full border ml-2 align-middle" /></li>
      <li><strong>Banner:</strong> <img src="${dog.owner.banner.url}" alt="${
    dog.owner.banner.alt
  }" class="inline-block w-32 h-12 rounded border ml-2 align-middle object-cover" /></li>
    </ul>
  `;

  app.appendChild(card);
  app.appendChild(details);
};
