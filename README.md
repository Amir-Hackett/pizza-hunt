## Pizza Hunt

### Description

*Pizza Hunt—a self-aware riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.*

### App Screenshot
![](public/assets/images/Screen-Shot.png)

### App Deployed to Heroku

[Deployed Link](https://vast-beach-16114.herokuapp.com/)

### Concepts Covered

- Used MongDB Atlas to host the database remotely.
- Created models with Mongoose.
- Used virtuals to extend the models' functionality.
- Created subschemas and subdocuments with Mongoose.
- Used IndexedDB to add offline functionality.
- Validated models to normalize data.

### Connecting to MongoDB

- In the root directory, run the following command

```text
mongod --dbpath=/Users/<username>/MongoData
```

- Create a MongoDB Atlas Account
- Create Production Database in Atlas
- Set Up the Environment Variable in Heroku
- Connect Production Database to App
- Deploy to Heroku
