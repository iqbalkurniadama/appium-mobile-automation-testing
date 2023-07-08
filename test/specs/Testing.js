describe('Go to Home Page',() => {

    it('success add new user', async() => {
        await $("//android.view.ViewGroup/android.widget.TextView[1]");
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('iqbal');
        await $("//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText").setValue("50");
        await $("//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText").setValue("170");
        await $("//android.widget.RadioGroup/android.widget.RadioButton[1]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await $("//android.widget.RadioGroup/android.widget.RadioButton[1]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await expect(await $("//android.widget.FrameLayout[@content-desc='Home']/android.view.ViewGroup/android.widget.TextView")).toHaveText('Home');
        driver.closeApp();
    }),

    it('failled new user because blank height when filling out the form', async() => {
        driver.launchApp();
        await $("//android.view.ViewGroup/android.widget.TextView[1]");
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('ara-ara');
        await $("//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText").setValue("50");
        await $("//android.widget.RadioGroup/android.widget.RadioButton[2]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await expect(await $("//android.widget.LinearLayout/android.widget.TextView")).toBeExisting();
        driver.closeApp();
    })

    it('Success Search name user', async () => {
        driver.launchApp();
        await $("//android.view.ViewGroup/android.widget.TextView[1]");
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('hehe');
        await $("//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText").setValue("50");
        await $("//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText").setValue("170");
        await $("//android.widget.RadioGroup/android.widget.RadioButton[1]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await $("//android.widget.RadioGroup/android.widget.RadioButton[1]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await expect(await $("//android.widget.FrameLayout[@content-desc='Home']/android.view.ViewGroup/android.widget.TextView")).toHaveText('Home');
        await $("//android.widget.FrameLayout[@content-desc='Profile']/android.widget.ImageView").click()
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('aris')
        await expect(await $("//android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[1]")).toBeExisting()
        driver.closeApp();
    })
})