Ext.define("JRSS.view.Blog", {
    extend: 'Ext.dataview.List',
    alias: 'widget.blog',

    config: {
        title: 'Welcome',
        iconCls: 'star',
        itemTpl: "<div>{content}</div>",
        store: 'BlogEntries'
    }

});
