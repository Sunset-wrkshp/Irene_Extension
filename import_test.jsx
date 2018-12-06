//~ import * as myModule from 'Slider_testing.jsx';
//#include 'Slider_testing.jsx';
#include 'Drop Down List Testing.jsx'
#include 'Slider_testing.jsx'

function main () {
//~     var mode = true;
//~     //testingslider().run();
    var w = new Window("palette", "Output Settings", undefined);
//~     var tpanel = w.add('tabbedpanel');
//~     tpanel.preferredSize = [350,300];
//~     var general = tpanel.add('tab', undefined, "Test1");
//~     general.add('statictext', undefined, "within Test1 Tab");
    
    LidWindow(w, true);
    lid_slider(w, true);

	w.okBtn = w.add("button", undefined, "Close Window");
//~ 	win.btnPanel.cancelBtn = win.btnPanel.add("button", [120, 65, 210, 85], "Cancel");
	// Register event listeners that define the button behavior
	w.okBtn.onClick = function() {
		$.writeln("OK pressed");
		w.close();
	};
    w.show();
//~     //create a window here, and pass to other functions to create things.
    
    $.writeln("Outer Called");
    return true
    };

main();