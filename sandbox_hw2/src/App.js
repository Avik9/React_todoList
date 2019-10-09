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
    this.setState({
      currentScreen: AppScreen.ITEM_SCREEN,
      currentItem: null
    });
  }

  editListItemCard = (itemToEdit) => {
    this.setState({
      currentScreen: AppScreen.ITEM_SCREEN,
      currentItem: itemToEdit
    });
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

  /**
   * This function moves listToMove to the top of the list of lists
   * that can be edited, which will be reflected on the welcome page.
   */
  moveListToTop(listToMove) {
    // REMOVE THE LIST IF IT EXISTS
    this.removeList(listToMove);

    // AND THEN ADD IT TO THE TOP OF THE STACK
    this.prependList(listToMove);
  }

  /**
 * Prepends the list to the list of lists.
 * 
 * @param {TodoList} listToPrepend List to prepend to the list of lists.
 */
  prependList(listToPrepend) {
    let tempTodoLists = this.state.todoLists;
    tempTodoLists.unshift(listToPrepend);
    this.setState({todoLists: tempTodoLists});
  }

  /**
   * Removes the list from the list of lists.
   * 
   * @param {TodoList} listToRemove List to remove, presumably it's been deleted.
   */
  removeList(listToRemove) {
    // REMOVE IT IF IT EXISTS
    let tempTodoLists = this.state.todoLists;
    let indexOfList = tempTodoLists.indexOf(listToRemove);
    if (indexOfList >= 0){
      tempTodoLists.splice(indexOfList, 1);
    }
    this.setState({todoLists: tempTodoLists});
  }

  loadList = (todoListToLoad) => {
    this.setState({
      currentScreen: AppScreen.LIST_SCREEN,
      currentList: todoListToLoad,
      currentItem: null
    });
    this.moveListToTop(todoListToLoad);
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