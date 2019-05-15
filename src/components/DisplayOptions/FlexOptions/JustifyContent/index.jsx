const React = require('react')
const Dropdown = require('../../../Dropdown/index.jsx')
const Option = require('../../../Dropdown/Option/index.jsx')

class JustifyContent extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <Dropdown
        title='Justify Content'
        value={value}
        onChange={e => onChange('justifyContent', e)}
      >
        <Option value='flex-start' name='Flex start' isDefault />
        <Option value='flex-end' name='Flex end' />
        <Option value='center' name='Center' />
        <Option value='space-between' name='Space between' />
        <Option value='space-around' name='Space around' />
        <Option value='space-evenly' name='Space evenly' />
      </Dropdown>
    )
  }
}

module.exports = JustifyContent
