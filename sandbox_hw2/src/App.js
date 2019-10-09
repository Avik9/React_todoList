import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: null,
    createItem: false
  }

  createListItemCard = () => {
    this.setState({ currentScreen: AppScreen.ITEM_SCREEN,
      currentItem: null });
  }

  editListItemCard = (itemToEdit) => {
    this.setState({ currentScreen: AppScreen.ITEM_SCREEN,
                    currentItem: itemToEdit });
  }

  goHome = () => {
    this.setState({ currentScreen: AppScreen.HOME_SCREEN });
    this.setState({ currentList: null });
  }

  deleteList = (listName) => {
    this.state.todoLists.forEach((listItem, indexOfList) => {
      if (listItem.name === listName) {
        if (indexOfList >= 0) {
          this.state.todoLists.splice(indexOfList, 1);
          this.goHome();
        }
      }
    });
  }

  createNewList = () => {
    let position = this.state.todoLists.length;
    let newList = {
      "key": position,
      "name": "Unknown",
      "owner": "Unknown",
      "items": []
    }

    this.state.todoLists.push(newList);
    this.loadList(newList);
  }

  loadList = (todoListToLoad) => {
    this.setState({ currentScreen: AppScreen.LIST_SCREEN,
                    currentList: todoListToLoad,
                    currentItem: null  });
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  render() {
    switch (this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen
          loadList={this.loadList.bind(this)}
          todoLists={this.state.todoLists}
          createNewList={this.createNewList} />;
      case AppScreen.LIST_SCREEN:
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          deleteList={this.deleteList}
          loadList={this.loadList}
          editListItemCard={this.editListItemCard}
          createListItemCard={this.createListItemCard} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
          currentItem={this.state.currentItem}
          createItem={this.state.createItem}
          loadList={this.loadList}
          todoList={this.state.currentList} />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;