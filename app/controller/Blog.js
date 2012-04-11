Ext.define('JRSS.controller.Blog', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['BlogEntry'],
        stores: ['BlogEntries'],
        views: ['Main', 'Blog'],


        refs: {

        },
        control: {

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Launched!");
        console.log(app);
    }
});