/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */
var lastActive = 1;//上级菜单选中值
var renderType = 'list';//渲染方式
//首页菜单
var index_list_data = {
    title: '[MENU]',
    list: ['MSG', 'SENSOR STATUS', 'INTERNSAL GPS', 'USER SETTINGS', 'INTIAL SETTINGS',
        'CHANNEL SETTINGS', 'DIAGNOSTICS'],
    active: 1
};

//msg菜单
var msg_list_data = {
    title: '[MSG]',
    list: ['CREATE MSG', 'TX LOG', 'RX LOG'],
    active: 1
};

//msg_create菜单
var msg_create_list_data = {
    title: '[CREATE MSG]',
    list: ['SET MSG TYPE', 'SET MSG', 'SEND MSG'],
    active: 1
};

var msg_create_send_list_data = {
    title: '[CREATE MSG]',
    list: ['SET MSG TYPE', 'SET MSG', 'SEND MSG'],
    value: 0,
    active: 3
};

var msg_common = ['BROAD CAST', '412863000', 'SATETY', 'BOTH B'];
var msg_create_set_msg_type_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: msg_common,
    active: 1
};

var msg_create_set_msg_type_adrs_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: msg_common,
    select: ['BROAD CAST', 'ADRS CAST'],
    active: 1,
    selectActive: 0
};

var msg_create_set_msg_type_mmsi_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: msg_common,
    numActive: 0
};

var msg_create_set_msg_type_msg_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: msg_common,
    select: ['SATETY', 'NORMAL'],
    active: 3,
    selectActive: 0
};

var msg_create_set_msg_type_channel_list_data = {
    title: '[SET MSG TYPE]',
    list: ['ADRS TYPE', 'MMSI', 'MSG TYPE', 'CHANNEL'],
    key: msg_common,
    select: ['ALTERNATE', 'BOTH A&B', 'A', 'B'],
    active: 4,
    selectActive: 0
};

var msg_create_set_msg_list_data = {
    title: '[SET MSG]',
    content: ['A'],
    numActive: 0
};

var msg_tx_list_data = {
    title: '[TX LOG]',
    list: [['13-APR-25', '1', '<br>', 'TO:412863000', 'S-ABM']],
    select: ['BROAD CAST', 'ADRS CAST'],
    active: 1,
    selectActive: 0
};

var msg_rx_list_data = {
    title: '[TX LOG]',
    list: [['13-APR-25', '1', '<br>', 'TO:412863000', 'S-ABM']],
    active: 1
};

var user_common = ['ON', 'ON', 'ABM', 'OFF', 'AUTO', 'ON', 'CPA/TCPA ALARM'];
var user_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    active: 1
};

var user_key_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['ON', 'OFF'],
    active: 1,
    selectActive: 0
};

var user_alarm_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['ON', 'OFF'],
    active: 2,
    selectActive: 0
};

var user_disp_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['ALL', 'ABM', 'OFF'],
    active: 3,
    selectActive: 1
};

var user_rcvd_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['ON', 'OFF'],
    active: 4,
    selectActive: 0
};

var user_lr_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['AUTO', 'MANUAL'],
    active: 5,
    selectActive: 0
};

var user_auto_list_data = {
    title: '[USER SETTINGS]',
    list: ['KEY BEEP', 'ALARM BUZZER', 'DISP RCVD MSG', 'RCVD MSG BUZZ', 'LR MODE', 'AUTO SORT', 'CPA'],
    key: user_common,
    select: ['ON', 'OFF'],
    active: 6,
    selectActive: 0
};

var sensor_list_data = {
    title: '[SENSOR STATUS]',
    content: 'UTC CLOCK LOST',
    quit: 'QUIT[MENU]'
};

var internsal_list_data = {
    title: '[INTERNAL GPS]',
    list: ['LAT:      24°59.7′N',
        'LON:      119°8.35′E',
        'S/C:      12kn/12°',
        'UTC:      12/13/12<br>14:30:57',
        'DGPS:     STS:D3D',
        'PA:       H RAIM:USED']
}

var intial_list_data = {
    title: '[INITIA SETTINGS]',
    list: ['VIEW MMSG', 'VIEW INT ANT POS', 'VIEW EXT ANT POS', 'VIEW SHIP TYPE',
        'VIEW I/0 PORT'],
    active: 1
}

var intial_view_mmsg_list_data = {
    title: '[VIEW MMSI]',
    list: ['MMSI', 'NAME', 'CALL SING', 'IMO NO.'],
    key: ['999999999', 'FURUNO', 'FQC3544', '0099999']
}

var intial_view_int_list_data = {
    title: '[VIEW INT ANT POS]',
    list: ['A:', 'B:', 'C:', 'D:'],
    key: ['45m', '15m', '8m', '7m']
}

var intial_view_ext_list_data = {
    title: '[VIEW EXT ANT POS]',
    list: ['A:', 'B:', 'C:', 'D:'],
    key: ['45m', '15m', '8m', '7m']
}

var intial_view_ship_list_data = {
    title: '[VIEW SHIP TYPE]',
    content: 'NAV STATUS:0',
    quit: 'QUIT[MENU]'
};

var intial_view_io_list_data = {
    title: '[VIEW I/O PORT]',
    list: ['VIEW COME PORT', 'VIEW PC PORT', 'VIEW LAN PORT', 'VIEW PRIORITY', 'VIEW QUALITY'],
    active: 1
}

var intial_view_io_view_come_list_data = {
    title: '[VIEW I/O PORT]',
    list: ['VIEW COME1', 'VIEW COME2', 'VIEW COME3', 'VIEW COME4', 'VIEW COME5', 'VIEW COME6'],
    active: 1
}

var intial_view_io_view_pc_list_data = {
    title: '[VIEW PC PORT]',
    list: ['MODE:', 'SPEED'],
    key: ['STANDARD:', '38.4KBPS']
}

var channel_list_data = {
    title: '[CHANNEL SETTINGS]',
    list: ['VIEW CHANNEL', 'EDIT CHANNEL'],
    active: 1
}

var diagnostics_list_data = {
    title: '[CHANNEL SETTINGS]',
    list: ['MONITOR', 'TRANSPONDER TEST', 'PWR ON/OFF HISTORY', 'TX ON/OFF HISTORY',
        'MEMORY CLEAR', 'ACTIVATE KEY', 'FOR SERVICE'],
    active: 1
}

//channel view菜单
var channel_view_list_data = {
    title: '[VIEW CHANNEL]',
    list: ['POWER:　　　　　 12.5W', 'CHANNEL NO.', 'CH-A:　　　　　　2087','CH-B:　　　　　　2088']
};

//channel view菜单
var channel_edit_list_data = {
    title: '[EDIT CHANNEL]',
    list: ['SELECT NO:', 'TIME[UTC]', '--/---:-:-','FORM'],
    key: ['0'],
    active: 1
};

//channel view edit_select 菜单
var channel_edit_select_list_data ={
    title: '[EDIT CHANNEL]',
    list: ['FROM MMSI: ___________', 'POWER:','　　　　　　CH-A:','　　　　　　CH-B:','MODE　　　　CH-A:','　　　　　　CH-B:','Zone','CH NO'],
    key: ['','12.5W','2087','2087','TX/RX','TX/RX','1NM'],
    active: 2
};

