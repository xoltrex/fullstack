import {gql} from '@apollo/client'

export const ADD_BOOK = gql`
  mutation AddBook(
    $author: String!
    $genres: [String!]!
    $published: Int!
    $title: String!
  ) {
    addBook(
      author: $author
      genres: $genres
      published: $published
      title: $title
    ) {
      id
    }
  }
`

export const EDIT_AUTHOR = gql`
  mutation EditAuthor(
    $name: String!
    $newBorn: Int!
  ) {
    editAuthor(
      name: $name
      newBorn: $newBorn
    ) {
      born
    }
  }
`