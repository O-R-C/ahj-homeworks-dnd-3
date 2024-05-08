import getElement from '@/js/getElement'
import styles from './DownloadManager.module.css'

export default class DownloadManagerUI {
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
    const containerFiles = getElement({ tag: 'div', classes: styles.containerFiles })

    app.append(header, containerFiles)

    return app
  }
}
