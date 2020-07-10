import React from "react";

let Styles = () => (
  <style jsx global>{`
    .svg-ship-icon {
      &--highlight {
      }
    }

    .leaflet-control.leaflet-control-zoom {
    }

    .leaflet-control-zoom-in {
      background-color: rgba(255, 255, 255, 0.9) !important;
      @supports (backdrop-filter: blur(4px)) {
        background-color: rgba(255, 255, 255, 0.7) !important;
        backdrop-filter: saturate(180%) blur(4px);
      }
    }

    .leaflet-control-zoom-out {
      background-color: rgba(255, 255, 255, 0.9) !important;
      @supports (backdrop-filter: blur(4px)) {
        background-color: rgba(255, 255, 255, 0.7) !important;
        backdrop-filter: saturate(180%) blur(4px);
      }
    }

    .leaflet-control-zoom {
      bottom: 20px;
    }

    .ship-div-marker-icon {
      _width: 100px;
      _height: 100px;
      pointer-events: none;
      _border-radius: 50%;
      _background: rgba(red, 0.5);
      _transform: translate(-50%, -50%);
    }
    .ship-div-marker-icon__name {
      transform: translateY(10px);
      line-height: 1;
      font-size: 10px;
      color: var(--color-group-blue);
      font-weight: 300;
      font-family: Verdana;
      position: absolute;
      top: 0;
      left: calc(50% - 50px);
      width: 100%;
      text-align: center;
      width: 100px;
    }
    .ship-div-marker-icon__direction {
      position: absolute;
      text-align: center;
      font-size: 16px;
      top: -42px;
      width: 1em;
      height: 1em;
      line-height: 1;
      left: 0;
      color: var(--color-group-blue);
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      align-self: flex-end;

    }
    .ship-div-marker-icon__direction .moving {
      animation-name: bounce-2;
      animation-timing-function: ease;
      animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
    }
    @keyframes bounce-2 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-5px); }
        100% { transform: translateY(0); }
    }
  `}</style>
);

export default Styles;
