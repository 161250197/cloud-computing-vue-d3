const LABEL_APPEAR = "label-appear";
const LABEL_UPDATE = "label-update";
const EASE_LINEAR = "easeLinear";
const DEFAULT_DURATION = 200;
const TYPE_RECT = "rect";

const LABEL_APPEAR_ANIMATION = {
    animation: LABEL_APPEAR,
    delay: 0,
    duration: DEFAULT_DURATION,
    easing: EASE_LINEAR
};

const LABEL_UPDATE_ANIMATION = {
    animation: LABEL_UPDATE,
    duration: DEFAULT_DURATION,
    easing: EASE_LINEAR
};


const DEFAULT_OFFSET = 5;

const DEFAULT_LABEL_CONFIG = {
    animate: {
        appear: LABEL_APPEAR_ANIMATION,
        update: LABEL_UPDATE_ANIMATION
    },
    offset: DEFAULT_OFFSET
};

const DEFAULT_DYNAMIC_ANIMATE_CONFIG = {
    appear: {
        duration: DEFAULT_DURATION,
        easing: EASE_LINEAR
    },
    update: {
        duration: DEFAULT_DURATION,
        easing: EASE_LINEAR
    }
};

const DEFAULT_Y_DYNAMIC_CONFIG = {
    animateOption: {
        update: {
            duration: DEFAULT_DURATION,
            easing: EASE_LINEAR
        }
    }
};

const DEFAULT_SELECTED_STATE_CONFIG = {
    style: {
        filter: "brightness(35%)"
    }
};

const DEFAULT_ACTIVE_STATE_CONFIG = {
    style: {
        stroke: "transparent",
        cursor: "pointer"
    }
};

import colorMap from "./colorMap.json";

const cartoonColorCallback = function (name) {
    return colorMap[name];
};

export {
    cartoonColorCallback,
    DEFAULT_ACTIVE_STATE_CONFIG,
    DEFAULT_SELECTED_STATE_CONFIG,
    DEFAULT_Y_DYNAMIC_CONFIG,
    DEFAULT_DYNAMIC_ANIMATE_CONFIG,
    DEFAULT_LABEL_CONFIG,
    LABEL_APPEAR_ANIMATION,
    LABEL_UPDATE_ANIMATION,
    TYPE_RECT,
    DEFAULT_DURATION,
    EASE_LINEAR,
    LABEL_APPEAR,
    LABEL_UPDATE,
    DEFAULT_OFFSET
};
