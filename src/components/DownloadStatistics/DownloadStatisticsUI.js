import getElement from '@/js/getElement'
import styles from './DownloadStatistics.module.css'

export default class DownloadStatisticsUI {
  #spanSize

  getElement(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

  get app() {
    const app = getElement({
      tag: 'div',
      classes: styles.downloadStatistics,
      textContent: "You've already downloaded: ",
    })
    this.#spanSize = getElement({ tag: 'span', classes: styles.size, textContent: '0 MB' })

    app.append(this.#spanSize)

    return app
  }
}
