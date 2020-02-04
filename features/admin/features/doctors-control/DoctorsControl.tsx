import React, { useState } from 'react'

import * as s from './DoctorsControl.css'

import Layout from '../../organisms/Layout'
import { useApi } from '@app/lib/api/useApi'
import { CreateDoctorRequest } from '@app/lib/api/request/CreateDoctorRequest'
import { User } from '@app/models/Users/User'
import { AddDoctorForm } from './components/add-doctor-form'

export const DoctorsControl = () => {
  const [doctor, setDoctor] = useState<User | null>(null)
  const [password, setPassword] = useState<string>('')
  const [emptyPassword, setEmptyPassword] = useState<boolean>(false)

  const api = useApi()

  const createDoctor = (data: any) => {
    if (!password) {
      setEmptyPassword(true)
      return
    }
    setEmptyPassword(false)

    const finalData = {
      ...data,
      rawPassword: password,
      boardUsername: data.boardUsername.replace('@', ''),
    }

    api
      .createDoctor(finalData as CreateDoctorRequest)
      .then(setDoctor)
      .catch(error => console.log('create doctor error', error))
  }

  const generatePassword = () => {
    api
      .generateDoctorsPassword()
      .then(setPassword)
      .then(() => setEmptyPassword(false))
      .catch(error => console.log('generate password error:', error))
  }

  return (
    <>
      <Layout>
        <div className={s.doctorsControl}>
          {!!doctor && (
            <div className={s.success}>
              <h2>Врач добавлен</h2>
              <p>
                логин: {doctor.login}
                <br />
                пароль: {password}
              </p>
            </div>
          )}
          <AddDoctorForm
            password={password}
            emptyPassword={emptyPassword}
            createDoctor={createDoctor}
            generatePassword={generatePassword}
          />
        </div>
      </Layout>
    </>
  )
}
