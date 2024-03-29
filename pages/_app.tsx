import getConfig from 'next/config';
import { Option } from 'tsoption';
import App, { Container } from 'next/app';
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
import { getTagsFromSanity } from '@app/src/domain/reducers/tagsReducer';
import { getFeaturedNewsFromSanity } from '@app/src/domain/reducers/newsReducer/featured/actions';
import { getHospitalsFromSanity } from '@app/src/domain/reducers/hospitalsReducer';

import { getExpertBoardFromSanity } from '@front/domain/reducers/expertBoardReducer';

import ErrorComponent from './_error';
import '@app/src/ui/antd-styles.less';
import '@app/src/ui/config.css?CSSModulesDisable';
import '@app/src/ui/globals.css?CSSModulesDisable';
import { AppHead } from '../src/features/landing/features/appHead/AppHead';

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: "auto" | "eager" | "lazy";
  }
}

interface Props {
  reduxStore: Store;
  pageProps: any;
  Component: ReactComponent;
}

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
    const dispatch = ctx.reduxStore.dispatch;
    await Promise.all([
      dispatch(getPartnersFromSanity() as any),
      dispatch(getExpertsFromSanity() as any),
      dispatch(getExpertBoardFromSanity() as any),
      dispatch(getTagsFromSanity() as any),
      dispatch(getFeaturedNewsFromSanity() as any),
      dispatch(getHospitalsFromSanity() as any),
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
          <AppHead publicRuntimeConfig={publicRuntimeConfig}></AppHead>
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
