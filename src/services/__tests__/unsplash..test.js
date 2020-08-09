import unsplash from '../unsplash';
import mockAxios from 'axios';

const fakeData = [{
    id:1,
    categories:[{title:'Nice Image'}],
    user:{
        name:'Sushicodee'
    },
    urls:{
        small:'https://www.something.com/nice.jpg'
    },
    likes:10,
}]

it('calls axios and returns images',async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data:{
            results:fakeData
        }
    }))

    const images = await unsplash('Nice');
    expect(images).toEqual(fakeData)
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).
    toHaveBeenCalledWith("https://api.unsplash.com/search/photos",
    {"params": {"client_id": process.env.React_APP_UNSPLASH_TOKEN,
    "query": "Nice"}});
})



// export default async (term) => {
//     const response = await new Promise((resolve) => {
//         resolve(fakeData)
//     })
// }