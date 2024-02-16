import LoginPage from "../Pages/LoginPage"
import  RegData from "../fixtures/RegData.json"
describe('Enter Register Details',()=>{
  
    it('LoginPage',()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        let lg=new LoginPage();

        lg.setfirst('RegData.firstname')
        lg.setlast('RegData.lastname')
        lg.setmail('RegData.email')
        lg.setphone('RegData.telephone')
        lg.setpass('RegData.password')        
        lg.clickcheckbox()
        lg.clickcontinue()


    })

    })