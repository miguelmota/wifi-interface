const {exec} = require('shelljs')

const isLinux = /linux/.test(process.platform)
const isMac = /darwin/.test(process.platform)
const isWin = /win/.test(process.platform)


function wifiInterface() {
  let cmd = ''
  let iface = ''

  if (isLinux) {
    cmd = exec(`route | grep '^default' | grep -o '[^ ]*$'`, {silent:true})

    iface = cmd.stdout.trim()
  } else if (isMac) {
    cmd = exec(`route -n get 0.0.0.0 2>/dev/null | awk '/interface: / {print $2}'`, {silent:true})

    iface = cmd.stdout.trim()
  } else if (isWin) {
    // TODO
  }

  return iface
}

module.exports = wifiInterface
