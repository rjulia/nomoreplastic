import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { cleanPosition } from "../../../../services/redux/actions/settings.actions";
import { cleanLocation } from "../../../../services/redux/actions/search.actions";

import { ButtonBack } from "../../../../components";
import { LocationResult } from '../../components';

const Wrapper = styled('div')`
  margin-top: 40px
`

const ResultContainer = ({ onCleanLocationSelect }) => {

  const handelCloseFiltered = () => {
    onCleanLocationSelect()
  }
  return (
    <Wrapper>
      <ButtonBack text="Go Back" onClick={handelCloseFiltered} />
      <LocationResult />
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    location: state.searchs.location
  }
}

const mapDispatchToProps = dispatch => ({
  onCleanLocationSelect: () => dispatch(cleanLocation()),
  onCleanLocation: () => dispatch(cleanPosition())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)