import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
// import apiBaseURI from "../common/helpers";
import ShowList from '../components/ShowList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            titleList: []
        };
    }

    componentWillMount() {
        console.log('vcvhcvcn');
        fetch('http://api.bible.quickinnews.com/v1/text/english/old')
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false, titleList: data.details});
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    renderList() {
        return this.state.titleList.map(t => {
            <ShowList title={t.title}/>
        });
    }

    render() {
        return (
            <View>
                { this.state.isLoading ? <ActivityIndicator size='large' color='red' /> : this.renderList }
            </View>
        );
    }
}

export default Home;
