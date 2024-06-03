import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import App from './App'
import './index.css';

Amplify.configure({
    "auth": {
      "user_pool_id": "us-west-2_ntFDeWOum",
      "aws_region": "us-west-2",
      "user_pool_client_id": "78o14qurjeod6eijc69v4jf7ld",
      "identity_pool_id": "us-west-2:90d530ea-e20a-41d2-847b-6b02b75bff97",
      "standard_required_attributes": [
        "email"
      ],
      "username_attributes": [
        "email"
      ],
      "user_verification_types": [
        "email"
      ],
      "password_policy": {
        "min_length": 8,
        "require_numbers": true,
        "require_lowercase": true,
        "require_uppercase": true,
        "require_symbols": true
      },
      "unauthenticated_identities_enabled": true
    },
    "data": {
      "url": "https://rk6scgelnrasnb3jeoskp5s2dm.appsync-api.us-west-2.amazonaws.com/graphql",
      "aws_region": "us-west-2",
      "default_authorization_type": "AWS_IAM",
      "authorization_types": [
        "AMAZON_COGNITO_USER_POOLS"
      ],
      "model_introspection": {
        "version": 1,
        "models": {
          "Todo": {
            "name": "Todo",
            "fields": {
              "id": {
                "name": "id",
                "isArray": false,
                "type": "ID",
                "isRequired": true,
                "attributes": []
              },
              "content": {
                "name": "content",
                "isArray": false,
                "type": "String",
                "isRequired": false,
                "attributes": []
              },
              "createdAt": {
                "name": "createdAt",
                "isArray": false,
                "type": "AWSDateTime",
                "isRequired": false,
                "attributes": [],
                "isReadOnly": true
              },
              "updatedAt": {
                "name": "updatedAt",
                "isArray": false,
                "type": "AWSDateTime",
                "isRequired": false,
                "attributes": [],
                "isReadOnly": true
              }
            },
            "syncable": true,
            "pluralName": "Todos",
            "attributes": [
              {
                "type": "model",
                "properties": {}
              },
              {
                "type": "auth",
                "properties": {
                  "rules": [
                    {
                      "allow": "public",
                      "provider": "iam",
                      "operations": [
                        "create",
                        "update",
                        "delete",
                        "read"
                      ]
                    }
                  ]
                }
              }
            ],
            "primaryKeyInfo": {
              "isCustomPrimaryKey": false,
              "primaryKeyFieldName": "id",
              "sortKeyFieldNames": []
            }
          }
        },
        "enums": {},
        "nonModels": {}
      }
    },
    "version": "1"
  })
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider>
    <App />
</ThemeProvider>);