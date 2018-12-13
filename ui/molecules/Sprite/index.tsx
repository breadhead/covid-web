import React from 'react'

const Sprite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: 0,
      height: 0,
    }}
    overflow="hidden"
  >
    <defs>
      <svg width="24" height="24" id="24x24_arrow-big-back">
        <path
          d="M9.41 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L9.4 12z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_arrow-big-up">
        <path
          d="M5.7 15.7a1 1 0 0 1-1.4-1.4l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.4L12 9.42l-6.3 6.3z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_arrow-small-select_down_grey">
        <path
          d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_arrow-small_right">
        <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
      </svg>
      <svg width="24" height="24" id="24x24_arrow-small_right_grey">
        <path
          d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_attach-file">
        <path
          d="M12.2 21.3c-.4.39-1.03.4-1.43 0a.97.97 0 0 1 0-1.4l7.37-7.16c2.37-2.3 2.44-5 .2-7.17-1.07-1.05-3.93-3.13-7.34.2l-5.84 5.67c-.8.79-1.19 1.58-1.13 2.34.06.84.64 1.57 1.12 2.03.66.65 1.31.98 1.94 1 .73.02 1.52-.37 2.35-1.19l6.04-5.86c.4-.4 1.04-.4 1.44-.01a.97.97 0 0 1-.01 1.4l-6.04 5.87c-1.24 1.21-2.53 1.8-3.84 1.76a4.96 4.96 0 0 1-3.31-1.57 5.21 5.21 0 0 1-1.7-3.28c-.11-1.37.47-2.67 1.71-3.88l5.84-5.68c3.16-3.09 7.17-3.16 10.2-.2 3.04 2.97 2.96 6.88-.2 9.96L12.2 21.3z"
          fill="--text-color-secondary"
          fill-rule="evenodd"
        />
      </svg>
      <svg width="24" height="24" id="24x24_away-link">
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            d="M18.59 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-7.3 7.3a1 1 0 1 1-1.4-1.42L18.58 4zM6 3h4.96a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1 1 1 0 0 1 1 1v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
            fill="var(--text-color-secondary)"
          />
        </g>
      </svg>
      <svg width="24" height="24" id="24x24_burger-menu">
        <path
          d="M3 13a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3zm0-8a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2H3zm0 16a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2H3z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_cancel-consult">
        <path
          d="M4.97 6.38a9 9 0 0 0 12.65 12.65L4.97 6.38zm1.41-1.41l12.65 12.65A9 9 0 0 0 6.38 4.97zM12 23a11 11 0 1 1 0-22 11 11 0 0 1 0 22z"
          fill="var(--text-color-secondary)"
          fill-rule="evenodd"
        />
      </svg>
      <svg width="24" height="24" id="24x24_cancel-red">
        <path
          d="M4.97 6.38a9 9 0 0 0 12.65 12.65L4.97 6.38zm1.41-1.41l12.65 12.65A9 9 0 0 0 6.38 4.97zM12 23a11 11 0 1 1 0-22 11 11 0 0 1 0 22z"
          fill="#EB4343"
          fill-rule="evenodd"
        />
      </svg>
      <svg width="24" height="24" id="24x24_close_light">
        <path
          d="M12 10.59l6.3-6.3a1 1 0 0 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4L12 13.42l-6.3 6.3a1 1 0 1 1-1.4-1.42l6.28-6.3-6.3-6.3A1 1 0 0 1 5.7 4.3l6.3 6.28z"
          fill="var(--color-default)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_consultation-new_blue">
        <path
          d="M16 4H8v4a8 8 0 0 1 6.93 12H20V8h-4V4zM6 8.25V4c0-1.1.9-2 2-2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2h-6.7A8 8 0 1 1 6 8.25zM8 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1-5H5a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2H9v2a1 1 0 0 1-2 0v-2z"
          fill="var(--text-primary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_download_light">
        <g fill="var(--color-default)">
          <path d="M2 13a1 1 0 0 1 2 0v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6z" />
          <path d="M11 14.59V3a1 1 0 0 1 2 0v11.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
        </g>
      </svg>
      <svg width="24" height="24" id="24x24_edit">
        <path
          d="M4 20h2.15l9.95-9.95-2.15-2.15L4 17.85V20zm-2-2.98L13.23 5.78a1 1 0 0 1 1.43 0l3.55 3.56a1 1 0 0 1 0 1.42L6.98 22H2v-4.98zM18.14 2.3l3.56 3.55a1 1 0 0 1 0 1.42l-.57.58a1 1 0 0 1-1.43 0l-3.55-3.56a1 1 0 0 1 0-1.42l.57-.57a1 1 0 0 1 1.42 0z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_input-valid_green">
        <path
          d="M13.57 9.9a49.99 49.99 0 0 1 3.7-4.6 1 1 0 0 1 1.45 1.4c-.88.92-2.07 2.38-3.54 4.38a42.54 42.54 0 0 0-3.95 6.36 1 1 0 0 1-1.65.21l-4.34-5a1 1 0 1 1 1.52-1.3l3.37 3.88c.95-1.73 2.1-3.51 3.44-5.34z"
          fill="#19CD92"
        />
      </svg>
      <svg width="24" height="24" id="24x24_loading_light">
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            d="M12 21v-2a7 7 0 1 0-7-7H3a9 9 0 1 1 9 9z"
            fill="var(--color-default)"
            fill-rule="nonzero"
          />
        </g>
      </svg>
      <svg width="24" height="24" id="24x24_location_light">
        <g fill="var(--color-default)">
          <path d="M12.78 21.17a29.16 29.16 0 0 0 3-2.73C18.42 15.64 20 12.75 20 10a8 8 0 0 0-16 0c0 2.75 1.57 5.64 4.23 8.44A29.16 29.16 0 0 0 12 21.77l.78-.6zm4.45-1.36a31.13 31.13 0 0 1-4.68 4.02 1 1 0 0 1-1.1 0 28.42 28.42 0 0 1-1.47-1.1 31.13 31.13 0 0 1-3.2-2.92C3.8 16.68 2 13.37 2 10a10 10 0 0 1 20 0c0 3.37-1.8 6.68-4.77 9.81z" />
          <path d="M12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </g>
      </svg>
      <svg width="24" height="24" id="24x24_mail_light">
        <path
          d="M3.1 5.55l8.9 6.23 8.9-6.23A1 1 0 0 0 20 5H4a1 1 0 0 0-.9.55zM3 7.92V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7.92l-8.43 5.9a1 1 0 0 1-1.14 0L3 7.92zm20-1.94a1 1 0 0 1 0 .03V18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6.01A3 3 0 0 1 4 3h16a3 3 0 0 1 3 2.98z"
          fill="var(--color-default)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_my-consultation">
        <path
          d="M14 4H6v16h12V8h-4V4zm-5 9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H9zm0 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H9zM6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_new-message">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M20 10c-3.309 0-6-2.691-6-6 0-.702.127-1.373.35-2H8a6 6 0 0 0-6 6v12.586a1 1 0 0 0 1.707.707l2.122-2.121A4 4 0 0 1 8.657 18H16a6 6 0 0 0 6-6V9.65a5.95 5.95 0 0 1-2 .35"
            fill="#FFE9B6"
          />
          <path
            d="M20 10v2c0 2.205-1.794 4-4 4H8.657c-1.603 0-3.11.624-4.243 1.758L4 18.172V8c0-2.206 1.794-4 4-4h6c0-.702.127-1.373.35-2H8a6 6 0 0 0-6 6v12.586a1 1 0 0 0 1.707.707l2.122-2.121A4 4 0 0 1 8.657 18H16a6 6 0 0 0 6-6V9.65a5.95 5.95 0 0 1-2 .35"
            fill="#FFD46D"
          />
          <path d="M20 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="#F24141" />
        </g>
      </svg>
      <svg width="24" height="24" id="24x24_phone_light">
        <path
          d="M21 16.92v-.02a1 1 0 0 0-.85-1.02 13.85 13.85 0 0 1-3.03-.75 1 1 0 0 0-1.05.22l-1.27 1.27a1 1 0 0 1-1.2.16 17 17 0 0 1-6.38-6.38 1 1 0 0 1 .16-1.2l1.27-1.26a1 1 0 0 0 .22-1.06c-.36-.98-.61-2-.75-3.02A1 1 0 0 0 7.11 3h-3a1 1 0 0 0-1 1.07 18.8 18.8 0 0 0 2.92 8.24c1.46 2.3 3.4 4.24 5.7 5.7 2.47 1.6 5.28 2.6 8.18 2.91a1 1 0 0 0 1.09-1v-3zm2 3a3 3 0 0 1-3.29 3 20.78 20.78 0 0 1-9.06-3.23 20.49 20.49 0 0 1-6.3-6.3 20.8 20.8 0 0 1-3.23-9.12A3 3 0 0 1 4.11 1H7.1a3 3 0 0 1 3 2.59c.12.88.33 1.75.65 2.59a3 3 0 0 1-.68 3.17l-.72.71a15 15 0 0 0 4.59 4.59l.72-.72a3 3 0 0 1 3.16-.68c.84.32 1.7.53 2.6.65A3 3 0 0 1 23 16.93v2.99z"
          fill="var(--color-default)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_plus">
        <path
          d="M11 13H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_print_light">
        <path
          d="M19 18v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H2a1 1 0 0 1-1-1v-7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4h1a3 3 0 0 1 3 3v7a1 1 0 0 1-1 1h-3zm0-2h2v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6h2v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM7 7h10V4H7v3zm0 8v5h10v-5H7z"
          fill="var(--color-default)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_search">
        <path
          d="M17.18 15.76l4.53 4.53a1 1 0 0 1-1.42 1.42l-4.53-4.53a8.5 8.5 0 1 1 1.41-1.41zM10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_send-message">
        <path
          d="M22.33 12.88l-18.5 9.8a1 1 0 0 1-1.45-1.07L4 13l11-1-11-1-1.62-8.6a1 1 0 0 1 1.45-1.07l18.5 9.79a1 1 0 0 1 0 1.76z"
          fill="var(--text-primary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_settings_white">
        <path
          d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5.5-8.91a1 1 0 0 1-1.24.14 7.95 7.95 0 0 0-2.48-1.03 1 1 0 0 1-.78-.98V2h-2v1.22a1 1 0 0 1-.78.98c-.88.2-1.72.55-2.48 1.03a1 1 0 0 1-1.24-.14l-.86-.87-1.42 1.42.87.86a1 1 0 0 1 .14 1.24c-.48.76-.83 1.6-1.03 2.48a1 1 0 0 1-.98.78H2v2h1.22a1 1 0 0 1 .98.78c.2.88.55 1.72 1.03 2.48a1 1 0 0 1-.14 1.24l-.87.86 1.42 1.42.86-.87a1 1 0 0 1 1.24-.14c.76.48 1.6.83 2.48 1.03.46.1.78.51.78.98V22h2v-1.22a1 1 0 0 1 .78-.98c.88-.2 1.72-.55 2.48-1.03a1 1 0 0 1 1.24.14l.86.87 1.42-1.42-.87-.86a1 1 0 0 1-.14-1.24c.48-.76.83-1.6 1.03-2.48a1 1 0 0 1 .98-.78H22v-2h-1.22a1 1 0 0 1-.98-.78 7.95 7.95 0 0 0-1.03-2.48 1 1 0 0 1 .14-1.24l.87-.86-1.42-1.42-.86.87zm.16-2.99a1 1 0 0 1 1.41 0l2.83 2.83a1 1 0 0 1 0 1.41l-1.03 1.03c.27.52.5 1.07.67 1.63H23a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.46c-.17.56-.4 1.1-.67 1.63l1.03 1.03a1 1 0 0 1 0 1.41l-2.83 2.83a1 1 0 0 1-1.41 0l-1.03-1.03c-.52.27-1.07.5-1.63.67V23a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.46c-.56-.17-1.1-.4-1.63-.67L6.34 21.9a1 1 0 0 1-1.41 0L2.1 19.07a1 1 0 0 1 0-1.41l1.03-1.03A9.94 9.94 0 0 1 2.46 15H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.46c.17-.56.4-1.1.67-1.63L2.1 6.34a1 1 0 0 1 0-1.41L4.93 2.1a1 1 0 0 1 1.41 0l1.03 1.03c.52-.27 1.07-.5 1.63-.67V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.46c.56.17 1.1.4 1.63.67l1.03-1.03z"
          fill="#FFF"
        />
      </svg>
      <svg width="24" height="24" id="24x24_success_green">
        <path
          d="M22.79 9.81a1 1 0 0 0-1.96.38A9 9 0 1 1 12 3c2.33.01 4.5.94 6.17 2.57l-7.25 8.94-3.18-3.2a1 1 0 1 0-1.42 1.4l3.97 4a1 1 0 0 0 1.49-.07l8.5-10.5c.02-.03.2-.3.2-.6 0-.43-.2-.66-.22-.68A10.87 10.87 0 0 0 12 1a11 11 0 1 0 10.79 8.81"
          fill="#19CD92"
          fill-rule="evenodd"
        />
      </svg>
      <svg width="24" height="24" id="24x24_user">
        <path
          d="M21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v1zm-7-6h-4a5 5 0 0 0-5 5h14a5 5 0 0 0-5-5zm-2-3a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <svg width="24" height="24" id="24x24_view">
        <path
          d="M12 18c3.53 0 6.45-1.96 8.84-6-2.46-4.04-5.4-6-8.84-6-3.45 0-6.38 1.96-8.84 6 2.39 4.04 5.31 6 8.84 6zM1.13 11.5C3.98 6.55 7.63 4 12 4c4.38 0 8.02 2.55 10.87 7.5a1 1 0 0 1 0 .99C20.11 17.45 16.46 20 12 20c-4.46 0-8.1-2.55-10.87-7.51a1 1 0 0 1 0-.99zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
          fill="var(--text-primary)"
        />
      </svg>
      <svg width="32" height="32" id="32x32_chat">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M9 3h14a7 7 0 0 1 7 7v9a7 7 0 0 1-7 7H9.48a6 6 0 0 0-4.24 1.76l-1.53 1.53A1 1 0 0 1 2 28.6V10a7 7 0 0 1 7-7"
            fill="var(--text-primary)"
          />
          <path
            d="M16 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            fill="#FFF"
          />
        </g>
      </svg>
      <svg width="32" height="32" id="32x32_chat_new-message">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M28 10a6 6 0 0 1-5.91-7H9a7 7 0 0 0-7 7v18.59a1 1 0 0 0 1.7.7l1.54-1.53A6 6 0 0 1 9.48 26H23a7 7 0 0 0 7-7v-9l-.02-.34c-.62.21-1.29.34-1.98.34"
            fill="var(--text-primary)"
          />
          <path
            d="M16 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            fill="#FFF"
          />
          <path d="M28 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="#F24141" />
        </g>
      </svg>
      <svg width="24" height="24" id="icon-ArrowSmallRightGrey">
        <path
          d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
          fill="var(--text-color-secondary)"
        />
      </svg>
      <symbol id="icon-SliderArrowLeftIcon" viewBox="0 0 14 24">
        <g fill="none">
          <polyline strokeWidth="2" points="13 1 2 12 13 23" />
        </g>
      </symbol>
      <symbol id="icon-SliderArrowRightIcon" viewBox="0 0 14 24">
        <g fill="none">
          <polyline strokeWidth="2" points="1 1 12 12 1 23" />
        </g>
      </symbol>
    </defs>
  </svg>
)

export default Sprite
