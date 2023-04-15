import { collection, addDoc } from "firebase/firestore";
import { cloudDB } from "../Database/config";
import { campgroundType } from "../Global/interface"

const uploadCampData = async (data: object) => {
    const docRef = await addDoc(collection(cloudDB, 'campgrounds'), {
        data
    })
    console.log( " dOC REF ID IS " + docRef.id)
} 

export { uploadCampData }