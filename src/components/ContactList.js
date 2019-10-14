import React from 'react'
import Contact from './Contact'

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Victor Gonzalez",
    status: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    name: "Gary Watson",
    status: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/96.jpg",
    name: "Tara Flores",
    status: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Samantha Elliott",
    status: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Gail Wilson",
    status: true
  }
]

const ContactList = () => (
  users.map(item => (
    <Contact
      key={item.name}
      name={item.name}
      avatar={item.avatar}
      status={item.status}
    />
  )) 
)

export default ContactList