import React, { Component } from "react";
import { TextInput, Form, Dropdown, Tile } from "carbon-components-react";
import Header from "../ui-shell/Header";
import "../ui-shell/patterns.scss";

class CompositeForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.props.data  ,
      showDescription: props.showDescription || false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) this.setState({ data: nextProps.data });
  }

  render() {
     let data = [];
     if(this.state.data)
     {
     data = this.state.data;
    
     }
     const showDescription = this.state.showDescription || false;
    return (
      <div className="bx--grid">
        {showDescription && (
          <Header
            title="Display Form"
            subtitle="Displays a model object as a form in a read only display."
          />
        )}
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                {data.map(item => {
                  if (item.type === "textinput") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <TextInput
                          disabled
                          id={item.label}
                          value={item.value}
                          labelText={
                            item.label.charAt(0).toUpperCase() +
                            item.label.slice(1).replace(/([A-Z])/g, " $1")
                          }
                        />
                      </div>
                    );
                  } else if (item.type === "dropdown") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <p className="bx--label left-align">{item.label}</p>
                        <Dropdown
                          disabled
                          id={item.label}
                          label={"Select a " + item.label.toLowerCase() + ".."}
                          items={item.value}
                          selectedItem={item.value}
                        />
                      </div>
                    );
                  } else {
                    return <div />;
                  }
                })}
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default CompositeForm;