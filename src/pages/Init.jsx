import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

import styled from 'styled-components'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AnswersInsert from './AnswersInsert';

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class Init extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            alldone: false
        }
    }

    componentDidMount = async () => {
      console.log('deleting answers')
      await api.deleteAllAnswers().then(() => {
        this.setState({
          alldone:false
        })
      })
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleIncludePlayer = async () => {
        const { name } = this.state
        const payload = { name,  }

        await api.insertPlayer(payload).then(res => {
            this.setState({
                alldone:true
            })
        })
    }

    render() {
        const { name } = this.state
        return (
            <Wrapper>
                <Title>Enter Your Name</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Button onClick={this.handleIncludePlayer} style={{display: this.state.alldone ? 'none' : ''}}>Add Me To The Game</Button>
                
                <br/>
                <h1>&nbsp;</h1>
                <h1>
                  <Link to={{pathname : './board', state : {name}}} style={{display: this.state.alldone ? '' : 'none'}}>Start Game</Link>
                </h1>
            </Wrapper>
        )
    }
}

export default Init