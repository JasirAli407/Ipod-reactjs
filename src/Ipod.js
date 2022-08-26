import React from "react";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import song from './static/songs/jupiter.mp3'

// console.log(song)

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "playingnow",
      activePage: "home",
      isPlaying: false
    };
  }

  playPause = ()=>{

    
    if(this.state.isPlaying){
       this.state.audio.pause()

       document.querySelector('.play-pause-btn').classList.remove('fas' ,'fa-pause');

       document.querySelector('.play-pause-btn').classList.add('fas' ,'fa-play');
    }else{
      this.state.audio.play();
     
      document.querySelector('.play-pause-btn').classList.remove('fas' ,'fa-play');
      document.querySelector('.play-pause-btn').classList.add('fas', 'fa-pause')

    }
    this.setState({
      isPlaying: !this.state.isPlaying
    })
   
  }

  rotate = () => {
    let currentAngle = 0;
    let change = 0;

    const target = document.getElementById("inner-container");
    const region = new ZingTouch.Region(target);

    region.bind(target, "rotate", (e) => {
      currentAngle = e.detail.distanceFromLast;     

      if (currentAngle > 0) {
        change++;
        if (change === 70) {
          change = 0;

          if (this.state.activePage === "home") {
            if (this.state.activeItem === "playingnow") {
              this.setState({ activeItem: "music" });
            } else if (this.state.activeItem === "music") {
              this.setState({ activeItem: "games" });
            } else if (this.state.activeItem === "games") {
              this.setState({ activeItem: "settings" });
            } else if (this.state.activeItem === "settings") {
              this.setState({ activeItem: "playingnow" });
            }
          }

          else if(this.state.activePage === 'music'){
                
              if(this.state.activeItem === 'allsongs'){
                this.setState({
                  activeItem: 'artists'
                })
              }
              else if(this.state.activeItem === 'artists'){
                this.setState({
                  activeItem: 'albums'
                })
              }
              
              else if(this.state.activeItem === 'albums'){
                this.setState({
                  activeItem: 'allsongs'
                })
              }  
          }
        }
      } else {
        change++;
        if (change === 70) {
          change = 0;
          if (this.state.activePage === "home") {
            if (this.state.activeItem === "playingnow") {
              this.setState({ activeItem: "settings" });
            } else if (this.state.activeItem === "music") {
              this.setState({ activeItem: "playingnow" });
            } else if (this.state.activeItem === "games") {
              this.setState({ activeItem: "music" });
            } else if (this.state.activeItem === "settings") {
              this.setState({ activeItem: "games" });
            }
          } else if (this.state.activePage === "music") {


            if(this.state.activeItem === 'allsongs'){
              this.setState({
                activeItem: 'albums'
              })
            }
            else if(this.state.activeItem === 'artists'){
              this.setState({
                activeItem: 'allsongs'
              })
            }
            
            else if(this.state.activeItem === 'albums'){
              this.setState({
                activeItem: 'artists'
              })
            }  

          }
        }
      }
    });
  };

  goTo = () => {

    if (this.state.activeItem === "music") {
      this.setState(
        {
          activeItem: "allsongs",
          activePage: 'music'
        },
        () => {
          // console.log(this.state.activePage);
        }
      );
    }
    
    else{
      this.setState(
        {
          activePage: this.state.activeItem
        },
        () => {
          // console.log(this.state.activePage);
        }
        );
    }

   
  };

  goBack = () => {
    if (this.state.activePage === "playingnow" ||
      this.state.activePage === "music" ||
      this.state.activePage === "games" ||
      this.state.activePage === "settings"
    ) {
      this.setState({
        activePage: "home",
        activeItem: 'playingnow'
      });
    }
    else if(this.state.activePage === 'allsongs' || this.state.activePage === 'albums'  || this.state.activePage === 'artists'){
      
      this.setState({
        activePage: 'music',
        activeItem: 'allsongs'
      })
    }
    


  };

  componentDidMount(){
    const audio = document.querySelector('.audio-element')
    // console.log(audio);

    this.setState({
      audio
    },()=>{
      // console.log(this.state);
    })

    

    
  }

  render() {


    return (
      <div id="ipod-container" style={style.ipodContainer}>

                    <audio className="audio-element">
                        <source src={song}></source>
                    </audio>                   
                    
        <Screen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
         playPause={this.playPause} audio={this.state.audio}
         
        />

        <div id="inner-container" style={style.wheel} onMouseOver={this.rotate}>
          <div
            className="button-container"
            style={style.buttonContainer}
            onClick={this.goBack}
          >
            <div>
              <i className="fas fa-bars"></i>
            </div>
          </div>

          <div className="button-container" style={style.buttonContainer}>
            <div style={style.midButtonContainer}>
              <i className="fas fa-fast-backward"></i>
              <div
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: "50%",
                  background: "red",
                  boxShadow:'inset 0px 0px 30px black'
                }}
                onClick={this.goTo}
              ></div>
              <i className="fas fa-fast-forward"></i>
            </div>
          </div>

          <div className="button-container" style={style.buttonContainer}>
            <div onClick={this.state.activePage==='allsongs' || this.state.activePage==='playingnow' ?  this.playPause: null}>
              <i className="play-pause-btn fas fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  ipodContainer: {
    margin: "24px auto",
    height: 500,
    width: 270,
    // "#c8c8d7" ,
    background: 'red',
    boxShadow:'inset 0px 0px 40px #888887',
    display: "flex",
    alignItems : 'center',
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 20,
  },

  wheel: {
    height: 180,
    width: 180,
    borderRadius: "50%",
    background: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  midButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
};

export default Ipod;
