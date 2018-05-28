class Local {
  constructor () {
    this.storage = window.localStorage
  }
  getItem (key) {
    return this.storage[key]
  }
  setItem (key, val) {
    this.storage(key, val)
  }
  clear () {
    this.storage.clear()
  }
}

const local = new Local()

export default local
