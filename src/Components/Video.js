
import React, { useRef,useState } from 'react'
import   "../ComponentsStyles/Video.css"
import VideoFooter from './VideoFooter'
export default function Video (){
         const [play,setPlay]=useState(false)
         const Videoref=useRef(null) 
         const videoPress=()=>{
            if(play){
                Videoref.current.pause()
                setPlay(false)
                
            } else{
                Videoref.current.play()
                setPlay(true)
            }
        }

        return (
            <div className="video">
                <video className="video__player" onClick={videoPress}  ref={Videoref} loop  
                src="https://v77.tiktokcdn.com/a5a7ffb75dd053f9d9c586e88afbb328/5fa33566/video/tos/useast2a/tos-useast2a-pve-0068/1308bccc11444b2689381319199a6564/?a=1233&br=3240&bt=1620&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202011041712220101890651580D059A8A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajtpaWl1O2ZydjMzNzczM0ApPDllNjRkO2U0Nzk2NzhpZmcwZl80M2Q2ZW9fLS1eMTZzczVgXmEzXl8wY2ItL182YmM6Yw%3D%3D&vl=&vr=" ></video>
                     <VideoFooter/>
                    {/* sidebar */}

            </div>
        )
    
}
