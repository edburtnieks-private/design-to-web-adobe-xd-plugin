const React = require('react')

class Footer extends React.Component {
  render() {
    const { onCancelButtonClick } = this.props

    return (
      <footer>
        <button onClick={onCancelButtonClick} uxp-variant='warning'>
          Cancel
        </button>

        <button type='submit' uxp-variant='cta'>
          Save
        </button>
      </footer>
    )
  }
}

module.exports = Footer
