import getElement from '@/js/getElement'
import item from '@/components/ui/item/item'
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
    const header = getElement({
      tag: 'h3',
      classes: styles.header,
      textContent: 'Available Files (without sms and registration):',
    })
    this.#containerFiles = getElement({ tag: 'div', classes: styles.containerFiles })

    app.append(header, this.#containerFiles)

    return app
  }

  addItem(file) {
    this.#containerFiles.append(item(file))
  }
}
