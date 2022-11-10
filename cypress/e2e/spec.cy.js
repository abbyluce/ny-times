describe('App', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('Should visit the website', () => {
    cy.visit("http://localhost:3000/")
  })

  it('Should show a homepage with a title', () => {
    cy.get('h1').should('be.visible').contains('THE NEW YORK TIMES')
      .get('h2').contains('NEWS READER')
  })

  it('Should show article cards with images, titles, and dates', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GXrHkgN4AUFNAxV8WNGBvAqtN6VP9Oqw', {
          fixture: '/articles.json',
        }).as("articles")
      .get('h3').first().contains('The World’s Democracies Ask: Why Can’t America Fix Itself?')
      .get('.card-date').first().contains('11/08/2022')
      .get('.card-image').first().should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/11/04/world/00global-democracy-01/merlin_215989566_9889e6d9-7842-4b17-80ec-da3ab2fabf89-superJumbo.jpg')
  })
  
  it('Should show an error message if the response is not ok', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GXrHkgN4AUFNAxV8WNGBvAqtN6VP9Oqw'
      },
      {
        statusCode: 401,
        body: { 
          message: `Error 404. The data could not be fetched. Please reload and try again` 
        }
      })
  })
  
  it('Should be able to click on an article to view more details on a different page', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GXrHkgN4AUFNAxV8WNGBvAqtN6VP9Oqw', {
          fixture: '/articles.json',
        }).as("articles")
    .get('.card-image').first().click()
    .url().should("be.equal", 'http://localhost:3000/2022-11-08T07:10:06-05:00')
    .get('h4').contains('The World’s Democracies Ask: Why Can’t America Fix Itself?') 
    .get('.details-text').contains('Conversations across continents reveal alarm over the United States’ direction, as it slides away from ideals it once pressed other nations to adopt.')
    .get('.details-photo').should('have.attr', 'src').should('include', 'https://static01.nyt.com/images/2022/11/04/world/00global-democracy-01/merlin_215989566_9889e6d9-7842-4b17-80ec-da3ab2fabf89-superJumbo.jpg')
    .get('a').contains('View Full Article')
    .get('button').contains('RETURN HOME')
  })

  it('Should be able to sort the articles', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GXrHkgN4AUFNAxV8WNGBvAqtN6VP9Oqw', {
          fixture: '/articles.json',
        }).as("articles")
      .get('select').select('Sort Alphabetically')
      .get('button').click()
      .get('h3').first().contains('A few things are hard to find at the conference:')
  })
})