import React, {useState} from "react";
import './Home.css';
import Video from "./Video";
import VideoData from './Videos.json';

const Home = ()=> {

    const categoryData = ["All", "Gaming", "C++", "HTML", "JavaScript", "CSS", "Music", "Mixes", "Lives", "Comedy", "Programming", "Lofi Songs", "Nabil Syahnaufal"];

    const [category, setCategory] = useState("All");
    const {videos} = VideoData;
    const [onDisplay, setOnDisplay] = useState(videos);

    const handleCategory = (tag)=>{
        setCategory(tag)
        if(tag === "All")
        {
            setOnDisplay(videos)
            return
        }
        setOnDisplay(videos.filter((video)=> video.category === tag))
    }

    return (
        <>
           <div className="homeContainer" id='homeContainer'>
            <div className="categoryContainer">
                {categoryData.map((tab)=>{
                    return <h3 className={`categoryTab ${category === tab && 'active'}`} key={tab} onClick={()=> handleCategory(tab)}>{tab}</h3>
                })}
            </div>
            <div className="videoContainer">
               {onDisplay.map((video)=>{
                return <Video video={video} key={video.image}/>
               })}
            </div>
           </div>
        </>
    )
}

export default Home;