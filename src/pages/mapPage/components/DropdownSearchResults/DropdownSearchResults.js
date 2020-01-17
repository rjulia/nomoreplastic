import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./DropdownSearchResults.scss";
class DropdownSearchResults extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render() {
    const { list, toggleItem } = this.props
    const { listOpen, headerTitle } = this.state
    return (
      <div className="dd-wrapper">
        <span className="dd-label">{headerTitle}</span>
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
            ? <FaAngleUp size="10" />
            : <FaAngleDown size="10" />
          }
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item, id) => (
            <li
              className="dd-list-item"
              key={id}
              onClick={() => {
                toggleItem(item)
                this.toggleList()
              }}
            >{item}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default DropdownSearchResults
