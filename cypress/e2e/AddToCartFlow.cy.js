import AddToCart from "../Pages/addToCartflow";
import testdata from "../fixtures/testdata.json"
 
let add =new AddToCart()
describe('checking addtocart',()=>{
before(()=>{
    cy.login(testdata.login.username,testdata.login.password)
})
it('verifying addtocartflow',()=>{

    add.search(testdata.product.productname)
    add.click()
   // add.clickproduct()
    add.clickaddto()
   add.verifysuccess().should('contain',testdata.message.successmessage)


})
})
