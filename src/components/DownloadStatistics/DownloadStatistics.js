import DownloadStatisticsUI from './DownloadStatisticsUI'

/**
 * Class representing the Download Statistics.
 * @class
 * @listens startDownload
 */
export default class DownloadStatistics {
  #ui = new DownloadStatisticsUI()
  #app = this.#ui.app
  #element

  /**
   * Constructs a new instance of the class.
   *
   * @param {Element} element - The element to attach the instance to.
   */
  constructor(element) {
    this.#element = this.#ui.getElement(element)
    this.#init()
  }

  /**
   * Initializes the instance.
   */
  #init() {
    this.#bindToDom()
    this.#addEventListener()
  }

  /**
   * Binds the instance to the DOM.
   */
  #bindToDom() {
    this.#element.append(this.#app)
  }

  /**
   * Adds event listeners.
   */
  #addEventListener() {
    document.addEventListener('startDownload', this.#onStartDownload)
  }

  /**
   * Handles the start download event.
   *
   * @param {CustomEvent} e - The event.
   */
  #onStartDownload = (e) => {
    this.#ui.setSize(e.detail.size)
  }
}
