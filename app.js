const menu = [
  {
    id: 1,
    title: 'The Psychology of Money',
    category: 'Non-Fiction',
    price: 15.99,
    img: './Assets/Book_2.jfif',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'Your Soul is  a river',
    category: 'Fiction',
    price: 13.99,
    img: './Assets/Book_3.jfif',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'You are your only limit',
    category: 'Non-Fiction',
    price: 6.99,
    img: './Assets/Book_4.jfif',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'The Great Gatzby',
    category: 'Fiction',
    price: 20.99,
    img: './Assets/Book_5.jfif',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'The Strength in our Scar',
    category: 'Non-Fiction',
    price: 22.99,
    img: './Assets/Book_6.jfif',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: '101 essays that will change the way you think',
    category: 'Non-Fiction',
    price: 18.99,
    img: './Assets/Book_7.jfif',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'The puppeteer',
    category: 'Non-Fiction',
    price: 8.99,
    img: './Assets/Book_8.jfif',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'Harry Potter',
    category: 'Fiction',
    price: 12.99,
    img: './Assets/Book_9.jfif',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'Never Let Me go',
    category: 'Fiction',
    price: 16.99,
    img: './Assets/Book_10.jfif',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Select parent element that will display the contents

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// Load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
    <img src="${item.img}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text"> ${item.desc} </p>
            </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
  // console.log(displayMenu);
}

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['All']
  );
  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="filter-btn" type="button" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  // Filter items
  filterBtns.forEach(function (btns) {
    btns.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      // declare a constant to select the menu array and use filter method to sort it
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === 'All') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
