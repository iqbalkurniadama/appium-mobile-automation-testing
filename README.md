# appium-mobile-automation-testing
test cases & video record testing:
https://drive.google.com/drive/folders/1KHQHLfgLmIf4M-HLikQuxjMTtjGrYXkd?usp=sharing

## How to run
clone or download code appium-mobile-automation-testing

customize your mobile devices in the file wdio.conf.js <br />
example: <br />

```bash
capabilities: [{ <br />
        platformName                : "Android", <br />
        "appium:automationName"     : 'UiAutomator2', <br />
        "appium:deviceName"         : '<your name device>', <br />
        "appium:platformVersion"    : '<device version>', <br />
        "appium:app"                : path.join(process.cwd(),'./test/apk/Diet_meal.apk'), <br />
        "appium:appPackage"         : "com.fghilmany.dietmealapp", <br />
        "appium:appActivity"        : "com.fghilmany.dietmealapp.ui.main.MainActivity", <br />
        "appium:noReset"            : true, <br />
        "appium:forceAppLaunch"     : true, <br />
    }],
```

```bash
npm install
```

```bash
npx run ./wdio.conf.js
```
### Thanks
