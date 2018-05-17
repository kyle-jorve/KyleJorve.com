//========------------------------------==========//
//                COPYRIGHT INFO                  //
//========------------------------------==========//
(function () {
    var copyEl = document.querySelector('#copyright'),
        copyCont = copyEl.textContent,
        copyArr = copyCont.split(' '),
        curYear = new Date().getFullYear(),
        copyYeari,
        copyYear;

    //Detect year
    for (var i = 0; i < copyArr.length; i++) {
        if (copyArr[i].length === 4 && !isNaN(parseInt(copyArr[i])) && copyArr[i][0].indexOf("2") > -1) {
            copyYeari = i;
            copyYear = parseInt(copyArr[i]);
        }
    }

    //Determine whether written year matches current year
    if (curYear !== copyYear) {
        //If it doesn't, append the current year
        copyEl.innerHTML = copyEl.innerHTML.replace(copyYear, copyYear + '-' + curYear);
    }
})();