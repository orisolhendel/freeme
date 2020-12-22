import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, 
        PlayersList, PlayersInsert, PlayersUpdate,  
        QuestionsList, QuestionsInsert, QuestionsUpdate,  
        AnswersList, AnswersInsert, AnswersUpdate,
        Board, Init } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
                <Route path="/players/list" exact component={PlayersList} />
                <Route path="/players/create" exact component={PlayersInsert} />
                <Route
                    path="/players/update/:id"
                    exact
                    component={PlayersUpdate}
                />
                <Route path="/questions/list" exact component={QuestionsList} />
                <Route path="/questions/create" exact component={QuestionsInsert} />
                <Route
                    path="/questions/update/:id"
                    exact
                    component={QuestionsUpdate}
                />
                <Route path="/answers/list" exact component={AnswersList} />
                <Route path="/answers/create" exact component={AnswersInsert} />
                <Route
                    path="/answers/update/:id"
                    exact
                    component={AnswersUpdate}
                />
                <Route path="/board" exact component={Board} />
                <Route path="/init" exact component={Init} />
            </Switch>
        </Router>
    )
}

export default App