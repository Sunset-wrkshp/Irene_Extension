//testing things


/*idea is to have the references to the objects in variables
    use a for loop to put them all in an array for each eye
    index through those in the program to access them. 
    
    array vs object use
    array would just use the index from the drop down list.
    object properties can be called by name (easier to recognize)
    case/ switch statement?
    
    use array because adding new ones would be easier and would not require many code changes. 
    
    */

//var test = true;

//~ if (test) {
//~     //left top lid
//~     var lid_0 = app.project.item(4).layer("Solid 2").transform;
//~     var lid_1 = app.project.item(4).layer("Solid 3").transform;
//~     var lid_2 = app.project.item(4).layer("Solid 4").transform;
//~     var lid_3 = app.project.item(4).layer("Solid 5").transform;
//~     
//~     //left bottom lid
//~     var lid_4 = app.project.item(4).layer("Solid 1").transform;
//~     var lid_5 = app.project.item(4).layer("Solid 6").transform;
//~     var lid_6 = app.project.item(4).layer("Solid 7").transform;
//~     var lid_7 = app.project.item(4).layer("Solid 8").transform;
//~     
//~     var lid_8 = app.project.item(4).layer("Solid 9").transform;
//~     var lid_9 = app.project.item(4).layer("Solid 10").transform;
//~     var lid_10 = app.project.item(4).layer("Solid 11").transform;
//~     var lid_11 = app.project.item(4).layer("Solid 12").transform;
//~     
//~     //left bottom lid
//~     var lid_12 = app.project.item(4).layer("Solid 13").transform;
//~     var lid_13 = app.project.item(4).layer("Solid 14").transform;
//~     var lid_14 = app.project.item(4).layer("Solid 15").transform;
//~     var lid_15 = app.project.item(4).layer("Solid 16").transform;
//~     };
//~ else {
//~     //left top lid
//~     var lid_0 = app.project.item(4).layer("Solid 2").transform;
//~     var lid_1 = app.project.item(4).layer("Solid 3").transform;
//~     var lid_2 = app.project.item(4).layer("Solid 4").transform;
//~     var lid_3 = app.project.item(4).layer("Solid 5").transform;
//~     
//~      //left bottom lid
//~     var lid_4 = app.project.item(4).layer("Solid 2").transform;
//~     var lid_5 = app.project.item(4).layer("Solid 3").transform;
//~     var lid_6 = app.project.item(4).layer("Solid 4").transform;
//~     var lid_7 = app.project.item(4).layer("Solid 5").transform;
//~     };


//~ var l_t_lid_arr = [lid_0, lid_1, lid_2, lid_3];
//~ var l_b_lid_arr = [lid_4, lid_5, lid_6, lid_7];
//~ var r_t_lid_arr = [lid_8, lid_9, lid_10, lid_11];
//~ var r_b_lid_arr = [lid_12, lid_13, lid_14, lid_15];




