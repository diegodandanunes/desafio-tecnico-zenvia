export default {
    get: jest.fn(() => Promise.resolve({data: [{char_id: Math.random(), occupation: []}]}))
}