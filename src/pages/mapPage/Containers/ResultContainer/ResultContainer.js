import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { cleanPosition } from "../../../../services/redux/actions/settings.actions";
import { cleanLocation } from "../../../../services/redux/actions/search.actions";

import { ButtonBack } from "../../../../components";
import { LocationDetail, EventDetail } from '../../components';

const Wrapper = styled('div')`
  margin-top: 40px
`

const ResultContainer = ({ onCleanLocationSelect, id, id_event }) => {

  const handelCloseFiltered = () => {
    onCleanLocationSelect()
  }
  return (
    <Wrapper>
      <ButtonBack text="Go Back" onClick={handelCloseFiltered} />
      {id && <LocationDetail />}
      {id_event && <EventDetail />}
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    location: state.searchs.location,
    id: state.searchs.id,
    id_event: state.searchs.id_event,
  }
}

const mapDispatchToProps = dispatch => ({
  onCleanLocationSelect: () => dispatch(cleanLocation()),
  onCleanLocation: () => dispatch(cleanPosition())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)