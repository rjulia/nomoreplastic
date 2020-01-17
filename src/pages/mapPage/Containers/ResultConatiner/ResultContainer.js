import React from 'react';
import { connect } from "react-redux";
import { cleanLocationFiltered } from "../../../../services/redux/actions/search.actions";

import { ButtonBack } from "../../../../components";

const ResultContainer = ({ onCleanLocationFiltered }) => {

  const handelCloseFiltered = () => {
    onCleanLocationFiltered()
  }
  return (
    <div>
      <ButtonBack text="Go Back" onClick={handelCloseFiltered} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onCleanLocationFiltered: params => dispatch(cleanLocationFiltered(params))
})

export default connect(null, mapDispatchToProps)(ResultContainer)
