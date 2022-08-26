import React from 'react'
import { ListGroup } from "react-bootstrap"; 



class Home extends React.Component{

    render(){
        
        return(
          <div style={style.homeScreen}>
            
            <div style={style.menuList}>
                <div style={style.titleBar}>
                    <h2 style={{fontWeight:750}}>Ipod.js</h2>                    
                        
                </div>

                <ListGroup style={{marginTop:20, borderRadius: 0}}>
    
      <ListGroup.Item style = {{border: 0, padding: '5px 5px'}} className= {this.props.activeItem === 'playingnow'? 'active': ''}>Playing Now {this.props.activeItem === 'playingnow'&&  <span style={{float:'right', }}>&gt;</span>} </ListGroup.Item>

      <ListGroup.Item style = {{border: 0,  padding: '5px 5px'}}  className= {this.props.activeItem === 'music'? 'active': ''}>Music  {this.props.activeItem === 'music'&&  <span style={{float:'right', }}>&gt;</span>}</ListGroup.Item>

      <ListGroup.Item style = {{border: 0,  padding: '5px 5px'}}  className= {this.props.activeItem === 'games'? 'active': ''}>Games  {this.props.activeItem === 'games'&&  <span style={{float:'right', }}>&gt;</span>}</ListGroup.Item>

      <ListGroup.Item style = {{border: 0,  padding: '5px 5px'}}  className= {this.props.activeItem === 'settings'? 'active': ''}>Settings  {this.props.activeItem === 'settings'&&  <span style={{float:'right', }}>&gt;</span>}</ListGroup.Item>
    </ListGroup>
            </div>
          </div>  
        )
    }
}

const style = {
    homeScreen:{
         height: '100%',
         width: '100%',
         
         
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


export default Home;