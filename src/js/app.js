import { settings } from './settings.js';
import Product from './components/Products.js';
const app = {
  initData: function(){
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('pasrsedRespose', parsedResponse);
        // save parsedResponse as thisApp.data.products
        thisApp.data.products = parsedResponse;
        console.log(thisApp.data.products);
        //execute initMenu method
        thisApp.initMenu();
        
      });
    console.log('thisApp.date', JSON.stringify(thisApp.data));
  },
  initMenu(){
    const thisApp = this;
    console.log(thisApp.data.products);
    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },
  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initMenu();
  },
};
app.init();