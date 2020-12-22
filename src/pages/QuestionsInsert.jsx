import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

class QuestionsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleIncludeQuestion = async () => {
        const { name } = this.state
        const payload = { name,  }
        
        await api.insertQuestion(payload).then(res => {
            window.alert(`Question inserted successfully`)
            this.setState({
                name: '',
            })
        })
    }

    render() {
        const { name } = this.state
        return (
            <Wrapper>
                <Title>Create Question</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Button onClick={this.handleIncludeQuestion}>Add Question</Button>
                <CancelButton href={'/questions/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuestionsInsert