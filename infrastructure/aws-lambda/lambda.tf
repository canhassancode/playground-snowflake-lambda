# data "archive_file" "lambda" {
#   type        = "zip"
#   source_file = "index.ts"
#   output_path = "lambda_function_payload.zip"
# }

# resource "aws_lambda_function" "test_lambda" {
#   filename      = "lambda_function_payload.zip"
#   function_name = "lambda_function_name"
#   role          = aws_iam_role.iam_for_lambda.arn
#   handler       = "index.test"

#   source_code_hash = data.archive_file.lambda.output_base64sha256

#   runtime = "nodejs18.x"

#   environment {
#     variables = {
#       foo = "bar"
#     }
#   }
# }