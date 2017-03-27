import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, bindActionCreators } from "redux";
import { Provider, connect } from "react-redux";
import { ButtonGroup, Button, DropdownButton, MenuItem } from "react-bootstrap";
import _ from "lodash";
import DevTools from '../devtools/reduxDevtools';
import ConfigureStore from "../util/redux/configureStore";
import * as MenuAppStore from '../util/redux/menu/menuStore';

class MenuApp extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount() {
    this.props.actions.QueryHierachyData();
	}
  render(){
    return (
	  	<ButtonGroup>
        {
          _.map(this.props.arrHierachyData, (oSubmenu) => {
            let intItmeKey = 0;
            return (
              <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
                <NavItem key={1} eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem key={2} eventKey={2} title="Item">NavItem 2 content</NavItem>
                <NavItem key={3} eventKey={3} disabled>NavItem 3 content</NavItem>
              </Nav>
            );
          })
        }
      </ButtonGroup>
  	);
  }
}

const oStore = ConfigureStore(MenuAppStore.default);

const MenuAppContainer = connect(
	state => ({
    arrHierachyData: state.arrHierachyData
  }),
  dispatch => ({
    actions: bindActionCreators(MenuAppStore, dispatch)
  })
)(MenuApp)

ReactDOM.render((
	<Provider store={oStore}>
		<div role="container">
      <MenuAppContainer/>
      <DevTools/>
    </div>
	</Provider>
), document.getElementById("menu"));