export const appwriteConfig = {
    secretKey: process.env.NEXT_APPWRITE_KEY!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    projectId:  process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
    filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
};