import React, { useState } from 'react'
import { Title } from '../../../../components';
import Card from "../Card/Card";
import { Collection, Waste, Private, Clothes, Community } from "../../../../assets/icons";
import "./SelectCollectionPoints.scss"


const SelectCollectionPoints = () => {

  const [slided, setSlided] = useState(false)

  const handleSlide = (state) => {
    setSlided(state)
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
          <Card text="Community Green Stations">
            <Community width="85" />
          </Card>
          <Card text="Organisations and Collection Points">
            <Collection width="85" />
          </Card>
          <Card text="Clothes Recycling Bank">
            <Clothes width="85" />
          </Card>
          <Card text="Waste Separation Bin">
            <Waste width="85" />
          </Card>
          <Card text="Private Collector and Recycler">
            <Private width="85" />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SelectCollectionPoints
