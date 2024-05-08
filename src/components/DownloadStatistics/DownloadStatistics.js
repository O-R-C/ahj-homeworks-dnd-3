import DownloadStatisticsUI from './DownloadStatisticsUI'

export default class DownloadStatistics {
  #ui = new DownloadStatisticsUI()
  #app = this.#ui.app
  #element

  constructor(element) {
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

  #addElements() {}

  #addEventListener() {}
}
