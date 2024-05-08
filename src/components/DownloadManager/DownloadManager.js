import DownloadManagerUI from './DownloadManagerUI'

export default class DownloadManager {
  #ui = new DownloadManagerUI()
  #app = this.#ui.app
  #element

  constructor(element) {
    this.#element = this.#ui.getElement(element)

    this.#init()
  }

  #init() {
    this.#bindToDom()
  }

  #bindToDom() {
    this.#element.append(this.#app)
  }

  #addEventListener() {}
}
