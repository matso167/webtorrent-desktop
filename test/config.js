const path = require('path')
const os = require('os')

const TEST_DIR = path.join(process.platform === 'win32' ? os.tmpdir() : '/tmp', 'WebTorrentTest')
const TEST_DIR_DOWNLOAD = path.join(TEST_DIR, 'Downloads')
const TEST_DIR_DESKTOP = path.join(TEST_DIR, 'Desktop')

module.exports = {
  TORRENT_FILES: [path.join(__dirname, 'resources', '1.torrent')],
  SEED_FILES: [path.join(TEST_DIR_DESKTOP, 'tmp.jpg')],
  SAVED_TORRENT_FILE: path.join(TEST_DIR_DESKTOP, 'saved.torrent'),
  TEST_DIR,
  TEST_DIR_DOWNLOAD,
  TEST_DIR_DESKTOP
}