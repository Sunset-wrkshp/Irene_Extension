//@target aftereffects

ear_control();

function ear_control () {
    var l_ear = app.project.item(2).layer("L_ear").transform;
    var r_ear = app.project.item(2).layer("R_ear").transform;

//~     if  (w == undefined) {
        var w = new Window ('palette', "", undefined);
//~     };
    
    var panel = w.add('panel', undefined, "Ear Control");
    panel.add("group", undefined, {name: "top_gp"});
    panel.top_gp.orientation = "row";
    var l_box = panel.top_gp.add('edittext{text: "-", characters: 3}');
    var l_reset = panel.top_gp.add('button', undefined, '(R)');
    panel.top_gp.add('checkbox', undefined, 'Link', {name: 'link'});
    var r_reset = panel.top_gp.add('button', undefined, '(R)');
    var r_box = panel.top_gp.add('edittext{text: "-", characters: 3}');
    
    panel.add('group', undefined, {name: 'bot_gp'});
    panel.bot_gp.orientation = "row";
    var left_s = panel.bot_gp.add('scrollbar {preferredSize: [100,20], jumpdelta: 1, helpTip: "this",minvalue: -180, maxvalue: 180, value: 0}');
    var right_s = panel.bot_gp.add('scrollbar {preferredSize: [100,20], jumpdelta: 1, helpTip: "this",minvalue: -180, maxvalue: 180, value: 0}');
    
    
    left_s.onChanging = function () {
        rotate(left_s, l_ear);
        l_box.text = this.value.toFixed(0);
    };

    right_s.onChanging = function () {
        rotate(right_s, r_ear);
        r_box.text = this.value.toFixed(0);
        
    };
    
    l_box.onChange = function () {
        left_s.value = this.text.toFixed(0);
        rotate(left_s, l_ear);
        }
    
    r_box.onChange = function () {
        right_s.value = this.text.toFixed(0);
        rotate(right_s, r_ear);
        }
    
    //reset buttons
    l_reset.onClick = function () {
        if(this.value){
            left_s.value = 0;
            rotate(left_s, l_ear);
            l_box.text = left_s.value.toFixed(0);
            } 
        }
    
    r_reset.onClick = function () {
        if(this.value){
            right_s.value = 0;
            rotate(right_s, r_ear);
            r_box.text = right_s.value.toFixed(0);
            } 
        }    
    //ear rotating
    function rotate(slider, ear) {
        ear.rotation.setValueAtTime(app.project.activeItem.time, slider.value.toFixed(0));
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