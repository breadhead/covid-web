import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
export const CloudPayments = () => {
  const [state, setState] = useState({ step: 'initial' });

  useEffect(() => {
    console.log('ЫЫЫ:', !!window && (window as any).cp);
  }, []);

  const showWidget = ({
    description,
    amount,
    recurrent,
    email,
    firstname,
    lastname,
  }) => {
    // if (typeof cp === 'undefined') {
    //   alert('Cloudpayments is undefined');
    //   return false;
    // } else {
    //   const widget = new cp.CloudPayments();
    // }

    const data = { firstname: firstname, lastname: lastname, email: email };

    // if (recurrent) {
    //   data.cloudPayments = {
    //     recurrent: { interval: 'Month', period: 1 },
    //   };
    // }

    //   widget.charge(
    //     {
    //       publicId: 'pk_be83b01a981129a5c65350e031240',
    //       description: description,
    //       amount: amount,
    //       currency: 'RUB',
    //       accountId: email,
    //       data: data,
    //     },
    //     (data) => {
    //       setState({ step: 'thankyou' });
    //     },
    //     (reason, options) => {
    //       setState({ step: 'fail', reason: reason });
    //     },
    //   );

    //   return widget;
    // };

    // const pay = () => {
    //   const data /* get from store! */ = {
    //     description: 'Пожертвование: Помощь больницам',
    //     amount: 500,
    //     recurrent: true,
    //     email: 'leon@thatsme.ru',
    //     firstname: 'Леонид',
    //     lastname: 'Николаев',
    //   };

    //   showWidget(data);
    // };
  };

  return (
    <>
      <div>
        cloud payments
        {/* {state.step === 'initial' && <button onClick={pay}>Заплатить</button>}
      {state.step === 'thankyou' && <h2>Спасибо за помощь!</h2>}
      {state.step === 'fail' && (
        <>
          <h2>Ошибка! </h2> <p>{state.reason}</p>
          <button onClick={pay}>Попробовать еще раз</button>
        </>
      )} */}
      </div>
    </>
  );
};
