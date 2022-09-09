import Item from '#models/item.model'

export const itemsPage = async (req, res) => {
  if (req.isAuthenticated()) {
    Item.find({}, (err, foundItems) => {
      if (err) {
        res.send(err)
      } else {
        res.render('items', {
          items: foundItems,
          pageTitle: 'Mookie',
          year: new Date().getFullYear()
        })
      }
    })
  } else {
    res.redirect('login')
  }
}

export const searchItems = (req, res) => {
  const { searchQuery } = req.body
  Item.find(
    {
      // Search all items and return all that contain the search query in the name or description
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    },
    (err, foundItems) => {
      if (!err) {
        if (foundItems) {
          res.render('search', {
            searchResults: foundItems,
            pageTitle: 'Search Results',
            year: new Date().getFullYear()
          })
        }
      } else {
        console.log(err)
      }
    }
  )
}
