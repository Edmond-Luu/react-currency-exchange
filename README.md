# React - Currency Exchange Application

Click [here](https://edmond-luu.github.io/react-currency-exchange) or on the image below to see the app!

[![image](https://user-images.githubusercontent.com/26613209/188021481-c51f13aa-109f-4e08-8591-f8a64a431bcf.png)](https://edmond-luu.github.io/react-currency-exchange)

This React application, made completely from scratch, is a very useful tool for converting to and from different currencies. [Fawaz Ahmed](https://github.com/fawazahmed0) is the author of the [currency conversion API service](https://github.com/fawazahmed0/currency-api#readme) used for this application and I would like to thank him for an outstanding job in creating this amazing API service that is free to use and precisely updated on a daily basis!

## Here are some features of this application: ##
* The app allows users to enter number values from either the top or the bottom number input fields. The conversion values will automatically update accordingly.
* When changing the currency or currencies to convert to/from, the conversion values are automatically updated.
* The conversion values are automatically updated in realtime as the user types.
* The number input fields do not accept values other than numbers, so typing a letter into the field will not display it.

The useEffect hook from React is used as the app needs to determine which input field the user is entering the numbers into.

This application is also responsive, meaning that it will automatically adjust itself for smaller screen sizes for an optimal user experience. For example, by default, on larger screens, the input fields and the currency selection fields are positioned horizontally side-by-side. However, for smaller screen sizes, those fields will instead be positioned vertically top-and-bottom to save space.

<img src="https://user-images.githubusercontent.com/26613209/188021502-ffa3a19c-75bc-49c7-a82a-ab81fbb084d7.png" width=400px/>
