const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const CollectionName = 'banned_users';

const BannedUserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    }
  }, 
  { timestamps: true }
);

BannedUserSchema.plugin(mongooseDelete, {
  overrideMethods: 'all', 
  deletedAt: true
});

BannedUserSchema.index({ userId: 1, deletedAt: 1 }, { unique: true });

const BannedUser = mongoose.model(CollectionName, BannedUserSchema);

module.exports = BannedUser;
