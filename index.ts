import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import * as _ from 'lodash';

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
  const max = 999;
  const val = _.random(max);
  const response = {
    statusCode: 200,
    body: `The random value (max ${max}) is: ${val}`,
  };
  return response;
};