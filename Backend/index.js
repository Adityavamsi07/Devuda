const express = require("express");
const { SampleModel } = require("./db"); // Adjust the path as necessary
const { Transcation } = require("./model/transcation");
const app = express();
const port = 8000;

app.use(express.json()); // Middleware to parse JSON request body

// Route to insert data into MongoDB using Mongoose
app.post("/ni", async (req, res) => {
  console.log(req.body, "request body");
  try {
    // Create a new document using the Mongoose model
    const document = new SampleModel(req.body);

    // Save the document to the database
    const insertedDocument = await document.save();

    console.log("Inserted document:", insertedDocument);
    res.status(201).json(insertedDocument);
  } catch (error) {
    console.error("Error inserting document:", error);
    res.status(500).send(error.message);
  }
});

// Route to query the collection using Mongoose
app.get("/niabba", async (req, res) => {
  try {
    console.log('Attempting to find document with name "aditya"');
    const data = await SampleModel.findOne({  });
    console.log("Data found:", data);
    if (!data) {
      console.log('No document found with name "aditya"');
      return res.status(404).json({ message: "No document found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error querying the collection:", error);
    res.status(500).send(error.message);
  }
});

app.post("/insert", async (req, res) => {
  try {
    const newTransaction = await Transcation.create({ ...req.body });
    console.log(newTransaction, "insertedData");
    res.status(201).send(newTransaction);
  } catch (error) {
    console.log("error while creating new transcation");
    res.status(500).send("problem while inserting data");
  }
});

app.get("/transcation", async (req, res) => {
  try {
    const trancData = await Transcation.find({});
    console.log(trancData, "alldata");
    res.status(200).json({trancData});
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching transactions" });
  }
});

app.get("/niabba/getbyId/:id",async(req,res)=>{
    try {
    let {id}=req.params

    console.log(id);
    const data=await SampleModel
    } catch (error) {
        
    }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res.status(500).send(err.message || "Something went wrong");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
