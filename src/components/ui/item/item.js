import getElement from '@/js/getElement'
import styles from './item.module.css'

/**
 * Creates an item element based on the file information.
 *
 * @param {Object} file - The file object containing information like url and name.
 * @return {HTMLElement} The created item element.
 */
export const item = (file) => {
  const fileSize = getSize(file.url)
  const item = getElement({ tag: 'div', classes: styles.item })
  const name = getElement({ tag: 'div', classes: styles.name, textContent: file.name })
  const size = getElement({ tag: 'div', classes: styles.size, textContent: `${fileSize} MB` })
  const link = getElement({
    tag: 'a',
    classes: styles.link,
    textContent: 'Download',
    href: file.url,
    download: file.name,
    rel: 'noopener',
    data: { size: fileSize },
  })

  item.append(name, size, link)

  return item
}

/**
 * Calculates the size of a base64 string in megabytes.
 *
 * @param {string} str64 - The base64 string to calculate the size from.
 * @return {string} The size of the base64 string formatted in MB.
 */
const getSize = (str64) => {
  const size = window.atob(str64.split(',')[1]).length / 1024 / 1024

  return Math.round(size * 100) / 100
}

export default item
