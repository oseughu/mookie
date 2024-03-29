import Item from '#models/item.model'
import axios from 'axios'
import * as cheerio from 'cheerio'

const getItems = async (req, res, next) => {
  const url = 'https://webscraper.io/test-sites/e-commerce/more'
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const items = $('div.col-md-9')

  const scrapedItems = []

  for (let i = 0; i < items.length; i++) {
    const item = $(items[i]).find('div.col-md-4')

    for (let j = 0; j < item.length; j++) {
      const itemName = $(item[j]).find('a.title').attr('title')
      const itemDescription = $(item[j]).find('p.description').text()
      const itemPrice = $(item[j]).find('h4.price').text()

      const newItems = new Item({
        name: itemName,
        description: itemDescription,
        price: itemPrice
      })

      await newItems.save()

      scrapedItems.push(newItems)
    }
  }

  next()
}

export default getItems
