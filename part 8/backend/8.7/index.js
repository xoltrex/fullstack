const {ApolloServer} = require('apollo-server')
const {v1: uuid} = require('uuid')

let authors = [
  {
    name: 'Robert Martin',
    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
    born: 1952,
  },
  {
    name: 'Martin Fowler',
    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
    born: 1963
  },
  {
    name: 'Fyodor Dostoevsky',
    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
    born: 1821
  },
  { 
    name: 'Joshua Kerievsky',
    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
  },
  { 
    name: 'Sandi Metz',
    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
  },
]

let books = [
  {
    title: 'Clean Code',
    published: 2008,
    author: 'Robert Martin',
    id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Agile software development',
    published: 2002,
    author: 'Robert Martin',
    id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
    genres: ['agile', 'patterns', 'design']
  },
  {
    title: 'Refactoring, edition 2',
    published: 2018,
    author: 'Martin Fowler',
    id: "afa5de00-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Refactoring to patterns',
    published: 2008,
    author: 'Joshua Kerievsky',
    id: "afa5de01-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'patterns']
  },  
  {
    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    published: 2012,
    author: 'Sandi Metz',
    id: "afa5de02-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'design']
  },
  {
    title: 'Crime and punishment',
    published: 1866,
    author: 'Fyodor Dostoevsky',
    id: "afa5de03-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'crime']
  },
  {
    title: 'The Demon ',
    published: 1872,
    author: 'Fyodor Dostoevsky',
    id: "afa5de04-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'revolution']
  },
]

const typeDefs = `
type Book {
  title: String!
  published: Int!
  author: String!
  id: ID!
  genres: [String!]!
}

type Author {
  name: String!
  born: Int
  bookCount: Int!
}

type Mutation {
  addBook(
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  ): Book
}

type Mutation {
  editAuthor(
    name: String!,
    newBorn: Int!
  ): Author
}

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }
`

const resolvers = {

  Mutation: {
    addBook: (root, args) => {
      const book = {...args, id: uuid()}
      books.push(book)

    if (!authors.some((a) => a.name === book.author))
      authors.push({id: uuid(), name: book.author})
      return book
    },
    editAuthor: (root, {name, newBorn}) => {
      const author = authors.find((a) => a.name === name)
      if (!author) return null
      const newAuthor = {...author, born: newBorn}

      authors = authors.map((a) => (a.id === author.id ? newAuthor : a))

      return newAuthor
    }
  },

  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (root, {author, genre}) => {
      let x = books
      if (author) x = x.filter((book) => book.author === author)
      if (genre)  x = x.filter((book) => book.genres.includes(genre))
      return x
    },
    allAuthors: () => authors,
  },
  
  Author: {
    bookCount: ({name}) => books.filter((book) => book.author === name).length
  }
}

const server = new ApolloServer({
  typeDefs, resolvers
})


server.listen().then(({url}) => {
  console.log(`Shits running @ ${url}`)
})