# appium-mobile-automation-testing
test cases & video record testing: <br />
https://drive.google.com/drive/folders/1KHQHLfgLmIf4M-HLikQuxjMTtjGrYXkd?usp=sharing

## How to run
clone or download code appium-mobile-automation-testing

customize your mobile devices in the file wdio.conf.js <br />
example: <br />

```bash
capabilities: [{ 
        platformName                : "Android", 
        "appium:automationName"     : 'UiAutomator2', 
        "appium:deviceName"         : '<your name device>', 
        "appium:platformVersion"    : '<device version>',
        "appium:app"                : path.join(process.cwd(),'./test/apk/Diet_meal.apk'),
        "appium:appPackage"         : "com.fghilmany.dietmealapp", 
        "appium:appActivity"        : "com.fghilmany.dietmealapp.ui.main.MainActivity", 
        "appium:noReset"            : true, 
        "appium:forceAppLaunch"     : true,
    }],
```

install dependencies <br />
```bash
npm install
```

run appium <br />
```bash
npx run ./wdio.conf.js
```

### Thanks
