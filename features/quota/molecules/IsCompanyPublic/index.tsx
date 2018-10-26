import * as React from 'react'

const IsCompaniyPublic = ( publicCompany: Props) =>
  <p>
    {
      publicCompany
        ? 'Жертователь показывается на сайте'
        : 'Жертователь не показывается на сайте'
    }
  </p>

export default IsCompaniyPublic
