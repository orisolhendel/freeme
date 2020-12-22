import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

import _, { map } from 'underscore'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
class AnswersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answers: [],
            columns: [],
            isLoading: false,
            playersnum : 0,
        }
    }

    refresh = async () => {
        this.setState({ isLoading: true })
        console.log ('getting answers')
        try {
            await api.getAllAnswers().then(answers => {
                this.setState({
                    answers: answers.data.data,
                    isLoading: false,
                })

                console.log (this.state.playersnum )
                console.log (_.size(answers.data.data) )
                if (this.state.playersnum <= _.size(answers.data.data)) {
                    document.getElementById ("nextquest").style.display = '';
                }  
                if (_.size(answers.data.data)) {
                    document.getElementById("playersanswers").style.display = '';
                }
                else {
                    document.getElementById("playersanswers").style.display = 'none';
                }
            }).catch(console.log ('0 found'))
        } catch {
            console.log ('0 found')
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        try {
            await api.getAllAnswers().then(answers => {
                this.setState({
                    answers: answers.data.data,
                })
            }).catch(err => console.log('0 found'))
        } catch (err) {
            console.log('0 found')
        }

        await api.getAllPlayers().then(players => {
            this.setState({
                playersnum: _.size(players.data.data),
                isLoading: false,
            })
        })

        this.interval = setInterval(this.refresh, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextquestion = async () => {
        console.log('deleting answers')
        await api.deleteAllAnswers().then(() => {
            document.getElementById("questionbody").style.display = 'none';
            document.getElementById("cardback").style.display = '';
            document.getElementById("playersanswers").style.display = 'none';
            document.getElementById("okbtn").style.display = 'none';
            document.getElementById("nextquest").style.display = 'none';
            this.props.nextquestion();
        })
    }

    render() {
        const { answers, isLoading } = this.state
        const columns = [
            {
                Header: "Player's Answers: ",
                accessor: 'playername',
                filterable: false,
            },
            {
                Header: "",
                accessor: 'name',
                filterable: false,
            },
        ]

        let showTable = true
        if (!answers.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <div>
                    <div id="playersanswers">
                    {showTable && (
                        <ReactTable
                            data={answers}
                            columns={columns}
                            loading={isLoading}
                            defaultPageSize={10}
                            showPageSizeOptions={false} 
                            showPagination={false}
                            minRows={0}
                        />

                        
                    )}
                    </div>
                    
                    <div id="nextquest" style={{display : 'none'}}>
                        <Button onClick={this.nextquestion}>Next Question</Button>
                    </div>
                </div>
            </Wrapper>

        )
    }
}

export default AnswersList