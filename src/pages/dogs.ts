import { fetchDogs } from "../api/fetch";
import type { Dog } from "../api/fetch";

export const render = async (app: HTMLElement) => {
  app.innerHTML = "";

  const dogs = await fetchDogs();
  console.log(dogs);
  if (!dogs) {
    app.innerHTML = "<p>OH NO! NO DOGS HERE!</p>";
    return;
  }

  dogs.forEach((dog: Dog) => {
    const card = document.createElement("custom-card");
    card.setAttribute("id", dog.id);
    card.setAttribute("avatar", dog.image.url);
    card.setAttribute("title", dog.name);
    card.setAttribute("description", dog.description);
    card.setAttribute("button-text", "See more");
    card.setAttribute("button-variant", "outline");

    card.addEventListener("card-button-click", (e: Event) => {
      window.history.pushState({}, "", `/dog/${dog.id}`);
      // @ts-ignore
      if (typeof window.route === "function") window.route();
    });

    app.appendChild(card);
  });
};
