import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import styles from "./styles";

export default class Main extends Component {

    static navigationOptions = {
      title: 'Minha Estante'
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
    };

    handleDetailPress = () => {
      this.props.navigation.navigate('Book');
    };

    handleAddBookPress = () => {
      this.props.navigation.navigate('BookAdd');
    };

    handleAddBookListPress = () => {
      this.props.navigation.navigate('BookIndex');
    };

    renderItem = ({ item }) => (
        <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookDescription}>{item.author}</Text>
            <TouchableHighlight
              style={styles.bookButton}
              onPress={() => {
                  this.handleDetailPress();
              }}
            >
                <Text style={styles.bookButtonText}>Detalhes</Text>
            </TouchableHighlight>
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
            />
            <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor='#3498db' title="Cadastrar Livro" onPress={() => {this.handleAddBookPress()}}>
                <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="Adicionar Livro a Estante" onPress={() => {this.handleAddBookListPress()}}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>
        );
    }
}