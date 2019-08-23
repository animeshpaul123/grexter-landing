import React, { Component } from "react";
import ReactGA from "react-ga";

const initGA = () => {
  ReactGA.initialize("UA-139536066-1");
};
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const withReactGA = PassedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    static getInitialProps(ctx) {
      if (PassedComponent.getInitialProps)
        return PassedComponent.getInitialProps(ctx);
    }
    componentDidMount() {
      initGA();
      logPageView();
    }

    render() {
      return <PassedComponent {...this.props} />;
    }
  };
};

export default withReactGA;
