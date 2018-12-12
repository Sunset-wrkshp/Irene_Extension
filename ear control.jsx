//@target aftereffects

ear_control();

function ear_control () {
    var l_ear = app.project.item(2).layer("L_ear").transform;
    var r_ear = app.project.item(2).layer("R_ear").transform;

//~     if  (w == undefined) {
        var w = new Window ('palette', "", undefined);
//~     };
    
    var panel = w.add('panel', undefined, "Ear Control");
    panel.add('group', undefined);
    panel.children[0].orientation = "row";
    var left_s = panel.children[0].add('scrollbar {preferredSize: [100,20], jumpdelta: 5, helpTip: "this",minvalue: -360, maxvalue: 360, value: 0}');
    var right_s = panel.children[0].add('scrollbar {preferredSize: [100,20], jumpdelta: 5, helpTip: "this",minvalue: -360, maxvalue: 360, value: 0}');
    
    
    left_s.onChanging = function () {
        rotate();
    };

    right_s.onChanging = function () {
        rotate();
    };
    
    
    //mouth scaling function
    function rotate() {
        y_val.text = y_scroll.value.toFixed(0) *-1;
        
        if (r_gp.together.value) {
            x_val.text = y_scroll.value.toFixed(0) *-1;
            m_comp.scale.setValueAtTime(app.project.activeItem.time, [y_scroll.value*-1, y_scroll.value*-1 , 0]);
        } else {
            x_val.text = x_scroll.value.toFixed(0);
            m_comp.scale.setValueAtTime(app.project.activeItem.time, [x_scroll.value, y_scroll.value*-1 , 0]);
            }
    };
    
//~     if(!lib) {
    var buttons = w.add('group');
    buttons.orientation = "row";
    buttons.add ('button', undefined, "OK", {name: 'ok'});
    buttons.add('button', undefined, "Cancel", {name: 'cancel'});

    //children names from the parent group.
    buttons.children['ok'].onClick = function() {
		w.close();
	};
	buttons.cancel.onClick = function() {
		w.close();
	};
    
    w.show();
//~   }  
    
    
    return true;
    };