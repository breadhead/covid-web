import * as React from 'react'
import * as s from './AvonSection.css'
import { NON_BREAKING_SPACE } from '@app/lib/config'

export const AvonSection = () => {
  return (
    <section className={s.avon}>
      <article className={s.logoWrapper}>avon memme</article>
      <article className={s.textWrapper}>
        <h3 className={s.title}>
          Средства на консультацию предоставлены компанией{NON_BREAKING_SPACE}
          AVON<sup>*</sup>
        </h3>
        <p className={s.text}>
          Avon — косметическая компания, которая заботится не только о красоте.
          Более 25 лет мы участвуем в борьбе против рака груди — заболевания,
          которое каждый год уносит жизни более 600 000 женщин по всему миру
          <sup>**</sup>. В{NON_BREAKING_SPACE}России инициативы Миссии
          реализуются с 2002 года. За это время только в нашей стране более 80
          000 женщин прошли бесплатные обследования у{NON_BREAKING_SPACE}
          маммолога, а 15 млн. россиян получили информацию о болезни.
        </p>
        <p className={s.note}>
          <sup>*</sup>Чистая прибыль от продажи благотворительных товаров Avon
          будет направлена на{NON_BREAKING_SPACE}оплату данной консультации.
        </p>
        <p className={s.note}>
          <sup>**</sup>по данным Международного агентства по изучению рака
        </p>
      </article>
    </section>
  )
}
