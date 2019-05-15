const React = require('react')

class Option extends React.Component {
  render() {
    const { value, name, isDefault } = this.props

    return (
      <option value={value}>{name} {isDefault && '(default)'}</option>
    )
  }
}

module.exports = Option
