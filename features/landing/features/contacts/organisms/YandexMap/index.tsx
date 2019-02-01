import * as React from 'react'

import * as styles from './YandexMap.css'

import ExternalLink from '@app/ui/molecules/ExternalLink'
import { Map, Placemark, YMaps } from 'react-yandex-maps'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const LAT = 59.94416343318767
const LON = 30.28458858355316

class YandexMap extends React.Component {
  public render() {
    return (
      <div className={styles.map}>
        <YMaps>
          <Map
            className={styles.mapContainer}
            defaultState={{ center: [LAT, LON], zoom: 16 }}
            defaultOptions={{ behaviors: [{ scrollZoom: false }] }}
            instanceRef={(ref: any) => {
              // tslint:disable-next-line:no-unused-expression
              ref && ref.behaviors.disable('scrollZoom')
            }}
          >
            <Placemark geometry={[LAT, LON]} />
            <article className={styles.infoBlock}>
              <p className={styles.text}>
                <ExternalLink className={styles.link} href="tel:+78124685797">
                  +7 812 468-57-97
                </ExternalLink>
              </p>
              <p className={styles.text}>
                <ExternalLink
                  className={styles.link}
                  href="mailto:ask@nenaprasno.ru"
                >
                  ask@nenaprasno.ru
                </ExternalLink>
              </p>
              <p className={styles.text}>
                Санкт-Петербург, 2-я{NON_BREAKING_SPACE}линия Васильевского
                {NON_BREAKING_SPACE}
                острова, д.{NON_BREAKING_SPACE}37, офис{NON_BREAKING_SPACE}310
              </p>
            </article>
          </Map>
        </YMaps>
      </div>
    )
  }
}

export default YandexMap
