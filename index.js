const { MongoClient } = require('mongodb');
const mongoString = "mongodb+srv://sebaskiba11:1234@pierwszadbmongo.kywosci.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(mongoString);
let maximumNumberOfResults = Number.MAX_SAFE_INTEGER

async function main() {

    try {
        await client.connect();
        await listDB(client);
    } catch(error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

async function listDB(client) {
    const myDB = client.db("sample_airbnb").collection("listingsAndReviews")
    cursor = myDB.find(
        {
            bedrooms : 1
        }
    ).limit(maximumNumberOfResults);
    const results = await cursor.toArray();
    results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();
        console.log(`_id:${result._id} ${result.name}`);

    })

    
    
    



    
}

main();
