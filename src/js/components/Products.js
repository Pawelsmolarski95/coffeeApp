import { templates } from '../settings.js';
import utils from '../utils.js';

class Product{
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();

  }
  
  renderInMenu(){
    const thisProduct = this;
    // generate HTML based on template
    const generatedHTML = templates.coffeeList(thisProduct.data);
    //create element using utils.createElemnetFromHTML
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    //find menu container 
    const menuContainer = document.querySelector('.product-wrapper');
    console.log(menuContainer);
    // add element to menu 
    menuContainer.appendChild(generatedDOM);
  }
}
export default Product;
