//@target aftereffects
//Eye choice

lib = false;
if (!lib){ eye_choice();};

function eye_choice () {
        //initialization
        if (!lib)
        var l_eye_1 = app.project.item(91).layer("L_eye_open").transform;
        var l_eye_2 = app.project.item(91).layer("L_eye_happy").transform;
        var l_eye_3 = app.project.item(91).layer("L_eye_closed").transform;
        
        var r_eye_1 = app.project.item(93).layer("R_eye_open").transform;
        var r_eye_2 = app.project.item(93).layer("R_eye_happy").transform;
        var r_eye_3 = app.project.item(93).layer("R_eye_closed").transform;
    
        var l_arr = [l_eye_1, l_eye_2, l_eye_3];
        var r_arr = [r_eye_1, r_eye_2, r_eye_3];
    
    
    var w = new Window ('palette', "", undefined);
    


    var eye_g = w.add("panel", undefined, "Eye");
    eye_g.orientation = "column";
  
//~     eye.add("group", undefined);
    eye_g.add('checkbox', undefined, "Together", {name: "both_sw"});  
    
    var eye = eye_g.add("group", undefined);
    eye.orientation = "row";

    eye.add("group", undefined, {name: "l_grp"});
    eye.l_grp.orientation = "column";
    eye.l_grp.add('statictext', undefined, "Left Eye");
    var l_eye = eye.l_grp.add('dropdownlist', undefined, ["0", "^", "v"]);
    
    
    eye.add("group", undefined, {name: "r_grp"});
    eye.r_grp.orientation = "column";
    eye.r_grp.add('statictext', undefined, "Right Eye");
    var r_eye = eye.r_grp.add('dropdownlist', undefined, ["0", "^", "v"]);
    

//together checkbox
eye_g.both_sw.onClick = function() {
     if (this.value == true) {
        eye.r_grp.enabled = false;
        };
    else {
        eye.r_grp.enabled = true;
        };
    };


// drop list functions
l_eye.onChange = function() {
    lid_change(l_arr, this.selection.index)
    if (eye_g.both_sw.value) {
         lid_change(r_arr, this.selection.index);   
        };
    };

r_eye.onChange = function() {

    lid_change(r_arr, this.selection.index);
    };

/*
    Function lid_change(arr, ind)
    arr: array of lid elements
    ind: index of drop down list choice
    Keys opacity to zero of all elements in arr except for the element indicated by ind.
    If the drop down list choice is 0 (None) all elements are keyed to zero.
*/
function lid_change(arr, ind) {
    // for loop through array, turn each object opacity to zero
    //turn the desired opacity to one
    $.writeln("Function Called " + ind);
    for (i = 0; i < arr.length; i++) {
             if (i != ind) {
                arr[i].opacity.setValueAtTime(app.project.activeItem.time, 0);
            };
            else {
                    arr[i].opacity.setValueAtTime(app.project.activeItem.time, 100);

                };
            var key = arr[i].opacity.nearestKeyIndex(app.project.activeItem.time);
            arr[i].opacity.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
        };    
    };    
    
    
    
    
    
    
    
    
    
    
if(!lib) {
var buttons = w.add('group');
buttons.orientation = "row";
buttons.add ('button', undefined, "OK", {name: 'ok'});
buttons.add('button', undefined, "Cancel", {name: 'cancel'});
//~ };    
    

    //children names from the parent group.
    buttons.children['ok'].onClick = function()
    {
		//$.writeln("Cancel pressed");
		w.close();
	};
	buttons.cancel.onClick = function() {
		//$.writeln("Cancel pressed");
		w.close();
	};
    
    w.show();
  }  
    
    
    
    return true;
    
    
    
    
    
    }


