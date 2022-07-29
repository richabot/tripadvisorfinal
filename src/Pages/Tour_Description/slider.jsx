
// import React from 'react';
// import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Carousel() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState(1)

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '10px' });

//   // These are the images used in the slide
//   const cards = [
//     'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/01/a1/13.jpg',
//     'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/48/ea/c2.jpg',
//     'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/65/44/cf/blive-electric-bike-tours.jpg?w=1200&h=-1&s=1',
//   ];
//   return (
//     <Box
//         ml={4}
//       position={'relative'}
//       height={'490px'}
//       width={'550px'}
//       bg={'#F3F7FB'}
//       overflow={'hidden'}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//          <IconButton
//         marginTop={'0px'}
//         aria-label="left-arrow"
//         colorScheme="whiteAlpha"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt />
//         </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         marginTop={'0px'}
//         aria-label="right-arrow"
//         colorScheme="whiteAlpha"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((url, index) => (
//           <Box
//             key={index}
//             height={500}
//             // rounded={10}
//             width={800}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${url})`}  
//           >
//             {/* <img width='100%' height='500px' src={url} alt=''/> */}
//           </Box>
          
//         ))}
//       </Slider>
//     </Box>
//   );
// }