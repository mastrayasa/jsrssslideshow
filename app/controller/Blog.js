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
            carousel: {
                activeitemchange: 'carouselChange'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var me = this;

        //Transition to next slide
        me.transitionTime = 300;
        me.transDefer();

        //Reload feed
        me.reloadTime = 60;
        me.feedDefer();

        //At first and each store load, create the carousel panels and set to the first
        Ext.getStore('BlogEntries').on('load', function(store, records, successful, operation, eOpts) {
            var items = [];
            Ext.each(records, function(entry) {
                items.push({
                    xtype: 'container',
                    html: entry.get('content')
                });
            });
            //caboose with contents of first card
            items.push({
                xtype: 'container',
                itemId: 'caboose',
                html: items[0].html
            });
            me.getCarousel().setItems(items);
            me.getCarousel().setActiveItem(0);
        });

    },

    carouselChange: function(container, value, oldValue){
        var me = this;
        if(value && value.getItemId() == 'caboose'){
            container.setActiveItem(0);
        }

    },

    transDefer: function(){
        var me = this;
        var c = me.getCarousel();
        Ext.Function.defer(function(){
            //console.log(c.getActiveIndex(), c.getItems().length);
            c.next();
            me.transDefer();
        }, me.transitionTime * 1000);
    },

    feedDefer: function(){
        var me = this;
        Ext.Function.defer(function(){
            Ext.getStore('BlogEntries').load();
            me.feedDefer();
        }, me.reloadTime * 60 * 1000);


    }

});
