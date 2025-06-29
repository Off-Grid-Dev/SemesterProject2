import "./components/Card";
import "./components/layout/Wrapper";

export const route = () => {
  const app: HTMLElement | null = document.getElementById("app");
  const href = window.location.pathname;

  if (!app) {
    return;
  }

  if (href === "/") {
    import("./pages/home").then((module) => module.render(app));
  } else if (href === "/dogs") {
    import("./pages/dogs").then((module) => module.render(app));
  } else if (href.startsWith("/dog/")) {
    const id = href.split("/dog/")[1];
    import("./pages/dog").then((module) => module.render(app, id));
  }
};

route();
// Make route globally accessible for navigation from other modules
(window as any).route = route;
