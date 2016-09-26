// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data:[{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad'],
        labels: ['iPhone', 'iPad'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

});
