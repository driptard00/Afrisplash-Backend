const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const joi = require("joi");
const Comment = require('../model/comment');
const post = require('../model/post')

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



/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to create a new comment under a post  
 * @route `/comment/create/:postid`
 * @access Public
 * @type POST
 */
 exports.postNewComment = asyncHandler(async (req, res, next) => {
  const {postID, body, name, email, image} = req.body;
  const data = await Comment.create({
    _post: postID,
    body:body,
    name:name,
    email:email,
    profile_pic:image,
    replies:[],
    like:0
  })
  res.status(201).json({
    success: true,
    data: data
  })
});

/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to create a new reply under a comment  
 * @route `/comment/reply/:id`
 * @access Public
 * @type POST
 */
 exports.postNewReply = asyncHandler(async (req, res, next) => {
  const { comment, name } = req.body
  const data = await Comment.findByIdAndUpdate(req.body.id, {$push: {replies: {
    comment : comment,
    name : name
  }}})
  res.status(201).json({
    success: true,
    data: data
  })
});


/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to edit a comment  
 * @route `/comment/edit/:id`
 * @access Public
 * @type PUT
 */
 exports.editComment = asyncHandler(async (req, res, next) => {
  const { body } = req.body
  const data = await Comment.findByIdAndUpdate( req.body.id, {
    body: body
  })
  res.status(200).json({
    success: true,
    data: data
  })
});

/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to delete a comment  
 * @route `/comment/delete/:id`
 * @access Public
 * @type DELETE
 */
 exports.deleteComment = asyncHandler(async (req, res, next) => {
  const data = await Comment.findOneAndDelete( {_id: req.body.id}, {body:{_id: req.params.id}})
  res.status(200).json({
    success: true,
    data: data
  })
});

/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to delete a reply  
 * @route `/comment/reply/delete/:id`
 * @access Public
 * @type DELETE
 */
 exports.deleteReply = asyncHandler(async (req, res, next) => {
  const data = await Comment.findByIdAndUpdate( req.body.id, {$pull: {replies:{_id: req.params.id}}})
  res.status(200).json({
    success: true,
    data: data
  })
});

/**
 * @author Jehoshaphat Egbe <jehoshaphategbe1@gmail.com>
 * @description to get all comments  
 * @route `/comment/:postid`
 * @access Public
 * @type GET
 */
 exports.getAllComments = asyncHandler(async (req, res, next) => {
  const data = await Comment.find({}).select({
    email:0
  })
  res.status(200).json({
    success: true,
    data: data
  })
});

