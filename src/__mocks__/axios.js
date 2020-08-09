// export default {
//     get: jest.fn(() => Promise.resolve({data:{}}))
// }

export default {
    get:jest.fn().mockResolvedValue({data:{}})
}