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
    GetRandomNum:function(Min,Max)
    {   
        return Math.round(Math.random() * Max + Min);
    } ,
    // use this for initialization
    onLoad: function () 
    {
        
        cc.loader.loadRes("Prefable/Fish_2", (err , prefable) => {
            for(var i = 0 ; i < 1 ; i ++)
            {
                var node = cc.instantiate(prefable);
                this.content.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
                
                //var nodeAni = node.getComponent(cc.Animation);
                //nodeAni.play("Fish_2_DJ");
            }
        });
        
       cc.loader.loadRes("Prefable/Fish_1", (err , prefable) => {  
            for(var i = 0 ; i < 5 ; i ++)
            {
                var node = cc.instantiate(prefable);
                this.content.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
        
        cc.loader.loadRes("Prefable/Fish_3", (err , prefable) => {  
            for(var i = 0 ; i < 15 ; i ++)
            {
                var node = cc.instantiate(prefable);
                this.content.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
    },
    
    onButtonAction:function()
    {
        var fish = cc.find("Canvas/GameNode/Fish_1");
        var moveAction = cc.moveTo(25, 0 , 0 );
            var endCallFunc = cc.callFunc(this, this, (o1 , o2 ,o3)=>{
            alert("o1 = " + o1 + " o2 = " + o2 + " o3 = " + o3);
        });
        var actionQueue = cc.sequence({moveAction, endCallFunc})
        this.fish.runAction(actionQueue);
        //alert(cc.find("Canvas/GameNode/Fish_1").name);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
