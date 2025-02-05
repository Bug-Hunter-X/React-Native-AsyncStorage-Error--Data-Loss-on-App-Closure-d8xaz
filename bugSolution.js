This improved code uses promises and `try...catch` blocks to handle potential errors and ensures data persistence even if the app is closed during the AsyncStorage operation.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully!');
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', JSON.parse(value));
    } else {
      console.log('No data found');
    }
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

storeData('user', JSON.stringify({ name: 'John Doe' })).then(() => getData('user')); 
```