import getElement from '@/js/getElement'
import styles from './DownloadStatistics.module.css'

/**
 * Class representing the UI for Download Statistics.
 */
export default class DownloadStatisticsUI {
  #spanSize

  /**
   * Get the HTML element by tag or selector.
   * @param {string | HTMLElement} element - Element tag or selector.
   * @returns {HTMLElement} The selected element.
   */
  getElement(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

  /**
   * Get the app element for the Download Statistics UI.
   * @returns {HTMLElement} The app element.
   */
  get app() {
    const app = getElement({
      tag: 'div',
      classes: styles.downloadStatistics,
      textContent: "You've already downloaded: ",
    })
    this.#spanSize = getElement({ tag: 'span', classes: styles.size, textContent: '0' })

    app.append(this.#spanSize)

    return app
  }

  /**
   * Set the size of the download statistics.
   * @param {number} size - The size to be added to the current size.
   */
  setSize(size) {
    this.#spanSize.textContent = (Number(this.#spanSize.textContent) + Number(size)).toFixed(2)
  }
}
