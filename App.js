

import React, { Component, Fragment } from 'react'
import {Platform, ScrollView, View} from 'react-native'
import SideScroller from './SideScroller'


export default class App extends Component {
  render() {
    
    return (
            

  <ScrollView>
    
    <SideScroller firstRow={Platform.OS === "ios" ? 20 : 0}/>

  </ScrollView>

      
    )
  }
}

