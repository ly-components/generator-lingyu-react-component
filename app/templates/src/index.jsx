import './index.less';
import React from 'react';
class <%= component %> extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.content}</div>;
  }
}
<%= component %>.displayName = '<%= component %>';
<%= component %>.propTypes = {
  /**
   * content of element
   */
  content: React.PropTypes.string
};
<%= component %>.defaultProps = {
    content: 'Hello world'
};
module.exports = <%= component %>;
