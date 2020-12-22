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

class AnswersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleIncludeAnswer = async () => {
        const { name, playername } = this.state
        const payload = { name, playername : this.props.answergiver }

        await api.insertAnswer(payload).then(res => {
            window.alert(`Thanks 4 you Answer!`)
            document.getElementById("okbtn").style.display = 'none';
            this.setState({
                name: '',
                playername: '',
            })
        })
    }

    render() {
        const { name, playername } = this.state
        return (
            <Wrapper>
                <Title>Your Answer:</Title>

                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <InputText
                    type="text"
                    value={playername}
                    onChange={this.handleChangeInputPlayername}
                    style={{display : 'none'}}
                />

                <div id="okbtn">
                    <Button onClick={this.handleIncludeAnswer}>OK..</Button>
                </div>
            </Wrapper>
        )
    }
}

export default AnswersInsert