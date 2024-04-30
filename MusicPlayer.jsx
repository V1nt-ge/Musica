import React, { useState } from 'react';
import sound from "./assets/sound.mp3"

function MusicPlayer() {

    // const [musicDetails, setMusicDetails] = useState({
    //     songName: '',
    //     artistName: '',
    //     songSrc: '',
    //     songImage: '',
    // })

    const [audioProgress , setAudioProgress] = useState(0)

    const handleProgressbar = (e) => {
        setAudioProgress(e.target.value)
    }

    // const [audio , setAudio] = useState(0)

    // const currentAudio = useRef()

    // const handleAudioPlay = () => {
    //     if (currentAudio.current.paused){
    //         currentAudio.current.play();
    //     }else{
    //         currentAudio.current.pause();
    //     }
    // }

    function play () {
        new Audio(sound).play()
    }

    return (
        <div>
            <div className="bg-gray-100 p-4 flex justify-center items-center h-screen">
                {/* <audio src="https://youtu.be/cWT9AlCu3Bw" ref={currentAudio} ></audio> */}
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                {/* Album Cover */}
                <img src="https://telegra.ph/file/1e6773aaeeb8ab4d3faa1.jpg" alt="Time of my life, " className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50" />
                {/* Song Title */}
                <h2 className="text-xl font-semibold text-center">Time of my life</h2>
                {/* Artist Name */}
                <p className="text-gray-600 text-sm text-center">Nyashinski</p>
                {/* Music Controls */}
                <div className="mt-6 flex justify-center items-center">
                <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000" />
                        <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000" />
                    </g>
                    </svg>
                </button>
                <button onClick={()=>{play}} className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000" />
                        <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000" />
                    </g>
                    </svg>
                </button>
                <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                    <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000" />
                        <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000" />
                    </g>
                    </svg>
                </button>
                </div>
                {/* Progress Bar */}
                {/* <div className="mt-6 bg-gray-200 h-2 rounded-full">
                <div className="bg-teal-500 h-2 rounded-full w-1/2" />
                </div> */}

                <input className="w-full h-2.5 hue-rotate-[20deg] color mb-4 rounded-[5px];"  type="range" name='musicProgressBar' value={audioProgress} onChange={handleProgressbar} />

                {/* Time Information */}
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>0:00</span>
                <span>3:53</span>
                </div>
            </div>
            </div>

        </div>
    );
}

export default MusicPlayer;