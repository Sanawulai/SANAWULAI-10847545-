import ProductDetailScreen from '../components/shop/Cart/ProductName';

const ProductsDetails = [
  {
    id: 1,
    Product_name: 'limousine',
    price: '3999',
    colour: 'blue',
    size: '50%',
    like: true,
    product_image: require('../assets/img/shop1.jpg'),
    Review:
      'If you are looking for a luxury car, then Limousine is a perfect choice for you. The features in these cars are designed in such a way that they fulfil all the glamorous needs. The outer body is sleek and has luxurious compartments inside, making it one of the expensive vehicles. These cars have a separate area for the driver, and the passengers have a different domain with the partition between the two. Toyota century, Hyundai Equus limousine, Great wall hover, Chrysler 300 limousine are some of the limousines in production.',
  },

  {
    id: 2,
    Product_name: 'Convertibles',
    price: '2999',
    like: false,
    colour:'red',
    size:'50%',
    product_image: require('../assets/img/shop2.jpg'),
    Review:
      'There are many types of sports cars available in the market, like Convertibles, Hot hatch, Grand tourer, Sports saloon, Pony car, etc. Some of the famous cars that are luxurious are Convertibles or Cabriolet. The feature that makes it accessible is that it can be converted into an open-air vehicle. But with modern technology, many improvements have been made. Some convertibles use automatic hydraulic or electrical actuators that make everything intuitive. Ferrari California, Honda S 200, BMW M 3, Mazda M X-5, Volvo C 70 are some well-known convertibles.',
  },
  {
    id: 3,
    product_name: 'Sedans',
    Product_price: '2599',
    like: false,
    size:'50',
    color:'pink',
    product_image: require('../assets/img/shop3.jpg'),
    Review:
      'Subcompact cars, as the name suggests, have a combined area for cargo and interiors with four to five doors. It is a comfortable vehicle that can seat four to five passengers. The length of these cars is typically 3900 mm to 4200mm long. The manufacturers of many companies are producing premium subcompact vehicles that come at an affordable price. Some of the best subcompact cars available in the market are Peugeot 208, Opel Corsa,',
  },

  {
    id: 4,
    product_name: '. Subcompact ',
    product_price: '2529',
    like: true,

    product_image: require('../assets/plant4.png'),
    Review:
      'Subcompact cars, as the name suggests, have a combined area for cargo and interiors with four to five doors. It is a comfortable vehicle that can seat four to five passengers. The length of these cars is typically 3900 mm to 4200mm long. The manufacturers of many companies are producing premium subcompact vehicles that come at an affordable price. Some of the best subcompact cars available in the market are Peugeot 208, Opel Corsa.',
  },
  {
    id: 5,
    product_name: 'MPV/Minivan',
    product_price: '5099',
    like: true,
    image: require('../assets/img/shop5.jpg'),
    Review:
      'Our streets are filled with new technological implementation in the cars inspired by the racing circuits. But the actual performance of such raw power may not be manageable for an average driver. Race cars are developed, keeping in mind only the power output of the vehicle. Engines of these types of cars are modified after every race as they do not last longer than that. Unless you want to start racing or are a racer already, these types of cars are not for your average joe!',
  },
  {
    id: 6,
    product_name: 'Grand Tourer',
    product_price: '50569',
    like: false,
    product_image: require('../assets/img/shop6.jpg/'),
    product_Review:
      'Grand Tourer are popularly used by families that have a lot of kids and need to drive them places comfortably and safely—also called multi-purpose vehicles that have a two-box or one-box configuration that either has four doors or a sliding door for passengers. The interiors are pretty comfortable that have seats in three or two rows that can be reconfigured according to your needs. Some best examples in the market are Citroen Berlingo, Ford C-max',
  },
];

export default ProductDetailScreen;
