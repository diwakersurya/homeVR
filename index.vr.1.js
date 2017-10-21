import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated
} from 'react-vr';
import { Easing } from 'react-native';
export default class homeVR extends React.Component {
  constructor() {
    super();

    this.state = {textColor: 'white',bounceValue: new Animated.Value(0),spin: new Animated.Value(0)};
    
  }
  componentDidMount() {
    // this.state.bounceValue.setValue(1.5);     // Start large
    // Animated.spring(                          // Base: spring, decay, timing
    //   this.state.bounceValue,                 // Animate `bounceValue`
    //   {
    //     toValue: 0.8,                         // Animate to smaller size
    //     friction: 1,                          // Bouncier spring
    //   }
    // ).start();   
    
    this.spinAnimation();
  }

  spinAnimation=()=> {
    console.log("starting animation.")
   // this.setState({spin:0})
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
       toValue: 1,
       duration: 3000,
       easing: Easing.linear
      }
    ).start(() => this.spinAnimation());
  }
  render() {

    const AnimatedModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset('room.jpg')}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>
         <AnimatedModel
         wireframe={false}
    source={{
      obj: asset('death-star.obj'),
     // mtl: asset('death-star.mtl')
    }}
    style={{
    transform: [
      {translate: [0, 0, -1]}, 
      {rotateY: this.state.spin.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })}
    ]
  }}
   texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}

  />
{/*   
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'} }>
          <Text style={{fontSize: 0.2, textAlign: 'center',color: this.state.textColor}}
          onEnter={() => this.setState({textColor: 'green'})}
          onExit={() => this.setState({textColor: 'white'})}>
          Red</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
        </View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
        </View>

        <Animated.Image                         // Base: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          width: 1,
          height: 1,
          transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]
        }}
      /> */}

  
      </View>

      </View>
    );
  }
};

AppRegistry.registerComponent('homeVR', () => homeVR);
