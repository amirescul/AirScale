import React from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,Linking, ScrollView,SafeAreaView } from "react-native";
import {Header, Icon, Image, SearchBar, ListItem} from 'react-native-elements'
import Swipeout from 'react-native-swipeout';


const list = [
  {
    name: 'Bucharest',
    rightTitle: "20",
    leftIcon: <Icon 
      name='location-on'
      color="white"
      size={20}
    />
  },
]


const list1 = [
  {

    name: '4:16 AM',
    rightTitle: "19",
    subtitle: 'Brasov',
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',

  },
  {

    name: '10:16 AM',
    rightTitle: "67",
    subtitle: 'Constanta',
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',

  },
  {

    name: '8:08 PM',
    rightTitle: "120",
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',
    subtitle: 'Cluj'
  },
  {

    name: '9:12 AM',
    rightTitle: "171",
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',
    subtitle: 'Timisoara'
  },
  {

    name: '12:35 AM',
    rightTitle: "231",
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',
    subtitle: 'Arad'
  },
  {

    name: '1:19 PM',
    rightTitle: "310",
    avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',
    subtitle: 'Ploiesti'
  },
]





export default class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          activeRowKey: null,
        };
      }

   

    

      getAvatar = (value) => {
        if (parseInt(value) <= 50) {
            return "https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg"
        }
        else if (parseInt(value) <= 100) {
          return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmmagYCYQgGEkYyXv8IdiWtJerFvYaXgxzsOHOP5Ee5NrzVIO"
        }
        else if (parseInt(value) <= 150) {
          return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIVFQ8VFRUVFRUQEBUVDw8PFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0PDysZFRkrKy0rKzc3NystNy0rKys3KysrKzcrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMQBAgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIF/8QAHRABAQEBAAIDAQAAAAAAAAAAAAERAhIhMWHwkf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBwb/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A6pFOs9d0KsNQJYmQKGGguadEgwGkCDJxeRARHVoDRKUC1LFKB0EAZFiFgKxCQgpTrMNgFMxqAKpDo0ECAOLFo32B1abFgBYiAGlUFOlqxQFEYgFVR0GcUOoFKZBZFAVixarQSlU+FICSiBK06JQGm9AgkVQCkIlBWg+gChWftIC1apADSFV6BUYdQAmQAYMRqAVpSjNaZWAbFFqAYVYQA04qChC8gIxSoBiOGgIqokFiMQDyRxKCVaMaBUYqtA2CxUW0Dn0MMFoNRM1QGrRYrDoMtSi1aC1WinAVwcnFIC06LFAMGEaBGIWgcGI2/sBQswA2oFyAwymUA0hqEBZxqChKoFBrQwFz0WUDQXJALSMBYbBSAOAgxhw6JQMUiUA0EAlSMAa0MANCxQgEVYAUiqgIEASFgGoabQTOlADaRaAiMpAFAChYgOJn2pQKxSoEoqgISlQISUGlLQEVOnQBiQJDBECFUo0LRCCsWK1aCKsQBYrBYCvJz6BgKFQYgjQqBAsa8VBYuaKZAOi0SGQFPhYtWglDBAOjCzgHBixATgVgIwJAYj6REWJSnVURESAjaLFgEDCCkVMQDShUCMGtAzq1qC1QaZVilBWJadAI6MBHRF4gpUMUAmiEBDFgAga1ygM+g2lGCiAtXktQG0XpADKqpTgM0ylnQVaoSBoFOKCwyKIFYpApQVMWoCNVSB0alVBptUpoCUa0KCXK1AYFYpAKCBYQQQ1WIDRh0eQDFFp0DEzFKDQxUgzrSxUAdSoDVqwYBMZhgEHABGHRaAxLTKCLK0GlYDAClKQAIUKItBaRYsBajUAVLPiDUFgsMAgoGbDqNBnVK1YKCiVUoK1FaAIEgFKLAUWkYAjXTOL+gSDgARpQBQbACShA2jUgVI06AoaAJSqRUDAtKAOIYoKcGnyBVSLUASpBS+lKhgGJQ6CZa0APZ1YsBGiFAKEWKLEgDRSBnWZSgVoSBaYkB5FSAi1IDK0kDMVoQDTz0kDRiQCs9X2kC0aUAMqQGVVIFqoQKdNyBIhSSq//2Q=="
      } 
        else if (parseInt(value) <= 200) {
        return "https://cdn11.bigcommerce.com/s-hfhomm5/images/stencil/1280x1280/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on"
      }
        else if (parseInt(value) <= 300) {
        return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0ICAgIDQ0HBwcIBw8IDQcNFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0PDisZFRkrLjcrKy0rNy03Nys3NysrLSstKystKysrKysrKysrKysrLSsrKysrKysrKysrKysrK//AABEIAL8BCAMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAAAAQIEB//EABwQAQEBAAEFAAAAAAAAAAAAAAABERICAxUx0f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQFREv/aAAwDAQACEQMRAD8A54oO86sBFAAFAFABAAAwAAAgAoJguIAAAAAAAioIogCoqIACihUAVAFEAUICgCgCoIKKACBAAARQAQAAAQRUVAFEABQQAFoACKAiooAAoACggACigVAAoCAAAAAAigIKgioAAAAAAqAogCgCgAAAACgqKAqUQAQAABFAAARQARUEAAAAUQEVFQVUFEABoAAAAAAABUoKACAAAAAAAAAioIAoAIAAAAAqKKAAAAAAAAKgoLqCAAAAAAAAAAACAoiiCC4AiiJUVFVQAUAAAAAAAAAAAAAAAAAAAAAARQBFBBFBAEAUBQCigAAAACgoAgKCAIAAAAAAAAAAAACKgCgjKCgIoKoAKAAAAoYigAAAgAAAAAAAAAAAAAgigCoqAigIgArQAAACkRVAEQAAAAAAAAAAAAAAAAAAAAQAQFiIigK0AAAKLCkEEAAAAAAAAEUAEBQBAAUBAUAAAEVFRnQBTAAaAAAFABAAAAABBFQUAAAAUAAABBcBEUgAAKijLhSJGI2vHd7J1cZxvq8+n6q+d4R//9k="
      }
        else{
          return "https://webshop.mam-bricolaj.ro/wp-content/uploads/xMaro-nuga-u708-st9.jpg.pagespeed.ic.YsXzA6GmsP.jpg"
        }
        
      }

      getBackgroundColor = (value) => {
        if (parseInt(value) <= 50) {
          return {backgroundColor:"#41754e", marginTop:50}
        }
        else if (parseInt(value) <= 100) {
          return {backgroundColor:"#f2bb2a", marginTop:50}
        }
        else if (parseInt(value) <= 150) {
          return {backgroundColor:"#fd7f06", marginTop:50}
        }
        else if (parseInt(value) <= 200) {
          return {backgroundColor:"#ec2232", marginTop:50}
        }
        else if (parseInt(value) <= 300) {
          return {backgroundColor:"#5d1579", marginTop:50}
        }
        else {
          return {backgroundColor:"#845333", marginTop:50}
        }
      }

      firstView = (value) => {
        if (parseInt(value) <= 50) {
          return {backgroundColor:"#41754e", flex:1}
        }
        else if (parseInt(value) <= 100) {
          return {backgroundColor:"#f2bb2a", flex:1}
        }
        else if (parseInt(value) <= 150) {
          return {backgroundColor:"#fd7f06", flex:1}
        }
        else if (parseInt(value) <= 200) {
          return {backgroundColor:"#ec2232", flex:1}
        }
        else if (parseInt(value) <= 300) {
          return {backgroundColor:"#5d1579", flex:1}
        }
        else {
          return {backgroundColor:"#845333", flex:1}
        }
      }

     
      


    render(){  
      
      const swipeoutBtns = [{
        
        text: 'Delete',
        backgroundColor: 'red',
        
      }]; 


      return( 
        <View style={{backgroundColor:'#f9f9f9', flex:1}}>
        <ScrollView style={{backgroundColor:'#f9f9f9'}}>

          {
            list.map((l, i) => (
              <View style={this.firstView(l.rightTitle)} key={i}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainApp' )}  >
              <ListItem
                key={i}
                title={l.name}
                rightTitle={l.rightTitle}
                leftIcon={l.leftIcon}
                titleStyle={{position:"absolute",left:-10,fontSize:30, fontWeight:'200', color:'white'}}
                rightTitleStyle={{fontSize:30, fontWeight:'200', color:'white'}}
                //containerStyle={{backgroundColor:'#41754e', marginTop:50}}
                containerStyle={this.getBackgroundColor(l.rightTitle)}
              />
               </TouchableOpacity>
               </View>
            ))
          }
       



        <View>

        {
            list1.map((a, l) => (
              <Swipeout right={swipeoutBtns}
              key={l}
              backgroundColor= 'transparent'
              sensitivity={20}
              autoClose={true}
              

              >
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainApp')} >
              <ListItem
                key={l}
                title={a.name}
                titleStyle={{fontSize:15,color:'black'}}
                rightTitle={a.rightTitle}
                rightTitleStyle={{fontSize:25,color:'black', fontWeight:'200'}}
                subtitle={a.subtitle}
                subtitleStyle={{fontSize:25, fontWeight:'200',color:'black'}}
                containerStyle={{height:80, backgroundColor:'#f9f9f9',borderBottomWidth:1, borderBottomColor:'#cccccc', marginLeft:15}}
                leftAvatar={{ source: { uri: this.getAvatar(a.rightTitle)}, containerStyle: {height:10, width:25} }}
                
              />
               </TouchableOpacity>
               </Swipeout>
            ))
        }


        </View>

      
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SearchBarList')}>
                <Icon 
                name='playlist-add'
                color='black'
                size={28}
                containerStyle={{alignSelf:'flex-end',marginRight:10, marginTop:10}}
                
                />
        </TouchableOpacity>


        </ScrollView>

        
        
        
        
        </View> 
      )
    }
  }