import Input from '@app/ui/molecules/Input'
import { Button, Form as AntForm, Icon } from 'antd'
import * as React from 'react'
import { Field as FinalField, Form as FinalForm } from 'react-final-form'
import styles from './Form.css'

// const Test = () => <Form
//   onSubmit={onSubmit}
//   validate={(values) => {
//     const errors = {}
//     if (!values.username) {
//       errors.username = 'Required'
//     }
//     if (!values.password) {
//       errors.password = 'Required'
//     }
//     return errors
//   }}
//   render={({
//     submitError,
//     handleSubmit,
//     reset,
//     submitting,
//     pristine,
//     values,
//   }) => (
//       <form onSubmit={handleSubmit}>
//         <Field name="username">
//           {({ input, meta }) => (
//             <div>
//               <label>Username</label>
//               <input {...input} type="text" placeholder="Username" />
//               {(meta.error || meta.submitError) &&
//                 meta.touched && <span>{meta.error || meta.submitError}</span>}
//             </div>
//           )}
//         </Field>
//         <Field name="password">
//           {({ input, meta }) => (
//             <div>
//               <label>Password</label>
//               <input {...input} type="password" placeholder="Password" />
//               {meta.error && meta.touched && <span>{meta.error}</span>}
//             </div>
//           )}
//         </Field>
//         {submitError && <div className="error">{submitError}</div>}
//         <div className="buttons">
//           <button type="submit" disabled={submitting}>
//             Log In
//             </button>
//           <button
//             type="button"
//             onClick={reset}
//             disabled={submitting || pristine}
//           >
//             Reset
//             </button>
//         </div>
//         <pre>{JSON.stringify(values, 0, 2)}</pre>
//       </form>
//     )}
// />

const FormItem = AntForm.Item

class Form extends React.Component {

  public render() {

    return (
      <FinalForm
        onSubmit={(values) => {
          console.log(values)

        }}
        render={({ handleSubmit }) => (
          <AntForm
            onSubmit={handleSubmit}
            className={styles.Form}
            layout="vertical"
          >
            <h1 className={styles.title}>Войти на сайт</h1>
            <Input required name="login" type="text" label="Логин" />
            <Input required name="password" type="password" label="Пароль" />

            <FormItem>
              <Button

                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </FormItem>
          </AntForm>
        )}
      />
    )
  }
}

export default Form
