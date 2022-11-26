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
    // React.useEffect(()=>{
    //     if(data.length > 0){
    //         if(data.length > 10){
    //             const tempData = data.slice(0,10)
    //             setSelectedData(tempData)
    //         }else{
    //             const tempData = data.slice(0,data.length)
    //             setSelectedData(tempData)
    //         }
    //     }
    // },[data])
    React.useEffect(()=>{
        if(data.length > 0){
            if(data.length > 5){
                const tempData = data.slice(0,5)
                setSelectedData(tempData)
            }else{
                const tempData = data.slice(0,data.length)
                setSelectedData(tempData)
            }
        }
    },[data])
    function pagination(start,end){
        if(data.length > 0){
            if(data.length > end-1){
                const tempData = data.slice(start,end)
                setSelectedData(tempData)
                // console.log(tempData)
            }else{
                const tempData = data.slice(start,data.length)
                // console.log(tempData)
                setSelectedData(tempData)
            }
        }
    }
    return(
        <div>
            {/* <button onClick={()=>pagination(0,10)} style={{marginTop:100}}>1</button>
            <button onClick={()=>pagination(10,20)}>2</button> */}
            <button onClick={()=>pagination(0,5)} style={{marginTop:100}}>1</button>
            <button onClick={()=>pagination(5,10)}>2</button>
            <button onClick={()=>pagination(10,15)} style={{marginTop:100}}>3</button>
            <button onClick={()=>pagination(15,20)}>4</button>
            {selectedData.map((data)=>{
                return (
                    <div>{data.name}</div>
                )
            })}
        </div>
    )
}