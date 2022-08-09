import { firestore } from "./firestore";

const getProducts = async () => {
    const collectionRef = firestore.collection("products");
    const records = await collectionRef.get();
    const rawDocuments = records.docs;

    const cleanDocs = rawDocuments.map((rawDoc) => {
        return {
            ...rawDoc.data(),
            id: rawDoc.id,
        };
    });
    return cleanDocs;
};

export default getProducts;

export const getProductById = async (id) => {
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    const rawDoc = await docRef.get();
    return { id: rawDoc.id, ...rawDoc.data() };
};
