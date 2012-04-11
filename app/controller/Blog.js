Ext.define('JRSS.controller.Blog', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['BlogEntry'],
        stores: ['BlogEntries'],
        views: ['Main', 'Blog'],


        refs: {
            carousel: 'carousel'
        },
        control: {

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var me = this;

        //Transition to next slide
        var transitionTime = 30;
        Ext.Function.defer(function(){
            me.getCarousel().setActiveItem(me.getCarousel().getActiveIndex()+1);
        }, transitionTime * 1000);

        //Reload feed
        var reloadTime = 15;
        Ext.Function.defer(function(){
            Ext.getStore('BlogEntries').load();
        }, reloadTime * 60 * 1000);

        //At first and each store load, create the carousel panels and set to the first
        Ext.getStore('BlogEntries').on('load', function(store, records, successful, operation, eOpts) {
            var items = [];
            Ext.each(records, function(entry) {
                items.push({
                    xtype: 'panel',
                    html: entry.get('content')
                });
            });
            me.getCarousel().setItems(items);
            me.getCarousel().setActiveItem(0);
        });

    }
});
