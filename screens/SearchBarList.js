import React from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,Linking, ScrollView,SafeAreaView , Alert} from "react-native";
import {Header, Icon, Image, SearchBar, ListItem} from 'react-native-elements';

export default class SearchBarList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        };
        this.updateSearch= this.updateSearch.bind(this);
    }


    updateSearch = search => {
        this.setState({ search });
      };

    viewHeader()  {
        this.props.navigation.navigate('SearchPage');
    }


    render(){
        const { search } = this.state;  

        return(

            <View style={{backgroundColor:'#f9f9f9'}}>
            <SafeAreaView>
                <SearchBar
                    autoFocus={true}
                    placeholder="Search here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="ios"
                    containerStyle={{backgroundColor:"#f9f9f9", marginTop:10, marginHorizontal:10}}
                    inputContainerStyle={{borderRadius:20,height:20}}
                    cancelButtonProps={{color:'black'}}
                    onCancel={()=>this.viewHeader()}
                />
            </SafeAreaView> 

            <View  style={{borderBottomWidth:1,borderBottomColor:'gray', marginTop:10, marginHorizontal:8}}/>
            </View>
         
        )
    }
}