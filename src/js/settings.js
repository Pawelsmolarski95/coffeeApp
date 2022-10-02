export const select = {
  templateOf: {
    productContainer: '#template-product',
    
  },
  containerOf: {
    allProducts: 'product-wrapper',
    pages: '.pages',
    navLinks: '.nav-link',
    upperArrow: '.upper',
    mostPopular: '.most-popular',
    contact: '#contact',
    product: '#product',
    about: '#about',
    startingPage: '#product, #about',
    home: '#home'
  }
};
export const classNames = {
  hidden: 'hidden',
  hiddenImage: 'hidden-image',
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