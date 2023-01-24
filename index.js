import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false })

    
    // Acesso ao site
    const page = await browser.newPage()
    await page.goto('https://powerhub-ebon.vercel.app')

    
    // Login
    await page.click('#root > div > div > div:nth-child(2) > input')
    await page.type('#root > div > div > div:nth-child(2) > input', 'leonardosell@novafinanceira.com')
    await page.click('#root > div > div > div:nth-child(3) > input')
    await page.type('#root > div > div > div:nth-child(3) > input', 'Leonardo#1805')
    await page.click('#root > div > div > button')


    // Carregando page
    await page.waitForNavigation()


    // Caminho até o atendimento
    await page.goto('https://powerhub-ebon.vercel.app/atendimentos')


    // Entrando em um atendimento
    await page.click('document.querySelector("#page-content > div.chakra-table__container.css-1hgy397 > table > tbody > tr:nth-child(1) > td:nth-child(1)")')
    
})()