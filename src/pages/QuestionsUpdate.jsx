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

class QuestionsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleUpdateQuestion = async () => {
        const { id, name } = this.state
        const payload = { name }

        await api.updateQuestionById(id, payload).then(res => {
            window.alert(`Question updated successfully`)
            this.setState({
                name: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const question = await api.getQuestionById(id)

        this.setState({
            name: question.data.data.name,
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

                <Button onClick={this.handleUpdateQuestion}>Update Question</Button>
                <CancelButton href={'/questions/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuestionsUpdate