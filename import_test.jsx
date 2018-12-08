//~ import * as myModule from 'Slider_testing.jsx';
//#include 'Slider_testing.jsx';
#include 'Drop Down List Testing.jsx'
#include 'Slider_testing.jsx'
#include 'eye_choice.jsx'
#include 'Finger_select.jsx'

function main () {
//~     var mode = true;
//~     //testingslider().run();
    var w = new Window("palette", "Extension", undefined);

    //Tabs
    var tpanel = w.add('tabbedpanel');
    tpanel.preferredSize = [350,300];
    
    var eyes = tpanel.add('tab', undefined, "Eye Control");
    var eyes2 = tpanel.add('tab', undefined, "Eye Lids");
    var fingers = tpanel.add('tab', undefined, "Mouth & Fingers");
     
     //Modules
    eye_choice(eyes, false);
    LidWindow(eyes2, false);
    lid_slider(eyes2, false);
    mouths(fingers, false);    
    finger_select(fingers, false);
    
    

	w.okBtn = w.add("button", undefined, "Close Window");
	w.okBtn.onClick = function() {
		$.writeln("OK pressed");
		w.close();
	};
    w.show();
    
    $.writeln("Outer Called");
    return true
    };

main();