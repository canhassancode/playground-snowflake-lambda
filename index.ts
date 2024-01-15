import { resetSnowflakePassword } from "./scripts/snowflake-reset-password";

const main = (
  email: string,
  accountIdentifier: string,
  bearerToken: string
) => {
  resetSnowflakePassword(email, accountIdentifier, bearerToken);
};

main(process.argv[2], process.argv[3], process.argv[4]);
