import React from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPlayer } from '../../actions/leaderboardActions.js';
import PlayerBio from '../../components/leaderboard/PlayerBio';


class LeaderboardPage extends React.Component {
    constructor(props) {
        super(props);
        
        // set init state
        this.state = {
            players: props.players
		};
		
		this.getPlayers = this.getPlayers.bind(this);
    }

    componentDidMount() {
        fetch('/api/rankings').then(results => {
            return results.json();
        }).then(data => {
            this.setState({players: data});
        }).catch(err => {
            return err
        });
	}
	
	/**
	 * Make dataq call to get a list of players for the leaderboard
	 */
	getPlayers(){
		fetch('/api/rankings').then(results => {
            return results.json();
        }).then(data => {
            this.setState({players: data});
        }).catch(err => {
            return err
        });
	}

    render() {
		const addPlayerRowStyle = {
			marginBottom: '15px'
		};

		const tableCursorStyle = {
			cursor: 'pointer'
		};
		  
        return (
            <Grid>
				<Row style={addPlayerRowStyle}>
					<Col md={1}>
						<Button  bsStyle="primary" onClick={() => this.props.selectPlayer({})}>Add Player</Button>
					</Col>
				</Row>

				<Row className="show-grid">
					<Col md={6}>
						<Table responsive hover={true}>
							<thead>
								<tr>
									<th>Rank</th>
									<th>Player</th>
									<th>Winnings</th>
									<th>Native of</th>
								</tr>
							</thead>
							<tbody>
								{this.state.players.map((player, i) => {
									return (
										<tr 
											style={tableCursorStyle}
											key={i}
											onClick={() => this.props.selectPlayer(player)}>
											<td>{player.rank}</td>
											<td>{player.firstName} {player.lastName}</td>
											<td>{player.winningAmount}</td>
											<td>{player.country}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Col>

					<Col md={6}>
						<PlayerBio getPlayers={this.getPlayers}/>
					</Col>
				</Row>
			</Grid>
        );
    };
}


function mapStateToProps(state) {
   return {
	   players: state.players
   }
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({selectPlayer: selectPlayer}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LeaderboardPage);