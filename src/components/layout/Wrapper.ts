import { ComponentBase } from "../../abstract/ComponentBase";

export class WrapperComponent extends ComponentBase {
  static get observedAttributes(): string[] {
    return [];
  }

  render(): void {
    // Clear previous content
    const container = this.createElement(
      "div",
      "md:max-w-[1140px] md:mx-auto sm:mx-[1rem] p-4 bg-primary-300"
    );
    // Move all children into the container
    while (this.childNodes.length > 0) {
      container.appendChild(this.childNodes[0]);
    }
    this.appendChild(container);
  }
}

customElements.define("app-wrapper", WrapperComponent);
