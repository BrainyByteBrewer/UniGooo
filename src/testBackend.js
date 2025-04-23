// This is a simple test file to check if backend is accessible
// run this in your browser console to test the connection

function testBackendConnection() {
  console.log('Testing backend connection...');
  
  // Test the root endpoint
  fetch('https://unigooo.onrender.com/')
    .then(response => {
      console.log('Root endpoint status:', response.status);
      return response.text();
    })
    .then(data => {
      console.log('Root endpoint response:', data);
    })
    .catch(error => {
      console.error('Root endpoint error:', error);
    });
  
  // Test the API endpoint
  fetch('https://unigooo.onrender.com/api/auth/check-user/test@example.com')
    .then(response => {
      console.log('API endpoint status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('API endpoint response:', data);
    })
    .catch(error => {
      console.error('API endpoint error:', error);
    });
}

//  copy this function and run it in your browser console
// to test if your backend is accessible
console.log('Copy and run testBackendConnection() in your browser console to test the backend connection');
