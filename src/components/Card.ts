import { ComponentBase } from "../abstract/ComponentBase";

export interface CardProps {
  avatar?: string;
  title?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  description?: string;
}

export class CardComponent extends ComponentBase {
  static get observedAttributes(): string[] {
    return ['avatar', 'title', 'button-text', 'button-variant', 'description'];
  }

  constructor() {
    super();
  }

  private getButtonClasses(variant: string = 'primary'): string {

  }
}