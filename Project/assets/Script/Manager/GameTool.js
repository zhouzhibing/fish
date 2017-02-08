function GameTool()
{
    
}

GameTool.prototype.GetRandomNum = function()
{
    return Math.round(Math.random() * Max + Min);
}