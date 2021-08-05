var hideShow = function (menu){
    if (menu == 1)     {menu="edits"}
    else if (menu == 2){menu="monitasChinas"}
    else if (menu == 3){menu="faceEdits"}
    else if (menu == 4){menu="wallpapers"}
    var aux = document.getElementById(menu);
    if(aux.className == "hide")     {    aux.className="show";    }
    else if(aux.className == "show"){    aux.className="hide";    }
};
