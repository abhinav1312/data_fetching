const express = require("express");
const UserDetail = require("./model/userDetail");
const router = express.Router();
const NodeCache = require("node-cache");
const client = new NodeCache({ stdTTL: 100, checkperiod: 120 });

router.get("/task1", async (req, res) => {
  const cacheKey = "task1";
	const page = req.query.page ? parseInt(req.query.page) : 1;
	const size =req.query.size? parseInt(req.query.size) : 10;
	const skip = (page-1)*size;
  const cachedData = await client.get(cacheKey);
  if (cachedData) {
    res.json(cachedData);
  } else {
    try {
      const task1Docs = await UserDetail.find({
        $and: [
          { income: { $lt: "$5" } },
          {
            $or: [{ car: "BMW" }, { car: "Mercedes" }],
          },
        ],
      }).skip(skip).limit(size);
      client.set(cacheKey, task1Docs);
      res.json(task1Docs);
    } catch (error) {
      console.log("Error occured while fetching task 1");
      console.log(error);
      res.status(500).json(null);
    }
  }
});

router.get("/task2", async (req, res) => {
  const cacheKey = "task2";
  const cachedData = await client.get(cacheKey);
  if (cachedData) {
    res.json(cachedData);
  } else {
    try {
      const task2Docs = await UserDetail.find({ phone_price: { $gt: 10000 } });
      res.json(task2Docs);
    } catch (error) {
			console.log("Error occured while fetching task 2");
      console.log(error);
      res.status(500).json(null);    }
  }
});

router.get("/task3", async (req, res) => {
  const cacheKey = "task3";
  const cachedData = await client.get(cacheKey);
  try {
    const task3Docs = await UserDetail.find({
      $and: [
        { last_name: { $regex: "^M" } },
        { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
      ],
    });
    res.json(task3Docs);
  } catch (error) {
    console.log("Error occured while fetching task 3");
      console.log(error);
      res.status(500).json(null);
  }
});

router.get("/task4", async (req, res) => {
  const cacheKey = "task3";
  const cachedData = await client.get(cacheKey);
  if (cachedData) {
    res.json(cachedData);
  } else {
    try {
      const task4Docs = await UserDetail.find({
        $and: [
          {
            $or: [{ car: "BMW", car: "Mercedes", car: "Audi" }],
          },
          {
            email: { $not: /\d/ },
          },
        ],
      });

      res.json(task4Docs);
    } catch (error) {
      console.log("Error occured while fetching task 4");
      console.log(error);
      res.status(500).json(null);
    }
  }
});

router.get("/task5", async (req, res) => {
  const cacheKey = "task3";
  const cachedData = await client.get(cacheKey);
  if (cachedData) {
    res.json(cachedData);
  } else {
    try {
      const task5Docs = await UserDetail.aggregate([
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
      ]);
			res.json(task5Docs);
    } catch (error) {
      console.log("Error occured while fetching task 5");
      console.log(error);
      res.status(500).json(null);
    }
  }
});

module.exports = router;
