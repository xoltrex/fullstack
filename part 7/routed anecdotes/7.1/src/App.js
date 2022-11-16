import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Menu = () => {
  const padding = {paddingRight: 5}
  return (
    <div>
      <Link style={padding} to='/'>Anecdotes</Link>
      <span>| </span>
      <Link style={padding} to='/create'>Create new</Link>
      <span>| </span>
      <Link style={padding} to='/about'>About</Link>
    </div>
  )
}

const AnecdoteList = ({anecdotes}) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>
    <em>
      An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is 'a story with a point.'
    </em>
    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div style={{'margin-top': '10px'}}>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.
    <br />
    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

const CreateNew = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input name='content' onChange={(e) => setContent(e.target.value)} placeholder='Content' value={content}/>
              </td>
            </tr>
            <tr>
              <td>
                <input name='author' onChange={(e) => setAuthor(e.target.value)} placeholder='Author' value={author}/>
              </td>
            </tr>
            <tr>
              <td>
                <input name='info' onChange={(e)=> setInfo(e.target.value)} placeholder='Url' value={info}/>
              </td>
              <td>
                <button>
                  create
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  return (
    <Router>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/create' element={<CreateNew addNew={addNew} />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />      
    </Router>
  )
}

export default App