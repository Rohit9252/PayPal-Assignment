const mongoose = require('mongoose');


const sprintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
},{
    timestamps: true
});

module.exports = mongoose.model('Sprint', sprintSchema);
