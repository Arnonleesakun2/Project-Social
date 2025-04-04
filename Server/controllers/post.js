const Post = require("../models/Post");
const User = require("../models/User");
const Favorite = require("../models/Favorite");

exports.listPost = async (req, res, next) => {
  try {
    const clerkId = req.query.id;
    const posts = await Post.find()
      .populate({
        path: "userId",
        select: "name lastname imageId image",
      })
      .sort({ createdAt: -1 });
    if (!clerkId) {
      return res.json({ result: posts });
    }
    const favorites = await Favorite.find({ userId: clerkId });
    const favoritePostIds = favorites.map((fav) => fav.postId.toString());
    const result = posts.map((post) => ({
      ...post.toObject(),
      isFavorite: favoritePostIds.includes(post._id.toString()),
    }));

    return res.json({ result });
  } catch (err) {
    next(err);
  }
};

exports.myPost = async (req, res, next) => {
  try {
    const { id } = req.user;
    const userId = await User.findOne({ clerkId: id });
    const result = await Post.find({ userId: userId._id })
      .populate({
        path: "userId",
        select: "name lastname imageId image",
      })
      .sort({ createdAt: -1 });
    const postsWithFavorites = await Promise.all(
      result.map(async (post) => {
        const favoriteCount = await Favorite.countDocuments({ postId: post._id });
        return {
          ...post.toObject(),
          favoriteCount, 
        };
      })
    );

    res.json({ result: postsWithFavorites });
  } catch (err) {
    next(err.message);
  }
};

exports.postDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.find({ userId: id })
      .populate({
        path: "userId",
        select: "name lastname imageId image",
      })
      .sort({ createdAt: -1 });
    console.log(result);
    res.json({ result: result });
  } catch (err) {
    next(err.message);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { description, image } = req.body;
    const clerkId = req.user.id;
    const user = await User.findOne({ clerkId });
    if (!user) return res.status(400).json({ msg: "Please create a profile first." });
    const newPost = new Post({
      userId: user._id,
      description,
      imageId: image?.public_id || "",
      image: image?.secure_url || "",
    });
    await newPost.save();
    const populatedPost = await Post.findById(newPost._id).populate({
      path: "userId",
      select: "name lastname image",
    });

    res.json({ message: "Create Post Successfully", result: populatedPost });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post.deleteOne({
      _id: id,
    });
    const favoriteResult = await Favorite.deleteMany({ postId: id });
    res.json({ message: "Delete Post Successfully", result: result });
  } catch (err) {
    next(err);
  }
};

exports.addOrRemoveFavoite = async (req, res, next) => {
  try {
    const { postId, isFavorite } = req.body;
    const clerkId = req.user.id;
    console.log(postId, isFavorite, clerkId);

    let result;
    if (isFavorite) {
      result = await Favorite.deleteOne({
        userId: clerkId,
        postId: postId,
      });
    } else {
      result = await Favorite.create({
        userId: clerkId,
        postId: postId,
      });
    }
    res.json({
      message: isFavorite ? "Remove Fovorite" : "Add Favorite",
      result: result,
    });
  } catch (err) {
    next(err);
  }
};
