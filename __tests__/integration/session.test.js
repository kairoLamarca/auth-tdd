const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({name: 'Kairo', email: 'kairo@gmail.com', password_hash: '123456'});

        console.log(user);

        expect(user.email).toBe('kairo@gmail.com');
    })

    // it('should receive JWT token when authenticated with valid credentials', () => {

    // })
});
