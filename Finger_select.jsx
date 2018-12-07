//Fingers

Finger_select();

function Finger_select() {
    
    var fin_1 = app.project.item(5).layer("L_thumb").transform;
    var fin_1c = app.project.item(5).layer("L_thumb_closed").transform;
    var fin_2 = app.project.item(5).layer("L_finger_1").transform;
    var fin_2c =app.project.item(5).layer("L_finger_1_closed").transform;
    var fin_3 = app.project.item(5).layer("L_finger_2").transform;
    var fin_3c =app.project.item(5).layer("L_finger_2_closed").transform;
    var fin_4 = app.project.item(5).layer("L_finger_3").transform;
    var fin_4c =app.project.item(5).layer("L_finger_3_closed").transform;
	
    
    var rfin_1 = app.project.item(5).layer("R_thumb").transform;
    var rfin_1c = app.project.item(5).layer("R_thumb_closed").transform;
    var rfin_2 = app.project.item(5).layer("R_finger_1").transform;
    var rfin_2c =app.project.item(5).layer("R_finger_1_closed").transform;
    var rfin_3 = app.project.item(5).layer("R_finger_2").transform;
    var rfin_3c =app.project.item(5).layer("R_finger_2_closed").transform;
    var rfin_4 = app.project.item(5).layer("R_finger_3").transform;
    var rfin_4c =app.project.item(5).layer("R_finger_3_closed").transform;
    
    // Create a window of type palette.
	var w = new Window("palette", "SnpCreateDialog",undefined);  // bounds = [left, top, right, bottom]

	// Add a frame for the contents.
	var h_panel = w.add("panel", undefined, "Hands");
	
    var l_hand = h_panel.add('panel', undefined, "Left Hand (Close Fingers)");
    l_hand.orientation = "row";
    // Add the components, two buttons
	l_hand.fin_1 = l_hand.add("checkbox", undefined, "Thumb");
    l_hand.fin_2 = l_hand.add("checkbox", undefined , "Finger 1");
    l_hand.fin_3 = l_hand.add("checkbox", undefined, "Finger 2");
    l_hand.fin_4 = l_hand.add("checkbox", undefined, "Finger 3");
    
    var r_hand = h_panel.add('panel', undefined, "Right Hand (Close Fingers)");
    r_hand.orientation = "row";
    // Add the components, two buttons
	r_hand.fin_1 = r_hand.add("checkbox", undefined, "Thumb");
    r_hand.fin_2 = r_hand.add("checkbox", undefined , "Finger 1");
    r_hand.fin_3 = r_hand.add("checkbox", undefined, "Finger 2");
    r_hand.fin_4 = r_hand.add("checkbox", undefined, "Finger 3");
	

    //Checkbox functions
    //left hand
	l_hand.fin_1.onClick = function() {
         if (l_hand.fin_1.value == true) {
            finger_sw (fin_1c, fin_1);
        };
        else {
                finger_sw (fin_1, fin_1c);
            }
        };
    
    	l_hand.fin_2.onClick = function() {
         if (l_hand.fin_2.value == true) {
            finger_sw (fin_2c, fin_2);
        };
        else {
                finger_sw (fin_2, fin_2c);
            }
        };
    
    
    	l_hand.fin_3.onClick = function() {
         if (l_hand.fin_3.value == true) {
            finger_sw (fin_3c, fin_3);
        };
        else {
                finger_sw (fin_3, fin_3c);
            }
        };
    
    
    	l_hand.fin_4.onClick = function() {
         if (l_hand.fin_4.value == true) {
            finger_sw (fin_4c, fin_4);
        };
        else {
                finger_sw (fin_4, fin_4c);
            }
        };
        
        //right hand
       	r_hand.fin_1.onClick = function() {
         if (r_hand.fin_1.value == true) {
            finger_sw (rfin_1c, rfin_1);
        };
        else {
                finger_sw (rfin_1, rfin_1c);
            }
        };
    
    	r_hand.fin_2.onClick = function() {
         if (r_hand.fin_2.value == true) {
            finger_sw (rfin_2c, rfin_2);
        };
        else {
                finger_sw (rfin_2, rfin_2c);
            }
        };
    
    
    	r_hand.fin_3.onClick = function() {
         if (r_hand.fin_3.value == true) {
            finger_sw (rfin_3c, rfin_3);
        };
        else {
                finger_sw (rfin_3, rfin_3c);
            }
        };
    
    
    	r_hand.fin_4.onClick = function() {
         if (r_hand.fin_4.value == true) {
            finger_sw (rfin_4c, rfin_4);
        };
        else {
                finger_sw (rfin_4, rfin_4c);
            }
        };
    
  
    
/* Function finger_sw
    
    */
function finger_sw (obj1, obj2) {
    obj1.opacity.setValueAtTime(app.project.activeItem.time, 100);
    var key = obj1.opacity.nearestKeyIndex(app.project.activeItem.time);
    obj1.opacity.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
    obj2.opacity.setValueAtTime(app.project.activeItem.time, 0);
    var key = obj2.opacity.nearestKeyIndex(app.project.activeItem.time);
    obj2.opacity.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
    
    }

//~ if(!lib) {
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
//~   }  


	// Display the window
	w.show();
		
	return true;
		
}


