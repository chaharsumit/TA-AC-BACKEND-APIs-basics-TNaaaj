let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let stateSchema = new Schema({
  name: String,
  country: { type: Schema.Types.ObjectId, ref: "Country"},
  population: Number,
  area: String,
  neighbouring_states: [{type:Schema.Types.ObjectId, ref: "State"}]
}, { timestamps: true });

stateSchema.index({ name: 1 });
stateSchema.index({ name: -1 });

stateSchema.index({ population: 1 });

let State = mongoose.model('State', stateSchema);

module.exports = State;