import getElement from '@/js/getElement'
import item from '@/components/ui/item/item'
import DownloadStatistics from '@/components/DownloadStatistics/DownloadStatistics'
import styles from './DownloadManager.module.css'

export default class DownloadManagerUI {
  #containerFiles

  getElement(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }
    return element
  }

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

  addItem(file) {
    this.#containerFiles.append(item(file))
  }

  #addStatistics(element) {
    new DownloadStatistics(element)
  }
}
