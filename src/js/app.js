/* eslint-disable no-undef */
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
        thisApp.renederMostPopular();
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
    const titleArray = [
      'Home of Original Tastes',
      'Real Venezuela, Real Coffee',
      'Taste Real Venezuela'
    ];  
    console.log(titleArray[1]);
    window.onload = function  newTitile() {
      let randomTitle = Math.floor(Math.random() * (titleArray.length));
     
      document.querySelector('.randomTitle').innerHTML = titleArray[randomTitle];
      
    };
  },
  renederMostPopular(){
    const thisApp = this;
    const mostPopular = document.querySelector(select.containerOf.mostPopular);
    
   
    for (let productData in thisApp.data.products){
      console.log(thisApp.data.products[productData]);
     
      if(thisApp.data.products[productData].mostPopular == 'true') {
        mostPopular.classList.remove(classNames.hiddenImage);
      }
      
    }
   
   
  },
 
   
  
  initPages: function(){
    const thisApp = this;
    
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.containerOf.navLinks);
    thisApp.upperArrow = document.querySelector(select.containerOf.upperArrow);
  
    const idFromHash = window.location.hash.replace('#/', '' );
    
    let pageMatchingHash = thisApp.pages[0].id;
    
    
    for(let page of thisApp.pages) {
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
        
        const id = clickedElement.getAttribute('href').replace('#', '');
       
        thisApp.activePage(id);
        
        window.location.hash = '#/' + id;
      });
      
    }
    thisApp.upperArrow.addEventListener('click', function(){
      window.scrollTo(0, 800);
    });
    
    
  },
 
  activePage: function(pageId){
    const thisApp = this;
    
    thisApp.products = document.querySelector(select.containerOf.product);
    thisApp.contact = document.querySelector(select.containerOf.contact);
    thisApp.about = document.querySelector(select.containerOf.about);
    
    for(let page of thisApp.pages){
      page.classList.remove(classNames.activePage);
      
      if (pageId == 'home') {
        thisApp.about.classList.add(classNames.activePage);
        thisApp.products.classList.add(classNames.activePage);
        thisApp.initWidget();
        
      } else if (pageId == 'products')  {
        thisApp.products.classList.add(classNames.activePage);
        
      } else if (pageId == 'contact') {
        thisApp.contact.classList.add(classNames.activePage);
      }  
      
    } 
    for(let link of thisApp.navLinks) {
      link.getAttribute('href') == '#' + pageId;
    }
  },
  initWidget() {
    const thisApp = this;
    thisApp.carousel = document.querySelector(select.containerOf.carousel);
    // eslint-disable-next-line no-undef
    thisApp.flkty = new Flickity(thisApp.carousel,{
      wrapAround: true,
      autoPlay: true,
      initialIndex: 2,
      prevNextButtons: false,
      cellAlign: 'left',
      pageDots: false,
    }); 
  },

  init: function(){
    const thisApp = this;
    
    thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.renederMostPopular();
    
    
  },
};
app.init();