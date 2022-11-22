import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Replay')
export class Replay extends Component {
    onMouseDown = () => {
        director.loadScene("main1");

    };
    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    update(deltaTime: number) {
        
    }
}


