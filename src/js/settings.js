export const select = {
  templateOf: {
    productContainerLeft: '#template-product-left',
    productContainerRight: '#template-product-right',
  },
  containerOf: {
    productOneContainer: '.product-one',
    productTwoContainer: '.product-one',
    productThreeContainer: '.product-one'
  }
};
export const templates = {
  productListLeft: Handlebars.compile(document.querySelector(select.templateOf.productContainerLeft).innerHTML),
  productListRight: Handlebars.compile(document.querySelector(select.templateOf.productContainerRight).innerHTML),
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};