const React = require('react')
const Dropdown = require('../Dropdown/index.jsx')
const Option = require('../Dropdown/Option/index.jsx')

class TagOptions extends React.Component {
  render() {
    const { value, onChange } = this.props

    return (
      <Dropdown
        title='Tag'
        value={value}
        onChange={onChange}
      >
        <Option value='div' name='Content division container (div)' isDefault />
        <Option value='span' name='Inline container (span)' />
        <Option value='p' name='Paragraph (p)' />
        <Option value='a' name='Link (a)' />
        <Option value='h1' name='Heading 1 (h1)' />
        <Option value='h2' name='Heading 2 (h2)' />
        <Option value='h3' name='Heading 3 (h3)' />
        <Option value='h4' name='Heading 4 (h4)' />
        <Option value='h5' name='Heading 5 (h5)' />
        <Option value='h6' name='Heading 6 (h6)' />
      </Dropdown>
    )
  }
}

module.exports = TagOptions
