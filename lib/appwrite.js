import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aura",
  projectId: "67a78727001949c4b062",
  databaseId: "67a789440021aade0995",
  userCollectionId: "67a7898f000848b41627",
  videoCollectionId: "67a789b3003e4e54ec97",
  storageId: "67a78b0a0034e59c2b68",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
