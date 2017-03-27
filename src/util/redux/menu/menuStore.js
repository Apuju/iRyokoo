import update from "immutability-helper";
import initialState from "../../model/menu/menuHierachyDataModel";
import menuActions from "../../actionType/menuActions";

export default function MenuAppReducer(store = initialState, action = {}){
	switch (action.type) {
		case menuActions.Query_Menu:
			return update(store,{
				arrHierachyData: {
					$set: action.data
				}
			});
		default:
			return store;
	}
}

export function QueryHierachyData(oParam){
	return dispatch => {
		const oHierachyData = [
			{
				title: "menu1",
				items: [
					{
						title: "submenu1",
						link: "submenu1"
					},
					{
						title: "submenu2",
						link: "submenu2"
					}
				]
			},
			{
				title: "menu2",
				items: [
					{
						title: "submenu1",
						link: "submenu1"
					},
					{
						title: "submenu2",
						link: "submenu2"
					}
				]
			},
			{
				title: "menu3",
				items: [
					{
						title: "submenu1",
						link: "submenu1"
					}
				]
			}
		];
		dispatch({
			type: menuActions.Query_Menu,
			data: oHierachyData
		});
	};
}
