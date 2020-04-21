import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Prin extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    } //end constructor

    async componentWillMount(){
        try{
            const response =
                await fetch ('https://swapi.co/api/films')
            const responseJson = await response.json()

            this.setState({
                isLoading: false,
                dataSource: responseJson.results,
            }, function(){

            });
    }
    catch(error){
        console.log(error);
    };
}

    render(){
        if (this.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.characters[6]},</Text>}
                    keyExtractor={({id},index)=>id}
                />
            </View>
        )
    }
}

export default Prin;