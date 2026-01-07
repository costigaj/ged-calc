const Ably = require('ably');

exports.handler = async function(event, context) {
    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Get API key from environment variable
    const apiKey = process.env.ABLY_API_KEY;
    
    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Ably API key not configured' })
        };
    }

    try {
        const client = new Ably.Rest(apiKey);
        
        // Generate a token request that the client can use
        const tokenRequest = await client.auth.createTokenRequest({
            capability: { 'ged-calculator': ['publish', 'subscribe'] }
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(tokenRequest)
        };
    } catch (error) {
        console.error('Error creating token:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate token' })
        };
    }
};
