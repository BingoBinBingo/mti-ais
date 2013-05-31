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

function channel_edit_select_cha()
{
    render_numlong_list(channel_edit_select_cha_list_data,2);
}

function channel_edit_select_chb()
{
    render_numlong_list(channel_edit_select_chb_list_data,3);
}

//=========================================CHANNEL菜单 END ===================================

function diagnostics() {
    render_list(diagnostics_list_data);
}

function diagnostics_monitor(){
    render_dbl_list(diagnostics_monitor_list_data);
}

function diagnostics_transponder(){
    render_list(diagnostics_transponder_list_data);
}

function diagnostics_pwr(){
    render_list(diagnostics_pwr_list_data);
}

function diagnostics_tx(){
    render_list(diagnostics_tx_list_data);
}

function diagnostics_memory(){
    render_list(diagnostics_memory_list_data);
}

function diagnostics_activate(){
    render_list(diagnostics_activate_list_data);
}

function diagnostics_for(){
    render_list(diagnostics_for_list_data);
}

function diagnostics_transponder_monitor()
{
    render_list(diagnostics_transponder_monitor_list_data);
}

function diagnostics_transponder_gps()
{
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
        ;
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
        if (location.hash.concat("　") || location.hash.concat("-") || location.hash.concat(":"))
        {
            location.hash = location.hash.replace(/　/g, '').replace(/-/g, '').replace(/:/g,'');
        }
        else {
            location.hash += active;
        }
    } else if (renderType == 'num_list') {
        menu();
    } else if (renderType == 'yes_no_list') {
        if (msg_create_send_list_data.value == 0) {
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
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').last().addClass('active');
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
            var list = data.key[1].split('');
            var numActive = Math.round(list[data.numActive]);
            if (numActive == 9) {
                numActive = 0;
            } else {
                numActive++;
            }
            list[data.numActive] = numActive;
            data.key[1] = list.toString().replaceAll(',', '');
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
                    $('.active').removeClass('active');
                    $('li:eq(' + data.active + ') span').last().addClass('active');
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
            var list = data.key[1].split('');
            var numActive = Math.round(list[data.numActive]);
            if (numActive == 0) {
                numActive = 9;
            } else {
                numActive--;
            }
            list[data.numActive] = numActive;
            data.key[1] = list.toString().replaceAll(',', '');
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
            var list = data.key[1].split('');
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
            var value = msg_create_send_list_data.value;
            if (value == 1) {
                msg_create_send_list_data.value = 0;
            }
            auto();
            break;
    }
}

function right() {
    switch (renderType) {
        case 'num_list':
            var hash = convert_hash() + '_list_data';
            var data = window[hash];
            var list = data.key[1].split('');
            if (data.numActive < list.length - 1) {
                data.numActive++;
            }
            var num = lastActive * 2 + 1;
            var pos = $('span:eq(' + num + ')').offset();
            $('#under').offset({left: pos.left + 8 * data.numActive, top: pos.top})
        case 'msg_list':
            msg_list_action('right');
            auto();
            break;
        case 'yes_no_list':
            var value = msg_create_send_list_data.value;
            if (value == 0) {
                msg_create_send_list_data.value = 1;
            }
            auto();
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
