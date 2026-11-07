import http from 'http';

http.get('http://localhost:4321/src/components/SignatureTool.tsx', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    if (res.statusCode !== 200) {
      console.log('Response body:', data);
    } else {
      console.log('First 500 chars of response:', data.slice(0, 500));
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
