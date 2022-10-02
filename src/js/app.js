import { classNames, select, settings} from './settings.js';
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
    for(let productData in thisApp.data.products){
      new Product(
        thisApp.data.products[productData].id,
        thisApp.data.products[productData]);
    }
  },
  initPages: function(){
    const thisApp = this;
    
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.containerOf.navLinks);

    const idFromHash = window.location.hash.replace('#/', '' );
    console.log(thisApp.pages[1]);
    let pageMatchingHash = thisApp.pages[0].id;
    
    for(let page of thisApp.pages) {
      console.log(page.id);
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activePage(pageMatchingHash);
    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');
        //run app.activePage with this id
        thisApp.activePage(id);
        //change URL hash
        window.location.hash = '#/' + id;
      });
      
    }
    
  },
  activePage: function(pageId){
    const thisApp = this;
    //add class active to maching page, remove this class from non-maching
    for(let page of thisApp.pages) {
      
      page.classList.toggle('active', page.id == pageId);
    }
    //add class active to maching page, remove this class from non-maching
    // for(let link of thisApp.navLinks) {
    //   link.classList.toggle(
    //     'active',
    //     link.getAttribute('href') == '#' + pageId
    //   );
    // }
  },
  
  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initMenu();
    thisApp.initPages();
    
    
    
   
  },
};
app.init();