//@target aftereffects
//Mouths

lib = false;

if(!lib){ mouths(undefined, undefined); };


function mouths(w, test) {
        //initialization
         var mouth1 = app.project.item(92).layer("Smile_open").transform;
         var mouth2 = app.project.item(92).layer("Closed Mouth").transform;
         var mouth3 = app.project.item(92).layer("Smile_teeth").transform;
         var mouth4 = app.project.item(92).layer("O_W").transform;
         var mouth5 = app.project.item(92).layer("Smile_L").transform;
         var mouth6 = app.project.item(92).layer("Smile_th").transform;
         var mouth7 = app.project.item(92).layer("Smile_v").transform;

        var arr = [mouth1, mouth2,mouth3,mouth4,mouth5,mouth6,mouth7];
    
        // window creation
        if  (w == undefined) {
            var w = new Window ('palette', "", undefined);
        };

        // Mouths Panel
        var panel = w.add('panel', undefined, "Mouths");
        
        // Drop Down List
        var dlist = panel.add('dropdownlist', undefined, ["None","Open smile", "Closed", "Teeth \"E\"", 'Open "O"', '"L"','"TH"', '"V"']);

    
        var scalegp = panel.add('group {orientation: "row"}');
//~         scalegp.orientation = 'row';
        
        //Scrollbar
//~         var scroll = scalegp.add('scrollbar', undefined, 0);
//~         scroll.preferredSize = [20, 100];
//~         scroll.stepdelta = 1;
//~         scroll.jumpdelta = 1;
          var y_scroll = scalegp.add('scrollbar {preferredSize: [20,100], jumpdelta: 5, helpTip: "this",minvalue: -100, maxvalue: 0, value: -100}');
          var r_gp = scalegp.add('group {orientation: "column"}');
//~           r_gp.orientation = "column";
          
          var x_val = r_gp.add('edittext {text: "-", characters: 3}');
          var y_val = r_gp.add('edittext {text: "-", characters: 3}');
//~           r_gp.add('statictext', undefined, "Text here");
          var x_scroll = r_gp.add('scrollbar {preferredSize: [100,20], jumpdelta: 5, helpTip: "this", value: 100}');

        
        



        // Drop Down List function
        dlist.onChange = function() {
            lid_change(arr, this.selection.index)
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


