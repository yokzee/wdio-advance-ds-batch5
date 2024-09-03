import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}


Given (`user is on Login Page`, async ()=>{
    await LoginPage.open()
})

When (/^user input "([^"]*)" as username$/, async(username)=>{
    await LoginPage.inputUsername(username)
})

When (/^user input "([^"]*)" as password$/, async(password)=>{
    await LoginPage.inputUsername(password)
})

When (`user click login button`, async()=>{
    await LoginPage.loginProcess()
})

When (`user redirected to homepage`, async ()=>{
    await HomePage.open()
})










