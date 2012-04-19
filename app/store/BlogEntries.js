Ext.define('JRSS.store.BlogEntries', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'JRSS.model.BlogEntry',

        proxy: {
            type: 'jsonp',
            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://stockphotos.yaymicro.com/screensaver/saver.rss',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        },

        autoLoad: true
    }

});


