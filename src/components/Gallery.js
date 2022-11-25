import React from 'react'
import { collection,addDoc,getDocs,getDoc,onSnapshot,query,where,deleteDoc,doc} from "firebase/firestore";
import {database} from '../firebaseConfig'

export default function Gallery({setIsLoading}){
    const [data,setData] = React.useState([])
    const [selectedData,setSelectedData] = React.useState([])
    const collectionRef = collection(database,'gallery')
    React.useEffect(()=>{
        setIsLoading(true)
        async function fetchData(){
            const data = await getDocs(collectionRef)
            const records = data.docs.map((item)=>{
                return {...item.data(),id:item.id}
            })
            setData(records)
        }
        fetchData()
        setIsLoading(false)
    },[0])
    React.useEffect(()=>{
        if(data.length > 0){
            if(data.length > 9){
                const tempData = data.slice(0,9)
                setSelectedData(tempData)
            }else{
                const tempData = data.slice(0,data.length)
                setSelectedData(tempData)
            }
        }
    },[data])
    return(
        <div>
            <button onClick={()=>console.log(selectedData)} style={{marginTop:100}}>Show</button>
        </div>
    )
}