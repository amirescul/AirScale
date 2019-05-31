import React from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,Linking, ScrollView} from "react-native";
import {Header, Icon, Image, SearchBar} from 'react-native-elements'
import Moment from 'react-moment';
import 'moment-timezone';
import MapView, {PROVIDER_GOOGLE, UrlTile} from 'react-native-maps'
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo'

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      LAT: '',
      LNG: '',
      value:{},
      valueAqicn:{},
      valueAqicn1:{},
      valueAqicn2:{},
      valueWeather: {},
      currentLatitude: 22,
      currentLongitude: 20,
      query: '',
      isModalVisible:false,
    };
    this.fetchData= this.fetchData.bind(this);
    this.fetchData1= this.fetchData1.bind(this);
    this.fetchData2= this.fetchData2.bind(this);
  }


  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });


 

  latLng() {
    navigator.geolocation.getCurrentPosition(
      (position) => {

    const latitude = Number(position.coords.latitude.toFixed(6));
    const longitude = Number(position.coords.longitude.toFixed(6));

    this.setState({  
      currentLatitude: latitude,
      currentLongitude: longitude,
    });
   
    this.fetchData();  
    this.fetchData1();
    this.fetchData2();

      })   

  }

 


    fetchData = () => {
      
    const LAT = this.state.currentLatitude
    const LNG = this.state.currentLongitude
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${LAT}+${LNG}&key=55b2185179c5453280061f07623bfc3b`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayData = res.results[0].components
        this.setState({
          value: arrayData,
        });        
      })
      .catch(error => {         
        this.setState({ refreshing: false })
      });
      
  };

  fetchData1 = () => {
    const LAT = this.state.currentLatitude
    const LNG = this.state.currentLongitude
    const token = '2785d2e7df9e7f6d990c5f92d132d8200ba04410'
    const url =   `https://api.waqi.info/feed/geo:${LAT};${LNG}/?token=${token}`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayDataAqicn = res.data
        this.setState({
          valueAqicn: arrayDataAqicn,
        });
      })
      .catch(error => {         
        this.setState({ refreshing: false })

      });
  };

  fetchData2 = () => {
    const LAT = this.state.currentLatitude
    const LNG = this.state.currentLongitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LNG}&appid=76c05557e22800e9917a74420df2016e&units=metric`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayDataWeather = res
        this.setState({
          valueWeather : arrayDataWeather
        });
      
      })
      .catch(error => {
        this.setState({ refreshing: false})
      })

  }

  fetchData3 = () => {
    const LAT = 39.913818
    const LNG = 116.363625
    const token = '2785d2e7df9e7f6d990c5f92d132d8200ba04410'
    const url =   `https://api.waqi.info/feed/geo:${LAT};${LNG}/?token=${token}`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayDataAqicn = res.data
        this.setState({
          valueAqicn1: arrayDataAqicn,
        });
      })
      .catch(error => {         
        this.setState({ refreshing: false })

      });
  };

  fetchData4 = () => {
    const LAT = 51.509865
    const LNG = -0.118092
    const token = '2785d2e7df9e7f6d990c5f92d132d8200ba04410'
    const url =   `https://api.waqi.info/feed/geo:${LAT};${LNG}/?token=${token}`
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        const arrayDataAqicn = res.data
        this.setState({
          valueAqicn2: arrayDataAqicn,
        });
      })
      .catch(error => {         
        this.setState({ refreshing: false })

      });
  };

  componentDidMount() {
    this.latLng();  
    this.fetchData3();
    this.fetchData4();
  }

  _onPressButton(){
    {Linking.openURL('http://aqicn.org/')}
  }

  textForAqicn(){
    if(parseInt(this.state.valueAqicn.aqi) <= 50 ){
      return <Text style={{fontSize:18}}>Air quality is satisfactory, and air pollution poses little or no risk.</Text>
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 100){
      return <Text style={{fontSize:18}}>Air quality is acceptable.</Text>
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 150){
      return <Text style={{fontSize:18}}>Members of sensitive groups may experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 200) {
      return <Text style={{fontSize:18}}>Everyone may begin to experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 300) {
      return <Text style={{fontSize:18}}>Health warnings of emergency conditions.</Text>
    }
    else{
      return <Text style={{fontSize:18}}>Health alert: everyone may experience more serious health effect.</Text>
    }
  }

  firstBox(){
    if(parseInt(this.state.valueAqicn.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'30%', height:100,borderTopLeftRadius:10
      }
     } else if(parseInt(this.state.valueAqicn.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'30%', height:100,borderTopLeftRadius:10
       }
     }
     else if(parseInt(this.state.valueAqicn.aqi) < 150){
      return {
       backgroundColor:'#ff9933',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 200){
      return {
       backgroundColor:'#cc0033',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 300){
      return {
       backgroundColor:'#8f1ace',width:'30%', height:100,borderTopLeftRadius:10
      }
    } 
    else if (parseInt(this.state.valueAqicn.aqi) >= 300){
      return {
       backgroundColor:'#a86001',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else{
      return{
      backgroundColor:'white',width:'30%', height:100,borderTopLeftRadius:10
    }
    }
  }

  secondBox(){
    if(parseInt(this.state.valueAqicn.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
     } else if(parseInt(this.state.valueAqicn.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
       }
     }
     else if(parseInt(this.state.valueAqicn.aqi) < 150){
      return {
        backgroundColor:'#ff9933',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 200){
      return {
        backgroundColor:'#cc0033',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn.aqi) < 300){
      return {
        backgroundColor:'#8f1ace',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    } 
    else if (parseInt(this.state.valueAqicn.aqi) >= 300){
      return {
        backgroundColor:'#a86001',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else{
      return{
        backgroundColor:'white',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
    }
    }
  }

  textForAqicn1(){
    if(parseInt(this.state.valueAqicn1.aqi) <= 50 ){
      return <Text style={{fontSize:18}}>Air quality is satisfactory, and air pollution poses little or no risk.</Text>
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 100){
      return <Text style={{fontSize:18}}>Air quality is acceptable.</Text>
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 150){
      return <Text style={{fontSize:18}}>Members of sensitive groups may experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 200) {
      return <Text style={{fontSize:18}}>Everyone may begin to experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 300) {
      return <Text style={{fontSize:18}}>Health warnings of emergency conditions.</Text>
    }
    else{
      return <Text style={{fontSize:18}}>Health alert: everyone may experience more serious health effect.</Text>
    }
  }

  firstBox1(){
    if(parseInt(this.state.valueAqicn1.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'30%', height:100,borderTopLeftRadius:10
      }
     } else if(parseInt(this.state.valueAqicn1.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'30%', height:100,borderTopLeftRadius:10
       }
     }
     else if(parseInt(this.state.valueAqicn1.aqi) < 150){
      return {
       backgroundColor:'#ff9933',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 200){
      return {
       backgroundColor:'#cc0033',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 300){
      return {
       backgroundColor:'#8f1ace',width:'30%', height:100,borderTopLeftRadius:10
      }
    } 
    else if (parseInt(this.state.valueAqicn1.aqi) >= 300){
      return {
       backgroundColor:'#a86001',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else{
      return{
      backgroundColor:'white',width:'30%', height:100,borderTopLeftRadius:10
    }
    }
  }

  secondBox1(){
    if(parseInt(this.state.valueAqicn1.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
     } else if(parseInt(this.state.valueAqicn1.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
       }
     }
     else if(parseInt(this.state.valueAqicn1.aqi) < 150){
      return {
        backgroundColor:'#ff9933',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 200){
      return {
        backgroundColor:'#cc0033',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn1.aqi) < 300){
      return {
        backgroundColor:'#8f1ace',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    } 
    else if (parseInt(this.state.valueAqicn1.aqi) >= 300){
      return {
        backgroundColor:'#a86001',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else{
      return{
        backgroundColor:'white',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
    }
    }
  }

  textForAqicn2(){
    if(parseInt(this.state.valueAqicn2.aqi) <= 50 ){
      return <Text style={{fontSize:18}}>Air quality is satisfactory, and air pollution poses little or no risk.</Text>
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 100){
      return <Text style={{fontSize:18}}>Air quality is acceptable.</Text>
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 150){
      return <Text style={{fontSize:18}}>Members of sensitive groups may experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 200) {
      return <Text style={{fontSize:18}}>Everyone may begin to experience health effects.</Text>
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 300) {
      return <Text style={{fontSize:18}}>Health warnings of emergency conditions.</Text>
    }
    else{
      return <Text style={{fontSize:18}}>Health alert: everyone may experience more serious health effect.</Text>
    }
  }

  firstBox2(){
    if(parseInt(this.state.valueAqicn2.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'30%', height:100,borderTopLeftRadius:10
      }
     } else if(parseInt(this.state.valueAqicn2.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'30%', height:100,borderTopLeftRadius:10
       }
     }
     else if(parseInt(this.state.valueAqicn2.aqi) < 150){
      return {
       backgroundColor:'#ff9933',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 200){
      return {
       backgroundColor:'#cc0033',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 300){
      return {
       backgroundColor:'#8f1ace',width:'30%', height:100,borderTopLeftRadius:10
      }
    } 
    else if (parseInt(this.state.valueAqicn2.aqi) >= 300){
      return {
       backgroundColor:'#a86001',width:'30%', height:100,borderTopLeftRadius:10
      }
    }
    else{
      return{
      backgroundColor:'white',width:'30%', height:100,borderTopLeftRadius:10
    }
    }
  }

  secondBox2(){
    if(parseInt(this.state.valueAqicn2.aqi) <= 50) {
      return {
        backgroundColor:'#009966',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
     } else if(parseInt(this.state.valueAqicn2.aqi) < 100){
       return {
        backgroundColor:'#ffde33',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
       }
     }
     else if(parseInt(this.state.valueAqicn2.aqi) < 150){
      return {
        backgroundColor:'#ff9933',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 200){
      return {
        backgroundColor:'#cc0033',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else if(parseInt(this.state.valueAqicn2.aqi) < 300){
      return {
        backgroundColor:'#8f1ace',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    } 
    else if (parseInt(this.state.valueAqicn2.aqi) >= 300){
      return {
        backgroundColor:'#a86001',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
      }
    }
    else{
      return{
        backgroundColor:'white',width:'70%', height:100,borderTopRightRadius:10,borderLeftWidth: 1, borderLeftColor: '#f9f9f9'
    }
    }
  }

  
   
    goToTop = () => {
      this.scroll.scrollTo({x: 0, y: 0, animated: true});
   }

render() {
  const dateToFormat = Date.now();
  const country = `${this.state.value.country}`
  const country_code =`${this.state.value.country_code}`
  const city = `${this.state.value.city}`
  const road = `${this.state.value.road}`
  const aqi = `${this.state.valueAqicn.aqi ? this.state.valueAqicn.aqi : ""}`
  const margin = this.state.valueAqicn.aqi ? 200 - this.state.valueAqicn.aqi :0;
  const aqi1 = `${this.state.valueAqicn1.aqi ? this.state.valueAqicn1.aqi : ""}`
  const aqi2 = `${this.state.valueAqicn2.aqi ? this.state.valueAqicn2.aqi : ""}`
  const streetAqi = `${this.state.valueAqicn.city ? this.state.valueAqicn.city.name: ""}`
  const streetAqi1 = `${this.state.valueAqicn1.city ? this.state.valueAqicn1.city.name: ""}`
  const streetAqi2 = `${this.state.valueAqicn2.city ? this.state.valueAqicn2.city.name: ""}`
  const temp = `${this.state.valueWeather.main ? this.state.valueWeather.main.temp: ""}`
  const roundTemp= Math.round(temp)
  const descript= `${this.state.valueWeather.weather ? this.state.valueWeather.weather[0].description: ""}`.toUpperCase()
  const humidity = `${this.state.valueWeather.main ? this.state.valueWeather.main.humidity: ""}`
  const pressure = `${this.state.valueWeather.main ? this.state.valueWeather.main.pressure: ""}`
  const tempMax = Math.round(`${this.state.valueWeather.main ? this.state.valueWeather.main.temp_max: "" }` )
  const tempMin = Math.round(`${this.state.valueWeather.main ? this.state.valueWeather.main.temp_min: ""}`)

  
  return (
    <View>
    <ScrollView style={{backgroundColor:'#f9f9f9'}} ref={(c)=>{this.scroll =c}}>
    <View style={{backgroundColor:'#f9f9f9', width:'100%', height:'100%'}}>

    

     <Header
      containerStyle={{backgroundColor:'white',borderBottomWidth:1,borderBottomColor:"#cccccc"}}>

        <TouchableOpacity onPress = {()=> this.props.navigation.navigate('SearchPage')}>
          <MyCustomLeftComponent  />
        </TouchableOpacity>
        <MyCustomCenterComponent />
        <TouchableOpacity  onPress = {()=> this.props.navigation.navigate('About')}>
          <MyCustomRightComponent />
        </TouchableOpacity>
      </Header>

     

      <View>
        <View style={{flexDirection:"row", alignSelf: 'center', marginTop:15}}>
          <View style={{marginRight:5}}>
            <Icon
              name="navigation"
              color="black"
              size={24}
            />
          </View>
          <Text style={{fontSize:18}}>
              {country_code} , {country} 
          </Text>

        </View>
        <View style={{alignSelf:'center',marginTop:10}}>

          <Text stlye={{fontSize:14}}>
            {city}, {road}
          </Text>

        </View>
      </View>









      <TouchableOpacity onPress={this._toggleModal} style={{marginHorizontal:20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.32,shadowRadius: 5.46, elevation: 9 }}>

        <View style={{marginTop:20, flexDirection:"row"}}>

          <View /*style={{backgroundColor:'#ea5454',width:'30%', height:100,borderTopLeftRadius:10}}*/ style={this.firstBox()}>
            <View style={{marginTop:25}}>
              <Text style={{fontSize:45, alignSelf:'center'}}>{aqi}</Text>
            </View>
          </View>

          <View /*style={{backgroundColor:'#e86f6f',width:'70%', height:100,borderTopRightRadius:10}}*/ style={this.secondBox()}>
            <View style={{alignSelf:'center', marginHorizontal:8,marginVertical:8,flex:1, alignItems: 'center', justifyContent: 'center' }}>
            
              { this.textForAqicn() }
              
            </View> 
          </View>

        </View>

        <View>

          <View style={{backgroundColor:"white",width:'100%', height:70,borderBottomLeftRadius: 10,borderBottomRightRadius: 10}}>
            <View style={{marginTop:25}}>
              <Text style={{fontSize:17, alignSelf:'center', justifyContent:"center"}}>{streetAqi}</Text>
            </View>
          </View>

        </View>

      <Modal isVisible={this.state.isModalVisible} style={{position:'relative',backgroundColor:"white", marginVertical:320,borderRadius:4, borderColor:"rgba(0,0,0,0.1)"}} /*onBackdropPress={() => this.setState({ isModalVisible: false })}*/ >
        <ScrollView>
        <LinearGradient
              colors={['#009966', '#ffde33', '#ff9933', '#cc0033', '#8f1ace', '#a86001']}
              style={{ position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              padding:3,
              height: 20, width:200, marginLeft:120, marginTop:20 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >  
            <Icon 
              name="keyboard-arrow-down"
              size={25}
              color="black"
              containerStyle={{position:'relative',marginRight:margin, marginTop:-5}}
              
            />
            </LinearGradient>
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity onPress={this._toggleModal}>
            <Icon
              name='close'
              color="#494949"
              size={25}
              containerStyle={{position:"relative",alignSelf:'flex-end'}}
            />
        </TouchableOpacity>  
            
            <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10,marginTop:20,marginRight:202}}>
              0-50 Good:
            </Text>
            
            </View>
            <Text style={{marginTop:20, marginHorizontal:10, fontSize:15 , alignSelf:'center'}}> 
              Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution. 
            </Text>
                   
        </ScrollView>
      </Modal>
      </TouchableOpacity>
      












      <TouchableOpacity style={{marginHorizontal:20, flexDirection:'row',marginTop:30, alignSelf:"center"}} onPress={this._onPressButton}>

        <Image
          source={{ uri: 'https://lh6.ggpht.com/GQPFHk0GK8bDp067y1yYULdkdZxwczXITZ3T_AkCKGrPGTH5jn3j2Uv4H9whvuyA2vwJ' }}
          style={{ width: 35, height: 35, borderRadius: 20 }}
          PlaceholderContent={<ActivityIndicator />}
        />

        <View style={{alignSelf:'center',marginLeft:10}}>
          <Text style={{fontSize:16}}>
            Data provided by <Text style={{fontWeight:'bold'}}> AQICN </Text>
          </Text>
        </View>

        <View style={{alignSelf:'center', paddingLeft:75}}>
          <Icon name={"chevron-right"}  size={25} color="black" />
        </View>

        
      </TouchableOpacity>

      <View style={{borderBottomWidth:1,borderBottomColor:'#cccccc', marginHorizontal:20,marginTop:10}}/>

      <View style={{alignSelf:'center', marginTop:15}}>
            <Moment  element={Text} format="MMMM DD, HH:mm" interval={30000} style={{color:'#9b9999'}}>{dateToFormat}</Moment>
      </View>




      <View style={{marginVertical:20,marginHorizontal:20, height:300, borderColor: "#f9f9f9", shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.32,shadowRadius: 5.46, elevation: 9}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex:1,borderRadius:10}}
          region={{
            latitude:this.state.currentLatitude,
            longitude:this.state.currentLongitude,
            latitudeDelta:0.1,
            longitudeDelta:0.04
          }}
          showsUserLocation
          >
          <UrlTile
            
          urlTemplate = {"https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=2785d2e7df9e7f6d990c5f92d132d8200ba04410"}
  
          
          />
        </MapView>
      </View>



      <View style={{marginHorizontal:20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.32,shadowRadius: 5.46, elevation: 9 }}>

        <View style={{marginTop:20, flexDirection:"row"}}>

          <View /*style={{backgroundColor:'#ea5454',width:'30%', height:100,borderTopLeftRadius:10}}*/ style={this.firstBox1()}>
            <View style={{marginTop:25}}>
              <Text style={{fontSize:45, alignSelf:'center'}}>{aqi1}</Text>
            </View>
          </View>

          <View /*style={{backgroundColor:'#e86f6f',width:'70%', height:100,borderTopRightRadius:10}}*/ style={this.secondBox1()}>
            <View style={{alignSelf:'center', marginHorizontal:8,marginVertical:8,flex:1, alignItems: 'center', justifyContent: 'center' }}>
            
              { this.textForAqicn1() }
              
            </View> 
          </View>

        </View>

        <View>

          <View style={{backgroundColor:"white",width:'100%', height:70,borderBottomLeftRadius: 10,borderBottomRightRadius: 10}}>
            <View style={{marginTop:25}}>
              <Text style={{fontSize:17, alignSelf:'center', justifyContent:"center"}}>{streetAqi1}</Text>
            </View>
          </View>

        </View>

        </View>





        <View style={{marginHorizontal:20,marginBottom:20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.32,shadowRadius: 5.46, elevation: 9 }}>

        <View style={{marginTop:20, flexDirection:"row"}}>

          <View /*style={{backgroundColor:'#ea5454',width:'30%', height:100,borderTopLeftRadius:10}}*/ style={this.firstBox2()}>
            <View style={{marginTop:25}}>
              <Text style={{fontSize:45, alignSelf:'center'}}>{aqi2}</Text>
            </View>
          </View>

          <View /*style={{backgroundColor:'#e86f6f',width:'70%', height:100,borderTopRightRadius:10}}*/ style={this.secondBox2()}>
            <View style={{alignSelf:'center', marginHorizontal:8,marginVertical:8,flex:1, alignItems: 'center', justifyContent: 'center' }}>
            
              { this.textForAqicn2() }
              
            </View> 
          </View>

        </View>

<View>

  <View style={{backgroundColor:"white",width:'100%', height:70,borderBottomLeftRadius: 10,borderBottomRightRadius: 10}}>
    <View style={{marginTop:25}}>
      <Text style={{fontSize:17, alignSelf:'center', justifyContent:"center"}}>{streetAqi2}</Text>
    </View>
  </View>

</View>

</View>


      <View style={{marginHorizontal:20}}>
        <View style={{backgroundColor:'white', width:'100%', height:300, borderRadius:10,shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.32,shadowRadius: 5.46, elevation: 9}}> 
              
          <View style={{marginLeft:20, marginTop:10}}>


              <Text style={{fontSize: 40, fontWeight:'100'}}>
                {city}
              </Text>
             
              <Text style={{fontSize:22,fontWeight:'200'}}>
                {descript}
              </Text>
              

          </View>
      

          <View style={{alignSelf:'center',marginTop:40}}>


              <Text style={{fontSize: 40, fontWeight:'200'}}>
                {roundTemp}{'\u2103'}
              </Text>


          </View> 
             
          <View style={{alignSelf:'center', marginLeft:30, fontWeight:'200'}}>

              <Text style={{fontSize: 18, fontWeight:'100' }}>
                  {tempMin}{'\u00B0'} - {tempMax}{'\u00B0'} 
              </Text>
                
          </View>

                
          <View style={{alignSelf:'flex-end', flexDirection:'column', marginRight:20, marginTop:55}}>

              <Text style={{fontSize: 15, fontWeight:'100' }}>
                Humidity Percentage: {humidity} %
              </Text>
               

                
              <Text style={{fontSize: 15, fontWeight:'100' }}>
                High Pressure Air: {pressure} hPa
              </Text>
    
            </View>
              
              



            {/*   
              <Text style={{fontSize: 15 }}>
                  SUNRISE: {"\n"}<Moment element={Text} format="HH:mm" unix>{sunrise}</Moment>
              </Text>
               

                
              <Text style={{fontSize: 15 }}>
                  SUNSET: {"\n"}<Moment element={Text} format="HH:mm" unix>{sunset}</Moment>
              </Text>
            */}
           

              
                
             
               
          </View>    
        </View>
         
<View style={{marginBottom:200}}/>

      
      

  </View>
  </ScrollView>
  
  <View style={{position:"absolute",bottom:20,right:20}}>
  <TouchableOpacity onPress={this.goToTop}>
  <Icon
    name='keyboard-arrow-up'
    color="#f9f9f9"
    size={30}
    containerStyle={{backgroundColor:'#4b4b4c', borderRadius:30,alignSelf:"flex-end", flex:1}}
  />
  </TouchableOpacity>
  </View>
  </View>
  )
       
}
}

class MyCustomLeftComponent extends React.Component{
  render(){
    return(
      
      <Icon
        name='format-list-bulleted'
        color="black"
        size={26}
        containerStyle={{marginLeft:7}}
      />
     
    )
  }
}

class MyCustomCenterComponent extends React.Component{
  render(){
    return(
      <Text style={{fontSize:18, color:'black'}}>Air Quality</Text>
    )
  }
}

class MyCustomRightComponent extends React.Component{
  render(){
    return(
      <Icon
      name='info'
      color="black"
      containerStyle={{marginRight:7}}
    />
    )
  }
}
