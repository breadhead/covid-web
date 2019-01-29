const createMarkup = () => `
    <div id="nenaprasno_donation" />
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="http://nenaprasno.domain-4-test.ru/nenaprasno_donation/insert_donation_form.js"></script>
  `

const DonationWidget = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: createMarkup(),
    }}
  />
)

export default DonationWidget
