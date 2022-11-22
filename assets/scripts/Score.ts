import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Score')
export class Score extends Component {
    @property({type:Label})
    public score: Label;
    public playerscore: number = 0;

    gainScore()
    {
        this.playerscore += 1;
        this.score.string = this.playerscore.toString();
    }

    getScore()
    {
        this.score.string = this.playerscore.toString();
    }



    start() {

    }

    update(deltaTime: number) {
        this.gainScore();
    }
}


