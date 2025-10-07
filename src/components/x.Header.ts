import { ComponentBase } from "../abstract/ComponentBase";

export class HeaderComponent extends ComponentBase {
  render(): void {
    // Clear previous content
    this.innerHTML = "";

    // Outer nav bar
    const nav = this.createElement("nav", "bg-primary-500 text-white shadow");

    // Constrained container (same as Wrapper)
    const container = this.createElement(
      "div",
      "md:max-w-[1140px] md:mx-auto sm:mx-[1rem] p-4 flex items-center justify-between flex-wrap",
    );

    // Logo/Brand
    const brand = this.createElement(
      "a",
      "font-bold text-2xl tracking-tight hover:text-primary-200 transition-colors text-secondary-100",
      { href: "/" },
    );
    brand.textContent = "Pet Adoption";

    // Navigation links
    const links = this.createElement("div", "flex gap-4");
    const pages = [
      { href: "/", label: "Home" },
      { href: "/dogs", label: "Dogs" },
    ];
    pages.forEach((page) => {
      const link = this.createElement(
        "a",
        "py-2 px-4 bg-secondary-500 hover:bg-secondary-700 hover:text-primary-200 transition-colors text-lg font-bold rounded-md text-primary-50",
        { href: page.href },
      );
      link.textContent = page.label;
      links.appendChild(link);
    });

    container.appendChild(brand);
    container.appendChild(links);
    nav.appendChild(container);
    this.appendChild(nav);
  }
}

customElements.define("app-header", HeaderComponent);
