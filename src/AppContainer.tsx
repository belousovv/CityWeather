import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import { StateType } from './redux/store'
import { selectError } from './redux/weather-selector'

// Types

type Mstp = {
    isError: boolean
}

// Component

const AppContainer: React.FC<Mstp> = (props) => {
    return <App isError={props.isError} />
}

const mapStateToProps = (state: StateType) => ({
    isError: selectError(state),
});

export default connect<Mstp, {}, {}, StateType>(mapStateToProps, {})(AppContainer);
