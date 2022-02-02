const {
  addBookHandler,
  getAllBookHandler,
  getSpecificBookHandler,
  editSpecificBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getSpecificBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editSpecificBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
