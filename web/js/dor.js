var dormitorys = [
  {
    tower: 'A',
    rooms: [
      {
        room: 101,
        employee: ['Steven', 'Sebastian'],
        department: ['Human Resources'],
      },
      {
        room: 102,
        employee: ['Sarah'],
        department: ['IT'],
      },
      {
        room: 103,
        employee: ['Jennie'],
        department: ['Marketing'],
      },
      {
        room: 104,
        employee: ['Emily', 'Chris'],
        department: ['Finance'],
      },
      {
        room: 105,
        employee: ['Alex', 'Jordan'],
        department: ['Sales'],
      },
      {
        room: 201,
        employee: ['Michael', 'Olivia'],
        department: ['Operations'],
      },
      {
        room: 202,
        employee: ['Sophia', 'Liam'],
        department: ['Customer Service'],
      },
      {
        room: 203,
        employee: ['Emma'],
        department: ['Research and Development'],
      },
      {
        room: 204,
        employee: ['Ava', 'Mason'],
        department: ['IT'],
      },
      {
        room: 205,
        employee: ['Isabella', 'Ethan'],
        department: ['Human Resources'],
      },
      {
        room: 301,
        employee: ['Lucas', 'Mia'],
        department: ['Finance'],
      },
      {
        room: 302,
        employee: ['Harper'],
        department: ['Sales'],
      },
      {
        room: 303,
        employee: ['Evelyn', 'Jack'],
        department: ['Marketing'],
      },
      {
        room: 304,
        employee: ['Amelia', 'Henry'],
        department: ['Customer Service'],
      },
      {
        room: 401,
        employee: ['Abigail', 'Alexander'],
        department: ['Operations'],
      },
      {
        room: 501,
        employee: ['Ella', 'William'],
        department: ['Research and Development'],
      },
      {
        room: 502,
        employee: ['Charlotte', 'James'],
        department: ['IT'],
      },
      {
        room: 503,
        employee: ['Scarlett', 'Daniel'],
        department: ['Sales'],
      },
      {
        room: 504,
        employee: ['Lily', 'Matthew'],
        department: ['Finance'],
      },
      {
        room: 505,
        employee: ['David'],
        department: ['Human Resources'],
      },
    ],
  },
  {
    tower: 'B',
    rooms: [
      {
        room: 101,
        employee: ['Steven', 'Sebastian'],
        department: ['Marketing'],
      },
      {
        room: 102,
        employee: ['Sarah'],
        department: ['Finance'],
      },
      {
        room: 103,
        employee: ['Jennie'],
        department: ['Sales'],
      },
      {
        room: 104,
        employee: ['Emily', 'Chris'],
        department: ['Customer Service'],
      },
      {
        room: 105,
        employee: ['Alex', 'Jordan'],
        department: ['Operations'],
      },
      {
        room: 201,
        employee: ['Michael', 'Olivia'],
        department: ['Research and Development'],
      },
      {
        room: 202,
        employee: ['Sophia', 'Liam'],
        department: ['IT'],
      },
      {
        room: 203,
        employee: ['Emma'],
        department: ['Human Resources'],
      },
      {
        room: 204,
        employee: ['Ava', 'Mason'],
        department: ['Finance'],
      },
      {
        room: 205,
        employee: ['Isabella', 'Ethan'],
        department: ['Sales'],
      },
      {
        room: 301,
        employee: ['Lucas', 'Mia'],
        department: ['Marketing'],
      },
      {
        room: 302,
        employee: ['Harper'],
        department: ['Customer Service'],
      },
      {
        room: 303,
        employee: ['Evelyn', 'Jack'],
        department: ['Operations'],
      },
      {
        room: 304,
        employee: ['Amelia', 'Henry'],
        department: ['Research and Development'],
      },
      {
        room: 405,
        employee: ['Abigail', 'Alexander'],
        department: ['IT'],
      },
      {
        room: 501,
        employee: ['Ella', 'William'],
        department: ['Human Resources'],
      },
      {
        room: 502,
        employee: ['Charlotte', 'James'],
        department: ['Finance'],
      },
      {
        room: 503,
        employee: ['Scarlett', 'Daniel'],
        department: ['Sales'],
      },
      {
        room: 504,
        employee: ['Lily', 'Matthew'],
        department: ['Marketing'],
      },
      {
        room: 505,
        employee: ['David'],
        department: ['Customer Service'],
      },
    ],
  },
];

var tower = document.querySelector('.selector_select');
tower.addEventListener('change', function () {
  var selectedTower = tower.value;
  var table = document.querySelector('.outer_table');
  table.innerHTML = '';
  switch (selectedTower) {
    case 'A': // tower A
      var rooms = dormitorys[0].rooms;
      drawDormitory(rooms, 'outer_table');
      break;
    case 'B': // tower B
      var rooms = dormitorys[1].rooms;
      drawDormitory(rooms, 'outer_table');
      break;
    default:
      console.log('no data');
      break;
  }
});
