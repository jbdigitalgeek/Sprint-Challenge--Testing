const server = require("./server.js");
const request = require("supertest");
const db = require("../data/dbConfig.js");

describe('GET ("/games") ', () => {
    it('returns status code 200', async () => {
        let res = await request(server).get('/games');
        expect(res.status).toBe(200);
    });

    it('returns JSON data', async () => {
        const res = await request(server).get('/games');
        expect(res.type).toBe('application/json'); 
    });


    it('is functional', async () => {
        const res = await request(server).get('/games');
        expect(typeof res.body).toEqual('object');
    });
});


 describe('GET ("/games")', () => {
    it('returns status code 200', async () => {
        let res = await request(server).get('/games');
        expect(res.status).toBe(200);
    });

     it('returns an array', async () => {
        let res = await request(server).get('/games');
        expect(Array.isArray(res.body)).toBeTruthy();
    });

     it('returns an object array', async () => {
        let res = await request(server).get('/games');
        for (i = 0; i < res.body.length; i++) { 
            expect(typeof res.body[i]).toEqual('object');
        };
    });
});

 /* Games POST testing */
describe('POST ("/games")', () =>{
    it('returns 201 with correct data', async () => {
        const body = {
            title: 'The most dangerous game',
            genre: 'Bad editing',
            releaseYear: 2133
        };
        let res = await request(server).post('/games').send(body);
        expect(res.status).toBe(201);
    });

     it('returns an object', async () => {
        const body = {
            title: 'Pacman',
            genre: 'Arcade',
            releaseYear: 1980
        };
        let res = await request(server).post('/games').send(body);
        expect(typeof res.body).toEqual('object');
    });

     it('returns 422 with incorrect data', async () => {
        const body = {
            title: 'Pacman',
            releaseYear: 1980
        };
        let res = await request(server).post('/games').send(body);
        expect(res.status).toBe(422);
    });
}); 