/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
//双列列表+下划线:用于数值改变 long版本
var numlong_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 180px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul><span id="under">_</span>';

//单列列表：用于菜单的显示
var list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i}'
    + '<li>${i}</li>'
    + '{@/each}'
    + '</ul>';

//Yes Or No 单列列表：用于菜单的显示
var list_yes_no_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i}'
    + '<li>${i}</li>'
    + '{@/each}'
    + '</ul><div class="yes-no-box"><p>SEND MESSAGE ARE YOU SURE</p><p><span>YES</span><span>NO</span></p></div>';

//Yes Or No 单列列表：用于菜单的显示 channel专用型
var list_yes_no_channel_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i}'
    + '<li>${i}</li>'
    + '{@/each}'
    + '</ul><div class="yes-no-box"><p>'+'${context}'+'</p><p><span>YES</span><span>NO</span></p></div>';


//双列列表:用于msg tx与rx的显示
var dbl_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul>';

//双列列表:用于msg tx与rx的显示 长度较长的时候使用
var dbl_listlong_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 180px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul>';

//三层列表
var treble_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 100px;display: inline-block;">${i}</span><span>${key[index]}</span><span>${threelist[index]}</span></li>'
    + '{@/each}'
    + '</ul>';


//选择列表:用于set msg type时的显示
var select_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul>'
    + '<ul class="select-box">'
    + '{@each select as j}'
    + '<li>${j}</li>'
    + '{@/each}'
    + '</ul>';

//双列列表+下划线:用于数值改变
var num_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '{@each list as i, index}'
    + '<li><span style="width: 120px;display: inline-block;">${i}</span><span>${key[index]}</span></li>'
    + '{@/each}'
    + '</ul><span id="under">_</span>';

//双列列表+下划线:用于数值改变
var msg_list_tpl = '<ul>'
    + '<li>'
    + '${title}'
    + '</li>'
    + '<li class="set-msg">'
    + '<p>'
    + '{@each content as i, index}'
    + '<span>${i}</span>'
    + '{@/each}'
    + '</p>'
    + '</li>'
    + '</ul>';

//sensor专用
var sensor_list_tpl = '<ul>'
    + '<li>${title}</li>'
    + '<li style="text-align: center;">${content}</li>'
    + '<li style="float: right; margin-top: 160px;">${quit}</li>'
    + '</ul>';


//渲染数据
function render_list(data) {
    renderType = 'list';
    var list_html = juicer(list_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +')').addClass('active');
}

function render_yes_no_list(data) {
    renderType = 'yes_no_list';
    var list_html = juicer(list_yes_no_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +')').addClass('active');
    $('span:eq(' + data.value +')').addClass('active');
}

function render_list_yes_no_channel_tpl(data) {
    renderType = 'yes_no_list';
    var list_html = juicer(list_yes_no_channel_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +')').addClass('active');
    $('span:eq(' + data.value +')').addClass('active');
}

function render_dbl_list(data) {
    renderType = 'dbl_list';
    var list_html = juicer(dbl_list_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +') span').last().addClass('active');
}

function render_dbllong_list(data) {
    renderType = 'dbl_list';
    var list_html = juicer(dbl_listlong_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +') span').last().addClass('active');
}

//三层排列
function render_treble_list(data) {
    renderType = 'treble_list';
    var list_html = juicer(treble_list_tpl, data);
    $('#led').html(list_html);
    $('li:eq(' + data.active +') span').eq(1).addClass('active');
}

function render_select_list(data) {
    renderType = 'select_list';
    var list_html = juicer(select_list_tpl, data);
    $('#led').html(list_html);
    $('ul:eq(0) li:eq(' + data.active +') span').last().addClass('active');
    $('ul:eq(1) li:eq(' + data.selectActive +')').addClass('select');
    var active = $('.active')[0];
    var _top = active.offsetTop;
    var _left = active.offsetLeft + active.offsetWidth + 20;
    $('.select-box').first().offset({top: _top, left: _left});
}

function render_num_list(data) {
    renderType = 'num_list';
    var list_html = juicer(num_list_tpl, data);
    $('#led').html(list_html);
    var num = lastActive * 2 + 1;
    var pos = $('span:eq(' + num + ')').offset();
    $('#under').offset({left: pos.left + data.numActive * 8, top: pos.top})
    $('.active').removeClass('active');
}

function render_msg_list(data) {
    renderType = 'msg_list';
    var list_html = juicer(msg_list_tpl, data);
    $('#led').html(list_html);
}

function render_sensor_list(data) {
    renderType = 'sensor_list';
    var list_html = juicer(sensor_list_tpl, data);
    $('#led').html(list_html);
}

//自设定lastActive
function render_numlong_list(data,lastActive) {
    renderType = 'num_list';
    var list_html = juicer(numlong_list_tpl, data);
    $('#led').html(list_html);
    var num = lastActive * 2 + 1;
    var pos = $('span:eq(' + num + ')').offset();
    $('#under').offset({left: pos.left + data.numActive * 8, top: pos.top})
    $('.active').removeClass('active');
}


function render_numlatlon_list(data,lastActive) {
    renderType = 'num_list';
    var list_html = juicer(num_list_tpl, data);
    $('#led').html(list_html);
    var num = lastActive * 2 + 1;
    var pos = $('span:eq(' + num + ')').offset();
    $('#under').offset({left: pos.left + data.numActive * 8, top: pos.top})
    $('.active').removeClass('active');
}