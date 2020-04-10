import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { ActionBlock } from '@app/src/ui/actionBlock';

import s from './Hero.css';

export const ForHospitalsHero = () => (
  <div>
    <h1 className="gl-pageTitle">Помогаем больницам</h1>

    <div className={cx(s.description)}>
      <div className="gl-text">
        <ActionBlock
          className={s.bottomOffset}
          title="Вашей больнице нужна помощь?"
          buttonText="Отправить заявку"
          href="/for-hospitals#help-request-form"
          icon={
            <img className={s.bottomOffset} src="/static/images/answers.png" />
          }
        />
        <p className={s.bottomOffset}>
          Вместе с распространением пандемии нарастает нагрузка на больницы и
          врачей. Врачам и медсестрам необходимы специальная защита, снабжение
          едой, водой, психологическая помощь и многое другое. Мы быстро
          реагируем на нужды больниц, отвечаем на их просьбы о помощи,
          привлекаем финансирование, оперативно закупаем и доставляем все
          необходимое. 
        </p>
      </div>
      <img
        className={cx(s.textImage, s.bottomOffset)}
        src="/static/images/allTogether.png"
        alt="все вместе"
      />
      <div className="gl-text">
        <div className={cx(s.highlighted, s.bottomOffset)}>
          В наших силах сдержать распространение и спасти жизнь того доктора,
          который спасет нас и наших близких!
        </div>

        <p>
          Сейчас у нас всех только один общий враг — COVID-19. Во всем мире
          общество объединяется независимо от взглядов, национальностей, образа
          жизни или богатства, чтобы решить проблему дефицита ресурсов в системе
          здравоохранения, потому что вирус не выбирает. Мы создали фронт из
          общественных организаций, СМИ, бизнеса, специалистов и известных
          личностей, чтобы помогать больницам и врачам в России. Нам всем сейчас
          необходимо объединиться, чтобы помочь тем, кто помогает нам: докторам
          и медсестрам, которые приняли на себя главный удар.
        </p>
      </div>
    </div>
  </div>
);
