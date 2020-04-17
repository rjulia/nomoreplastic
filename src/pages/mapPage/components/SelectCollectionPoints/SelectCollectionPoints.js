import React, { useState } from 'react';
import { connect } from "react-redux";
import { Title } from '../../../../components';
import Card from "../Card/Card";
import { Collection, Waste, Private, Clothes, Community } from "../../../../assets/icons";
import { cleanAndGetLocationFiltered } from "../../../../services/redux/actions/search.actions";
import "./SelectCollectionPoints.scss"
import variables from '../../../../scss/variables.scss';
const SelectCollectionPoints = ({ onLoadLocationFiltered }) => {

  const [slided, setSlided] = useState(false)
  const handleSlide = (state) => {
    setSlided(state)
  }

  const handleSearchLocation = (params) => {
    onLoadLocationFiltered({ category: params })
  }

  return (
    <div className="collection-points">
      <div className="collection-points--header">
        <Title tag="h2" text="Recycling Points" />
        <div className="collection-points--points">
          <span className={slided ? '' : 'active'}
            onClick={() => handleSlide(false)}></span>
          <span className={slided ? 'active' : ''}
            onClick={() => handleSlide(true)}></span>
        </div>
      </div>
      <div className="collection-points--body">
        <div className={slided ? 'collection-points--card slided' : 'collection-points--card '} >
          <Card onClick={() => handleSearchLocation('COMMUNITY')} text="Community Green Stations">
            <Community width="85" fill={variables.community} />
          </Card>
          <Card onClick={() => handleSearchLocation('ORGANIZATIONS')} text="Recycling Organisations and Collection Points">
            <Collection width="85" fill={variables.organitation} />
          </Card>
          <Card onClick={() => handleSearchLocation('CLOTHES')} text="Clothes Recycling Bank">
            <Clothes width="85" fill={variables.clothes} />
          </Card>
          <Card onClick={() => handleSearchLocation('WASTE_SEPARATION')} text="Waste Separation Bin">
            <Waste width="85" fill={variables.waste} />
          </Card>
          <Card onClick={() => handleSearchLocation('COLLECTOR')} text="Private Collector and Recycler">
            <Private width="85" fill={variables.private} />
          </Card>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onLoadLocationFiltered: params => dispatch(cleanAndGetLocationFiltered(params))
})

export default connect(null, mapDispatchToProps)(SelectCollectionPoints) 
