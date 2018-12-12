//@target aftereffects
//Mouths

lib = true;

if(!lib){ mouths(undefined, undefined); };


function mouths(w, test) {
        //initialization
         var mouth1 = app.project.item(92).layer("Smile_open Outlines").transform;
         var mouth2 = app.project.item(92).layer("Closed Mouth Outlines").transform;
         var mouth3 = app.project.item(92).layer("Smile_teeth Outlines").transform;
         var mouth4 = app.project.item(92).layer("O_W Outlines").transform;
         var mouth5 = app.project.item(92).layer("Smile_L Outlines").transform;
         var mouth6 = app.project.item(92).layer("Smile_th Outlines").transform;
         var mouth7 = app.project.item(92).layer("Smile_v Outlines").transform;

        var arr = [mouth1, mouth2,mouth3,mouth4,mouth5,mouth6,mouth7];
        
        //mouth composition
        var m_comp = app.project.item(2).layer("Mouth").transform; 
    
        // window creation
        if  (w == undefined) {
            var w = new Window ('palette', "", undefined);
        };

        // Mouths Panel
        var panel = w.add('panel', undefined, "Mouths");
        
        // Drop Down List
        var dlist = panel.add('dropdownlist', undefined, ["None","Open smile", "Closed", "Teeth \"E\"", 'Open "O"', '"L"','"TH"', '"V"']);

    
        var scalegp = panel.add('panel', undefined, "Scale");
        scalegp.orientation = 'row';
        
          //Y Scrollbar
          var y_scroll = scalegp.add('scrollbar {preferredSize: [20,100], jumpdelta: 5, helpTip: "this",minvalue: -100, maxvalue: 0, value: -100}');
          var r_gp = scalegp.add('group {orientation: "column"}');
          //textboxes
          r_gp.add('checkbox', undefined, 'Together', {name: 'together'});
          r_gp.add('group', undefined);
          var x_val = r_gp.children[1].add('edittext {text: "-", characters: 3}');
          var y_val = r_gp.children[1].add('edittext {text: "-", characters: 3}');
          
          
          //X scrollbar
          var x_scroll = r_gp.add('scrollbar {preferredSize: [100,20], jumpdelta: 5, helpTip: "this", value: 100}');


        // Drop Down List function
        dlist.onChange = function() {
            lid_change(arr, this.selection.index)
            };

        function lid_change(arr, ind) {
        // for loop through array, turn each object opacity to zero
        //turn the desired opacity to one
//~         $.writeln("Function Called " + ind);
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
    
        x_scroll.onChanging = function () {
            scale();
            };
        
        y_scroll.onChanging = function () {
            scale();
            };
        
        r_gp.together.onClick = function () {
            if (this.value) {
                x_scroll.enabled = false;
                x_val.enabled = false;
                }
            else {
                x_scroll.enabled = true;
                x_val.enabled = true;
                };
            };

//mouth scaling function
function scale() {
    y_val.text = y_scroll.value.toFixed(0) *-1;
    
    if (r_gp.together.value) {
        x_val.text = y_scroll.value.toFixed(0) *-1;
        m_comp.scale.setValueAtTime(app.project.activeItem.time, [y_scroll.value*-1, y_scroll.value*-1 , 0]);
    } else {
        x_val.text = x_scroll.value.toFixed(0);
        m_comp.scale.setValueAtTime(app.project.activeItem.time, [x_scroll.value, y_scroll.value*-1 , 0]);
        }
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


