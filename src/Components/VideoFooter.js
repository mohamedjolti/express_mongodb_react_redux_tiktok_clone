import React from 'react'
import  "../ComponentsSyles/VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
export default function VideoFooter() {
    return (
        <div className="video__footer">
             <div className="video__footer_text">
                <h3>@jolti</h3>
                <p>this is a description</p>
                <div className="video__footer_tiker">
                            <MusicNoteIcon/>

                            <Ticker mode="smooth">
                            { ({index})=>(
                                <>
                                    <p> this is a video ,Video caption </p>
                                </>
                            )
                            

                            }
                            </Ticker>
                </div>
         
             </div>
             <img
             className="video__footer_record"
             src="https://static.thenounproject.com/png/934821-200.png" alt=""
             />
        </div>
    )
}
