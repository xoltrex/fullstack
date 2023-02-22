import {gql} from '@apollo/client'

export const GET_ALL_AUTHORS = gql`
  query GetAllAuthors {
    allAuthors {
      bookCount
      born
      name
    }
  }
`
export const GET_ALL_BOOKS = gql`
query GetAllBooks {
  allBooks {
    author
    published
    title
  }
}
`