const Crudmodel = require('../model/Model');

// Get
const getmet = async (req, res) => {
  try {
    const dataa = await Crudmodel.find()
    res.status(200).json(dataa);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
// Post
const postmet = async (req, res) => {
  try {
    const dataa = await Crudmodel.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    })
    res.status(200).json(dataa) 
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// put/update
const putmet = async (req, res) => {
  try {
    const itemId = req.params.id;
    const dataa = await Crudmodel.findById(itemId);

    if (!dataa) {
      return res.status(400).json({ message: `Invalid ID: ${itemId}` });
    }

    const updatedDataa = await Crudmodel.findByIdAndUpdate(
      itemId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedDataa);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};



// delete

const deletemet = async (req, res) => {
  try {
    const itemId = req.params.id;
    const dataa = await Crudmodel.findById(itemId);

    if (!dataa) {
      return res.status(400).json({ message: `Invalid ID: ${itemId}` });
    }

    await dataa.deleteOne() ;
    // await dataa.remove() ;
    res.status(200).json({ id: itemId });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { getmet, postmet, putmet, deletemet };