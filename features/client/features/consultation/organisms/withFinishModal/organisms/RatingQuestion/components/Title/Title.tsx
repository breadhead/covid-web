import * as React from 'react'

export interface TitleProps {
  styles: { [key: string]: string }
  modalType: string
}

export const Title: React.SFC<TitleProps> = ({ styles, modalType }) => {
  const renderTitle = () => {
    switch (modalType) {
      case 'questions':
        return (
          <>
            Мы рады, что ваша консультация прошла успешно
          </>
        )
      case 'story':
        return <>Спасибо за ваш отзыв</>
      default:
        return null
    }
  }

  return <h1 className={styles.title}>{renderTitle()}</h1>
}
