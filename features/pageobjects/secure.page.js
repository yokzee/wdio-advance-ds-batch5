import Page from './page.js';

class cartPage extends Page{

    get checkOutButton(){

    }

    get continueShoppingButton(){

    }

    open(){
        return super.open("cart.html")
    }
}

export default new cartPage
