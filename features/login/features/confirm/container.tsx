import React from 'react'

const Container = (WrappedComponent: any) => (props: any) => <WrappedComponent {...props} />

export default Container
