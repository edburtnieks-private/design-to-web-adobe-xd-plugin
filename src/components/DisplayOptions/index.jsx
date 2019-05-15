const React = require('react')
const Dropdown = require('../Dropdown/index.jsx')
const Option = require('../Dropdown/Option/index.jsx')

class DisplayOptions extends React.Component {
  render() {
    const { value, onChange, children } = this.props

    return (
      <div style={{ display: 'flex' }}>
        <Dropdown
          title='Display'
          value={value}
          onChange={onChange}
        >
          <Option value='flex' name='Flex' />
        </Dropdown>

        <div>
          {children}
        </div>
      </div>
    )
  }
}

module.exports = DisplayOptions
