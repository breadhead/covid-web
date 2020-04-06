import * as React from 'react';

import * as styles from './ShareWidget.css';
import { IconsList } from '@app/src/ui/sprite';

import {Icon} from "@front/ui/icon";
import {
    FacebookShareButton,
    OKShareButton,
    TelegramShareButton,
    VKShareButton
} from "react-share";

interface Props {
    shareUrl: string;
    title?: string;
}

export const ShareWidget = ({ shareUrl , title = 'Пусть больше людей узнает о проекте'}: Props) => {
    return (
        <footer className={styles.helpFooter}>
            <p className={styles.text}>
                Пусть больше людей узнает о проекте
                <span className={styles.textSecondary}>
                  Поделитесь с друзьями и коллегами. Вместе победим! 💪
                </span>
            </p>
            <nav className={styles.social}>
                <FacebookShareButton url={shareUrl} quote={title} className={styles.iconWrapper} >
                    <Icon className={styles.icon} name={IconsList.Facebook} />
                </FacebookShareButton>
                <VKShareButton url={shareUrl} className={styles.iconWrapper}>
                    <Icon className={styles.icon} name={IconsList.Vk} />
                </VKShareButton>
                <TelegramShareButton url={shareUrl} title={title} lassName={styles.iconWrapper}>
                    <Icon className={styles.icon} name={IconsList.Telegram} />
                </TelegramShareButton>
                <OKShareButton url={shareUrl} title={title} className={styles.iconWrapper}>
                    <Icon className={styles.icon} name={IconsList.OK} />
                </OKShareButton>
            </nav>
        </footer>
    )
};
