export default {
    STRIPE_KEY: "pk_test_FMmmQztvXyn64HykozividSF00NlU6hGMF",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-kalan"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://4sway7ccs6.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_6GTFjP7va",
      APP_CLIENT_ID: "2rr7umbqb5gd18evrhosnqn1ri",
      IDENTITY_POOL_ID: "us-east-1:5560775f-2fc8-4486-864d-1510c8d82f41"
    }
  };