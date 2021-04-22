export default {
  toggle(v, e) {
    let view = document.querySelector(`.${v}`)
    let edit = document.querySelector(`.${e}`)
    view.style.display == 'block'
      ? (view.style.display = 'none')
      : (view.style.display = 'block')
    edit.style.display == 'block'
      ? (edit.style.display = 'none')
      : (edit.style.display = 'block')
  },
  copy(a, id, i) {
    // console.log(this.$refs)
    let el = this.$refs[`${a}-${id}-${i}`][0]
    el.select() // console.log(el.value)
    document.execCommand('copy')
    // let el = document.getElementById(a + '-' + id + '-' + i)
  },
}
