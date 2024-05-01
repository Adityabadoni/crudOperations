import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

// Add Document to a Collection
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
    });

    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};
// Create a Document with DocId
export const createDocument = async (collectionName, docId, data) => {
  await setDoc(doc(db, collectionName, docId), {
    ...data,
  });
};
