var data = function() {
  return {
    companies: [
      {
        id: 1,
        name: 'Epic Labs inc.',
        employees: 12,
        location: 'Madrid',
        divisions: 4
      },
      {
        id: 2,
        name: 'Nice company inc.',
        employees: 4,
        location: 'London',
        divisions: 1
      },
      {
        id: 3,
        name: 'Regular company inc.',
        employees: 10,
        location: 'Paris',
        divisions: 2
      }
    ],
    divisions: [
      {
        id: 11,
        name: 'Research',
        employees: 3,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscin'
      },
      {
        id: 12,
        name: 'DevOps',
        employees: 5,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscin'
      },
      {
        id: 13,
        name: 'QA',
        employees: 1,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscin'
      }
    ]
  }
}

module.exports = data()
