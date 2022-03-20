export default {
  // code from stackoverflow by user https://stackoverflow.com/users/1376947/icl7126
  hslToHex(h, s, l) {
    h /= 360
    s /= 100
    l /= 100
    let r, g, b
    if (s === 0) {
      r = g = b = l // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }
    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    // console.log('conversion run')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  },

  editableFrame(el) {
    window.frames[el].document.designMode = 'On'
    // document.getElementById(el).contentDocument.body.style.fontFamily = 'Arial'
    // document.getElementById(el).contentDocument.body.innerHTML = ''
    // document.getElementById(el).contentDocument.body.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia minus, praesentium magni nam dolore doloribus provident vitae sunt maxime enim quasi harum alias consequatur placeat dolores. Ex, molestias sunt?";
  },

  formatBasic(el, att) {
    window.frames[el].document.execCommand(att, false, null)
  },
  formatNew(el, att, opt) {
    console.log(document.getElementById(el))
    // document.getElementById('editable').contentDocument.body.style.fontFamily =
    //   'Segoe Print'
    document.getElementById(el).document.execCommand(att, false, opt)
  },

  formatMore(el, att, opt) {
    window.frames[el].document.execCommand(att, false, opt)
  },

  setColor(el, c) {
    // var col = hslToHex(c, 100, 50)
    window.frames[el].document.execCommand('ForeColor', false, c)
    // console.log('test')
  },

  submit_form(frame, text) {
    const theForm = document.getElementById('myForm')

    // taking the iframe content typed by user, and put it in the textarea
    // to be submitted
    theForm.elements[text].value = window.frames[frame].document.body.innerHTML
    theForm.submit()
  },

  showForm(el) {
    return window.frames[el].document.body.innerHTML
  },
  fontNames: [
    { key: 'arial', name: 'Arial' },
    { key: 'courier', name: 'Courier' },
    { key: 'georgia', name: 'Georgia' },
    { key: 'helvetica', name: 'Helvetica' },
    { key: 'impact', name: 'Impact' },
    { key: 'segoe', name: 'Segoe Print' },
    { key: 'tahoma', name: 'Tahoma' },
    { key: 'times', name: 'Times New Roman' },
    { key: 'verdana', name: 'Verdana' },
  ],
  fontUnit: [
    { key: 'two', name: 2 },
    { key: 'three', name: 3 },
    { key: 'four', name: 4 },
    { key: 'five', name: 5 },
    { key: 'six', name: 6 },
    { key: 'seven', name: 7 },
  ],
}

// var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
