const React = require('react')

class Dropdown extends React.Component {
  render() {
    const { title, value, onChange, children } = this.props

    return (
      <label>
        <span>{title}</span>
        <select
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </label>
    )
  }
}

module.exports = Dropdown
