import React from 'react';
import Loader from 'react-loader-spinner'

export function Spinner ({ status }) {

  return (
    <div className={'spinner_container'}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={120}
        width={120}
        visible={status}
      />
    </div>
  )
}