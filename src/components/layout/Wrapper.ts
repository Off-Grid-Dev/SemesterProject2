import { ComponentBase } from "../../abstract/ComponentBase";

export class WrapperComponent extends ComponentBase {
  static get observedAttributes(): string[] {
    return [];
  }

  render(): void {
    // Clear previous content
    this.innerHTML = "";
    const container = this.createElement(
      "div",
      "md:max-w-[1140px] mx-auto p-4"
    );
    // Move all children into the container
    while (this.childNodes.length > 0) {
      container.appendChild(this.childNodes[0]);
    }
    this.appendChild(container);
  }
}

customElements.define("app-wrapper", WrapperComponent);
