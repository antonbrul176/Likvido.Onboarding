import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };

  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    const { placeholder = '',data=['Nej, start automatisk','[Ja, kræver godkendelse'] } = this.props;
    const options = [];

    data.forEach(el => {
      options.push({value: el, label: el})
    });

    return (
      <Select
        name="form-field-name"
        placeholder={placeholder}
        value={selectedOption}
        onChange={this.handleChange}
        
        options={options}
      />
    );
  }
}
