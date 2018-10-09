import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import { getNews } from './src/news';
// import Article from './src/components/Article';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount(){
      this.fetchNews()
  }

  fetchNews(){
    getNews()
        .then( articles => this.setState({articles,refreshing: false}))
        .catch(() => this.setState({ refreshing: false }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>chota</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
