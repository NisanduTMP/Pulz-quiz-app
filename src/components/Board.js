import React from "react";

export default function Board(){
    const data = [
        {
            id:1,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Secretary',
        },
        {
            id:2,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Vice President',
        },
        {
            id:3,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Secretary',
        },
        {
            id:4,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Treasurer',
        },
        {
            id:5,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Assistant Treasurer',
        },
        {
            id:6,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Assistant Treasurer',
        },{
            id:7,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Senior Member',
        },{
            id:8,
            image:'/img/logo1.png',
            name:'Jhon Doe',
            post:'Senior Member',
        }
    ]
    return(
        <div className="board">
            <div className="h-section">
                <h1 className="h">Board Of Officials</h1>
                <div className="h-underline"></div>
            </div>
            <div className="inner-board">
                <div className="president-section">
                    <img src="/img/logo1.png" className="president-section-img"/>
                    <h1 className="president-section-name">Ranil Wickramasinghe</h1>
                    <h2 className="president-section-post">President</h2>
                </div>
                <div className="top-board">
                    {data.map((post)=>(
                        <div className={post.post === 'Vice President' ? "board-member-section vice-president-section" : "board-member-section"} key={post.id}>
                            <img src={post.image} className="board-member-section-img"/>
                            <h1 className="board-member-section-name">{post.name}</h1>
                            <h2 className="board-member-section-post">{post.post}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}