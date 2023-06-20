const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerkaufSchema = new Schema({
    schrauben_typ: { type: String, required: true, maxLength: 30 },
    produkt_id: { type: String, required: true, maxLength: 10 },
    verkaufsdatum: { type: Date },
    preis_pro_einheit: { type: Number },
    menge: {type: Number}
});

VerkaufSchema.virtual("gesamtpreis").get(function () {
    const gesamtpreis = this.menge * this.preis_pro_einheit;
    return gesamtpreis.toFixed(2);
});
  
VerkaufSchema.set('toObject', { virtuals: true });
VerkaufSchema.set('toJSON', { virtuals: true });

const Schraube = mongoose.model('Schraube', VerkaufSchema, 'schrauben');

module.exports = Schraube;
