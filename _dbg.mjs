import puppeteer from 'puppeteer-core'
const OUT = 'C:\\Users\\sachi\\AppData\\Local\\Temp\\claude\\c--Users-sachi-Desktop-SachinPortifolio\\813c656c-1ad7-46d3-a6eb-16da441df12d\\scratchpad\\'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--force-color-profile=srgb'] })
const p = await b.newPage()
await p.setViewport({ width: 1440, height: 950, deviceScaleFactor: 2 })
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
await sleep(2200)
await p.screenshot({ path: OUT + 'dbg-kicker.png', clip: { x: 440, y: 55, width: 560, height: 120 } })
await b.close()
console.log('done')
