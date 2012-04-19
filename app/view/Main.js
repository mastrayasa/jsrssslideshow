Ext.define("JRSS.view.Main", {
    extend: 'Ext.carousel.Carousel',
    requires: ['Ext.carousel.Carousel'],
    config: {
        xtype: 'carousel',
        direction: 'vertical',
        indicator: false,
        defaults: {
            styleHtmlContent: true
        }
    }
});
