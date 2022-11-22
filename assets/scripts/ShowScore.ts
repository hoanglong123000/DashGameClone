import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ShowScore')
export class ShowScore extends Component {
    @property({type:Label})
    public score: Label;
    start() {

    }

    update(deltaTime: number) {
        this.node.parent
    }
}


