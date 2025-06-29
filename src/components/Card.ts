import { ComponentBase } from "../abstract/ComponentBase";

export interface CardProps {
  avatar?: string;
  title?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "outline";
  description?: string;
}

export class CardComponent extends ComponentBase {
  static get observedAttributes(): string[] {
    return ["avatar", "title", "button-text", "button-variant", "description"];
  }

  constructor() {
    super();
  }

  private getButtonClasses(variant: string = "primary"): string {
    const baseClasses =
      "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    switch (variant) {
      case "secondary":
        return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500`;
      case "outline":
        return `${baseClasses} border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500`;
      default:
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
    }
  }

  private handleButtonClick = (): void => {
    this.emit("card-button-click", {
      title: this.props.title,
      buttonText: this.props.buttonText || this.props["button-text"],
    });
  };

  render(): void {
    // Clear previous content
    const existingContent = this.querySelector(".card-container");
    if (existingContent) {
      existingContent.remove();
    }

    // Create card container
    const cardContainer = this.createElement(
      "div",
      "card-container bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300",
    );

    // Create card header with avatar and title
    const header = this.createElement(
      "div",
      "flex items-center space-x-4 mb-4",
    );

    // Avatar
    if (this.props.avatar) {
      const avatarContainer = this.createElement("div", "flex-shrink-0");
      const avatar = this.createImage(
        this.props.avatar,
        "Avatar",
        "w-12 h-12 rounded-full object-cover border-2 border-gray-200",
      );
      avatarContainer.appendChild(avatar);
      header.appendChild(avatarContainer);
    }

    // Title and description container
    const textContainer = this.createElement("div", "flex-1 min-w-0");

    if (this.props.title) {
      const title = this.createElement(
        "h3",
        "text-lg font-semibold text-gray-900 truncate",
      );
      title.textContent = this.props.title;
      textContainer.appendChild(title);
    }

    if (this.props.description) {
      const description = this.createElement("p", "text-sm text-gray-600 mt-1");
      description.textContent = this.props.description;
      textContainer.appendChild(description);
    }

    header.appendChild(textContainer);
    cardContainer.appendChild(header);

    // Button
    const buttonText =
      this.props.buttonText || this.props["button-text"] || "Action";
    const buttonVariant =
      this.props.buttonVariant || this.props["button-variant"] || "primary";

    const buttonClasses = this.getButtonClasses(buttonVariant);
    const button = this.createButton(
      buttonText,
      buttonClasses,
      this.handleButtonClick,
    );

    const buttonContainer = this.createElement("div", "flex justify-end");
    buttonContainer.appendChild(button);
    cardContainer.appendChild(buttonContainer);

    // Append to root
    this.appendChild(cardContainer);
  }
}

// Register the custom element
customElements.define("custom-card", CardComponent);
