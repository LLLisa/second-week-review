const conn = require('./conn');
const { User, School, dbSeed } = require('./models');

User.belongsTo(School);
School.hasMany(User);

User.belongsToMany(User, { through: 'classmates', as: 'classMate' });

module.exports = { conn, User, School, dbSeed };
