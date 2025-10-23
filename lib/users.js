// Simple in-memory user database
// In production, use a real database like MongoDB, PostgreSQL, etc.

const users = []

export function createUser(email, password) {
  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    throw new Error('User already exists')
  }
  
  const user = {
    id: Date.now().toString(),
    email,
    password, // In production, this should be hashed
    createdAt: new Date().toISOString()
  }
  
  users.push(user)
  return user
}

export function findUserByEmail(email) {
  return users.find(u => u.email === email)
}

export function findUserById(id) {
  return users.find(u => u.id === id)
}

// For demo purposes, create a test user
// Email: test@example.com
// Password: test123
import bcrypt from 'bcryptjs'
const hashedPassword = bcrypt.hashSync('test123', 10)
users.push({
  id: '1',
  email: 'test@example.com',
  password: hashedPassword,
  name: 'Test User',
  createdAt: new Date().toISOString()
})
