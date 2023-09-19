import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const  camps = [
  {   "id": "1",
      "name":"Mount Ulap",
      "description":"one of the most famous hikes in lorem ipsum delectant bonjour",
      "compressedImage":"/Assets/Camp Images/Compressed Images/MountUlap.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/MountUlap.png"
  },

  {   "id":"2",
      "name":"Calagaus Islands",
      "description":"A paradise of islands that can lorem ipsum deletcta nyen through mansts",
      "compressedImage":"/Assets/Camp Images/Compressed Images/CalaguasIsland.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/CalagusIslands.jpg"
  },

  {   "id":"3",
      "name":"Onay Beach",
      "description":"This is one of the best beach camping grounds. Lorem ipsum delectant",
      "compressedImage":"/Assets/Camp Images/Compressed Images/OnayBeach.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/OnayBeach.jpg"
  },

  {   "id":"4",
      "name":"Seven Sisters Waterfall",
      "description":"The seven sisters lorem ipsum delectantes oremus mesam que quod qui pro",
      "compressedImage":"/Assets/Camp Images/Compressed Images/SevenSistersWaterfall.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/SevenSistersWaterfall.jpg"
  },

  {   "id":"5",
      "name":"Latik Riverside",
      "description":"Lorem ipsum delectum Latik Riverside many critas ubi semper vobiscum nunc",
      "compressedImage":"/Assets/Camp Images/Compressed Images/LatikRiverside.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/LatikRiverside.jpg"
  },

  {   "id":"6",
      "name":"Buloy Springs",
      "description":"Lorem ipsum delectants Buloy Springs isone of the most amazing places to be.",
      "compressedImage":"/Assets/Camp Images/Compressed Images/BuloySprings.jpg",
      "fullImage":"/Assets/Camp Images/High Quality Images/BuloySprings.jpg"
  }
]

const campgrounds = () => {
  return (
    <div className='flex'>
      {camps.map((camp) => {
        return (
          <div className='m-1'>
            <Link href={`/campgrounds/${camp.id}`}>
              <Image
                alt={camp.name}
                width={300}
                height={250}
                src={camp.compressedImage}
              />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default campgrounds