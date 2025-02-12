// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { z } from 'zod';

import { NextApiRequest, NextApiResponse } from 'next/types';

const responseSchema = z.object({
  data: z.object({
    label: z.string(),
  }),
});

const error = z.object({
  code: z.string(),
});
const responseErrorScheme = z.object({
  errors: z.array(error),
});
type ResponseData = z.infer<typeof responseSchema | typeof responseErrorScheme>;
const testResponse = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  res.statusCode = 200;
  fetch('http://localhost:9999/bar', {
    method: 'GET',
    headers: myHeaders,
  })
    .then(r => {
      console.log('r: ', r.body);
      console.log('r: ', r.headers);

      r.json()
        .then(data => {
          console.info('data => ', data);
          const aux = responseSchema
            .parseAsync(data)
            .then(success => {
              console.info('aux success: ', success);
              res.json(success);
            })
            .catch(errorSchema => {
              console.error('errorSchema: ', errorSchema);
              res.json({
                data: {
                  label: 'error',
                },
              });
            });

          console.info('aux: ', aux);
        })
        .catch(e => {
          console.error('error: ', e);
        });
    })
    .catch(e => {
      console.error('error: ', e);
    });
};

export default testResponse;
