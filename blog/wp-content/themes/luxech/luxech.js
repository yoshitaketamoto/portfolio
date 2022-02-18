/*
 * フッターに 追加したい Javascript 等を以下に記述してください。
 * ( To add Javascript in the footer, please write down here. )
 */

(function() {
	var thk = document.getElementById("thk");
	thk.remove();
	 setTimeout(
	  function () {
	  	var thk = document.getElementById("thk");
	  	thk.remove();
	  }, 
	  "3000"
	);
}());
