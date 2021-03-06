import { useStore, Subscribe } from 'laco-react';

import FullscreenEnterIcon from '~/public/icons/FullscreenEnter.svg';
import FullscreenExitIcon from '~/public/icons/FullscreenExit.svg';
import SettingsIcon from '~/public/icons/Settings.svg';
import store from '~/store.js';
import { onSettingsToggle } from './SettingsOverlay';

const MainHeaderButtonsGroup = () => {
  const { isFullscreen } = useStore(store);

  let isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isFullscreen && !document.fullscreenElement) {
      document.body.requestFullscreen().catch(err => {
        console.warn(err);
      });
    } else if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.warn(err);
      });
    }
  }, [isFullscreen]);

  return (
    <Subscribe to={[store]}>
      {storeState => (
        <>
          <div className="button-group">
            {storeState.isFullscreenSupported && (
              <button
                className="button toggle-full-screen"
                onClick={fullscreenWasToggled}
                title="toggle full screen"
              >
                {storeState.isFullscreen ? (
                  <FullscreenExitIcon className="fullscreen-exit-icon" />
                ) : (
                  <FullscreenEnterIcon className="fullscreen-exit-icon" />
                )}
              </button>
            )}

            <button
              title="settings"
              className="button button-settings"
              onClick={onSettingsToggle}
            >
              <SettingsIcon className="settings-icon" />
            </button>
          </div>
          <style jsx>{`
            .button-options-overlay-close {
              margin-left: auto;
              font-size: 20px;
              > :global(svg) {
              }
            }
            .button-group {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              flex-wrap: wrap;
              height: 60px;
              position: absolute;
              top: 0;
              right: 0;
              color: #002b45;
              pointer-events: all;
              @media (--tablet-up) {
                
              }
            }
            .button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              margin: 10px;
              color: var(--color-group-blue);
              cursor: pointer;
              font-size: 20px;
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.5);
              @supports (backdrop-filter: blur(10px)) {
                background-color: rgba(255, 255, 255, 0.5);
                backdrop-filter: saturate(180%) blur(4px);
              }
              > :global(svg) {

              }
            }
            .toggle-full-screen {
              font-size: 30px;
              border: none;
              fill: var(--color-group-blue);
            }
            :global(.fullscreen-exit-icon) {
              display: block;
            }
            :global(.fullscreen-enter-icon) {
              display: block;
            }

          `}</style>
        </>
      )}
    </Subscribe>
  );
};

export default MainHeaderButtonsGroup;

const fullscreenWasToggled = () =>
  store.set(state => ({ isFullscreen: !state.isFullscreen }));
