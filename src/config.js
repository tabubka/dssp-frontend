const config = {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "dev-dssp-s3-uploads4f6eb0fd-3vpcaeurm0vi",
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "YOUR_API_GATEWAY_URL",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_q90hgahxQ",
      APP_CLIENT_ID: "7q29414s15pepa6ed6shd3vv7r",
      IDENTITY_POOL_ID: "eu-west-1:97e8f465-306d-4540-9dde-e7a2c6ea4883",
    },
  };
  
  export default config;