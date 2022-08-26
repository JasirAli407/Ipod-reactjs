import React from "react";
import img from './static/images/download.jpg'

// console.log(img);

class Allsongs extends React.Component {
  
  componentDidMount() {
    const { audio } = this.props;
       const progressBarInner = document.querySelector("#progress-bar-inner");

    const currTimeContainer = document.querySelector("#current-time");
    const durationContainer = document.querySelector("#duration");

    let sec,min, durSec, durMin;

    audio.addEventListener("timeupdate", () => {
      let currentTime = audio.currentTime;
    //    console.log(currentTime);
      let duration = audio.duration;

      progressBarInner.style.width = (currentTime / duration) * 100 + "%";
       
      sec =  Math.floor(currentTime % 60);
      min = Math.floor(currentTime/60);

      durSec = Math.floor(duration%60);
      durMin = Math.floor(duration/60)
      if( min<10) min ='0'+ min ;
      if( sec<10) sec ='0'+ sec ;
      if( durMin<10) durMin ='0'+ durMin ;
      if( durSec<10) durSec ='0'+ durSec ;



      currTimeContainer.textContent = min + ':' +  sec;
      durationContainer.innerHTML = durMin + ':'+ durSec;


      // if(s > prev)
    });
  }

  render() {
    //  console.log('allsongs',this.props)
    
    return (
      <div id="all-songs-container" style={style.allSongsContainer} >

        <div id="img-container" style={style.imgContainer}>
        <img style={{height:'100%',width: '100%'}}  src={img} alt="" />
        </div>


        <div id="song-details-box"
        style={style.songDetailBox}>
          <p className="song-title" 
          style={style.songTitle}>Jupiter Mazha...</p>

          <p className="singer" style= {style.singer}>Divya prakash, Dhyan</p>
        </div>

              <div id="progress-box" style={style.progressBox}>
          <span id="current-time">00:00</span>
          <div id="progress-bar-outer" style={style.progressBarOuter}>
            <div id="progress-bar-inner" style={style.progressBarInner}></div>
          </div>
          <span id="duration">00:00</span>
        </div>
      </div>
    );
  }
}

const style = {
    allSongsContainer: {
     width: '100%',
     height: '100%',
     background: 'white',
     position : 'relative',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius : 10
    },
    imgContainer:{
        width: '45%',
        height: '50%'
    },
    songDetailBox:{
      height: '45%',
      // width: '50%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      marginLeft: 3,
      alignItems: 'center',
      // background: 'violet'
    },
    songTitle: {
      margin:0,
      marginTop: 16,
     fontWeight: 700,
    //  background: 'yellow'
    },
    singer:{
      fontSize: 12,
      margin:0,
      marginTop: 10
    },    
  progressBox: {
    margin: 0,
    padding: 0,
   position: 'absolute',
    bottom: 20,
    display: "flex",
    width: "95%",
    height: 10,  
    alignItems: "center",
    background: "white",
    fontSize: 12
  },

  progressBarOuter: {
    margin: '0px 3px',
    display: "flex",
    width: "70%",
    height: 5,
    background: "grey",
    alignSelf:'flex-end',
  },

  progressBarInner: {
    // margin: 0,
    display: "flex",
    // width: '100%',
    height: "100%",
    background: "red",
  },
};

export default Allsongs;
