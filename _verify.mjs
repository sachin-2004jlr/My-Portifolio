import puppeteer from 'puppeteer-core'
const OUT = 'C:\\Users\\sachi\\AppData\\Local\\Temp\\claude\\c--Users-sachi-Desktop-SachinPortifolio\\813c656c-1ad7-46d3-a6eb-16da441df12d\\scratchpad\\'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'] })
const yOf = (page, sel) => page.evaluate((s) => { const el = document.querySelector(s); return el ? window.scrollY + el.getBoundingClientRect().top : 0 }, sel)

// Desktop full sections
const d = await browser.newPage()
await d.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1 })
await d.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 60000 })
await sleep(1800)
await d.screenshot({ path: OUT + 'v-hero.png' })
for (const [id, name] of [['#about','v-about'],['#experience','v-exp'],['#certifications','v-certs'],['#contact','v-contact']]) {
  await d.evaluate((y) => window.scrollTo({ top: y - 15, behavior: 'instant' }), await yOf(d, id))
  await sleep(500)
  await d.screenshot({ path: OUT + name + '.png' })
}

// Mobile 390
const m = await browser.newPage()
await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 })
await m.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 60000 })
await sleep(1600)
await m.screenshot({ path: OUT + 'v-m-hero.png' })
// open mobile menu
await m.click('.nav__burger')
await sleep(500)
await m.screenshot({ path: OUT + 'v-m-menu.png' })

// Tablet 768 (nav should be burger now)
const t = await browser.newPage()
await t.setViewport({ width: 768, height: 900, deviceScaleFactor: 1 })
await t.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 60000 })
await sleep(1400)
await t.screenshot({ path: OUT + 'v-t-hero.png' })

// Reduced motion — work section becomes a plain list
const r = await browser.newPage()
await r.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
await r.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1 })
await r.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 60000 })
await sleep(1200)
await r.evaluate((y) => window.scrollTo({ top: y - 15, behavior: 'instant' }), await yOf(r, '#skills'))
await sleep(400)
await r.screenshot({ path: OUT + 'v-rm-skills.png' })

await browser.close()
console.log('done')
