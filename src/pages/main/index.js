import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import styles from "./styles";

export default class Main extends Component {

    static navigationOptions = {
        title: 'My Shelf'
    };

    state = {
        data: [],
    };

    componentDidMount() {
      this.loadBooks();
    }

    loadBooks = async () => {
        const response = await api.get('/books');
        const { data } = response.data;
        this.setState({ data });
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.author}</Text>
            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                  //this.props.navigation.navigate('Product', { product: item });
                }}
            >
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return(
          <View style={styles.container}>
            <FlatList
              contentContainerStyle={styles.list}
              data={this.state.data}
              keyExtractor={item => item.id}
              renderItem={this.renderItem}
              //onEndReached={this.loadMore}
              //onEndReachedThreshold={0.1}
            />
          </View>
        );
    }
}