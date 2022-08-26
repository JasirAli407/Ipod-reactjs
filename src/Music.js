import React from "react";
import { ListGroup } from "react-bootstrap";

class Music extends React.Component{
    render(){
        // console.log('music', this.props)
        return(
            <div style={style.homeScreen}>
            
            <div style={style.menuList}>
                <div style={style.titleBar}>
                    <p style={{fontWeight:'bold', fontSize: 20, marginLeft: 9}}>
                       Music
                        </p>
                </div>

                <ListGroup style={{borderRadius: 0}}>
    
      <ListGroup.Item style = {{border: 0, padding: '5px 5px'}} className= {this.props.activeItem === 'allsongs'? 'active': ''}>All songs</ListGroup.Item>

      <ListGroup.Item style = {{border: 0,  padding: '5px 5px'}}  className= {this.props.activeItem === 'artists'? 'active': ''}>Artists</ListGroup.Item>

      <ListGroup.Item style = {{border: 0,  padding: '5px 5px'}}  className= {this.props.activeItem === 'albums'? 'active': ''}>Albums</ListGroup.Item>

     
    </ListGroup>
            </div>
          </div>  
        )
    }
}

const style = {
    homeScreen:{
         height: '100%',
         width: '100%'
    },
    menuList:{
        paddingLeft: 3,
        paddingTop: 10,
        width: '55%',
        height: '100%',
        background: 'white',
        borderRadius: '5px 0px 0px 5px'
    },
    titleBar:{
        paddingLeft: 9 ,
                       
    }
}

export default Music;