import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

export default function Rate({reviewScore}) {
  return (
    <>
      <MDBProgress>
        <MDBProgressBar bgColor='success' width={reviewScore.clean*10} valuemin={0} valuemax={100} />
      </MDBProgress>

      <br />

      <MDBProgress>
        <MDBProgressBar bgColor='info' width={reviewScore.location*10} valuemin={0} valuemax={100} />
      </MDBProgress>

      <br />

      <MDBProgress>
        <MDBProgressBar bgColor='warning' width={reviewScore.service*10} valuemin={0} valuemax={100} />
      </MDBProgress>

      <br />

      <MDBProgress>
        <MDBProgressBar bgColor='danger' width={reviewScore.convenient*10} valuemin={0} valuemax={100} />
      </MDBProgress>

      <br />

      <MDBProgress>
        <MDBProgressBar bgColor='debug' width={reviewScore.worthTheMoney*10} valuemin={0} valuemax={100} />
      </MDBProgress>
    </>
  );
}