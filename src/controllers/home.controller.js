 const homePage = (req, res) => {
  res.render('home', {
    pageTitle: 'Mookie Assessment',
    year: new Date().getFullYear()
  })
}

export default homePage
