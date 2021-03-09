const SampleModel = require('../model/SampleModel');

const SampleController = {

    all (req, res) {
        SampleModel.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        });
    },

    byId (req, res) {
        const idParam = req.params.id;
        SampleModel.findById(idParam)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        });
        
    },

    create (req, res) {
        const bodyTitle = req.body.title
        const newSampleModel = new SampleModel({
            title: bodyTitle
        });

        newSampleModel.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        });
    },

    update (req, res) {
        const bodyTitle = req.body.title
        const idParam = req.params.id;
        SampleModel.findByIdAndUpdate(
            idParam,
            { 
                title: bodyTitle,
            },
            { new: true }
          )
          .then(data => {
              res.send(data)
          })
          .catch(err => {
              res.send(err)
          })

    },

    remove (req, res) {
        const idParam = req.params.id;
        SampleModel.findByIdAndRemove(idParam)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        });
    }
};

module.exports = SampleController;