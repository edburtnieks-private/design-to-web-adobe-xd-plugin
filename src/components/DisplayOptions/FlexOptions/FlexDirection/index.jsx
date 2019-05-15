const React = require('react')
const Dropdown = require('../../../Dropdown/index.jsx')
const Option = require('../../../Dropdown/Option/index.jsx')

class FlexDirection extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <Dropdown
        title='Flex Direction'
        value={value}
        onChange={e => onChange('flexDirection', e)}
      >
        <Option value='row' name='Row' isDefault />
        <Option value='column' name='Column' />
        <Option value='row-reverse' name='Row reverse' />
        <Option value='column-reverse' name='Column reverse' />
      </Dropdown>
    )
  }
}

module.exports = FlexDirection
