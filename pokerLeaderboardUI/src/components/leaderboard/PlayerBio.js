import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPlayer } from '../../actions/leaderboardActions.js';
import { Form, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class PlayerBio extends React.Component{
    constructor() {
        super();

        this.state = {
            player: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelFormChange = this.handelFormChange.bind(this);
        this.handelSetPlayerCancel = this.handelSetPlayerCancel.bind(this);
        this.handelDeletePlayer = this.handelDeletePlayer.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({player: nextProps.player});
    }

    /**
     * This method has logic to handel create/edit requests
     * @param {*} event 
     */
    handleSubmit(event){
        
        event.preventDefault();

        const isCreate = this.state.player.playerID ? false : true;
        
        const request = this.state.player.playerID ? 'PUT' : 'POST';
        const url = this.state.player.playerID ? '/api/editPlayer/' : '/api/createPlayer/';

        fetch(url, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(this.state.player), //this.state.player,
            method: request
        }).then(data => {
            this.props.getPlayers();

            if(isCreate){
                //@NOTE @TODO - have to do this to clear out the add player form after a create player call.
                // If I keep the form populated, I don't have the playerID. That means that if I do "set Player",
                // I would be making another createPlayer call instead of an editPlayer call. 
                this.props.selectPlayer({});
            }
        }).catch(err => {
            return err
        });
        
    }

    /**
     * Update the player state after a form input changes
     * @param {*} event 
     */
    handelFormChange(event){
        const iPlayer = this.state.player;
        iPlayer[event.target.name] = event.target.value
        this.setState({player: iPlayer});
    }

    /**
     * Handel onClick from Cancel button 
     * @param {*} event 
     */
    handelSetPlayerCancel(event){
        this.props.selectPlayer({});
    }

    /**
     * Handel deletion of a player
     * @param {*} playerID 
     */
    handelDeletePlayer(playerID){
        if(playerID){
            fetch('/api/deletePlayer/', {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({playerID: playerID}), //this.state.player,
                method: 'POST'
            }).then(data => {
                this.props.selectPlayer();
                this.props.getPlayers();
            }).catch(err => {
                return err
            });
        }
    }

    /**
     * Render "Delete Player" button only on exsisting players
     * @param {*} player 
     */
    renderDeleteBtn(player) {
        if(player.playerID) {
            return (
                <Col smOffset={2} sm={1}>
                    <Button bsStyle="danger" onClick={() => this.handelDeletePlayer(player.playerID)}>Delete Player</Button>
                </Col>
            )
        }
    }

    render() {
        if(this.state.player) {
            return (
                <div>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId="formHorizontalFirstName">
                            <Col componentClass={ControlLabel} sm={2}>
                                First Name
                            </Col>

                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    pattern="[A-Za-z\s]{2,}"
                                    required
                                    value={this.state.player.firstName || ''}
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={this.handelFormChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalLastName">
                            <Col componentClass={ControlLabel} sm={2}>
                                Last Name
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    pattern="[A-Za-z\s]{2,}"
                                    required
                                    value={this.state.player.lastName || ''}
                                    placeholder="Last Name"
                                    name="lastName"
                                    onChange={this.handelFormChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalWinnings">
                            <Col componentClass={ControlLabel} sm={2}>
                                Winnings
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="number" min="1"
                                    step="any"
                                    required
                                    value={this.state.player.winningAmount || ''}
                                    placeholder="Winnings"
                                    name="winningAmount"
                                    onChange={this.handelFormChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalCountry">
                            <Col componentClass={ControlLabel} sm={2}>
                                Country
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    pattern="[A-Za-z\s]{2,}"
                                    required
                                    value={this.state.player.country || ''}
                                    placeholder="Country"
                                    name="country"
                                    onChange={this.handelFormChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={1}>
                                <Button onClick={ () => this.props.selectPlayer()}>Cancel</Button>
                            </Col>

                            {this.renderDeleteBtn(this.state.player)}


                            <Col smOffset={2} sm={1}>
                                <Button bsStyle="primary" type="submit">Set Player</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        }else{
            return (
                <h4>Click on player row to edit...</h4>
            );
        }
    }

}


function mapStateToProps(state) {
    return {
        player: state.activePlayer
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectPlayer: selectPlayer}, dispatch);
 }

export default connect(mapStateToProps, matchDispatchToProps)(PlayerBio);
