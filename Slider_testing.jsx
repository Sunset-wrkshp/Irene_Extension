//@target aftereffects
//Slider Control Testing

lib = true;
if(!lib) {
    lid_slider(undefined, false);
}



function lid_slider(w, test) {

if (test == undefined) {
    test = true;
    }
//Global Variables: Objects in the AE file.

if (test) {
    var t_lid_obj = app.project.item(4).layer("Solid 2").transform;
    var l_lid_obj = app.project.item(4).layer("Solid 1").transform;
    var Rt_lid_obj = app.project.item(4).layer("Solid 9").transform;
    var Rl_lid_obj = app.project.item(4).layer("Solid 13").transform;
    };
else {
    var t_lid_obj = undefined;
    var l_lid_obj = undefined;
    var Rt_lid_obj = app.project.item(4).layer("Solid 2").transform;
    var Rl_lid_obj = app.project.item(4).layer("Solid 1").transform;
    };

if (w == undefined) {
    var w = new Window ('palette', "Eye Lid Sliders", undefined);
};
//w.orientation = 'row';

w.add('checkbox', undefined, 'Together', {name: 'both_sw'});

var slider_group = w.add('Panel', undefined, 'L_lid');
slider_group.orientation = 'row';

var top_lid_group = slider_group.add('Panel', undefined, 'Top Lid');

top_lid_group.add('group', undefined, {name: 'box_group'});
top_lid_group.box_group.orientation = 'row';
top_lid_group.box_group.add('checkbox',undefined,'Visible', {name:'vis_b'});
//top_lid_group.box_group.add('edittext', undefined, '0', {name: 'top_v'});
top_lid_group.box_group.add('edittext', undefined, '0', {name: 'lid_v'});
top_lid_group.box_group.lid_v.preferredSize = [25,20];
var top_slider = top_lid_group.add('slider', undefined, 'Slider');
top_slider.maxvalue = 14;
top_slider.minvalue = -22;
top_lid_group.add('button', undefined, 'Reset Silder', {name: 'Reset'});

var bot_lid_group = slider_group.add('Panel', undefined, 'Bottom Lid');

bot_lid_group.add('group', undefined, {name: 'box_group'});
bot_lid_group.box_group.add('checkbox',undefined,'Visible', {name:'vis_b'});
//bot_lid_group.box_group.add('edittext', undefined, '0', {name: 'bot_v'});
bot_lid_group.box_group.add('edittext', undefined, '0', {name: 'lid_v'});
bot_lid_group.box_group.lid_v.preferredSize = [25,20];
var bot_slider = bot_lid_group.add('slider', undefined, 'Slider');
bot_slider.maxvalue = 12;
bot_slider.minvalue = -32;
bot_lid_group.add('button', undefined, 'Reset Silder', {name: 'Reset'});

//Right Eye Lids
var Rslider_group = w.add('Panel', undefined, 'R_lid');
Rslider_group.orientation = 'row';

var Rtop_lid_group = Rslider_group.add('Panel', undefined, 'Top Lid');

Rtop_lid_group.add('group', undefined, {name: 'box_group'});
Rtop_lid_group.box_group.orientation = 'row';
Rtop_lid_group.box_group.add('checkbox',undefined,'Visible', {name:'vis_b'});
//top_lid_group.box_group.add('edittext', undefined, '0', {name: 'top_v'});
Rtop_lid_group.box_group.add('edittext', undefined, '0', {name: 'lid_v'});
Rtop_lid_group.box_group.lid_v.preferredSize = [25,20];
var Rtop_slider = Rtop_lid_group.add('slider', undefined, 'Slider');
Rtop_slider.maxvalue = 14;
Rtop_slider.minvalue = -22;
Rtop_lid_group.add('button', undefined, 'Reset Silder', {name: 'Reset'});

var Rbot_lid_group = Rslider_group.add('Panel', undefined, 'Bottom Lid');

Rbot_lid_group.add('group', undefined, {name: 'box_group'});
Rbot_lid_group.box_group.add('checkbox',undefined,'Visible', {name:'vis_b'});
//bot_lid_group.box_group.add('edittext', undefined, '0', {name: 'bot_v'});
Rbot_lid_group.box_group.add('edittext', undefined, '0', {name: 'lid_v'});
Rbot_lid_group.box_group.lid_v.preferredSize = [25,20];
var Rbot_slider = Rbot_lid_group.add('slider', undefined, 'Slider');
Rbot_slider.maxvalue = 12;
Rbot_slider.minvalue = -32;
Rbot_lid_group.add('button', undefined, 'Reset Silder', {name: 'Reset'});



var buttons = w.add('group');
buttons.orientation = "row";
buttons.add ('button', undefined, "OK", {name: 'ok'});
buttons.add('button', undefined, "Cancel", {name: 'cancel'});




// origin position of objects taken before function call.
if (test) {
    var old_position = t_lid_obj.position.valueAtTime(app.project.activeItem.time, false);
    var old_position2 = l_lid_obj.position.valueAtTime(app.project.activeItem.time, false);
    var old_position3 = Rt_lid_obj.position.valueAtTime(app.project.activeItem.time, false);
    var old_position4 = Rl_lid_obj.position.valueAtTime(app.project.activeItem.time, false);
    };
else {
    var old_position = [0,0,0];
    var old_position2 = [0,0,0];
    var old_position3 = [0,0,0];
    var old_position4 = [0,0,0];
    }
 
 //functions
 
 //together checkbox
 w.both_sw.onClick = function () {
     //disable the Right Side boxes
     //have if statements inside the L side sliders to handle it. 
     if (this.value == true) {
        Rslider_group.enabled = false;
        };
    else {
        Rslider_group.enabled = true;
        };
};
     
 

//Visibility Checkboxes
top_lid_group.box_group.vis_b.onClick = function() {
    opacity_bx (t_lid_obj, this);
    if (w.both_sw.value){
        opacity_bx (Rt_lid_obj, this);
        }
    };

bot_lid_group.box_group.vis_b.onClick = function() {
     opacity_bx (l_lid_obj, this);
     if (w.both_sw.value){
        opacity_bx (Rl_lid_obj, this);
        }

    };


Rtop_lid_group.box_group.vis_b.onClick = function() {
    opacity_bx (Rt_lid_obj, this);
    };

Rbot_lid_group.box_group.vis_b.onClick = function() {
     opacity_bx (Rl_lid_obj, this);

    };
 
 
 //Sliders
top_slider.onChange = function() {
    lid_move (t_lid_obj, old_position, top_lid_group);
    if (w.both_sw.value){
        lid_move (Rt_lid_obj, old_position3, top_lid_group);
        }
    };
    
    
 bot_slider.onChange = function() {
    lid_move (l_lid_obj, old_position2, bot_lid_group);
    if (w.both_sw.value){
        lid_move (Rl_lid_obj, old_position4, bot_lid_group);
        }
    };

Rtop_slider.onChange = function() {
    lid_move (Rt_lid_obj, old_position3, Rtop_lid_group);
    };
    
    
Rbot_slider.onChange = function() {
    lid_move (Rl_lid_obj, old_position4, Rbot_lid_group);
    };



//Slider Textboxes
top_lid_group.box_group.lid_v.onChange = function() {
    top_slider.value = this.text;
     //$.writeln(this.text);

    t_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position[0], (old_position[1] + top_slider.value)]); 
     if (w.both_sw.value){
        Rt_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position3[0], (old_position3[1] + top_slider.value)]);     
        }

    };

