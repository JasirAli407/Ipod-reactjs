  import React from "react";
  import Home from "./Home";
  import Games from "./Games";
  import Settings from "./Settings";
  import Music from "./Music";
  import Allsongs from "./Allsongs";
  import Albums from "./Albums";
  import Artists from "./Artists";



  class Screen extends  React.Component{
       render(){
          // console.log('screen', this.props)
        return(
            <div id='screen' style={style.screen} >
                 {/* <Home activeItem={this.props.activeItem}/> */}
                 {this.props.activePage === 'home'&& <Home activeItem={this.props.activeItem}/>}

                
                 {this.props.activePage === 'playingnow'&& <Allsongs playPause ={this.props.playPause} audio={this.props.audio}  />}

                 {this.props.activePage === 'music'&& <Music activeItem={this.props.activeItem}  />}
                    
                 {this.props.activePage === 'games'&& <Games/>}

                 {this.props.activePage === 'settings'&& <Settings/>}

                 {this.props.activePage === 'allsongs'&& <Allsongs playPause ={this.props.playPause} audio={this.props.audio}  />}

                 {this.props.activePage === 'artists'&& <Artists />}

                 {this.props.activePage === 'albums'&& <Albums />}


                 
                 
            </div>
        )
       }

  }

 const style =  {
    screen: {
    height: 250,
    width: '95%',
    marginTop: 10,
    backgroundImage: `url(https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600)`,
//     backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    border: '3px solid black',
    borderRadius: 10
}
 }

 export default Screen;