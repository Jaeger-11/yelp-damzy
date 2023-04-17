import { collection, onSnapshot, orderBy, query, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { cloudDB } from "../Database/config";
import { campgroundType } from "../Global/interface";

const getCampgrounds = () => {
    const [camps, setCamps] = useState<any>([]);
    const collectionRef = collection(cloudDB, 'campgrounds');
    const order = query(collectionRef, orderBy("name", "asc"));

    const getData = () => {
        onSnapshot(order, (snap) => {
            let documents:object[] = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id})
            });
            setCamps(documents);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return {camps};
} 

type campType = {
    name: string
    price: string
    imageUrl: string 
    description: string
    uid: string
}

const getCampground = (id: string) => {
    const [camp, setCamp] = useState<campType | any>();
    const docRef = doc(cloudDB, 'campgrounds', id)
    const docSnap = async () => {
        const info = await getDoc(docRef)
        if (info.exists()) {
            const data= info.data();
            setCamp(data)
            return {camp};
            } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        docSnap();
    }, [])
    
    return { ...camp }
}

export { getCampgrounds, getCampground }