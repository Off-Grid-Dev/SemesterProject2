export const render = (app: HTMLElement) => {
  app.innerHTML = `
  <div class="bg-amber-100 p-8 grid gap-3">
    <h1 class="text-center">HOME</h1>
    <div>
      <button class="py-2 px-4 rounded-md cursor-pointer bg-green-200 hover:bg-green-400 capitalize transition-colors duration-300">log in</button>
      <button class="py-2 px-4 rounded-md cursor-pointer bg-green-200 hover:bg-green-400 capitalize transition-colors duration-300">register</button>
    </div>
  </div>
  `
}