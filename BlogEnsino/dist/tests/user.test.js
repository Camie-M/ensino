"use strict";
const request = require('supertest');
const app = require('../server');
describe('User API', () => {
    it('should create a new user', async () => {
        const userData = { username: 'Test User', role: 'admin' };
        const response = await request(app).post('/users').send(userData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(userData));
    });
    //   test('should update a user', async () => {
    //       const user = await request(app)
    //         .post('/users/create-user')
    //         .send({ username: 'Test User', role: 'teacher' });
    //       const updatedUserData = { username: 'Updated Name', role: 'student' };
    //       await request(app)
    //       .put(`/users/edit-user/${user.body.id}`)
    //       .send(updatedUserData)
    //       .expect(200)
    //       .then((response: any) => {
    //         expect(response.body.username).toBe(updatedUserData.username);
    //         expect(response.body.role).toBe(updatedUserData.role);
    //       });
    //   });
    //   test('should delete a user', async () => {
    //     const user = await request(app)
    //       .post('/users/create-user')
    //       .send({ username: 'Test User', role: 'teacher' });
    //       const response = await request(app).delete(`/users/delete-user/${user.body.id}`);
    //       expect(response.statusCode).toBe(200);
    //       expect(response.body.message).toBe('User deleted successfully');
    // });
});
