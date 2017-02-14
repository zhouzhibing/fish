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
        
        content: cc.Node,
        gameFishPool : cc.Node
    },
    GetRandomNum:function(Min,Max)
    {   
        return Math.round(Math.random() * Max + Min);
    } ,
    
    createFish:function()
    {
        cc.loader.loadRes("Prefable/Fish_1", (err , prefable) => {  
            for(var i = 0 ; i < 18 ; i ++)
            {
                var node = cc.instantiate(prefable);
                node.initName = node.name;
                node.name = node.initName + "_p"+i;
                this.gameFishPool.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
        
        cc.loader.loadRes("Prefable/Fish_2", (err , prefable) => {
            for(var i = 0 ; i < 5 ; i ++)
            {
                var node = cc.instantiate(prefable);
                node.initName = node.name;
                node.name = node.initName + "_p"+i;
                this.gameFishPool.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
        
        cc.loader.loadRes("Prefable/Fish_3", (err , prefable) => {  
            for(var i = 0 ; i < 8 ; i ++)
            {
                var node = cc.instantiate(prefable);
                node.initName = node.name;
                node.name = node.initName + "_p"+i;
                this.gameFishPool.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
        
        cc.loader.loadRes("Prefable/Fish_4", (err , prefable) => {  
            for(var i = 0 ; i < 3 ; i ++)
            {
                var node = cc.instantiate(prefable);
                node.initName = node.name;
                node.name = node.initName + "_p"+i;
                this.gameFishPool.addChild(node);
                var x = this.GetRandomNum(0 , 900);
                var y = this.GetRandomNum(0, 600);
                node.position = cc.v2(x, y);
            }
        });
    },
    
    initEvent:function()
    {
        var bullet = cc.find("CannonLayer/TopCannon/CannonLeftTop/Sprite_Bullet");
        this.gameFishPool.on(cc.Node.EventType.TOUCH_END , (event) =>{
           //alert("发射炮弹");
        });
        this.gameFishPool.on(cc.Node.EventType.MOUSE_MOVE ,(event) =>{
            //var action = cc.rotateBy(1,45);
            //bullet.runAction(action);
        });
    },
    
    // use this for initialization
    onLoad: function () 
    {
       this.createFish();
       this.initEvent();
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
