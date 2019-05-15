const React = require('react')
const defaultValues = require('./defaultValues')
const TagOptions = require('./components/TagOptions/index.jsx')
const DisplayOptions = require('./components/DisplayOptions/index.jsx')
const FlexDirection = require('./components/DisplayOptions/FlexOptions/FlexDirection/index.jsx')
const AlignItems = require('./components/DisplayOptions/FlexOptions/AlignItems/index.jsx')
const JustifyContent = require('./components/DisplayOptions/FlexOptions/JustifyContent/index.jsx')
const Footer = require('./components/Footer/index.jsx')
const api = require('./api')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.selection.items[0].guid,
      styles: {},
      parent: props.selection.items[0].parent.guid,
      loading: true
    }
  }

  async componentDidMount() {
    const itemData = await api.getItemData(this.state.id)
    this.setState(itemData)
    this.setState({ ...this.state, loading: true })
  }

  handleTagChange(e) {
    this.setState({
      ...this.state,
      tag: e.target.value
    })
  }

  handlePropertyChange(property, e) {
    this.setState({
      ...this.state,
      styles: {
        ...this.state.styles,
        [property]: e.target.value
      }
    })
  }

  async handleSubmit() {
    await api.sendItemData(this.state)
    closeDialog()
  }

  closeDialog() {
    this.props.dialog.close()
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <h1>Design To Web</h1>

        {this.state.loading ?
          <React.Fragment>
            <TagOptions
              value={this.state.tag || defaultValues.textTag}
              onChange={e => this.handleTagChange(e)}
            />

            <DisplayOptions
              value={'' || this.state.styles.display}
              onChange={(property, e) => this.handlePropertyChange(property, e)}
            >
              {this.state.styles.display === 'flex' &&
                <React.Fragment>
                  <FlexDirection
                    value={this.state.styles.flexDirection || defaultValues.flexDirection}
                    onChange={(property, e) => this.handlePropertyChange(property, e)}
                  />

                  <AlignItems
                    value={this.state.styles.alignItems || defaultValues.alignItems}
                    onChange={(property, e) => this.handlePropertyChange(property, e)}
                  />

                  <JustifyContent
                    value={this.state.styles.justifyContent || defaultValues.justifyContent}
                    onChange={(property, e) => this.handlePropertyChange(property, e)}
                  />
                </React.Fragment>
              }
            </DisplayOptions>
          </React.Fragment>
          : 'Loading . . .'}

        <Footer onCancelButtonClick={() => this.closeDialog()} />
      </form>
    )
  }
}

module.exports = App
