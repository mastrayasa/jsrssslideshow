Ext.define('JRSS.model.BlogEntry', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'title', type: 'auto'},
            {name: 'link', type: 'auto'},
            {name: 'author', type: 'auto'},
            {name: 'contentSnippet', type: 'auto'},
            {name: 'content', type: 'auto'}
        ]
    }
});
