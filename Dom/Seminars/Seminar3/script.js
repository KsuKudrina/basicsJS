const productsData = [
    {
      id: 1,
      name: "Ноутбук",
      category: "Электроника",
    },
    {
      id: 2,
      name: "Смартфон",
      category: "Электроника",
    },
    {
      id: 3,
      name: "Кофемашина",
      category: "Бытовая техника",
    },
    {
      id: 4,
      name: "Фотокамера",
      category: "Электроника",
    },
    {
      id: 5,
      name: "Микроволновая печь",
      category: "Бытовая техника",
    },
    {
      id: 6,
      name: "Книга",
      category: "Книги",
    },
    {
      id: 7,
      name: "Футболка",
      category: "Одежда",
    },
    {
      id: 8,
      name: "Шапка",
      category: "Одежда",
    },
    {
      id: 9,
      name: "Стул",
      category: "Мебель",
    },
    {
      id: 10,
      name: "Стол",
      category: "Мебель",
    },
  ];

const productsEl = document.querySelector('.products');
const productHtml = createProductsHtml(productsData);
productsEl.innerHTML = productHtml;

function createProductsHtml(productsData) {
    return productsData.map((product) => `
    <div class="product" data-id =${product.id}>
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <button class="btn">Купить</button>
    </div>`).join("");
}

const selectEl = document.querySelector('#category-list');

selectEl.addEventListener('change', () => {
    const selectedCategory = selectEl.value;
    const products = getProductsByCategory(selectedCategory)
    const productHtml = createProductsHtml(products);
    productsEl.innerHTML = productHtml;
})

function getProductsByCategory(category) {
    if (category === 'all'){
        return productsData;
    }
    return productsData.filter((product) => product.category === category) 
}

// productsEl.addEventListener('click',({target}) => {
//   if (!target.closest('.btn')) {
//     return
//   }

// });