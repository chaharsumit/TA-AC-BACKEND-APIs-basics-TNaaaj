let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let countrySchema = new Schema({
  name: String,
  states: { type: Schema.Types.ObjectId, ref: "State" },
  continent: String,
  population: Number,
  ethnicity: [String],
  neighbouring_countries: [{ type: Schema.Types.ObjectId, ref: "Country" }],
  area: String
}, { timestamps: true });

countrySchema.index({name: 1});
countrySchema.index({name: -1});


let Country = mongoose.model("Country", countrySchema);

module.exports = Country;