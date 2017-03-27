export class Apuju {
	constructor(){
		this.w = window;
	}
	get isDebugMode(){
		if(__DEBUG__ === "true" || __DEBUG__ === true)
			return true;
		else
			return false;
	}
	getQueryStringParameter(key){
		let strParameter = "";
		const arrQueryVariables = this.w.location.search.substring(1).split('&');			
		arrQueryVariables.forEach(function(ele) {
		    const arrParameter = ele.split("=");
		    if(arrParameter[0] === key){
		    	strParameter = arrParameter[1];
		    	return arrParameter[1];
		    }
		});
		return strParameter;
	}
}