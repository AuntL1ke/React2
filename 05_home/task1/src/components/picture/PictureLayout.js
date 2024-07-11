import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function PictureLayout() {
  let picArray = 
  [
    {
      "id": 1,
      "name": "Wheatfield under Thunderclouds (1890)",
      "artist": "Vincent van Gogh",
      
      "description": "In the last weeks of his life, Van Gogh completed a number of impressive paintings of the wheatfields around Auvers. This outspread field under a dark sky is one of them.",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKt-1fGVhVVzBwfohGGCnjKaJxAXttV8MRuw&s"
    },
    {
      "id": 2,
      "name": "Tree Roots (1890)",
      "artist": "Vincent van Gogh",
     
      "description": "This painting seems at first sight to consist of a jumble of bright colours and fanciful abstract forms. Only after that do you realise that it shows a slope with tree trunks and roots. These are trees used for timber, growing in a marl quarry. Such quarries could be found around Auvers (FR). The work was not entirely completed. That explains its unfinished appearance. It is probably Van Gogh's very last painting. Andries Bonger, the brother-in-law of Vincent's brother Theo, described it in a letter: 'The morning before his death, he had painted a sous-bois [forest scene], full of sun and life.'",
      "url": "https://assets.vangoghmuseum.nl/ac2cab77-8251-4309-9f97-12b6a74151a6?w=800&format=webp&c=9b55618edcf6d694e296effb12c2fe39b46ce86603fff8a47f59f8cae99115a7"
    },
    {
      "id": 3,
      "name": "The Jetty of Boulogne-sur-Mer (1868)",
      "artist": "Vincent van Gogh",
      
      "description": "The painting was a gift for his brother Theo and sister-in-law Jo, who had just had a baby son, Vincent Willem. In the letter announcing the new arrival, Theo wrote: ‘As we told you, we’ll name him after you, and I’m making the wish that he may be as determined and as courageous as you.’ Unsurprisingly, it was this work that remained closest to the hearts of the Van Gogh family. Vincent Willem went on to found the Van Gogh Museum.",
      "url": "https://uploads7.wikiart.org/images/edouard-manet/jetty-at-boulogne-1868.jpg!Large.jpg"
    },
    {
      "id": 4,
      "name": "Almond Blossom (1890)",
      "artist": "Vincent van Gogh",
  
      "description": "Beyond its visual appeal, “Almond Blossoms” carries profound symbolism. Almond trees typically bloom in early spring, symbolizing renewal and the promise of new life. This symbolism was particularly significant for van Gogh during this period of his life, as he sought to embrace hope and happiness amidst his struggles.",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg"
    },
    {
      "id": 5,
      "name": "The Pink Peach Tree (1888)",
      "artist": "Vincent van Gogh",
  
      "description": "Van Gogh painted many fruit orchards during his first weeks in Arles (FR). There is an earlier, nearly identical version of this painting, which Van Gogh had completed in one sitting. ‘I’d worked on a no. 20 canvas in the open air in an orchard — ploughed lilac field, a reed fence — two pink peach trees against a glorious blue and white sky. Probably the best landscape I’ve done’,",
      "url": "https://c8.alamy.com/comp/ED8Y8A/vincent-van-gogh-the-pink-peach-tree-1888-oil-on-canvas-van-gogh-museum-ED8Y8A.jpg"
    }
  ];

  let [pics, setPics] = useState(picArray);

  return (
    <Outlet context={[pics, setPics]}/>
  );
}