function LidWindow(w,test) 
{
 if (w == undefined) {
     var w = new Window ('palette', "Drop Down List Test", undefined);
     };
//var w = new Window ('palette', "Drop Down List Test", undefined);
if (test == undefined) {
    test = true;
    };

// stuff
if (test) {
    //left top lid
    var lid_0 = app.project.item(4).layer("Solid 2").transform;
    var lid_1 = app.project.item(4).layer("Solid 3").transform;
    var lid_2 = app.project.item(4).layer("Solid 4").transform;
    var lid_3 = app.project.item(4).layer("Solid 5").transform;
    
    //left bottom lid
    var lid_4 = app.project.item(4).layer("Solid 1").transform;
    var lid_5 = app.project.item(4).layer("Solid 6").transform;
    var lid_6 = app.project.item(4).layer("Solid 7").transform;
    var lid_7 = app.project.item(4).layer("Solid 8").transform;
    
    //right top lid
    var lid_8 = app.project.item(4).layer("Solid 9").transform;
    var lid_9 = app.project.item(4).layer("Solid 10").transform;
    var lid_10 = app.project.item(4).layer("Solid 11").transform;
    var lid_11 = app.project.item(4).layer("Solid 12").transform;
    
    //right bottom lid
    var lid_12 = app.project.item(4).layer("Solid 13").transform;
    var lid_13 = app.project.item(4).layer("Solid 14").transform;
    var lid_14 = app.project.item(4).layer("Solid 15").transform;
    var lid_15 = app.project.item(4).layer("Solid 16").transform;
    };
else {
    //left top lid
    var lid_0 = app.project.item(91).layer("L_Tlid_forslash").transform;
    var lid_1 = app.project.item(91).layer("L_Tlid_backslash").transform;
    var lid_2 = app.project.item(91).layer("L_Tlid_Flat").transform;
    var lid_3 = undefined;
    
    //left bottom lid
    var lid_4 = app.project.item(91).layer("L_Blid_forslash").transform;
    var lid_5 = app.project.item(91).layer("L_Blid_backslash").transform;
    var lid_6;
    var lid_7;
    
    //right top lid
    var lid_8 = app.project.item(93).layer("R_Tlid_forslash").transform;
    var lid_9 = app.project.item(93).layer("R_Tlid_backslash").transform;
    var lid_10 = app.project.item(93).layer("R_Tlid_Flat").transform;
    var lid_11 ;
    
    //right bottom lid
    var lid_12 = app.project.item(93).layer("R_Blid_forslash").transform;
    var lid_13 = app.project.item(93).layer("R_Blid_backslash").transform;
    var lid_14 ;
    var lid_15 ;
    };


var l_t_lid_arr = [lid_0, lid_1, lid_2];
var l_b_lid_arr = [lid_4, lid_5];
var r_t_lid_arr = [lid_8, lid_9, lid_10];
var r_b_lid_arr = [lid_12, lid_13];




//Panel starts
var lid_panel = w.add('panel', undefined, 'Eye Lid Control');
lid_panel.orientation = 'column';
lid_panel.add('checkbox', undefined, "Together", {name: "both_sw"});

var lid_group = lid_panel.add("group", undefined);
lid_group.orientation = "row";

var l_lid = lid_group.add('panel', undefined, "Left Eye");
var l_t_lid = l_lid.add('dropdownlist', undefined, ["None",'item 1', 'item 2', 'item 3']);
var l_b_lid = l_lid.add('dropdownlist', undefined, ["None",'item 1', 'item 2']);

lid_group.add('group', undefined, {name:"lid_labels"});
lid_group.lid_labels.orientation = "column";
lid_group.lid_labels.add('statictext', undefined, "Top Lid");
lid_group.lid_labels.add('statictext', undefined, "Bottom Lid");

var r_lid = lid_group.add('panel', undefined, "Right Eye");
var r_t_lid = r_lid.add('dropdownlist', undefined, ["None",'item 1', 'item 2', 'item 3', "item 4"]);
var r_b_lid = r_lid.add('dropdownlist', undefined, ["None",'item 1', 'item 2', 'item 3', "item 4"]);

//together checkbox
//should this set the other lid to the current value of the left lid?
lid_panel.both_sw.onClick = function() {
     if (this.value == true) {
        r_lid.enabled = false;
        };
    else {
        r_lid.enabled = true;
        };
    };


// drop list functions
l_t_lid.onChange = function() {
    lid_change(l_t_lid_arr, this.selection.index)
    if (lid_panel.both_sw.value) {
         lid_change(r_t_lid_arr, this.selection.index);   
        };
    };

l_b_lid.onChange = function() {

    lid_change(l_b_lid_arr, this.selection.index)
        if (lid_panel.both_sw.value) {
         lid_change(r_b_lid_arr, this.selection.index);   
        };
    };

r_t_lid.onChange = function() {

    lid_change(r_t_lid_arr, this.selection.index)
    };

r_b_lid.onChange = function() {

    lid_change(r_b_lid_arr, this.selection.index)
    };

function lid_change(arr, ind) {
    // for loop through array, turn each object opacity to zero
    //turn the desired opacity to one
    $.writeln("Function Called " + ind);
    for (i = 1; i <= arr.length; i++) {
             if (i != ind) {
                arr[i-1].opacity.setValueAtTime(app.project.activeItem.time, 0);
            };
            else if (ind != 0) {
                    arr[i-1].opacity.setValueAtTime(app.project.activeItem.time, 100);

                };
            var key = arr[i-1].opacity.nearestKeyIndex(app.project.activeItem.time);
            arr[i-1].opacity.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
        };    
    };

var buttons = w.add('group');
buttons.add ('button', undefined, "OK", {name: 'ok'});
w.show ();
		
     buttons.children['ok'].onClick = function()
    {
		//$.writeln("Cancel pressed");
		w.close();
	};

	return "red";    
    
    
    
}


if(typeof(LidWindow_unitTest) == "undefined") {
    LidWindow(undefined,false);
}


