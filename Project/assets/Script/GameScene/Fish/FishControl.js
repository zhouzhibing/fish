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
        fish:cc.Node,
        index:cc.int
    },

    // use this for initialization
    onLoad: function () {

    },
    
    update:function()
    {
        this.move();
    },
    
    move:function()
    {
        if(this.fish == null)
            return;
        //this.fish.position.x += 10;
        this.fish.position = cc.v2(this.fish.position.x - 3  , this.fish.position.y);
        //console.log(" this.fish.position.x  = " +  this.fish.position.x )
        
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
