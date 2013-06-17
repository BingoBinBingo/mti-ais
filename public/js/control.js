/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
String.prototype.replaceAll = function (AFindText, ARepText) {
    raRegExp = new RegExp(AFindText, "g");
    return this.replace(raRegExp, ARepText);
}

function auto() {
    var hash = location.hash;
    if (hash != '') {
        var target = convert_hash() + '()';
        eval(target);
    } else {
        index();
    }
}

var GetLength = function (str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

function getStrLength(str) {
    var len = str.length;
    var result = 0;
    for (var i = 0; i < len; i++) {
        if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) {
            result += 2;
        } else {
            result++;
        }
    }
    return result;
}


//主菜单
function index() {
    render_list(index_list_data);
}

//msg菜单
function msg() {
    render_list(msg_list_data);
}

function msg_tx() {
    render_list(msg_tx_list_data);
}

function msg_rx() {
    render_list(msg_rx_list_data);
}

function msg_create() {
    render_list(msg_create_list_data);
}

function msg_create_send() {
    render_yes_no_list(msg_create_send_list_data);
}

function msg_create_set() {
    if (lastActive == 1) {
        location.hash = '#msg/create/set/msg/type';
    } else {
        location.hash = '#msg/create/set/msg';
    }
}

function msg_create_set_msg_type() {
    render_dbl_list(msg_create_set_msg_type_list_data);
}

function msg_create_set_msg_type_adrs() {
    render_select_list(msg_create_set_msg_type_adrs_list_data);
}

function msg_create_set_msg_type_mmsi() {
    render_num_list(msg_create_set_msg_type_mmsi_list_data);
}

function msg_create_set_msg_type_msg() {
    render_select_list(msg_create_set_msg_type_msg_list_data);
}

function msg_create_set_msg_type_channel() {
    render_select_list(msg_create_set_msg_type_channel_list_data);
}

function msg_create_set_msg() {
    render_msg_list(msg_create_set_msg_list_data);
    $('.set-msg span:eq(' + msg_create_set_msg_list_data.numActive + ')').addClass('under-line');
}

function sensor() {
    render_sensor_list(sensor_list_data);
}

