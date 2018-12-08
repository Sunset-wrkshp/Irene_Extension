//Mouths

lib = true;

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
    
        if  (w == undefined) {
            var w = new Window ('palette', "", undefined);
        };

        var panel = w.add('panel', undefined, "Mouths");
        
        var dlist = panel.add('dropdownlist', undefined, ["None","Open smile", "Closed", "Teeth \"E\"", 'Open "O"', '"L"','"TH"', '"V"']);

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


