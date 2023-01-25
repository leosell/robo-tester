import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false })

    
    // Acesso ao site
    const page = await browser.newPage()
    await page.goto('https://powerhub-ebon.vercel.app')
    await page.setViewport({ width: 1680, height: 800})

    
    // Login
    await page.click('#root > div > div > div:nth-child(2) > input')
    await page.type('#root > div > div > div:nth-child(2) > input', '4436')
    await page.click('#root > div > div > div:nth-child(3) > input')
    await page.type('#root > div > div > div:nth-child(3) > input', '123456')
    await page.click('#root > div > div > button')


    // Carregando page
    await page.waitForNavigation()


    // Caminho até o atendimento
    await page.goto('https://powerhub-ebon.vercel.app/atendimentos')


    // Entrando em um atendimento
    const searchResultSelector = 'xpath/html/body/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[1]'

    await page.waitForSelector(searchResultSelector);

    await page.click(searchResultSelector);

})()