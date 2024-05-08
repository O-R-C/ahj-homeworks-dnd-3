import DownloadManagerUI from './DownloadManagerUI'

/**
 * Class representing a Download Manager that listens for click events and fires startDownload events.
 * @event click - Listens for click events on the app element.
 * @listens DownloadManager#click
 * @fires DownloadManager#startDownload
 */
export default class DownloadManager {
  #ui = new DownloadManagerUI()
  #app = this.#ui.app
  #data
  #element

  /**
   * Create a Download Manager.
   * @param {string} element - The HTML element to bind the Download Manager to.
   * @param {Array} data - The array of data representing the download items.
   */
  constructor(element, data) {
    this.#data = data
    this.#element = this.#ui.getElement(element)

    this.#init()
  }

  /**
   * Initializes the Download Manager.
   */
  #init() {
    this.#bindToDom()
    this.#addElements()
    this.#addEventListener()
  }

  /**
   * Binds the Download Manager to the DOM.
   */
  #bindToDom() {
    this.#element.append(this.#app)
  }

  /**
   * Adds the download items to the Download Manager.
   */
  #addElements() {
    this.#data.forEach((file) => {
      this.#ui.addItem(file)
    })
  }

  /**
   * Adds event listeners.
   */
  #addEventListener() {
    this.#app.addEventListener('click', this.#onClick)
  }

  /**
   * Handles the click event.
   * @fires DownloadManager#startDownload
   * @param {MouseEvent} e - The click event.
   */
  #onClick = (e) => {
    const link = e.target.closest('a')

    if (!link) return

    this.#fireStartDownloadEvent(link.dataset.size)
  }

  /**
   * Get the startDownload event with the specified size.
   * @param {string} size - The size of the download.
   * @returns {CustomEvent} The startDownload event.
   */
  #getStartDownloadEvent(size) {
    return new CustomEvent('startDownload', {
      detail: {
        size,
      },
    })
  }

  /**
   * Fire the startDownload event with the specified size.
   * @param {string} size - The size of the download to start.
   */
  #fireStartDownloadEvent(size) {
    document.dispatchEvent(this.#getStartDownloadEvent(size))
  }
}
