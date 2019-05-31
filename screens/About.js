import React from 'react';
import { Text,View,FlatList,SafeAreaView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

 
  export default class About extends React.Component{  

    render() {

    const list = [
      {
        name: '0-50 Good',
        avatar_url: 'https://www.fundermax.at/fileadmin/redakteure/_processed_/1/9/csm_0059_A4_5bc386ea8a.jpg',
        subtitle: 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
      },
      {
        name: '51-100 Moderate',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmmagYCYQgGEkYyXv8IdiWtJerFvYaXgxzsOHOP5Ee5NrzVIO',
        subtitle: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
      },
      {
        name: '101-150 Unhealthy for Sensitive Groups',
        avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIVFQ8VFRUVFRUQEBUVDw8PFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0PDysZFRkrKy0rKzc3NystNy0rKys3KysrKzcrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMQBAgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIF/8QAHRABAQEBAAIDAQAAAAAAAAAAAAERAhIhMWHwkf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBwb/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A6pFOs9d0KsNQJYmQKGGguadEgwGkCDJxeRARHVoDRKUC1LFKB0EAZFiFgKxCQgpTrMNgFMxqAKpDo0ECAOLFo32B1abFgBYiAGlUFOlqxQFEYgFVR0GcUOoFKZBZFAVixarQSlU+FICSiBK06JQGm9AgkVQCkIlBWg+gChWftIC1apADSFV6BUYdQAmQAYMRqAVpSjNaZWAbFFqAYVYQA04qChC8gIxSoBiOGgIqokFiMQDyRxKCVaMaBUYqtA2CxUW0Dn0MMFoNRM1QGrRYrDoMtSi1aC1WinAVwcnFIC06LFAMGEaBGIWgcGI2/sBQswA2oFyAwymUA0hqEBZxqChKoFBrQwFz0WUDQXJALSMBYbBSAOAgxhw6JQMUiUA0EAlSMAa0MANCxQgEVYAUiqgIEASFgGoabQTOlADaRaAiMpAFAChYgOJn2pQKxSoEoqgISlQISUGlLQEVOnQBiQJDBECFUo0LRCCsWK1aCKsQBYrBYCvJz6BgKFQYgjQqBAsa8VBYuaKZAOi0SGQFPhYtWglDBAOjCzgHBixATgVgIwJAYj6REWJSnVURESAjaLFgEDCCkVMQDShUCMGtAzq1qC1QaZVilBWJadAI6MBHRF4gpUMUAmiEBDFgAga1ygM+g2lGCiAtXktQG0XpADKqpTgM0ylnQVaoSBoFOKCwyKIFYpApQVMWoCNVSB0alVBptUpoCUa0KCXK1AYFYpAKCBYQQQ1WIDRh0eQDFFp0DEzFKDQxUgzrSxUAdSoDVqwYBMZhgEHABGHRaAxLTKCLK0GlYDAClKQAIUKItBaRYsBajUAVLPiDUFgsMAgoGbDqNBnVK1YKCiVUoK1FaAIEgFKLAUWkYAjXTOL+gSDgARpQBQbACShA2jUgVI06AoaAJSqRUDAtKAOIYoKcGnyBVSLUASpBS+lKhgGJQ6CZa0APZ1YsBGiFAKEWKLEgDRSBnWZSgVoSBaYkB5FSAi1IDK0kDMVoQDTz0kDRiQCs9X2kC0aUAMqQGVVIFqoQKdNyBIhSSq//2Q==',
        subtitle: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.'
      },
      {
        name: '151-200 Unhealthy',
        avatar_url: 'https://cdn11.bigcommerce.com/s-hfhomm5/images/stencil/1280x1280/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on',
        subtitle: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.'
      },
      {
        name: '201-300 Very Unhealthy',
        avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0ICAgIDQ0HBwcIBw8IDQcNFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0PDisZFRkrLjcrKy0rNy03Nys3NysrLSstKystKysrKysrKysrKysrLSsrKysrKysrKysrKysrK//AABEIAL8BCAMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAAAAQIEB//EABwQAQEBAAEFAAAAAAAAAAAAAAABERICAxUx0f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQFREv/aAAwDAQACEQMRAD8A54oO86sBFAAFAFABAAAwAAAgAoJguIAAAAAAAioIogCoqIACihUAVAFEAUICgCgCoIKKACBAAARQAQAAAQRUVAFEABQQAFoACKAiooAAoACggACigVAAoCAAAAAAigIKgioAAAAAAqAogCgCgAAAACgqKAqUQAQAABFAAARQARUEAAAAUQEVFQVUFEABoAAAAAAABUoKACAAAAAAAAAioIAoAIAAAAAqKKAAAAAAAAKgoLqCAAAAAAAAAAACAoiiCC4AiiJUVFVQAUAAAAAAAAAAAAAAAAAAAAAARQBFBBFBAEAUBQCigAAAACgoAgKCAIAAAAAAAAAAAACKgCgjKCgIoKoAKAAAAoYigAAAgAAAAAAAAAAAAAgigCoqAigIgArQAAACkRVAEQAAAAAAAAAAAAAAAAAAAAQAQFiIigK0AAAKLCkEEAAAAAAAAEUAEBQBAAUBAUAAAEVFRnQBTAAaAAAFABAAAAABBFQUAAAAUAAABBcBEUgAAKijLhSJGI2vHd7J1cZxvq8+n6q+d4R//9k=',
        subtitle: 'Health warnings of emergency conditions. The entire population is more likely to be affected.'
      },
      {
        name: '300+ Hazardous',
        avatar_url: 'https://webshop.mam-bricolaj.ro/wp-content/uploads/xMaro-nuga-u708-st9.jpg.pagespeed.ic.YsXzA6GmsP.jpg',
        subtitle: 'Health alert: everyone may experience more serious health effect.'
      },
    ]

    return(
    
    <SafeAreaView>
    
      <View style={{alignItems: 'center'}}>

        <View style={{marginHorizontal:15, marginBottom:10,flexDirection:"row",marginTop:5}}>
          <Text style={{fontSize: 17}}>AQI</Text>
            <View style={{marginLeft:5}}>
              <Text style={{fontSize:17, fontWeight:'bold'}}> Air Pollution Level</Text>
            </View>
        </View>

        <View style={{marginHorizontal:15, marginVertical:10}}>
          <Text style={{fontSize:15}}>Health Implications</Text>
        </View>      

      </View>

      <View style={{alignItems:'left',marginLeft:15,top:-50,marginBottom:-28}}>
        <Icon
          name='chevron-left'
          size={35}
          onPress={()=> this.props.navigation.navigate('MainApp')}
        />
      </View>
  
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={
              <Text style={{fontWeight:'bold', fontSize:16,marginVertical:2}}>{l.name}</Text>
            }
            subtitle={l.subtitle}
            subtitleNumberOfLines={3}
          />
        ))
      }
     
    </SafeAreaView>
    )
  }
}