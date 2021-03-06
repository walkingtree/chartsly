/**
 * Class to test chart overlays
 */
Ext.define("KS.view.stockcharts.overlays.bbands.Basic", {
    extend: 'Ext.Panel',
    xtype: 'basic-bbands',
    requires: [
        'Chartsly.view.test.BollingerBands'
    ],
    exampleDescription: [
        'A CandleStick chart with Bollinger Bands (BBands) overlay.'
    ],
    config: {
        // height: 400,
        // layout: 'fit',
        items: [
            {
                height: 500,
                xtype: 'cs-bbands-test-chart'
            }
        ]
    }
});