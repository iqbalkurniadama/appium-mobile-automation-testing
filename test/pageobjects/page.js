class Elements {
  get openApk() { 
    return $('//android.view.ViewGroup/android.widget.TextView[1]') 
  }

  get name() {
    return $('//android.widget.FrameLayout/android.widget.EditText')
  }

  get weight() {
    return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
  }

  get height() {
    return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
  }

  get clickGender() {
    return $('//android.widget.RadioGroup/android.widget.RadioButton[1]')
  }

  get btnNext () {
    return $('//android.view.ViewGroup/android.widget.Button')
  }

  get isiFormulir() {
    return $('//android.widget.RadioGroup/android.widget.RadioButton[1]')
  }

  get btnSelesai() {
    return $('//android.view.ViewGroup/android.widget.Button')
  }

  get expectToHome() {
    return $("//android.widget.FrameLayout[@content-desc='Home']/android.view.ViewGroup/android.widget.TextView")
  }

  get expectErrorInput() {
    return $("//android.widget.LinearLayout/android.widget.TextView")
  }

  get clickProfile() {
    return $("//android.widget.FrameLayout[@content-desc='Profile']/android.widget.ImageView")
  }

  get searchName() {
    return $("//android.widget.FrameLayout/android.widget.EditText")
  }

  get expectSearchName() {
    return $("//android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[1]")
  }
}

module.exports = new Elements();