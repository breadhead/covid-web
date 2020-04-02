import { storiesOf } from '@storybook/react';
import * as React from 'react';

import * as styles from './icon.css';
import { Sprite } from '../../sprite';
import { IconsList } from '../../sprite/IconsList';
import { Icon } from '../Icon';

storiesOf('Icon', module).add('Icon', () => (
  <>
    <Sprite />
    <div className={styles.container}>
      <Icon name={IconsList.ArrowSmallRightGray} />
      <Icon name={IconsList.ArrowBigBack} />
      <Icon name={IconsList.ArrowUp} />
      <Icon name={IconsList.ArrowBigBackHover} />
      <Icon name={IconsList.ArrowSelectDown} />
      <Icon name={IconsList.ArrowRight} />
      <Icon name={IconsList.AttachFile} />
      <Icon name={IconsList.AwayLink} />
      <Icon name={IconsList.ButtonLoader} />
      <Icon name={IconsList.BurgerMenu} />
      <Icon name={IconsList.Chat} />
      <Icon name={IconsList.ChatNewMessage} />
      <Icon name={IconsList.CancelConsult} />
      <Icon name={IconsList.CancelRed} />
      <Icon name={IconsList.CloseBlue} />
      <Icon name={IconsList.CloseLight} />
      <Icon name={IconsList.ConsultationNew} />
      <Icon name={IconsList.DownloadLight} />
      <Icon name={IconsList.Edit} />
      <Icon name={IconsList.FoundationLogoMark} />
      <Icon name={IconsList.FoundationLogo} />
      <Icon name={IconsList.InputValid} />
      <Icon name={IconsList.LogoFull} />
      <Icon name={IconsList.LogoShort} />
      <Icon name={IconsList.LoadingLight} />
      <Icon name={IconsList.LocationLight} />
      <Icon name={IconsList.MailLight} />
      <Icon name={IconsList.MyConsultation} />
      <Icon name={IconsList.NewMessage} />
      <Icon name={IconsList.PhoneLight} />
      <Icon name={IconsList.Plus} />
      <Icon name={IconsList.PrintLight} />
      <Icon name={IconsList.Search} />
      <Icon name={IconsList.SendMessage} />
      <Icon name={IconsList.Settings} />
      <Icon name={IconsList.SliderArrowRight} />
      <Icon name={IconsList.SliderArrowLeft} />
      <Icon name={IconsList.Success} />
      <Icon name={IconsList.User} />
      <Icon name={IconsList.View} />
    </div>
  </>
));
