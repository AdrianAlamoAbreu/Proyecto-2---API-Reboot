const User = require('../api/models/user.model')
const Book = require('../api/models/books.model')
const Publisher = require('../api/models/publisher.model')
const Comments = require('../api/models/comments.model')

function addRelations() {
  try {
    User.hasMany(Comments)
    Comments.belongsTo(User)

    Book.hasMany(Comments)
    Comments.belongsTo(Book)

    Publisher.hasMany(Book)
    Book.belongsTo(Publisher)

    User.hasOne(Pending_list)
    Pending_list.belongsTo(User)

    Book.hasMany(Pending_list)
    Pending_list.belongsTo(Book)

    


    
    console.log('Relations added')
  } catch (error) {
    throw new Error (error)
  }
}

module.exports = addRelations


