import React from 'react'
import { Creatable } from 'react-select'
import 'react-select/dist/react-select.css'

const myOptions = [
  { value: 'one', text: 'One' },
  { value: 'two', text: 'Two' },
  { value: 'stream', text: 'hello, twitch' },
]

class ReactSelect extends React.Component {
  state = {
    value: [],
  }
  handleChange = value => {
    // на бэкэнд отправляй только value
    this.setState({ value })
  }
  render() {
    const { value } = this.state

    return (
      <Creatable
        name="form-field-name"
        value={value}
        multi
        onChange={this.handleChange}
        options={myOptions}
        labelKey={'text'}
      />
    )
  }
}

export default ReactSelect
