import getConfig from 'next/config';
import { Option } from 'tsoption';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React, { Component as ReactComponent } from 'react';
import { Provider } from 'react-redux';
import { StoreContext } from 'redux-react-hook';
import { createSizeAction, listenResize } from 'redux-windowsize';

import bugsnagClient from '@app/src/features/common/bugsnag/bugsnag';
import withReduxStore from '@app/src/lib/with-redux-store';
import { Store } from '@app/src/lib/store';
import Modal from '@app/src/features/common/modal';
import { Analytics } from '@app/src/features/common/analytics';
import { Intercom } from '@app/src/features/common/intercom';
import NotFound, { getFound } from '@app/src/features/common/notFound';
import { canUseDOM } from '@app/src/lib/helpers/canUseDOM';
import registerModals from '@app/src/lib/register-modals';
import { AppContext } from '@app/src/lib/server-types';
import { resetCookie } from '@app/src/features/login/features/signIn/helpers/setAuthToken';
import {
  currentUser,
  getToken,
  setToken,
} from '@app/src/domain/reducers/userReducer';
import { pushRoute } from '@app/src/lib/routing/pushRoute';
import { updateRequestFormData } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import { normalizeWantTo } from '@app/src/helpers/normalizeWantTo';
import { Sprite } from '@app/src/ui/sprite';
import { getViolateState } from '@app/src/domain/reducers/signInReducer/selectors';
import { authViolateStatus } from '@app/src/domain/reducers/signInReducer/middleware';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import { getExpertsFromSanity } from '@app/src/domain/reducers/expertReducer';

import { getExpertBoardFromSanity } from '@front/domain/reducers/expertBoardReducer';

import ErrorComponent from './_error';
import { description, keywords } from '../src/features/common/seo/SEO';

import '@app/src/ui/antd-styles.less';
import '@app/src/ui/config.css?CSSModulesDisable';
import '@app/src/ui/globals.css?CSSModulesDisable';

interface Props {
  reduxStore: Store;
  pageProps: any;
  Component: ReactComponent;
}

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0);
});

const ErrorBoundary = bugsnagClient.getPlugin('react');

class OncohelpWeb extends App<Props> {
  public static async getInitialProps(context) {
    const ctx: AppContext = context.ctx as any;
    if (ctx.req) {
      // eslint-disable-next-line prefer-destructuring
      const token: string = (ctx.req as any).cookies.token;
      if (!!token && token.length > 1) {
        ctx.reduxStore.dispatch(setToken(token));
        await ctx.reduxStore.dispatch(currentUser() as any); // it's important to dispatch this action after token is set to omit 401 infinite loop
      }
    }

    registerModals();

    await Promise.all([
      ctx.reduxStore.dispatch(getPartnersFromSanity() as any),
      ctx.reduxStore.dispatch(getExpertsFromSanity() as any),
      ctx.reduxStore.dispatch(getExpertBoardFromSanity() as any),
    ]);
    const { isSecure } = context.Component as any;
    const loggedIn = (getToken(ctx.reduxStore.getState()) || '').length > 0;

    if (isSecure && !loggedIn) {
      const wantTo = normalizeWantTo(context.router.asPath!);
      await pushRoute('/', Option.of(ctx), { query: { signIn: true, wantTo } });
    }

    return App.getInitialProps(context);
  }

  public async componentDidMount() {
    const authViolate = getViolateState(this.props.reduxStore.getState());
    await this.props.reduxStore.dispatch(updateRequestFormData() as any);

    if (authViolate) {
      this.props.reduxStore.dispatch(authViolateStatus(false));
      this.props.reduxStore.dispatch(setToken(''));
      resetCookie();

      const wantTo = normalizeWantTo(this.props.router.asPath!);
      Router.push({ pathname: '/', query: { signIn: true, wantTo } });
    }
  }

  public render() {
    const { Component, pageProps, reduxStore } = this.props;
    const { publicRuntimeConfig } = getConfig();

    const authViolate = getViolateState(reduxStore.getState());
    const notFound = !getFound(reduxStore.getState());

    if (canUseDOM) {
      reduxStore.dispatch(createSizeAction(window));
      listenResize(reduxStore, window, 100);
    }
    return !authViolate ? (
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Container>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial=scale=1"
            />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="description" content={description} />
            <link rel="canonical" href="https://defeatcovid.ru/" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/images/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/images/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/images/favicons/favicon-16x16.png"
            />
            <link
              rel="manifest"
              href="/static/images/favicons/site.webmanifest"
            />
            <link
              rel="mask-icon"
              href="/static/images/favicons/safari-pinned-tab.svg"
              color="#ffc40d"
            />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff" />
            <meta
              property="og:title"
              content="Пусть больше людей узнает о проекте"
            />
            <meta
              property="og:site_name"
              content={publicRuntimeConfig.siteUrl}
            />
            <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
            <meta
              property="og:description"
              content="Поделитесь с друзьями и коллегами. Вместе победим! 💪"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content={`${publicRuntimeConfig.siteUrl}/static/images/covid-image.png`}
            />
            <meta
              property="og:image:secure_url"
              content={`${publicRuntimeConfig.siteUrl}/static/images/covid-image.png`}
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta
              property="og:image:alt"
              content="Пусть больше людей узнает о проекте"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Пусть больше людей узнает о проекте" />
            <meta
              name="twitter:description"
              content="Поделитесь с друзьями и коллегами. Вместе победим! 💪"
            />
            <meta
              name="twitter:image"
              content="/static/images/covid-image.png"
            />
            <meta
              name="twitter:image:alt"
              content="Пусть больше людей узнает о проекте"
            />
            <meta property="fb:306467899461959" content="306467899461959" />
          </Head>
          <Intercom />
          <Sprite />
          <Provider store={reduxStore}>
            <StoreContext.Provider value={reduxStore}>
              {notFound ? <NotFound /> : <Component {...pageProps} />}
              <Modal />
              <Analytics />
            </StoreContext.Provider>
          </Provider>
        </Container>
      </ErrorBoundary>
    ) : (
      <div>Загружаем...</div>
    );
  }
}

export default withReduxStore(OncohelpWeb);
