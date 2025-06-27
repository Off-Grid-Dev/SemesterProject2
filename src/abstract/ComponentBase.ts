export interface ComponentProps {
  [key: string]: any;
}

export abstract class ComponentBase extends HTMLElement {
  protected props: ComponentProps = {};
  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.extractProps();
    this.render();
  }

  static get observedAttributes(): string[] {
    return [];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.extractProps();
      this.render();
      console.log("attribute changed: ", name);
    }
  }

  protected extractProps(): void {
    // extract attributes as props
    const attributes = this.getAttributeNames();
    attributes.forEach(attr => {
      let value: any = this.getAttribute(attr);

      // Try to parse JSON for complex props
      if (value && (value.startsWith('{') || value.startsWith('['))) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Keep as string if not valid JSON        
        }
      }

      // Convert string booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;

      this.props[attr] = value
    })
  }

  protected createElement(tag: string, classes: string = '', attributes: Record<string, string> = {}): HTMLElement {
    const element = document.createElement(tag);
    if (classes) {
      element.className = classes;
    }

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    return element;
  }

  protected createButton(text: string, classes: string = '', onClick?: () => void): HTMLButtonElement {
    const button = this.createElement('button', classes) as HTMLButtonElement;
    button.textContent = text;
    button.type = 'button';

    if (onClick) {
      button.addEventListener('click', onClick);
    }

    return button;
  }

  protected createImage(src: string, alt: string = '', classes: string = ''): HTMLImageElement {
    const img = this.createElement('img', classes, { src, alt }) as HTMLImageElement;
    return img;
  }

  protected emit(eventName: string, detail?: any): void {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  // Abstract method that must be implemented by child classes
  abstract render(): void;

  // Utility method to safely set innerHTML
  protected setInnerHTML(element: HTMLElement, html: string): void {
    element.innerHTML = html;
  }

  // Utility method to append multiple children
  protected appendChildren(parent: HTMLElement, children: HTMLElement[]): void {
    children.forEach(child => parent.appendChild(child));
  }
}