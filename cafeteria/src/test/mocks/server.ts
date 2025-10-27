// src/test/mocks/server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers' // Importa tus handlers 


export const server = setupServer(...handlers)