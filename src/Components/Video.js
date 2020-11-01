
import React, { useRef,useState } from 'react'
import   "../ComponentsSyles/Video.css"
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
                src="https://v77.tiktokcdn.com/1682ec9c4e0c69ed2868a6226e333b04/5f9f3b94/video/tos/useast2a/tos-useast2a-pve-0068/1308bccc11444b2689381319199a6564/?a=1233&amp;br=3240&amp;bt=1620&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=20201101164940010188032168292B8217&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ajtpaWl1O2ZydjMzNzczM0ApPDllNjRkO2U0Nzk2NzhpZmcwZl80M2Q2ZW9fLS1eMTZzczVgXmEzXl8wY2ItL182YmM6Yw%3D%3D&amp;vl=&amp;vr=" webkit-playsinline="true" showingvideoindex="-1" playsinline="" loop="" ratiowidth="calc(0.56 * (400px + (100vw - 768px) / 1152 * 100))" ratioheight="calc(400px + (100vw - 768px) / 1152 * 100)" ></video>
                     <VideoFooter/>
                    {/* sidebar */}

                 <h1>Video </h1>
            </div>
        )
    
}
