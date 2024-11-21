package br.aragraph;


import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.springframework.boot.CommandLineRunner;
import org.bson.Document;
import org.springframework.stereotype.Component;


@Component
public class ConexaoMongo implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println("ola mundo");
        
        
        String connectionString = "mongodb+srv://Aragraph:aragraph2024@clusteraragraph.wnekp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAragraph";
        
        ServerApi serverApi = ServerApi.builder()
                .version(ServerApiVersion.V1)
                .build();
        
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString(connectionString))
                .serverApi(serverApi)
                .build();
       
        try (MongoClient mongoClient = MongoClients.create(settings)) {
            try {
                // Send a ping to confirm a successful connection
                MongoDatabase database = mongoClient.getDatabase("Aragraph");
                database.runCommand(new Document("ping",1));
                System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
            } catch (MongoException e) {
                e.printStackTrace();
            }
        }
        
    }
    
}
