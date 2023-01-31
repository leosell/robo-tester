import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false })

    
    // Acesso ao site
    const page = await browser.newPage()
    await page.goto('https://www.novapowerhub.com.br')
    await page.setViewport({ width: 1920, height: 930})

    
    // Login
    await page.click('#root > div > div > div:nth-child(2) > input')
    await page.type('#root > div > div > div:nth-child(2) > input', '4436')
    await page.click('#root > div > div > div:nth-child(3) > input')
    await page.type('#root > div > div > div:nth-child(3) > input', '123456')
    await page.click('#root > div > div > button')


    // Carregando pag3
    await page.waitForNavigation()


    // Caminho até o atendimento
    await page.goto('https://www.novapowerhub.com.br/atendimentos')


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

    if (offConsult) {
        const confirmConsult = 'xpath/html/body/div[5]/div[3]/div/section/footer/button[2]'
        await page.waitForSelector(confirmConsult)
        await page.click(confirmConsult)

        // Carregando page
        console.log('antes de carregar page')
        await page.waitForTimeout(2000)
        console.log('carregamento page')


        // Button salvar alterações
        const buttonSaveAlteracoes = 'xpath/html/body/div[4]/div[3]/div/section/footer/button[6]'
        console.log(buttonSaveAlteracoes)
        await page.click(buttonSaveAlteracoes)
        console.log('passou click')

    }

    // IN100
    await page.waitForTimeout(3000)
    console.log('antes de clicar in100')
    const buttonIn100 = 'xpath/html/body/div[4]/div[3]/div/section/footer/button[3]'
    await page.click(buttonIn100)
    console.log('depois de clicar in100')

    if (buttonIn100) {
        console.log('entrou if')
        await page.waitForTimeout(3000)
        console.log('antes de clicar save in100')
        const buttonSaveIn100 = 'xpath/html/body/div[5]/div[3]/div/section/footer/button[2]'
        console.log('depois de clicar save in100')
        await page.click(buttonSaveIn100)
        await page.waitForTimeout(2000)
        await page.click(buttonSaveAlteracoes)
    }
})()