function user() {
    render_dbl_list(user_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_key() {
    render_select_list(user_key_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_alarm() {
    render_select_list(user_alarm_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_disp() {
    render_select_list(user_disp_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_rcvd() {
    render_select_list(user_rcvd_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_lr() {
    render_select_list(user_lr_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function user_auto() {
    render_select_list(user_auto_list_data);
    $('li:eq(7) span:eq(0)').css('display', 'none');
}

function internsal() {
    render_list(internsal_list_data);
}

function intial() {
    render_list(intial_list_data);
}

function intial_view() {
    switch (intial_list_data.active) {
        case 1:
            location.hash = '#intial/view/mmsg';
            break;
        case 2:
            location.hash = '#intial/view/int';
            break;
        case 3:
            location.hash = '#intial/view/ext';
            break;
        case 4:
            location.hash = '#intial/view/ship';
            break;
        case 5:
            location.hash = '#intial/view/io';
            break;
    }
}

function intial_view_mmsg() {
    render_dbl_list(intial_view_mmsg_list_data);
}

function intial_view_int() {
    render_dbl_list(intial_view_int_list_data);
}

function intial_view_ext() {
    render_dbl_list(intial_view_ext_list_data);
}

function intial_view_ship() {
    render_sensor_list(intial_view_ship_list_data);
}

function intial_view_io() {
    render_list(intial_view_io_list_data);
}

function intial_view_io_view() {
    switch (intial_view_io_list_data.active) {
        case 1:
            location.hash = '#intial/view/io/view/come';
            break;
        case 2:
            location.hash = '#intial/view/io/view/pc';
            break;
        case 3:
            location.hash = '#intial/view/io/view/lan';
            break;
        case 4:
            location.hash = '#intial/view/io/view/priority';
            break;
        case 5:
            location.hash = '#intial/view/io/view/quality';
            break;
    }
}

function intial_view_io_view_come() {
    render_list(intial_view_io_view_come_list_data);
}

function intial_view_io_view_pc() {
    render_dbl_list(intial_view_io_view_pc_list_data);
}

//channel setting 菜单
function channel() {
    render_list(channel_list_data);
}

function channel_view() {
    render_list(channel_view_list_data);
}

function channel_edit() {
    render_dbl_list(channel_edit_list_data);
}

function channel_edit_select() {
    render_dbllong_list(channel_edit_select_list_data);
}

function channel_edit_select_cha() {
    render_numlong_list(channel_edit_select_cha_list_data, 2);
}

function channel_edit_select_chb() {
    render_numlong_list(channel_edit_select_chb_list_data, 3);
}

function channel_edit_select_zone() {
    render_numlong_list(channel_edit_select_chb_list_data, 6);
}

function diagnostics_memory_monitor() {
    render_list_yes_no_channel_tpl(diagnostics_memory_monitor_list_data);
}

function diagnostics_memory_set() {
    render_list_yes_no_channel_tpl(diagnostics_memory_set_list_data);
}

function diagnostics_memory_gps() {
    render_list_yes_no_channel_tpl(diagnostics_memory_gps_list_data);
}

function channel_edit_select_change() {
    render_dbl_list(channel_edit_select_change_list_data);
}


function channel_edit_select_change_lat() {
    render_numlatlon_list(channel_edit_select_change_lat_list_data, 2);
}

function channel_edit_select_change_lon() {
    render_numlatlon_list(channel_edit_select_change_lon_list_data, 3);
}

function channel_edit_select_change_lat1() {
    render_numlatlon_list(channel_edit_select_change_lat1_list_data, 5);
}

function channel_edit_select_change_lon1() {
    render_numlatlon_list(channel_edit_select_change_lon1_list_data, 6);
}

//=========================================CHANNEL菜单 END ===================================

function diagnostics() {
    render_list(diagnostics_list_data);
}

function diagnostics_monitor() {
    render_treble_list(diagnostics_monitor_list_data);
}

function diagnostics_transponder() {
    render_list(diagnostics_transponder_list_data);
}

function diagnostics_pwr() {
    render_list(diagnostics_pwr_list_data);
}

function diagnostics_tx() {
    render_list(diagnostics_tx_list_data);
}

function diagnostics_memory() {
    render_list(diagnostics_memory_list_data);
}

function diagnostics_activate() {
    render_list(diagnostics_activate_list_data);
}

function diagnostics_for() {
    render_list(diagnostics_for_list_data);
}

function diagnostics_transponder_monitor() {
    render_list(diagnostics_transponder_monitor_list_data);
}

function diagnostics_transponder_gps() {
    render_list(diagnostics_transponder_gps_list_data);
}


//检查是否有active存在
//用以判断上下键是否控制active选中项
function has_active() {
    var length = $('.active').length;
    if (length == 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * 将hash转成约定值
 * @param hash
 */
function convert_hash() {
    var hash = location.hash;
    if (hash == '') {
        return 'index';
    } else {
        var hash = hash.slice(1);
        return hash.replace(/\//g, '_');
    }
}

function get_Active_localName() {
    return $('.active')[0].localName;
}

function get_data() {
    var hash = convert_hash() + '_list_data';
    var data = window[hash];
    return data;
}

function send_msg() {
    var msg_mmsi = msg_common[1];
    var msg_content = msg_create_set_msg_list_data.content.join('');
    $.post('/mti-nav-thinkphp/index/sendaismsg', {
        'mmsi': msg_mmsi,
        'content': msg_content
    }, function (data) {
        console.log(data);
    });
}

//在 SET MSG 的编辑框中，针对上下左右的方法集合
function msg_list_action(method) {
    var numActive = msg_create_set_msg_list_data.numActive;
    var char = msg_create_set_msg_list_data.content[numActive];
    var content = msg_create_set_msg_list_data.content;
    if (method == 'up') {
        var code = char.charCodeAt(0);
        if (code < 96) {
            code++
        } else {
            code = 65
        }
        ;
        var str = String.fromCharCode(code);
        msg_create_set_msg_list_data.content[numActive] = str;
    } else if (method == 'down') {
        var code = char.charCodeAt(0);
        if (code > 65) {
            code--;
        } else {
            code = 96;
        }
        var str = String.fromCharCode(code);
        msg_create_set_msg_list_data.content[numActive] = str;
    } else if (method == 'left') {
        if (numActive > 0) {
            numActive--;
        }
        msg_create_set_msg_list_data.numActive = numActive;
        $('.under-line').removeClass('under-line');
        $('.set-msg span:eq(' + numActive + ')').addClass('under-line');
    } else if (method == 'right') {
        if (numActive < content.length - 1) {
            numActive++;
        } else if (numActive == content.length - 1) {
            msg_create_set_msg_list_data.content.push('A');
            numActive++;
        }
        msg_create_set_msg_list_data.numActive = numActive;
        $('.under-line').removeClass('under-line');
        $('.set-msg span:eq(' + numActive + ')').addClass('under-line');
    }
}


//change事件
function change() {
    location.hash = '#channel/edit/select/change';
}

function change2() {
    location.hash = '#channel/edit/select';
}

//enter事件
function enter() {
    if (renderType == 'select_list') {
        //获得当前选择项索引值->修改model中active对应值的值
        var select = $('.select').text();
        var hash = convert_hash() + '_list_data';
        var hash_common = location.hash.split('/')[0].slice(1) + '_common';
        var data = window[hash];
        var index = data.active - 1;
        window[hash_common][index] = select;
        menu();
    } else if (renderType == 'dbl_list') {
        var active = $('.active').last().parent().find('span').first().text().toLocaleLowerCase();
        var index = active.indexOf(' ');
        if (index != -1) {
            active = active.slice(0, index);
        }
        if (location.hash != '') {
            location.hash += '/' + active;
        }
        if (location.hash.concat("　") || location.hash.concat("-") || location.hash.concat(":")) {
            if (location.hash.indexOf("lat:") > 0 || location.hash.indexOf("lon:") > 0) {
                location.hash = location.hash.replace(/:/g, '1');
            }
            location.hash = location.hash.replace(/　/g, '').replace(/-/g, '').replace(/:/g, '');
        }
        else {
            location.hash += active;
        }
    } else if (renderType == 'num_list') {
        menu();
    } else if (renderType == 'yes_no_list') {
        var hash = convert_hash() + '_list_data';
        var data = window[hash];
        var value = data.value;
        if (value == 0) {
            send_msg();
        } else {
            menu();
        }
    } else {
        lastActive = $('li').index($('.active'));
        var active = $('.active').text().toLowerCase();
        var index = active.indexOf(' ');
        if (index != -1) {
            active = active.slice(0, index);
        }
        if (location.hash != '') {
            location.hash += '/' + active;
        } else {
            location.hash += active;
        }
    }
}

//menu事件
function menu() {
    var hash = location.hash;
    if (hash == '#msg/create/set/msg/type' || hash == '#msg/create/set/msg') {
        location.hash = '#msg/create';
    } else if (hash == '#intial/view/mmsg' || hash == '#intial/view/int' || hash == '#intial/view/ext'
        || hash == '#intial/view/ship' || hash == '#intial/view/io'
        ) {
        location.hash = '#intial';
    } else if (hash == '#intial/view/io/view/come' || hash == '#intial/view/io/view/pc'
        || hash == '#intial/view/io/view/lan' || hash == '#intial/view/io/view/priority'
        || hash == '#intial/view/io/view/quality') {
        location.hash = '#intial/view/io';
    } else if (hash != '') {
        var lastIndex = hash.lastIndexOf('/');
        if (lastIndex == -1) {
            location.hash = '';
        } else {
            location.hash = hash.slice(0, lastIndex);
        }
    }
}

//up事件
function up() {
    switch (renderType) {
        case 'list':
        case 'dbl_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active > 1) data.active--;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    if (data.active == 2 && $('.active').text().indexOf("′N") == 6) {
                        change2()
                    }
                    else {
                        $('.active').removeClass('active');
                        $('li:eq(' + data.active + ') span').last().addClass('active');
                    }
                }
            }
            break;
        case 'treble_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active > 1) data.active--;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').eq(1).addClass('active');
                }
            }
            break;
        case 'select_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            if (data.selectActive > 0) data.selectActive--;
            //判断界面是单列还是双列
            $('.active').removeClass('active');
            $('li:eq(' + data.active + ') span').last().addClass('active');
            $('.select').removeClass('select');
            $('ul:eq(1) li:eq(' + data.selectActive + ')').addClass('select');
            break;
        case 'num_list':
            var data = get_data();
            var list = data.key[data.active].split('');
            var numActive = Math.round(list[data.numActive]);
            if (numActive == 9) {
                numActive = 0;
            } else {
                numActive++;
            }
            list[data.numActive] = numActive;
            data.key[data.active] = list.toString().replaceAll(',', '');
            auto();
            break;
        case 'msg_list':
            msg_list_action('up');
            auto();
            break;
    }
}


//down事件
function down() {
    switch (renderType) {
        case 'list':
        case 'dbl_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active < data.list.length) data.active++;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    if ($('.active').text().indexOf("NM") == 1) {
                        change()
                    }
                    else {
                        $('.active').removeClass('active');
                        $('li:eq(' + data.active + ') span').last().addClass('active');
                    }
                }
            }
            break;
        case 'treble_list':
            if (has_active()) {
                var hash = convert_hash() + '_list_data';
                var data = window[hash];
                if (data.active < data.list.length) data.active++;
                //判断界面是单列还是双列
                if (get_Active_localName() == 'li') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ')').addClass('active');
                } else if (get_Active_localName() == 'span') {
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').eq(1).addClass('active');
                }
            }
            break;
        case 'select_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            if (data.selectActive < data.select.length - 1) data.selectActive++;
            //判断界面是单列还是双列
            $('.active').removeClass('active');
            $('li:eq(' + data.active + ') span').last().addClass('active');
            $('.select').removeClass('select');
            $('ul:eq(1) li:eq(' + data.selectActive + ')').addClass('select');
            break;
        case 'num_list':
            var data = get_data();
            var list = data.key[data.active].split('');
            var numActive = Math.round(list[data.numActive]);
            if (numActive == 0) {
                numActive = 9;
            } else {
                numActive--;
            }
            list[data.numActive] = numActive;
            data.key[data.active] = list.toString().replaceAll(',', '');
            auto();
            break;
        case 'msg_list':
            msg_list_action('down');
            auto();
            break;
    }
}

function left() {
    switch (renderType) {
        case 'num_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[data.active].split('');
            if (data.numActive > 0) {
                data.numActive--;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
        case 'msg_list':
            msg_list_action('left');
            auto();
            break;
        case 'yes_no_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var value = data.value;
            if (value == 1) {
                data.value = 0;
            }
            auto();
            break;
        case 'num_lonlat_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[data.active].split('');
            if (data.numActive > 0) {
                data.numActive--;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            var str = data.key[data.active].slice(0, data.numActive);
            var result = getStrLength(str);
            $('#under').offset({left: pos.left + 8 * result, top: pos.top})
            break;
    }
}

function right() {
    switch (renderType) {
        case 'num_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[data.active].split('');
            if (list[1] != "N" && list[2] != "M") {
                if (list[data.numActive + 1] == "°") {
                    if (data.numActive < list.length - 1) {
                        data.numActive = data.numActive + 3;
                    }
                } else if (list[data.numActive] == ".") {
                    data.numActive = data.numActive + 2;
                } else {
                    if (data.numActive < list.length - 2) {
                        data.numActive++;
                    }
                }
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            if (list[data.numActive - 1] == "°") {
                var tmp = list.slice(0, [data.numActive]);
                $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
            }
            else {
                $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
            }
            break;
        case 'msg_list':
            msg_list_action('right');
            auto();
            break;
        case 'yes_no_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var value = data.value;
            if (value == 0) {
                data.value = 1;
            }
            auto();
            break;
        case 'num_lonlat_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[data.active].split('');
            if (data.numActive < 5) {
                data.numActive++;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            var str = data.key[data.active].slice(0, data.numActive);
            var result = getStrLength(str);
            $('#under').offset({left: pos.left + 8 * result, top: pos.top})
            break;
    }
}

$('#ent').click(function () {
    enter();
});

$('#menu').click(function () {
    menu();
});

$('#up').click(function () {
    up();
});

$('#down').click(function () {
    down();
});

$('#left').click(function () {
    left();
});

$('#right').click(function () {
    right();
});
