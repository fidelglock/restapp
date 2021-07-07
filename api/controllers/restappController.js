
const  Restapp = require("../models/restappModel");

// DEFINE CONTROLLER FUNCTIONS


exports.listAllRestapp = (req, res) => {
Restapp.find({}, (err, restapp) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(restapp);
});
};

// createNewTodo function - To create new todo
exports.createNewRestapp = (req, res) => {
let  newRestapp = new Restapp (req.body);
newRestapp.save((err, restapp) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(restapp);
});
};

// updateTodo function - To update todo status by id
exports.updateRestapp = (req, res) => {
Restapp.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, restapp) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(restapp);
});
};

// deleteTodo function - To delete todo by id
exports.deleteRestapp = async ( req, res) => {
await  Restapp.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Data successfully deleted"});
});
};