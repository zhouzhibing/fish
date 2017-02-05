cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
        content: cc.Node  
    },

    // use this for initialization
    onLoad: function () 
    {
        cc.loader.loadRes("Prefable/Fish_1", (err , prefable) => {
            var node = cc.instantiate(prefable);
            this.content.addChild(node);
            node.position = cc.v2(910, 110);
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
