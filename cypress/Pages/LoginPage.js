class LoginPage{
    firstname="//*[text()='First Name']";
    lastname="//*[text()='Last Name']";
    email="//*[text()='E-Mail']";
    telephone="//*[text()='Telephone']";
    password="//*[text()='Password']";
    confirmpass="//*[text()='Password Confirm']"
    checkbox="//input[@name='agree']";
    btn="//input[@value='Continue']"

    setfirst(fname){cy.xpath(this.firstname).type(fname)    }
    setlast(lname){cy.xpath(this.lastname).type(lname)    }
    setmail(mail){ cy.xpath(this.email).type(mail)  }
    setphone(ph){cy.xpath(this.telephone).type(ph)}
    setpass(pass){cy.xpath(this.password).type(pass)}
    setconfirm(confirm){cy.xpath(this.confirmpass).type(confirm) }
    clickcheckbox(){cy.xpath(this.checkbox).click()}
    clickcontinue(){cy.xpath(this.btn).click()}


}
export default LoginPage;