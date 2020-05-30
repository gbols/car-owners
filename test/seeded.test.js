import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';
import mongoose from 'mongoose';
import { filterList } from './__mock__';


const { expect } = chai;
chai.use(chaiHttp);

const url = '/api/v1/filter';

describe('Test Filter Endpoint', () => {
  after(async () => {
    await mongoose.disconnect();
  })

  it('It should confirm weather database was properly seeded',  async () => {
    const res = await chai.request(app).get('/api/v1/user/1');
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
    expect(res.body.user.email).to.equal('shainning0@so-net.ne.jp');
  });

  
  it('It should work as expected when all fields are supplied',  async () => {
    const allInput = filterList[0];
    const res =  await chai.request(app).post(url).send(allInput);
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
  });

  it('It should work as expected when gender isn\'t supplied ',  async () => {
    const inputNoGender = filterList[1];
    const res = await chai.request(app).post(url).send(inputNoGender);
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
  });

  it('It should work as expected when countries is an empty list',  async () => {
    const inputNoCountry = filterList[2];
    const res = await chai.request(app).post(url).send(inputNoCountry);
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
  });

  it('It should work as expected when colors is an empty list',  async () => {
    const inputNoColor = filterList[3];
    const res = await chai.request(app).post(url).send(inputNoColor);
    expect(res).to.have.status(200);
    expect(res.body.success).to.equals(true);
  });

  it('It should return a text when there is no match',  async () => {
    const randomInput = filterList[3];
    randomInput.gender = 'trans';
    const res = await chai.request(app).post(url).send(randomInput);
    expect(res).to.have.status(404);
    expect(res.body.message).to.equals('No matches found using the provided data');
  });
});