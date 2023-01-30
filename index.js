import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false })

    
    // Acesso ao site
    const page = await browser.newPage()
    await page.goto('https://powerhub-ebon.vercel.app')
    await page.setViewport({ width: 1680, height: 600})

    
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

    const searchResultPage = 'xpath/html/body/div[4]/div[3]/div/section/div/div/div[1]/div[2]/div[4]/p'
    await page.waitForSelector(searchResultPage)
    await page.click(searchResultPage)


    // Input beneficio
    // const inputNb = 'xpath/html/body/div[4]/div[3]/div/section/div/div/div[1]/div[3]/div[1]/div[1]/input'
    // await page.click(inputNb)
    // await page.type(inputNb, '1514730836')


    // Button salvar alterações
    // const button = 'xpath/html/body/div[4]/div[3]/div/section/footer/button[6]'
    // await page.click(button)


    // Consulta offline
    const offConsult = 'xpath/html/body/div[4]/div[3]/div/section/footer/button[4]'
    await page.click(offConsult)
    const confirmConsult = 'xpath/html/body/div[5]/div[3]/div/section/footer/button[2]'
    await page.waitForSelector(confirmConsult)
    await page.click(confirmConsult)


    // Carregando page
    await page.waitForNavigation()


    // Button salvar alterações
    const button = 'xpath/html/body/div[4]/div[3]/div/section/footer/button[6]'
    await page.click(button)

})()