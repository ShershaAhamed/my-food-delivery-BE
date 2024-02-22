import mongoose from 'mongoose';


// Connect to MongoDB
export const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://ukkasnaina99:50Y4XrsXMhHqge5d@projectk.yqods5s.mongodb.net/ProjectK?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};