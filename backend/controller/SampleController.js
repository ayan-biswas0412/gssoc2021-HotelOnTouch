const SampleModel = require('../model/SampleModel');

const SampleController = {

    async all (req, res) {
        const data = await SampleModel.find();
        res.send(data)
    },

    async byId (req, res) {
        const data = await SampleModel.findById(req.params.id);
        res.send(data)
        
    },

    async create (req, res) {
        const newSampleModel = new SampleModel({
            title: req.body.title
        });
        await newSampleModel.save( (err, saved) => {
            if (err) res.send(err);

            res.send(saved)
        })
    },

    async update (req, res) {
        const data = await SampleModel.findByIdAndUpdate(
            req.params.id,
            { 
                title: req.body.title,
            },
            { new: true }
          );

          if (!data){
            return res
              .status(404)
              .send("Data with id not found");
          }
        
          res.send(data);
    },

    async remove (req, res) {
        const idParam = req.params.id;
        const data = await SampleModel.findByIdAndRemove(idParam);
        if (!data){
            return res
            .status(404)
            .send("Data with id not found");
        }

        res.send(data);
    }
};

module.exports = SampleController;