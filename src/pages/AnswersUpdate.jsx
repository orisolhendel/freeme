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

class AnswersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            playername: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPlayername = async event => {
        const playername = event.target.value
        this.setState({ playername })
    }

    handleUpdateAnswer = async () => {
        const { id, name, playername } = this.state
        const payload = { name, playername }

        await api.updateAnswerById(id, payload).then(res => {
            window.alert(`Answer updated successfully`)
            this.setState({
                name: '',
                playername: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const answer = await api.getAnswerById(id)

        this.setState({
            name: answer.data.data.name,
            playername: answer.data.data.playername,
        })
    }

    render() {
        const { name, playername } = this.state
        return (
            <Wrapper>
                <Title>Create Answer</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Playername: </Label>
                <InputText
                    type="text"
                    value={playername}
                    onChange={this.handleChangeInputPlayername}
                />

                <Button onClick={this.handleUpdateAnswer}>Update Answer</Button>
                <CancelButton href={'/answers/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default AnswersUpdate