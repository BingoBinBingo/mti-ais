/**
 * User: SteveZheng
 * Date: 13-5-13
 * Time: 上午10:44
 */

var Route = Backbone.Router.extend({
    routes: {
        '': 'auto',
        'index': 'auto',
        'msg': 'auto',
        'msg/create': 'auto',
        'msg/create/set': 'auto',
        'msg/create/set/msg/type': 'auto',
        'msg/create/set/msg/type/adrs': 'auto',
        'msg/create/set/msg/type/mmsi': 'auto',
        'msg/create/set/msg/type/msg': 'auto',
        'msg/create/set/msg/type/channel': 'auto',
        'msg/create/set/msg': 'auto',
        'msg/create/send': 'auto',
        'msg/tx': 'auto',
        'msg/tx/:id': 'msg_tx_query',
        'msg/rx': 'auto',
        'msg/rx/:id': 'msg_rx_query',
        'sensor': 'auto',
        'internsal': 'auto',
        'user': 'auto',
        'user/key': 'auto',
        'user/alarm': 'auto',
        'user/disp': 'auto',
        'user/rcvd': 'auto',
        'user/lr': 'auto',
        'user/auto': 'auto',
        'user/cpa': 'auto',
        'intial': 'auto',
        'intial/view': 'auto',
        'intial/view/mmsg': 'auto',
        'intial/view/int': 'auto',
        'intial/view/ext': 'auto',
        'intial/view/ship': 'auto',
        'intial/view/io': 'auto',
        'intial/view/io/view': 'auto',
        'intial/view/io/view/come': 'auto',
        'intial/view/io/view/pc': 'auto',
        'intial/view/io/view/lan': 'auto',
        'intial/view/io/view/priority': 'auto',
        'intial/view/io/view/quality': 'auto',
        'intial/int': 'auto',
        'channel': 'auto',
        'channel/view':'auto',
        'channel/edit':'auto',
        'channel/edit/select':'auto',
        'channel/edit/select/cha':'auto',
        'channel/edit/select/chb':'auto',
        'channel/edit/select/zone':'auto',
        'channel/edit/select/change':'auto',
        'channel/edit/select/change/lat':'auto',
        'channel/edit/select/change/lon':'auto',
        'channel/edit/select/change/lat1':'auto',
        'channel/edit/select/change/lon1':'auto',
        'diagnostics/memory/monitor':'auto',
        'diagnostics/memory/set':'auto',
        'diagnostics/memory/gps':'auto',
        'diagnostics': 'auto',
        'diagnostics/monitor':'auto',
        'diagnostics/transponder':'auto',
        'diagnostics/pwr':'auto',
        'diagnostics/tx':'auto',
        'diagnostics/memory':'auto',
        'diagnostics/activate':'auto',
        'diagnostics/transponder/monitor':'auto',
        'diagnostics/transponder/gps':'auto'
    },

    auto: function() {
        auto();
    },

    msg_tx_query: function(id) {
        msg_tx_query(id);
    },

    msg_rx_query: function(id) {
        msg_rx_query(id);
    }
});

var route = new Route();
Backbone.history.start();

