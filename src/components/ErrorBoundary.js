import React, { Component } from "react";
import { View, Text } from "react-native";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToService(error, info.componentStack);
  }

  render() {
    return this.state.hasError ? <Text>Error!!!</Text> : this.props.children;
  }
}

export default ErrorBoundary;
