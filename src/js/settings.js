export const select = {
  templateOf: {
    productContainer: '#template-product',
    
  },
  containerOf: {
    allProducts: 'product-wrapper'
  }
};
export const templates = {
  coffeeList: Handlebars.compile(document.querySelector(select.templateOf.productContainer).innerHTML),
  
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};