import React, { Component, Fragment } from 'react'
import { FlatList, StyleSheet, Text, View, Image, ImageBackground, Alert, Platform, TouchableHighlight, TouchableOpacity, ScrollView, Button, TextInput, Dimensions } from 'react-native'

import { sideScrollerData, sideScrollerData2, sideScrollerData3, sideScrollerData4 } from './sideScrollerData'


class SideScrollerItem extends Component {

    render() {
      const imgSize = {
          width: 150,
          height: 150,
          margin: 1
      }
        return (

        <View>

        {/* <Image     
            source={this.props.item.imgOne}
            style={{ height: 50, width: 50 }}
        /> */}

        <Image     
            style={imgSize}
            source={{uri:this.props.item.img}}
        />
        
        </View>
        )
    }
}


export default class SideScroller extends Component {
 
  render() {
      
   return (
       
    
    <View style={{marginTop: 15}}>

 
    <View style={{marginTop: this.props.firstRow}}>
        
        <FlatList 
            
            horizontal={true}
            data={sideScrollerData}
            renderItem={({ item, index}) => {
                return (
            
                    <SideScrollerItem item={item} index={index} parentFlatList={this} 
                    />)

            }}
            keyExtractor={(item, index)=> item.imageNum}
        />
    
    </View>


    <View>
        <FlatList 
            
            horizontal={true}
            data={sideScrollerData2}
            renderItem={({ item, index}) => {
                return (
                    <SideScrollerItem item={item} index={index} parentFlatList={this} />)
            }}
            keyExtractor={(item, index)=> item.imageNum}
        />
    </View>


    <View>
        <FlatList 
            
            horizontal={true}
            data={sideScrollerData3}
            renderItem={({ item, index}) => {
                return (
                    <SideScrollerItem item={item} index={index} parentFlatList={this} />)
            }}
            keyExtractor={(item, index)=> item.imageNum}
        />
    </View>


    <View>
        <FlatList 
            
            horizontal={true}
            data={sideScrollerData4}
            renderItem={({ item, index}) => {
                return (
                    <SideScrollerItem item={item} index={index} parentFlatList={this} />)
            }}
            keyExtractor={(item, index)=> item.imageNum}
        />
    </View>
        
    

      

      </View>

)
}
}


