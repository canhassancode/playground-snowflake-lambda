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
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify({ statement }),
    });

    const responseStatusMap = new Map<string, object>([
      ["200", response.json],
      ["403", { status: "403", body: "Unauthorised Bearer token." }],
      ["404", { status: "404", body: "URL/endpoint not found." }],
    ]);
    return responseStatusMap.get(String(response.status));
  } catch (error) {
    return error;
  }
};
