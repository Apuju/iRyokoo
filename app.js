import { Apuju } from "./src/lib/commonLib";
import * as MenuLib from "./src/lib/menuLib";

(function(w, a){
	const oUtil = new a();
  const strPageName = oUtil.getQueryStringParameter("page");
  let oScript = w.document.createElement("script");
  oScript.setAttribute("src",  "dist/"+MenuLib.getMenuNameByMD5()+".bundle.js");
  w.document.getElementsByTagName('body')[0].appendChild(oScript);
})(window, Apuju); 