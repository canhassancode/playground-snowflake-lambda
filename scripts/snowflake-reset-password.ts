export const resetSnowflakePassword = async (
  email: string,
  accountIdentifier: string,
  bearerToken: string
) => {
  const api = `https://${accountIdentifier}.snowflakecomputing.com/api/v2/statements/`;
  const statement = `ALTER USER IF EXISTS "${email}" RESET PASSWORD`;
  const snowflakeQuery = await snowflakeQueryApi(api, statement, bearerToken);
  console.log(snowflakeQuery);
};

const snowflakeQueryApi = async (
  api: string,
  statement: string,
  bearerToken: string
) => {
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${bearerToken}`,
    },
    body: JSON.stringify({ statement }),
  });
  return response;
};
