import React from 'react';

const createMarkup = () => `
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  `;

const DonationWidget = () => (
  <>
    <div
      dangerouslySetInnerHTML={{
        __html: createMarkup(),
      }}
    />
    <iframe
      src="//nenaprasno.ru/nenaprasno_donation/donation_form.php"
      height="560"
      width="100%"
      scrolling="no"
      frameBorder="0"
    />
  </>
);

export default DonationWidget;
