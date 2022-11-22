import { _decorator, Component, Node, Prefab, instantiate, Vec2, Vec3, v2, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    @property({type:Node})
    spawnprefab1: Node = null;
    @property({type:Node})
    spawnprefab2: Node = null;

    @property({type:Node})
    spawnregion: Node = null;

    groundY: any;
    count: number;
    levelcountdown: number;

    


    getOpponentPosition()
    {
        var randX = Math.random();
        var randY = Math.random();
        
        return new Vec3(randX, randY, 0);
    }

    spawnopponent1()
    {
        var block1 = instantiate(this.spawnprefab1);
        this.node.addChild(block1);
        block1.setPosition(this.getOpponentPosition());
    }

    spawnopponent2()
    {
        var block2 = instantiate(this.spawnprefab2);
        this.node.addChild(block2);
        block2.setPosition(this.getOpponentPosition());
    }

    onload()
    {
       
    }
    
    start() {
        
        this.count = 0;
    }

    update(deltaTime: number) {
       
        
        this.count++;
        this.levelcountdown++;
        if (this.count == 200)
        {
            this.spawnopponent1();
            this.spawnopponent2();
            this.count = 0;
        }

        

        if(this.levelcountdown == 3000)
        {
            this.levelcountdown = 0;
        }
        console.log(this.count);
        
    }
}




