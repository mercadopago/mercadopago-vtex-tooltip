/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

import Modal from './TooltipModalMP/TooltipModalMP'
import mpLogoMini from './TooltipModalMP/mp-logo-mini.png'

const CSS_HANDLES = [
  'mpTooltipMain',
  'mpTooltipHeader',
  'mpTooltipBannerInfo',
  'mpTooltipBannerRoundBase',
  'mpTooltipBannerRoundBackground',
  'mpTooltipBannerRoundLogo',
  'mpTooltipBannerText',
  'mpTooltipBannerTextSpan',
  'mpTooltipBannerLink',
  'mpTooltipBannerLinkSpan',
  'mpTooltipBannerLinkA',
  'mpTooltipModalVisible',
  'mpTooltipModalInvisible',
]

function TooltipMP() {
  const handles = useCssHandles(CSS_HANDLES)

  const [modalVisibility, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible((isVisible) => !isVisible)
  }

  return (
    <div className={`${handles.mpTooltipMain}`}>
      <header className={`${handles.mpTooltipHeader}`}>
        <div className={`${handles.mpTooltipBannerInfo}`}>
          <div className={`${handles.mpTooltipBannerRoundBase}`}>
            <div className={`${handles.mpTooltipBannerRoundBackground}`}>
              <img
                className={`${handles.mpTooltipBannerRoundLogo}`}
                src={mpLogoMini}
                alt="mercadopago"
              />
            </div>
          </div>
          <div className={`${handles.mpTooltipBannerText}`}>
            <span className={`${handles.mpTooltipBannerTextSpan}`}>
              <FormattedMessage id="bannerText1" />
              <strong>
                <FormattedMessage id="bannerText2" />
              </strong>
              <FormattedMessage id="bannerText3" />
            </span>
          </div>
          <div className={`${handles.mpTooltipBannerLink}`}>
            <span className={`${handles.mpTooltipBannerLinkSpan}`}>
              <a
                className={`${handles.mpTooltipBannerLinkA}`}
                href="#"
                onClick={toggleModal}
              >
                <FormattedMessage id="bannerLink" />
              </a>
            </span>
          </div>
        </div>
        <div
          className={
            modalVisibility
              ? `${handles.mpTooltipModalVisible}`
              : `${handles.mpTooltipModalInvisible}`
          }
        >
          <Modal onBackdropClick={toggleModal} />
        </div>
      </header>
    </div>
  )
}

export default TooltipMP
