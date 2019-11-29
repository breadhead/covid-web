export const getColumns = () => {
  return [
    {
      title: 'Количество звёзд',
      dataIndex: 'starsCount',
      key: 'starsCount',
      sorter: (a: any, b: any) => {
        return a.starsCount.length - b.starsCount.length
      },
    },
    {
      title: 'Количество ответов',
      dataIndex: 'answersCount',
      key: 'answersCount',
      sorter: (a: any, b: any) => {
        return a.answersCount - b.answersCount
      },
    },
    {
      title: 'Доля',
      dataIndex: 'proportion',
      key: 'proportion',
      sorter: (a: any, b: any) => {
        return (
          Number(a.proportion.split('.')[0]) -
          Number(b.proportion.split('.')[0])
        )
      },
    },
  ]
}
