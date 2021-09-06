<<<<<<< HEAD
//logic of routes
=======
//handler for our routes(logic)
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts= async(req, res)=> {
    try {
        const postMessages= await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }

    
<<<<<<< HEAD
};
=======
    // res.send('THIS WORKS!');
}
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415

export const createPost= async(req, res)=> {
    // res.send('Post Creation');

    const post = req.body;
    const newPost= new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }


<<<<<<< HEAD
};
=======
}
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415

export const updatePost = async(req,res) =>{
    const{id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const updatedPost= await PostMessage.findByIdAndUpdate(_id, post,{new:true} );

    res.json(updatedPost);



<<<<<<< HEAD
};
=======
}
>>>>>>> 7005b3a4e25b1024eeab6a00283eeaa223985415

export const deletePost = async (req, res) => {
    const{id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostMessage.findByIdAndRemove(id);
    console.log('DELeTE!!!');
    res.json({message: 'Post deleted successfully'});


}

export const likePost = async (req, res) => {
    const{id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    const post = await PostMessage.findById(id);
    const updatedPost= await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, {new: true})
    res.json(updatedPost);
}