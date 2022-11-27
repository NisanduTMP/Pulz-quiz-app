import React from 'react'
import { collection,addDoc,getDocs,getDoc,onSnapshot,query,where,deleteDoc,doc} from "firebase/firestore";
import {database} from '../firebaseConfig'
import {Link, useNavigate} from 'react-router-dom'

export default function Gallery({setIsLoading}){
    const [data,setData] = React.useState([])
    const [selectedData,setSelectedData] = React.useState([])
    const [currentPagination,setCurrentPagination] = React.useState(1)
    const collectionRef = collection(database,'gallery')
    const navigate = useNavigate()
    React.useEffect(()=>{
        setIsLoading(true)
        async function fetchData(){
            const data = await getDocs(collectionRef)
            const records = data.docs.map((item)=>{
                return {...item.data(),id:item.id}
            })
            setData(records)
            if(!records){
                navigate('/')
            }
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
                const tempData = data.slice(0,10)
                setSelectedData(tempData)
            }else{
                const tempData = data.slice(0,data.length)
                setSelectedData(tempData)
            }
        }
    },[data])
    
    function pagination(start,end,number){
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
            setCurrentPagination(number)
            navigate('#gallery')
        }
    }
    return(
        <div id="gallery">
            <div className='gallery-section'>
                {/* <button onClick={()=>pagination(0,10)} style={{marginTop:100}}>1</button>
                <button onClick={()=>pagination(10,20)}>2</button> */}
                <div className="h-section">
                    <h1 className="h">Gallery</h1>
                    <div className="h-underline"></div>
                </div>
                <div className='gallery-inner'>
                    {selectedData.map((data)=>{
                        return (
                            <div className='gallery-inner-card'>
                                <div className='gallery-inner-card-image'>
                                    <img src={data.image} className="gallery-inner-card-image-img"/>
                                </div>
                                <div className='gallery-inner-card-texts'>
                                    <h1 className='gallery-inner-card-texts-h1'>{data.name}</h1>
                                    <h3 className='gallery-inner-card-texts-h3'>{data.grade}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='gallery-pagination-buttons'>                    
                    {data.length > 0 ? <a href='#gallery' onClick={()=>pagination(0,10,1)} className={currentPagination === 1? "active-pagination gallery-pagination-button":"gallery-pagination-button"}>1</a> : ""}
                    {data.length > 10 ? <a href="#gallery" onClick={()=>pagination(10,20,2)} className={currentPagination === 2? "active-pagination gallery-pagination-button":"gallery-pagination-button"}>2</a> : ""}
                    {data.length > 20 ? <a href='#gallery' onClick={()=>pagination(20,30,3)} className={currentPagination === 3? "active-pagination gallery-pagination-button":"gallery-pagination-button"}>3</a> : ""}
                    {data.length > 30 ? <a href="#gallery" onClick={()=>pagination(30,40,4)} className={currentPagination === 4? "active-pagination gallery-pagination-button":"gallery-pagination-button"}>4</a> : ""}
                </div>
            </div>
        </div>
    )
}