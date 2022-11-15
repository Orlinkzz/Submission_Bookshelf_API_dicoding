const {
  tambahBuku,
  DapatkanSemuaBuku,
  DapakanBukuById,
  EditBukuById,
  HapusBukuById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: DapatkanSemuaBuku,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: DapakanBukuById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: EditBukuById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: HapusBukuById,
  },
];

module.exports = routes;