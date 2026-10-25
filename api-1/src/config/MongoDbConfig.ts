import mongoose from 'mongoose';
import { MongoDBConfig } from './AppConfig';

(async () => {
   try{
    await mongoose.connect(MongoDBConfig.url, {
        autoCreate: true,
        autoIndex: true
    });
    console.log("************** MONGODB Connected Successfully **************");
   }catch(exception){
    console.log("********************************************");
    console.log(exception);
    console.log("*********** MongoDB Connection Error ***********");
    process.exit(1);
   }
})()