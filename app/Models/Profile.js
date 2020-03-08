"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Profile extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  experience() {
    return this.hasOne("App/Models/Experience");
  }
}

module.exports = Profile;