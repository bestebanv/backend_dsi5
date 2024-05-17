import { Sequelize } from 'sequelize';

const db = new Sequelize('dsi5','root','6w3ab22bd', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },

});

export default db;