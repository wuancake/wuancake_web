class Local {
  constructor () {
    this.storage = window.localStorage
  }
  getItem (key) {
    return this.storage.getItem(key)
  }
  setItem (key, val) {
    const a = JSON.stringify(val)
    this.storage.setItem(key, a)
  }
  clear () {
    this.storage.clear()
  }
  remove (key) {
    this.storage.removeItem(key)
  }
}

const local = new Local()

export default local
