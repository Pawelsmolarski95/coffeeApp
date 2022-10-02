import { templates,select,classNames } from '../settings.js';
import utils from '../utils.js';

class Product{
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
    thisProduct.mostPopular();

  }
  
  renderInMenu(){
    const thisProduct = this;
    // generate HTML based on template
    const generatedHTML = templates.coffeeList(thisProduct.data);
    //create element using utils.createElemnetFromHTML
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    //find menu container 
    const menuContainer = document.querySelector('.product-wrapper');
    // console.log(menuContainer);
    // add element to menu 
    menuContainer.appendChild(generatedDOM);
  }

  mostPopular(){
    const thisProduct = this;
    const mostPopularImg = document.querySelector(select.containerOf.mostPopular);
    console.log(thisProduct.data.mostPopular);
     
    if(thisProduct.data.mostPopular == 'true') {
      mostPopularImg.classList.remove(classNames.hiddenImage);
    }
  }    
}

export default Product;
