export const quicklinks = [
  {
    name: 'phones',
    subCategories: [
      {
        quicklinksName: 'Smartphone',
        links: [
          {
            title: 'All smartphones',
            properties: 'all'
          },
          'Apple',
          'Samsung',
          'Xiaomi'
        ]
      },
      {
        quicklinksName: 'Tablets',
        links: [
          {
            title: 'All Tablets',
            properties: 'all',
            catergoryLink: 'tablets'
          },
          {
            title: 'Apple',
            properties: 'apple',
            catergoryLink: 'tablets'
          },
          {
            title: 'iPad 2021',
            properties: 'ipad-2021',
            DirectLink: 'tablets'
          }
        ]
      },
      {
        quicklinksName: 'Accessories',
        links: ['Powerbanks', 'Covers']
      }
    ]
  },
  {
    name: 'laptops',
    subCategories: [
      {
        quicklinksName: 'Laptop',
        links: [
          {
            title: 'All Laptops',
            properties: 'all'
          },
          'Gaming',
          { title: 'Home & Office', properties: 'home-&-office' },
          'Apple',
          'Lenovo',
          'Asus'
        ]
      },
      {
        quicklinksName: 'Components',
        links: ['RAM', 'HDD']
      },
      {
        quicklinksName: 'Peripherials',
        links: [
          'Mouse',
          'Keyboard',
          { title: 'Web Camera', properties: 'web-camera' }
        ]
      }
    ]
  }
];
