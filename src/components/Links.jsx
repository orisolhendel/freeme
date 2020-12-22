import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Double Dot Gaming (c)
                </Link>
                <Collapse>
                    <List>
                        {/*}
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                        */}
                        <Item>
                            <Link to="/init" className="nav-link">
                                Enter Game
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/board" className="nav-link">
                                Start Game
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/players/list" className="nav-link">
                                List Players
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/players/create" className="nav-link">
                                Create Player
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/questions/list" className="nav-link">
                                List Questions
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/questions/create" className="nav-link">
                                Create Question
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/answers/list" className="nav-link">
                                List Answers
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/answers/create" className="nav-link">
                                Create Answer
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links