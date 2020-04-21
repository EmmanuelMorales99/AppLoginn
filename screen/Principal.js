import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    } //end constructor

    async componentWillMount(){
        try{
            const response =
                await fetch ('https://reactnative.dev/movies.json')
            const responseJson = await response.json()

            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function(){

            });
    }
    catch(error){
        console.log(error);
    };
}

    /*
    componentDidMount(){
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){
                });
            })
            .catch((error)=>{
                console.error(error);
            });
    } //end componentDidMount
    */

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
                    renderItem={({item}) => <Text>Titulo: {item.title}, Año de Publicacion: {item.releaseYear},</Text>}
                    keyExtractor={({id},index)=>id}
                />
            </View>
        )
    }
}

export default Principal;