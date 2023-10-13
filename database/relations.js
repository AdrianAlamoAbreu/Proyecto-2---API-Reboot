const User = require('../api/models/user.model')
const Book = require('../api/models/books.model')
const Publisher = require('../api/models/publisher.model')
const Comments = require('../api/models/comments.model')

function addRelations() {
  try {
    User.hasMany(Comments)
    Comments.belongsTo(User)

    Comments.hasMany(Book)
    Book.belongsTo(Comments)

    Publisher.hasMany(Book)
    Book.belongsTo(Publisher)



    
    console.log('Relations added')
  } catch (error) {
    throw new Error (error)
  }
}

module.exports = addRelations


