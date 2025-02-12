import React from "react";
import {data} from "./data"
export default function Comp(){
    const arr = data;
    const [d,setd] = React.useState(() => JSON.parse(localStorage.getItem("data")) || []);
    const [item,setIt] = React.useState();
    const [cans,setCans] = React.useState(0);
    const [cr, setcr] = React.useState(() => JSON.parse(localStorage.getItem("current")) || []);
    const v = JSON.parse(localStorage.getItem("correctAns"));
    const [correct,setCorrect] = React.useState(-1);
    const [timer,setTimer] = React.useState(-1);
    const [isTimerOn,setTimerOn] = React.useState(0);

    const [crState,setCrState] = React.useState(()=>JSON.parse(localStorage.getItem("currentState"))||0)

  React.useEffect(() => {
    const handleStorageChange = () => {
        setcr(JSON.parse(localStorage.getItem("current")) || []);
        setTimerOn(JSON.parse(localStorage.getItem("timerOn")))
        
        const val = JSON.parse(localStorage.getItem("canViewAns"));
        if(val==0||val==1)setCans(val);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  React.useEffect(() => {
    const handleStorageChange = () => {
        const val = JSON.parse(localStorage.getItem("correctAns"));
        if(val>0||val||typeof val != "number") setCorrect(val);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  
        React.useState(()=>{
          const handleStorageChange1 = () => {
              setd(JSON.parse(localStorage.getItem("data")) || []);
          };
      
          window.addEventListener("storage", handleStorageChange1);
          return () => window.removeEventListener("storage", handleStorageChange1);
        },[])


    React.useEffect(()=>{
        const it = data.find((d)=>d.id==cr);
        if(it){
            setIt(it);
            //setTimer(it.timers)
            localStorage.setItem("timer",JSON.stringify(it.timers));
        }
    },[cr])

    React.useEffect(() => {
        if(!isTimerOn) return;
        if(timer==0){
            setTimerOn(0);
            localStorage.setItem("timer",JSON.stringify(0));
            return;
        }
        const interval = setInterval(() => {
            if(!isTimerOn) return;
            if(timer<0) return;
            if(timer==0){
                setTimerOn(0);
                localStorage.setItem("timer",JSON.stringify(0));
                return;
            }
            localStorage.setItem("timer",JSON.stringify(timer));
            setTimer(timer - 1);
            console.log(timer);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    React.useEffect(() => {
        if(!isTimerOn) return;
        setTimer(JSON.parse(localStorage.getItem("timer")))
        if(isTimerOn==100) setTimer(0);
    }, [isTimerOn]);

    React.useEffect(()=>{
        console.log(correct);
        console.log(item);
    },[correct])

    React.useEffect(()=>{
        localStorage.setItem("timerOn",JSON.stringify(0));
    },[])
    
    return(
        <>{(cr&&cr!=0&&item)?<div>
           <h1>{item.problem}</h1>
           <h2>{timer>=0?timer:""}</h2>
           {item.img&& <img src={item.img} width="300" height={300}/>}
            {/* <h3>{d.ans1} {correct==1?"(correct)":""}</h3>
            <h3>{d.ans2} {correct==2?"(correct)":""}</h3>
            <h3>{d.ans3} {correct==3?"(correct)":""}</h3>
            <h3>{d.ans4} {correct==4?"(correct)":""}</h3> */}
            {cans == 1&&typeof item.correct == "number" ? <><h3>{item.ans1} {correct==1?"(correct)":""}</h3>
            <h3>{item.ans2} {correct==2?"(correct)":""}</h3>
            <h3>{item.ans3} {correct==3?"(correct)":""}</h3>
            <h3>{item.ans4} {correct==4?"(correct)":""}</h3></> : <></>}

            {cans==1&&typeof item.correct != "number" ? <>
                {correct!=-1?<h1>{correct}</h1>:<></>}
            </>:<></>}
        </div>:<div></div>}</>
    )
}