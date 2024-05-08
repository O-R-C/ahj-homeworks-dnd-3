import setTitle from './setTitle'
import data from './data'
import DownloadManager from '@/components/DownloadManager/DownloadManager'

setTitle('Download Manager')
new DownloadManager('body', data)
