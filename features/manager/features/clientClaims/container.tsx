// import React from 'react'
// import { connect } from 'react-redux'
// import { AnyAction, Dispatch } from 'redux'

// const Container = (WrappedComponent: any) => {
//   return class extends React.Component<any> {
//     public render() {
//       return (
//         <WrappedComponent {...this.props} />
//       )
//     }
//     private onFormSubmit = async (data: Omit<CloseClaimRequest, 'id'>) => {
//       const { closeClaim, claimId, modal } = this.props
//       const completeData = { ...data, id: claimId }
//       await closeClaim(completeData)
//       modal.close()
//     }
//   }
// }

// const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
//   closeClaim: (data: CloseClaimRequest) =>
//     dispatch(closeClaimAction(data) as any),
// })

// const mapState = (state: State) => ({
//   claimId: getClaimId(state),
// })

// export default connect(mapState, mapDispatch)(Container) as any
