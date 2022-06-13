const { Pizza } = require('../models');

const pizzaController = {
    //get all pizzas
    getAllPizza(req, res){
        Pizza.find({})
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
        },

    // get one pizza by ID
    getPizzaById({ params }, res) {
        Pizza.findOne({_id: params.id })
            .then(dbPizzaData => {
                //If no pizza is found, send 404
                if (!dbPizzaData){
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }   
                res.json(dbPizzaData);
             })
            .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    // createPizza
    createPizza({ body }, res) {
        Pizza.create(body)
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => res.status(400).json(err));
    },

    //update pizza by ID
    updatePizza({ params, body }, res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
        //by setting the parameter to true, we're instructing Mongoose to return the new version of the document
            .then(dbPizzaData => {
                if(!dbPizzaData){
                    res.status(404).json({ message: 'No pizza found with this id'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    },

    // deletePizza
    deletePizza({ params }, res){
        Pizza.findOneandDelete({ _id: params.id })
            .then(dbPizzaData => {
                if(!dbPizzaData){
                    res.status(404).json({ message: 'No pizza found with this id'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = pizzaController;