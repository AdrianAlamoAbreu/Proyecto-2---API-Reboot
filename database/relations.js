const User = require('../api/models/user.model')
const Book = require('../api/models/books.model')
const Publisher = require('../api/models/publisher.model')
const Comments = require('../api/models/comments.model')
const Pending_list = require('../api/models/pending_list.model')

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

    Pending_list.belongsToMany(Book, {through: 'List_books'})
    Book.belongsToMany(Pending_list, {through: 'List_books'})


    
    console.log('Relations added')
  } catch (error) {
    throw (error)
  }
}

module.exports = addRelations


