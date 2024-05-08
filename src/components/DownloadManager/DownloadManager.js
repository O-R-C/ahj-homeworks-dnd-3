import DownloadManagerUI from './DownloadManagerUI'

export default class DownloadManager {
  #ui = new DownloadManagerUI()
  #app = this.#ui.app
  #data
  #element

  constructor(element, data) {
    this.#data = data
    this.#element = this.#ui.getElement(element)

    this.#init()
  }

  #init() {
    this.#bindToDom()
    this.#addElements()
    this.#addEventListener()
  }

  #bindToDom() {
    this.#element.append(this.#app)
  }

  #addElements() {
    this.#data.forEach((file) => {
      this.#ui.addItem(file)
    })
  }

  #addEventListener() {}
}
