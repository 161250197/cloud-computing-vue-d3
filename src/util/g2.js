import { registerAnimation } from "@antv/g2";
import { LABEL_UPDATE, LABEL_APPEAR } from './../consts/g2';

function handleLabelAppear (element, animateCfg, cfg) {
    const label = element.getChildren()[0];
    const coordinate = cfg.coordinate;
    const startX = coordinate.start.x;
    const finalX = label.attr('x');
    const labelContent = label.attr('text');

    label.attr('x', startX);
    label.attr('text', 0);

    const distance = finalX - startX;
    label.animate((ratio) => {
        const position = startX + distance * ratio;
        const text = (labelContent * ratio).toFixed(0);

        return {
            x: position,
            text,
        };
    }, animateCfg);
}

function handleLabelUpdate (element, animateCfg, cfg) {
    const startX = element.attr('x');
    const startY = element.attr('y');
    const finalX = cfg.toAttrs.x;
    const finalY = cfg.toAttrs.y;
    const labelContent = element.attr('text');
    const finalContent = cfg.toAttrs.text;

    const distanceX = finalX - startX;
    const distanceY = finalY - startY;
    const numberDiff = +finalContent - +labelContent;

    element.animate((ratio) => {
        const positionX = startX + distanceX * ratio;
        const positionY = startY + distanceY * ratio;
        const text = (+labelContent + numberDiff * ratio).toFixed(0);

        return {
            x: positionX,
            y: positionY,
            text,
        };
    }, animateCfg);


}

function registerDynamicLabelAnimation () {
    registerAnimation(LABEL_APPEAR, handleLabelAppear);
    registerAnimation(LABEL_UPDATE, handleLabelUpdate);
}

export {
    registerDynamicLabelAnimation
};
