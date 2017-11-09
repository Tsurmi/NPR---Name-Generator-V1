const mongoose = require('mongoose')

const HostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
})

HostSchema.methods.loadData = function (data) {
  this.name = data.name || this.name
  this.image = data.image || this.image
}

module.exports = mongoose.model('Host', HostSchema)
