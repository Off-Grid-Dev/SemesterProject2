export const render = (app: HTMLElement) => {
  app.innerHTML = `
    <h1>DOGS!</h1>
    <custom-card
      avatar="https://example.com/avatar.jpg"
      title="Mr. Pickles"
      description="Mr. Pickles likes to eat shoes"
      button-text="See more"
      button-variant="outline"
    >
    </custom-card>
    `
}