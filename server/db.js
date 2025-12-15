/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 15/12/2025 - 13:26:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/12/2025
    * - Author          : 
    * - Modification    : 
**/
import mongoose from 'mongoose';

const connectToDatabase = async () => {

    try {
        mongoose.set('strictQuery', false)
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    
        
    }

}


export default connectToDatabase;
