const User = require('../api/models/user.model')
const Book = require('../api/models/books.model')
const Publisher = require('../api/models/publisher.model')
const Comments = require('../api/models/comments.model')
const Pending_list = require('../api/models/pending_list.model')

function addRelations() {
  try {
    //One to Many
    User.hasMany(Comments)
    Comments.belongsTo(User)

    Book.hasMany(Comments)
    Comments.belongsTo(Book)

    Publisher.hasMany(Book)
    Book.belongsTo(Publisher)

    //One to one
    User.hasOne(Pending_list)
    Pending_list.belongsTo(User)

    //Many to Many
    Pending_list.belongsToMany(Book, {through: 'List_books', timestamps: false})
    Book.belongsToMany(Pending_list, {through: 'List_books' ,timestamps: false})


    
    console.log('Relations added')
  } catch (error) {
    throw (error)
  }
}

module.exports = addRelations


