import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import mongoose from 'mongoose';


const { expect } = chai;
chai.use(chaiHttp);

// const request = supertest(app);
const url = '/api/v1/user/1';



describe('Check Seed', () => {
  after(async () => {
    await mongoose.disconnect();
  })
  
  it('It should confirm weather database was properly seeded',  async () => {
    const res = await chai.request(app).get(url);
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
    expect(res.body.user.email).to.equal('shainning0@so-net.ne.jp');
  });
});