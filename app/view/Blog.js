Ext.define("JRSS.view.Blog", {
    extend: 'Ext.dataview.List',
    alias: 'widget.blog',

    config: {
        title: 'List',
        iconCls: 'home',
        itemTpl: "<div>{content}</div>",
        store: 'BlogEntries'
    }

});
