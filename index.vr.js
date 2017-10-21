import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VrButton,
  Text,
  View,
  Model,
  Animated
} from 'react-vr';
import { Easing } from 'react-native';
export default class homeVR extends React.Component {
  constructor() {
    super();

    this.state = {pano:"room.jpg"};
    
  }
  componentDidMount() {
   
  }


  render() {

    return (
      <View>
        <Pano source={asset(this.state.pano)}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>
         
   
        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'} }
        onClick={() => this.setState({pano: 'room.jpg'})}>
          <Text style={{fontSize: 0.2, textAlign: 'center',color: this.state.textColor}}>
          Room</Text>
        </VrButton>
        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}
        onClick={() => this.setState({pano: 'universe.jpg'})}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}
          >Universe</Text>
        </VrButton>
        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'violet'}}
        onClick={() => this.setState({pano: 'tajmahal.jpg'})}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}
          >Taj Mahal</Text>
        </VrButton>
        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}
        onClick={() => this.setState({pano: 'humayuntomb.jpg'})}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}
          >Humayun Tomb</Text>
        </VrButton>
        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}
        onClick={() => this.setState({pano: 'jamamasjid.jpg'})}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}  
          >Jama Masjid</Text>
        </VrButton>

       

  
      </View>

      </View>
    );
  }
};

AppRegistry.registerComponent('homeVR', () => homeVR);
