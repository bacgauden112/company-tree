import { ApolloDriver } from '@nestjs/apollo';
import { INestApplication } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { join } from 'path';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { result } from './result';

const gql = '/graphql';
const query = `
fragment SubcompanyFields on CompaniesResponse{
  id
  name
  parentId
  createdAt
  cost
  children {
    id
    name
    parentId
    createdAt
  }
}

fragment CompaniesRecursive on CompaniesResponse {
  children {
    ...SubcompanyFields
    children {
      ...SubcompanyFields
      children {
        ...SubcompanyFields
      }
    }
  }
}

query {
  companies {
    ...SubcompanyFields
    ...CompaniesRecursive
  }
}
`;

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe(gql, () => {
    describe('companies', () => {
      it('should get the company array', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query,
          })
          .expect(200)
          .expect((res) => {
            // console.log('res.body.data.companies', res.body.data.companies);
            expect(res.body.data.companies).toEqual(result);
          });
      });
    });
  });
});
