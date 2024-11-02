var dormitorys = [
  {
    tower: "A",
    rooms: [
      {
        room: 101,
        employee: ["Steven", "Sebastian"],
        department: ["Human Resources"],
      },
      {
        room: 102,
        employee: ["Sarah"],
        department: ["IT"],
      },
      {
        room: 103,
        employee: ["Jennie"],
        department: ["Marketing"],
      },
      {
        room: 104,
        employee: ["Emily", "Chris"],
        department: ["Finance"],
      },
      {
        room: 105,
        employee: ["Alex", "Jordan"],
        department: ["Sales"],
      },
      {
        room: 201,
        employee: ["Michael", "Olivia"],
        department: ["Operations"],
      },
      {
        room: 202,
        employee: ["Sophia", "Liam"],
        department: ["Customer Service"],
      },
      {
        room: 203,
        employee: ["Emma"],
        department: ["Research and Development"],
      },
      {
        room: 204,
        employee: ["Ava", "Mason"],
        department: ["IT"],
      },
      {
        room: 205,
        employee: ["Isabella", "Ethan"],
        department: ["Human Resources"],
      },
      {
        room: 301,
        employee: ["Lucas", "Mia"],
        department: ["Finance"],
      },
      {
        room: 302,
        employee: ["Harper"],
        department: ["Sales"],
      },
      {
        room: 303,
        employee: ["Evelyn", "Jack"],
        department: ["Marketing"],
      },
      {
        room: 304,
        employee: ["Amelia", "Henry"],
        department: ["Customer Service"],
      },
      {
        room: 401,
        employee: ["Abigail", "Alexander"],
        department: ["Operations"],
      },
      {
        room: 501,
        employee: ["Ella", "William"],
        department: ["Research and Development"],
      },
      {
        room: 502,
        employee: ["Charlotte", "James"],
        department: ["IT"],
      },
      {
        room: 503,
        employee: ["Scarlett", "Daniel"],
        department: ["Sales"],
      },
      {
        room: 504,
        employee: ["Lily", "Matthew"],
        department: ["Finance"],
      },
      {
        room: 505,
        employee: ["David"],
        department: ["Human Resources"],
      },
    ],
  },
  {
    tower: "B",
    rooms: [
      {
        room: 101,
        employee: ["Steven", "Sebastian"],
        department: ["Marketing"],
      },
      {
        room: 102,
        employee: ["Sarah"],
        department: ["Finance"],
      },
      {
        room: 103,
        employee: ["Jennie"],
        department: ["Sales"],
      },
      {
        room: 104,
        employee: ["Emily", "Chris"],
        department: ["Customer Service"],
      },
      {
        room: 105,
        employee: ["Alex", "Jordan"],
        department: ["Operations"],
      },
      {
        room: 201,
        employee: ["Michael", "Olivia"],
        department: ["Research and Development"],
      },
      {
        room: 202,
        employee: ["Sophia", "Liam"],
        department: ["IT"],
      },
      {
        room: 203,
        employee: ["Emma"],
        department: ["Human Resources"],
      },
      {
        room: 204,
        employee: ["Ava", "Mason"],
        department: ["Finance"],
      },
      {
        room: 205,
        employee: ["Isabella", "Ethan"],
        department: ["Sales"],
      },
      {
        room: 301,
        employee: ["Lucas", "Mia"],
        department: ["Marketing"],
      },
      {
        room: 302,
        employee: ["Harper"],
        department: ["Customer Service"],
      },
      {
        room: 303,
        employee: ["Evelyn", "Jack"],
        department: ["Operations"],
      },
      {
        room: 304,
        employee: ["Amelia", "Henry"],
        department: ["Research and Development"],
      },
      {
        room: 405,
        employee: ["Abigail", "Alexander"],
        department: ["IT"],
      },
      {
        room: 501,
        employee: ["Ella", "William"],
        department: ["Human Resources"],
      },
      {
        room: 502,
        employee: ["Charlotte", "James"],
        department: ["Finance"],
      },
      {
        room: 503,
        employee: ["Scarlett", "Daniel"],
        department: ["Sales"],
      },
      {
        room: 504,
        employee: ["Lily", "Matthew"],
        department: ["Marketing"],
      },
      {
        room: 505,
        employee: ["David"],
        department: ["Customer Service"],
      },
    ],
  },
];

var tower = document.querySelector(".selector_select");
tower.addEventListener("change", function () {
  var selectedTower = tower.value;
  var table = document.querySelector(".outer_table");
  table.innerHTML = "";
  switch (selectedTower) {
    case "A": // tower A
      // room array of tower A
      var rooms = dormitorys[0].rooms;
      // floor number and its number of rooms ({1: 5, 2: 5, 3: 4, 4: 1, 5: 5})
      var floorAndRoom = checkFloor(rooms);
      // create row and td(room) for each row
      var floorLength = Object.keys(floorAndRoom).length;

      for (var i = 0; i < floorLength; i++) {
        var row = table.insertRow();
        row.classList.add("outer_table_row");

        var currentFloor = Object.keys(floorAndRoom)[i]; // current floor
        var tdLength = floorAndRoom[currentFloor]; // room for each floor

        // for-loop up to number of rooms
        for (var j = 0; j < tdLength; j++) {
          // ex ) 1st floor => 101 102 103
          var roomNumber = parseInt(currentFloor) * 100 + (j + 1);

          // find room info
          var roomInfo = rooms.find((room) => room.room === roomNumber);

          // if there's a room
          if (roomInfo) {
            // create td and table and present data
            var td = row.insertCell();
            td.classList.add("outer_table_row_td");
            var innerTable = document.createElement("table");
            innerTable.classList.add("inner_table");
            td.appendChild(innerTable);

            // give room infos
            var room_row = innerTable.insertRow();
            var room_td = room_row.insertCell();
            room_td.textContent = roomInfo.room;

            var employee_row = innerTable.insertRow();
            var employee_td = employee_row.insertCell();
            employee_td.textContent = roomInfo.employee.join(", ");

            var department_row = innerTable.insertRow();
            var department_td = department_row.insertCell();
            department_td.textContent = roomInfo.department.join(", ");
          }
        }
      }

      break;
    case "B": // tower B
      break;
    default:
      console.log("no data");
      break;
  }
});

function checkFloor(rooms) {
  var roomCountByFloor = {};
  rooms.forEach((roomData) => {
    var floor = Math.floor(roomData.room / 100); // floor
    // if floor appears first, initialize it
    if (!roomCountByFloor[floor]) {
      roomCountByFloor[floor] = 0;
    }
    roomCountByFloor[floor]++;
  });
  return roomCountByFloor; // contains floor with number of its rooms, ({1: 5, 2: 5, 3: 4, 4: 1, 5: 5})
}
