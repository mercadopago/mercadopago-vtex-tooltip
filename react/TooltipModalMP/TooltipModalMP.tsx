import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import mpLogo from './mp-logo.png'
import closeButton from './close-button.png'

const CSS_HANDLES = [
  'mpTooltipModal',
  'mpTooltipModalCentralize',
  'mpTooltipModalContainer',
  'mpTooltipModalContainerContent',
  'mpTooltipModalContent',
  'mpTooltipModalClose',
  'mpTooltipModalCloseImg',
  'mpTooltipModalLogo',
  'mpTooltipModalLogoImg',
  'mpTooltipModalTitles',
  'mpTooltipModalTitlesH1',
  'mpTooltipModalTitlesP',
  'mpTooltipModalTitlesH2',
  'mpTooltipModalHowToUse',
  'mpTooltipModalHowToUseChild',
  'mpTooltipModalBlueCircle',
  'mpTooltipModalSpan',
  'mpTooltipModalSpanPaddingLeft',
  'mpTooltipModalFAQ',
  'mpTooltipModalFAQP',
  'mpTooltipModalFAQLink',
  'mpTooltipModalMobile',
]

interface ModalProps {
  onBackdropClick: () => void
}

const Modal: React.FC<ModalProps> = ({ onBackdropClick }) => {
  const handles = useCssHandles(CSS_HANDLES)

  const ModalContent = () => {
    return (
      <div>
        <div className={`${handles.mpTooltipModal}`} onClick={onBackdropClick} >
          <div className={`${handles.mpTooltipModalCentralize}`}>
            <div className={`${handles.mpTooltipModalContainer}`}>
              <div
                className={`${handles.mpTooltipModalContainerContent}`}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                <div className={`${handles.mpTooltipModalContent}`}>
                  <div className={`${handles.mpTooltipModalClose}`}>
                    <img
                      className={`${handles.mpTooltipModalCloseImg}`}
                      onClick={onBackdropClick}
                      src={closeButton}
                      alt="close"
                    />
                  </div>
                  <div className={`${handles.mpTooltipModalLogo}`}>
                    <img
                      className={`${handles.mpTooltipModalLogoImg}`}
                      src={mpLogo}
                      alt="mercadopago"
                    />
                  </div>
                  <div className={`${handles.mpTooltipModalTitles}`}>
                    <div>
                      <h1 className={`${handles.mpTooltipModalTitlesH1}`}>
                        <FormattedMessage id="modalTitlesH1" />
                      </h1>
                      <span className={`${handles.mpTooltipModalTitlesP}`}>
                        <FormattedMessage id="modalTitles1" />
                        <strong>
                          <FormattedMessage id="modalTitles2" />
                        </strong>
                        <FormattedMessage id="modalTitles3" />
                      </span>
                    </div>
                    <div>
                      <h2 className={`${handles.mpTooltipModalTitlesH2}`}>
                        <FormattedMessage id="modalTitlesH2" />
                      </h2>
                      <div className={`${handles.mpTooltipModalHowToUse}`}>
                        <div className={`${handles.mpTooltipModalHowToUseChild}`}>
                          <div className={`${handles.mpTooltipModalBlueCircle}`}>
                            <span className={`${handles.mpTooltipModalSpan}`}>
                              1
                            </span>
                          </div>
                          <span className={`${handles.mpTooltipModalSpanPaddingLeft}`}>
                            <FormattedMessage id="modalHowToUse1A" />
                            <strong>
                              <FormattedMessage id="modalHowToUse1B" />
                              </strong>
                            <FormattedMessage id="modalHowToUse1C" />
                          </span>
                        </div>
                        <div className={`${handles.mpTooltipModalHowToUseChild}`}>
                          <div className={`${handles.mpTooltipModalBlueCircle}`}>
                            <span className={`${handles.mpTooltipModalSpan}`}>
                              2
                            </span>
                          </div>
                          <span className={`${handles.mpTooltipModalSpanPaddingLeft}`}>
                            <FormattedMessage id="modalHowToUse2A" />
                            <strong>
                              <FormattedMessage id="modalHowToUse2B" />
                            </strong>
                            <FormattedMessage id="modalHowToUse2C" />
                            <strong>
                              <FormattedMessage id="modalHowToUse2D" />
                            </strong>
                          </span>
                        </div>
                        <div className={`${handles.mpTooltipModalHowToUseChild}`}>
                          <div className={`${handles.mpTooltipModalBlueCircle}`}>
                            <span className={`${handles.mpTooltipModalSpan}`}>
                              3
                            </span>
                          </div>
                          <span className={`${handles.mpTooltipModalSpanPaddingLeft}`}>
                          <strong>
                            <FormattedMessage id="modalHowToUse3A" />
                          </strong>
                          <FormattedMessage id="modalHowToUse3B" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${handles.mpTooltipModalFAQ}`}>
                    <p className={`${handles.mpTooltipModalFAQP}`}>
                      <FormattedMessage id="modalFAQ1" />
                      <a
                        href="https://www.mercadopago.com"
                        className={`${handles.mpTooltipModalFAQLink}`}
                      >
                        <FormattedMessage id="modalFAQ2" />
                      </a>
                      <FormattedMessage id="modalFAQ3" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <ModalContent />

}

export default Modal
