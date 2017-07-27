import React from 'react';
import Config from '../config/secret';
import Item from './searchItem';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import { Icon } from 'react-native-elements';

var screen = Dimensions.get('window');

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            searchArr: [],
        };
    }
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size ={35} color={tintColor} /> 
    }

    searchRender(arr){
        var array = arr;
        var rows = [];
        for(i = 0; i < array.length; i++){
            rows.push(<Item key={i} art={array[i][0]} title={array[i][1]} url={array[i][2]}/>) 
        }
        return(<View>{rows}</View>)
    }

    async searchQuery(query){
        let res = await fetch(`${Config.SEARCH_API_URL}${query}`);
        res = await res.json();
        this.searchResults(res);
        
    }
  
    searchResults(res){
        this.setState({searchArr: []});
        var array = [];
        
        for(i = 0; i < 10; i++){
            var item = [];
            item.push(res["items"][i]["snippet"]["thumbnails"]["default"]["url"]);
            item.push(res["items"][i]["snippet"]["title"]);
            item.push(res["items"][i]["id"]["videoId"]);
            array.push(item);  
        }
        this.setState({searchArr: array});
    }

    render(){
        return(
            <Image source = {require('../Images/background.jpg')} style={styles.Parent}>
                <View style={styles.status}>
                </View>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={35} color={'white'} marginLeft={8}/>
                    <TextInput style={styles.searchBar}
                        placeholder='Search for music'
                        placeholderTextColor='white'
                        returnKeyType='search'
                        autoCorrect = {false}
                        onChangeText={(searchTerm) => this.setState({searchTerm})}
                        //Youtube Search Function goes HERE***
                        onSubmitEditing={()=> this.searchQuery(this.state.searchTerm)}

                    />
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView>
                        {this.searchRender(this.state.searchArr)}
                    </ScrollView>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
    },
    searchContainer: {
        flexDirection:'row',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    status: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,.6)',
    },
    contentContainer: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
    }
});