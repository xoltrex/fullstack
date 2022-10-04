import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const title = 'test'
  const author = 'test'
  const url = 'www.test.com'
  const likes = 1

  const blog = {
    title: title,
    author: author,
    url: url,
    likes: likes
  }

  const component = render(<Blog blog={blog}/>)
  
  expect(component.container).toHaveTextContent(title)
  expect(component.container).toHaveTextContent(author)
  expect(component.container.url).toBeUndefined()
  expect(component.container.likes).toBeUndefined()
})