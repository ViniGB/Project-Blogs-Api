const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, { 
    timestamps: false
  });

  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, 
      { foreignKey: 'userId', as: 'user' });
  }

  return BlogPost;
}

module.exports = BlogPost;