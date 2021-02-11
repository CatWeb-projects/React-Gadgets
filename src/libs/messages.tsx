import { createMessages } from 'estafette-intl';

export const messages = createMessages([
  {
    greeting: {
      en: 'Hello, {name}',
      ru: 'Здраствуйте, {name}',
      ro: 'Salut, {name}'
    }
  },
  {
    account: {
      en: 'My Account',
      ru: 'Мой Аккаунт',
      ro: 'Contul Meu'
    }
  },
  {
    search: {
      en: 'Find over 100 products',
      ru: 'Искать среди более 15 000 товаров',
      ro: 'Caută în peste 15 000 de produse'
    }
  }
]);
