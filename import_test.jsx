//~ import * as myModule from 'Slider_testing.jsx';
//#include 'Slider_testing.jsx';
#include 'Drop Down List Testing.jsx'
#include 'Slider_testing.jsx'
#include 'eye_choice.jsx'

function main () {
//~     var mode = true;
//~     //testingslider().run();
    var w = new Window("palette", "Extension", undefined);
//~     var tpanel = w.add('tabbedpanel');
//~     tpanel.preferredSize = [350,300];
//~     var general = tpanel.add('tab', undefined, "Test1");
//~     general.add('statictext', undefined, "within Test1 Tab");
    eye_choice(w, false);
    LidWindow(w, false);
    lid_slider(w, false);
    

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