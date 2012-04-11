Ext.define("JRSS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.carousel.Carousel'],

    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'blog'
        },{
            title: 'Carousel',
            iconCls: 'star',

            xtype: 'carousel'

        }]
    }
});
