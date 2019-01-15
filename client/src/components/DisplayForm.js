import React, { Component } from "react";
import {
  TextInput,
  Form,
  DropdownV2,
  Tile,
  InlineNotification
} from "carbon-components-react";
import "./patterns.scss";

class DisplayForm extends Component {
  constructor(props) {
    super(props);
    const defaultData = [
      { label: "Name", value: "John Doe", type: "textinput" },
      { label: "Address", value: "123 Main Street", type: "textinput" },
      { label: "City", value: "Anytown", type: "textinput" },
      { label: "State", value: ["TX"], type: "dropdown" },
      { label: "ZipCode", value: "12345", type: "textinput" },
      { label: "Country", value: ["United States"], type: "dropdown" }
    ];
    this.state = {
      data: props.data || defaultData,
      showDescription: props.showDescription || false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) this.setState({ data: nextProps.data });
  }

  render() {
    const data = this.state.data;
    const showDescription = this.state.showDescription;
    return (
      <div className="bx--grid">
        {showDescription && (
          <div className="bx--row pattern-description">
            <div className="bx--col-xs-12">
              <div
                data-notification
                class="bx--inline-notification  bx--inline-notification--success pattern-title-description-widget"
                role="alert"
              >
                <div class="bx--inline-notification__details">
                  <svg
                    class="bx--inline-notification__icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <div class="bx--inline-notification__text-wrapper">
                    <p class="bx--inline-notification__title">Display Form</p>
                    <p class="bx--inline-notification__subtitle">
                      Displays a model object as a form in a read only display.
                    </p>
                  </div>
                </div>
                <button
                  data-notification-btn
                  class="bx--inline-notification__close-button"
                  type="button"
                  aria-label="close"
                />
              </div>
              {/* <strong>Description:</strong> Displays a model object as a form in
              a read only display. */}
            </div>
          </div>
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
                        <DropdownV2
                          disabled
                          id={item.label}
                          label={"Select a " + item.label.toLowerCase() + ".."}
                          items={item.value}
                          selectedItem={item.value[0]}
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
export default DisplayForm;
