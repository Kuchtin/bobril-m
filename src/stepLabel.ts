import * as b from "bobril";
import * as m from "../index";

interface IStepLabelData {
    children?: b.IBobrilChildren;
    index?: number;
    completed?: boolean;
    active?: boolean;
}

interface IStepLabelCtx extends b.IBobrilCtx {
    data: IStepLabelData;
}

export const StepLabel = b.createComponent<IStepLabelData>({
    render(ctx: IStepLabelCtx, me: b.IBobrilNode) {
        me.children = [
            m.StepIcon({completed:ctx.data.completed, active: ctx.data.active,children:[ ctx.data.index]}),
            b.styledDiv(ctx.data.children, stepLabelStyle)
        ];
        b.styledDiv(me.children,stepLabelStyle)
    }
});

const stepLabelStyle = b.styleDef({
    padding: 0,
});