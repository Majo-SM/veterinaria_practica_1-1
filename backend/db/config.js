const { MongoClient, ServerApiVersion } = require("mongodb");

const dbConnection = async (collection) => {
    try {
        const client = new MongoClient(process.env['db'],  {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        console.log(`Base de datos ejecutándose sin problema`)
        return client.db('veterinaria').collection(collection)
    } catch (error) {
        console.log(error);
        throw new Error(`Base de datos no disponible`)
    }
}

module.exports = {
    dbConnection
}