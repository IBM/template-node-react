'use strict';

/*
 © Copyright IBM Corp. 2019
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var app = require('../server/server'),
    expect = require('chai'),
    supertest = require('supertest')(app);
const assert = require('assert');


var expect = require('chai').expect;
var http = require('http');

// Below code demonstrates using various methods of testing
describe('Testing Server', function() {
  let test_server;
  this.timeout(0);

  it('Public endpoint returns "Hello!"', function(done){

    supertest
        .get("/")
        .expect(200)
        .end(done);

  });

  it('Health endpoint shows status up', function(done){
    supertest.get('/health')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(response => {
          assert(response.body.status, 'UP')
        })
        .end(done);
  });

});