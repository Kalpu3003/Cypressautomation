class AddToCart{
   search_input="[name='search']";
    click_search="//i[@class='fa fa-search']";
     product=`img[title='MacBook']`;
    addto= 'Add to Cart';
    successmessage=".alert.alert-success.alert-dismissible"

    search(input){
        cy.get(this.search_input).type(input)
        
    }
    click(){
         cy.xpath(this.click_search).click()
     }
    
//  clickproduct(){
//     cy.get(this.product).click()
 //}
 clickaddto(){
    cy.contains(this.addto).first().click()
 }
 verifysuccess()
{
   return cy.get(this.successmessage)
}       

}


export default AddToCart;