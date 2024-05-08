import getElement from '@/js/getElement'
import item from '@/components/ui/item/item'
import DownloadStatistics from '@/components/DownloadStatistics/DownloadStatistics'
import styles from './DownloadManager.module.css'

/**
 * Class representing the UI for Download Manager.
 */
export default class DownloadManagerUI {
  #containerFiles

  /**
   * Get the HTML element by tag or selector.
   *
   * @param {string | HTMLElement} element - Element tag or selector.
   * @return {HTMLElement} The selected element.
   */
  getElement(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

  /**
   * Get the app element for the Download Manager UI.
   *
   * @returns {HTMLElement} The app element.
   */
  get app() {
    const app = getElement({ tag: 'div', classes: styles.app })
    const wrapper = getElement({ tag: 'div', classes: styles.wrapper })
    const header = getElement({
      tag: 'h3',
      classes: styles.header,
      textContent: 'Available Files (without sms and registration):',
    })
    this.#containerFiles = getElement({ tag: 'div', classes: styles.containerFiles })
    const containerStatistics = getElement({ tag: 'div', classes: styles.containerStatistics })

    this.#addStatistics(containerStatistics)

    wrapper.append(header, this.#containerFiles)
    app.append(wrapper, containerStatistics)

    return app
  }

  /**
   * Adds an item to the containerFiles element.
   *
   * @param {Object} file - The file object to add.
   */
  addItem(file) {
    this.#containerFiles.append(item(file))
  }

  /**
   * Adds the download statistics to the app element.
   *
   * @param {HTMLElement} element - The element to add the download statistics to.
   */
  #addStatistics(element) {
    new DownloadStatistics(element)
  }
}
