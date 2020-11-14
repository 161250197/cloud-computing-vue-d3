const LABEL_APPEAR = 'label-appear';
const LABEL_UPDATE = 'label-update';
const EASE_LINEAR = 'easeLinear';
const DEFAULT_DURATION = 1000;
const TYPE_RECT = 'rect';

const LABEL_APPEAR_ANIMATION = {
    animation: LABEL_APPEAR,
    delay: 0,
    duration: DEFAULT_DURATION,
    easing: EASE_LINEAR,
};

const LABEL_UPDATE_ANIMATION = {
    animation: LABEL_UPDATE,
    duration: DEFAULT_DURATION,
    easing: EASE_LINEAR,
};

export {
    LABEL_APPEAR_ANIMATION,
    LABEL_UPDATE_ANIMATION,
    TYPE_RECT,
    DEFAULT_DURATION,
    EASE_LINEAR,
    LABEL_APPEAR,
    LABEL_UPDATE
};
