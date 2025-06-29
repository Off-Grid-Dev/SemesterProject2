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
  app.appendChild(card);
};
