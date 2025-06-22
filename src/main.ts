const route = () => {
  const app: HTMLElement | null = document.getElementById('app');
  const href = window.location.pathname;

  if (!app) {
    return;
  }

  switch (href) {
    case '/': {
      import('./pages/home').then(module => module.render(app));
      break;
    }
    case '/dogs': {
      import('./pages/dogs').then(module => module.render(app));
      break;
    }
  }

}

route();