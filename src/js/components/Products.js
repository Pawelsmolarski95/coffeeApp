import { select,  templates } from './settings.js';
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
    const generatedHTML = templates.productListLeft(thisProduct.data);
    //create element using utils.createElemnetFromHTML
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    //find menu container 
    const menuContainer = document.querySelector(select.containerOf.productListLeft);
    // add element to menu 
    menuContainer.appendChild(thisProduct.element);
  }
}
export default Product;
