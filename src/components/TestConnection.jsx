import React, { useState, useEffect } from 'react';

const TestConnection = () => {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [apiStatus, setApiStatus] = useState('Checking...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test the root endpoint
    fetch('https://unigooo.onrender.com/')
      .then(response => {
        setBackendStatus(`Connected (Status: ${response.status})`);
        return response.text();
      })
      .then(data => {
        console.log('Root endpoint response:', data);
      })
      .catch(error => {
        setBackendStatus('Failed to connect');
        console.error('Root endpoint error:', error);
      });

    // Test the API endpoint
    fetch('https://unigooo.onrender.com/api/auth/check-user/test@example.com')
      .then(response => {
        setApiStatus(`Connected (Status: ${response.status})`);
        return response.json();
      })
      .then(data => {
        console.log('API endpoint response:', data);
      })
      .catch(error => {
        setApiStatus('Failed to connect');
        console.error('API endpoint error:', error);
      });
  }, []);

  const testSignup = async () => {
    try {
      setError(null);
      const response = await fetch('https://unigooo.onrender.com/api/auth/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactMethod: 'email',
          email: 'test@example.com'
        }),
      });
      
      const data = await response.json();
      console.log('Send verification response:', data);
      alert(`Response: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Test error:', error);
      setError(error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Backend Connection Test</h1>
        
        <div className="mb-4">
          <p className="font-semibold">Backend Status:</p>
          <p className={`${backendStatus.includes('Connected') ? 'text-green-600' : 'text-red-600'}`}>
            {backendStatus}
          </p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold">API Status:</p>
          <p className={`${apiStatus.includes('Connected') ? 'text-green-600' : 'text-red-600'}`}>
            {apiStatus}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <button
          onClick={testSignup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Test Send Verification
        </button>
      </div>
    </div>
  );
};

export default TestConnection;
