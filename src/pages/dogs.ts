export const render = (grid: HTMLElement) => {
  grid.innerHTML = `
    <custom-card
      avatar="https://example.com/avatar.jpg"
      title="Mr. Pickles"
      description="Mr. Pickles likes to eat shoes"
      button-text="See more"
      button-variant="outline"
    >
    </custom-card>
    `;
};
