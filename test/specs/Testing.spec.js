const elements = require('../pageobjects/page');

describe('Go to Home Page',() => {

    it('success add new user', async() => {
        await elements.openApk.click();
        await elements.name.setValue('iqbal');
        await elements.weight.setValue('50');
        await elements.height.setValue('170');
        await elements.clickGender.click();
        await elements.btnNext.click();
        await elements.isiFormulir.click();
        await elements.btnSelesai.click();
        await expect(await elements.expectToHome).toHaveText('Home');
        driver.closeApp();
    }),

    it('failled new user because blank height when filling out the form', async() => {
        driver.launchApp();
        await elements.openApk.click();
        await elements.name.setValue('ara-ara');
        await elements.weight.setValue("50");
        await elements.clickGender.click();
        await elements.btnNext.click();
        await expect(await elements.expectErrorInput).toBeExisting();
        driver.closeApp();
    })

    it('Success Search name user', async() => {
        driver.launchApp();
        await elements.openApk.click();
        await elements.name.setValue('hehe');
        await elements.weight.setValue("50");
        await elements.height.setValue("170");
        await elements.clickGender.click();
        await elements.btnNext.click();
        await elements.isiFormulir.click();
        await elements.btnSelesai.click();
        await elements.clickProfile.click()
        await elements.searchName.setValue('Ghilmany')
        await expect(await elements.expectSearchName).toBeExisting()
        driver.closeApp();
    })
})