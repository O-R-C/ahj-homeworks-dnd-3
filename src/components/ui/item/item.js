import getElement from '@/js/getElement'
import styles from './item.module.css'

export const item = (file) => {
  const item = getElement({ tag: 'div', classes: styles.item })
  const name = getElement({ tag: 'div', classes: styles.name, textContent: file.name })
  const size = getElement({ tag: 'div', classes: styles.size, textContent: file.size })
  const link = getElement({
    tag: 'a',
    classes: styles.link,
    textContent: 'Download',
    href: file.url,
    download: file.name,
    rel: 'noopener',
  })

  item.append(name, size, link)

  return item
}

export default item
