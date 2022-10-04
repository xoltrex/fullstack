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

})
