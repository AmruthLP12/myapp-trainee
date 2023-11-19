const CheckedData = require('../models/checkedModel'); // Import the model

module.exports.saveCheckedData = async (req, res) => {
  try {
    const { checked, total } = req.body;

    const newData = new CheckedData({
      checked,
      total
    });

    await newData.save();

    res.json({message: 'Data saved successfully!'});

  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Error saving data'});
  }
}

module.exports.fetchCheckedData = async (req, res) => {
  try {
    // Fetch all documents from the 'checkeddatas' collection
    const data = await CheckedData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
};