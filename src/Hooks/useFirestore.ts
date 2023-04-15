import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { cloudDB } from "../Database/config";
import { campgroundType } from "../Global/interface"

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

export { getCampgrounds }