import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './App.css';
import { Grid, PageHeader, Row, Col } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="App">
				<Grid>
					<Row className="show-grid">
						<Col>
							<PageHeader className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<h1 className="App-title">Poker Leaderboard</h1>
							</PageHeader>
						</Col>
					</Row>
					
					<div>
						{this.props.children}
					</div>
				</Grid>
			</div>
        );
    }
}

App.propTypes = {
    children: PropTypes.array.isRequired
};

export default App;