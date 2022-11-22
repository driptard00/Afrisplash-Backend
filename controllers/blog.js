const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const joi = require("joi")

/**
 * @author Name <Email>
 * @description Sample Code Snippet  
 * @route `/api/v1/blog/test`
 * @access Public
 * @type GET
 */
 exports.SampleCode = asyncHandler(async (req, res, next) => {
  const data = {
    message: 'hello from blog endpoint'
  }
  res.status(200).json({
    success: true,
    data: data
  })
});

