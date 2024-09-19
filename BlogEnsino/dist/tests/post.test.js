"use strict";
const requestPost = require('supertest');
const appPost = require('../server');
describe('Post API', () => {
    it('should create a new user', async () => {
        const postData = { title: 'Title', text: 'Text', userId: 'id' };
        const response = await requestPost(appPost).post('/posts/create-post').send(postData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(postData));
    });
    test('should update a post', async () => {
        const post = await requestPost(appPost)
            .post('/posts/create-post')
            .send({ title: 'Title', text: 'Text', userId: 'id' });
        const updatedPostData = { title: 'Updated Title', text: 'Updated Text', userId: 'id' };
        await requestPost(appPost)
            .put(`/posts/edit-post/${post.body.id}`)
            .send(updatedPostData)
            .expect(200)
            .then((response) => {
            expect(response.body.title).toBe(updatedPostData.title);
            expect(response.body.text).toBe(updatedPostData.text);
        });
    });
    test('should delete a post', async () => {
        const post = await requestPost(appPost)
            .post('/posts/create-post')
            .send({ title: 'Title', text: 'Text', userId: 'id' });
        const response = await requestPost(appPost).delete(`/posts/delete-post/${post.body.id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Post deleted successfully');
    });
});
