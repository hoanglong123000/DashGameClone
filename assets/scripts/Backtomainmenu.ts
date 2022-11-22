import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Backtomainmenu')
export class Backtomainmenu extends Component {
    onMouseDown = () => {
        director.loadScene("startgame");

    };
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    update(deltaTime: number) {
        
    }
}


