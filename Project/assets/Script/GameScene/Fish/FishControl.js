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
        leftRota:0,
        rightRota:0
        
    },

    GetRandomNum:function(Min,Max)
    {   
        return Math.round(Math.random() * Max + Min);
    } ,
    
    onActionEnd :function(param)
    {
       this.move();
    },
    
    // use this for initialization
    onLoad: function ()
    {
        
        console.log("this.Fish.name = "  + this.fish.name);
        
        this.move();
        this.initEvent();
    },
    
    initEvent : function()
    {
        if(this.fish.name != "Fish_2")
            return;
            
        this.fish.on(cc.Node.EventType.MOUSE_DOWN , function(event)
        {
            var animation =  event.target.getComponent(cc.Animation);
            animation.play("Fish_2_DJ");
        });
        this.fish.on(cc.Node.EventType.TOUCH_START , function(event)
        {
            var animation =  event.target.getComponent(cc.Animation);
            animation.play("Fish_2_DJ");
        });
        
        
        
        this.fish.on(cc.Node.EventType.MOUSE_UP , function(event)
        {
            var animation =  event.target.getComponent(cc.Animation);
            animation.play("Fish_2");
        });
        this.fish.on(cc.Node.EventType.TOUCH_END , function(event)
        {
            var animation =  event.target.getComponent(cc.Animation);
            animation.play("Fish_2");
        });
    
    },
    update:function()  
    {
        
    },
    
    move:function()
    {
        var toX = this.GetRandomNum(0,960);
        
        var dir = this.GetRandomNum(0, 1);
        var toY = this.fish.position.y;
        if(dir == 1)
             toY = this.GetRandomNum(0,640);
        
        var speed = this.GetRandomNum(5, 20);
      
        //设置方向
        var x = this.fish.position.x;
        var y = this.fish.position.y;
        
        //var head = cc.find("Canvas/GameNode/" + this.fish.name + "/Head");
        //var headX =head.convertToWorldSpace(head.position).x ;
        
        //console.log("toX = " + toX + " headX = " + headX);
       // console.log( "dir = " +dir +" speed = " + speed +  " toX= " + toX + " toY = " + toY + " headX = " + headX);
        if(toX != 0)  
        {
            if(toX > x)
                this.fish.rotation=this.rightRota;
            else
                this.fish.rotation=this.leftRota;
                
            console.log("this.fish.rotation = " + this.fish.rotation);
        }

        var moveAction = cc.moveTo(speed, toX , toY);
        var endCallFunc = cc.callFunc(this.onActionEnd, this);
        var actionQueue = cc.sequence(moveAction, endCallFunc);
        
        this.fish.runAction(actionQueue);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
