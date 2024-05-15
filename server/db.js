const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURI =  "mongodb://root:MjA1MjItbW9zdGFm@127.0.0.1:27017";

const mongoURI = process.env.MONGO_URI;
const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI);
        console.info('Connected to Mongo Successfully')

        return;
    } catch (error) {
        console.error('Error connecting to MongoDB:',error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

module.exports = connectToMongo;