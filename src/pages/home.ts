export const render = (app: HTMLElement) => {
  app.innerHTML = `
  <div class='grid gap-8 p-6 rounded-md border-2 border-white bg-amber-50 text-center'>
    <h2 class='text-2xl font-semibold'>Welcome!</h2>
    <div class='flex gap-3'>
      <button class='py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300'>register</button>
      <button class='py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300'>login</button>
      <a href='/dogs' class='py-2 px-4 rounded-md border-2 border-green-300 bg-green-800 hover:border-green-900 transition-colors duration-300 cursor-pointer uppercase text-amber-50 hover:text-amber-300'>Dogs</a>
    </div>
  </div>
  `
}