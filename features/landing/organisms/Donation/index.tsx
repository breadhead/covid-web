import * as React from 'react'

import * as styles from './Donation.css'

const Donation = () => (
  <>
    <div className={styles.donationWrapper}>
      <h2 className={styles.title}>Помочь проекту</h2>
      <div className={styles.content}>
        <div className={styles.iframe}>iframe</div>
        <article className={styles.quote}>
          <p className={styles.message}>
            Все собранные средства идут на оплату экспертов, задействованных в
            консультациях и на поддержание работоспособности сервиса.
            Поддерживая системные проекты: образование талантливых врачей,
            просвещение населения РФ, внедрение технологий скрининга рака, можно
            спасти сотни и тысячи неизвестных вам людей. И Бог знает, кто будут
            эти люди – возможно они будут дороги и лично вам.
          </p>
          <div className={styles.author}>
            <img
              className={styles.authorPhoto}
              src="http://placecorgi.com/80/80"
              alt="Илья Фоминцев"
            />
            <div className={styles.textWrapper}>
              <p className={styles.authorName}>Илья Фоминцев</p>
              <p className={styles.authorPosition}>
                Исполнительный директор
                <br />
                «Фонда профилактики рака»
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </>
)

export default Donation
