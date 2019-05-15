const React = require('react')
const Dropdown = require('../../../Dropdown/index.jsx')
const Option = require('../../../Dropdown/Option/index.jsx')

class AlignItems extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <Dropdown
        title='Align Items'
        value={value}
        onChange={e => onChange('alignItems', e)}
      >
        <Option value='stretch' name='Stretch' isDefault />
        <Option value='flex-start' name='Flex start' />
        <Option value='flex-end' name='Flex end' />
        <Option value='center' name='Center' />
        <Option value='baseline' name='Baseline' />
      </Dropdown>
    )
  }
}

module.exports = AlignItems
