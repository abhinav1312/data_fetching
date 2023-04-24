const taskObj = {
    task1 : {
      $and: [
        { income: { $lt: "$5" } },
        {
          $or: [{ car: "BMW" }, { car: "Mercedes" }],
        },
      ],
    },
    task2 : { phone_price: { $gt: 10000 } },
    task3 : {
      $and: [
        { last_name: { $regex: "^M" } },
        { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
      ],
    },
    task4 : {
      $and: [
        {
          $or: [{ car: "BMW", car: "Mercedes", car: "Audi" }],
        },
        {
          email: { $not: /\d/ },
        },
      ],
    },

    task5:   [
      {
        $group: {
          _id: "$city",
          userCount: { $sum: 1 },
          avgIncome: {
            $avg: {
              $toDouble: {
                $trim: { input: "$income", chars: "-+*#^()[]{}$%@!&?/" },
              },
            },
          },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]
  } 

  module.exports=taskObj;