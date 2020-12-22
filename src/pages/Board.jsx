import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import AnswersInsert from './AnswersInsert'
import AnswersListDynamic from './AnswersListDynamic'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        if (!this.props.location.state) {
          window.location.href = './Init'
        }
        this.setState({ isLoading: true, playername: this.props.location.state.name })

        await api.getAllQuestions().then(questions => {
            this.setState({
                questions: questions.data.data
            })
        })

        console.log('deleting answers')
        await api.deleteAllAnswers().then(() => {
          this.setState({
              isLoading: false
          })
        })
    }

    setNewQuestionsList =  () => {
        const { questions } = this.state
        questions.reverse();
        questions.pop();
        questions.reverse();
        this.setState({questions});
        console.log (questions)
    }

    render() {
        const { questions, playername } = this.state
        console.log('TCL: QuestionsList -> render -> questions', questions)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
        ]

        let showTable = true
        if (!questions.length) {
            showTable = false
        }

        return (
          <div style={{textAlign : 'center'}}>
            <br/>
            <br/>
            {showTable && (
              <div style={{textAlign : 'center', alignItems : 'center'}}>
                <img id="cardback" onClick={() => {document.getElementById('questionbody').style.display = ''; document.getElementById('youranswer').style.display = ''; document.getElementById('cardback').style.display = 'none'; document.getElementById("okbtn").style.display = ''}} style={{cursor: 'pointer'}} src="https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/2b/Card_back-Random.png" />
                <div style={{ width : '180px', height : '230px', border : '2px solid black', textAlign : 'center', margin: '0 auto', display : 'none'}} id="questionbody">
                  <h2>
                    {questions[0].name}
                  </h2>
                </div>
                <br />
                <div id="youranswer" style={{display : 'none'}}>
                  <AnswersInsert answergiver={this.state.playername} />
                </div>
                <AnswersListDynamic nextquestion={this.setNewQuestionsList} />
              </div>
              )
            }
          
          </div>  
        )
    }
}

export default Board