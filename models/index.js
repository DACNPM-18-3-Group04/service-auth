/**
 * REQUIRE MODELS FROM THIS
 */
const User = require('./user.model');
const Property = require('./property.model');
const { District, Province } = require('./propertyLocation');
const Contact = require('./contact.model');
const Review = require('./review.model');
const UserWishlist = require('./userwishlist.model');

// Setting up relationships

// Property.belongsTo(District, {
//   foreignKey: 'district_id',
// });
// Property.belongsTo(User, {
//   foreignKey: 'author_id',
// });

// Review.belongsTo(Contact, {
//   foreignKey: 'contact_id',
// });
// Contact.hasOne(Review, {
//   foreignKey: 'contact_id',
// });

Contact.belongsTo(User, {
  foreignKey: 'contact_user',
});

// Contact.belongsTo(Property, {
//   foreignKey: 'property_id',
//   constraints: false,
// });
// Property.hasMany(Contact, {
//   foreignKey: 'property_id',
//   constraints: false,
// });

// UserWishlist.belongsTo(User, {
//   foreignKey: 'user_id',
//   constraints: false,
// });
// UserWishlist.belongsTo(Property, {
//   foreignKey: 'property_id',
//   constraints: false,
// });
// Property.hasMany(UserWishlist, {
//   foreignKey: 'property_id',
//   constraints: false,
// });

// Setting up relationships

module.exports = {
  User,
  Property,
  District,
  Province,
  Contact,
  Review,
  UserWishlist,
};
