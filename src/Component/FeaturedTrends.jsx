import React from 'react'
import Trending from './Trending'
import Featured from './Featured'
import { Card } from 'flowbite-react';

function FeaturedTrends() {
  return (
    <div className='containner-box'>
        <div className="grid grid-cols-2 items-center justify-center gap-3">
            <div>
                <Trending/>
            </div>
            {/* <Card>
              
            </Card> */}
            <div>
                <Featured/>
            </div>
        </div>
    </div>
  )
}
export default FeaturedTrends;
