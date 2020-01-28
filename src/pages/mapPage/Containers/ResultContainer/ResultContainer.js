import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { cleanFilter } from "../../../../services/redux/actions/search.actions";
import { ButtonBack } from "../../../../components";
import { LocationResult } from '../../components';

const Wrapper = styled('div')`
  margin-top: 40px
`

const ResultContainer = ({ onCleanLocationFiltered, location }) => {

  const handelCloseFiltered = () => {
    onCleanLocationFiltered()
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
  onCleanLocationFiltered: params => dispatch(cleanFilter(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)