import { useEffect } from 'react'

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function useSeo({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | Roché Group`
    document.title = fullTitle
    setMetaTag('description', description)
    setMetaProperty('og:title', fullTitle)
    setMetaProperty('og:description', description)
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', description)
  }, [title, description])
}
