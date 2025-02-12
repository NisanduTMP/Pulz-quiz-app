import React from "react";
import styles from '../components/admin.css'
import {data} from "../components/data"
export default function Admin(){
    const arr = data;
    const [d,setd] = React.useState(() => JSON.parse(localStorage.getItem("data")) || []);
    const [items,setItems] = React.useState([]);
    const [marked,setMarked] = React.useState([]);
    const [timerState,setTimerState] = React.useState(() => JSON.parse(localStorage.getItem("timerOn")) || 0);
    const [timer,setCrTimer] = React.useState(30);
    const [cr, setcr] = React.useState(() => JSON.parse(localStorage.getItem("current")) || 0);
    const [crState,setCrState] = React.useState(()=>JSON.parse(localStorage.getItem("currentState"))||0)
    

    // set problem count and set home pg also
    var firstRound = 6;
    var end = 12;


      React.useEffect(() => {
        const handleStorageChange = () => {
            setcr(JSON.parse(localStorage.getItem("current")) || 0);
            setCrState(JSON.parse(localStorage.getItem("currentState"))||0)
            setTimerState(JSON.parse(localStorage.getItem("timerOn")))
        };
    
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
      }, []);
    

    React.useEffect(()=>{
        const obj = arr.filter((ob)=>ob.id == cr);
        if(obj[0]){
            setCrTimer(obj[0].timers)
        }
        
    },[cr])
        

    const func1 = (id)=>{
        const arr = [];
        var isfk = 0;
        d.map((ob)=>{
            if(ob.id==id){
                var nb = ob;
                if(nb.isticked==1) isfk=1;
                nb.isticked = 1;
                arr.push(nb);
            }else{
                arr.push(ob);
            }
        })
        if(isfk) return;
        //tmf();
        setd(arr);
        localStorage.setItem("data",JSON.stringify(arr));
        setcr(id);
        localStorage.setItem("current",JSON.stringify(id));
        localStorage.setItem("canViewAns",JSON.stringify(0));
    }

    const func2 = ()=>{
        localStorage.setItem("current",JSON.stringify(0));
        localStorage.setItem("correctAns",JSON.stringify(-1));
        localStorage.setItem("timerOn",JSON.stringify(0));
        localStorage.setItem("timer",JSON.stringify(-1));
        localStorage.setItem("canViewAns",JSON.stringify(0));
        setcr(0);
    }

    const func3 = ()=>{
        const val = JSON.parse(localStorage.getItem("canViewAns"));
        const obj = d.filter((ob)=>ob.id == cr);
        const correctAns = obj[0].correct
        if(val==0&&typeof correctAns == "number") return;
        localStorage.setItem("canViewAns",JSON.stringify(1));
        console.log(correctAns);
        console.log(typeof correctAns)
        if(typeof correctAns == "number" || typeof correctAns == "string") localStorage.setItem("correctAns",JSON.stringify(correctAns))
    }

    const func5 = ()=>{
        localStorage.setItem("canViewAns",JSON.stringify(1));
    }

    const func4 = (id)=>{
        const obj = [];
        d.map((o)=>{
            if(o.id!=id){
                obj.push(o);
            }else{
                var val = o;
                val.isticked = 0;
                obj.push(val);
            }
        })
        setd(obj);
        localStorage.setItem("data",JSON.stringify(obj));
    }

    React.useState(()=>{
          const handleStorageChange1 = () => {
              setd(JSON.parse(localStorage.getItem("data")) || []);
              setTimerState(JSON.parse(localStorage.getItem("timerOn")))
          };
      
          window.addEventListener("storage", handleStorageChange1);
          return () => window.removeEventListener("storage", handleStorageChange1);
        },[])
    React.useEffect(()=>{
        const stuff = [];
        let slicedArr = d.slice(0,firstRound);
        if(crState==2){
           slicedArr = d.slice(firstRound,end);
        }
        slicedArr.map((de)=>{
            stuff.push(<button className="admin-buttons" onClick={()=>func1(de.id)}><h1>{de.id>firstRound ? de.id-firstRound : de.id} {de.isticked?"(c)":""}</h1></button>)
        })
        setItems(stuff)
        const its = [];
        slicedArr.map((ob)=>{
            if(ob.isticked==1){
                its.push(<button className="admin-buttons" onClick={()=>func4(ob.id)}><h1>{ob.id>firstRound ? ob.id-firstRound : ob.id}</h1></button>)
            }
        })
        setMarked(its);
    },[d,crState])

    const timerF = ()=>{
        localStorage.setItem("timerOn",JSON.stringify(1));
    }

    const timerFreeze = ()=>{
        localStorage.setItem("timerOn",JSON.stringify(0));
    }

    const resetTimer = ()=>{
        localStorage.setItem("timer",JSON.stringify(timer))
        //localStorage.setItem("timerOn",JSON.stringify(timerState?0:1));
    }

    const cl = ()=>{
        localStorage.setItem("timerOn",JSON.stringify(0));
        localStorage.setItem("timer",JSON.stringify(-1));
    }

    const setfr = (id)=>{
        localStorage.setItem("currentState",JSON.stringify(id))
        localStorage.setItem("current",JSON.stringify(0));
        localStorage.setItem("correctAns",JSON.stringify(-1));
        localStorage.setItem("timerOn",JSON.stringify(0));
        localStorage.setItem("timer",JSON.stringify(-1));
        localStorage.setItem("canViewAns",JSON.stringify(0));
        setCrState(id);
        setcr(0);
    }

    const gonext = (cr)=>{
        localStorage.setItem("correctAns",JSON.stringify(-1));
        localStorage.setItem("canViewAns",JSON.stringify(0));
        localStorage.setItem("timerOn",JSON.stringify(0));
        localStorage.setItem("timer",JSON.stringify(-1));
        if(cr<firstRound){
            func1(cr+1);
        }
    }

    const goinit = ()=>{
        localStorage.setItem("correctAns",JSON.stringify(-1));
        localStorage.setItem("timerOn",JSON.stringify(0));
        localStorage.setItem("timer",JSON.stringify(-1));
        localStorage.setItem("canViewAns",JSON.stringify(0));
    }

    const stopTimer = ()=>{
        localStorage.setItem("timerOn",JSON.stringify(100));
    }

    return(
        <>
            <div>
                <h1>Admin</h1>

                <h2>Current Round : {crState==0&&"First Round"} {crState==1&&"Second Round Banner"} {crState==2&&"Second Round"}</h2>
                
                <button onClick={()=>setfr(0)}  className={crState==0 ? "admin-buttons admin-yellow-btn":"admin-buttons"}>First Round</button>
                <button onClick={()=>setfr(2)} className={crState&&crState==2 ? "admin-buttons admin-yellow-btn":"admin-buttons"}>Second Round</button>
                <button onClick={()=>setfr(1)} className={crState&&crState==1 ? "admin-buttons admin-yellow-btn":"admin-buttons"}>Banner</button>
                <hr/>
                {crState==0&&<hr className="admin-danger"/>}
                <div className="admin-extra-m">
                {items}
                </div>
                {crState==0&&<hr className="admin-danger"/>}

                {cr&&cr!=0?
                <>
                <h1>Current Problem : {cr} {crState==2&&<span>({cr-firstRound})</span>}</h1>

                <button onClick={()=>func5()} className="admin-buttons admin-green-btn">Show All Answers</button>
                <button onClick={()=>timerF()} className="admin-buttons admin-green-btn">Timer On</button>
                <button onClick={()=>func3()} className="admin-buttons admin-green-btn">Show Correct Answer</button>
                <p>
                <button onClick={()=>stopTimer()} className="admin-buttons">Stop Timer</button>
                <button onClick={()=>timerFreeze()} className="admin-buttons">Freeze</button>
                <button onClick={()=>resetTimer()} className="admin-buttons">ResetTimer</button>
                </p>
                {crState==2&&<button onClick={()=>func2()} className="admin-buttons admin-blue-btn">Back</button>}
                {crState==0&&<button onClick={()=>gonext(cr)} className="admin-buttons admin-blue-btn">Next</button>}
                
                
                </>
                :<></>}
                {crState==2&&<button onClick={()=>cl()} className="admin-buttons admin-red-btn">Clear</button>}
                {crState==0&&<button onClick={()=>goinit()} className="admin-buttons admin-red-btn">Init</button>}
                <h1>UnMark</h1>
                {marked}
                
            </div>
        </>
    )
}