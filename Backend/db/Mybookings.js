const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  selectedPickupState: String,
  selectedPickupCity: String,
  selectedDropState: String,
  selectedDropCity: String,
  pickupdate: String,
  pickuptime: String,
  dropdate: String,
  droptime: String,
  drivername:String,
  fare:String,  
  carname:String,
cartype:String,
carno:String,
price:String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 userName:String,
  bookeddate:{
        type: String, // Store dates as strings
        default: () => new Date().toLocaleDateString('hi-IN') // Set the default value to the current date in "MM/DD/YYYY" format
  }
});

module.exports =mongoose.model('mybookings',rideSchema)
