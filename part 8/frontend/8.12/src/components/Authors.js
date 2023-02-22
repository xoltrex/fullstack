import {useMutation, useQuery} from '@apollo/client'
import {useState} from 'react'

import {GET_ALL_AUTHORS} from '../graphql/queries'
import {EDIT_AUTHOR} from '../graphql/mutations'

const Authors = (props) => {
  const {data, loading} = useQuery(GET_ALL_AUTHORS)

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [editAuthor] = useMutation(EDIT_AUTHOR)

  if (!props.show || loading) return null
  const authors = data.allAuthors


  const handleSubmit = async (event) => {
    event.preventDefault()
    editAuthor({variables: {name, newBorn: +year}})

    setName('')
    setYear('')
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>change birth year</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <select required
            value={name}
            placeholder={"name"}
            onChange={({target}) => setName(target.value)}
          ><option value="" disabled hidden>
            select an author
          </option>
          {authors.map((a) => (
            <option key={a.id}>{a.name}</option>
          ))}
          </select>
        </label>
        <br/>
        <label>
          <input required
            type="number"
            value={year}
            placeholder={"year"}
            onChange={({target}) => setYear(target.value)}
          ></input>
        </label>
        <br/>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default Authors
