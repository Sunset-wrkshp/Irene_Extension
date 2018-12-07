//Fingers

Finger_select();

function Finger_select() {
    
    var fin_1 = app.project.item(5).layer("L_thumb").transform;
    var fin_1c = app.project.item(5).layer("L_thumb_closed").transform;
    var fin_2 = app.project.item(5).layer("L_thumb_closed").transform;
    var fin_2c =app.project.item(5).layer("L_thumb_closed").transform;
    var fin_3 = app.project.item(5).layer("L_thumb_closed").transform;
    var fin_3c =app.project.item(5).layer("L_thumb_closed").transform;
    var fin_4 = app.project.item(5).layer("L_thumb_closed").transform;
    var fin_4c =app.project.item(5).layer("L_thumb_closed").transform;
	
    
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
    l_hand.fin_4 = l_hand.add("checkbox", undefined, "finger 3");
	

    // Register event listeners that define the button behavior
	l_hand.fin_1.onClick = function() {
         if (l_hand.fin_1.value == true) {
            finger_sw (fin_1c, fin_1);
        };
        else {
                finger_sw (fin_1, fin_1c);
            }
		//win.close();
        };
    
    //closing fingers
	l_hand.fin_2.onClick = function() {
         if (l_hand.fin_2.value == true) {
            $.writeln("Box checked");
            $.writeln(fin_2.value);
            fin_2c.setValue(100);
            fin_2.setValue(0);
        };
        else {
                $.writeln("Box unchecked");
                $.writeln(fin_2.value);
                fin_2c.setValue(0);
                fin_2.setValue(100);
            }
		//win.close();
        };
    
    
    	l_hand.fin_3.onClick = function() {
         if (l_hand.fin_3.value == true) {
            $.writeln("Box checked");
            $.writeln(fin_3.value);
            fin_3c.setValue(100);
            fin_3.setValue(0);
        };
        else {
                $.writeln("Box unchecked");
                $.writeln(fin_3.value);
                fin_3c.setValue(0);
                fin_3.setValue(100);
            }
		//win.close();
        };

	l_hand.fin_4.onClick = function() {
         if (l_hand.fin_4.value == true) {
            $.writeln("Box checked");
            $.writeln(fin_4.value);
            fin_4c.setValue(100);
            fin_4.setValue(0);
        };
        else {
                $.writeln("Box unchecked");
                $.writeln(fin_4.value);
                fin_4c.setValue(0);
                fin_4.setValue(100);
            }
		//win.close();
        };
    

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


