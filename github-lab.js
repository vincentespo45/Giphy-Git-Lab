navigateToGithub = () =>{
    window.location.href = "https://www.github.com";
}

findNameInList = (text) => {
    let desiredString = document.getElementById("text-search-area").value;
    window.find(desiredString);
}



 debounceSearch = (func, wait, immediate) => {
	var timeout;
	return () => {
		var context = this, args = arguments;
		var later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};