const mongoose = require('mongoose');

process.env.MONGO_URI = 'mongodb://localhost/restaurantphotos';
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;
const photoSchema = new Schema({
  restaurantId: Number,
  name: String,
  photos: [String],
});

photoSchema.index({ restaurantId: 1 });

const Photo = mongoose.model('Photo', photoSchema);

const getPhotos = (id, callback) => {
  Photo.findOne({ restaurantId: id }).exec(callback);
};

const seedDatabase = async (records) => {
  await Photo.insertMany(records);
  await mongoose.connection.close();
  console.log('database seeded');
};

module.exports = {
  photoSchema,
  getPhotos,
  seedDatabase,
};
