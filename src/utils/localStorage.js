class Local {
  constructor () {
    this.storage = window.localStorage
  }
  getItem (key) {
    // return JSON.parse(this.storage.getItem(key))
    return this.storage.getItem(key)
  }
  setItem (key, val) {
    this.storage.setItem(key, JSON.stringify(val))
  }
  clear () {
    this.storage.clear()
  }
}

const local = new Local()

export default local
