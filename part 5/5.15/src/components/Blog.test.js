import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import Blog from './Blog'


describe('stuff', () => {
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

  const mockUpdate = jest.fn()

  test('renders content', () => {
    const component = render(<Blog blog={blog}/>)
    
    expect(component.container).toHaveTextContent(title)
    expect(component.container).toHaveTextContent(author)
    expect(component.container.url).toBeUndefined()
    expect(component.container.likes).toBeUndefined()
  })
  
  test('renders content when toggled', () => {
    const component = render(<Blog blog={blog}/>)
  
    const button = component.getByText('view')
    fireEvent.click(button)
    expect(component.container).toHaveTextContent('www.test.com')
    expect(component.container).toHaveTextContent('1')
  })

  test('liked twice = called twice', () => {
    const component = render(<Blog blog={blog} updateBlog={mockUpdate}/>)
    
    const likeButton = component.getByText('like')
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)
    expect(mockUpdate.mock.calls).toHaveLength(2)
  })

})
