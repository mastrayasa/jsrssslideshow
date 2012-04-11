Ext.define("JRSS.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],

    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'blog'
        }]
    }
});