bot_lid_group.box_group.lid_v.onChange = function() {
    bot_slider.value = this.text;
     //$.writeln(this.text);
   l_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position2[0], (old_position2[1] + bot_slider.value)]); 
    if (w.both_sw.value){
        Rl_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position4[0], (old_position4[1] + bot_slider.value)]);
        }
    };

Rtop_lid_group.box_group.lid_v.onChange = function() {
    Rtop_slider.value = this.text;
    Rt_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position3[0], (old_position3[1] + Rtop_slider.value)]); 
    };

Rbot_lid_group.box_group.lid_v.onChange = function() {
    Rbot_slider.value = this.text;
     //$.writeln(this.text);
   Rl_lid_obj.position.setValueAtTime(app.project.activeItem.time, [old_position4[0], (old_position4[1] + Rbot_slider.value)]); 
    };


//Reset Buttons
top_lid_group.Reset.onClick = function() {
    top_slider.value = 0;
    lid_move (t_lid_obj, old_position, top_lid_group);  
    if (w.both_sw.value){
        lid_move (Rt_lid_obj, old_position3, top_lid_group);    
        }

    };

bot_lid_group.Reset.onClick = function() {
    bot_slider.value = 0;
     lid_move (l_lid_obj, old_position2, bot_lid_group);
    if (w.both_sw.value){
        lid_move (Rl_lid_obj, old_position4, bot_lid_group);    
        }
    
    };

Rtop_lid_group.Reset.onClick = function() {
     Rtop_slider.value = 0;
    lid_move (Rt_lid_obj, old_position3, Rtop_lid_group);    
    };

Rbot_lid_group.Reset.onClick = function() {
    Rbot_slider.value = 0;
     lid_move (Rl_lid_obj, old_position4, Rbot_lid_group);

    
    };

//OK CANCEL buttons
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

 //checkbox opacity function
function opacity_bx(obj, ch_bx) {
     $.writeln(ch_bx.value);
    if(ch_bx.value == true){
        obj.opacity.setValueAtTime(app.project.activeItem.time, 100);
        };
    else {
        obj.opacity.setValueAtTime(app.project.activeItem.time, 0);
        };
    var key = obj.opacity.nearestKeyIndex(app.project.activeItem.time);
    obj.opacity.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
    }; 

//lid moving function
function lid_move(lid_obj, pos, lid_grp) {
     var slider = lid_grp.children[1];  
//~      $.writeln(pos);
//~      $.writeln(slider.value);
    lid_obj.position.setValueAtTime(app.project.activeItem.time, [pos[0], pos[1] + slider.value, pos[2]])
    lid_grp.box_group.lid_v.text = slider.value.toFixed(0);
    };

if (!lib){
    w.show ();
};
    
    
    return true;


};


